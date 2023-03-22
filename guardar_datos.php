<?php
// Conexión a la base de datos
$servername = "localhost"; // Servidor
$username = "id20487661_root"; // Nombre de usuario
$password = "_yy6%J{[6@N1Z*O["; // Contraseña
$dbname = "id20487661_trabajadores"; // Nombre de la base de datos

$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar la conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

// Obtener los datos del formulario
$nombre = $_POST['nombre'];
$apellido = $_POST['apellido'];
$cedula = $_POST['cedula'];
$horasDiurnas = $_POST['horasDiurnas'];
$horasVespertinas = $_POST['horasVespertinas'];
$horasNocturnas = $_POST['horasNocturnas'];

// Calcular el salario y los descuentos correspondientes
$salary = $horasDiurnas * 675 + $horasVespertinas * 700 + $horasNocturnas * 956.23;
$ahorroHab = 0;
if ($salary < 85000) {
    $ahorroHab = $salary * 0.01;
    $seguroSocial = $salary * 0.015;
} elseif ($salary >= 85000 && $salary <= 15000) {
    $ahorroHab = $salary * 0.015;
    $seguroSocial = $salary * 0.02;
} elseif ($salary > 15000) {
    $ahorroHab = $salary * 0.03;
    $seguroSocial = $salary * 0.025;
}

// Insertar los datos en la tabla datos_trabajadores
$sql = "INSERT INTO datos_trabajadores (nombre, apellido, cedula, horas_diurnas, horas_vespertinas, horas_nocturnas, salario_quincenal, ahorro_habitacional, seguro_social)
VALUES ('$nombre', '$apellido', '$cedula', '$horasDiurnas', '$horasVespertinas', '$horasNocturnas', '$salary', '$ahorroHab', '$seguroSocial')";

if ($conn->query($sql) === TRUE) {
    echo "Los datos fueron guardados exitosamente.";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>

