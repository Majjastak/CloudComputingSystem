const isValidPassword = require("./passwordValidator");

test("should return true if password is valid", () => {
  //il faut toujours 3 parties
  const validPassword = "a12345678";
  const result = isValidPassword(validPassword);
  expect(result).toBe(true);
});

test("should return false if password is less than 8 characters", () => {
  const invalidPassword = "a234567";
  const result = isValidPassword(invalidPassword);
  expect(result).toBe(false);
});

test("should return true if password does not contain a number", () => {
  const validPassword = "abcdefgh1";
  const result = isValidPassword(validPassword);
  expect(result).toBe(true);
});

test("should return false if password does not contain a number", () => {
  const invalidPassword = "abcdefgh";
  const result = isValidPassword(invalidPassword);
  expect(result).toBe(false);
});

test("should return true if password contains atleast one letter", () => {
  const validPassword = "12345678a";
  const result = isValidPassword(validPassword);
  expect(result).toBe(true);
});

test("should return false if password does not contain a letter", () => {
  const validPassword = "12345678";
  const result = isValidPassword(validPassword);
  expect(result).toBe(false);
});
