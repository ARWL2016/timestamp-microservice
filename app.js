const express = require('express');
const hbs = require('handlebars'); 

var app = new express(); 

const port = process.env.PORT || 3000; 

app.set('view engine', hbs); 

app.get('/', (req, res) => {
    res.render(__dirname + '/public/views/index.hbs');
});

app.get('/date', (req, res) => {
    var dateSent = req.query.date; 
var timestamp = parseInt((new Date(dateSent).getTime()) / 1000); 
    res.render(__dirname + '/public/views/index.hbs', {
        date: dateSent, 
        timestamp: timestamp
    });
    console.log(req.query.date);
    
});

app.listen(port, () => {
    console.log(`Running on port ${port}`);
})

