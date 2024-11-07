function transfer(accountID, amount) {
  console.log(`transferring ${amount} from account ${accountID}`);
}

const bankTransfer = {
  transfer,
};

module.exports = bankTransfer;
