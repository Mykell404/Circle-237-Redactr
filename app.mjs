import validateForm from "./validation.mjs";

function startApp(e) {
  // Get the Form Element
  let redactForm = document.getElementById("redact-form");

  // This function splits the words and returns an array
  function sortWords(words) {
    // convert the string to an array then map through the words to remove space at the start and end of the word
    let newWords = words.split(",").map((w) => w.trim());

    // return a unique list of the newWords to prevent duplicate entries
    return [...new Set(newWords)];
  }

  function redactWords(wordList, content, symbol) {
    return new Promise(resolve => {
      // we assign the content here so it can be updated
      let scrambledContent = content;
      // we iterate through the wordlist and replace all words with the symbol
      wordList.forEach((w) => {
        scrambledContent = scrambledContent.replaceAll(w, symbol)
      })
      // we let the Promise know that we are done and resolve with the result
      resolve(scrambledContent);
    })
  }

  async function redact(event) {
    // Prevent the default action of the form ie the reloading
    event.preventDefault();
    // Apply Basic Validation
    validateForm()
    // Get value from the text input field
    let contentToBeScrambled = redactForm.text.value;
    // Get value from the scramble input field
    let wordsToBeScrambled = redactForm.scramble.value;
    // Get value from the symbol input field
    let symbol = redactForm.symbol.value;

    let sortedWord = sortWords(wordsToBeScrambled);
    // pass the sorted words, content and symbol then await the result
    let result = await redactWords(sortedWord, contentToBeScrambled, symbol)

    let totalWordCount = contentToBeScrambled.length;
    let scrambledWordCount = result.length;

    let wordCountNode = document.getElementById("word-count");
    let scrambledWordCountNode = document.getElementById(
      "scrambled-word-count"
    );

    wordCountNode.innerText = `Words Count: ${totalWordCount}`;
    scrambledWordCountNode.innerText = `Scrambled words Count: ${scrambledWordCount}`;

    // console.log the result
    console.log(result);
  }

  // Listen for sumbit event on the redact Form
  redactForm.addEventListener("submit", redact)
};

// ======= DO NOT EDIT ============== //
export default startApp;
  // ======= EEND DO NOT EDIT ========= //