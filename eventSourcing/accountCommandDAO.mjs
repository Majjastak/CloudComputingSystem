import { ACCOUNT_LIST } from "./database.mjs";
import { accountSummaryList } from "./queryDatabase.mjs";
import { accountCache } from "./cache.mjs";
import { eventList, eventListfunc } from "./eventStore.mjs";
import { Event } from "./event.mjs";

function mappingAccount(account) {
  const { lastName, firstName, ...rest } = account;
  const name = lastName + " " + firstName;
  return { name, ...rest };
}

function insertAccount(account) {
  ACCOUNT_LIST.push(account);
  const { creationDate, ...rest } = account;
  accountSummaryList.push(rest);
  accountCache[account.id] = mappingAccount(account);
}

function updateAccount(account) {
  let index = ACCOUNT_LIST.findIndex((a) => a.id === account.id);
  let queryIndex = accountSummaryList.findIndex((a) => a.id === account.id);

  const { creationDate, ...rest } = account;
  if (index !== -1) {
    ACCOUNT_LIST[index] = account;
    accountSummaryList[queryIndex] = rest;
  }
  accountCache[account.id] = mappingAccount(account);
}

function retrieveAccountById(id) {
  return ACCOUNT_LIST.find((a) => a.id === id);
}

function updateAccountWithEvent(account) {
  let updateEvent = new Event({
    name: "accountUpdated",
    accountId: account.id,
    payload: account,
  });

  eventListfunc.addEvent(updateEvent);

  updateAccount(account);
}

function retrieveAccountByIdWithEvent(id) {
  return eventList.find((e) => e.payload.id === id);
}

export const accountCommandDAO = {
  insertAccount,
  updateAccount,
  retrieveAccountById,
  updateAccountWithEvent,
  retrieveAccountByIdWithEvent,
};
