//node module requires for web and websockets server
var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var app = express();

var serverPort = '3000';

app.use(express.static(__dirname + '/')); 	// set the static files location /img will be /img for users

app.use('/content/AFNI/publications/2716/wor/wo_4514/css', express.static(__dirname + '/node_modules/angular-material'));     // Angular Material CSS
app.use('/content/AFNI/publications/2716/wor/wo_4514/css', express.static(__dirname + '/node_modules/angular-material-data-table/dist'));     // MD Data Table CSS
app.use('/content/AFNI/publications/2718/wor/wo_4525/css', express.static(__dirname + '/css'));     // MD Data Table CSS


app.use('/content/AFNI/publications/2716/wor/wo_4514/js', express.static(__dirname + '/node_modules/angular'));     // set static files location for angular js files
app.use('/content/AFNI/publications/2716/wor/wo_4514/js', express.static(__dirname + '/node_modules/angular-aria'));     // set static files location for angular animate
app.use('/content/AFNI/publications/2716/wor/wo_4514/js', express.static(__dirname + '/node_modules/angular-animate'));     // set static files location for angular animate
app.use('/content/AFNI/publications/2716/wor/wo_4514/js', express.static(__dirname + '/node_modules/angular-messages'));     // set static files location for angular messages
app.use('/content/AFNI/publications/2716/wor/wo_4514/js', express.static(__dirname + '/node_modules/angular-material'));     // set static files location for angular material
app.use('/content/AFNI/publications/2716/wor/wo_4514/js', express.static(__dirname + '/node_modules/angular-material-data-table/dist'));     // MD Data Table js

app.use('/content/AFNI/publications/2718/wor/wo_4525/js', express.static(__dirname + '/js'));     // Calculator and comparray JS

//app.use('/angular', express.static(__dirname + '/node_modules/svg-morpheus/compile/unminified'));
//app.use('/angular', express.static(__dirname + '/node_modules/v-accordion/dist'));
//app.use('/angular', express.static(__dirname + '/node_modules/angular-ui-router/release'));
//app.use('/d3', express.static(__dirname + '/node_modules/d3/build'));

app.use(bodyParser()); 						// pull information from html in POST
app.use(methodOverride()); 					// simulate DELETE and PUT

var server = require('http').Server(app);

//Start the Express Server
server.listen(serverPort, function () {
    console.log('Simple static server listening on port ' + serverPort);
});