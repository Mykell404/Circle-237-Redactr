function startApp() {
  let redactBtn = document.getElementById("button");
  // This function splits the words and returns an array
  function sortWords(words) {
    let newWords = words.split(",");
    return newWords;
  }

  function redact(event) {
    event.preventDefault();
    let contentToBeScrambled = document.getElementById("text").value;
    let wordsToBeScrambled = document.getElementById("scramble").value;
    let symbol = document.getElementById("symbol");

    let sortedWord = sortWords(wordsToBeScrambled);

    console.log(sortedWord);
  }

  redactBtn.addEventListener("click", redact);
};

// ======= DO NOT EDIT ============== //
export default startApp;
  // ======= EEND DO NOT EDIT ========= //