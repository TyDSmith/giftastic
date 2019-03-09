
var categArray=[]

//create buttons wiht onclick functionality that calls populateGifs

function setup(){
    createButtons();
    $("buttonDiv").on("click", function() {
        var person = $(this).attr("data-person");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
          person + "&api_key=AzZ29qUdXJ4MDmPGaD39CQ9EQhkPMTi7&limit=10";
        $.ajax({
          url: queryURL,
          method: "GET"
        })
        .then(function(response) {
            var results = response.data;
            for (var i = 0; i < results.length; i++) {
                var gifImageURL = response.data[i].images.original.url;
                console.log(gifImageURL);
                $("#gifs-appear-here").prepend("<img src='"+ gifImageURL + "' width=200>");
            }
        }
        )
    }
);
};



function createButtons(){


    //create forloop that 
$('#buttonsDiv').append('woooo');


//console.log("createbutton function")
};




//great function that populates gifs of category with array info (rating)

// function populateGifs(){

// };
