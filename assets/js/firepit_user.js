//Class that stores information about the current Firepit user.
var firepit_user = function(username){
    //Generate a random username if there is not one set.
    this.username = username || "user_";
}