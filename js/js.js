/* Menu mobile */
    var menu = document.getElementById('menu');
    var header = document.getElementById('header');
    var botaoMenu = document.getElementById('botaoMenu');
    var botaoMenuFechar = document.getElementById('botaoMenuFechar');
    var divBotao = document.getElementsByClassName('divBotao');

    function menuMobile(){
        botaoMenuFechar.style.display = "block";
        menu.style.display = "block";
        header.style.height = "300px";
}   
    botaoMenuFechar.addEventListener('click', ()=>{
        botaoMenuFechar.style.display = "none";
    });
    function menuMobileFechar(){
        menu.style.display = "none";
        header.style.height = "auto";
}

/* âncora */

var $doc = $('html, body');
$('a').click(function() {
    $doc.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 1000);
    return false;
});
