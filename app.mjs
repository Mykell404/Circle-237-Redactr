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

      // the below function needs to be rewritten, it replaces characters (not words) with symbols throughout the entire text. for example, if the text is "I want to be the best" and the word to be scrambled is "be" and the symbol is "?", the result is "I want to ? the ?st" (nana) 
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
    
    let redactedTextNode = document.getElementById("redacted-text");
    let wordCountNode = document.getElementById("word-count");
    let scrambledWordCountNode = document.getElementById("scrambled-word-count");

    // changed Words count to Initial Text Character count which is more accurate (nana)
    wordCountNode.innerText = `Initial Text Character Count: ${totalWordCount}`;

    // changed Scrambled words Count to Redacted Text Character Count which is more accurate. We should also update the code to correctly count words if we want to display a word count (nana)
    scrambledWordCountNode.innerText = `Redacted Text Character Count: ${scrambledWordCount}`;
    redactedTextNode.innerText = `Redacted Text: ${result}`

  }

  // Listen for submit event on the redact Form
  redactForm.addEventListener("submit", redact)
};

// ======= DO NOT EDIT ============== //
export default startApp;
  // ======= EEND DO NOT EDIT ========= //