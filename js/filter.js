//!! FUNCIONALIDAD DEL SELECT PARA FILTAR LOS PRODUCTOS

console.log('filter.js conectado')


// Ordenar por nombre
function ordenarName() {
    // Seleccionar el contenedor de la lista
let ul = document.getElementById('listContainer');

// Seleccionar todos los <li> dentro del <ul>
let liElements = Array.from(ul.getElementsByTagName('li'));

// Ordenar los <li> basados en el texto del <span> con clase .nombreSpan
liElements.sort((a, b) => {
    let nameA = a.querySelector('.nombreProducto').innerText.toLowerCase();
    let nameB = b.querySelector('.nombreProducto').innerText.toLowerCase();
    
    // Comparar los nombres alfabéticamente
    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
});

// Limpiar la lista <ul>
ul.innerHTML = '';

// Reinsertar los <li> ordenados
liElements.forEach(li => ul.appendChild(li));

}


//Ordenar por precio
function ordenarPrecio() {
        // Seleccionar el contenedor de la lista
let ul = document.getElementById('listContainer');

// Seleccionar todos los <li> dentro del <ul>
let liElements = Array.from(ul.getElementsByTagName('li'));

// Ordenar los <li> basados en el texto del <span> con clase .nombreSpan
liElements.sort((a, b) => {
    let nameA = a.querySelector('.precioProducto').innerText.toLowerCase();
    let nameB = b.querySelector('.precioProducto').innerText.toLowerCase();
    
    // Comparar los nombres alfabéticamente
    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
});

// Limpiar la lista <ul>
ul.innerHTML = '';

// Reinsertar los <li> ordenados
liElements.forEach(li => ul.appendChild(li));
}


//Ordenar por fecha (no ordenar)
function sinOrdenar() {
    document.getElementById('listContainer').innerHTML = localStorage.getItem('list')   
}
