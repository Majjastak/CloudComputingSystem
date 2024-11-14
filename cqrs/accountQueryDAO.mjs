import { accountCache } from "./cache.mjs";
import { accountSummaryList } from "./queryDatabase.mjs";

function retrieveAccountList() {
  return accountSummaryList;
}

function retrieveAccount(id) {
  return accountCache[id];
}

export const accountQueryDAO = {
  retrieveAccountList,
  retrieveAccount,
};
