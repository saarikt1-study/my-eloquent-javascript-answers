const arrayToList = (array) => {
  let list = null;
  array.reverse();
  for (let value of array) {
    list = {
      value: value,
      rest: list,
    };
  }

  return list;
};

console.log(arrayToList([1, 2, 3]));
console.log("-----------");

const listToArray = (list) => {
  let array = [];
  while (list !== null) {
    array.push(list.value);
    list = list.rest;
  }

  return array;
};

console.log(listToArray(arrayToList([1, 2, 3])));
console.log("----------");

const prepend = (element, list) => {
  return {
    value: element,
    rest: list,
  };
};

console.log(prepend(10, prepend(20, null)));
console.log("----------");

const nth = (list, index) => {
  let value;
  for (let i = 0; i <= index; i++) {
    if (list === null) {
      return undefined;
    } else {
      value = list.value;
      list = list.rest;
    }
  }
  return value;
};

console.log(nth(arrayToList([10, 20, 30, 40, 50]), 6));
console.log("----------");

const recursiveNth = (list, index) => {
  if (!list) {
    return undefined;
  } else if (index == 0) {
    value = list.value;
    return value;
  } else {
    recursiveNth(list.rest, index--);
  }
};

console.log(nth(arrayToList([10, 20, 30]), 1));
console.log("----------");
