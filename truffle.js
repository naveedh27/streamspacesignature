var HDWalletProvider = require("truffle-hdwallet-provider");

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    },
    ropsten: {
      provider: function() {
        return new HDWalletProvider("soldier ice act culture uniform stereo census worth creek try grief mass", 
              "https://ropsten.infura.io/v3/5a2e60a731254049a9ab4ef748a7eba3")
      },
      network_id: 3,
      gas: 4000000,
      gasPrice: 10000000000 
    }
  }
};
