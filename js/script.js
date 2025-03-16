document.addEventListener("DOMContentLoaded", function () {
    const iban = "DE12345678901234567890"; // Replace with your actual IBAN
    const bankBtn = document.querySelector(".bank-transfer-btn");

    if (bankBtn) {
        bankBtn.addEventListener("click", function (e) {
            e.preventDefault();
            navigator.clipboard.writeText(iban)
                .then(function () {
                    alert("IBAN copied to clipboard!");
                })
                .catch(function (err) {
                    alert("Failed to copy IBAN: " + err);
                });
        });
    }
});


// document.addEventListener("DOMContentLoaded", function () {
//     const timeElement = document.querySelector(".footer-time");
    
//     function updateTime() {
//         const now = new Date();
//         const hours = now.getHours().toString().padStart(2, '0');
//         const minutes = now.getMinutes().toString().padStart(2, '0');
//         const seconds = now.getSeconds().toString().padStart(2, '0');
        
//         // Format like a movie camera timecode: HH:MM:SS
//         timeElement.textContent = `${hours}:${minutes}:${seconds}`;
//     }

//     // Update immediately and then every second
//     if (timeElement) {
//         updateTime();
//         setInterval(updateTime, 1000);
//     }
// });