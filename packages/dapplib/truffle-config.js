require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give close brown slab carpet raise random unit gesture option flock gather'; 
let testAccounts = [
"0xf3f5ca87f151cfe8b7bd3c3a61dd3ef3615cb2fde24f758c99221c878f9fe7ad",
"0x5e6aeec0024747610f7c8bd6cd6d4cb20df1f0c627608d9451565992ea53b26b",
"0x2bdbbdcfa6b50ae62385ae33454f1a2c59a21d1e7c7d2b8c099eace9ddc8b6f0",
"0xe1caf5b5ee3f3837a3638f8ef3e58f3e0e164382de7255ab7cea1afb06b8c6d7",
"0x617ae190cb3e3fddc4c9b7e0f587acddcd67fbcbd6698dc654d930dde2f7a4da",
"0x20476b7e00fb87f75a70529ea45e8627402662bb2717453d70f1598054740832",
"0xf8cb2b813aded2315127057a74492010fdc95582de2d40e78f6634c9aa3bdbec",
"0xe9a7c77ff52cdb3690494e73a1d7ed0941d68df6e8d0f8a1ba9e2cc439bd0628",
"0xc8759207cf4a54ec33e629669818b5d7c116a6e7ec854f42387f6a58df491b30",
"0x39be5ba97ce6de8d6f89fbcf6a7cd676cd513af1c79021ce07521f0123fc696e"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

