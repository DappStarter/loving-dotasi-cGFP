require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey knife olympic system index rate saddle method inflict end army gaze'; 
let testAccounts = [
"0x596ac323f692d1ae37ddcc57b0c1c93f7582ff09cd6575992a01604f188aa397",
"0x1c395a40894a3a6d7f77062baf580d634f69037a64aef16aa208443c258c9b10",
"0xe4dea6fd737ae5999715fdce5efb84874034e07feea4c30208de9e6fa894e536",
"0x22d88797355ee8b5f590792c87487c7e9ccd7eb1c2ed9c10eebcb361a763c1cc",
"0x43c24154a2d8d1f35c9eba324b8b822178acbf1ce9ab8c81940935b6588bc0a8",
"0x3fb463cb1817f4d562a535a435d404daaa37b666a1b44e167728aa9721ccef93",
"0x8260462db59fffac4da89cdb74cad77caf2e302358321621fda53170cd562d62",
"0x258d39a4bfcb72dc9690e5c27d402b91fb249c4006acf09ad0084af2d842cfdc",
"0x3016d6ac89b9ccd2bd3e80bf35a32ccb7df0d90333129d296f7cb68759ffca5f",
"0x7d71205d859698fc2efd3538ea607c3849e437a3988d201a06afa6d8363f634f"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

