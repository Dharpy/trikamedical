  // ICONS
src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/js/all.min.js"

window.addEventListener('DOMContentLoaded', (event) => {
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
      link.addEventListener('click', smoothScroll);
    });

    function smoothScroll(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      const offsetTop = targetElement.offsetTop;

      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  }); window.addEventListener('DOMContentLoaded', (event) => {
      const navLinks = document.querySelectorAll('nav ul li a');
      navLinks.forEach(link => {
        link.addEventListener('click', smoothScroll);
      });

      const getStartedButton = document.querySelector('.btn');
      if (getStartedButton) {
        getStartedButton.addEventListener('click', smoothScroll);
      }

      function smoothScroll(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        const offsetTop = targetElement.offsetTop;

        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    });
   // JavaScript for header transparency and text color transition
   window.addEventListener('scroll', function () {
    var header = document.querySelector('header');
    var headerBg = document.querySelector('.header-bg');
    var title = document.querySelector('.logo span');
    var navLinks = document.querySelectorAll('nav ul li a');

    if (window.scrollY > header.offsetHeight) {
      header.classList.add('header-bg');
      title.style.color = '#fff'; // Change title text color to #2c346b
      navLinks.forEach(function (link) {
        link.style.color = '#fff'; // Change navigation links text color to #2c346b
      });
    } else {
      header.classList.remove('header-bg');
      title.style.color = '#2c346b'; // Change title text color to white
      navLinks.forEach(function (link) {
        link.style.color = '#2c346b'; // Change navigation links text color to white
      });
    }
  });