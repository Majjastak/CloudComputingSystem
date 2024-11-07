const bankDAO = require("./bankDAO");
const bankTransfer = require("./bankTransfer");

function getBalance(accountId) {
  console.log(`getting balance for account ${accountId}`);
  return bankDAO.retrieveBalance(accountId);
}

function transferMoney(accountId, amount) {
  bankTransfer.transfer(accountId, amount);
  bankDAO.debitAccount(accountId, amount);
}

const bank = {
  getBalance,
  transferMoney,
};

module.exports = bank;
