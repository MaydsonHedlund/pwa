
const _BTN_MODAL_MENSAGEM_  = document.getElementById("btnModal");


document.addEventListener("DOMContentLoaded", function (event) {
	
    _BTN_MODAL_MENSAGEM_.addEventListener('pointerdown', (event) => {			
        
        _SITE_.AbrirModalSite("Olá Mundo");
    });


    var menuFooter = document.getElementsByClassName("menu-footer");

    for (var i = 0; i < menuFooter.length; i++) {

        menuFooter[i].addEventListener('click', function() {

            for (var i = 0; i < menuFooter.length; i++) {
                menuFooter[i].classList.remove("menu-activate");
                menuFooter[i].classList.remove("heading");
                menuFooter[i].classList.add("menu-deactivate");
            }
            
            let classElementTarget = this.classList[0].replace("-heading","");

            let element = document.getElementsByClassName(classElementTarget)[0];

            element.classList.remove("menu-deactivate");
            element.classList.add("menu-activate");
            document.getElementsByClassName(element.classList[0] + "-heading")[0].classList.add("heading")
            document.getElementsByClassName(element.classList[0] + "-heading")[0].classList.remove("menu-activate")
            document.getElementsByClassName(element.classList[0] + "-heading")[0].classList.remove("menu-deactivate")

        });
    }
});