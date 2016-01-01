var express = require("express");

var app = express();

app.set('port',(process.env.PORT || 5000));

app.get('/',function  (req,res) {
	var sendBack = {

ipaddress: req.connection.remoteAddress,
language: req.headers["accept-language"].match(/^.*?(?=,)/)[0],
software: req.headers['user-agent'].match(/\((.*?)\)/)[1]
	}
	// console.log(req.headers);
	// console.log(req);
	// console.log(req.headers["X-Forwarded-For"]);
	res.end(JSON.stringify(req))
	res.end(JSON.stringify(req.headers["X-Forwarded-For"]))
	res.end(JSON.stringify(sendBack));
})

app.listen(app.get('port'), function  () {
	console.log("Server is running on %d port",app.get('port'));
});