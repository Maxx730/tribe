window.onload = function(){
    window.tribe_authenticate = new authentication_handler();

    if(window.tribe_authenticate.is_logged_in()){
        window.firepit_user = new user_create();
        window.chat_eng = new chat_engine();
    }else{
        console.log("ERROR: User not logged in.");
    }
}