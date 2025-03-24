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
    const language = localStorage.getItem('preferredLanguage') || 'de';
    const html = `
    <!-- Header -->
    <header>
        <div class="container" style="padding: 0; padding-top: 10rem; padding-bottom: 5rem;">
            <div class="col-12" style="padding: 0;">
                <img src="${ language === 'de' ? '../images/personal/Biografie_DE.jpg' : '../images/personal/Biografie_EN.jpg'}" class="img-responsive" alt="Chris Gruber" style="padding: 0; max-width: 100%; height: auto; display: block; margin: 0;">
            </div>
        </div>
    </header>

    <section id="about">
        <div class="container">
            <div class="row" style="padding-bottom: 15rem;">
                <!-- Biography Section -->
                <div class="col-md-6" style="font-size: 15pt; text-align: left;">
                    <p style="font-size: 15pt;">
                        ${ language === 'de' ? `
                        Chris Gruber ist ein Kameramann, dessen Weg ins Filmemachen alles andere als gewöhnlich ist.
                        Er wächst umgeben von fantastischen Geschichten seines Großvaters und einer Leidenschaft für
                        das Verständnis menschlichen Verhaltens auf. Doch erst als er das Filmemachen für sich
                        entdeckt, <span style="font-weight: bold;">findet er seine wahre Berufung</span> – einen Weg, der seine Liebe zum
                        Geschichtenerzählen, zur Psychologie, zur Technologie und zur Kunst miteinander verbindet. </br></br>

                        Mit einem vielfältigen Hintergrund, der Erfahrungen im Theater, auf Reisen und eine tiefgreifende
                        persönliche Entwicklung umfasst, nähert sich Chris der Cinematografie mit einem besonderen
                        Fokus auf Zusammenarbeit, Sinnhaftigkeit und emotionaler Resonanz. Er ist überzeugt, <span style="font-weight: bold;">dass es
                        vor allem darum geht, der Geschichte zu dienen</span>, das Ego im Zaum zu halten und die tieferen
                        Zusammenhänge jeder Szene zu verstehen. Chris’ Hingabe an sein Handwerk, kombiniert mit
                        seiner Widerstandskraft
                        ` : `
                        Chris Gruber is a cinematographer whose journey into filmmaking was anything but conventional.
                        Having grown up surrounded by fantastical stories from his grandfather and a passion for
                        understanding human behavior. Although it wasn’t until he discovered filmmaking that he found
                        his true calling — <span style="font-weight: bold;">a path that blends his love for storytelling, psychology, technology, and art</span>. </br></br>
                        Drawing from a diverse background that includes experiences in theater, travel, and a deep
                        personal journey, Chris approaches cinematography with a focus on collaboration, purpose, and
                        emotional resonance. He believes in <span style="font-weight: bold;">serving the story above all</span>, keeping ego in check, and
                        understanding the deeper narrative within each scene. Chris’s commitment to his craft, combined
                        with his resilience
                        `}
                    </p>
                </div>
                <!-- Awards Section -->
                <div class="col-md-6" style="text-align: left;">
                    <p style="font-size: 15pt; padding-bottom: 100px;">${ language === 'de' ? `
                        und einzigartigen Perspektive, prägt seine Arbeit, <span style="font-weight: bold;">in der jede
                        Kamerentscheidung nicht nur absichtlich und bedacht ist</span>, sondern von einer Leidenschaft für
                        die Kunst und die zugrunde liegende Philosophie der Filmproduktion getragen wird. </br></br>

                        Mit seinem Einsatz für stetiges Wachstum und der Überzeugung, dass jede Herausforderung eine
                        Chance ist, setzt Chris sein Handwerk leidenschaftlich ein, <span style="font-weight: bold;">um Geschichten zu erzählen, die
                        wirklich von Bedeutung sind</span> – stets mit Staunen und dem Traum, durch visuelles Storytelling zu
                        inspirieren. </br></br>

                        Neben all diesen Bestrebungen verfolgt Chris auch leidenschaftlich seinen Job als Vollzeit-Idiot.
                        `: `
                        and unique perspective, shapes his work, where <span style="font-weight: bold;">every camera choice is
                        intentional, thoughtful, and driven</span> by a love for both the art and the philosophy behind
                        filmmaking. </br></br>

                        With a dedication to constant growth and a belief that every challenge is an opportunity, Chris is
                        passionate about <span style="font-weight: bold;">using his craft to contribute to stories that matter</span>, always with wonder and a
                        dream to inspire through visual storytelling. </br></br>

                        In addition to all these endeavors, Chris passionately pursues his job as fulltime idiot.
                        `}
                    </p>
                </div>
            </div>
        </div>

        <div class="container" style="padding-bottom: 50px; text-align: left;">
            <h2 class="font2" style="font-size: 20pt; text-transform: uppercase; font-weight: 700;">${ language === 'de' ? 'Preise' : 'Awards'}</h2></br>
                <ul style="font-size: 15pt; list-style-position: inside; padding-left: 0px;">
                    <li>${ language === 'de' ? 'Jugenfilmpreis Baden-Württemberg “Beste Kamera” 2024' : 'Baden-Württemberg Youth Film Award “Best Cinematography ” 2024'}</li>
                    <li>${ language === 'de' ? 'Jugenfilmpreis Baden-Württemberg “Beste Kamera” 2023' : 'Baden-Württemberg Youth Film Award “Best Cinematography ” 2023'}</li>
                    <li>${ language === 'de' ? 'Jugenfilmpreis Baden-Württemberg “Beste Kamera” 2022' : 'Baden-Württemberg Youth Film Award “Best Cinematography ” 2022'}</li>
                </ul>
        </div>
    </section>
    `;


    document.body.insertAdjacentHTML("beforeend", html);
    insertFooter();
});
