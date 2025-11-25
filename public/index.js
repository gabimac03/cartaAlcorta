    // Navegación
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navIcon = navToggle.querySelector('i');
    
    navToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      navToggle.classList.toggle('active');
      
      if (navMenu.classList.contains('active')) {
        navIcon.className = 'fas fa-times';
      } else {
        navIcon.className = 'fas fa-bars';
      }
    });
    
    // Cerrar menú al hacer click en un enlace
    const navLinks = navMenu.querySelectorAll('a');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
        navIcon.className = 'fas fa-bars';
      });
    });
    
    // Cerrar menú al hacer click fuera
    document.addEventListener('click', (e) => {
      if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
        navIcon.className = 'fas fa-bars';
      }
    });

    // Selector interactivo de opciones
    document.addEventListener('DOMContentLoaded', function() {
      // Seleccionar todos los botones de opciones
      const optionButtons = document.querySelectorAll('.option-button');
      
      optionButtons.forEach(button => {
        button.addEventListener('click', function() {
          const product = this.getAttribute('data-product');
          const price = this.getAttribute('data-price');
          const option = this.getAttribute('data-option');
          
          // Remover active de otros botones del mismo producto
          const productButtons = document.querySelectorAll(`[data-product="${product}"]`);
          productButtons.forEach(btn => btn.classList.remove('active'));
          
          // Agregar active al botón clickeado
          this.classList.add('active');
          
          // Actualizar el precio mostrado
          const priceElement = document.getElementById(`${product}-price`);
          if (priceElement) {
            // Formatear el precio
            const formattedPrice = `${parseInt(price).toLocaleString('es-AR')}`;
            priceElement.textContent = formattedPrice;
            
            // Animación de cambio de precio
            priceElement.style.transform = 'scale(1.1)';
            priceElement.style.color = 'var(--warning-yellow)';
            
            setTimeout(() => {
              priceElement.style.transform = 'scale(1)';
              priceElement.style.color = 'var(--primary-orange)';
            }, 200);
          }
          
          // Efecto de selección
          this.style.transform = 'scale(0.95)';
          setTimeout(() => {
            this.style.transform = 'scale(1.02)';
            setTimeout(() => {
              this.style.transform = 'scale(1)';
            }, 100);
          }, 100);
        });
        
        // Efecto hover para dispositivos táctiles
        button.addEventListener('touchstart', function() {
          this.style.transform = 'scale(0.98)';
        });
        
        button.addEventListener('touchend', function() {
          setTimeout(() => {
            this.style.transform = 'scale(1)';
          }, 100);
        });
      });
      
      // Animación de entrada para las cards
      const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      };
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.style.opacity = '1';
              entry.target.style.transform = 'translateY(0)';
            }, index * 100);
          }
        });
      }, observerOptions);
      
      // Observar todas las cards
      const cards = document.querySelectorAll('.food-card, .promo-card, .beverage-card, .extra-card');
      cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
        observer.observe(card);
      });
      
      // Scroll suave para navegación
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute('href'));
          if (target) {
            target.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
        });
      });
      
      // Efecto parallax sutil en el hero
      let ticking = false;
      
      function updateParallax() {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        const rate = scrolled * -0.5;
        
        if (hero) {
          hero.style.transform = `translate3d(0, ${rate}px, 0)`;
        }
        
        ticking = false;
      }
      
      function requestParallax() {
        if (!ticking) {
          requestAnimationFrame(updateParallax);
          ticking = true;
        }
      }
      
      // Solo aplicar parallax en dispositivos que lo soporten bien
      if (window.innerWidth > 768 && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        window.addEventListener('scroll', requestParallax);
      }
      
      // Agregar indicador de carga completada
      setTimeout(() => {
        document.body.classList.add('loaded');
      }, 500);
    });

    // Optimización de performance para móviles
    let resizeTimer;
    window.addEventListener('resize', function() {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function() {
        // Recalcular elementos si es necesario
        const cards = document.querySelectorAll('.food-card, .promo-card');
        cards.forEach(card => {
          card.style.transition = 'none';
          setTimeout(() => {
            card.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
          }, 100);
        });
      }, 250);
    });

    // Prevenir zoom en inputs en iOS
    if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
      const viewport = document.querySelector('meta[name=viewport]');
      if (viewport) {
        viewport.setAttribute('content', 
          'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0'
        );
      }
    }

    // Lazy loading para mejor performance
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.classList.add('loaded');
            imageObserver.unobserve(img);
          }
        });
      });
      
      document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
      });
    }


    // --- Botón WhatsApp flotante ---
document.addEventListener('DOMContentLoaded', function() {
  const whatsappSection = document.querySelector('.sticky-whatsapp');
  const hero = document.querySelector('.hero');

  function toggleStickyWhatsApp() {
    const heroBottom = hero.getBoundingClientRect().bottom;
    if (heroBottom <= 0) {
      whatsappSection.classList.add('fixed');
    } else {
      whatsappSection.classList.remove('fixed');
    }
  }

  window.addEventListener('scroll', toggleStickyWhatsApp);
  toggleStickyWhatsApp(); // ejecutar en carga inicial
});


  function setDynamicImage(selectId, imgId, basePath) {
    const select = document.getElementById(selectId);
    const img = document.getElementById(imgId);

    if (select && img) {
      select.addEventListener('change', function () {
        img.src = basePath + this.value;
      });
    }
  }

  const base = "imagenes/"; // ✅ en producción /public es raíz
  setDynamicImage('select-gaseosa500', 'img-gaseosa500', base);
  setDynamicImage('select-gaseosa15', 'img-gaseosa15', base);
  setDynamicImage('select-agua500', 'img-agua500', base);
  setDynamicImage('select-lata475', 'img-lata475', base);
  setDynamicImage('select-laton750', 'img-laton750', base);


  // cerrar modal

  function closeModal() {
  document.getElementById('qrModal').style.display = 'none';
}

// Mostrar modal al cargar la página
window.addEventListener('load', () => {
  document.getElementById('qrModal').style.display = 'flex';
});