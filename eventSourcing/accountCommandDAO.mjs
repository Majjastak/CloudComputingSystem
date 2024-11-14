import { ACCOUNT_LIST } from "./database.mjs";
import { accountSummaryList } from "./queryDatabase.mjs";
import { accountCache } from "./cache.mjs";

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
  console.log(ACCOUNT_LIST);
}

function retrieveAccountById(id) {
  return ACCOUNT_LIST.find((a) => a.id === id);
}

export const accountCommandDAO = {
  insertAccount,
  updateAccount,
  retrieveAccountById,
};
