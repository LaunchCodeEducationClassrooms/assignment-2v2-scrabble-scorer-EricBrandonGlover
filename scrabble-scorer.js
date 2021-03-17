// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

function oldScrabbleScorer(word) {
	let letterPoints = "";
  word = word.toUpperCase();
 
	for (let i = 0; i < word.length; i++) {

	  for (const pointValue in oldPointStructure) {
		  if (oldPointStructure[pointValue].includes(word[i])) {
			  letterPoints += `Points for '${word[i]}': ${pointValue}\n`;
        scrabbleScore = scrabbleScore + pointValue;
		  }
	  }
	}

	return letterPoints;
}

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {
   console.log("Let's play some scrabble! Enter a word:");

   let scrabbleWord = input.question("Please enter a word ");
   console.log(oldScrabbleScorer(scrabbleWord));
};


function simpleScore(word) {
  let letterPoints = "";

  for (let i = 0; i < word.length; i++) {
    letterPoints += `Points for '${word[i]}': 1\n`;
    scrabbleScore++;
  }

  return letterPoints;
}


function vowelBonusScore(word) {
  let letterPoints = "";
  word = word.toUpperCase();

  for (i = 0; i < word.length; i++) {
    if (word[i] === 'A' || word[i] === 'E' || word[i] === "I" || word[i] === "O" || word[i] === "U") {
      letterPoints += `Points for '${word[i]}': 3\n`;
      scrabbleScore = scrabbleScore + 3;

    } else {
      letterPoints += `Points for '${word[i]}': 1\n`;
      scrabbleScore++;
    }
  }

  return letterPoints;
}


let scrabbleScore = 0;

const scoringAlgorithms = [
  {
    Name: "Simple Score",
    Description: "Each letter is worth 1 point.",
    ScoreFunction: "A function with a parameter for user input that returns a score."
  }, {
    Name: "Bonus Vowels",
    Description: "Vowels are 3 pts, consonants are 1 pt.",
    ScoreFunction: "A function that returns a score based on the number of vowels and consonants."
  }, {
    Name: "Scrabble",
    Description: "The traditional scoring algorithm.",
    ScoreFunction: "Uses the oldScrabbleScorer() function to determine the score for a given word."
  }
];

function scorerPrompt() {
  
  let scorerInput = input.question("Which scoring algorithm would you like to use? 0 for simple scorer, 1 for vowel bonus scorer, 2 for scrabble scorer");
  let valid = false;

  while (!valid) {
    if (Number(scorerInput) === 0) {
      valid = true;
      return simpleScore(scorerInput);

    } else if (Number(scorerInput) === 1) {
      valid = true;
      return vowelBonusScore(scorerInput);

    } else if (Number(scorerInput) === 2) {
      valid = true;
      return oldScrabbleScorer(scorerInput);

    } else {
      console.output("Please input a matching answer\n")
      let scorerInput = input.question("Which scoring algorithm would you like to use? 0 for simple scorer, 1 for vowel bonus scorer, 2 for scrabble scorer ");
    }
  }

  console.log("Algorithm name: ", scoringAlgorithms[scorerInput].name);

  console.log("ScoreFunction result: ", scoringAlgorithms[scorerInput].ScoreFunction("JavaScript")); // this is test output

}




function transform(pointStructure) {

  for (score in pointStructure) {
    
    for (i = 0; i < score.length; i++) {
      newPointStructure.oldPointStructure.item[i] = score;
    }
  }
}

let newPointStructure = {};

function runProgram() {

  let numericalScore = initialPrompt();

  let scorerAlgorithm = scorerPrompt();
  console.log(scorerAlgorithm);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScore: simpleScore,
   vowelBonusScore: vowelBonusScore,
   scrabbleScore: scrabbleScore,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};

