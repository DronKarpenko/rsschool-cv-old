<?php

$name = $_POST['name'];
$email = $_POST['email'];
$msg = $_POST['message'];
$token = "992648479:AAGYS7hQcsycF09vrOYYQeEPYw1wgWiFcQA";
$chat_id = "-366150107";
$arr = array(
  'Имя заказчика: ' => $name,
  'E-mail: ' => $phone,
  'Сообщение' => $msg
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");
?>