// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // Obtener referencias a los elementos del DOM
    const clickButton = document.getElementById('click-btn');
    const message = document.getElementById('message');
    const mainTitle = document.getElementById('main-title');
    
    // Contador de clics
    let clickCount = 0;
    
    // Array de colores para cambiar el título
    const colors = ['#667eea', '#28a745', '#dc3545', '#ffc107', '#17a2b8', '#6f42c1'];
    
    // Función para manejar el clic del botón
    function handleButtonClick() {
        clickCount++;
        
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
    
    // Función para mostrar información adicional en la consola
    function logWelcomeMessage() {
        console.log('🎉 ¡Bienvenido a la aplicación Hello World!');
        console.log('📝 Esta aplicación fue creada con HTML, CSS y JavaScript');
        console.log('🚀 Desarrollado para NTT Copilot Formación');
        console.log('💡 ¡Abre las herramientas de desarrollador para ver este mensaje!');
    }
    
    // Inicializar todas las funcionalidades
    function init() {
        // Agregar event listener al botón
        clickButton.addEventListener('click', handleButtonClick);
        
        // Actualizar el saludo según la hora
        updateGreeting();
        
        // Agregar efecto hover al título
        addTitleHoverEffect();
        
        // Mostrar mensaje de bienvenida en la consola
        logWelcomeMessage();
        
        // Mensaje inicial en la consola
        console.log('✅ Aplicación inicializada correctamente');
    }
    
    // Inicializar la aplicación
    init();
    
    // Agregar un Easter Egg: Konami Code
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
                konamiIndex = 0;
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
});