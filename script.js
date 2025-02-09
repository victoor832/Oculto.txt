document.addEventListener('DOMContentLoaded', () => {
    // Simular un error en la consola
    setTimeout(() => {
        console.error('Error crítico: Fallo en la integridad del cortafuegos cuántico');
    }, 5000);

    // Mensaje sospechoso en la consola
    console.log('Alerta: Detección de patrón de intrusión avanzada. Iniciando contramedidas...');

    // Simular un glitch en el título
    const title = document.querySelector('.logo');
    setInterval(() => {
        title.classList.add('glitch');
        setTimeout(() => title.classList.remove('glitch'), 200);
    }, 3000);

    // Simular carga de datos confidenciales
    loadHiddenData();
});

async function loadHiddenData() {
    try {
        const response = await fetch('oculto.txt');
        const text = await response.text();
        localStorage.setItem('datos_confidenciales_purple_squad', text);
        console.log('Datos confidenciales de Purple Squad cargados. Accede al localStorage para más información.');
    } catch (error) {
        console.error('Error al cargar datos confidenciales:', error);
    }
}

// Código que se ejecuta inmediatamente
(function() {
    console.log('Iniciando secuencia de auto-destrucción del sistema...');
    setTimeout(() => {
        console.log('Secuencia abortada. Acceso root concedido a usuario desconocido.');
    }, 2000);
})();

// Simular actividad de usuario
document.querySelector('.search-bar input').addEventListener('input', (e) => {
    console.log(`Búsqueda detectada: ${e.target.value}`);
    if (e.target.value.toLowerCase().includes('hack')) {
        console.warn('Palabra clave sospechosa detectada en la búsqueda. Registrando actividad...');
    }
});

document.querySelector('.user-info img').addEventListener('click', () => {
    console.log('Intento de acceso al perfil de administrador detectado.');
    alert('Acceso denegado. Este incidente será reportado.');
});
