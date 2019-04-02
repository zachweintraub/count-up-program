var countUp = function(byNum, toNum){
  var outputArray = [];
  for (var currentOutput = byNum; currentOutput <= toNum; currentOutput += byNum) {
    outputArray.push(currentOutput);
  }
  return outputArray;
};
//Front/User End
$(document).ready(function(){

  $("#submitBtn").click(function(event){
    event.preventDefault();

    countUp(parseInt($('#countby').val()), parseInt($('#countup').val())).forEach(function(item){

    $("#resultList").append("<li>"+item+"</li>");

    });

  });

});
