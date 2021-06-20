$(document).ready(function() {
  let groceryList = [];
  let counter = 0;
  let counterTwo = 0;
  $("form#list").submit(function(event) {
    event.preventDefault();
    groceryList[counter] = $("#valueS").val();
    console.log(groceryList[counter]);
    counter++;
  });
  $("button#buttonGrocery").click(function() {
    groceryList.forEach(function(element) {
      $("ul#listS").append("<li>",groceryList[counterTwo],"</li>");
      counterTwo++;
    });
  });
});