//Running Sum of 1D Array

const nums = [1, 2, 4, 3];

const oneArray = (nums) => {
	let total = 0;
	let result = [];

	for (let i = 0; i < nums.length; i++) {
		total = total + nums[i];
		result.push(total);
	}
	console.log(`Running Sum of 1D Array: [${result}]`);
	return result;
};

oneArray(nums);

//Find Pivot Index
const findPivotIndex = (nums) => {
	let leftResult = 0;
	let sum = 0;

	for (let i = 0; i < nums.length; i++) {
		sum += nums[i];
	}

	for (let i = 0; i < nums.length; i++) {
		//leftside would equal that of the right side; therefore, leftresult and its index are subracted
		if (leftResult === sum - leftResult - nums[i]) {
			console.log('The Pivot Index is ' + [i]);
			return [i];
		}
		leftResult = leftResult + nums[i];
	}
};

findPivotIndex(nums);

//Isomorphic Strings: given two strings <s> and <t>, determine if they are isomorphic.
const s = 'egg';
const t = 'add';

const isomorphicStrings = (s, t) => {
	if (s.length !== t.length) return false;

	let sMap = {};
	let tMap = {};

	for (let i = 0; i < s.length; i++) {
		const sChar = s[i];
		const tChar = t[i];
		if (!sMap[sChar] && !tMap[tChar]) {
			//{e: 'a'}
			sMap[sChar] = tChar;
			//{a: 'e'}
			tMap[tChar] = sChar;
			console.log(tMap);
		} else if (sMap[sChar] !== tChar || tMap[tChar] !== sChar) {
			return false;
		}
	}

	return true;
};

console.log(isomorphicStrings(s, t));

//Two Sum
const digits = [1, 6, 9, 5, 3];
const target = 4;

const twoSum = (digits, target) => {
	//Let's establish variables we will need. We will need to find the complement of each digit. This is an iteration. We would need each number to determine its' complement. We also will need a hash map to collect our numbers for comparison.
	let hashMap = {};

	//We will create a for loop that runs until we return two numbers that equal the target number
	for (let i = 0; i < digits.length; i++) {
		let number = digits[i];
		let complement = target - number;
		if (complement in hashMap) {
			return [hashMap[complement], i];
		}

		hashMap[number] = i;
	}
};

let Blah = twoSum(digits, target);
console.log(Blah);

//Pallindrome

const isPalindrome = (x) => {
	const strX = x.toString(); // convert number to string for easier manipulation
	const len = strX.length; // get length of string
	for (let i = 0; i < len / 2; i++) {
		// only need to iterate through half of string
		if (strX[i] !== strX[len - 1 - i]) {
			// compare first and last characters
			return false; // if they are not the same, return false
		}
	}
	return true; // if all characters match, return true
};

console.log(isPalindrome('abba'));

//Pallindrome 2
//A pallindrome is repeatable front and back for example racecar
//racecar has seven letters. Seven divide by two equals = 3.5 = 3
//0123456
const str = 'bob';

function isPalindrome2(str) {
	const len = str.length;
	for (let i = 0; i < Math.floor(len / 2); i++) {
		//iteration 1    r !== s : True
        //iteration 2    a !== a : False
        //iteration 3    c !== c : False
		if (str[i] !== str[len - 1 - i]) {
			return false;
		}
	}
	return true;
}

console.log(isPalindrome2(str));
