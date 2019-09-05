$(document).ready(function () {
	
	

	$("#submit").on("click",function(){
		if($("#input").val() != ""){
			var newBtn = $("<button>");
			newBtn.addClass("custom-buttons btn btn-primary btn-md")
			newBtn.text($("#input").val().trim());
			newBtn.attr("data-name",$("#input").val().trim());
			newBtn.attr("id","sport-btn");
			$("#buttons").append(newBtn);
			$("#input").val("");
		}

	})
	function displayGIFS(){
                $("#gifsHere").empty();
		var sport = $(this).attr("data-name");
		//console.log("hey");
		var queryURL = "http://api.giphy.com/v1/gifs/search?q=" +
        sport + "&api_key=pAzFQpI0SvkE566stub482zTBEpLLs36&limit=10";

        $.ajax({
        	url: queryURL,
        	method:"GET"
        }).done(function(response){
                console.log(response);

        	var results = response.data;

        	for(i=0; i<results.length; i++){
        		var newDiv = $("<div>");

        		var p = $("<p>").text("Rating: " + results[i].rating);

        		var Images = $("<img>");
                        Images.attr("data-state", "still");
                        Images.attr("src", results[i].images.fixed_height_still.url);
        		Images.attr("data-still", results[i].images.fixed_height_still.url);
                        Images.attr("data-animate", results[i].images.fixed_height.url);
        		Images.addClass("img-responsive gif");
        		Images.width("400px");
        		Images.height("200px");

        		newDiv.append(p);
        		newDiv.append(Images);
        		
        		newDiv.addClass("col-sm-6 col-md-4 col-lg-3");
        		$("#gifsHere").prepend(newDiv);
        	}


        })
	}
        $(document).on("click",".gif",function(){
                console.log("hey");

                var state = $(this).attr("data-state");

                 if(state === "still"){
                        $(this).attr("src",$(this).attr("data-animate"));
                        $(this).attr("data-state", "animate");
                }else{
                        $(this).attr("src",$(this).attr("data-still"));
                        $(this).attr("data-state", "still");
      }



        })


	$(document).on("click","#sport-btn",displayGIFS);




})