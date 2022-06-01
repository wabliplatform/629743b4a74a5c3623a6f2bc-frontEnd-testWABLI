const path = require('path');

module.exports = {
  entry: {
	'HomePage' : './javascript/HomePage.js',
	'CreateArticle' : './javascript/CreateArticle.js',
},
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    
  },
};