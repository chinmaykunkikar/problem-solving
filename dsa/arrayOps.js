let arrAn = [1, 3, 4, 5, 9, 9, 1];
let arrBn = [1, 2, 5, 6, 6, 7, 9];

let arrAs = ["cat", "dog", "camel", "raccoon", "cat", "antler"];
let arrBs = ["fish", "snake", "raccoon", "fish", "antler"];

// Operations
let numIntersection = [...new Set(arrAn.filter((x) => arrBn.includes(x)))];
let strIntersection = arrAs.filter((x) => arrBs.includes(x));

let numDifference1 = arrAn.filter((x) => !arrBn.includes(x));
let strDifference1 = arrAs.filter((x) => !arrBs.includes(x));
let numDifference2 = arrBn.filter((x) => !arrAn.includes(x));
let strDifference2 = arrBs.filter((x) => !arrAs.includes(x));

let numSymDiff = arrAn
  .filter((x) => !arrBn.includes(x))
  .concat(arrBn.filter((x) => !arrAn.includes(x)));
let strSymDiff = arrAs
  .filter((x) => !arrBs.includes(x))
  .concat(arrBs.filter((x) => !arrAs.includes(x)));

let numUnion = [...new Set([...arrAn, ...arrBn])];

console.log(numIntersection);
console.log(strIntersection);
console.log(numDifference1);
console.log(strDifference1);
console.log(numDifference2);
console.log(strDifference2);
console.log(numSymDiff);
console.log(strSymDiff);
console.log(numUnion);
