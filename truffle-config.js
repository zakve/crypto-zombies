module.exports = {
  networks: {
    loc_cryptozombies_cryptozombies: {
      network_id: "*",
      port: 9545,
      host: "127.0.0.1"
    }
  },
  mocha: {},
  compilers: {
    solc: {
      version: "0.6.0"
    }
  }
};
