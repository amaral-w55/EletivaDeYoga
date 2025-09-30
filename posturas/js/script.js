document.addEventListener('DOMContentLoaded', () => {

    // --- Lógica do Menu Hamburger ---
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        // Alterna a classe 'active' para mostrar/esconder o menu
        navLinks.classList.toggle('active');

        // Animação do ícone do hamburger (opcional)
        hamburger.classList.toggle('toggle');
    });

    // Fecha o menu ao clicar em um link (para mobile)
    document.querySelectorAll('.nav-links li a').forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                hamburger.classList.remove('toggle');
            }
        });
    });


    // --- Lógica de Animação ao Rolar a Página (Fade In) ---
    const fadeInElements = document.querySelectorAll('.fade-in');

    // Opções para o IntersectionObserver
    const observerOptions = {
        root: null, // observa a viewport
        rootMargin: '0px',
        threshold: 0.1 // aciona quando 10% do elemento está visível
    };

    // Cria o observador
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // Se o elemento está na tela
            if (entry.isIntersecting) {
                // Adiciona a classe 'visible' para ativar a animação CSS
                entry.target.classList.add('visible');
                // Para de observar o elemento para não animar novamente
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Pede ao observador para observar cada elemento com a classe .fade-in
    fadeInElements.forEach(el => {
        observer.observe(el);
    });

});