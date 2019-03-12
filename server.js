const Bundler = require('parcel-bundler');
const app = require('express')();

app.use(express.static('public'));

/* bundler config */
const file = './index.html';
const options = {};

const bundler = new Bundler(file, options);

app.use(bundler.middleware());

app.listen(1337);
