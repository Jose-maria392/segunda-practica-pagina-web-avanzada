// --- Obtener Elementos del DOM ---
const body = document.getElementById('page-body');
const themeToggle = document.getElementById('theme-toggle');
const form = document.getElementById('data-form');

// --- Funcionalidad del Tema ---

// Estado inicial: comprueba la preferencia guardada o asume claro
let isDarkTheme = localStorage.getItem('themePreference') === 'dark';

// Aplica el tema guardado al cargar la página
if (isDarkTheme) {
    body.classList.add('dark-theme');
    themeToggle.textContent = 'Cambiar a Claro ☀️';
} else {
    // Asegura que el texto esté correcto si no hay preferencia o es 'light'
    themeToggle.textContent = 'Cambiar a Oscuro 🌙'; 
}


// Función para cambiar el tema
function toggleTheme() {
    isDarkTheme = !isDarkTheme; // Invierte el estado
    
    if (isDarkTheme) {
        body.classList.add('dark-theme');
        themeToggle.textContent = 'Cambiar a Claro ☀️';
    } else {
        body.classList.remove('dark-theme');
        themeToggle.textContent = 'Cambiar a Oscuro 🌙';
    }
    
    // Guardar la preferencia en el navegador
    localStorage.setItem('themePreference', isDarkTheme ? 'dark' : 'light');
}

// Event Listener para el botón de cambio de tema
themeToggle.addEventListener('click', toggleTheme);


// --- Funcionalidad del Formulario ---

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío tradicional y la recarga de la página

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    // Mostrar los datos en la consola
    console.log("Datos enviados:");
    console.log("Nombre:", name);
    console.log("Correo:", email);

    // Mensaje de confirmación al usuario
    alert(`¡Gracias, ${name}! Tu información (Correo: ${email}) ha sido 'enviada'.`);

    // Limpiar el formulario
    form.reset();
});