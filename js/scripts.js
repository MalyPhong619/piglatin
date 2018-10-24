var vowels = ["a", "e", "i", "o", "u"];



// function singleLetterWord(singleLetter) {
//   for( var i = 0; i <= vowels.length; i++)
//     if (singleLetter === vowels[i]) {
//       return singleLetter + "way";
//   }
// };

function singleLetterWord(singleLetter) {
  var pigLatinSentence = [];
  for( var i = 0; i <= vowels.length; i++) {
    if (singleLetter === vowels[i]) {
      var oneLetter = singleLetter + "way";
      pigLatinSentence.push(oneLetter);
    } else if (singleLetter[0] === vowels[i]) {
      var firstVowelWord = singleLetter + "ay";
      pigLatinSentence.push(firstVowelWord);
    }
  }
    return pigLatinSentence;
};

// function singleLetterWord(singleLetter) {
//   var pigLatinSentence = [];
//   // for( var j=0; j <= singleLetter.length;j++){
//
//   for( var i = 0; i <= vowels.length; i++) {
//     if (singleLetter === vowels[i]) {
//       var oneLetter = singleLetter + "way";
//       pigLatinSentence.push(oneLetter);
//     } else if (singleLetter.length > 1 && singleLetter === vowels[i]) {
//       var firstVowelWord = singleLetter + "ay";
//       pigLatinSentence.push(firstVowelWord);
//     }
//   }
// // }
//     return pigLatinSentence;
// };
















$(document).ready(function(){
  $("#piglatin").submit(function(event){
    event.preventDefault();
    var UserInput = $("#userinput").val();
    var inputArray = UserInput.split(" ");

    var singleLetterVowel = singleLetterWord(inputArray);
    console.log(UserInput, singleLetterVowel);
    $("#result").text(singleLetterVowel);
  });
});
