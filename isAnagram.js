// /**
//  * @param {string} s
//  * @param {string} t
//  * @return {boolean}
//  */
// var isAnagram = function (s, t) {
//   if (s.length !== t.length) return false;
//   if (s.split("").sort().join() === t.split("").sort().join()) return true;
//   return false;
// };

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = (s, t) => {
  if (s.length !== t.length) return false;
  return reorder(s) === reorder(t);
};

const reorder = (str) =>
  str
    .split("")
    .sort((a, b) => a.localeCompare(b))
    .join("");

console.log(isAnagram("anagram", "nagaram"));
