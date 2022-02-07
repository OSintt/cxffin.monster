var express = require('express');
var app = express();

app.engine('.html', require('ejs').__express);

app.set('views', __dirname + '/views');

app.set('view engine', 'ejs');


app.set('port', process.env.PORT || 3000);



app.get('/', function(req, res){
  res.render('index');
});

app.use('/assets', express.static(__dirname + '/public'));

app.listen(app.get('port'));
console.log('Express app started on port %d', app.get('port'));