const deepEqual = (a, b) => {
  if (a === b) return true;

  if (
    typeof a !== "object" ||
    typeof b !== "object" ||
    b === null ||
    a === null
  )
    return false;

  if (Object.keys(a).length !== Object.keys(b).length) return false;

  for (let key of Object.keys(a)) {
    if (!Object.keys(b).includes(key) || deepEqual(a[key], b[key]) === false) {
      return false;
    }
  }
  return true;
};

let obj = { here: { is: "an" }, object: 2 };
console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, { here: 1, object: 2 }));
console.log(deepEqual(obj, { here: { is: "an" }, object: 2 }));
