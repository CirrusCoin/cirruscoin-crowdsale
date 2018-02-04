var HDWalletProvider = require("truffle-hdwallet-provider");

const Web3 = require("web3");
const web3 = new Web3();
var keystore = require('fs').readFileSync('keystore/eth_keystore.txt').toString();

console.log(keystore);

var mainnet = new HDWalletProvider(keystore, "https://mainnet.infura.io/GjyHpPqLZffsizIx6ieH");
var rinkebyProvider = new HDWalletProvider(keystore, "https://rinkeby.infura.io/GjyHpPqLZffsizIx6ieH");

module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*" // Match any network id
    },
    mainnet: {
      provider: mainnet,
      network_id: 2,
      gas: 4300000,
      gasPrice: web3.toWei("15", "gwei")
    },
    rinkeby: {
      provider: rinkebyProvider,
      network_id: 4,
      gas: 4300000,
      gasPrice: web3.toWei("20", "gwei")
    }
  },

  solc: {
	  optimizer: {
	    enabled: true,
	    runs: 200
	  }
  }

};
