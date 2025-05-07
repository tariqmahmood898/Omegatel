document.addEventListener('DOMContentLoaded', function() {
    const homeButton = document.getElementById('homeButton');
    const rateButton = document.getElementById('rateButton');
    const serviceButton = document.getElementById('serviceButton');

    homeButton.addEventListener('click', function() {
        showSection('home');
    });

    rateButton.addEventListener('click', function() {
        showSection('rate');
    });

    serviceButton.addEventListener('click', function() {
        showSection('service');
    });


    function showSection(section) {
        const sections = document.querySelectorAll('.section');
        sections.forEach(function(sec) {
            sec.style.display = 'none';
        });
        document.getElementById(section).style.display = 'block';
    }

    // Initialize by showing the home section
    showSection('home');
});;


// Toggle mobile menu
function toggleMenu() {
    const menu = document.getElementById('menuList');
    menu.classList.toggle('active');
  }
  