// Answer 1: Diamond Pattern
function printDiamondStar(rows) {
  for (let i = 1; i < rows; i++) {
    let spaces = " ".repeat(rows - i);
    let stars = "*".repeat(i * 2 - 1);
    console.log(spaces + stars);
  }
  for (let i = rows; i >= 1; i--) {
    let spaces = " ".repeat(rows - i);
    let stars = "*".repeat(i * 2 - 1);
    console.log(spaces + stars);
  }
}
// printDiamondStar(7);
// Answer 1: Ends

// Answer 2: Inverted Pyramid and stack one another
function printPyramidStarPattern(rows) {
  for (let i = 1; i <= rows; i++) {
    let spaces = " ".repeat(rows - i);
    let stars = "*".repeat(i * 2 - 1);
    console.log(spaces + stars);
  }
}
function printInvertedPyramidStar(rows) {
  for (let i = rows; i >= 1; i--) {
    let spaces = " ".repeat(rows - i);
    let stars = "*".repeat(i * 2 - 1);
    console.log(spaces + stars);
  }
}
// function call
// printInvertedPyramidStar(6);
// printPyramidStarPattern(6);
// Answer 2: Ends

// Answer 3: resultant list should contains only unique elements
const uniqueElementsArray = () => {
  const list1 = [1, 2, 3, 4, 5, 6];
  const list2 = [1, 3, 4, 7, 9];
  let result = [];
  list1.forEach((item) => {
    if (!list2.includes(item) && !result.includes(item)) {
      result.push(item);
    }
  });
  list2.forEach((item) => {
    if (!list1.includes(item) && !result.includes(item)) {
      result.push(item);
    }
  });
  console.log(result);
};
// uniqueElementsArray()
// Answer 3: Ends

// Answer 4: find the occurrence of every character in the string
const countLetters = (str) => {
  str = str.toLowerCase();
  const result = {};
  [...str].forEach((char) => {
    if (char !== " ") {
      if (result[char]) {
        result[char]++;
      } else {
        result[char] = 1;
      }
    }
  });
  console.log(result);
};

// function call
// countLetters("Hello World");
// Answer 4: Ends

// Answer 5: reverse each word of a string and print the reverse of string also
const reverseString = (str) => {
  str = str.toLowerCase();
  let reverseString = "";
  let result = "";
  const str_length = str.length;
  for (char in str) {
    reverseString += str[str_length - char - 1];
  }
  const afterSplit = reverseString.split(" ");
  const gotArray = afterSplit.map(
    (s) => s.charAt(0).toUpperCase() + s.trim().slice(1)
  );

  for (index in gotArray) {
    if (result) {
      result += ` ${gotArray[index]}`;
    } else {
      result += `${gotArray[index]}`;
    }
  }
  console.log(result, gotArray, afterSplit, reverseString);
};
// function call
// reverseString("Hello World");
// Answer 5: Ends

// Answer 6: Hollow star pattern
function printLeftAlignHollowStar(rows) {
  let pattern = "";
  for (let i = 1; i <= rows; i++) {
    // printing star
    for (let j = 0; j < i; j++) {
      if (i === rows) {
        pattern += "*";
      } else {
        if (j === 0 || j === i - 1) {
          pattern += "*";
        } else {
          pattern += " ";
        }
      }
    }
    pattern += "\n";
  }
  console.log(pattern);
}

// // function call
// printLeftAlignHollowStar(6);
// Answer 6: Ends

// Answer 7: roman number as an input and return output as an integer.

function romanToInteger(roman_input) {
  const romanNumerals = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let result = 0;
  const store = [...roman_input];

  for (let i = 1; i <= store.length; i++) {
    result += romanNumerals[store[i - 1]];
  }
  console.log(result);
}
// function call
// romanToInteger("LVIII");

// Answer 7: Ends

// Answer 8:
// const multiply = (num1, num2) => {
//   if (!+num1 || !+num2) return "0";
//   const prod = Array(num1.length + num2.length).fill(0);
//   let currIdx = prod.length - 1;

//   for (let i = num1.length - 1; i >= 0; i--) {
//     let idx = currIdx--;

//     for (let j = num2.length - 1; j >= 0; j--) {
//       const res = +num1[i] * +num2[j] + prod[idx];
//       prod[idx] = res % 10;
//       prod[--idx] += Math.floor(res / 10);
//     }
//   }
//   return prod.join("").replace(/^0+/, "");
// };
const getStrToNumber = (str) => {
  // string - number => ASCII value of string - ASCII value of number => exact value
  let number = 0,
    temp = 0;
  for (let char of str) {
    temp = char - 0;
    number = number * 10 + temp;
  }
  return number;
};
const multiply = (...strings) => {
  let storeNumber = 1;
  for (let str of strings) {
    const number = getStrToNumber(str);
    storeNumber *= number;
  }
  return storeNumber;
};
// function call
const result = multiply("33", "5", "10");
console.log(result);

// Answer 8: ends

// Answer 9: remove duplicates from array
const removeDuplicates = () => {
  const input = [1, 2, 3, 1, 3, 4, 5, 6, 6, 7, 5];
  const uniqueArray = [];

  const result = input.filter((element) => {
    if (!uniqueArray.includes(element)) {
      uniqueArray.push(element);
      return true;
    }
    return false;
  });
  console.log(result);
};
// function call
// removeDuplicates();

// Answer 9: ends

// Answer 10: get the string and sum the numbers
const stingAndsum = () => {
  const stringInput = "Hell o 12 345 Wo r l 12d".toLowerCase();
  let sumNums = 0;
  let newString = "";
  const store = [...stringInput];
  for (const element of store) {
    if (element !== " " && !isNaN(element)) {
      sumNums += parseInt(element);
    } else {
      if (element !== " " && isNaN(element)) {
        newString += element;
      }
    }
  }
  console.log(`${newString}: ${sumNums}`);
};
// function call
// stingAndsum();

// Answer 10: ends

// Form Testing
// const cities = [
//   {
//     city: "Delhi",
//     cityCode: "dl",
//     regEx: /^1100(0[1-9]|[1-8][0-9]|97)$/,
//   },
// ];
// function check() {
//   const { cityCode, regEx } = cities[0];
//   console.log(cityCode);
//   if (cityCode === "dl") {
//     if (regEx.test(110012)) {
//       console.log("working");
//     } else {
//       console.log("please fix");
//     }
//   }
// }
// check();
