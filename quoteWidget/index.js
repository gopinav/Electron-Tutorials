let request = require('request');

request("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1", function(err, response, body){
body = JSON.parse(body);
let randomQuote = body[0]["content"];
document.getElementById("quote").innerHTML = randomQuote; 

});

setInterval(function(){
    request("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1", function(err, response, body){
    body = JSON.parse(body); 
    let randomQuote = body[0]["content"];
	document.getElementById("quote").innerHTML = randomQuote; 
});
}, 5000);