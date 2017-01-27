/*
1. Total word count of the submitted text
  Make [textArray] from entered text ... space delimited, return size of [textArray] -- return to "js-word-count" */

/*2. Unique word count of the submitted text
  Make filtered new array [wordArray] ... push 1st instance of each word from [textArray]
  return size of [wordArray] to -- "js-uniq-words" */

/*
3. Average word length in characters of the submitted text
  Using [wordArray] return length of toString.[wordArray] then divide by [wordArray].length -- return to "js-avg-word-length"

4. Average sentence length in characters of the submitted text.
  Make [sentenceArray] from entered text "." AND /n delimited
  Make {sentences} object: {
      sentence: "sentence string", length: sentence.length
      }
  funfunFunction... get sum of lengths / # of sentences
  return to -- "js-avg-sent-length"
*/



// ------------------------------------------------------- \\
function findAllWords(rawData) {
  var porcWordsArray = [];
  console.log(rawData);
  porcWordsArray = rawData.split(" ");
  for (i=0; i<porcWordsArray.length; i++) {
    porcWordsArray[i].trim();
  }
  console.log(porcWordsArray);
  return porcWordsArray;
};
// ------------------------------------------------------- \\
function findEachWord(targetArray) {
  var retWordArray = [];
  for (var i=0; i < targetArray.length; i++) {
    if (retWordArray.includes(targetArray[i])) {
      // do nothing, it's already there
      } else {
        retWordArray.push(targetArray[i]);
      }
    }
  console.log(retWordArray);
  return retWordArray;
};
// ------------------------------------------------------- \\
function findAllSentences(rawData) {
  return rawData.split("\n");
};
// ------------------------------------------------------- \\
function getAvgCharCount(dataObject) {
  // Average word length:
  var total = dataObject.reduce(function(sum, words) {
    return sum + words.length;
  },0);
  console.log("Average: " + (total / dataObject.length));
  return ((total / dataObject.length).toFixed(2));
};
// ------------------------------------------------------- \\
function analyzeText() {
  $("#sub-button").click(function(event) {
    event.preventDefault();
    $("dl").removeClass("hidden");
    var allWordsArray = findAllWords($(".js-text").val());
    var sentenceArray = findAllSentences($(".js-text").val());
    var eachWordArray = findEachWord(allWordsArray);

    $("#js-word-count").append(allWordsArray.length);
    $("#js-uniq-words").append(eachWordArray.length);
    $("#js-avg-word-length").append(getAvgCharCount(eachWordArray) + " characters");
    $("#js-avg-sent-length").append(getAvgCharCount(sentenceArray) + " characters");

    });
}

$(analyzeText());
