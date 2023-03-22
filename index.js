let formulario = document.getElementById('form');

// Funcion para calcular el salario del trabajador
function calculateSalary() {
  let infoper = document.getElementById('personalInfo');
 
 var nombre = document.getElementById('nombre').value;
 var apellido = document.getElementById('apellido').value;
 var cedula = document.getElementById('cedula').value;
 var horasDiurnas = parseFloat(document.getElementById('horasDiurnas').value);
 var horasVespertinas = parseFloat(document.getElementById('horasVespertinas').value);
 var horasNocturnas = parseFloat(document.getElementById('horasNocturnas').value);

 var salary = horasDiurnas * 675 + horasVespertinas * 700 + horasNocturnas * 956.23;
 var ahorroHab = 0;
 var seguroSocial = 0;
 // Crear instancia de XMLHttpRequest
 var xhttp = new XMLHttpRequest();
 var url = "./guardar_datos.php";
 // Descuento que se aplica si el empleado devenga menos de 85.000
 if (salary < 85000) {
   ahorroHab = salary * 0.01;
   seguroSocial = salary * 0.015;
 }
 // Descuento que se aplica si el empleado devenga entre 85.000 y 150.000
 if (salary >= 85000 && salary <= 150000) {
   ahorroHab = salary * 0.015;
   seguroSocial = salary * 0.02;
 } 
 // Descuento que se aplica si el empleado devenga mas de 150.000
 else if (salary > 150000) {
   ahorroHab = salary * 0.03;
   seguroSocial = salary * 0.025;
 }

 descuento = ahorroHab + seguroSocial;
 salarioDescuento = (salary + (descuento*2));

 datos = {
   'nombre': nombre,
   'apellido': apellido,
   'cedula': cedula,
   'horasDiurnas': horasDiurnas,
   'horasVespertinas': horasVespertinas,
   'horasNocturnas': horasNocturnas,
   'salario': salary.toFixed(2),
   'salarioDescuento': salarioDescuento.toFixed(2),
   'ahorroHabitacional': ahorroHab.toFixed(2),
   'seguroSocial': seguroSocial.toFixed(2)
 };

 // Mostramos los datos que enviamos a traves de la propiedad innerhtml
 document.getElementById("caja").innerHTML = 
 "<h2>Información Personal:</h2> <br><br>" + "<p>NOMBRE: "+ datos.nombre + "</p> <br>" + "<p>APELLIDO: "+ datos.apellido + "</p> <br>" + 
 "<p>CEDULA: " + datos.cedula + "</p> <br><br><br> <h2>DETALLES DEL SUELDO:</h2><br><br>" + "<p>SALARIO: "+ datos.salario + " Bs</p> <br>" +
 "<p>AHORRO HABITACIONAL: "+ datos.ahorroHabitacional + "</p> <br>" + "<p>SEGURO SOCIAL: "+ datos.seguroSocial + "</p> <br>" +
 "<p>SUELDO QUINCENAL CON DESCUENTO: "+ datos.salarioDescuento + " Bs</p> <br>";

 // Convertir objeto en formato JSON
 var datosJSON = JSON.stringify(datos);
 
 // Establecer cabeceras de la petición
 xhttp.setRequestHeader('Content-Type', 'application/json');
 
 // Enviar datos al servidor
 xhttp.open("POST", url, true);
 xhttp.send(datosJSON);
 
 // XMLHttpRequest como objeto para obtener informacion
 var xhr = new XMLHttpRequest();

 // Configurar la solicitud
 xhr.open("POST", "guardar_datos.php", true);
 xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

 // Enviar los datos del formulario al archivo PHP
 xhr.send("nombre=" + nombre + "&apellido=" + apellido + "&cedula=" + cedula + "&salario=" + salary + "&ahorroHabitacional=" + ahorroHabitacional + "&seguroSocial=" + seguroSocial+ "&salarioDescuento="+ salarioDescuento);
 xhr.open("POST", url, true);
 xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
 xhr.onreadystatechange = function() {
     if (xhr.readyState === 4 && xhr.status === 200) {
         console.log(xhr.responseText);
     }
 };
 xhr.send(data);

 
 
}