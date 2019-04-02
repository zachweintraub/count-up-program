var countUp = function(byNum, toNum){
  var outputArray = [];
  var currentOutput = byNum;
  for (currentOutput; currentOutput <= toNum; currentOutput += byNum) {
    outputArray.push(currentOutput);
  }
  return outputArray;
};
//Front/User End
$(document).ready(function(){

  $("#submitBtn").click(function(event){
    event.preventDefault();
    console.log(outputArray);
    var countBy = $('#countby').val();
    var countUp = $('#countup').val();
    console.log(countBy + ' ' + countUp);
    var outputArray = countUp(countBy, countUp);

    outputArray.forEach(function(item){

    $("#resultList").append("<li>"+item+"</li>");
    });

  });

});
