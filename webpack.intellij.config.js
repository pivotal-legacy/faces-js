var webpack = require('webpack');
var config = require('./webpack.config');
config.output.path = '../flashcards/build/resources/main/static'

module.exports = config;
