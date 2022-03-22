// Call the dataTables jQuery plugin
$(document).ready(function() {
    cargarPersonas();
  $('#personas').DataTable();
  actualizarEmailDelUsuario();
});

function actualizarEmailDelUsuario() {
    document.getElementById('txt-email-usuario').outerHTML = localStorage.email;
}


async function cargarPersonas() {
  const request = await fetch('api/personas', {
    method: 'GET',
    headers: getHeaders()
  });
  const personas = await request.json();


  let listadoHtml = '';
  for (let persona of personas) {
    let botonEliminar = '<a href="#" onclick="eliminarPersona(' + persona.id + ')" class="btn btn-danger btn-circle btn-sm"><i class="fas fa-trash"></i></a>';
    let botonEditar = '<a href="editar.html" class="btn btn-warning btn-circle btn-sm"><i class="fas fa-solid fa-pen"></i></a>';
    let botonVer = '<a href="ver.html" class="btn btn-info btn-circle btn-sm"><i class="fas fa-solid fa-eye"></i></a>';

    let personaHtml = '<tr><td>'+persona.id+'</td><td>' + persona.documento + '</td><td>'
                    + persona.nombre+'</td><td>'+persona.apellido
                    + '</td><td>' + botonVer + ' ' + botonEditar + ' ' + botonEliminar + '</td></tr>';
    listadoHtml += personaHtml;
  }

document.querySelector('#personas tbody').outerHTML = listadoHtml;

}

function getHeaders() {
    return {
     'Accept': 'application/json',
     'Content-Type': 'application/json',
     'Authorization': localStorage.token
   };
}

async function eliminarPersona(id) {

  if (!confirm('¿Desea eliminar esta persona?')) {
    return;
  }

 const request = await fetch('api/personas/' + id, {
    method: 'DELETE',
    headers: getHeaders()
  });

  location.reload()
}

async function crearPersona() {
  let datos = {};
  datos.nombre = document.getElementById('txtNombre').value;
  datos.apellido = document.getElementById('txtApellido').value;
  datos.tipoDocumento = document.getElementById('txtTipoDocumento').value;
  datos.documento = document.getElementById('txtDocumento').value;

  const request = await fetch('api/personas', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(datos)
  });
  alert("La persona fue creada con exito!");
  window.location.href = 'index.html'

}

async function verPersona(id) {

 const request = await fetch('api/personas/' + id, {
    method: 'GET',
    headers: getHeaders()
  });

  const persona = await request.json();

  document.querySelector('#txtNombre').value(persona.nombre);
  document.querySelector('#txtApellido').value(persona.apellido);
  document.querySelector('#txtTipoDocumento').value(persona.tipoDocumento);
  document.querySelector('#txtDocumento').value(persona.documento);

  window.location.href = 'ver.html'

}