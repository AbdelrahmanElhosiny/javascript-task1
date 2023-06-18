// A pangram is a sentence that contains every letter of the alphabet, like:
//"The quick brown fox jumps over the lazy dog"

// Write a function called isPangram, which checks to see if a given sentence
//contains every letter of the alphabet.  Make sure you igore string casing!

// isPangram('The five boxing wizards jump quickly') //true
// isPangram('The five boxing wizards jump quick') //false

// function isPangram(word) {
//   let letters = "abcdefghijklmnopqrstuvwxyz";
//   for (let letter of letters) {
//     if (word.toLowerCase().indexOf(letter) === -1) {
//       return false;
//     }
//   }
//   return true;
// }

//===============================

// Write a getCard() function which returns a random playing card object, like:
// 		{
// 			value: 'K'
// 			suit: 'clubs'
// 		}
//Pick a random value from:
//----1,2,3,4,5,6,7,8,9,10,J,Q,K,A
//Pick a random suit from:
//----clubs,spades, hearts, diamonds
//Return both in an object

// function getCard() {
//   const value = [
//     "2",
//     "3",
//     "4",
//     "5",
//     "6",
//     "7",
//     "8",
//     "9",
//     "10",
//     "A",
//     "K",
//     "Q",
//     "J",
//   ];
//   const suit = ["clubs", "spades", "hearts", "diamonds"];
//   let pickedValue = value[Math.floor(Math.random() * value.length)];
//   let pickedSuit = suit[Math.floor(Math.random() * suit.length)];
//   let pickedCard = {
//     value: pickedValue,
//     suit: pickedSuit,
//   };
//   return pickedCard;
// }

// function makeBetweenFunc(minVal, maxVal) {
//   return function (x) {
//     if (x >= minVal && x < maxVal) {
//       console.log("True");
//     } else console.log("False");
//   };
// }

// const isChild = makeBetweenFunc(0, 18);
// const isAdult = makeBetweenFunc(18, 45);
