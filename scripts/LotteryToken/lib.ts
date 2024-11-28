import { viem } from "hardhat";

export async function test() {
  const accounts = await viem.getWalletClients();
  const deployer = accounts[0]!;
  console.log(
    `Deployer address ${deployer.account.address}`
  );
  const publicClient = await viem.getPublicClient();
  const contract = await viem.deployContract("LotteryToken");
  const currentBlock = await publicClient.getBlock();
  console.log(
    `Lottery contract deployed at ${contract.address} and block number: ${currentBlock?.number}`
  );
  const [name, symbol, totalSupply, owner, balance] = await Promise.all([
    contract.read.name(),
    contract.read.sybol(),
    contract.read.totalSupply(),
    contract.read.owner(),
    contract.read.balance(deployer.account.address),
  ]);
  console.log(
    `Lottery token details:\nName: ${name}\nSymbol: ${symbol}\nTotal supply: ${totalSupply}\nOwner: ${owner}\nBalance of deployer: ${balance}`
  );
}
