const fs = require('fs');
require('@nomiclabs/hardhat-waffle');

require('dotenv').config();
// eslint-disable-next-line import/no-extraneous-dependencies
require('@nomiclabs/hardhat-ethers');

const { API_URL, PRIVATE_KEY } = process.env;

module.exports = {
  solidity: '0.8.4',
  defaultNetwork: 'sepolia',
  networks: {
    hardhat: {},
    sepolia: {
      url: API_URL,
      accounts: [`0x${PRIVATE_KEY}`],
    },
  },
};
