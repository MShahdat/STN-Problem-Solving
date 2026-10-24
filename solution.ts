//& Solution 1

const staircase = (n: number): string => {

  let res = ''
  for (let i: number = 1; i <= n; i++) {
    for (let j: number = 1; j <= i; j++) {
      res = res + '#'
    }

    res = res + "\n"
  }
  return res
}
const pattern = staircase(5)
console.log(pattern)



//& Solution 2
var gradingStudents = function (grades: number[]): number[] {
  return grades.map((g) => {
    if (g < 38) return g;
    const next = Math.ceil(g / 5) * 5;
    return next - g < 3 ? next : g;
  });
};
console.log(gradingStudents([73, 67, 38, 33]));
console.log(gradingStudents([84, 29, 57]));



//& Solution 3
var timeConversion = function (s: string): string {
  const period = s.slice(-2).toUpperCase();
  const [hh, mm, ss] = s.slice(0, -2).split(":");
  let hour = parseInt(hh, 10) % 12;
  if (period === "PM") hour += 12;
  return `${String(hour).padStart(2, "0")}:${mm}:${ss}`;
};
console.log(timeConversion("07:05:45PM")); // 19:05:45
console.log(timeConversion("12:00:00AM")); // 00:00:00
console.log(timeConversion("12:30:45PM")); // 12:30:45


//& Solution 4
var repeatStr = function (n: number, s: string): string {
  let result = "";
  for (let i = 0; i < n; i++) result += s;
  return result;
};

console.log(repeatStr(3, "ha"));
console.log(JSON.stringify(repeatStr(0, "hello")));
console.log(repeatStr(4, "a"));



//& Solution 5
var solution = function (str: string): string {
  let result = "";
  for (let i = str.length - 1; i >= 0; i--) result += str[i];
  return result;
};
console.log(solution("shahdat"));
console.log(solution("hello"));
console.log(JSON.stringify(solution("")));




//& Solution 6
var positiveSum = function (arr: number[]): number {
  let sum = 0;
  for (const x of arr) {
    if (x > 0) {
      sum += x;
    }
  }
  return sum;
};
console.log(positiveSum([-1, -4, -7, 12]));
console.log(positiveSum([-1, 2, 0, -5]));



//& Solution 7
var summation = function (num: number): number {
  return (num * (num + 1)) / 2;
};
console.log(summation(4));
console.log(summation(1));



//& Solution 8
var booleanToString = function (b: boolean): string {
  return b ? "true" : "false";
};

console.log(booleanToString(false));
console.log(booleanToString(true));



//& Solution 9
var fizzBuzz = function (n: number): string[] {
  const result: string[] = [];
  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) {
      result.push("FizzBuzz");
    }
    else if (i % 3 === 0) {
      result.push("Fizz");
    }
    else if (i % 5 === 0) {
      result.push("Buzz");
    }
    else {
      result.push(String(i));
    }
  }
  return result;
};

console.log(fizzBuzz(5));
console.log(fizzBuzz(15));


//& Solution 10
var runningSum = function (nums: number[]): number[] {
  const result: number[] = [];
  let total = 0;
  for (const x of nums) {
    total += x;
    result.push(total);
  }
  return result;
};

console.log(runningSum([1, 2, 3, 4])); // [1, 3, 6, 10]
console.log(runningSum([1, 1, 1, 1, 1])); // [1, 2, 3, 4, 5]



//& Solution 11
var maximumWealth = function (accounts: number[][]): number {
  let max = 0;
  for (const customer of accounts) {
    let wealth = 0;
    for (const amount of customer) {
      wealth += amount;
    }
    if (wealth > max) {
      max = wealth;
    }
  }
  return max;
};

console.log(maximumWealth([[1, 2, 3], [3, 2, 1]])); // 6
console.log(maximumWealth([[1, 5], [7, 3], [3, 5]])); // 10



//& Solution 12
var removeDuplicates = function (nums: number[]): number {
  if (nums.length === 0) return 0;
  let k = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[k - 1]) {
      nums[k] = nums[i];
      k++;
    }
  }
  return k;
};
const p12a = [1, 1, 2];
const k12a = removeDuplicates(p12a);
console.log(k12a, p12a.slice(0, k12a)); // 2 [1, 2]
const p12b = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
const k12b = removeDuplicates(p12b);
console.log(k12b, p12b.slice(0, k12b)); // 5 [0, 1, 2, 3, 4]



//& Solution 13
var containsDuplicate = function (nums: number[]): boolean {
  const seen = new Set<number>();
  for (const x of nums) {
    if (seen.has(x)) {
      return true;
    }
    seen.add(x);
  }
  return false;
};
console.log(containsDuplicate([1, 2, 3, 1])); // true
console.log(containsDuplicate([1, 2, 3, 4])); // false
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])); // true


//& Solution 14
var moveZeroes = function (nums: number[]): void {
  let write = 0;
  for (let read = 0; read < nums.length; read++) {
    if (nums[read] !== 0) {
      if (read !== write) {
        nums[write] = nums[read];
        nums[read] = 0;
      }
      write++;
    }
  }
};

const p14a = [0, 1, 0, 3, 12];
moveZeroes(p14a);
console.log(p14a); // [1, 3, 12, 0, 0]
const p14b = [0, 0, 1];
moveZeroes(p14b);
console.log(p14b); // [1, 0, 0]
const p14c = [1, 2, 3];
moveZeroes(p14c);
console.log(p14c); // [1, 2, 3]



//& Solution 15
var merge = function (
  nums1: number[],
  m: number,
  nums2: number[],
  n: number
): void {
  let i = m - 1;
  let j = n - 1;
  let k = m + n - 1;
  while (j >= 0) {
    if (i >= 0 && nums1[i] > nums2[j]) nums1[k--] = nums1[i--];
    else nums1[k--] = nums2[j--];
  }
};
const p15a = [1, 2, 3, 0, 0, 0];
merge(p15a, 3, [2, 5, 6], 3);
console.log(p15a); // [1, 2, 2, 3, 5, 6]
const p15b = [1];
merge(p15b, 1, [], 0);
console.log(p15b); // [1]
const p15c = [0];
merge(p15c, 0, [1], 1);
console.log(p15c); // [1]


//& Solution 16
var threeSum = function (nums: number[]): number[][] {
  const arr = [...nums].sort((a, b) => a - b);
  const result: number[][] = [];
  const len = arr.length;
  for (let i = 0; i < len - 2; i++) {
    if (arr[i] > 0) break;
    if (i > 0 && arr[i] === arr[i - 1]) continue;
    let left = i + 1;
    let right = len - 1;
    while (left < right) {
      const sum = arr[i] + arr[left] + arr[right];
      if (sum === 0) {
        result.push([arr[i], arr[left], arr[right]]);
        left++;
        right--;
        while (left < right && arr[left] === arr[left - 1]) left++;
        while (left < right && arr[right] === arr[right + 1]) right--;
      } else if (sum < 0) left++;
      else right--;
    }
  }
  return result;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4])); // [[-1,-1,2],[-1,0,1]]
console.log(threeSum([0, 1, 1])); // []
console.log(threeSum([0, 0, 0])); // [[0,0,0]]


//& Solution 17
var plusOne = function (digits: number[]): number[] {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i]++;
      return digits;
    }
    digits[i] = 0;
  }
  return [1, ...digits];
};
console.log(plusOne([1, 2, 9])); // [1, 3, 0]
console.log(plusOne([4, 3, 2, 1])); // [4, 3, 2, 2]
console.log(plusOne([9, 9, 9])); // [1, 0, 0, 0]


//& Solution 18
var reverseString = function (s: string[]): void {
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    const tmp = s[left];
    s[left] = s[right];
    s[right] = tmp;
    left++;
    right--;
  }
};
const p18a = ["h", "e", "l", "l", "o"];
reverseString(p18a);
console.log(p18a); // ["o","l","l","e","h"]
const p18b = ["H", "a", "n", "n", "a", "h"];
reverseString(p18b);
console.log(p18b); // ["h","a","n","n","a","H"]


//& Solution 19
var lengthOfLastWord = function (s: string): number {
  let i = s.length - 1;
  while (i >= 0 && s[i] === " ") i--;
  let length = 0;
  while (i >= 0 && s[i] !== " ") {
    length++;
    i--;
  }
  return length;
};
console.log(lengthOfLastWord("Hello World")); // 5
console.log(lengthOfLastWord("   fly me   to   the moon  ")); // 4
console.log(lengthOfLastWord("luffy is still joyboy")); // 6


//& Solution 20
var longestCommonPrefix = function (strs: string[]): string {
  if (strs.length === 0) return "";
  let prefix = strs[0];
  for (let i = 1; i < strs.length && prefix.length > 0; i++) {
    let j = 0;
    const max = Math.min(prefix.length, strs[i].length);
    while (j < max && prefix[j] === strs[i][j]) j++;
    prefix = prefix.slice(0, j);
  }
  return prefix;
};
console.log(longestCommonPrefix(["flower", "flow", "flight"])); // "fl"
console.log(JSON.stringify(longestCommonPrefix(["dog", "racecar", "car"]))); // ""
console.log(longestCommonPrefix(["interspecies", "interstellar", "interstate"])); // "inters" (the PDF's "inter" is a typo)