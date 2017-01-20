var express = require("express"),
    path = require("path"),
    app = express();

app.use(express.static(path.join(__dirname, './views')));
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'html');

app.get('/', function(req, res) {
    res.sendFile("index.html");
});

var server = app.listen(8000, function() {
    console.log("listening on port 8000");
});

var io = require ('socket.io').listen(server);

io.sockets.on('connection', function (socket) {
    console.log("a user has connected");
    socket.on('disconnect', function(){
        console.log("a user has disconnected");
    });
});
// io.sockets.on('connection', function (socket) {
//     var username;
//     socket.on('name_input', function(data) {
//         username = data.name;
//         socket.emit('show_chat', username, history);
//     });
//     socket.on('message_input', function(data) {
//         var message = (username+": "+data.message);
//         history.push(message);
//         io.emit('update_board', history);
//     });
//     console.log(socket.id);
// });
