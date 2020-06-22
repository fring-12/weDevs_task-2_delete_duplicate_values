let arr = [1, 2, 2, 3, 4, 4, 5];

let DeleteValues = (arr) =>
  arr.filter(
    (currentValues, duplicateValues) =>
      arr.indexOf(currentValues) === duplicateValues
  );

console.log(DeleteValues(arr));
