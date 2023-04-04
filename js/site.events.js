
const _BTN_MODAL_MENSAGEM_  = document.getElementById("btnModal");


document.addEventListener("DOMContentLoaded", function (event) {
	
    _BTN_MODAL_MENSAGEM_.addEventListener('pointerdown', (event) => {			
        
        _SITE_.AbrirModalSite("Olá Mundo");
    });

});