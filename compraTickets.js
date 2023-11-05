
/*------------------------------Seleccionar tarjeta y categoria simultaneamente---------*/

function seleccionarCategoria(categoria) {
    // Deseleccionar todas las tarjetas
    const tarjetas = document.querySelectorAll('.card');
    tarjetas.forEach((tarjeta) => {
      tarjeta.classList.remove('selected');
    });
  
    // Auto-seleccionar la tarjeta correspondiente
    const tarjetaCorrespondiente = document.getElementById(categoria.toLowerCase());
    if (tarjetaCorrespondiente) {
      tarjetaCorrespondiente.classList.add('selected');
    }
  
    // Asignar la categoría seleccionada al campo oculto del formulario
    document.getElementById('inputSeleccion').value = categoria;
  }

  /*----------------------------------Funcion Calcular precio al clickear y devolver resultado----------*/
    function getValorById(id) {
      return document.getElementById(id).value;
    }
  
    function calcular() {
      let seleccion = getValorById('inputSeleccion');
      let cantidad = parseFloat(getValorById('cantidad')); // Parsea la cantidad como número
      let res = 0;
      let resPorcentaje = 0
     if (cantidad > 0 && seleccion !== '') {
        switch (seleccion)  {
        case 'Estudiante': 
        res = cantidad * 200;
        resPorcentaje = res * (80 / 100);
        res -= resPorcentaje;
        break;
        
        case 'Trainee':
        res = cantidad * 200;
        resPorcentaje = res * (50 / 100);
        res -= resPorcentaje;
        break;
      
        case 'Junior': 
        res = cantidad * 200;
        resPorcentaje = res * (15 / 100);
        res -= resPorcentaje;
        break;
      }}
  
      else {
        alert("Error (seleccione valores validos)");
      }
  
      actualizarContenido('res', 'Total a pagar: $' + res); // Agrega el símbolo de dólar al resultado
    }
  
    function actualizarContenido(id, nuevoContenido) {
      document.getElementById(id).textContent = nuevoContenido; // Usa textContent para establecer el texto
    }
  
    /*-------------------Boton borrar seleccion y form-----------*/

    function resetearFormulario() {
    document.getElementById('form.compra').reset();
  
    // Deseleccionar todas las tarjetas
    const tarjetas = document.querySelectorAll('.card');
    tarjetas.forEach((tarjeta) => {
      tarjeta.classList.remove('selected');
    });
  
    // Borrar el resultado
    actualizarContenido('res', 'Total a pagar: $');
  }