//Message class that we will use to interact with the database
//and server.
var tribe_message = function(){
    this.sender = null;
    this.chatroom = null;
    this.content = null;
}

tribe_message.prototype.import_mes = function(message){
    this.sender = message.sender;
    this.chatroom = message.chatroom;
    this.content = message.content;
}