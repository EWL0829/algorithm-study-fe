// * ===== split array to chunks =====
function chunk(arr, size) {
  if (arr.length === 0) return arr;
  let newArr = [];
  while(arr.length > 0) {
    newArr.push(arr.splice(0, size));
  }
  return newArr;
}

// * ===== calculate the length of the argument =====
const argumentsLength = function(...args) {
  return [].slice.apply(args).length;
};


module.exports = {
  chunk,
  argumentsLength,
};
