$(function() {

	Parse.$ = jQuery;

	/* Incrementing and decrementing */
	var counter = 0;
	$("#up").click(function() {
	//$("#up").one("click", function() {
		counter = counter + 1;
		document.getElementById("rating").value = counter;
	});

	$("#down").click(function() {
	//$("#down").one("click", function() {
		counter = counter - 1;
		document.getElementById("rating").value = counter;
	});

	/* Submitting Own Resources */
	$("#submitOwn").click(function(event) {
		event.preventDefault();

		$("#study-res").remove();

		//Get the inputted url and description from input form
		var url = document.getElementById("submit-url").value;
		var description = document.getElementById("submit-desc").value;

		//Create a div to hold the url & description (span is for different font size for link)
		var res = document.createElement('div');
		var span = document.createElement('span');
		var link = document.createTextNode(url);
		var desc = document.createTextNode(description);

		//Styling the div (url + description)
		res.style.border = "1px solid black";
		res.style.display = "inline";
		res.style.background = "#FFF";
		res.style.float = "left";
		res.style.padding = "25px 150px 25px 150px";
		res.style.align = "center";
		res.style.fontSize = "21px";
		res.style.color = "#4f75ca";
		span.style.color = "#6e645a";
		span.style.fontSize = "14px";
		span.appendChild(link);

		//Create line break between description & link
		var linebreak = document.createElement("br");
		res.appendChild(desc);
		res.appendChild(linebreak);
		res.appendChild(span);
		res.style.fontWeight = "700";
		res.style.color = "#6694b8";


		//When you click the div (box), it will lead you to the url
		$(res).click(function() {
			window.location = url;
		});

		//Create div for the up button
		var up_div = document.createElement('div');
		var up = document.createElement("img");
		up.src = "img/up-new.png";
		up.style.width = "40px";
		up.style.height = "40px";
		up.style.margin = "0px 0px 10px 10px";
		up_div.appendChild(up);

		//Create div for the down button
		var down_div = document.createElement('div');
		var down = document.createElement("img");
		down.src = "img/down-new.png";
		down.style.width = "40px";
		down.style.height = "40px";
		down.style.margin = "0px 0px 10px 10px";
		down_div.appendChild(down);

		//Create a div for the rating
		var rating_div = document.createElement('div');
		var rating = document.createElement("input");
		rating.value = 0;
		rating.disabled = true;
		rating.style.border = "0px";
		rating.style.width = "30px";
		rating.style.height = "20px";
		rating.style.textAlign = "center";
		rating.style.margin = "-7px -3px 5px 5px";
		rating_div.fontSize = "16px";
		rating_div.appendChild(rating);

		//Clicking the up button will increase rating by 1
		var counter = 0;
		$(up_div).click(function() {
			counter = counter + 1;
			rating.value = counter;
		});

		//Clicking the down button will decrease rating by 1
		$(down_div).click(function() {
			counter = counter - 1;
			rating.value = counter;
		});

		//Create a div to hold up button, rating & down button
	    var d = document.createElement('div');
		d.appendChild(up_div);
		d.appendChild(rating_div);
		d.appendChild(down_div);
		d.style.float = "left";

		//Create a div to hold resource (box with url & desc) + up, down, rating
		var resource = document.createElement('div');
		resource.appendChild(res);
		resource.appendChild(d);
		resource.style.display = "inline-block";
		resource.style.textAlign = "center";
		resource.style.margin = "0px 0px 25px 5%";

		//The whole resource component will be inserted before submit form
		$(resource).insertBefore(".submit-own");

	});

});