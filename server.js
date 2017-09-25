const express = require('express');
const app = express();
const path = require('path');
const prerender = require('prerender-node');

// Here we require the prerender middleware that will handle requests from Search Engine crawlers
// We set the token only if we're using the Prerender.io service
app.use(prerender.set('prerenderToken', 'YOUR API TOKEN HERE!'));
app.use(express.static(__dirname + '/public'));

// This will ensure that all routing is handed over to AngularJS
app.get('*', (req, res) => res.sendFile(path.resolve('public/index.html')));

app.listen(8081);

console.log("Go Prerender Go!");

