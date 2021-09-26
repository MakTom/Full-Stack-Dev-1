var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var requestTime = (req,res,next) => {
    req.requestTime=Date.now();
    next();
}
app.use(requestTime);

app.get('/greet',(req,res) =>{  
    console.log(`Get received: ${req.requestTime}`);
    res.send('Hello World Get');
});

app.post('/greet',(req,res) =>{  
    console.log(`Post received: ${req.requestTime}`);
    res.send('Hello World Post');
});

app.post('/greet',(req,res) =>{  
    console.log(`Post received: ${req.requestTime}`);
    res.send('Hello World Post');
});

app.post('/greet',(req,res) =>{  
    console.log(`Post received: ${req.requestTime}`);
    res.send('Hello World Post');
});

app.listen(3000);

