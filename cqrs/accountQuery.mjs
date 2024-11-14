import { accountQueryDAO } from "./accountQueryDAO.mjs";

function getAccountList() {
  return accountQueryDAO.retrieveAccountList();
}

function getAccount(id) {
  return accountQueryDAO.retrieveAccount(id);
}

export const accountQuery = {
  getAccountList,
  getAccount,
};
