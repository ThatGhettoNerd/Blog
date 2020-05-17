//jshint esversion:6

const express = require('express');
const path = require('path');
const app = express();
const ejs = require('ejs');
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/contact', (req, res) => {
    res.render('contact');
});



app.listen('3000', function() {
    console.log('App is listening on port 3000');
});



