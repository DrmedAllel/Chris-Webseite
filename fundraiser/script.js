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
                    <h2 class="text-left" style="font-size: 18pt;">Fundraiser</h2>
                    <span class="name text-left">${language === 'de' ? '"Schick den Jungen nach Hollywood!"' : '"Send the boy to Hollywood!"'}</span>
                    <br>
                    <p style="font-size: 20pt;">${language === 'de' ? 'Das Ziel ist zum Greifen nah. Nach jahrelanger harter Arbeit wurde ich in Los Angeles an einer der renommiertesten Filmschulen der Welt angenommen. Es gibt nur ein Hindernis. Dabei kannst Du mir helfen.' : 'The goal is within reach. After years of hard work, I was accepted to one of the most prestigious film schools in the world in Los Angeles. There is only one obstacle. You can help me with that.'}</p>
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
                                <img src="../images/personal/Chris_Kamera.webp" loading="eager" alt="Chris mit Kamera" class="img-responsive" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover;">
                            </div>
                        </div>
                        <div class="col-md-6 col-sm-6 col-xs-6" style="padding: 0;">
                            <div style="position: relative; width: 100%; padding-top: 130%;">
                                <img src="../images/personal/Filmschau 2024.webp" loading="eager" alt="Chris mit Preis" class="img-responsive" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover;">
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
                    </br>
                    After graduating from high school, I moved to Hamburg and worked as a freelance camera
                    assistant on various projects (I had my first job there before I even moved there). I wanted to learn
                    more, be on bigger sets and work even harder, also to earn a living.</br></br>  
                    In 2023, after <span style="font-weight: bold;">over 130 film productions</span>, I applied to the Film academy Baden-Württemberg, the
                    university where I learned to love filmmaking. I was rejected. To be honest, I'd be lying if I said it
                    didn't aﬀect me: when you work towards something for five years and you don't make it, it forces
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
                    But giving up was not an option. Now it was time to fill in the gaps and eradicate my weaknesses.
                    <span style="font-weight: bold;">Just to dream for a moment</span>, I applied to the <span style="font-weight: bold;">American Film Institute in Los Angeles</span> last year.</br></br>

                    Some of the most important filmmakers of our time have studied there. Graduates have created
                    films such as Inception, Schindler's List, Inglorious Bastards, Django Unchained, Jurassic Park,
                    Saving Private Ryan, Blue Velvet, The Tree of Life, Star Wars the Last Jedi and many more.</br></br>

                    Then this March came the reply. Again, I was expecting a rejection. I opened the email and
                    couldn't believe my eyes. <span style="font-weight: bold;">The AFI was oﬀering me a seat.</span> <span style="font-weight: bold;">As part of the Cinematography Class of
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
                                        <img src="../images/carousel/photo1.webp" loading="lazy" alt="Alumni Anerkennung" class="img-responsive" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover;">
                                    </div>
                                </div>
                                <div class="item">
                                    <div style="position: relative; width: 100%; padding-top: 56.25%;">
                                        <img src="../images/carousel/photo2.webp" loading="lazy" alt="Alumni Anerkennung" class="img-responsive" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover;">
                                    </div>
                                </div>
                                <div class="item">
                                    <div style="position: relative; width: 100%; padding-top: 56.25%;">
                                        <img src="../images/carousel/photo3.webp" loading="lazy" alt="Alumni Anerkennung" class="img-responsive" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover;">
                                    </div>
                                </div>
                                <div class="item">
                                    <div style="position: relative; width: 100%; padding-top: 56.25%;">
                                        <img src="../images/carousel/photo4.webp" loading="lazy" alt="Alumni Anerkennung" class="img-responsive" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover;">
                                    </div>
                                </div>
                                <div class="item">
                                    <div style="position: relative; width: 100%; padding-top: 56.25%;">
                                        <img src="../images/carousel/photo5.webp" loading="lazy" alt="Alumni Anerkennung" class="img-responsive" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover;">
                                    </div>
                                </div>
                                <div class="item">
                                    <div style="position: relative; width: 100%; padding-top: 56.25%;">
                                        <img src="../images/carousel/photo6.webp" loading="lazy" alt="Alumni Anerkennung" class="img-responsive" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover;">
                                    </div>
                                </div>
                                <div class="item">
                                    <div style="position: relative; width: 100%; padding-top: 56.25%;">
                                        <img src="../images/carousel/photo7.webp" loading="lazy" alt="Alumni Anerkennung" class="img-responsive" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover;">
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
                        <div class="row">
                            <div class="col-lg-12">
                                <h2 class="font2" style="font-weight:700; margin-bottom: 20px">${language === 'de' ? 'Ich freue mich über jede Unterstützung!' : 'I appreciate every support!'}</h2>
                            </div>
                        </div>
                        <a href="https://www.paypal.me/chrisgruber169" target="_blank" class="paypal-btn font2">PayPal: chris.gruber@gmail.com</a>
                        </br></br>
                        <a class="font2 bank-transfer-btn" style="cursor: pointer;">
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
                <h2 class="font2" style="font-size: 18pt; margin-bottom: 10px">Showreel</h2>
                <div class="row">
                    <div class="col-lg-12 text-center">
                        <div class="embed-responsive" style="padding-bottom: 42%;">
                            <iframe class="embed-responsive-item" src="../videos/Cinematography Reel.m4v"  loading="lazy" allowfullscreen controls="false"></iframe>
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
                    <div style="display: flex; justify-content: center; align-items: center; gap: 10px;">
                        <a href="https://www.instagram.com/_chris.gruber_?igsh=em1rMmdhZm1jNHdv">
                            <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" fill="#0F0F0F"/>
                                <path d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z" fill="#0F0F0F"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M1.65396 4.27606C1 5.55953 1 7.23969 1 10.6V13.4C1 16.7603 1 18.4405 1.65396 19.7239C2.2292 20.8529 3.14708 21.7708 4.27606 22.346C5.55953 23 7.23969 23 10.6 23H13.4C16.7603 23 18.4405 23 19.7239 22.346C20.8529 21.7708 21.7708 20.8529 22.346 19.7239C23 18.4405 23 16.7603 23 13.4V10.6C23 7.23969 23 5.55953 22.346 4.27606C21.7708 3.14708 20.8529 2.2292 19.7239 1.65396C18.4405 1 16.7603 1 13.4 1H10.6C7.23969 1 5.55953 1 4.27606 1.65396C3.14708 2.2292 2.2292 3.14708 1.65396 4.27606ZM13.4 3H10.6C8.88684 3 7.72225 3.00156 6.82208 3.0751C5.94524 3.14674 5.49684 3.27659 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.27659 5.49684 3.14674 5.94524 3.0751 6.82208C3.00156 7.72225 3 8.88684 3 10.6V13.4C3 15.1132 3.00156 16.2777 3.0751 17.1779C3.14674 18.0548 3.27659 18.5032 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.49684 20.7234 5.94524 20.8533 6.82208 20.9249C7.72225 20.9984 8.88684 21 10.6 21H13.4C15.1132 21 16.2777 20.9984 17.1779 20.9249C18.0548 20.8533 18.5032 20.7234 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7234 18.5032 20.8533 18.0548 20.9249 17.1779C20.9984 16.2777 21 15.1132 21 13.4V10.6C21 8.88684 20.9984 7.72225 20.9249 6.82208C20.8533 5.94524 20.7234 5.49684 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.5032 3.27659 18.0548 3.14674 17.1779 3.0751C16.2777 3.00156 15.1132 3 13.4 3Z" fill="#0F0F0F"/>
                            </svg>
                        </a>
                        <a href="mailto:gruberchristianfb@gmail.com" class="mail-link">
                            <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <rect x="3" y="5" width="18" height="14" rx="2" stroke="#000000" stroke-width="2" stroke-linecap="round"/>
                            </svg>
                        </a>
                        <a href="tel:+4915908138508" class="phone-btn">
                            <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3 5.5C3 14.0604 9.93959 21 18.5 21C18.8862 21 19.2691 20.9859 19.6483 20.9581C20.0834 20.9262 20.3009 20.9103 20.499 20.7963C20.663 20.7019 20.8185 20.5345 20.9007 20.364C21 20.1582 21 19.9181 21 19.438V16.6207C21 16.2169 21 16.015 20.9335 15.842C20.8749 15.6891 20.7795 15.553 20.6559 15.4456C20.516 15.324 20.3262 15.255 19.9468 15.117L16.74 13.9509C16.2985 13.7904 16.0777 13.7101 15.8683 13.7237C15.6836 13.7357 15.5059 13.7988 15.3549 13.9058C15.1837 14.0271 15.0629 14.2285 14.8212 14.6314L14 16C11.3501 14.7999 9.2019 12.6489 8 10L9.36863 9.17882C9.77145 8.93713 9.97286 8.81628 10.0942 8.64506C10.2012 8.49408 10.2643 8.31637 10.2763 8.1317C10.2899 7.92227 10.2096 7.70153 10.0491 7.26005L8.88299 4.05321C8.745 3.67376 8.67601 3.48403 8.55442 3.3441C8.44701 3.22049 8.31089 3.12515 8.15802 3.06645C7.98496 3 7.78308 3 7.37932 3H4.56201C4.08188 3 3.84181 3 3.63598 3.09925C3.4655 3.18146 3.29814 3.33701 3.2037 3.50103C3.08968 3.69907 3.07375 3.91662 3.04189 4.35173C3.01413 4.73086 3 5.11378 3 5.5Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </a>
                    </div>
                    <br>
                    <br>
                    <div class="col-lg-12 text-center">Copyright Christian Gruber</div>
                    <div class="col-lg-12 text-center" style="color: #a3a3a3;">Made by <a href="https://claudiuslaur.de" target="_blank" style="color: #a3a3a3;">Claudius Laur</a></div>
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


document.addEventListener("DOMContentLoaded", function () {
    const language = localStorage.getItem('preferredLanguage') || 'en';
    const iban = "DE 53 6045 0050 1116 2910 01"; // Replace with your actual IBAN
    const bankBtn = document.querySelector(".bank-transfer-btn");

    if (bankBtn) {
        bankBtn.addEventListener("click", function (e) {
            e.preventDefault();
            navigator.clipboard.writeText(iban)
                .then(function () {
                    let alert_message;
                    if (language === 'de') {
                        alert_message = "IBAN kopiert. Du wirst jetzt zu meinen Bankdaten weitergeleitet.";
                    } else {
                        alert_message = "IBAN copied. You will now be redirected to my bank details.";
                    }
                    alert(alert_message);
                    window.open("https://chris-gruber.com/bank", '_blank');
                })
                .catch(function (err) {
                    alert("Failed to copy IBAN: " + err);
                });
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