import { accountCommand } from "./accountCommand.mjs";
import { accountQuery } from "./accountQuery.mjs";
import { ACCOUNT_LIST } from "./database.mjs";
import { accountSummaryList } from "./queryDatabase.mjs";

accountCommand.addAccount({ lastName: "Doe", firstName: "John" });
console.log("Account List : ", ACCOUNT_LIST);

console.log("Get account list : ", accountQuery.getAccountList());

console.log("accountSummaryList :", accountQuery.getAccountList());

console.log("accountSummaryList entier :", accountSummaryList);

accountCommand.saveAccount({
  id: ACCOUNT_LIST[0].id,
  lastName: "Smith",
  firstName: "Jane",
});

console.log(accountQuery.getAccount(ACCOUNT_LIST[0].id));
