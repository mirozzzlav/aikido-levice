<?php
require_once __DIR__ . "/phpmailer/src/Exception.php";
require_once __DIR__ . "/phpmailer/src/PHPMailer.php";
require_once __DIR__ . "/phpmailer/src/SMTP.php";
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

$authEmail = "web@aikidolevice.sk";
$authPass = "A!kidoLevice1Web";
$emailTo = "info@aikidolevice.sk";
$subject = "Správa z kontaktného formulára Aikido Levice";

function validateInputs() {
	return !empty($_POST["from"])
	    && filter_var($_POST["from"],FILTER_VALIDATE_EMAIL)
	    && !empty($_POST["message"]);
}


/// main program
if (!validateInputs()) {
	echo "NOK";
	return;
}

$mail = new PHPMailer(true);
try {
    $mail->isSMTP();
    $mail->CharSet = 'UTF-8';
    $mail->Host = 'smtp.m1.websupport.sk';
    $mail->SMTPAuth = true;
    $mail->Username = $authEmail;
    $mail->Password = $authPass;
    $mail->SMTPSecure = 'ssl';
    $mail->Port = 465;
    $mail->setFrom($authEmail);
    $mail->addAddress($emailTo);
    $mail->addReplyTo($_POST["from"]);
    $mail->isHTML(false);
    $mail->Subject = $subject;
    $mail->Body = $_POST["message"];
    $mail->send();

    echo 'OK';

} catch (Exception $e) {	
    echo "NOK";
}

?>
