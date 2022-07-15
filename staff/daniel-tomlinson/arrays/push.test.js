describe("push", function () {
  test("push animals", function () {
    const animals = ["pigs", "goats", "sheep"];

    const count = push(animals, "cows");

    check(count, 4);
    check(animals.length, count);
    check(animals[length + 1], "cows");
    check(animals[0], "pigs");
    check(animals[1], "goats");
    check(animals[2], "sheeps");
  });
});

describe("push", function () {
  test("push animals", function () {
    const animals = ["pigs", "goats", "sheep"];

    const count = push(animals, "cows", "wolves", "snakes");

    check(count, 4);
    check(animals.length, count);
    check(animals[length + 3], "cows");
    check(animals.length - 1, "snakes");
    check(animals.length - 2, "wolves");
    check(animals.length - 3, "cows");
    check(animals[0], "pigs");
    check(animals[1], "goats");
    check(animals[2], "sheep");
  });
});

/* console.log(push(numbers, 7));
// expected output: 5

console.log(numbers);
// expected output: [0, 1, 2, 3, 7] */

/* 
console.log(push(animals, "monkey", "frog"));
// expected output: 5

console.log(animals);
// expected output: ['cat', 'dog', 'elephant', 'monkey', 'frog'] */
