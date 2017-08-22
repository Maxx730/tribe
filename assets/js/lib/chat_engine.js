//Class that will handle the chat using the socket io framework
//to send and recieve messages throughout the chat from the client
//and server.
var chat_engine = function(){
    this.load_anim = new load_animator(document.getElementById('firepit-message-animation'),"#ce6120");
    //Holds the name of the user that is using the chat.
    this.username = null;
    this.chatbox = null;
    //Socket IO object that we will use to send a receieve messages.
    this.io = io();

    this.init();
    this.io_events();
    this.set_events();
}

chat_engine.prototype.init = function(){
    this.chatbox = document.getElementById("chatbox-view");
}

//Set the events for the io sockets etc for recieving info from
//the server.
chat_engine.prototype.io_events = function(){
    var context = this;
    this.io.on("chat_update",function(msg){
        var parsed = JSON.parse(msg);
        //Check if we are display a chat bubble from the current user or not.
        if(parsed.sender == window.firepit_user.user.username){
            context.chatbox.innerHTML += "\n<li class = 'single-message'><div class = 'single-mes-background'><div class = 'message-sender-img'></div><span class = 'message-sender'>"+parsed.sender+"</span><span class = 'message-content'>"+parsed.content+"</span></div></li>";
        }else{
            context.chatbox.innerHTML += "\n<li class = 'single-message other-user'><div class = 'single-mes-background'><div class = 'message-sender-img'></div><span class = 'message-sender'>"+parsed.sender+"</span><span class = 'message-content'>"+parsed.content+"</span></div></li>";            
        }
    });
}

//Sets all the events for the web app to interact in different ways
//with the chat program.
chat_engine.prototype.set_events = function(){
    var context = this;
    /*document.getElementById("send_message_btn").addEventListener('click',function(){
        var content = document.getElementById("new-message-content").value;
        document.getElementById("new-message-content").value = "";

        if(content != ""){
            context.io.emit("tribe_message",'{"sender":"maxx730","chatroom":"generic tribe","content":"'+content+'","message_type":"standard"}');
        }
    });*/

    //Check if there is a keydown event pressing the enter key, this will then send the message
    //to the server.
    document.getElementById("new-message-content").addEventListener("keydown",function(evt){
        if(window.firepit_user != null || typeof window.firepit_user != "undefined"){
            if(evt.key == "Enter" && document.getElementById("new-message-content").value != ""){
                context.load_anim.animate();
                var content = document.getElementById("new-message-content").value;
                document.getElementById("new-message-content").value = "";
                context.io.emit("tribe_message",'{"sender":"'+window.firepit_user.user.username+'","chatroom":"generic tribe","content":"'+content+'","message_type":"standard"}');
            }
        }

        //We want to send a message to the server that there is someone currently typing
        //and then update everyone elses screen to show that someone is typing.
        context.io.emit("user-typing");
    });
}