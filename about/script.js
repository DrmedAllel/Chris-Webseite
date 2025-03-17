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
                <div class="col-lg-12 text-center">
                    <div class="embed-responsive" style="padding-bottom: 42%;">
                        <iframe class="embed-responsive-item" src="../videos/Cinematography Reel.m4v" allowfullscreen controls="false"></iframe>
                    </div>
                </div>
            </div>
        </br></br></br></br></br></br></br>
            <div class="row">
                <div class="col-lg-12 text-center">
                    <h2>${ language === 'de' ? 'Meine Geschichte' : 'My Journey'}</h2>
                    <hr class="star-primary">
                </div>
            </div>
            <div class="row">
                <div class="col-lg-8 col-lg-offset-2 text-center">
                    <img src="../images/personal/Profil.JPG" class="img-responsive img-centered" alt="Chris Gruber" style="max-width: 60%; margin: 0 auto 30px auto;">
                </div>
                <p class="col-lg-12 text-center">
                    <!-- Content for the about section would go here --><br>
                    ${ language === 'de' ? 'Hallo, ich bin Chris Gruber und ich mache seit über sieben Jahren nichts anderes, als Filme zu drehen. Mein großer Traum ist es, als erfolgreicher Kameramann großartige, mitreißende und innovative Geschichten mit den richtigen Bildern auf die Leinwände dieser Welt zu bringen.' : 'Hi, I am Chris Gruber and I have been doing nothing but making movies for over seven years. My big dream is to bring great, exciting and innovative stories to the screens of this world with the right images as a successful cameraman.'}
                </p>
            </div>
            <div class="row">
                <div class="col-lg-12 text-center">
                    <h2>${ language === 'de' ? 'Unterstütze mein Studium' : 'Support my studies'}</h2>
                    <hr class="star-primary">
                </div>
            </div>
            <div class="row text-center">
                <a href="https://www.paypal.me/chrisgruber169" target="_blank" class="btn btn-lg paypal-btn">
                    <img src="../images/paypal_logo.png" alt="Donate via PayPal" class="paypal-logo">
                </a>
                <a class="btn btn-lg bank-transfer-btn">
                    ${ language === 'de' ? 'Banküberweisung' : 'Bank Transfer'}
                </a>
            </div>
        </div>
    </section>

    
    <!-- Footer -->
    <footer class="text-center">
        <div class="footer-above">



        </div>
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
