// const HDWalletProvider = require("@truffle/hdwallet-provider");
// //
// // const fs = require('fs');
// // const mnemonic = fs.readFileSync(".secret").toString().trim();
// const mnemonic =
//   "bottom seven okay purse fragile step exotic wait vessel better tape animal";

module.exports = {
  contracts_build_directory: "./client/src/contracts",
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*",
    },
    // testnet: {
    //   provider: () =>
    //     new HDWalletProvider(
    //       mnemonic,
    //       `https://data-seed-prebsc-1-s1.binance.org:8545`
    //     ),
    //   network_id: 97,
    //   confirmations: 10,
    //   timeoutBlocks: 200,
    //   skipDryRun: true,
    // },
    // goerli: {
    //   provider: () =>
    //     new HDWalletProvider(
    //       mnemonic,
    //       `https://eth-goerli.g.alchemy.com/v2/3ujyLH_hi8T8AomkQfDKo7VRH2xrn-1d`
    //     ),
    //   network_id: 5,
    //   gas: 5500000,
    //   confirmations: 2,
    //   timeoutBlocks: 200,
    //   skipDryRun: true,
    // },
  },

  // mocha: {
  //   timeout: 100000,
  // },

  compilers: {
    solc: {
      version: "^0.8.13",
    },
  },
};
