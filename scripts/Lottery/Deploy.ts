import { viem } from "hardhat";
import { toHex } from "viem";
import { sepolia } from "viem/chains";
import { constants } from "@lib/constants";
import { bootstrap, checkAddress, checkNumber, checkParameters } from "@scripts/utils";

const CONTRACT_NAME = "Lottery";
const MSG_PREFIX = `scripts -> ${CONTRACT_NAME} -> Deploy`;

async function main() {
  // Fetch parameters
  const { publicClient, walletClient, blockNo: latestBlockNo } = await bootstrap(MSG_PREFIX, sepolia);
  const ARG_TOKEN_ADDRESS_IDX = 0;
  const ARG_BLOCK_NO_IDX = 1;
  const ARG_PROPOSAL_NAMES_START_IDX = 2;
  const parameters = process.argv.slice(2);
  // If "env" is provided as the token address, then we get the address from the environment variables.
  const tokenAddressVal = parameters[ARG_TOKEN_ADDRESS_IDX];
  const tokenAddress = tokenAddressVal === "env" ? constants.contracts.lotteryToken.sepolia : tokenAddressVal as `0x${string}`;
  const blockNoVal = parameters[ARG_BLOCK_NO_IDX];
  const blockNo = blockNoVal === "latest" ? latestBlockNo + 1n : blockNoVal;
  checkParameters(parameters, 3, "Please provide the token address, the block no and the proposal names.");
  checkAddress("token", tokenAddress);
  checkNumber("block number", "" + blockNo);

  const proposals: string[] = [];
  
  for (let i = ARG_PROPOSAL_NAMES_START_IDX; i < parameters.length; i++) {
    if (parameters[i] !== undefined && typeof parameters[i] === 'string') {
      // @ts-expect-error ignore
      proposals.push(parameters[i]);
    }
  }

  if (!proposals.length) throw new Error(`scripts -> ${CONTRACT_NAME} -> Deploy -> No proposals were provided.`);
  console.log(`${MSG_PREFIX} -> token`, tokenAddress, "blockNo", blockNo, "proposals", proposals);
  
  // Deploy the contract
  // console.log(`scripts -> ${CONTRACT_NAME} -> Deploy -> deploying contract`);
  const tokenContract = await viem.deployContract(CONTRACT_NAME as never, [
    proposals.map((prop) => toHex(prop, { size: 32 })),
    tokenAddress,
    blockNo
  ], {
    client: {
      public: publicClient,
      wallet: walletClient
    }
  });
  console.log(`${MSG_PREFIX} -> contract deployed to`, tokenContract.address);
}

main().catch((error) => {
  console.log("\n\nError details:");
  console.error(error);
  process.exitCode = 1;
});
