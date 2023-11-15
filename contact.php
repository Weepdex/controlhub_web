<?php
	if($_POST) {

		$to = "weepdex.software@gmail.com"; // Your email here
		$subject = 'Web Siteden Mesaj'; // Subject message here

	}

	//Send mail function
	function sendMail($to,$subject,$message,$headers){
		if(@mail($to,$subject,$message,$headers)){
			echo json_encode(array('info' => 'success', 'msg' => "Mesajınız gönderildi. Geri bildiriminiz için teşekkürler"));
		} else {
			echo json_encode(array('info' => 'error', 'msg' =>
			"Upps, mesajınız gönderilemedi. Lütfen daha sonra tekrar deneyiniz."));
		}
	}

	//Check if $_POST vars are set
	if(!isset($_POST['name']) || !isset($_POST['mail']) || !isset($_POST['comment'])){
		echo json_encode(array('info' => 'error', 'msg' => 'Lütfen tüm boşlukları doldurunuz.'));
	}

	//Sanitize input data, remove all illegal characters
	$name    = filter_var($_POST['name'], FILTER_SANITIZE_STRING);
	$mail    = filter_var($_POST['mail'], FILTER_SANITIZE_EMAIL);
	$website = filter_var($_POST['website'], FILTER_SANITIZE_STRING);
	$comment = filter_var($_POST['comment'], FILTER_SANITIZE_STRING);

	//Validation
	if($name == '') {
		echo json_encode(array('info' => 'error', 'msg' => "Lütfen adınızı giriniz."));
		exit();
	}
	if(!filter_var($mail, FILTER_VALIDATE_EMAIL)){
		echo json_encode(array('info' => 'error', 'msg' => "Lütfen geçerli bir e-posta adresi giriniz."));
		exit();
	}
	if($comment == ''){
		echo json_encode(array('info' => 'error', 'msg' => "Lütfen mesajınızı giriniz."));
		exit();
	}

	//Send Mail
	$headers = 'From: ' . $mail .''. "\r\n".
	'Reply-To: '.$mail.'' . "\r\n" .
	'X-Mailer: PHP/' . phpversion();

	sendMail($to, $subject, $comment . "\r\n\n"  .'Name: '.$name. "\r\n" .'Email: '.$mail, $headers);
