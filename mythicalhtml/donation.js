document.addEventListener('DOMContentLoaded', () => {
    const donationRange = document.getElementById('donationRange');
    const donationValue = document.getElementById('donationValue');

    donationRange.addEventListener('input', () => {
        donationValue.textContent = donationRange.value;
    });
});
