require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.4",
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/UBDqT13m55caHhMHTUrwXq_vHKgnwvGY',
      accounts: ['0x54C169a347D906DB84FaE2B6717759fF6383D087'],
    }
  }
};
