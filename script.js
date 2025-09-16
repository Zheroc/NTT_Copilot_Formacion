// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // Obtener referencias a los elementos del DOM
    const clickButton = document.getElementById('click-btn');
    const message = document.getElementById('message');
    const mainTitle = document.getElementById('main-title');
    const clickCounter = document.getElementById('click-counter');
    const visitTime = document.getElementById('visit-time');
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');
    const contactForm = document.getElementById('contact-form');
    const formResponse = document.getElementById('form-response');
    
    // Contador de clics
    let clickCount = 0;
    
    // Timer para tiempo de visita
    let startTime = Date.now();
    let timeInterval;
    
    // Array de colores para cambiar el título
    const colors = ['#667eea', '#28a745', '#dc3545', '#ffc107', '#17a2b8', '#6f42c1'];
    
    // Función para manejar el clic del botón
    function handleButtonClick() {
        clickCount++;
        
        // Actualizar contador visual
        clickCounter.textContent = clickCount;
        
        // Mostrar el mensaje
        message.classList.remove('hidden');
        
        // Cambiar el texto del mensaje según el número de clics
        if (clickCount === 1) {
            message.textContent = '¡Has hecho clic en el botón! 🎉';
        } else if (clickCount <= 5) {
            message.textContent = `¡Has hecho clic ${clickCount} veces! 🚀`;
        } else if (clickCount <= 10) {
            message.textContent = `¡${clickCount} clics! ¡Estás en racha! 🔥`;
        } else {
            message.textContent = `¡Increíble! ${clickCount} clics. ¡Eres imparable! 💪`;
        }
        
        // Cambiar el color del título aleatoriamente
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        mainTitle.style.color = randomColor;
        
        // Animar el botón
        clickButton.style.transform = 'scale(0.95)';
        setTimeout(() => {
            clickButton.style.transform = 'scale(1)';
        }, 150);
        
        // Cambiar el texto del botón después de varios clics
        if (clickCount >= 5) {
            clickButton.textContent = '¡Sigue clickeando!';
        }
        if (clickCount >= 10) {
            clickButton.textContent = '¡Eres increíble!';
        }
        
        // Animar la tarjeta de estadísticas
        clickCounter.parentElement.style.transform = 'scale(1.1)';
        setTimeout(() => {
            clickCounter.parentElement.style.transform = 'scale(1)';
        }, 200);
    }
    
    // Función para actualizar el tiempo de visita
    function updateVisitTime() {
        const elapsed = Math.floor((Date.now() - startTime) / 1000);
        const minutes = Math.floor(elapsed / 60);
        const seconds = elapsed % 60;
        
        if (minutes > 0) {
            visitTime.textContent = `${minutes}m ${seconds}s`;
        } else {
            visitTime.textContent = `${seconds}s`;
        }
    }
    
    // Función para manejar la navegación móvil
    function handleMobileNav() {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
        
        // Cerrar menú móvil al hacer clic en un enlace
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            });
        });
    }
    
    // Función para manejar la navegación entre secciones
    function handleSectionNavigation() {
        navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Remover clase active de todos los enlaces
                navLinks.forEach(navLink => navLink.classList.remove('active'));
                
                // Agregar clase active al enlace actual
                this.classList.add('active');
                
                // Obtener la sección objetivo
                const targetId = this.getAttribute('href').substring(1);
                const targetSection = document.getElementById(targetId);
                
                // Ocultar todas las secciones
                sections.forEach(section => section.classList.remove('active'));
                
                // Mostrar la sección objetivo
                if (targetSection) {
                    targetSection.classList.add('active');
                }
            });
        });
    }
    
    // Función para manejar el formulario de contacto
    function handleContactForm() {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Obtener datos del formulario
            const formData = new FormData(this);
            const name = formData.get('name');
            const email = formData.get('email');
            const messageText = formData.get('message');
            
            // Simular envío de formulario
            formResponse.classList.remove('hidden', 'success', 'error');
            formResponse.textContent = 'Enviando mensaje...';
            formResponse.classList.add('success');
            
            // Simular tiempo de procesamiento
            setTimeout(() => {
                formResponse.textContent = `¡Gracias ${name}! Tu mensaje ha sido enviado correctamente. Nos pondremos en contacto contigo pronto.`;
                this.reset();
                
                // Ocultar mensaje después de 5 segundos
                setTimeout(() => {
                    formResponse.classList.add('hidden');
                }, 5000);
            }, 1000);
        });
    }
    
    // Función para cambiar el saludo según la hora del día
    function updateGreeting() {
        const now = new Date();
        const hour = now.getHours();
        const subtitle = document.querySelector('.subtitle');
        
        let greeting;
        if (hour < 12) {
            greeting = 'Buenos días - Bienvenido a NTT Copilot Formación';
        } else if (hour < 18) {
            greeting = 'Buenas tardes - Bienvenido a NTT Copilot Formación';
        } else {
            greeting = 'Buenas noches - Bienvenido a NTT Copilot Formación';
        }
        
        subtitle.textContent = greeting;
    }
    
    // Función para agregar efecto de hover al título
    function addTitleHoverEffect() {
        mainTitle.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        mainTitle.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    }
    
    // Función para animar las tarjetas de características al hacer scroll
    function animateOnScroll() {
        const featureCards = document.querySelectorAll('.feature-card');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        });
        
        featureCards.forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(card);
        });
    }
    
    // Función para mostrar información adicional en la consola
    function logWelcomeMessage() {
        console.log('🎉 ¡Bienvenido a la aplicación Hello World Mejorada!');
        console.log('📝 Esta aplicación fue creada con HTML, CSS y JavaScript');
        console.log('🚀 Desarrollado para NTT Copilot Formación');
        console.log('💡 Nuevas características:');
        console.log('   - Navegación multi-sección');
        console.log('   - Formulario de contacto');
        console.log('   - Estadísticas en tiempo real');
        console.log('   - Diseño completamente responsivo');
        console.log('🎮 ¡Prueba el código Konami: ↑↑↓↓←→←→BA!');
    }
    
    // Función para agregar efectos de partículas (Easter egg avanzado)
    function addParticleEffect() {
        const canvas = document.createElement('canvas');
        canvas.style.position = 'fixed';
        canvas.style.top = '0';
        canvas.style.left = '0';
        canvas.style.width = '100%';
        canvas.style.height = '100%';
        canvas.style.pointerEvents = 'none';
        canvas.style.zIndex = '999';
        document.body.appendChild(canvas);
        
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        
        const particles = [];
        
        for (let i = 0; i < 50; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * 2,
                vy: (Math.random() - 0.5) * 2,
                size: Math.random() * 3 + 1,
                color: colors[Math.floor(Math.random() * colors.length)]
            });
        }
        
        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            particles.forEach(particle => {
                particle.x += particle.vx;
                particle.y += particle.vy;
                
                if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
                if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;
                
                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
                ctx.fillStyle = particle.color;
                ctx.fill();
            });
            
            requestAnimationFrame(animate);
        }
        
        animate();
        
        // Remover después de 10 segundos
        setTimeout(() => {
            document.body.removeChild(canvas);
        }, 10000);
    }
    
    // Inicializar todas las funcionalidades
    function init() {
        // Agregar event listener al botón
        clickButton.addEventListener('click', handleButtonClick);
        
        // Configurar navegación
        handleMobileNav();
        handleSectionNavigation();
        
        // Configurar formulario
        handleContactForm();
        
        // Actualizar el saludo según la hora
        updateGreeting();
        
        // Agregar efecto hover al título
        addTitleHoverEffect();
        
        // Iniciar timer de tiempo de visita
        timeInterval = setInterval(updateVisitTime, 1000);
        
        // Animar elementos al hacer scroll
        animateOnScroll();
        
        // Mostrar mensaje de bienvenida en la consola
        logWelcomeMessage();
        
        // Mensaje inicial en la consola
        console.log('✅ Aplicación inicializada correctamente');
    }
    
    // Inicializar la aplicación
    init();
    
    // Agregar un Easter Egg: Konami Code con efectos mejorados
    const konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]; // ↑↑↓↓←→←→BA
    let konamiIndex = 0;
    
    document.addEventListener('keydown', function(e) {
        if (e.keyCode === konamiCode[konamiIndex]) {
            konamiIndex++;
            if (konamiIndex === konamiCode.length) {
                // Easter Egg activado
                document.body.style.animation = 'rainbow 2s infinite';
                message.textContent = '🌈 ¡Konami Code activado! ¡Eres un verdadero desarrollador! 🎮';
                message.classList.remove('hidden');
                
                // Agregar efectos de partículas
                addParticleEffect();
                
                konamiIndex = 0;
                
                // Detener efectos después de 10 segundos
                setTimeout(() => {
                    document.body.style.animation = '';
                }, 10000);
            }
        } else {
            konamiIndex = 0;
        }
    });
    
    // CSS para el efecto rainbow
    const style = document.createElement('style');
    style.textContent = `
        @keyframes rainbow {
            0% { filter: hue-rotate(0deg); }
            100% { filter: hue-rotate(360deg); }
        }
    `;
    document.head.appendChild(style);
    
    // Limpiar interval al salir de la página
    window.addEventListener('beforeunload', function() {
        if (timeInterval) {
            clearInterval(timeInterval);
        }
    });
});