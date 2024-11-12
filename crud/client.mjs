import { accountService } from "./accountService.mjs";
import { ACCOUNT_LIST } from "./database.mjs";

accountService.addAccount("Doe", "John");
console.log(ACCOUNT_LIST);

console.log(accountService.getAccountList());

accountService.saveAccount(ACCOUNT_LIST[0].id, "Smith", "Jane");

console.log(accountService.getAccount(ACCOUNT_LIST[0].id));
