var Dai = artifacts.require("./Dai.sol");
var Payment = artifacts.require("./Payment.sol");

module.exports = async function (deployer, network, addresses) {
  const [owner, customer, _] = addresses;
  if (network === 'ganache') {
    console.log(network)
    await deployer.deploy(Dai)
    const dai = await Dai.deployed()
    console.log(dai.address)
    await dai.faucet(customer, web3.utils.toWei('10000'))
    await deployer.deploy(Payment, owner, dai.address)
  }
  else {
    console.log(network)
    const OWNER_ADDRESS = ''
    const DAI_ADDRESS = ''
    await deployer.deploy(Payment, OWNER_ADDRESS, DAI_ADDRESS)
  }
};
