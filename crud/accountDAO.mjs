import { ACCOUNT_LIST } from "./database.mjs";

function insertAccount(account) {
  ACCOUNT_LIST.push(account);
}

function retrieveAccountList() {
  return ACCOUNT_LIST.map(({ creationDate, ...rest }) => rest);
}

function updateAccount(account) {
  let index = ACCOUNT_LIST.findIndex((a) => a.id === account.id);
  if (index !== -1) {
    ACCOUNT_LIST[index] = account;
  }
  console.log(ACCOUNT_LIST);
}

function retrieveAccount(id) {
  let copyAccount = ACCOUNT_LIST.find((account) => account.id === id);
  return {
    id: copyAccount.id,
    name: copyAccount.lastName + " " + copyAccount.firstName,
    creationDate: copyAccount.creationDate,
  };
}

export const accountDAO = {
  insertAccount,
  retrieveAccountList,
  updateAccount,
  retrieveAccount,
};
