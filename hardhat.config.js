const fs = require('fs');
require('@nomiclabs/hardhat-waffle');

const ALCHEMY_API_KEY = fs.readFileSync('.env.goerli').toString().trim();
const GOERLI_PRIVATE_KEY = fs.readFileSync('.secret.goerli').toString().trim();

module.exports = {
  networks: {
    goerli: {
      url: `https://eth-goerli.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      accounts: [GOERLI_PRIVATE_KEY],
    },
  },
  solidity: '0.8.4',
};
