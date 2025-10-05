document.addEventListener('DOMContentLoaded', () => {
    // Exemple simple : ajouter une classe quand on scroll pour animer des éléments
    // (vous devrez ajouter le CSS correspondant pour les animations)
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

    // Exemple de classe CSS pour 'fade-in' :
    // .fade-in {
    //     opacity: 0;
    //     transform: translateY(20px);
    //     animation: fadeInAndSlideUp 0.8s ease-out forwards;
    // }
    // @keyframes fadeInAndSlideUp {
    //     to {
    //         opacity: 1;
    //         transform: translateY(0);
    //     }
    // }


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