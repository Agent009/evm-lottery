import * as dotenv from "dotenv";
dotenv.config();

let alchemyAPIKey = process.env.ALCHEMY_API_KEY || "";
export const constants = Object.freeze({
  account: {
    deployerMemonic: process.env.MNEMONIC || "",
    deployerAddress: process.env.DEPLOYER_ADDRESS || "",
    deployerPrivateKey: process.env.PRIVATE_KEY || "",
  },
  contracts: {
    lotteryToken: {
      sepolia: process.env.LOTTERY_TOKEN_SEPOLIA || "",
    },
    lottery: {
      sepolia: process.env.LOTTERY_SEPOLIA || "",
    },
  },
  integrations: {
    alchemy: {
      apiKey: alchemyAPIKey,
      sepolia: `https://eth-sepolia.g.alchemy.com/v2/${alchemyAPIKey}`,
    },
    etherscan: {
      apiKey: process.env.ETHERSCAN_API_KEY || "",
    },
    infura: {
      apiKey: process.env.INFURA_API_KEY || "",
      apiSecret: process.env.INFURA_API_SECRET || "",
    },
    pokt: {
      apiKey: process.env.POKT_API_KEY || "",
    },
  },
});
