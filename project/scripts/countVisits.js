document.addEventListener('DOMContentLoaded', function() {
    // Verify if current page visited by user is index page
    if (window.location.pathname.endsWith('index.html') || window.location.pathname === '/') {
        // Verify variable exists
        if (localStorage.getItem('unitedpawsvisit')) {
            // Increase by one unit
            let visitCount = parseInt(localStorage.getItem('unitedpawsvisit'));
            visitCount += 1;
            localStorage.setItem('unitedpawsvisit', visitCount);
        } else {
            // Define the new variable into 1
            localStorage.setItem('unitedpawsvisit', 1);
        }

        // Get current value of unitedpawvisit
        let currentVisitCount = localStorage.getItem('unitedpawsvisit');

        // Print this value into footer
        let visitQtyElement = document.getElementById('visitQty');
        if (visitQtyElement) {
            visitQtyElement.textContent = `${currentVisitCount}`;
        }
    }
});