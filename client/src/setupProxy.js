const proxy = require('proxy-middleware');

module.exports = app => {
  // setup proxies
  // 1st api
  app.use("https://newsapi.org/v2/top-headlines?country=gb&apiKey=0dc27b8b03d146529a79da477d2aaa48", proxy("https://api.newscycle.io/api"));
 

  
 
};