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
    const language = localStorage.getItem('preferredLanguage') || 'de';

    const html = `
    <!-- Header -->
    <header>
        <div class="container">
            <div class="row">
                <div class="col-md-9 col-sm-12">
                    <div class="intro-text text-left">
                    <br>
                    <h2 class="text-left" style="font-size: 18pt;">Fundraiser</h2>
                    <span class="name text-left">${language === 'de' ? '"Schick den Jungen nach Hollywood!"' : '"Send the boy to Hollywood!"'}</span>
                    <br>
                    <p style="font-size: 20pt;">${language === 'de' ? `
                        Das Ziel ist zum Greifen nah. Nach jahrelanger harter Arbeit wurde ich an einer <span style="font-weight: bold;">der besten
                        Filmhochschulen der Welt</span> angenommen: dem American Film Institute im Herzen von Hollywood.
                        Jedes Jahr wagen tausende Menschen, sich bei dieser Talentschmiede zu bewerben - und ich
                        darf jetzt als <span style="font-weight: bold;">einziger Deutscher</span> einen der 24 Studienplätze für Kamera einnehmen und diese
                        riesige Chance nutzen. Dabei kannst Du mir helfen.
                        ` : 'The goal is within reach. After years of hard work, I was accepted to one of the most prestigious film schools in the world in Los Angeles. There is only one obstacle. You can help me with that.'}</p>
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
            <div class="row" style="padding-bottom: 20px; align-items: center; justify-content: center;">
                <div class="col-md-6 col-sm-12">
                    <p style="font-size: 15pt;">
                    ${language === 'de' ? `
                    Hi, ich bin Chris Gruber und ich mache seit meiner Kindheit nichts anderes, als Filme zu drehen.
                    <span style="font-weight: bold;">Mein großer Traum</span> ist es, als Kameramann großartige, mitreißende und innovative Geschichten
                    mit den richtigen Bildern auf die Leinwände dieser Welt zu bringen.</br></br>
                    Mit 16 Jahren half ich das erste Mal bei einem studentischen Filmset der Filmakademie Baden-
                    Württemberg mit. Sowohl die Arbeit als auch die Atmosphäre begeisterte mich so sehr, dass ich
                    mich während meiner letzten beiden Schuljahre sogar ganze <span style="font-weight: bold;">drei Monate</span> beurlauben ließ, um
                    keine Sekunde am Set zu verpassen.</br></br>
                    Mit Freunden zusammen begann ich, eigene Low Budget-Kurzfilme im Raum Stuttgart zu drehen
                    und dabei selbst als Kameramann die Bildsprache zu gestalten.
                    Beim <span style="font-weight: bold;">Jugendfilmpreis Baden-Württemberg</span> wurde ich für diese Projekte in den letzten drei
                    Jahren in Folge mit dem Preis für die Beste Kamera ausgezeichnet.
                    ` : `
                    Hi, I'm Chris Gruber and I've been doing nothing but making movies for over seven years. <span style="font-weight: bold;">My big
                    dream </span> as a successful cinematographer is to bring great, captivating and innovative stories to the
                    screens of this world with bespoke images.</br></br>

                    When I was 16, I helped out for the first time on a student film set at the Baden-Württemberg Film
                    Academy. I was so enthusiastic about both the work and the atmosphere that I even took a three-
                    month leave of absence during my last two years of school so as not to miss a single second on
                    set.</br></br>
                    Together with friends, I began to shoot my own low-budget short films in the Stuttgart area and to
                    determine the visual language myself as a cinematographer.</br>
                    At the <span style="font-weight: bold;">Baden-Württemberg Youth Film Award</span>, I was awarded the prize for Best Cinematography
                    for these projects three years in a row. <span style="font-weight: bold;">A great honor</span> for me - and a confirmation. I can do
                    something, I have to pursue it, I thought to myself.</br></br>
                    `}
                    </p>
                </div>
                <div class="col-md-6 col-sm-12">
                    <div class="row" style="margin: 0;">
                        <div class="col-md-6 col-sm-6 col-xs-6" style="padding: 0;">
                            <div style="position: relative; width: 100%; padding-top: 130%;">
                                <img src="../images/personal/Filmschau 2024.webp" loading="eager" alt="Chris mit Preis" class="img-responsive" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover;">
                            </div>
                        </div>
                        <div class="col-md-6 col-sm-6 col-xs-6" style="padding: 0;">
                            <div style="position: relative; width: 100%; padding-top: 130%;">
                                <img src="../images/personal/Chris_Kamera.webp" loading="eager" alt="Chris mit Kamera" class="img-responsive" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover;">
                            </div>
                        </div>
                    </div>
                </div>
            </div>  
        </div>

        <div class="container">
            <div class="row" style="padding-bottom: 20px; align-items: center; justify-content: center;">
                <div class="col-md-6 col-sm-12" style="padding-bottom: 40px;">
                    <div style="position: relative; width: 100%; padding-top: 75%;">
                        <img src="../images/personal/Chris_Lampe.webp" alt="Chris mit Kamera" class="img-responsive" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover;">
                    </div>
                </div>
                <div class="col-md-6 col-sm-12">
                    <p style="font-size: 15pt;">
                    ${language === 'de' ? `
                    Nach meinem Abitur zog ich nach Hamburg und arbeitete als freischaﬀender Kameraassistent bei
                    über <span style="font-weight: bold;">130 Filmproduktionen</span> in verschiedenen Ländern wie Frankreich, Indien und der Schweiz
                    und knüpfte wertvolle Kontakte als freischaﬀender Kameraassistent zu arbeiten. <span style="font-weight: bold;">Ich wollte mehr
                    lernen</span>, an größeren Sets sein und noch härter arbeiten, auch um mir meinen Lebensunterhalt zu
                    verdienen.
                    ` : `
                    </br>
                    After graduating from high school, I moved to Hamburg and worked as a freelance camera
                    assistant on various projects (I had my first job there before I even moved there). I wanted to learn
                    more, be on bigger sets and work even harder, also to earn a living.</br></br>  
                    In 2023, after <span style="font-weight: bold;">over 130 film productions</span>, I applied to the Film academy Baden-Württemberg, the
                    university where I learned to love filmmaking. I was rejected. To be honest, I'd be lying if I said it
                    didn't affect me: when you work towards something for five years and you don't make it, it forces
                    you to reflect. What was the reason, <span style="font-weight: bold;">what weaknesses do I have?</span> It felt like all the work had been
                    for nothing.
                    `}
                    </p>
                </div>
            </div>
        </div>

        <div class="container">
            <div class="row" style="padding-bottom: 20px; align-items: center; justify-content: center;">
                <div class="col-md-6 col-sm-12">
                    <p style="font-size: 15pt;">
                    ${language === 'de' ? `
                    <span style="font-weight: bold;">Wie jeder wollte ich am American Film Institute studieren.</span> Der Hollywood Reporter listete das
                    Institut in den letzten zehn Jahren stetig als eine der drei besten Filmhochschulen der Welt. Dort
                    haben ein paar der wichtigsten Filmemacher unserer Zeit gelernt, ihr Fach zu meistern.
                    Absolventen erschufen Filme wie Inception, Schindlers Liste, Inglorious Bastards, Django
                    Unchained, Jurassic Park, Saving Private Ryan, Blue Velvet, The Tree of Life, Star Wars: The Last
                    Jedi und etliche weitere.</br></br>

                    Diesen März kam dann die Rückmeldung auf meine Bewerbung, ich hielt den Atem an.</br></br>

                    <span style="font-weight: bold;">Das American Film Institute bot mir einen Platz an, als Teil der Cinematography Class of
                    2027 habe ich nun das große Privileg, nach Los Angeles zu ziehen und meinen Traum zu
                    verwirklichen.</span>
                    ` : `
                    But giving up was not an option. Now it was time to fill in the gaps and eradicate my weaknesses.
                    <span style="font-weight: bold;">Just to dream for a moment</span>, I applied to the <span style="font-weight: bold;">American Film Institute in Los Angeles</span> last year.</br></br>

                    Some of the most important filmmakers of our time have studied there. Graduates have created
                    films such as Inception, Schindler's List, Inglorious Bastards, Django Unchained, Jurassic Park,
                    Saving Private Ryan, Blue Velvet, The Tree of Life, Star Wars the Last Jedi and many more.</br></br>

                    Then this March came the reply. Again, I was expecting a rejection. I opened the email and
                    couldn't believe my eyes. <span style="font-weight: bold;">The AFI was offering me a seat.</span> <span style="font-weight: bold;">As part of the Cinematography Class of
                    2027, I now have the great privilege of moving to Los Angeles and realizing my dream.</span></br></br>
                    Starting in Ludwigsburg and Stuttgart, <span style="font-weight: bold;">I worked my way up from the bottom</span> to get to this point.
                    Without any shortcuts.
                    `}
                    </p>
                </div>
                <div class="col-md-6 col-sm-12" style="padding-bottom: 20px;">
                    <img src="${language === 'de' ? '../images/AFI_ALUMNI_DE.jpg' : '../images/AFI_ALUMNI_EN.jpg'}" alt="Alumni Anerkennung" class="img-responsive" style="width: 100%; height: auto; object-fit: contain;">
                    <img src="../images/Robert Richardson.jpeg" alt="Alumni Anerkennung" class="img-responsive" style="width: 100%; height: auto; object-fit: contain;">
                    <p style="font-size: 12pt; color: #a3a3a3;">${language === 'de' ? `Robert Richardson, AFI Alumni und dreifacher Kamera Oscar Gewinner` : `Robert Richardson, AFI Alumni and three time Best Cinematography Oscar Winner`}</p>
                </div>
            </div>
        </div>

        </br></br>

        <div class="container">
            <div class="row" style="padding-bottom: 20px; align-items: center; justify-content: center;">
                <div class="col-md-6 col-sm-12" style="padding-bottom: 20px;">
                    <div>
                        <p style="font-size: 15pt; color: #a3a3a3;">${language === 'de' ? `Ausschnitt meiner Arbeiten` : `Excerpt of my work`}</p>
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
                                        <img src="../images/carousel/photo1.webp" alt="Alumni Anerkennung" class="img-responsive" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover;">
                                    </div>
                                </div>
                                <div class="item">
                                    <div style="position: relative; width: 100%; padding-top: 56.25%;">
                                        <img src="../images/carousel/photo2.webp" alt="Alumni Anerkennung" class="img-responsive" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover;">
                                    </div>
                                </div>
                                <div class="item">
                                    <div style="position: relative; width: 100%; padding-top: 56.25%;">
                                        <img src="../images/carousel/photo3.webp" alt="Alumni Anerkennung" class="img-responsive" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover;">
                                    </div>
                                </div>
                                <div class="item">
                                    <div style="position: relative; width: 100%; padding-top: 56.25%;">
                                        <img src="../images/carousel/photo4.webp" alt="Alumni Anerkennung" class="img-responsive" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover;">
                                    </div>
                                </div>
                                <div class="item">
                                    <div style="position: relative; width: 100%; padding-top: 56.25%;">
                                        <img src="../images/carousel/photo5.webp" alt="Alumni Anerkennung" class="img-responsive" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover;">
                                    </div>
                                </div>
                                <div class="item">
                                    <div style="position: relative; width: 100%; padding-top: 56.25%;">
                                        <img src="../images/carousel/photo6.webp" alt="Alumni Anerkennung" class="img-responsive" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover;">
                                    </div>
                                </div>
                                <div class="item">
                                    <div style="position: relative; width: 100%; padding-top: 56.25%;">
                                        <img src="../images/carousel/photo7.webp" alt="Alumni Anerkennung" class="img-responsive" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover;">
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
                    Ich freue mich unfassbar und bin all den Menschen <span style="font-weight: bold;">dankbar</span>, die mich unterstützt haben.
                    Insbesondere in meiner Heimat. Obwohl dort viele beruflich nichts mit Film am Hut haben, spüre
                    ich in Baden-Württemberg immer die Begeisterung für harte Arbeit und das Kino.</br></br>

                    Diese Arbeit will ich auch Übersee unermüdlich fortsetzen. <span style="font-weight: bold;">Ich bin mir bewusst, woher ich
                    komme und wohin ich gehen will.</br></br></span>

                    Das Studium in Los Angeles ist mit hohen Kosten verbunden. Allein die Studiengebühren
                    betragen rund 150.000 Dollar, eine Kostenaufteilung findest du <a href="#costs">hier</a>.</br></br>

                    Daher bitte ich Dich um Deine Hilfe. Wenn du mich unterstützen kannst und magst, würde ich
                    mich über jeden Euro freuen. Wenn es für dich gerade nicht möglich ist mich finanziell zu
                    unterstützen, würde es mir wahnsinnig helfen, wenn du diese Kampagne mit Freunden und
                    Verwandten teilst. Natürlich werde ich dich auf dem laufenden halten.</br></br>

                    <span style="font-weight: bold;">Ich sehe dieses Studium als einzigartige Chance, von den Besten meines Fachs zu lernen
                    um das Publikum mit außergewöhnlichen Filme zu begeistern.</span>
                    ` : `
                    I am incredibly happy and <span style="font-weight: bold;">grateful</span> to all the people who have supported me. Especially in my
                    home state. Although many people there have nothing to do with film, I can always feel the
                    enthusiasm for cinema. And for hard, honest work. </br></br>
                    I want to continue this work tirelessly overseas. <span style="font-weight: bold;">I am aware of where I come from and where I
                    want to go.</span> </br></br>
                    Unfortunately, studying in Los Angeles involves high costs. Therefore, I am asking for your help.
                    Any amount will help me to take advantage of this great opportunity. </br></br>
                    <span style="font-weight: bold;">I see this study as a unique chance to learn from the best in my field and create extraordinary films.</span>
                    `}
                </p>
            </div>
            </div>
        </div>


            <div class="container" style="padding-bottom: 50px;">
                <div class="row" style="padding-bottom: 20px; align-items: center; justify-content: center;">
                    <div class="col-md-6 col-sm-12" style="padding-bottom: 40px; padding-left: 30px;">
                        <div class="row" style="padding-bottom: 20px;">
                            <div class="col-lg-12">
                                <h2 class="font2" style="font-weight:700; margin-bottom: 30px">${language === 'de' ? 'Ich freue mich über jede Unterstützung!' : 'I appreciate every support!'}</h2>
                            </div>
                        </div>
                        <div style="display: flex; flex-direction: row; align-items: flex-start; gap: 30px;">
                            <a class="btn btn-primary paypal-btn" href="https://www.paypal.me/chrisgruber169" role="button">
                                <img src="../images/PayPal.png" alt="Paypal" class="img-responsive" style="width: auto; height: auto; object-fit: contain;">
                            </a>
                            </br></br>
                            <a class="font2 bank-transfer-btn" style="cursor: pointer; display: flex; flex-direction: row; align-items: center; gap: 10px;">
                                ${language === 'de' ? 'Banküberweisung' : 'Bank Transfer'}
                                <svg style="height: 12pt; width: auto;"viewBox="0 0 1024 1024" fill="#707096" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" stroke="#707096" stroke-width="6.144"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M478.312 644.16c24.38 26.901 64.507 26.538 88.507-0.89l270.57-309.222c7.758-8.867 6.86-22.344-2.008-30.103-8.866-7.759-22.344-6.86-30.103 2.007L534.71 615.173c-7.202 8.231-17.541 8.325-24.782 0.335L229.14 305.674c-7.912-8.73-21.403-9.394-30.133-1.482s-9.394 21.403-1.482 30.134l280.786 309.833z" fill=""></path></g></svg>
                            </a>
                            <div style="display: none;" class="bank-transfer-info">
                                <p style="font-size: 10pt; padding: 0;">${language === 'de' ? 'Bank Informationen:' : 'Bank Information:'}</p>
                                <div>
                                    <p style="font-size: 10pt; padding: 0;">Kreissparkasse Ludwigsburg:</p>
                                    <p style="font-size: 10pt; padding: 0;">Christian Gruber</p>
                                    <p style="font-size: 10pt; padding: 0;">IBAN DE 53 6045 0050 1116 2910 01</p>
                                    <p style="font-size: 10pt; padding: 0;">BIC: SOLADES1LBG</p>
                                </div>
                            </div>
                        </div>
                        <hr class="star-primary">
                    </div>
                    <div class="col-md-6 col-sm-12" style="padding-bottom: 20px;">
                        <img src="../images/Spenden.webp" alt="Spenden Ziel" class="img-responsive" style="width: 100%; height: auto; object-fit: contain;">
                    </div>
                </div>
            </div>

            <div class="container">
                <h2 class="font2" style="font-size: 18pt; font-weight: 700; margin-bottom: 10px">Showreel</h2>
                <div class="row">
                    <div class="col-lg-12 text-center">
                        <div class="embed-responsive" style="padding-bottom: 42%;">
                            <iframe class="embed-responsive-item" src="../videos/Cinematography Reel.mp4" loading="lazy" allowfullscreen controls></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    `


    document.body.insertAdjacentHTML("beforeend", html);
    insertFooter();
});


document.addEventListener("DOMContentLoaded", function () {
    const bankBtn = document.querySelector(".bank-transfer-btn");
    const bankInfo = document.querySelector(".bank-transfer-info");

    if (bankBtn && bankInfo) {
        bankBtn.addEventListener("click", function (e) {
            e.preventDefault();
            // Toggle the display state of the bank-transfer-info element
            if (bankInfo.style.display === "none" || bankInfo.style.display === "") {
                bankInfo.style.display = "block";
                bankBtn.style.display = "none";
            } else {
                bankInfo.style.display = "none";
            }
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const language = localStorage.getItem('preferredLanguage') || 'en';
    // Select all links that should show an alert before redirecting
    const paypalBtn = document.querySelector(".paypal-btn");
    if (paypalBtn) {
        paypalBtn.addEventListener("click", function (e) {
            e.preventDefault(); // Prevent the default link behavior
            let alert_message;
            if (language === 'de') {
                alert_message = "Vielen Dank für deine Unterstützung! Du wirst jetzt zu PayPal weitergeleitet. Bitte denke daran, das Geld an Freunde und Familie zu senden, um Gebühren zu vermeiden.";
            } else {
                alert_message = "Thank you for your support! You will now be redirected to PayPal. Please remember to send the money to friends and family to avoid fees.";
            }

            // Show alert
            alert(alert_message);
            
            // Redirect after alert is dismissed
            window.open(this.href, '_blank');
        });
    }
});