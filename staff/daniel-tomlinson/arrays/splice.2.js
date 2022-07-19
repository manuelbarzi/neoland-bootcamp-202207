function splice(array, start, count = array.length - start, ...input) {
  const arrayTemp = [];

  const result = [];

  const inputs = [];

  // This part fills inputs with the inputs from arguments

  // if (arguments.length > 2) {
  // let inputStart = 0;
  for (let i = 3; i < arguments.length; i++) {
    inputs[i - 3] = arguments[i];
    // inputStart++;
  }
  // }
  console.log(inputs);

  // This part fills arrayTemp with the array variables to be spliced back later
  // let arrayTempStart = 0;
  for (let i = start + count; i < array.length; i++) {
    arrayTemp[i - start - count] = array[i];
    // arrayTempStart++;
  }
  console.log(arrayTemp);

  // This part fills result with the removed variables

  // let resultStart = 0;
  for (let i = start; i < start + count; i++) {
    result[i - start] = array[i];
    // resultStart++;
  }
  console.log(result);

  // this part adds the input to the original array

  for (let i = 3; i < arguments.length; i++) array[start + i - 3] = argument[i];

  // let inputSpliceStart = start;
  for (let i = start; i < inputs.length + start; i++) {
    array[i] = inputs[i - start];
    // inputSpliceStart++;
  }
  console.log(array);

  // This part puts the removed variables back in the original array

  let tempSpliceStart = start + inputs.length;
  for (let i = 0; i < arrayTemp.length; i++) {
    array[tempSpliceStart] = arrayTemp[i];
    tempSpliceStart++;
  }
  console.log(array);

  array.length = start + inputs.length + arrayTemp.length;

  return result;

  // This part recreates the original array
}
