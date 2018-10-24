var vowels = ['a', 'e', 'i', 'o', 'u'];
var consonant = ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','y','z'];





function changedsentence(iArray){
  if(iArray.charAt(0)==='a'||iArray.charAt(0)=='e' || iArray.charAt(0)=='i' || iArray.charAt(0)=='o' || iArray.charAt(0)=='u'){
    return iArray + "way";
  }else {
    if( )
  }
}






$(document).ready(function(){
  $("#piglatin").submit(function(event){
    event.preventDefault();
    var UserInput = $("#userinput").val();
    var inputArray = UserInput.split("");
    inputArray.forEach(function(inputArray){
      var result=changedsentence(inputArray);
      $("#result").text(result);
    });

  });
});
