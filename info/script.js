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
        <div class="footer-above">



        </div>
        <div class="footer-below">
            <div class="container">
                <div class="row">
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
