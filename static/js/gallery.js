
var items=$('.item');
var temp=$('.light-box');
var thisId;
temp.html("<p class='close'>X</p><div class='previous'><h2>previous</h2></div> <div id='contenido'> </div> <div class='next'><h2>next</h2></div>");
$(".press").each(function(index) {
    console.log(index + ": " + $(this).text());
    $(this).attr('id',""+index);
});
$('.press').click(function(){
    thisId=this.id;
    showFrame(this.id);
});
function showFrame(id){
    temp.css("transform"," scale(1)");
    item=items.eq(id).clone();
    var frame=item.find(".object");
    frame.addClass("item-2");
    $('#contenido').html(frame);   
}
$('.close').click(function(){
    temp.css("transform"," scale(0)");
});
$('.next').click(function(){
    thisId++;
    if(thisId<items.length){
        showFrame(thisId);
    }else{
        console.log("ya no hay mas elemetos");
    }
});
$('.previous').click(function(){
    thisId--;
    if(thisId>=0){
        showFrame(thisId);
    }else{
        console.log("ya no hay mas elemetos");
    }
});