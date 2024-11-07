function retrieveBalance(accountId) {
  console.log(`Retrieving balance for account ${accountId}`);
}

function debitAccount(accountId, amount) {
  console.log(`Debiting account ${accountId} with ${amount}`);
}

const bankDAO = {
  retrieveBalance,
  debitAccount,
};

module.exports = bankDAO;
