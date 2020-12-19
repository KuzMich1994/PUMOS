<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Переменные, которые отправляет пользователь
$email = isset($_POST['email']) ? $_POST['email'] : '';
$phone = isset($_POST['phone']) ? $_POST['phone'] : '';
$name = isset($_POST['name']) ? $_POST['name'] : '';

// Формирование самого письма
if (empty($email)) {$title = "Консультация";
$body = "
<h2>Новое письмо</h2>
<b>Имя: </b>$name<br><br>
<b>Телефон: </b>$phone
";} else {
  $title = "Консультация";
$body = "
<h2>Новое письмо</h2>
<b>Имя: </b>$name<br><br>
<b>E-mail: </b>$email<br><br>
<b>Телефон: </b>$phone
";
}







$c = true;
$message = '';

foreach ( $_POST as $key => $value ) {
  if ( $value != "" ) {

    if ($value === 'on') {
      $value = 'Да';
    }

    if ($key === 'counter') {
      $key = 'Добавить счетчик в комплект';
    }

    if ($key === 'stand') {
      $key = 'Добавить стойку в комплект';
    }

    $message .= "
    " . ( ($c = !$c) ? '<tr>':'<tr style="background-color: #f8f8f8;">' ) . "
      <td style='padding: 10px; border: #e9e9e9 1px solid;'><b>$key</b></td>
      <td style='padding: 10px; border: #e9e9e9 1px solid;'>$value</td>
    </tr>
    ";
  }
}

$message = "<table style='width: 100%;'>$message</table>";










// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    //$mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    // Настройки вашей почты
    $mail->Host       = 'smtp.mail.ru'; // SMTP сервера вашей почты
    $mail->Username   = 'sergey.student1994@mail.ru'; // Логин на почте
    $mail->Password   = 'web50607011'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('sergey.student1994@mail.ru', 'Сергей Кузьмичев'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('drumer19940310@mail.ru');  

    // Отправка сообщения
    $mail->isHTML(true);
    $mail->Subject = $title;
    $mail->Body = $body;    
    $mail->Body = $message;    

// Проверяем отравленность сообщения
if ($mail->send()) {$result = "success";} 
else {$result = "error";}

} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

// Отображение результата
header('location: index.html');