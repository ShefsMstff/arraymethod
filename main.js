// task1

// function saitCount(str) {

//     const saitler = ['a', 'e', 'i', 'o', 'u'];
//     const saitCount = str.split('').reduce((say, herf) => {
//       if (saitler.includes(herf)) {
//         return say + 1;
//       }
//       return say;
//     }, 0);

//     return saitCount;
//   }

//   console.log(saitCount("ayı onu yedi!")); 


// task2

// const reverseString = str => str.split('').reverse().join('');

// console.log(reverseString("fe-2707")); 



//  task3

// function Palindrom(str) {
//     const cleanString = str.replace(/\s+/g, '');
//     const tersString = cleanString.split('').reverse().join('');
//     return cleanString ===tersString;
// } 
// console.log(Palindrom("salam"));
// console.log(Palindrom("dad"));


//  task4

// function bigWords(str) {
//     return str.replace(/\b\w/g, char => char.toUpperCase());
//   }
  

//   console.log(bigWords("mektebe gedirem"));
  
 
  
  
// task7
// function characterreplace(str, previousstr, nextstr) {
//     return str.split(previousstr).join(nextstr);
//   }
  
//   console.log(characterreplace("Shafag", "afag", "efo")); 
//   console.log(characterreplace("hello", "h", "b")); 


// task8 chat yardım
// function findUzunsoz(str) {
//     return str.split(/\s+/) .reduce((uzunsoz, adisoz ) => uzunsoz.length > adisoz.length ? uzunsoz : adisoz, '');
//   }
  
//   console.log(findUzunsoz("hello world")); 
//   console.log(findUzunsoz("men universitete gedirem")); 
  
 
// task9
// function removeNumbers(str) {
//     return str.replace(/\d+/g, '');
//   }
//   console.log(removeNumbers("fe-2707"));

  