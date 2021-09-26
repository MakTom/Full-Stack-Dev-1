var express = require('express');
var app = express();

app.listen(3000);

app.get('/html',(req,res)=>{
    res.send('<html><head><body><h1>Hello World</h1></body></head></html>');
});

app.get('/json',(req,res)=>{
    res.json({firstname:'John', lastname:'Smith'});
});

// char before '+' can have any number of occurence
app.get('/toronto+team',(req,res)=>{
    res.send('<html><head><body><h1>Go + Toronto!</h1></body></head></html>');
});

// '*' can be relaced by any char of any length
app.get('/toronto*team',(req,res)=>{
    res.send('<html><head><body><h1>Go * Toronto!</h1></body></head></html>');
});

// 
app.get('/toronto?team',(req,res)=>{
    res.send('<html><head><body><h1>Go ? Toronto!</h1></body></head></html>');
});