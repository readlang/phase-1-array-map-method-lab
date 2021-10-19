const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

// const titleCased = () => {
//     return tutorials
// }



function makeTitleCase(string) {
  //console.log(string);
  let newString = "";
  for (let index = 0; index < string.length; index++) {

    if (index === 0) {
      //console.log("x")
      newString += string[0].toUpperCase();
    } else if (string[index - 1] === " ") {
      //console.log("y")
      newString += string[index].toUpperCase();
    } else {
      //console.log("z")
      //console.log(`newstring: "${newString}" string: "${string}"`)
      newString += string[index];
    }

  }
  return newString;
}

function titleCased(arrOfStrings) {
  let newArr = arrOfStrings.map(makeTitleCase)
  return newArr
}

console.log(
  titleCased(tutorials)
)


// console.log(
//   makeTitleCase("hello good sir.")
// )