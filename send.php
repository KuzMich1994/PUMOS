<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Переменные, которые отправляет пользователь
$email = $_POST['email'];
$phone = $_POST['phone'];
$name = $_POST['name'];

// Формирование самого письма
if (empty($email)) {$title = "Консультация";
$body = "
<h2>Новое письмо</h2>
<b>Имя:</b><br><br>$name
<b>Телефон:</b><br>$phone
";} else {
  $title = "Консультация";
$body = "
<h2>Новое письмо</h2>
<b>Имя:</b>$name
<b>E-mail:</b><br><br>$email
<b>Телефон:</b><br><br>$phone
";
}

// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    //$mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    // Настройки вашей почты
    $mail->Host       = ''; // SMTP сервера вашей почты
    $mail->Username   = ''; // Логин на почте
    $mail->Password   = ''; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom(''); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('');  

    // Отправка сообщения
    $mail->isHTML(true);
    $mail->Subject = $title;
    $mail->Body = $body;    

// Проверяем отравленность сообщения
if ($mail->send()) {$result = "success";} 
else {$result = "error";}

} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

// Отображение результата
{header('location: index.html');