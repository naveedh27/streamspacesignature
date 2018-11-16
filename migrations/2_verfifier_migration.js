var Verifier = artifacts.require("./Verifier.sol");

module.exports = async function (deployer) {
  deployer.deploy(Verifier);
};
