require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-waffle");

require("dotenv").config();

const privateKey = process.env.PRIVATE_KEY;
const url = process.env.URL;
const etherscanKey = process.env.ETHERSCAN_KEY;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      url: url,
      accounts: [`0x${privateKey}`],
    },
  },
  etherscan: {
    apiKey: etherscanKey,
  },
};
