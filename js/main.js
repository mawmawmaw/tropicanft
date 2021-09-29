document.addEventListener( 'DOMContentLoaded', function () {
 //MENU
    document.querySelector(".mobile-menu").addEventListener("click", function(){
        document.querySelector(".mobile-nav").style.display = "flex";
    })
    document.querySelector("#close-menu").addEventListener("click", function(){
        document.querySelector(".mobile-nav").style.display = "none";
    })
    document.querySelector(".mobile-nav ul").addEventListener("click", function(){
        document.querySelector(".mobile-nav").style.display = "none";
    })
    
} );