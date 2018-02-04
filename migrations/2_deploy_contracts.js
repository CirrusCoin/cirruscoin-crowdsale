var GreensparcCrowdsale = artifacts.require("GreensparcCrowdsale.sol");
module.exports = function(deployer, network, accounts) {
    const startTime = Date.now()/1000|0 + 36000; // 2 hour reserve to launch
    const endTime = 1522569600; // april 1 2018 12am pst
    const ethRate = new web3.BigNumber(600);
    const wallet = "0x21C6DAdC34965da5fD102f68f3f83Aea7f7b249F";
deployer.deploy(GreensparcCrowdsale, startTime, endTime, ethRate, 250000000000000000000, 125000000000000000000000, wallet);
};
