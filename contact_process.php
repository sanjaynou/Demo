<?php
$to = 'sanjay.adhek@gmail.com';
$subject = $_POST['subject'];
$txt = '<p><strong>Name : </strong>'.$_POST['name'].'</p>';
$txt .= '<p><strong>Message : </strong>'.$_POST['message'].'</p>';
$headers = "From: ".$_POST['email']. "\r\n";
$headers .= "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
$headers .= "Organization: ".$_POST['name']."\r\n";
$headers .= "Content-type: text/plain; charset=iso-8859-1\r\n";
$headers .= "X-Priority: 3\r\n";
$headers .= "X-Mailer: PHP". phpversion() ."\r\n";

//echo $txt; die;

mail($to,$subject,$txt,$headers);

header('location:https://www.sanjayadhek.com/contact');

?>