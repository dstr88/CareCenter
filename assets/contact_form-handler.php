<?php
    $lastName = $_post['name'];
    $firstName = $_post['name'];
    $visitor_email = $_POST['email'];
    $city =$_POST['city'];
    $zip =$_POST['zip'];
    
    $email_from = 'admin@thecarecenterckvl.com';

    $email_subject = "reaction to the statement of beliefs webpage";

    $email_body = "User Name: $name.\n".
        "User Email: $visitor_email.\".
            "User Message: $message.\n";

    $to = "admin.thecarecenterckvl.com";

    $headers = "From: $email_from |r|n";

    mail($to,$email_subject,$email_body,$headers);

    header("location: statementoffaith.html");




?>