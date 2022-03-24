$(document).ready(function() {
   // on ready
   cargarEmpresas();
});

function getHeaders() {
    return {
     'Accept': 'application/json',
     'Content-Type': 'application/json',
     'Authorization': localStorage.token
   };
}

async function cargarEmpresas() {
  const request = await fetch('api/empresas', {
    method: 'GET',
    headers: getHeaders()
  });
  const empresas = await request.json();


  let listadoHtml = '';
  for (let empresa of empresas) {
    listadoHtml += '<option value="' + empresa.id + '">'+ empresa.nombre +'</option>';
  }

  document.querySelector('#txtEmpresa').outerHTML = listadoHtml;

}



async function iniciarSesion() {
  let datos = {};
  datos.email = document.getElementById('txtEmail').value;
  datos.password = document.getElementById('txtPassword').value;

  const request = await fetch('api/login', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(datos)
  });

  const respuesta = await request.text();
  if (respuesta != 'FAIL') {
    localStorage.token = respuesta;
    localStorage.email = datos.email;
    window.location.href = 'index.html'
  } else {
    alert("Las credenciales son incorrectas. Por favor intente nuevamente.");
  }

}
