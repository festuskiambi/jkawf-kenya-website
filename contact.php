<?php
$email_to = "test@jkawf-kenya.org";
$name = $_POST["name"];
$email_from = $_POST["email"];
$message = $_POST["message"];
$email_subject = $_POST["subject"];
$headers = "From: " . $email_from . "\n";
$headers .= "Reply-To: " . $email_from . "\n";

ini_set("sendmail_from", $email_from);
$sent = mail($email_to, $email_subject, $message, $headers, "-f" .$email_from);
if ($sent)
{
header("Location: http://www.jkawf-kenya.org/new_site");
} else {
echo "There has been an error sending your comments. Please try later.";
}
?>