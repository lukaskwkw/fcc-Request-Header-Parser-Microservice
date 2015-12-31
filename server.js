var express = require("express");

var app = express();

app.set('port',(process.env.PORT || 5000));

app.get('/',function  (req,res) {
	var sendBack = {
ipaddress: req.connection.remoteAddressp,
language: req.headers["accept-language"].match(/^.*?(?=,)/)[0],
software: req.headers['user-agent'].match(/\((.*?)\)/)[1]
	}
	// console.log(req.headers);
	res.end(JSON.stringify(sendBack));
})

app.listen(app.get('port'), function  () {
	console.log("Server is running on %d port",app.get('port'));
});