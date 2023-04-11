const _SITE_ = {}

_SITE_.AbrirModalSite = function (params) {    
    try {        
       
        $("#txtTextoMensagem").text(params);
        $("#modalMensagem").modal('show');

    } catch (error) {    
        console.log(error)
    }
}


_SITE_.AbrirModalCadastroCliente = function (params) {    
  try {        
      
      $("#modalCadastroCliente").modal('show');
      
  } catch (error) {    
      console.log(error)
  }
}

_SITE_.CadastrarCliente = function () {    
  try {        
      AbrirTelaSacola();
      
      $("#modalCadastroCliente").modal('hide');
  } catch (error) {    
      console.log(error)
  }
}

_SITE_.CancelarCadastrarCliente = function () {    
  try {        
      
      
      $("#modalCadastroCliente").modal('hide');
  } catch (error) {    
      console.log(error)
  }
}


function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";

    if (evt != undefined) {
      evt.currentTarget.className += " active";
    }

    elements = document.getElementsByClassName("sale")

    if (cityName == "Home" || cityName == "Cancelar") {

      //for (let index = 0; index < elements.length; index++) {
      //  const element = elements[index];
      //  element.classList.add("invisible");
      //}
      element = document.getElementsByClassName("fixed-bottom")[0]
      element.classList.add("invisible");
      

    }
    else{
      //for (let index = 0; index < elements.length; index++) {
      //  const element = elements[index];
      //  element.classList.remove("invisible");
      //}
      element = document.getElementsByClassName("fixed-bottom")[0]
      element.classList.remove("invisible");
    }

    

  }

  function EfetuarLogin(params) {
    try {
      window.location.href="app.html"
    } catch (error) {
        console.log(error)
    }
  }


  function NovaVenda() {
    try {
      

      elements = document.getElementsByClassName("sale")
    
      for (let index = 0; index < elements.length; index++) {
        const element = elements[index];
        element.classList.remove("invisible");
      }
    
      let element = document.getElementsByClassName("col-identity")[0];
      element.click();

    } catch (error) {
        console.log(error)
    }
  }


  function AbrirTelaSacola() {
    try {
      
      let element = document.getElementsByClassName("col-cart")[0];
      element.click();

    } catch (error) {
      console.log(error)
    }

  }


  function AbrirTelaPagamento() {
    try {
      
      let element = document.getElementsByClassName("col-payment")[0];
      element.click();

    } catch (error) {
      console.log(error)
    }

  }


  function AbrirTelaFiscal() {
    try {
      
      let element = document.getElementsByClassName("col-fiscal")[0];
      element.click();

    } catch (error) {
      console.log(error)
    }

  }


  function AbrirTelaInicial() {
    try {
      
      let element = document.getElementsByClassName("col-home")[0];
      element.click();
      

    } catch (error) {
      console.log(error)
    }

  }