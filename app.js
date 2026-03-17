// =======================================================
// BASE DE DATOS Y VARIABLES GLOBALES
// =======================================================
const vehiculos = [
    {
        id: 1, marca: 'Tesla', modelo: 'Model S', tipo: 'sedan', año: 2024, transmision: 'Automática', motor: 'Eléctrico', destacado: true, precio: 89999,
        imagen: 'img/Tesla-Model-S.jpg',
        descripcion: 'Sedán eléctrico de lujo con tecnología de punta y 650km de autonomía. Suspensión adaptativa, techo panorámico de cristal y piloto automático avanzado.'
    },
    { id: 2, marca: 'BMW', modelo: 'X5', tipo: 'suv', año: 2024, transmision: 'Automática', motor: 'Gasolina', destacado: true, precio: 79999, imagen: 'img/BMW-Model-X5.jpg', descripcion: 'SUV deportivo con interior premium, tracción integral y motor V6 twin-turbo. Espacio ideal para la familia con lo último en infoentretenimiento.' },
    { id: 3, marca: 'Mercedes', modelo: 'C-Class', tipo: 'sedan', año: 2023, transmision: 'Automática', motor: 'Híbrido', destacado: false, precio: 65999, imagen: 'img/Mercedes-Model-S-Class.jpg', descripcion: 'Sedán elegante con confort excepcional, bajo consumo y un sistema híbrido suave para un rendimiento eficiente en ciudad.' },
    { id: 4, marca: 'Audi', modelo: 'A4', tipo: 'sedan', año: 2024, transmision: 'Automática', motor: 'Gasolina', destacado: false, precio: 59999, imagen: 'img/Audi-Model-A4.jpg', descripcion: 'El equilibrio perfecto entre rendimiento y tecnología. Un sedán ágil con interiores minimalistas y conectividad total.' },
    { id: 5, marca: 'Porsche', modelo: '911 Carrera', tipo: 'coupe', año: 2023, transmision: 'Automática', motor: 'Gasolina', destacado: true, precio: 129999, imagen: 'img/Porsche-Model-911.jpg', descripcion: 'El ícono deportivo por excelencia. Motor trasero, caja PDK y una experiencia de manejo inigualable.' },
    { id: 6, marca: 'Ford', modelo: 'Mustang Mach-E', tipo: 'suv', año: 2024, transmision: 'Automática', motor: 'Eléctrico', destacado: false, precio: 54999, imagen: 'img/Ford-Model-Mustang.jpg', descripcion: 'Crossover eléctrico que combina la esencia del Mustang con la eficiencia moderna. Amplio y potente.' },
    { id: 7, marca: 'Chevrolet', modelo: 'Camaro', tipo: 'coupe', año: 2023, transmision: 'Manual', motor: 'Gasolina', destacado: false, precio: 42999, imagen: 'img/Chevrolet-Model-Camaro.jpg', descripcion: 'Muscle car clásico con motor V8, diseño agresivo y una experiencia de conducción pura y emocionante.' },
    { id: 8, marca: 'Golf', modelo: 'GTI', tipo: 'hatchback', año: 2024, transmision: 'Manual', motor: 'Gasolina', destacado: false, precio: 35999, imagen: 'img/Volkswagen-Model-Golf.jpg', descripcion: 'Hatchback deportivo con manejo ágil, motor turboalimentado y un interior cómodo y bien equipado.' },
    { id: 9, marca: 'Volvo', modelo: 'XC90', tipo: 'suv', año: 2024, transmision: 'Automática', motor: 'Híbrido', destacado: true, precio: 79999, imagen: 'img/Volvo-Model-XC90.jpg', descripcion: 'SUV de lujo con enfoque en seguridad, espacio para siete pasajeros y un sistema híbrido eficiente.' },
    { id: 10, marca: 'Lexus', modelo: 'RX 350', tipo: 'suv', año: 2023, transmision: 'Automática', motor: 'Híbrido', destacado: false, precio: 69999, imagen: 'img/Lexus-Model-RX350.jpg', descripcion: 'SUV híbrido de lujo con interiores refinados, tecnología avanzada y un rendimiento suave y eficiente.' },
    { id: 11, marca: 'Nissan', modelo: 'Leaf', tipo: 'hatchback', año: 2024, transmision: 'Automática', motor: 'Eléctrico', destacado: false, precio: 31999, imagen: 'img/Nissan-Model-Leaf.jpg', descripcion: 'Hatchback eléctrico accesible con buena autonomía, ideal para la movilidad urbana y con tecnología moderna.' },
    { id: 12, marca: 'Jaguar', modelo: 'F-Type', tipo: 'coupe', año: 2023, transmision: 'Automática', motor: 'Gasolina', destacado: true, precio: 99999, imagen: 'img/Jaguar-Model-FType.jpg', descripcion: 'Coupé deportivo británico con diseño elegante, motor potente y una experiencia de conducción dinámica.' }, {id: 13, marca: 'Honda', modelo: 'Civic', tipo: 'sedan', año: 2024, transmision: 'Automática', motor: 'Gasolina', destacado: false, precio: 24999, imagen: 'img/Honda-Model-Civic.jpg', descripcion: 'Sedán compacto con excelente economía de combustible, manejo ágil y un interior cómodo y moderno.' },
    { id: 14, marca: 'Hyundai', modelo: 'Tucson', tipo: 'suv', año: 2024, transmision: 'Automática', motor: 'Híbrido', destacado: false, precio: 32999, imagen: 'img/Hyundai-Model-Tucson.jpg', descripcion: 'SUV compacto con diseño audaz, tecnología avanzada y una opción híbrida eficiente para la vida urbana.' },
    { id: 15, marca: 'Mazda', modelo: 'CX-5', tipo: 'suv', año: 2023, transmision: 'Automática', motor: 'Gasolina', destacado: false, precio: 27999, imagen: 'img/Mazda-Model-CX5.jpg', descripcion: 'SUV compacto con manejo deportivo, diseño elegante y un interior de alta calidad que destaca en su segmento.' }
];

let carrito = [];
let vehiculoSeleccionado = null;

// =======================================================
// LÓGICA AUXILIAR Y NOTIFICACIONES
// =======================================================

function mostrarNotificacion(mensaje, tipo = 'info') {
    const notif = document.createElement('div');
    const color = tipo === 'success' ? '#28a745' : '#17a2b8';

    notif.style.cssText = `
        position: fixed; top: 20px; right: 20px; background: ${color}; color: #fff;
        padding: 1rem 1.5rem; border-radius: 4px; z-index: 9999;
        box-shadow: 0 4px 12px rgba(0,0,0,0.2); opacity: 0; transition: opacity 0.3s ease;
    `;
    notif.textContent = mensaje;
    document.body.appendChild(notif);

    setTimeout(() => {
        notif.style.opacity = 1;
    }, 10);

    setTimeout(() => {
        notif.style.opacity = 0;
        notif.addEventListener('transitionend', () => notif.remove());
    }, 3000);
}

function inicializarAcordeon() {
    const titulos = document.querySelectorAll('.acordeon-titulo');

    titulos.forEach(titulo => {
        titulo.addEventListener('click', function () {
            // El contenido está justo después del botón en el HTML
            const contenido = this.nextElementSibling;

            // 1. Colapsar si ya está abierto
            if (contenido.classList.contains('acordeon-abierto')) {
                contenido.classList.remove('acordeon-abierto');
                contenido.style.maxHeight = null;
            } else {
                // 2. Cerrar todos los demás acordeones
                document.querySelectorAll('.acordeon-contenido').forEach(item => {
                    if (item.classList.contains('acordeon-abierto')) {
                        item.classList.remove('acordeon-abierto');
                        item.style.maxHeight = null;
                    }
                });

                // 3. Abrir el acordeón actual
                contenido.classList.add('acordeon-abierto');
                // Asigna el scrollHeight (altura real) al maxHeight
                contenido.style.maxHeight = contenido.scrollHeight + "px";
            }
        });
    });
}

window.cerrarModales = function () {
    const detalleModal = document.getElementById('detalleModal');
    const carritoModal = document.getElementById('carritoModal');
    if (detalleModal) detalleModal.classList.remove('show');
    if (carritoModal) carritoModal.classList.remove('show');
};

function abrirCarritoModal() {
    renderCarrito();
    const carritoModal = document.getElementById('carritoModal');
    if (carritoModal) carritoModal.classList.add('show');
}

window.mostrarPestana = function (pestanaId) {
    // Asegura que solo se muestre el contenido de la pestaña activa
    document.querySelectorAll('#detalleModal .tab-content').forEach(content => {
        // Usa una comprobación más específica
        if (content.id.startsWith('detalle') || content.id.startsWith('financiamiento')) {
            content.style.display = 'none';
        }
    });

    document.querySelectorAll('#detalleModal .tab-buttons button').forEach(btn => btn.classList.remove('active'));

    const content = document.getElementById(pestanaId); // Nota: el HTML usa id 'detalle' y 'financiamiento' directamente
    if (content) content.style.display = 'block';

    // Para el botón, asumimos que tiene un ID si queremos marcarlo como activo
    // Tu HTML no tiene IDs en los botones, así que buscamos por contenido o clase
    document.querySelectorAll('.tab-buttons button').forEach(btn => {
        if (btn.textContent.trim().toLowerCase().includes(pestanaId)) {
            btn.classList.add('active');
        }
    });
}

// =======================================================
// LÓGICA DE DETALLE Y FINANCIACIÓN (MODAL)
// =======================================================

function simularFinanciacion(precio) {
    const tasaAnual = 0.08;
    const enganchePorcentaje = 0.20;

    const engancheMonto = precio * enganchePorcentaje;
    const montoFinanciar = precio - engancheMonto;

    const plazos = [24, 36, 48, 60];
    const resultados = plazos.map(plazo => {
        const tasaMensual = tasaAnual / 12;
        const n = plazo;
        // Fórmula de cuota fija
        const cuotaMensual = montoFinanciar * (tasaMensual * Math.pow((1 + tasaMensual), n)) / (Math.pow((1 + tasaMensual), n) - 1);
        const totalPagar = cuotaMensual * n;

        return {
            plazo: plazo,
            cuota: Math.round(cuotaMensual).toLocaleString(),
            totalPagar: Math.round(totalPagar).toLocaleString()
        };
    });

    return {
        precioBase: `$${precio.toLocaleString()}`,
        engancheMonto: `$${engancheMonto.toLocaleString()}`,
        montoFinanciar: `$${montoFinanciar.toLocaleString()}`,
        tasa: '8% Anual',
        resultados: resultados
    };
}


window.abrirDetalleModal = function (id) {
    const vehiculo = vehiculos.find(v => String(v.id) === String(id));

    if (!vehiculo) {
        console.error("Vehículo no encontrado. ID recibido:", id);
        return;
    }

    const detalleModal = document.getElementById('detalleModal');
    if (!detalleModal) {
        console.error("El modal de detalle no se encuentra en el DOM.");
        return;
    }

    vehiculoSeleccionado = vehiculo;
    const simulacion = simularFinanciacion(vehiculo.precio);

    // 1. Rellenar Encabezado (USANDO LOS IDs CORRECTOS DE TU HTML)
    if (document.getElementById('modalHeaderTitle')) document.getElementById('modalHeaderTitle').textContent = `${vehiculo.marca} ${vehiculo.modelo}`;
    if (document.getElementById('precioFinal')) document.getElementById('precioFinal').textContent = vehiculo.precio.toLocaleString();

    // 2. Rellenar Pestaña Detalle (USANDO LOS IDs CORRECTOS DE TU HTML)
    if (document.getElementById('detalleImagen')) {
        document.getElementById('detalleImagen').src = vehiculo.imagen;
        document.getElementById('detalleImagen').alt = `${vehiculo.marca} ${vehiculo.modelo}`;
    }

    // **CORRECCIÓN:** Rellenar el grid de especificaciones
    const specsGrid = document.getElementById('detalleSpecsTab');
    if (specsGrid) {
        specsGrid.innerHTML = `
            <div class="spec-item"><strong>Tipo:</strong> <span>${vehiculo.tipo.charAt(0).toUpperCase() + vehiculo.tipo.slice(1)}</span></div>
            <div class="spec-item"><strong>Año:</strong> <span>${vehiculo.año}</span></div>
            <div class="spec-item"><strong>Transmisión:</strong> <span>${vehiculo.transmision}</span></div>
            <div class="spec-item"><strong>Motor:</strong> <span>${vehiculo.motor || 'N/A'}</span></div>
        `;
    }

    if (document.getElementById('fullDescription')) document.getElementById('fullDescription').textContent = vehiculo.descripcion;

    // 3. Rellenar Pestaña Financiación
    if (document.getElementById('finanPrecioBase')) document.getElementById('finanPrecioBase').textContent = simulacion.precioBase;
    if (document.getElementById('finanEnganche')) document.getElementById('finanEnganche').textContent = simulacion.engancheMonto;
    if (document.getElementById('finanMontoFinanciar')) document.getElementById('finanMontoFinanciar').textContent = simulacion.montoFinanciar;
    if (document.getElementById('finanTasa')) document.getElementById('finanTasa').textContent = simulacion.tasa;

    const cuotasBody = document.getElementById('finanCuotasBody');
    if (cuotasBody) {
        cuotasBody.innerHTML = '';
        simulacion.resultados.forEach(res => {
            cuotasBody.innerHTML += `
                <tr>
                    <td>${res.plazo} meses</td>
                    <td>${res.cuota} USD</td>
                    <td>${res.totalPagar} USD</td>
                </tr>
            `;
        });
    }

    detalleModal.classList.add('show');
    window.mostrarPestana('detalle');
}


// =======================================================
// LÓGICA DE CATÁLOGO, OFERTAS Y RENDERIZADO
// =======================================================

function renderizarVehiculos(vehiculosArray, contenedor) {
    if (!contenedor) {
        console.warn('Contenedor no encontrado para renderizar vehículos');
        return;
    }
    contenedor.innerHTML = '';

    if (vehiculosArray.length === 0) {
        contenedor.innerHTML = '<p style="text-align: center; grid-column: 1 / -1; padding: 3rem; color: #999;">No se encontraron vehículos que coincidan con los filtros.</p>';
        return;
    }

    vehiculosArray.forEach(vehiculo => {
        const card = document.createElement('div');
        card.classList.add('vehiculo-card');
        card.setAttribute('onclick', `window.abrirDetalleModal(${vehiculo.id})`);
        card.style.cursor = 'pointer';

        card.innerHTML = `
            <div class="card-img-container">
                <img src="${vehiculo.imagen}" alt="${vehiculo.marca} ${vehiculo.modelo}" class="card-img">
            </div>
            <div class="card-content">
                <h3 class="card-title">${vehiculo.marca} ${vehiculo.modelo}</h3>
                <p class="card-specs">${vehiculo.tipo.charAt(0).toUpperCase() + vehiculo.tipo.slice(1)} | ${vehiculo.año}</p>
                <div class="card-details">
                    <span class="card-price">$${vehiculo.precio.toLocaleString()}</span>
                    <button class="add-to-cart-small" onclick="event.stopPropagation(); window.abrirDetalleModal(${vehiculo.id})" title="Ver detalles">
                        <i class="fas fa-search-plus"></i>
                    </button>
                </div>
            </div>
        `;
        contenedor.appendChild(card);
    });
}

function filtrarVehiculos(contenedorGrid) {
    const searchInput = document.getElementById('searchInput');
    const tipoFiltro = document.getElementById('tipoFiltro');
    const precioFiltro = document.getElementById('precioFiltro');
    const ordenFiltro = document.getElementById('ordenFiltro');

    const searchText = searchInput ? searchInput.value.toLowerCase() : '';
    const tipoVal = tipoFiltro ? tipoFiltro.value : '';
    const precioVal = precioFiltro ? precioFiltro.value : '';
    const ordenVal = ordenFiltro ? ordenFiltro.value : '';

    // 1. Filtrado
    let resultados = vehiculos.filter(vehiculo => {
        const matchesSearch = vehiculo.marca.toLowerCase().includes(searchText) || vehiculo.modelo.toLowerCase().includes(searchText);
        const matchesTipo = !tipoVal || vehiculo.tipo === tipoVal;

        let matchesPrecio = true;
        if (precioVal) {
            const precio = vehiculo.precio / 1000;
            if (precioVal === '0-60') {
                matchesPrecio = precio <= 60;
            } else if (precioVal === '60-100') {
                matchesPrecio = precio > 60 && precio <= 100;
            } else if (precioVal === '100+') {
                matchesPrecio = precio > 100;
            }
        }
        return matchesSearch && matchesTipo && matchesPrecio;
    });

    // 2. Ordenación
    if (ordenVal) {
        if (ordenVal === 'precio-asc') {
            resultados.sort((a, b) => a.precio - b.precio);
        } else if (ordenVal === 'precio-desc') {
            resultados.sort((a, b) => b.precio - a.precio);
        } else if (ordenVal === 'modelo-asc') {
            resultados.sort((a, b) => a.modelo.localeCompare(b.modelo));
        } else if (ordenVal === 'modelo-desc') {
            resultados.sort((a, b) => b.modelo.localeCompare(a.modelo));
        }
    }

    // 3. Renderizado
    renderizarVehiculos(resultados, contenedorGrid);
}

// =======================================================
// LÓGICA DE CARRITO
// =======================================================

window.agregarAlCarrito = function () {
    if (vehiculoSeleccionado) {
        const nuevoItem = {
            carritoId: Date.now(),
            ...vehiculoSeleccionado
        };
        carrito.push(nuevoItem);
        actualizarCarritoUI();
        renderCarrito();
        mostrarNotificacion(`Añadido: ${nuevoItem.marca} ${nuevoItem.modelo}`, 'success');
        cerrarModales();
    }
};

function actualizarCarritoUI() {
    const countElement = document.querySelector('.carrito-count');
    if (countElement) {
        countElement.textContent = carrito.length;
    }
}

function renderCarrito() {
    const itemsContainer = document.getElementById('carritoItems');
    const totalContainer = document.getElementById('carritoTotal');
    let total = 0;

    if (itemsContainer && totalContainer) {
        itemsContainer.innerHTML = '';
        if (carrito.length === 0) {
            itemsContainer.innerHTML = '<p style="text-align: center; color: #555; padding: 1rem;">El carrito está vacío.</p>';
        } else {
            carrito.forEach(item => {
                total += item.precio;
                const div = document.createElement('div');
                div.classList.add('carrito-item');
                div.innerHTML = `
                    <div class="carrito-item-img-container">
                        <img src="${item.imagen}" alt="${item.marca} ${item.modelo}" class="carrito-item-img">
                    </div>
                    <div class="carrito-item-info">
                        <strong>${item.marca} ${item.modelo}</strong>
                        <p style="margin: 0;">$${item.precio.toLocaleString()}</p>
                    </div>
                    <button onclick="window.removerDelCarrito(${item.carritoId})" class="carrito-remove">&times;</button>
                `;
                itemsContainer.appendChild(div);
            });
        }
        totalContainer.textContent = total.toLocaleString();
    }
}

window.removerDelCarrito = function (carritoId) {
    carrito = carrito.filter(item => item.carritoId !== carritoId);
    actualizarCarritoUI();
    renderCarrito();
    mostrarNotificacion('Artículo eliminado', 'info');
};

// =======================================================
// DATOS DEL CARRUSEL - CON IMÁGENES LOCALES
// =======================================================

const carouselData = [
    {
        imagen: 'img/Tesla-Model-S.jpg',
        tag: 'Eléctrico',
        titulo: 'Tesla Model S Plaid',
        descripcion: 'Sedán eléctrico de lujo con 650km de autonomía y aceleración ultrarrápida.',
        enlace: 'catalogo.html'
    },
    {
        imagen: 'img/BMW-Model-X5.jpg',
        tag: 'Premium SUV',
        titulo: 'BMW X5: Confort Total',
        descripcion: 'SUV deportivo con interior de lujo y tecnología de punta para toda la familia.',
        enlace: 'catalogo.html'
    },
    {
        imagen: 'img/Porsche-Model-911.jpg',
        tag: 'Deportivo',
        titulo: 'Porsche 911 Carrera',
        descripcion: 'Coupé de alto rendimiento con diseño icónico y experiencia de conducción inigualable.',
        enlace: 'ofertas.html'
    },
    {
        imagen: 'img/Volvo-Model-XC90.jpg',
        tag: 'Híbrido',
        titulo: 'Volvo XC90: Seguridad',
        descripcion: 'SUV de lujo con sistema híbrido eficiente y enfoque en seguridad de su familia.',
        enlace: 'catalogo.html'
    },
    {
        imagen: 'img/Jaguar-Model-FType.jpg',
        tag: 'Lujo',
        titulo: 'Jaguar F-Type: Elegancia',
        descripcion: 'Coupé deportivo británico con diseño elegante y motor potente que inspira.',
        enlace: 'catalogo.html'
    }
];

// =======================================================
// LÓGICA DEL CARRUSEL - NUEVA
// =======================================================

let currentCarouselIndex = 0;
let carouselAutoplay;

function updateCarousel() {
    const slides = document.querySelectorAll('.carousel-item');
    const dots = document.querySelectorAll('.carousel-dot');

    // Actualizar slides
    slides.forEach((slide, idx) => {
        if (idx === currentCarouselIndex) {
            slide.classList.add('active');
        } else {
            slide.classList.remove('active');
        }
    });

    // Actualizar dots
    dots.forEach((dot, idx) => {
        if (idx === currentCarouselIndex) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });

    console.log(`✅ Slide actual: ${currentCarouselIndex + 1}/${carouselData.length}`);
}

function goToSlide(idx) {
    console.log(`🔘 Ir a slide ${idx}`);
    currentCarouselIndex = idx;
    updateCarousel();
    resetAutoplay();
}

function nextSlide() {
    console.log('🔘 Siguiente slide');
    currentCarouselIndex = (currentCarouselIndex + 1) % carouselData.length;
    updateCarousel();
    resetAutoplay();
}

function prevSlide() {
    console.log('🔘 Slide anterior');
    currentCarouselIndex = (currentCarouselIndex - 1 + carouselData.length) % carouselData.length;
    updateCarousel();
    resetAutoplay();
}

function startAutoplay() {
    if (carouselAutoplay) clearInterval(carouselAutoplay);
    carouselAutoplay = setInterval(() => {
        currentCarouselIndex = (currentCarouselIndex + 1) % carouselData.length;
        updateCarousel();
    }, 5000);
    console.log('⏱️ Autoplay iniciado');
}

function resetAutoplay() {
    startAutoplay();
}

function inicializarCarrusel() {
    console.log('✅ Inicializando carrusel nuevo...');
    
    const inner = document.getElementById('carouselInner');
    const indicators = document.getElementById('carouselIndicators');
    const prevBtn = document.getElementById('carouselPrev');
    const nextBtn = document.getElementById('carouselNext');

    if (!inner) {
        console.error('❌ carouselInner no encontrado');
        return;
    }

    if (!indicators) {
        console.error('❌ carouselIndicators no encontrado');
        return;
    }

    // Crear slides
    console.log(`📸 Creando ${carouselData.length} slides...`);
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
        console.log(`  ✅ Slide ${idx + 1}: ${item.titulo}`);
    });

    // Crear indicadores
    console.log(`🔵 Creando ${carouselData.length} indicadores...`);
    carouselData.forEach((item, idx) => {
        const dot = document.createElement('button');
        dot.className = `carousel-dot ${idx === 0 ? 'active' : ''}`;
        dot.setAttribute('aria-label', `Ir a slide ${idx + 1}`);
        dot.addEventListener('click', (e) => {
            e.preventDefault();
            goToSlide(idx);
        });
        indicators.appendChild(dot);
    });

    // Eventos de botones
    if (prevBtn) {
        prevBtn.addEventListener('click', (e) => {
            e.preventDefault();
            prevSlide();
        });
        console.log('✅ Botón PREV vinculado');
    } else {
        console.error('❌ Botón PREV no encontrado');
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', (e) => {
            e.preventDefault();
            nextSlide();
        });
        console.log('✅ Botón NEXT vinculado');
    } else {
        console.error('❌ Botón NEXT no encontrado');
    }

    // Iniciar autoplay
    startAutoplay();
    console.log('✅ Carrusel listo');
}

// =======================================================
// INICIALIZACIÓN
// =======================================================

document.addEventListener('DOMContentLoaded', function() {
    console.log('=== 🚀 DOM CARGADO ===');
    
    actualizarCarritoUI();
    inicializarAcordeon();
    inicializarCarrusel(); // CARRUSEL NUEVO

    // Eventos de Carrito
    const carritoIcon = document.getElementById('carritoIcon');
    if (carritoIcon) {
        carritoIcon.addEventListener('click', abrirCarritoModal);
    }

    // Botones de cierre de modal
    document.querySelectorAll('.modal-close').forEach(closeBtn => {
        closeBtn.addEventListener('click', cerrarModales);
    });

    // Cerrar modal al hacer clic fuera del contenido
    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target.classList.contains('modal')) {
                cerrarModales();
            }
        });
    });

    // PÁGINA DE CATÁLOGO
    const catalogoGrid = document.getElementById('vehiculosGridContainer');
    if (catalogoGrid) {
        console.log('Página de catálogo detectada, renderizando vehículos...');
        renderizarVehiculos(vehiculos, catalogoGrid);

        // Eventos de filtros
        const searchInput = document.getElementById('searchInput');
        const tipoFiltro = document.getElementById('tipoFiltro');
        const precioFiltro = document.getElementById('precioFiltro');
        const ordenFiltro = document.getElementById('ordenFiltro');

        if (searchInput) searchInput.addEventListener('input', () => filtrarVehiculos(catalogoGrid));
        if (tipoFiltro) tipoFiltro.addEventListener('change', () => filtrarVehiculos(catalogoGrid));
        if (precioFiltro) precioFiltro.addEventListener('change', () => filtrarVehiculos(catalogoGrid));
        if (ordenFiltro) ordenFiltro.addEventListener('change', () => filtrarVehiculos(catalogoGrid));
    }

    // PÁGINA DE INICIO
    const homeGrid = document.getElementById('homeOfertasGrid');
    if (homeGrid) {
        console.log('Página de inicio detectada, renderizando autos destacados...');
        const autosDestacados = vehiculos.filter(v => v.destacado === true).slice(0, 3);
        renderizarVehiculos(autosDestacados, homeGrid);
    }
});