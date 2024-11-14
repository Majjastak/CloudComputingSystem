import { accountCommandDAO } from "./accountCommandDAO.mjs";
import { Account } from "./account.mjs";

function addAccount({ lastName, firstName }) {
  const account = new Account({ lastName, firstName });
  accountCommandDAO.insertAccount(account);
}

function saveAccount({ id, lastName, firstName }) {
  const account = new Account({ id, lastName, firstName });
  accountCommandDAO.updateAccount(account);
}

export const accountCommand = {
  addAccount,
  saveAccount,
};
