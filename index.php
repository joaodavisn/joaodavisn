<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    $to = "websitecontact@joaodavisn.com";
    $subject = "New Contact From Website";
    $headers = "From: $email" . "\r\n";
    $headers .= "Content-type: text/html; charset=UTF-8" . "\r\n";

    $mailContent = "Name: $name<br>";
    $mailContent .= "Email: $email<br><br>";
    $mailContent .= "Message:<br>";
    $mailContent .= nl2br($message);

    if (mail($to, $subject, $mailContent, $headers)) {
        header("Location: /confirmation");
        exit();
    } else {
        echo "<script>console.error('There was an error sending the email.');</script>";
    }
}
?>


<!DOCTYPE html>
<html lang="en">

<head>
    <link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
    <link rel="stylesheet" href="styles.css">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta property="og:title" content="João Davi S. N. - Front End Developer">
    <meta property="og:description"
        content="I am a front-end developer with extensive experience in creating responsive interfaces connected to scalable systems.">
    <meta property="og:image" content="https://joaodavisn.com/source/sharingImage.png">
    <meta property="og:url" content="https://joaodavisn.com">
    <meta name="twitter:card" content="https://joaodavisn.com/source/sharingImage.png">

    <meta name="msapplication-TileImage" content="https://joaodavisn.com/source/sharingImage.png">

    <meta property="og:site_name" content="João Davi S. N.">
    <meta property="og:title" content="João Davi S. N. - Front End Developer">
    <meta property="og:description"
        content="I am a front-end developer with extensive experience in creating responsive interfaces connected to scalable systems.">
    <meta property="og:image" content="https://joaodavisn.com/source/sharingImage.png">
    <meta property="og:type" content="website" />
    <meta property="og:image:type" content="image/png">
    <meta property="og:image:width" content="300">
    <meta property="og:image:height" content="300">
    <meta property="og:url" content="https://joaodavisn.com">

    <meta property="og:see_also" content="https://joaodavisn.com">
    <meta property="article:author" content="João Davi S. N.">
    <meta property="article:publisher" content="João Davi S. N.">

    <title>João Davi S. N.</title>
</head>


<body>
    <!--<div id="cursor" class="cursor"></div>-->
    <section class="sec area01">
        <div class="headline">
            <p class="title">HI, I AM A</p>
            <p class="emphasis">FRONT END DEVELOPER.</p>
        </div>
        <div class="undertext">
            <p class="paragraph">AND THIS IS MY PORFOLIO. I THINK.</p>
        </div>
        <div class="scrolldown" id="scrolldown">
            <div class="scroll-bg">
                <p class="scroll-text">SCROLL DOWN.</p>
                <div class="arrow-padding">
                    <div class="arrow-down"></div>
                </div>
            </div>
        </div>

    </section>
    <section class="sec area02">
        <div class="aboutmeBar" id="aboutmeBar">
            <span class="aboutme">ABOUT ME</span>
            <div class="star"></div>
            <span class="aboutme">ABOUT ME</span>
            <div class="star"></div>
            <span class="aboutme">ABOUT ME</span>
            <div class="star"></div>
            <span class="aboutme">ABOUT ME</span>
            <div class="star"></div>
            <span class="aboutme">ABOUT ME</span>
            <div class="star"></div>
        </div>
        <div class="headline-2">
            <div class="arrow-right"></div>
            <p class="title-2">I am a front-end developer with extensive experience in creating responsive interfaces
                connected to scalable systems.</p>
        </div>
        <div class="undertext-2">
            <p class="paragraph-2">
                I also have proficiency in some back-end languages such as <span class="observation">C#</span>, <span
                    class="observation">node</span>, and <span class="observation">PHP</span>.
            </p>
            <p class="paragraph-2">
                My focus is mainly on <span class="observation">React.js</span> and <span class="observation">React
                    Native</span>, but I always have flexibility and commitment to learning new technologies.
            </p>
        </div>
        <div class="globe"></div>
    </section>
    <section class="sec area03">
        <div class="headline-3">
            <p class="title-3">SKILLS</p>
        </div>
        <div class="grid">
            <div class="skill">
                <div class="js"></div>
                <div>
                    <p class="skill-text">JAVASCRIPT</p>
                    <p class="skill-text">5 years xp</p>
                    <p class="skill-text">✦ ✦ ✦ ✦ ✦</p>
                </div>
            </div>
            <div class="skill">
                <div class="html"></div>
                <div>
                    <p class="skill-text">HTML</p>
                    <p class="skill-text">5 years xp</p>
                    <p class="skill-text">✦ ✦ ✦ ✦ ✦</p>
                </div>
            </div>
            <div class="skill">
                <div class="css"></div>
                <div>
                    <p class="skill-text">CSS</p>
                    <p class="skill-text">5 years xp</p>
                    <p class="skill-text">✦ ✦ ✦ ✦ ✦</p>
                </div>
            </div>
            <div class="skill">
                <div class="react"></div>
                <div>
                    <p class="skill-text">REACT.JS</p>
                    <p class="skill-text">4 years xp</p>
                    <p class="skill-text">✦ ✦ ✦ ✦ ✦</p>
                </div>
            </div>
            <div class="skill">
                <div class="figma"></div>
                <div>
                    <p class="skill-text">FIGMA</p>
                    <p class="skill-text">3 years xp</p>
                    <p class="skill-text">✦ ✦ ✦ ✦ ✦</p>
                </div>
            </div>
            <div class="skill">
                <div class="reactnative"></div>
                <div>
                    <p class="skill-text">REACT NATIVE</p>
                    <p class="skill-text">2 years xp</p>
                    <p class="skill-text">✦ ✦ ✦ </p>
                </div>
            </div>
            <div class="skill">
                <div class="node"></div>
                <div>
                    <p class="skill-text">NODE.JS</p>
                    <p class="skill-text">2 years xp</p>
                    <p class="skill-text">✦ ✦</p>
                </div>
            </div>
            <div class="skill">
                <div class="php"></div>
                <div>
                    <p class="skill-text">PHP</p>
                    <p class="skill-text">1 years xp</p>
                    <p class="skill-text">✦ ✦ ✦ </p>
                </div>
            </div>
        </div>
    </section>
    <section class="sec area04">
        <div class="headline-4">
            <div class="envelope"></div>
            <p class="title-4">CONTACT ME</p>
        </div>
        <form class="form-container" method="post" action="">
            <input class="form-input" placeholder="Your name / Company" name="name" type="text" required />
            <input class="form-input" placeholder="Your email" name="email" type="email" required />
            <textarea class="form-input textarea" placeholder="Your message" name="message" required></textarea>
            <div class="align-button"><button class="send-button" type="submit">SEND<div class="exclamation"></div></button></div>
        </form>
    </section>
    <script src="//cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/ScrollMagic.min.js"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/plugins/debug.addIndicators.min.js"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/gsap/3.9.0/gsap.min.js"></script>
    <script src="./script.js"></script>
</body>
</html>
