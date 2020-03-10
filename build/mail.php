<?php

if(isset( $_POST['name']))
$name = $_POST['name'];
if(isset( $_POST['email']))
$email = $_POST['email'];
if(isset( $_POST['message']))
$message = $_POST['message'];
if(isset( $_POST['phone']))
$phone = $_POST['phone'];

if ($name === ''){
    echo "Вкажіть своє ім'я";
    die();
    }
    if ($email === ''){
    echo "Вкажіть свій email";
    die();
    } else {
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)){
    echo "Email введено невірно";
    die();
    }
    }
    if ($phone === ''){
    echo "Вкажіть свій телефон";
    die();
    }
    if ($message === ''){
    echo "Напишіть своє повідомлення";
    die();
    }

$content="Заявка від: $name \n Email: $email \n Номер телефону: $phone \n Повідомлення: $message";
$recipient = "info@woodparket.com.ua";
$mailheader = "From: $email \r\n";
mail($recipient, $phone, $content, $mailheader) or die("Error!");
header("location: sent.html");
?>