//Class that will handle the loading animation when changing 
//rooms and sending messages.
var load_animator = function(el,color){

    this.anim_color = color || "#FFF";
    this.target_el = el;
    this.init();
}

//Build in the filling element into the target element.
load_animator.prototype.init = function(){
    this.filler = document.createElement("DIV");
    this.filler.id = "animation_element";
    this.filler.style = "width:0%;height:100%;position:absolute;background:"+this.anim_color+";";
    //append the loading animation div into the target element,
    //this element will always fill the height and the target 
    //MUST have a relative value.
    this.target_el.appendChild(this.filler);
}

load_animator.prototype.animate = function(){
    var context = this;
    if(window.jQuery){
        console.log("Animating...");
        $("#"+context.filler.id).animate({width:"100%"},function(){
            $("#"+context.filler.id).animate({width:"0%"});
        });
    }else{
        console.log("ERROR: jQuery has not been loaded...");
    }
}