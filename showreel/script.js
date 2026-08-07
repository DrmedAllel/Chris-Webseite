document.addEventListener("DOMContentLoaded", function() {
    const language = localStorage.getItem('preferredLanguage') || 'de';

    const html = `
    <section id="showreel" style="padding-bottom: 100px; margin-top: 5rem;">                        
            <div class="container" style="padding: 0;">
                <h2 class="font2" style="font-weight: 700; margin-bottom: 10px; padding: 10px;">Showreel</h2>
                <div class="row">
                    <div class="col-lg-12 text-center" style="padding: 0;">
                        <video class="embed-responsive-item" src="../videos/Cinematography Reel.mp4" loading="eager" controls playsinline style="width: 90%; height: auto; object-fit: cover;"></video>
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
                alert_message = "Vielen Dank für deine Unterstützung! Du wirst jetzt zu PayPal weitergeleitet. Bitte denke daran, das Geld an Freunde und Familie zu senden, um Gebühren zu vermeiden. Verwendungszweck: AFI Chris";
            } else {
                alert_message = "Thank you for your support! You will now be redirected to PayPal. Please remember to send the money to friends and family to avoid fees. Transfer purpose: AFI Chris";
            }

            // Show alert
            alert(alert_message);
            
            // Redirect after alert is dismissed
            window.open(this.href, '_blank');
        });
    }
});