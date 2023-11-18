var express = require('express');
var cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config()

var app = express();

app.use(bodyParser.urlencoded({extended: false}))

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});


app.use("/api", require("./controllers/metacontroller"))

const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});
