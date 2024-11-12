import { accountDAO } from "./accountDAO.mjs";
import { Account } from "./account.mjs";

function addAccount({ lastName, firstName }) {
  const account = new Account({ lastName, firstName });
  accountDAO.insertAccount(account);
}

function getAccountList() {
  return accountDAO.retrieveAccountList();
}

function saveAccount({ id, lastName, firstName }) {
  const account = new Account({ id, lastName, firstName });
  accountDAO.updateAccount(account);
}

function getAccount(id) {
  return accountDAO.retrieveAccount(id);
}

export const accountService = {
  addAccount,
  getAccountList,
  saveAccount,
  getAccount,
};
