const bankDAO = require("../bankDAOExercise/bankDAO");
const bank = require("../bankDAOExercise/bank");

/* test("Should be called but not executed", () => {
  //Mock up puis
  // remplace l'implémentation de la fonction
  // retrieveBalance mocked up qui sinon est exécutée
  jest.spyOn(bankDAO, "retrieveBalance").mockReturnValue(null);

  bank.getBalance();

  expect(spy).toHaveBeenCalled();
}); */

test("Should transmit parameter accountID", () => {
  const accountID = 123;
  const expectedBalance = 100;

  const spy = jest.spyOn(bankDAO, "retrieveBalance").mockReturnValue(100);

  const balance = bank.getBalance(123);

  expect(spy).toHaveBeenCalledWith(123);

  expect(balance).toBe(expectedBalance);
});
