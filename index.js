const WALLETPROVIDER = require('truffle-hdwallet-provider');
var Web3 = require('web3');
var contAbi = require('./build/contracts/Verifier.json');

var args = process.argv.slice(2);

// let provider = new WALLETPROVIDER(
//     'soldier ice act culture uniform stereo census worth creek try grief mass',
//     'http://localhost:8545'
// );
let provider = new WALLETPROVIDER(
    'soldier ice act culture uniform stereo census worth creek try grief mass',
    'https://ropsten.infura.io/v3/5a2e60a731254049a9ab4ef748a7eba3'
);


async function go(provider, Web3, contAbi, args) {

    try{

        var web3 = new Web3(provider);

        var address = contAbi.networks[Object.keys(contAbi.networks)[0]].address;
        var instance = new web3.eth.Contract(contAbi.abi, address);
        
        var encrypted = web3.eth.accounts.sign(args[0], args[1]);
    
        const noOfPropArr = await instance.methods.verify(encrypted.messageHash,
            web3.utils.toDecimal(encrypted.v),
            encrypted.r,
            encrypted.s)
            .call({
                gas:'4000000'
            });
    
        console.log("Verification from Ethereum");
        if (noOfPropArr) {
            console.log("Signature Verified")
        } else {
            console.error("Signature Not verified")
        }
    
        console.log("Verification from Web3");
        const _addr = web3.eth.accounts.recover(args[0], encrypted.v, encrypted.r, encrypted.s)
        if(_addr === "0x685c565ce59Ffd21038b11B042a8F125532a4710"){
            console.log("Signature Verified")
        }else{
            console.error("Signature Not verified")
        }

    }catch(e){
        console.log(e);
    }
   

}

go(provider, Web3, contAbi, args);

setTimeout(function () {
    process.exit(5);
}, 30000);
