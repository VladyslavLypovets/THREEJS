var express = require('express');
var app = express();

app.use(express.static(__dirname + "/"));

app.get('*', function (req, res) {
res.sendFile(__dirname + '/index.html');
});

//Set port
app.set('port', (process.env.PORT || 9000));

app.listen(app.get('port'), function(){
console.log('Server started on port ' + app.get('port'));
});