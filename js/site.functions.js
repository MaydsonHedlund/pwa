const _SITE_ = {}

_SITE_.AbrirModalSite = function (params) {    
    try {        
        $("#txtTextoMensagem").text(params);
        let modal = new bootstrap.Modal(document.getElementById('modalMensagem'));
        modal.show();            
    } catch (error) {    
        console.log(error)
    }
}

_SITE_.LoadPartial = function (params) {    
    try {        
        console.log(params)
    } catch (error) {    
        console.log(error)
    }
}