
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
//modal function
function centrar(elem,posy){ 
    var posicion;
    if(posy==0){
        posicion=60;
    }else{
        posicion=posy;
    }
    elem.style.top=posicion + 'px'
    
}

function clickHandler(path) {
    let divModal = document.getElementById('modal');
    divModal.style.display="block";
    divModal.innerHTML = "";
    
    let divCerrar = document.createElement('div');
    divCerrar.setAttribute('class', 'modal-close');
    
    let iconCerrar= document.createElement('img');
    iconCerrar.setAttribute('src', 'static/img/icon/cerrar.png')
    divCerrar.appendChild(iconCerrar);

    divModal.appendChild(divCerrar);

    divCerrar.addEventListener('click',function(){
        event.preventDefault();
        closeModal();
    });

    let divContent=document.createElement('div');
    divContent.setAttribute('class','modal-content');

    let frame=document.createElement('iframe');
    frame.setAttribute('src',path);

    divContent.appendChild(frame);
    divModal.appendChild(divContent);
    var y = window.scrollY;
    console.log("posicion del scroll",y);
    $("html, body").css("overflow","hidden");
    centrar(divModal,y);
}

function closeModal(){
    let divModal = document.getElementById('modal');
    divModal.style.display="none";
    $("html, body").css("overflow","scroll");
}