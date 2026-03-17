// =======================================================
// CARRUSEL DE OFERTAS - LÓGICA
// =======================================================

// CARRUSEL ESPECÍFICO PARA LA PÁGINA DE OFERTAS

class CarouselOfertas {
    constructor() {
        this.currentIndex = 0;
        this.slides = document.querySelectorAll('.carousel-item');
        this.dots = document.querySelectorAll('.carousel-dot');
        this.prevBtn = document.getElementById('prevBtn');
        this.nextBtn = document.getElementById('nextBtn');
        this.autoplayTimer = null;
        this.autoplayInterval = 5000;
        
        if (this.slides.length === 0) {
            console.error('❌ No se encontraron slides');
            return;
        }

        this.init();
    }

    init() {
        console.log('✅ Inicializando carrusel de ofertas...');
        this.attachEventListeners();
        this.startAutoplay();
    }

    attachEventListeners() {
        if (this.prevBtn) {
            this.prevBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.prevSlide();
            });
        }
        if (this.nextBtn) {
            this.nextBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.nextSlide();
            });
        }
        
        this.dots.forEach((dot, index) => {
            dot.addEventListener('click', (e) => {
                e.preventDefault();
                this.goToSlide(index);
            });
        });

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') this.prevSlide();
            if (e.key === 'ArrowRight') this.nextSlide();
        });

        // Pausar autoplay al hover
        if (this.container) {
            this.container.addEventListener('mouseenter', () => this.stopAutoplay());
            this.container.addEventListener('mouseleave', () => this.startAutoplay());
        }

        console.log('✅ Event listeners agregados');
    }

    updateCarousel() {
        // Actualizar slides
        this.slides.forEach((slide, index) => {
            if (index === this.currentIndex) {
                slide.classList.add('active');
            } else {
                slide.classList.remove('active');
            }
        });

        // Actualizar dots
        this.dots.forEach((dot, index) => {
            if (index === this.currentIndex) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });

        console.log(`📍 Slide actual: ${this.currentIndex + 1}/${this.slides.length}`);
    }

    nextSlide() {
        this.currentIndex = (this.currentIndex + 1) % this.slides.length;
        this.updateCarousel();
        this.resetAutoplay();
    }

    prevSlide() {
        this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
        this.updateCarousel();
        this.resetAutoplay();
    }

    goToSlide(index) {
        if (index >= 0 && index < this.slides.length && index !== this.currentIndex) {
            this.currentIndex = index;
            this.updateCarousel();
            this.resetAutoplay();
        }
    }

    startAutoplay() {
        this.autoplayTimer = setInterval(() => {
            this.currentIndex = (this.currentIndex + 1) % this.slides.length;
            this.updateCarousel();
        }, this.autoplayInterval);
        console.log('⏱️ Autoplay iniciado');
    }

    stopAutoplay() {
        if (this.autoplayTimer) {
            clearInterval(this.autoplayTimer);
            this.autoplayTimer = null;
        }
    }

    resetAutoplay() {
        this.stopAutoplay();
        this.startAutoplay();
    }
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    console.log('=== 🎠 CARRUSEL DE OFERTAS ===');
    new CarouselOfertas();
});
