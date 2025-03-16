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