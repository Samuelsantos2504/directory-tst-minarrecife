<?php
function ValidacionCampo($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = ValidacionCampo($_POST["Nombre"]);
    $email = ValidacionCampo($_POST["Correo"]);
    $Contact = ValidacionCampo($_POST["Telefono"]);
    $Message = ValidacionCampo($_POST["Mensaje"]);

    $to = "samuelsantosb102504@gmail.com";
    $subject = "Nuevo contacto desde la página web";
    $message = "
    <html>
    <head>
        <title>Nuevo contacto</title>
    </head>
    <body>
        <h2>Detalles del contacto</h2>
        <p><strong>Nombre:</strong> $name</p>
        <p><strong>Correo:</strong> $email</p>
        <p><strong>Teléfono de Contacto:</strong> $Contact</p>
        <p><strong>Teléfono de Contacto:</strong> $Message</p>
    </body>
    </html>
    ";

    $headers = "MIME-Version: 1.0\r\n";
    $headers .= "Content-type: text/html; charset=UTF-8\r\n";
    $headers .= "From: <$email>\r\n";

    if (mail($to, $subject, $message, $headers)) {
        echo "Correo enviado exitosamente.";
    } else {
        echo "Error al enviar el correo.";
    }
}
?>
