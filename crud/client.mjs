import { accountService } from "./accountService.mjs";
import { ACCOUNT_LIST } from "./database.mjs";

accountService.addAccount({ lastName: "Doe", firstName: "John" });
console.log(ACCOUNT_LIST);

console.log(accountService.getAccountList());

accountService.saveAccount({
  id: ACCOUNT_LIST[0].id,
  lastName: "Smith",
  firstName: "Jane",
});

console.log(accountService.getAccount(ACCOUNT_LIST[0].id));
