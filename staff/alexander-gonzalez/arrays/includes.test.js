describe("includes", function () {
  test("true or false", function () {
    let array = [1, 2, 3];
    const element = 2;
    let result = includes(array, element);

    check(result, true);
  });
  let array = [1, 2, 3];
  const element = 5;
  let result = includes(array, element);

  check(result, false);
});
