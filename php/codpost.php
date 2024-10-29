<?php 
$x = $_POST['submit']
if ($_SERVER["REQUEST_METHOD"] == "POST") {
     $bascula = htmlspecialchars($_POST['basculas']);
     $nombre = htmlspecialchars($_POST['nombre']); 
     $telefono = htmlspecialchars($_POST['telefono']); 
     $correo = htmlspecialchars($_POST['correo']); 
     $mensaje = htmlspecialchars($_POST['mensaje']); 
     $to = "amador0182@gmail.com"; 
     $subject = "Consulta sobre ". $bascula ."\n" ; 
     $message = "Nombre: " . $name . "\nTeléfono: " . 
     $telefono . "\nCorreo Electrónico: " . $correo .
      "\nConsulta: " . $mensaje . "\n"; 
    $headers = "From: " .$correo;
    if (mail($to, $subject, $message, $headers)) { 
        echo "Correo enviado correctamente."; } 
    else { echo "Error al enviar el correo."; } } 
    die();
?>