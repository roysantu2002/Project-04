
const infuraKey = "567538d01f084c768d6c9e339f079438";
const fs = require("fs");
const mnemonic = fs.readFileSync(".secret").toString().trim();
var HDWalletProvider = require("truffle-hdwallet-provider");


module.exports = {
    networks: {
    development: {
     provider: function () {
				return new HDWalletProvider(mnemonic, "http://127.0.0.1:9545/", 0, 50);
			},
			network_id: '*',
			gas: 9999999
    },

    rinkeby: {
      provider: () => new HDWalletProvider(mnemonic, `https://rinkeby.infura.io/v3/${infuraKey}`),
      network_id: 4,       // rinkeby's id
      gas: 4500000,        // rinkeby has a lower block limit than mainnet
    }
  },
    // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  },

	compilers: {
		solc: {
			version: "^0.4.24"
		}
	}
};