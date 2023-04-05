
const _BTN_MODAL_MENSAGEM_  = document.getElementById("btnModal");


document.addEventListener("DOMContentLoaded", function (event) {
	
    _BTN_MODAL_MENSAGEM_.addEventListener('pointerdown', (event) => {			
        
        _SITE_.AbrirModalSite("Olá Mundo");
    });

    var menuFooter = document.getElementsByClassName("menu-footer");

    var myFunction = function(element) {
        //var attribute = this.getAttribute("data-myattribute");
        alert(element);
    };

    for (var i = 0; i < menuFooter.length; i++) {
        
        menuFooter[i].addEventListener('click', function() {
            
    
            for (var i = 0; i < menuFooter.length; i++) {        
                menuFooter[i].classList.remove("menu-activate");
                menuFooter[i].classList.remove("heading1");
                menuFooter[i].classList.add("menu-deactivate");
            }
            
            
            this.classList.add("menu-activate");
            this.classList.add("heading1");
            //console.log(menuFooter.classList.c);
            //alert(this.classList.contains("foo"));
            //menuFooter.classList.add("menu-deactivate");
        });


    }
});