//Class that will handle asking the user for a username
//to chat with while we temporarily do not have registered 
//users.
var user_create = function(mes){
    this.mes = mes || "Please enter a username...";
    this.user = null;
    this.init();
}

//Initialize a JS window to ask the user for a new username.
user_create.prototype.init = function(){
    var req = prompt(this.mes);

    //Make sure that the username is not just set to blank.
    if(req != ""){
        this.user = new firepit_user(req);
    }
}