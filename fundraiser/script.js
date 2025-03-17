document.addEventListener("DOMContentLoaded", function () {
    const iban = "DE 53 6045 0050 1116 2910 01"; // Replace with your actual IBAN
    const bankBtn = document.querySelector(".bank-transfer-btn");

    if (bankBtn) {
        bankBtn.addEventListener("click", function (e) {
            e.preventDefault();
            navigator.clipboard.writeText(iban)
                .then(function () {
                    alert("IBAN copied to clipboard! You will now be redirected to my bank information page.");
                    window.location.href = "../bank";
                })
                .catch(function (err) {
                    alert("Failed to copy IBAN: " + err);
                });
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {
    // Select all links that should show an alert before redirecting
    const paypalBtn = document.querySelector(".paypal-btn");
    if (paypalBtn) {
        paypalBtn.addEventListener("click", function (e) {
            e.preventDefault(); // Prevent the default link behavior
            
            // Show alert
            alert("Vielen Dank für deine Unterstützung! Du wirst jetzt zu PayPal weitergeleitet. Bitte denke daran, das Geld an Freunde und Familie zu senden, um Gebühren zu vermeiden.");
            
            // Redirect after alert is dismissed
            window.location.href = this.href;
        });
    }
});


document.addEventListener("DOMContentLoaded", function () {
    // Get all iframe elements with video
    const videoIframes = document.querySelectorAll("iframe[src$='.m4v']");
    
    videoIframes.forEach(iframe => {
        // Once the iframe loads
        iframe.addEventListener("load", function() {
            // Access the video element inside the iframe if possible
            try {
                const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
                const video = iframeDocument.querySelector("video");
                
                if (video) {
                    // Mute the video on load instead of pausing
                    video.muted = true;
                }
            } catch (error) {
                // Same-origin policy may prevent access to iframe content
                console.log("Could not access iframe content due to same-origin policy:", error);
            }
        });
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const language = localStorage.getItem('preferredLanguage') || 'en';

    html = `
    <!-- Header -->
    <header>
        <div class="container">
            <div class="row">
                <div class="col-md-9 col-sm-12">
                    <div class="intro-text text-left">
                    <br>
                    <h2 class="text-left" style="font-size: 18pt; opacity:0.6;">Fundraiser</h2>
                    <span class="name text-left">${language === 'de' ? '"Schick den Jungen nach Hollywood!"' : '"Send the boy to Hollywood!"'}</span>
                    <br>
                    <p style="font-size: 20pt;">${language === 'de' ? 'Das Ziel ist zum Greifen nah. Nach jahrelanger harter Arbeit wurde ich in Los Angeles an einer der renommiertesten Filmschulen der Welt angenommen. Es gibt nur ein Hindernis. Dabei kannst Du mir helfen.' : 'The goal is within reach. After years of hard work, I was accepted to a prestigious film school in Los Angeles. There is only one obstacle. You can help me with that.'}</p>
                </div>
            </div>
        </div>
    </header>

    <section id="fundraiser">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 text-center">
                    <div class="embed-responsive embed-responsive-16by9">
                        <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/m4L4mXtTLjE" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
            </br></br></br></br></br></br></br>
            <div class="row" style="padding-bottom: 20px; display: flex; align-items: center; justify-content: center;">
                <div class="col-md-6 col-sm-12">
                    <p style="font-size: 15pt;">
                    ${language === 'de' ? `
                    Hi, ich bin Chris Gruber und ich mache seit über sieben Jahren nichts anderes, als Filme
                    zu drehen.<span style="font-weight: bold;"> Mein großer Traum</span> ist es, als erfolgreicher Kameramann großartige, mitreißende und innovative Geschichten mit den
                    richtigen Bildern auf die Leinwände dieser
                    Welt zu bringen.</br></br>
                    Mit Freunden zusammen begann ich, eigene
                    Low Budget‑Kurzfilme im Raum Stuttgart zu
                    drehen und dabei selbst als Kameramann die
                    Bildsprache zu bestimmen.</br>
                    Beim <span style="font-weight: bold;">Jugendfilmpreis Baden‑Württemberg</span>
                    durfte ich für diese Projekte drei Jahre in Folge den Preis für die Beste Kamera entgegennehmen. Für mich eine große Ehre – und eine
                    Bestätigung. Ich kann etwas, das muss ich
                    verfolgen, dachte ich mir.</br></br>
                    ` : `
                    Hi, I'm Chris Gruber and I've been doing nothing but making movies for over seven years. My big dream is to bring great, captivating, and innovative stories to the screens of the world with the right images.</br></br>
                    Together with friends, I started making our own low-budget short films in the Stuttgart area, determining the visual language myself as a cameraman.</br>
                    At the Jugendfilmpreis Baden-Württemberg, I was able to accept the award for Best Camera for these projects three years in a row. A great honor for me - and a confirmation. I can do something, I thought to myself, I have to pursue that.</br></br>
                    `}
                    </p>
                </div>
                <div class="col-md-6 col-sm-12">
                    <div class="row" style="margin: 0;">
                        <div class="col-md-6 col-sm-6 col-xs-6" style="padding: 0;">
                            <div style="position: relative; width: 100%; padding-top: 130%;">
                                <img src="../images/personal/Chris_Kamera.JPG" alt="Chris mit Kamera" class="img-responsive" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover;">
                            </div>
                        </div>
                        <div class="col-md-6 col-sm-6 col-xs-6" style="padding: 0;">
                            <div style="position: relative; width: 100%; padding-top: 130%;">
                                <img src="../images/personal/Filmschau 2024.jpg" alt="Chris mit Preis" class="img-responsive" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover;">
                            </div>
                        </div>
                    </div>
                </div>
            </div>  
        </div>

        <div class="container">
            <div class="row" style="padding-bottom: 20px; display: flex; align-items: center; justify-content: center;">
                <div class="col-md-6 col-sm-12" style="padding-bottom: 40px;">
                    <div style="position: relative; width: 100%; padding-top: 75%;">
                    <img src="../images/personal/Chris_Lampe.JPG" alt="Chris mit Kamera" class="img-responsive" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover;">
                    </div>
                </div>
                <div class="col-md-6 col-sm-12">
                    <p style="font-size: 15pt;">
                    ${language === 'de' ? `
                    Nach meinem Abitur zog ich deswegen nach
                    Hamburg und arbeitete als freischaffender Kameraassistent bei verschiedensten Projekten
                    (meinen ersten Job dort hatte ich schon, bevor ich überhaupt hingezogen bin). Ich wollte
                    mehr lernen, an größeren Sets sein und noch
                    härter arbeiten, auch um mir meinen Lebensunterhalt zu verdienen.</br></br>
                    2023, nach <span style="font-weight: bold;">über 130 Filmproduktionen</span>, bewarb ich mich an der Filmakademie Baden‑Württemberg, an jener Universität, an der
                    ich das Filmemachen lieben lernte. Ich wurde
                    abgelehnt. Ehrlich gesagt würde ich lügen,
                    wenn ich sage, dass es mich nicht getroffen
                    hat. Wenn man auf etwas fünf Jahre lang hinarbeitet und es nicht schafft, zwingt es einen
                    zu reflektieren. Woran es gelegen hat, <span style="font-weight: bold;">welche
                    Schwächen ich habe?</span> Es fühlte sich so an, als
                    wäre die ganze Arbeit umsonst gewesen.
                    Aber Aufgeben war keine Option. Nun hieß
                    es, Lücken füllen und meine Schwächen auszumerzen.</br></br>
                    ` : `
                    </br>After graduating from high school, I moved to Hamburg and worked as a freelance camera assistant on various projects (I already had my first job there before I even moved there). I wanted to learn more, be on bigger sets, and work even harder, also to earn a living.</br></br>
                    In 2023, after over 130 film productions, I applied to the Filmakademie Baden-Württemberg, the university where I learned to love filmmaking. I was rejected. Honestly, I would be lying if I said it didn't hit me. When you work towards something for five years and don't make it, it forces you to reflect. What was it, what weaknesses do I have? It felt like all the work had been in vain. But giving up was not an option. Now it was time to fill in the gaps and correct my weaknesses.</br></br>
                    `}
                    </p>
                </div>
            </div>
        </div>

        <div class="container">
            <div class="row" style="padding-bottom: 20px; display: flex; align-items: center; justify-content: center;">
                <div class="col-md-6 col-sm-12">
                    <p style="font-size: 15pt;">
                    ${language === 'de' ? `
                    <span style="font-weight: bold;">Nur um für einen Moment zu träumen</span>, bewarb ich mich letztes Jahr am <span style="font-weight: bold;">American Film
                    Institute in Los Angeles</span>.
                    Dort haben ein paar der wichtigsten Filmschaffenden unserer Zeit studiert. Absolventen erschufen Filme wie Inception, Schindlers
                    Liste, Inglorious Bastards, Django Unchained,
                    Jurassic Park, Saving Private Ryan, Blue Velvet,
                    The Tree of Life, Star Wars: The Last Jedi und
                    etliche weitere.</br></br>
                    Diesen März kam dann die Rückmeldung.
                    Wieder rechnete ich mit einer Absage. Ich öffnete die Mail und traute meinen Augen nicht.</br></br>
                    <span style="font-weight: bold;">Das AFI bot mir einen Platz an.</span>
                    <span style="font-weight: bold;">Als Teil der Cinematography Class of 2027
                    habe ich nun das große Privileg, nach Los
                    Angeles zu ziehen und meinen Traum zu
                    verwirklichen.</span></br>
                    Angefangen in Ludwigsburg und Stuttgart
                    habe ich mich <span style="font-weight: bold;">von ganz unten hochgearbeitet</span>, um an diesen Punkt zu gelangen. Ohne
                    Umwege.
                    ` : `
                    Just to dream for a moment, I applied last year to the American Film Institute in Los Angeles.
                    Some of the most important filmmakers of our time studied there. Graduates created films like Inception, Schindler's List, Inglorious Bastards, Django Unchained, Jurassic Park, Saving Private Ryan, Blue Velvet, The Tree of Life, Star Wars: The Last Jedi, and many more.</br></br>
                    Then in March, the feedback came.
                    Again, I expected a rejection. I opened the email and couldn't believe my eyes.</br></br>
                    The AFI offered me a place.
                    As part of the Cinematography Class of 2027, I now have the great privilege of moving to Los Angeles and realizing my dream.</br>
                    Starting in Ludwigsburg and Stuttgart, I worked my way up from the bottom to get to this point. Without detours.
                    `}
                    </p>
                </div>
                <div class="col-md-6 col-sm-12" style="padding-bottom: 20px;">
                    <img src="${language === 'de' ? '../images/AFI_ALUMNI_DE.jpg' : '../images/AFI_ALUMNI_EN.jpg'}" alt="Alumni Anerkennung" class="img-responsive" style="width: 100%; height: auto; object-fit: contain;">
                </div>
            </div>
        </div>

        </br></br>

        <div class="container">
            <div class="row" style="padding-bottom: 20px; display: flex; align-items: center; justify-content: center;">
                <div class="col-md-6 col-sm-12" style="padding-bottom: 20px;">
                    <div>
                        <p>${language === 'de' ? `Ausschnitt meiner Arbeiten` : `Excerpt of my work`}</p>
                        <div id="imageCarousel" class="carousel slide" data-ride="carousel">
                            <!-- Indicators -->
                            <ol class="carousel-indicators">
                                <li data-target="#imageCarousel" data-slide-to="0" class="active"></li>
                                <li data-target="#imageCarousel" data-slide-to="1"></li>
                                <li data-target="#imageCarousel" data-slide-to="2"></li>
                                <li data-target="#imageCarousel" data-slide-to="3"></li>
                                <li data-target="#imageCarousel" data-slide-to="4"></li>
                                <li data-target="#imageCarousel" data-slide-to="5"></li>
                                <li data-target="#imageCarousel" data-slide-to="6"></li>
                            </ol>

                            <!-- Wrapper for slides -->
                            <div class="carousel-inner">
                                <div class="item active">
                                    <div style="position: relative; width: 100%; padding-top: 56.25%;">
                                        <img src="../images/carousel/photo1.png" alt="Alumni Anerkennung" class="img-responsive" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover;">
                                    </div>
                                </div>
                                <div class="item">
                                    <div style="position: relative; width: 100%; padding-top: 56.25%;">
                                        <img src="../images/carousel/photo2.png" alt="Alumni Anerkennung" class="img-responsive" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover;">
                                    </div>
                                </div>
                                <div class="item">
                                    <div style="position: relative; width: 100%; padding-top: 56.25%;">
                                        <img src="../images/carousel/photo3.png" alt="Alumni Anerkennung" class="img-responsive" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover;">
                                    </div>
                                </div>
                                <div class="item">
                                    <div style="position: relative; width: 100%; padding-top: 56.25%;">
                                        <img src="../images/carousel/photo4.png" alt="Alumni Anerkennung" class="img-responsive" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover;">
                                    </div>
                                </div>
                                <div class="item">
                                    <div style="position: relative; width: 100%; padding-top: 56.25%;">
                                        <img src="../images/carousel/photo5.png" alt="Alumni Anerkennung" class="img-responsive" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover;">
                                    </div>
                                </div>
                                <div class="item">
                                    <div style="position: relative; width: 100%; padding-top: 56.25%;">
                                        <img src="../images/carousel/photo6.png" alt="Alumni Anerkennung" class="img-responsive" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover;">
                                    </div>
                                </div>
                                <div class="item">
                                    <div style="position: relative; width: 100%; padding-top: 56.25%;">
                                        <img src="../images/carousel/photo7.png" alt="Alumni Anerkennung" class="img-responsive" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover;">
                                    </div>
                                </div>
                            </div>

                            <!-- Controls -->
                            <a class="left carousel-control" href="#imageCarousel" data-slide="prev">
                                <span class="glyphicon glyphicon-chevron-left"></span>
                            </a>
                            <a class="right carousel-control" href="#imageCarousel" data-slide="next">
                                <span class="glyphicon glyphicon-chevron-right"></span>
                            </a>
                        </div>
                    </div>
                </div>
            <div class="col-md-6 col-sm-12">
                <p style="font-size: 15pt;">
                ${language === 'de' ? `
                    Ich freue mich unfassbar und bin all den Menschen <span style="font-weight: bold;">dankbar</span>, die mich unterstützt haben. Insbesondere in meiner Heimat. Obwohl viele dort nichts mit Film am Hut haben, spüre ich immer wieder die Begeisterung für das Kino. Und für harte, ehrliche Arbeit. </br></br>

                    Diese Arbeit will ich auch Übersee unermüdlich fortsetzen. <span style="font-weight: bold;">Ich bin mir bewusst, woher ich komme und wohin ich gehen will.</span> </br></br>

                    Leider ist das Studium in Los Angeles mit hohen Kosten verbunden und es ist mir nicht möglich einen Kredit aufzunehmen. Daher bitte ich Dich um Deine Hilfe. Jeder Betrag hilft mir, diese großartige Gelegenheit wahrzunehmen. <span style="font-weight: bold;">Ich sehe dieses Studium als einzigartige Chance, von den Besten meines Fachs zu lernen und außergewöhnliche  Filme zu erschaffen.</span></br></br>
                    ` : `
                    I am incredibly happy and grateful to all the people who have supported me. Especially in my home. Although many there have nothing to do with film, I feel the enthusiasm for cinema again and again. And for hard, honest work. </br></br>

                    I want to continue this work tirelessly overseas. I am aware of where I come from and where I want to go. </br></br>

                    Unfortunately, studying in Los Angeles is associated with high costs and it is not possible for me to take out a loan. Therefore, I ask for your help. Every amount helps me to take advantage of this great opportunity. I see this study as a unique opportunity to learn from the best in my field and create extraordinary films.
                    `}
                </p>
            </div>
            </div>
        </div>


            <div class="container" style="padding-bottom: 50px;">
                <div class="row" style="padding-bottom: 20px; display: flex; align-items: center; justify-content: center;">
                    <div class="col-md-6 col-sm-12" style="padding-bottom: 40px; padding-left: 30px;">
                        <div class="row">
                            <div class="col-lg-12">
                                <h2 class="font2" style="font-weight:700; margin-bottom: 20px">${language === 'de' ? 'Ich freue mich über jede Unterstützung!' : 'I appreciate every support!'}</h2>
                            </div>
                        </div>
                        <a href="https://www.paypal.me/chrisgruber169" target="_blank" class="paypal-btn font2">PayPal: chris.gruber@gmail.com</a>
                        </br></br>
                        <a class="font2 bank-transfer-btn">
                            ${language === 'de' ? 'Banküberweisung' : 'Bank Transfer'}
                        </a>
                        <hr class="star-primary">
                    </div>
                    <div class="col-md-6 col-sm-12" style="padding-bottom: 20px;">
                        <img src="../images/Spenden.png" alt="Spenden Ziel" class="img-responsive" style="width: 100%; height: auto; object-fit: contain;">
                    </div>
                </div>
            </div>

            <div class="container">
                <h2 class="font2" style="font-size: 18pt">Showreel</h2>
                <div class="row">
                    <div class="col-lg-12 text-center">
                        <div class="embed-responsive" style="padding-bottom: 42%;">
                            <iframe class="embed-responsive-item" src="../videos/Cinematography Reel.m4v" allowfullscreen controls="false"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    
    <!-- Footer -->
    <footer class="text-center">
        <div class="footer-above"></div>
        <div class="footer-below">
            <div class="container">
                <div class="row">
                    <br>
                    <a href="https://www.instagram.com/_chris.gruber_?igsh=em1rMmdhZm1jNHdv"><img src="../images/insta.png" class="img-responsive img-centered insta" alt="Instagramm" width="50" height="50"></a>
                    <br>
                    <br>
                    <div class="col-lg-12 text-center">Copyright Christian Gruber</div>
                    <div class="col-lg-12 text-center">Made by <a href="https://claudiuslaur.de" target="_blank">Claudius Laur</a></div>
                </div>
            </div>
        </div>
        <div class="footer-time"></div>
    </footer>

    <!-- Scroll to Top Button (Only visible on small and extra-small screen sizes) -->
    <div class="scroll-top page-scroll hidden-sm hidden-xs hidden-lg hidden-md">
        <a class="btn btn-primary" href="#page-top">
            <i class="fa fa-chevron-up"></i>
        </a>
    </div>
    `


    document.body.insertAdjacentHTML("beforeend", html);
});
