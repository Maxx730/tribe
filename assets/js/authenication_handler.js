//Class that will check if the user 
var authentication_handler = function(){
    console.log("Initializing authentication handler...");

    document.cookie = "uname=maxx730";
    document.cookie = "pswrd=remote12";
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