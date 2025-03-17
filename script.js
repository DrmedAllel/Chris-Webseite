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
                        <span class="name">Chris Gruber
                            <div class="reddot"></div>
                        </span>
                        <span class="skills">Director of Photography</span>
                        <br>
                    </div>
                </div>
            </div>
        </div>
    </header>
    <div class="container">
        <div class="row">
            <div class="col-lg-12 text-center">
                <div class="embed-responsive" style="padding-bottom: 42%;">
                    <iframe class="embed-responsive-item" src="videos/Cinematography Reel.m4v" allowfullscreen controls="false"></iframe>
                </div>
            </div>
        </div>
    </div>

    <section id="donate">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 text-center">
                    <h2>${ language === 'de' ? 'Unterstütze mein Studium' : 'Support my studies'}</h2>
                    </br>
                    <p>
                        ${ language === 'de' ? `Das Ziel ist zum Greifen nah. Nach jahrelanger harter Arbeit wurde ich in Los Angeles an einer der renommiertesten Filmschulen der Welt angenommen. Es gibt nur ein Hindernis. Dabei kannst Du mir helfen.</br></br>
                        `: `
                        The goal is within reach. After years of hard work, I was accepted to one of the most prestigious film schools in the world in Los Angeles. There is only one obstacle. You can help me with that.</br></br>`}
                    </p>
                    <a href="https://chris-gruber.com/fundraiser/" class="" style="text-decoration: underline;">${ language === 'de' ? 'Mehr' : 'More'}</a>
                </div>
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
                    <a href="https://www.instagram.com/_chris.gruber_?igsh=em1rMmdhZm1jNHdv"><img src="images/insta.png" class="img-responsive img-centered insta" alt="Instagramm" width="50" height="50"></a>
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