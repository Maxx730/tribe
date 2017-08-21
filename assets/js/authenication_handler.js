//Class that will check if the user 
var authentication_handler = function(){
    console.log("Initializing authentication handler...");

    //Check this if we are in the chat program already, if 
    //the username and password cookie.
    if(){

    }else{
        //Check the login for the user when they end their username and
        //password, if success then set the cookie with a expire date as well
        //as then forward them to the chat page.
        if(this.check_database()){

        }else{

        }
    }
}

//Checks if a cookie already exists for the user and then checks it against
//the Tribe server, if all passes then the user can now chat.
authentication_handler.prototype.is_logged_in = function(){
    var cook = decodeURIComponent(document.cookie);
    var cookArray = cook.split(";");
    var uname,passwrd;

    //Loop through all the cookies and check for the values we want to find.
    for(var i = 0;i < cookArray.length;i++){
        var temp = cookArray[i].split("=");

        //Find the username and password.
        switch(temp[0]){
          case " uname":
            uname = temp[1];
          break;
          case " pswrd":
            passwrd = temp[1];
          break;
        }
    }

    console.log("USERNAME : "+uname+" | PASSWORD : "+passwrd);

    //Next we want to send a query to the database and check if the user exists
    //in the database as well as the password.
    return true;
}

//Function that will send an AJAX request to the tribe server to
//check if the username and password is correct.
authentication_handler.prototype.check_database = function(){
}
