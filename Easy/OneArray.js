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

//Roman to Integer

function romanToInt(s) {
	const romanToIntMap = new Map([
		['I', 1],
		['V', 5],
		['X', 10],
		['L', 50],
		['C', 100],
		['D', 500],
		['M', 1000],
	]);
	let result = 0;
	for (let i = 0; i < s.length; i++) {
		//This gets the first index
		const current = romanToIntMap.get(s[i]);
		//this gets the next index by adding one
		const next = romanToIntMap.get(s[i + 1]);
		//This checks if a next number exists, if so it then compares
		if (next && next > current) {
			//this is result = result + (next - current)
			result += next - current;
			//since we used the next index we skip it
			i++;
		} else {
			// we add: result = result + current
			result += current;
		}
	}
	//the iteration is complete and we return result
	return result;
}

console.log(romanToInt('IVXX'));

//Longest Common Prefix

const longestCommonPrefix = (wordString) => {
	//If there are no words in an array
	if (wordString.length === 0) return '';

	//It's more efficient to start backwards
	let prefix = wordString[0];

	for (let i = 1; i < wordString.length; i++) {
		while (wordString[i].indexOf(prefix) !== 0) {
			prefix = prefix.substring(0, prefix.length - 1);
			if (prefix === '') return '';
		}
	}

	return prefix;
};

const wordString = ['loop', 'loom', 'loot'];
console.log(longestCommonPrefix(wordString)); // Output: "loo"

//Write a function that takes a string as input and returns the reverse of that string

const mirroredWord = (string) => {
	if (string.length === 0) return;

	const wordLength = string.length;
	let returnString = '';
	for (let i = wordLength; i > 0; i--) {
		returnString += string.charAt(i - 1);
	}
	return returnString;
};

console.log(mirroredWord('gum'));

//Create a stack
//Create a class that has a constructor function that defines the initial state
//Add methods to the class

class Stack {
	constructor() {
		this.items = [];
	}

	push(item) {
		this.items.push(item);
	}

	readAll() {
		return this.items;
	}
	//This removes and returns the top item from the stack
	pop() {
		return this.items.pop();
	}

	peek() {
		return this.items[this.items.length - 1];
    }

    isEmpty() {
    return this.items.length === 0;
    }
}

const aStack = new Stack
console.log(aStack);
aStack.push(12);
aStack.push(24)
aStack.push(32)
console.log(aStack.peek());
aStack.pop()
console.log(aStack.readAll())

//Write a function that accepts a String as an argument. The function should capitalize every other letter in the string. Then it should return the conveted String.

const string = 'HelloWorld'

const convertFunc = function(String){
  flattenedString = string.toLowerCase().split("")
  let convertedString = '';

  for (let i = 0; i < flattenedString.length; i++){
    if(i % 2 === 0){
      convertedString += flattenedString[i].toLowerCase()
    }else{
      convertedString += flattenedString[i].toUpperCase()
    }
  }
  return convertedString;
}

console.log(convertFunc(string))