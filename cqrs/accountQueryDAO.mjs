import { ACCOUNT_LIST } from "./database.mjs";
import { accountSummaryList } from "./queryDatabase.mjs";

function retrieveAccountList() {
  return accountSummaryList;
}

function retrieveAccount(id) {
  let copyAccount = ACCOUNT_LIST.find((account) => account.id === id);
  return {
    id: copyAccount.id,
    name: copyAccount.lastName + " " + copyAccount.firstName,
    creationDate: copyAccount.creationDate,
  };
}

export const accountQueryDAO = {
  retrieveAccountList,
  retrieveAccount,
};
