
const VentureDao = artifacts.require("VentureDao");

module.exports = function (deployer) {
  deployer.deploy(VentureDao);
};