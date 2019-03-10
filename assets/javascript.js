 //Using "animalArray" instead of "topics as the assignment suggests"
 var animalArray=['dogs','cats','frogs','rabbits','fish']

 function setup(){
     console.log(animalArray);
     
     showButtons();
     showGIFs();
 
     // Adding a button for animal entered
     $("#add-animal").on("click", function () {
         event.preventDefault();
         var newAnimal = $("#animal-input").val().trim();
         animalArray.push(newAnimal);
         showButtons();
         console.log(newAnimal);
         return;
     });
 };


 function showButtons(){
     $("#divs-go-here").empty();
     for ( i = 0; i < animalArray.length; i++){
         var topicButton = "<button id='" + animalArray[i] + "' animalData = '" + animalArray[i]+"' onclick='showGIFs();'>"+animalArray[i]+"</button>"
         $('#divs-go-here').append(topicButton);
     }
 };



 function showGIFs(){
     $("button").on("click", function(){
     //console.log('clicked');
         var animal = $(this).attr("animalData");
         //console.log(animalData); 
         console.log(animal); 

         var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
             animal + "&api_key=AzZ29qUdXJ4MDmPGaD39CQ9EQhkPMTi7&limit=10"
             
         $.ajax({
             url: queryURL,
             method: "GET"
         }).done(function (response) {
             var results = response.data;

             //console.log(response.data);
             $("#animal-gifs-here").empty();


             for (var i = 0; i < 10; i++) {
                 var animalDiv = $("<div>");
                 var p = $("<p>").text("Rating: " + results[i].rating);
                 var animalImg = $("<img>");
                 console.log(response);
                 
                 p.attr("class", "rating-class");


                 animalImg.attr("src", results[i].images.original_still.url);
                 animalImg.attr("data-still", results[i].images.original_still.url);
                 animalImg.attr("data-animate", results[i].images.original.url);
                 animalImg.attr("data-state", "still");
                 animalImg.attr("class", "gif");
                 animalImg.attr("width", "250");
             
                 animalDiv.attr("class","animal-div-class");
                 animalDiv.append(animalImg);
                 animalDiv.append(p);
                 $("#animal-gifs-here").append(animalDiv);
             }
         })
     })
 };


function changeState(){
 var state = $(this).attr("data-state");
 var animateImage = $(this).attr("data-animate");
 var stillImage = $(this).attr("data-still");

 if (state == "still") {
     $(this).attr("src", animateImage);
     $(this).attr("data-state", "animate");
 }

 else if (state == "animate") {
     $(this).attr("src", stillImage);
     $(this).attr("data-state", "still");
 }
}

$(document).on("click", ".gif", changeState);
