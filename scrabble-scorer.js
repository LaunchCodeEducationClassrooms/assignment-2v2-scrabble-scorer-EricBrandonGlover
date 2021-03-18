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
  let numericalScore = 0;
  word = word.toUpperCase();
 
	for (let i = 0; i < word.length; i++) {

	  for (const pointValue in oldPointStructure) {
		  if (oldPointStructure[pointValue].includes(word[i])) {
			  letterPoints += `Points for '${word[i]}': ${pointValue}\n`;
        numericalScore += pointValue;
		  }
	  }
	}

  console.log(letterPoints);
	return numericalScore;
}

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {
   console.log("Let's play some scrabble! Enter a word:");

   let scrabbleWord = input.question("Please enter a word ");

   return scrabbleWord;
};


function simpleScore(word) {
  let letterPoints = "";
  let numericalScore = 0;

  for (let i = 0; i < word.length; i++) {
    letterPoints += `Points for '${word[i]}': 1\n`;
    numericalScore++;
  }

  console.log(letterPoints);
  return numericalScore;
}


function vowelBonusScore(word) {
  let letterPoints = "";
  let numericalScore = 0;
  word = word.toUpperCase();

  for (i = 0; i < word.length; i++) {
    if (word[i] === 'A' || word[i] === 'E' || word[i] === "I" || word[i] === "O" || word[i] === "U") {
      letterPoints += `Points for '${word[i]}': 3\n`;
      numericalScore += 3;

    } else {
      letterPoints += `Points for '${word[i]}': 1\n`;
      numericalScore++;
    }
  }

  console.log(letterPoints);
  return numericalScore;
}


function scrabbleScore(word) {
  let letterPoints = "";
  let numericalScore = 0;
  word = word.toLowerCase();

  for (i = 0; i < word.length; i++) {

    for (letter in newPointStructure) {
			letterPoints += `Points for '${word[i]}': ${newPointStructure[letter]}\n`;
      numericalScore += newPointStructure[letter];
    }
  }

  console.log(letterPoints);
  return numericalScore;
}

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
  
  let scorerAlgorithm;
  let scorerInput = input.question("Which scoring algorithm would you like to use? 0 for simple scorer, 1 for vowel bonus scorer, 2 for scrabble scorer");
  let valid = false;

  while (!valid) {
    if (Number(scorerInput) === 0) {
      valid = true;
      scorerAlgorithm = simpleScore(word);

    } else if (Number(scorerInput) === 1) {
      valid = true;
      scorerAlgorithm = vowelBonusScore(word);

    } else if (Number(scorerInput) === 2) {
      valid = true;
      scorerAlgorithm = scrabbleScore(word);

    } else {
      console.output("Please input a matching answer\n")
      let scorerInput = input.question("Which scoring algorithm would you like to use? 0 for simple scorer, 1 for vowel bonus scorer, 2 for scrabble scorer ");
    }
  }

  console.log("Algorithm name: ", scoringAlgorithms[scorerInput].Name);
  console.log("Description: ", scoringAlgorithms[scorerInput].Description);
  console.log("Score function: ", scoringAlgorithms[scorerInput].ScoreInput);

  return scorerAlgorithm;
}




function transform(pointStructure) {

  for (const score in pointStructure) {

    for (i = 0; i < score.length; i++) {
      newPointStructure.oldPointStructure.item[i] = score;
    }
  }
}

let newPointStructure = {};

function runProgram() {

  let word = initialPrompt();

  let scorerAlgorithm = scorerPrompt();

  transform(oldPointStructure);
  console.log(scorerAlgorithm(word));
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

