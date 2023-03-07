const { ship } = require("../ship");

const myShip = ship(5);

test("ship length of 5 get 1 hit", () => {
  expect(myShip.hit()).toBe(1);
});

test("ship length of 5 get 2 hit", () => {
  expect(myShip.hit()).toBe(2);
});

test("ship length of 5 not get sunken", () => {
  expect(myShip.isSunk()).toBeFalsy();
});

test("ship length of 5 get 3 hit", () => {
  expect(myShip.hit()).toBe(3);
});

test("ship length of 5 get 4 hit", () => {
  expect(myShip.hit()).toBe(4);
});

test("ship length of 5 get 5 hit", () => {
  expect(myShip.hit()).toBe(5);
});

test("ship length of 5 get sunk", () => {
  expect(myShip.isSunk()).toBeTruthy();
});
