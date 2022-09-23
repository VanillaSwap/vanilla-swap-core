const PancakePair = artifacts.require("PancakePair")

module.exports = async(callback) => {
    console.log("PancakePair bytecode hash:", (web3.utils.keccak256(PancakePair.bytecode)).substring(2))
    callback()
}