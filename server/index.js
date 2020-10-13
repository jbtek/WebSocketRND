const express = require("express");
const socket = require("socket.io");
const cors = require('cors');
const env = require('./config.env');

// App setup
const PORT = process.env.PORT || env.PORT;
const app = express();
const server = app.listen(env.PORT, function () {
  console.log(`Listening on port ${PORT}`);
  console.log(`${env.HOST}:${PORT}`);
});

// Static files
// app.use(express.static("public"));
app.use('*', cors())
// Socket setup
const io = socket(server);

io.on("connection", function (socket) {
  console.log("Made socket connection");
});

app.get('/', (req, res) => {
  console.log('HI api request get called')
})