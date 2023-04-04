

//function handleFile(files){
//    const reader = new FileReader();
//    reader.onload = (event) => {
//        let data = event.target.result;
//        document.querySelector("#texto").value = data; 
//    };
//    reader.readAsText(files[0]);
//}
//
//
//function LoadPartial(params) {    
//    try {        
//        
//        //var body = document.getElementsByClassName(".render-body");
//        //body.innerHTML = "teste";
//        //console.log(body);
//        $('.render-body').load('modalMensagem.html');
//    } catch (error) {    
//        console.log(error)
//    }
//}

//window.addEventListener('load',
//
//);



const _BTN_MODAL_MENSAGEM_  = document.getElementById("btnModal");


document.addEventListener("DOMContentLoaded", function (event) {
	
    _BTN_MODAL_MENSAGEM_.addEventListener('pointerdown', (event) => {			
        
        _SITE_.AbrirModalSite("Olá Mundo");
    });

});