import { accountCommandDAO } from "./accountCommandDAO.mjs";
import { Event } from "./event.mjs";
import { eventListfunc } from "./eventStore.mjs";
import { Account } from "./account.mjs";
import { accountSummaryList } from "./queryDatabase.mjs";
import { accountCache } from "./cache.mjs";

function cloneAccount(account) {
  return JSON.parse(JSON.stringify(account));
}

function mappingAccount(account) {
  const { lastName, firstName, ...rest } = account;
  const name = lastName + " " + firstName;
  return { name, ...rest };
}

function addAccount({ lastName, firstName }) {
  const account = new Account({ lastName, firstName });
  accountCommandDAO.insertAccount(account);
}

function addAccountWithEvent({ lastName, firstName }) {
  const account = new Account({ lastName, firstName });
  let accountAdded = new Event({
    name: "accountAdded",
    accountId: account.id,
    payload: cloneAccount(account),
  });

  const { creationDate, ...rest } = account;

  accountSummaryList.push(rest);
  accountCache[account.id] = mappingAccount(account);
  eventListfunc.addEvent(accountAdded);
  return account;
}

function getAccountById(id) {
  return accountCommandDAO.retrieveAccountById(id);
}

function saveAccount({ id, lastName, firstName }) {
  let toUpdate = getAccountById(id);
  toUpdate.lastName = lastName;
  toUpdate.firstName = firstName;

  accountCommandDAO.updateAccount(toUpdate);
}

function getAccountByIdWithEvent(id) {
  return accountCommandDAO.retrieveAccountByIdWithEvent(id);
}

function saveAccountWithEvent({ id, firstName, lastName }) {
  let toUpdate = getAccountByIdWithEvent(id);
  toUpdate.payload.lastName = lastName;
  toUpdate.payload.firstName = firstName;

  accountCommandDAO.updateAccountWithEvent(toUpdate.payload);
}

export const accountCommand = {
  addAccount,
  saveAccount,
  addAccountWithEvent,
  saveAccountWithEvent,
};
