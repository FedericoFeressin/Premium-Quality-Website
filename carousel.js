// CARRUSEL GENERAL PARA LA PÁGINA DE INICIO

const carouselData = [
    {
        imagen: 'img/Tesla-Model-S.jpg',
        tag: 'Eléctrico',
        titulo: 'Tesla Model S Plaid',
        descripcion: 'Sedán eléctrico de lujo con 650km de autonomía y aceleración ultrarrápida.',
        enlace: 'catalogo.html'
    },
    // ...existing code...
];

let currentCarouselIndex = 0;
let carouselAutoplay;

function updateCarousel() {
    const slides = document.querySelectorAll('.carousel-item');
    const dots = document.querySelectorAll('.carousel-dot');

    if (slides.length === 0) return;

    slides.forEach((slide, index) => {
        slide.classList.toggle('active', index === currentCarouselIndex);
    });

    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentCarouselIndex);
    });
}

function goToSlide(idx) {
    if (idx >= 0 && idx < carouselData.length) {
        currentCarouselIndex = idx;
        updateCarousel();
        resetAutoplay();
    }
}

function nextSlide() {
    currentCarouselIndex = (currentCarouselIndex + 1) % carouselData.length;
    updateCarousel();
    resetAutoplay();
}

function prevSlide() {
    currentCarouselIndex = (currentCarouselIndex - 1 + carouselData.length) % carouselData.length;
    updateCarousel();
    resetAutoplay();
}

function startAutoplay() {
    if (carouselAutoplay) clearInterval(carouselAutoplay);
    carouselAutoplay = setInterval(nextSlide, 5000);
}

function resetAutoplay() {
    startAutoplay();
}

function inicializarCarrusel() {
    const inner = document.getElementById('carouselInner');
    const indicators = document.getElementById('carouselIndicators');
    const prevBtn = document.getElementById('carouselPrev');
    const nextBtn = document.getElementById('carouselNext');

    if (!inner || !indicators) return;

    // Crear slides
    carouselData.forEach((item, idx) => {
        const slide = document.createElement('div');
        slide.className = `carousel-item ${idx === 0 ? 'active' : ''}`;
        slide.innerHTML = `
            <img src="${item.imagen}" alt="${item.titulo}" loading="lazy">
            <div class="carousel-item-content">
                <span class="tag">${item.tag}</span>
                <h3>${item.titulo}</h3>
                <p>${item.descripcion}</p>
                <a href="${item.enlace}" class="btn">Ver Detalles</a>
            </div>
        `;
        inner.appendChild(slide);
    });

    // Crear indicadores
    carouselData.forEach((item, idx) => {
        const dot = document.createElement('button');
        dot.className = `carousel-dot ${idx === 0 ? 'active' : ''}`;
        dot.setAttribute('aria-label', `Ir a slide ${idx + 1}`);
        dot.addEventListener('click', () => goToSlide(idx));
        indicators.appendChild(dot);
    });

    // Eventos de botones
    if (prevBtn) prevBtn.addEventListener('click', prevSlide);
    if (nextBtn) nextBtn.addEventListener('click', nextSlide);

    startAutoplay();
}

document.addEventListener('DOMContentLoaded', inicializarCarrusel);
