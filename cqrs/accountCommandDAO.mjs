import { ACCOUNT_LIST } from "./database.mjs";
import { accountSummaryList } from "./queryDatabase.mjs";
import { accountCache } from "./cache.mjs";

function insertAccount(account) {
  ACCOUNT_LIST.push(account);
  const { creationDate, ...rest } = account;
  accountSummaryList.push(rest);
}

function updateAccount(account) {
  let index = ACCOUNT_LIST.findIndex((a) => a.id === account.id);
  let queryIndex = accountSummaryList.findIndex((a) => a.id === account.id);
  const { creationDate, ...rest } = account;
  if (index !== -1) {
    ACCOUNT_LIST[index] = account;
    accountSummaryList[queryIndex] = rest;
  }
  console.log(ACCOUNT_LIST);
}

export const accountCommandDAO = {
  insertAccount,
  updateAccount,
};
