// script.js (Pas de changement par rapport à la version précédente, car les fonctionnalités restent pertinentes)

document.addEventListener('DOMContentLoaded', () => {
    // Exemple simple : ajouter une classe quand on scroll pour animer des éléments
    const sections = document.querySelectorAll('section');

    const observerOptions = {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.1 // 10% de la section visible
    };

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in'); // Ajoutez une classe d'animation
                observer.unobserve(entry.target); // Cesse d'observer après l'animation
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        sectionObserver.observe(section);
    });

    // Ajoutez ceci à votre CSS si vous voulez voir l'effet 'fade-in'
    /*
    .fade-in {
        opacity: 0;
        transform: translateY(20px);
        animation: fadeInAndSlideUp 0.8s ease-out forwards;
    }
    @keyframes fadeInAndSlideUp {
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    */


    // Pour un formulaire de contact plus élaboré, vous auriez besoin
    // d'un script côté serveur pour traiter les données (par ex. PHP, Node.js).
    // Ici, nous pouvons juste ajouter une petite validation côté client ou un message de confirmation.
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            // Empêche l'envoi du formulaire pour cet exemple
            // event.preventDefault();

            // Ici, vous pourriez ajouter une validation JavaScript plus complexe
            // ou afficher un message de succès (si pas d'envoi réel)
            // alert('Votre message a été envoyé avec succès ! (Ceci est un exemple)');
        });
    }

    // Smooth scrolling pour la navigation
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
// Let's add a simple alert for demonstration or a more complex solution.
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            // Basic client-side checks (HTML5 'required' handles most of this)
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            if (!name || !email || !message) {
                alert('Please fill in all required fields.');
                event.preventDefault(); // Stop form submission if validation fails
                return;
            }

            // If you were using fetch API for AJAX submission, you'd prevent default
            // and handle the fetch request here.
            // With Formspree's direct action, the browser handles the POST request.

            // Optional: You could show a temporary "Sending..." message here
            // if you preventDefault() and then use fetch API to submit.
            // For a direct Formspree submission, a redirect to a thank you page
            // or Formspree's default success page is common.
        });
    }
});