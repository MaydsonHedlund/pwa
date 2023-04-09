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

    if (cityName == "Home") {

      for (let index = 0; index < elements.length; index++) {
        const element = elements[index];
        element.classList.add("invisible");
      }
    }
    else{
      for (let index = 0; index < elements.length; index++) {
        const element = elements[index];
        element.classList.remove("invisible");
      }
    }

  }

  function EfetuarLogin(params) {
    try {
      window.location.href="app.html"
    } catch (error) {
        console.log(error)
    }
  }


  function NovaVenda(event) {
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
