const Migrations = artifacts.require("Migrations");
const PancakeERC20 = artifacts.require("PancakeERC20");
const PancakeFactory = artifacts.require("PancakeFactory");
const PancakePair = artifacts.require("PancakePair");

module.exports = function(deployer, accounts) {
    deployer.deploy(Migrations);
    deployer.deploy(PancakeERC20);
    // "0x90F8bf6A479f320ead074411a4B0e7944Ea8c9C1" is the address that fees will be paid to
    deployer.deploy(PancakeFactory, "0x90F8bf6A479f320ead074411a4B0e7944Ea8c9C1");
};