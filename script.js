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

    <!-- Header with video background -->
    <header style="position: relative; overflow: hidden;">
        <!-- Video placed as a background element -->
        <div class="video-background" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 1; opacity: 0.3;">
            <div class="embed-responsive" style="padding-bottom: 42%; height: 100%;">
                <video class="embed-responsive-item" src="videos/Cinematography Reel.mp4" loading="eager" autoplay muted loop playsinline style="width: 100%; height: 100%; object-fit: cover;"></video>
            </div>
        </div>
        <!-- Header text placed above the video -->
        <div class="container" style="position: relative; z-index: 2;">
            <div class="row">
                <div class="col-lg-12">
                    <div class="intro-text">
                        <br>
                        <span class="name">Chris Gruber
                            <div class="reddot"></div>
                        </span>
                        <span class="skills">${language === 'de' ? 'Kameramann' : 'Cinematographer'}</span>
                        <br>
                    </div>
                </div>
            </div>
        </div>
    </header>

    <section id="donate" style="padding-bottom: 100px;">
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
                    <a href="https://chris-gruber.com/fundraiser/" class="" style="font-size: 15pt; text-decoration: underline;">${ language === 'de' ? 'Erfahre mehr' : 'Learn more'}</a>
                </div>
            </div>
        </div>
    </section>
    `;


    document.body.insertAdjacentHTML("beforeend", html);
    insertFooter();
});