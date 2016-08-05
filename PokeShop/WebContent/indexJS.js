var total = 0;
var cPokemon = [];
var cCost = [];
//ajax call to pull 151 pokemon
$.ajax({url: "http://pokeapi.co/api/v2/pokemon/?limit=151",
    success: function(data){
        //builds table from api call
    var tableString = 
    	"<table class='table table-hover'>" +
            "<thead>" +
                "<tr>" +
                    "<th>Name</th>" +
                    "<th>Price</th>" +
                    "<th>Add to Cart</th>" +
                "</tr>" +
            "</thead>" +
        "<tbody>";
        //add a price for each pokemon using math.random
        //sets up id to be pokemon name 
        //sets up button to have onclick passing name and price
    for(var x=0; x< data.results.length; x++){
        var num = ((Math.random()*100)+.01).toFixed(2);
        tableString += "<tr id='"+data.results[x].name+"'>" +
                        "<td>" + data.results[x].name + "</td>" +
                        "<td>$"+num+"</td>" +
                        "<td>" +
                            "<button class='btn btn-success' id=\"btn"+
	                            data.results[x].name+"\" onclick='addToCart(&apos;"
	                             +data.results[x].name.valueOf().toString() + "&#39;," 
	                             + num + ")'>Add to Cart</button>" +
                        "</td>" +
                    "</tr>"
    }
    tableString += "</tbody></table>";
        //appends the table to the html page
    $('#pokemon').html(tableString);
}});
//adds a pokemon to the cart
addToCart = function(name, price){
    //clear cart for new entries
    $("#cart").empty();
    //pushes pokemon and price into arrays
    cPokemon.push(name);
    cCost.push(price);
    //creates item for the cart with remove button
    for(var l = 0; l < cPokemon.length; l++){
        $("#cart").append("<tr>" +
        		"<td>"+cPokemon[l]+"</td>" +
        		"<td>"+cCost[l]+"</td>" +
        		"<td>" +
        			"<button class='btn btn-link' style='color:red;'" +
        			" onclick='removeFromCart(&apos;"+cPokemon[l]+"&apos;)'>&#10060;</button></td></tr>");
    }
    //increase total
    total = total += price;
    //change total amount on page along with css for pokemon on list
    $("#total").text("Total:  $"+ total.toFixed(2));
    $("#"+name).css("background-color","yellow");
    $("#btn"+name).prop("disabled",true);
};
//remove pokemon from cart
//reactivate button
//change color back to white
removeFromCart = function(name){
    //reset list
    $("#"+name).css("background-color","white");
    $("#btn"+name).prop("disabled",false);
    //remove item from array and rebuild list
    for(var r = 0;r<cPokemon.length;r++){
        if(cPokemon[r] == name){
            total = total - cCost[r];
            cPokemon.splice(r,1);
            cCost.splice(r,1);
            $("#total").text("Total:  $"+ total.toFixed(2));
        }
    }
    //clear div for new data
    $("#cart").empty();
    //create new list
    for(var l = 0; l < cPokemon.length; l++){
        $("#cart").append("<tr>" +
        		"<td>"+cPokemon[l]+"</td>" +
        		"<td>"+cCost[l]+"</td>" +
        		"<td>" +
        			"<button class='btn btn-link' style='color:red;' " +
        			"onclick='removeFromCart(&apos;"+cPokemon[l]+"&apos;)'>&#10060;" +
        			"</button>" +
        		"</td>" +
        	"</tr>");
    }
};

//reset page for new purchase
checkout = function(){
    for(var c = 0; c<cPokemon.length; c++){
        total = 0;
        $("#cart").empty();
        $("#total").text("Total: $");
        $("#"+cPokemon[c]).css("background-color","white");
        $("#btn"+cPokemon[c]).prop("disabled",false);
    }
    cPokemon = [];
    cCost = [];
};
