const Bundler = require('parcel-bundler');
const express = require ('express');
const app = express(); 

app.use(express.static('public'));

/* bundler config */
const file = './index.html';
const options = {};

const bundler = new Bundler(file, options);

app.use(bundler.middleware());

app.use((req, res, next) => {
    console.log(req.url);
    next();
})

app.listen(1338);