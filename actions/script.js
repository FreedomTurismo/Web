document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav ul li a');
    const sections = document.querySelectorAll('section');

    // Navegación suave
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            window.scrollTo({
                top: targetSection.offsetTop - 50,
                behavior: 'smooth'
            });
        });
    });

    const paqueteCards = document.querySelectorAll('.paquete-card');
    const modal = document.getElementById('paquete-modal');
    const closeBtn = modal.querySelector('.close-btn');
    const modalTitle = document.getElementById('modal-title');
    const modalImage = document.getElementById('modal-image');
    const modalRating = document.getElementById('modal-rating');
    const modalCustomers = document.getElementById('modal-customers');
    const modalDescription = document.getElementById('modal-description');
    const modalBuyBtn = document.getElementById('modal-buy-btn');

    // Distintos contenidos para cada paquete
    const paqueteInfo = [
        {
            title: "Aventura en Europa",
            image: "/release/paquete1.jpg",
            rating: "⭐⭐⭐⭐⭐ de 5 estrellas",
            customers: "3200 clientes les gusta este paquete",
            description: `
                <span class="blue-badge">8 DÍAS / 7 NOCHES</span>
                <h2>Aventura por Europa: París, Roma y Berlín</h2>
                <p class="subtitle">Saliendo de Buenos Aires desde Lun 10 Oct hasta Lun 17 Oct</p>
                <div class="includes">
                    <span>✈️ Vuelo</span>
                    <span>🏨 Alojamiento ⭐⭐⭐⭐</span>
                    <span>🚐 Traslado</span>
                    <span>🎟️ Tours guiados</span>
                </div>
                <div class="price">$2.100.000</div>
                <div class="old-price">Antes: $2.350.000</div>
                <div class="savings">Ahorrás $250.000</div>
                <div class="taxes">Impuestos incluidos</div>
            `
        },
        {
            title: "Relax en el Caribe",
            image: "/release/paquete2.jpg",
            rating: "⭐⭐⭐⭐ de 5 estrellas",
            customers: "2900 clientes les gusta este paquete",
            description: `
                <span class="blue-badge">5 DÍAS / 4 NOCHES</span>
                <h2>Vacaciones en las playas del Caribe</h2>
                <p class="subtitle">Saliendo de Miami desde Jue 05 Nov hasta Lun 09 Nov</p>
                <div class="includes">
                    <span>✈️ Vuelo</span>
                    <span>🏨 Alojamiento ⭐⭐⭐⭐⭐</span>
                    <span>🍽️ All inclusive</span>
                    <span>🏝️ Actividades acuáticas</span>
                </div>
                <div class="price">$1.800.000</div>
                <div class="old-price">Antes: $1.950.000</div>
                <div class="savings">Ahorrás $150.000</div>
                <div class="taxes">Impuestos incluidos</div>
            `
        },
        {
            title: "Escapada a Asia",
            image: "/release/paquete3.jpg",
            rating: "⭐⭐⭐⭐⭐ de 5 estrellas",
            customers: "4100 clientes les gusta este paquete",
            description: `
                <span class="blue-badge">10 DÍAS / 9 NOCHES</span>
                <h2>Exploración en Tokyo y Seúl</h2>
                <p class="subtitle">Saliendo de Buenos Aires desde Sab 15 Nov hasta Lun 25 Nov</p>
                <div class="includes">
                    <span>✈️ Vuelo</span>
                    <span>🏨 Alojamiento ⭐⭐⭐⭐</span>
                    <span>🍱 Gastronomía local</span>
                    <span>🎎 Tours culturales</span>
                </div>
                <div class="price">$3.200.000</div>
                <div class="old-price">Antes: $3.450.000</div>
                <div class="savings">Ahorrás $250.000</div>
                <div class="taxes">Impuestos incluidos</div>
            `
        }
    ];

    // Mostrar modal con información específica del paquete
    paqueteCards.forEach((card, index) => {
        card.addEventListener('click', function() {
            const paquete = paqueteInfo[index];
            modalTitle.textContent = paquete.title;
            modalImage.src = paquete.image;
            modalRating.textContent = paquete.rating;
            modalCustomers.textContent = paquete.customers;
            modalDescription.innerHTML = paquete.description;
            modal.style.display = 'block';
        });
    });

    // Cerrar el modal
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
});
