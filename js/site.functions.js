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
    evt.currentTarget.className += " active";
  }

  function EfetuarLogin(params) {
    try {
      window.location.href="index.html"
    } catch (error) {
        console.log(error)
    }
  }