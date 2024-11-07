const bankDAO = require("./bankDAO");
const bankTransfer = require("./bankTransfer");

function getBalance(accountId) {
  console.log(`getting balance for account ${accountId}`);
  return bankDAO.retrieveBalance(accountId);
}

async function transferMoney(accountId, amount) {
  bankTransfer
    .transfer(accountId, amount)
    .then(() => {
      bankDAO.debitAccount(accountId, amount);
    })
    .catch((error) => {
      console.error(error);
    });
}

const bank = {
  getBalance,
  transferMoney,
};

module.exports = bank;
