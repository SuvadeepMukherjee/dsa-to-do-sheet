var numberOfSubstrings = function (s) {
  let count = { a: 0, b: 0, c: 0 };
  let left = 0;
  let result = 0;
  for (let right = 0; right < s.length; right++) {
    count[s[right]] += 1;
    while (count["a"] > 0 && count["b"] > 0 && count["c"] > 0) {
      result += s.length - right;
      s[left] -= 1;
      left++;
    }
  }
  return result;
};
