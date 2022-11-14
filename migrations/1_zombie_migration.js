var ZombieFactory = artifacts.require("ZombieFactory");

module.exports = function (deployer) {
    // deployment steps
    deployer.deploy(ZombieFactory);
};
