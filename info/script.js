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


window.addEventListener("load", function () {
    const language = localStorage.getItem('preferredLanguage') || 'en';
    html = `
    <!-- Header -->
    <header>
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="intro-text">
                        <br>
                        <span class="name">About me</span>
                        <span class="skills">${ language === 'de' ? 'Meine Geschichte' : 'My Journey'}</span>
                        <br>
                    </div>
                </div>
            </div>
        </div>
    </header>

    <section id="about">
        <div class="container">
            <div class="row">
                <div class="col-lg-8 col-lg-offset-2 text-center">
                    <img src="../images/personal/Chris_Kopfhörer.JPG" class="img-responsive img-centered" alt="Chris Gruber" style="max-width: 60%; margin: 0 auto 30px auto;">
                </div>
            </div>
        <p class="col-lg-12 text-center" style="font-size: 15pt; padding-bottom: 100px;">
        <!-- Content for the about section would go here --><br>
        ${ language === 'de' ? `
            Chris Gruber ist ein Kameramann, dessen Weg ins Filmemachen alles andere als gewöhnlich ist.
            Er wächst umgeben von fantastischen Geschichten seines Großvaters und einer Leidenschaft für
            das Verständnis menschlichen Verhaltens auf. Doch erst als er das Filmemachen für sich
            entdeckt, findet er seine wahre Berufung – einen Weg, der seine Liebe zum Geschichtenerzählen,
            zur Psychologie, zur Technologie und zur Kunst miteinander verbindet.</br></br>

            Mit einem vielfältigen Hintergrund, der Erfahrungen im Theater, auf Reisen und eine tiefgreifende
            persönliche Entwicklung umfasst, nähert sich Chris der Cinematografie mit einem besonderen
            Fokus auf Zusammenarbeit, Sinnhaftigkeit und emotionaler Resonanz. Er ist überzeugt, dass es
            vor allem darum geht, der Geschichte zu dienen, das Ego im Zaum zu halten und die tieferen
            Zusammenhänge jeder Szene zu verstehen.Chris’ Hingabe an sein Handwerk, kombiniert mit
            seiner Widerstandskraft und einzigartigen Perspektive, prägt seine Arbeit, in der jede
            Kamerentscheidung nicht nur absichtlich und bedacht ist, sondern von einer Leidenschaft für die
            Kunst und die zugrunde liegende Philosophie der Filmproduktion getragen wird.</br></br>

            Mit seinem Einsatz für stetiges Wachstum und der Überzeugung, dass jede Herausforderung eine
            Chance ist, setzt Chris sein Handwerk leidenschaftlich ein, um Geschichten zu erzählen, die
            wirklich von Bedeutung sind – stets mit Staunen und dem Traum, durch visuelles Storytelling zu
            inspirieren.</br></br>

            Neben all diesen Bestrebungen verfolgt Chris auch leidenschaftlich seinen Job als Vollzeit-Idiot.
            `:`
            Chris Gruber is a cinematographer whose journey into filmmaking was anything but
            conventional. Having grown up surrounded by fantastical stories from his grandfather and
            a passion for understanding human behavior. Although it wasn’t until he discovered
            filmmaking that he found his true calling—a path that blends his love for storytelling,
            psychology, technology, and art.</br></br>

            Drawing from a diverse background that includes experiences in theater, travel, and a
            deep personal journey, Chris approaches cinematography with a focus on collaboration,
            purpose, and emotional resonance. He believes in serving the story above all, keeping
            ego in check, and understanding the deeper narrative within each scene. Chris’s
            commitment to his craft, combined with his resilience and unique perspective, shapes his
            work, where every camera choice is intentional, thoughtful, and driven by a love for both
            the art and the philosophy behind filmmaking.</br></br>

            With a dedication to constant growth and a belief that every challenge is an opportunity,
            Chris is passionate about using his craft to contribute to stories that matter, always with
            wonder and a dream to inspire through visual storytelling.</br></br>

            In addition to all these endeavors, Chris passionately pursues his job as fulltime idiot.
            `}      
        </p>
        <div style="padding-bottom: 100px;">
            <h2 class="font2 text-center">${ language === 'de' ? 'Preise' : 'Awards'}</h2></br>
            <ul style="font-size: 15pt; text-align: center; list-style-position: inside;">
                <li>${language === 'de' ? 'Jugenfilmpreis Baden-Württemberg “Beste Kamera” 2024' : 'Baden-Württemberg Youth Film Award “Best Cinematography ” 2024'}</li>
                <li>${language === 'de' ? 'Jugenfilmpreis Baden-Württemberg “Beste Kamera” 2023' : 'Baden-Württemberg Youth Film Award “Best Cinematography ” 2023'}</li>
                <li>${language === 'de' ? 'Jugenfilmpreis Baden-Württemberg “Beste Kamera” 2022' : 'Baden-Württemberg Youth Film Award “Best Cinematography ” 2022'}</li>
            </ul>
        </div>
        <div class="kontakt text-center">
            <p>${ language === 'de' ? 'Kontakt' : 'Contact'}</p>
            <a href="mailto: gruberchristianfb@gmail.com">gruberchristianfb@gmail.com</a>
            <a href="tel:+4915908138508">+4915908138508</a>
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
    `;


    document.body.insertAdjacentHTML("beforeend", html);
});
