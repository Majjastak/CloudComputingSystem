import { accountCommandDAO } from "./accountCommandDAO.mjs";
import { accountQuery } from "./accountQuery.mjs";
import { Account } from "./account.mjs";

function cloneAccount(account) {
  return JSON.parse(JSON.stringify(account));
}

function addAccount({ lastName, firstName }) {
  const account = new Account({ lastName, firstName });
  accountCommandDAO.insertAccount(account);
}

function getAccountById(id) {
  accountCommandDAO.retrieveAccountById(id);
}

function saveAccount({ id, lastName, firstName }) {
  let toUpdate = getAccountById(id);
  toUpdate.lastName = lastName;
  toUpdate.firstName = firstName;

  accountCommandDAO.updateAccount(toUpdate);
}

export const accountCommand = {
  addAccount,
  saveAccount,
};
