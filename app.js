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
var allWordsArray = [];
var sentenceArray = [];
var eachWordArray = [];

// ------------------------------------------------------- \\
function findAllWords(rawData) {
  console.log(rawData);
  allWordsArray = rawData.split(" ");
  for (i=0; i<allWordsArray.length; i++) {
    allWordsArray[i].trim();
  }
  console.log(allWordsArray);
  return allWordsArray;
};
// ------------------------------------------------------- \\
function findEachWord(targetArray) {
  for (var i=0; i < targetArray.length; i++) {
    if (eachWordArray.includes(targetArray[i])) {
      // do nothing, it's already there
      } else {
        eachWordArray.push(targetArray[i]);
      }
    }
  console.log(eachWordArray);
  return eachWordArray;
};
// ------------------------------------------------------- \\
function findAllSentences(rawData) {
  sentenceArray = rawData.split("\n");
  console.log(sentenceArray);
  return sentenceArray;
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
  $(":submit").click(function() {
    event.stopPropagation();
    $("dl").removeClass(".hidden");
    findAllWords($(".js-text").val());
    findAllSentences($(".js-text").val());
    findEachWord(allWordsArray);

    $("#js-word-count").append(allWordsArray.length);
    $("#js-uniq-words").append(eachWordArray.length);
    $("#js-avg-word-length").append(getAvgCharCount(eachWordArray) + " characters");
    $("#js-avg-sent-length").append(getAvgCharCount(sentenceArray) + " characters");

    });
}

analyzeText();
