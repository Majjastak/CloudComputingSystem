function retrieveBalance(accountId) {
  console.log(`Retrieving balance for account ${accountId}`);
}

const bankDAO = {
  retrieveBalance,
};

module.exports = bankDAO;
