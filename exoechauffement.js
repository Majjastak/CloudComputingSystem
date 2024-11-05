const randomFooOrBar = ["foo", "bar"][Math.round(Math.random())];
const random1or2 = [1, 2][Math.round(Math.random())];
const randomPathFooOrBar = [{ path: "/foo" }, { path: "/bar" }][
  Math.round(Math.random())
];

console.log(randomFooOrBar, random1or2, randomPath);
