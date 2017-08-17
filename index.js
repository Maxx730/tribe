var ex = require('express');
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

//Sets our assets folder to the root foler for including files
//into index.html
app.use(ex.static('assets'));

//Returns the index file when the site it visited.
app.get('/',function(req,res){
    res.sendFile(__dirname+'/htm/index.html');
});

//Handles incoming and outgoing connections to server.
io.on('connection',function(socket){
    console.log("User connected to server...");

    socket.on('tribe_message',function(msg){
        var message = JSON.parse(msg);

        io.emit('chat_update',msg);
    });

    socket.on('user-typing',function(data){
        
    });

    socket.on('disconnect',function(){
        console.log("User disconnected from server...");
    });
});

//Starts up the http server on port 3000
http.listen(3000,function(){
    console.log("Listening on port *3000...");
});