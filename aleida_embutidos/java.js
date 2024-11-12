
function showTab(tabName) {
    // Ocultar todas las pestañas
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => tab.classList.remove('active'));

    // Remover la clase 'active' de todas las pestañas
    const tabLinks = document.querySelectorAll('.tab');
    tabLinks.forEach(tab => tab.classList.remove('active'));

    // Mostrar la pestaña seleccionada
    document.getElementById(tabName).classList.add('active');

    // Resaltar la pestaña activa
    const activeTab = Array.from(tabLinks).find(tab => tab.textContent.toLowerCase() === tabName.replace('_', ' ').toLowerCase());
    activeTab.classList.add('active');
}

function comprar(producto) {
    alert('Compraste el producto: ' + producto);
}
