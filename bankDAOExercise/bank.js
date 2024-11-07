const bankDAO = require("./bankDAO");

function getBalance(accountId) {
  console.log(`getting balance for account ${accountId}`);
  return bankDAO.retrieveBalance(accountId);
}

const bank = {
  getBalance,
};

module.exports = bank;
