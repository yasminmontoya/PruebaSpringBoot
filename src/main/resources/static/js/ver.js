// Call the dataTables jQuery plugin
$(document).ready(function() {
// Cogemos los valores pasados por get
    var valores=getGET();
    if(valores)
    {
        //recogemos los valores que nos envia la URL en variables para trabajar con ellas
        var id = valores['id'];
        verPersona(id);
    }
});

function getHeaders() {
    return {
     'Accept': 'application/json',
     'Content-Type': 'application/json',
     'Authorization': localStorage.token
   };
}

async function verPersona(id) {

 const request = await fetch('api/personas/' + id, {
    method: 'GET',
    headers: getHeaders()
  });

  const persona = await request.json();

  document.getElementById('txtNombre').value = persona.nombre;
  document.getElementById('txtApellido').value = persona.apellido;
  document.getElementById('txtTipoDocumento').value = persona.tipoDocumento;
  document.getElementById('txtDocumento').value = persona.documento;

}

/**
* Funcion que captura las variables pasados por GET
* Devuelve un array de clave=>valor
*/
function getGET()
{
    // capturamos la url
    var loc = document.location.href;
    // si existe el interrogante
    if(loc.indexOf('?')>0)
    {
        // cogemos la parte de la url que hay despues del interrogante
        var getString = loc.split('?')[1];
        // obtenemos un array con cada clave=valor
        var GET = getString.split('&');
        var get = {};
        // recorremos todo el array de valores
        for(var i = 0, l = GET.length; i < l; i++){
            var tmp = GET[i].split('=');
            get[tmp[0]] = unescape(decodeURI(tmp[1]));
        }
        return get;
    }
}

