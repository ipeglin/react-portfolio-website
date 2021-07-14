<?php
    if ($_POST["submit"]) {
        $name = $_POST["name"];
        $email = $_POST["email"];
        $message = $_POST["message"];
        $from = "From: $email";
        $to = "philip@eglin.no";
        $subject = "Ipeglin Contact Request";
    
        $body = "From: $name\n E-Mail: $email\n Message:\n $message";

        if ($name != '' && $email != '') {
            if (mail ($to, $subject, $body, $from)) {
                echo "<p>Your message has been sent!</p>";
            } else {
                echo "<p>Something went wrong, go back and try again!</p>";
            }

        } else {
            echo "<p>You need to fill in all required fields!</p>";
        }
    }
?>