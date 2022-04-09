

const fiveLetterWords = require('./five_letter_words.json');


//generateFiveWordList();
readRandomWord();
function readRandomWord(){
  console.log(fiveLetterWords[1]); 
}


//Only needs to be run once and locally, but I'm keeping the code to showcase how I did it.
async function generateFiveWordList() {
  var fs = require('fs');

  var keptWords = [];

  await fs.readFile('all_english_words.json', 'utf-8', (err, allWords) => {
    if (err) {
        throw err;
    }

    // parse JSON object
    const words = JSON.parse(allWords.toString());

    // print JSON object
    // console.log(words);


    for(var key in words){ 
        if(key.toString().length == 5){
          keptWords.push(key);
          // console.log(key);
        }
    }
  });

  setTimeout(() => {
    fs.writeFile ("five_letter_words.json", JSON.stringify(keptWords,null, 2), function(err) {
      if (err) throw err;
        console.log('complete');
      }
    );
  }, 3000);
}