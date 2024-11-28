import { viem } from "hardhat";

export async function test() {
  const signers = await viem.getWalletClients();
  const signer = signers[0]!;
  console.log(
    `Signing a message with the account of address ${signer.account.address}`
  );
}
