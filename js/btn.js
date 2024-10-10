//!! FUNCIONALIDAD DE TODOS LOS BOTONES DE LA WEB

console.log('btn.js conectado');

//Eliminar todos los productos
function deleteList() {
    console.log('deleteList');
    
    if (confirm('¿Estás seguro de que quieres eliminar todos los productos de la lista?')) {
        document.getElementById('listContainer').innerHTML = '';
        document.getElementById('listRight').innerHTML = ''
    }

    saveList();

    document.getElementById('alertProduct').innerHTML = 'Lista eliminada'
    alert()
}

//Mostrar formulario
function showForm() {
    document.getElementById('overlay').classList.add('show')
    document.getElementById('titleForm').textContent = 'Añadir producto'
    document.getElementById('subtitleForm').textContent = 'Introduce los datos del producto y añadelo a tu lista'
    document.getElementById('btnAñadir').textContent = 'Añadir'
}

//Esconder formulario
function hiddenForm() {
    document.getElementById('overlay').classList.remove('show')
    document.getElementById('nameProduct').value = ''
    document.getElementById('priceProduct').value = ''
    document.getElementById('shopProduct').value = ''
    document.getElementById('imgProduct').value = ''
}

function resetForm() {
    document.getElementById('nameProduct').value = ''
    document.getElementById('priceProduct').value = ''
    document.getElementById('shopProduct').value = ''
    document.getElementById('imgProduct').value = ''
}

//Añadir producto despues de rellenar formulario
function addProduct() {
    if ((document.getElementById('nameProduct').value !== '') && (document.getElementById('priceProduct').value !== '')) {
        document.getElementById('overlay').classList.remove('show');

        // Crear un nuevo elemento li
        let li = document.createElement('li');
        li.classList.add('li')
        document.getElementById('listContainer').appendChild(li);
    
        // Crear y agregar imagen como div
        let img = document.createElement('div');
        li.appendChild(img);
    
        // Crear y agregar nombre del producto
        let nombre = document.createElement('span');
        nombre.classList.add('nombreProducto');
        nombre.innerHTML = document.getElementById('nameProduct').value;
        li.appendChild(nombre);
    
        // Crear y agregar precio del producto
        let precio = document.createElement('span');
        precio.classList.add('precioProducto--1');
        let precioInner = '<span class="precioProducto">'+document.getElementById('priceProduct').value+'</span>€'
        precio.innerHTML = precioInner;
        li.appendChild(precio);

        //Crear y agregar tienda del producto
        let tienda = document.createElement('span')
        tienda.classList.add('tiendaProducto');
        tienda.innerHTML = document.getElementById('shopProduct').value
        li.appendChild(tienda)

        // Crear y agregar span para editar y eliminar
        let btnsContainer = document.createElement('div')
        btnsContainer.classList.add('span_container')
        btnsContainer.innerHTML = '<button onclick=editProducto(this) class="editSpan"></button><button onclick=deleteProducto(this) class="deleteSpan"></button>'
        li.appendChild(btnsContainer)        

        // Crear y agregar los li en el #right
        const ulRight = document.getElementById('ulRight')
        let liRight = document.createElement('li')
        liRight.classList.add('liRight')
        liRight.innerHTML = document.getElementById('priceProduct').value
        ulRight.appendChild(liRight)
    
        document.getElementById('nameProduct').value = ''
        document.getElementById('priceProduct').value = ''
        document.getElementById('shopProduct').value = ''
        document.getElementById('imgProduct').value = ''

        //alertProduct
        if (document.getElementById('btnAñadir').innerText == 'Añadir'){
            document.getElementById('alertProduct').innerHTML = 'Producto añadido'
        } else {
            document.getElementById('alertProduct').innerHTML = 'Producto editado' 
        }
        alert()

        saveList()
    } else {
        if (document.getElementById('nameProduct').value !== '') {
            document.getElementById('nameProduct--span').style.color = '#ff0000'
        }
    }
} 

//Editar un producto
function editProducto(e) {
    showForm()
    document.getElementById('titleForm').textContent = 'Editar producto'
    document.getElementById('subtitleForm').textContent = 'Edita los datos del producto y actializa tu lista'
    document.getElementById('btnAñadir').innerText = 'Editar'
    let spanContainer1 = e.parentElement
    let li = spanContainer1.parentElement
    document.getElementById('nameProduct').value = li.querySelector('.nombreProducto').innerHTML
    document.getElementById('priceProduct').value = li.querySelector('.precioProducto').innerHTML
    document.getElementById('shopProduct').value = li.querySelector('.tiendaProducto').innerHTML
    document.getElementById('btnAñadir').addEventListener('click', function(){
        li.remove()
    })
    saveList()
}

//Eliminar un producto
function deleteProducto(button) {
    let span = button.parentElement
    span.parentElement.remove()
    document.getElementById('alertProduct').innerHTML = 'Producto eliminado'
    alert()

    saveList()
}

//Guardar lista
function saveList() {
    localStorage.setItem('list', document.getElementById('listContainer').innerHTML);
}

//Mostrar lista al recargar
function showList() {
    document.getElementById('listContainer').innerHTML = localStorage.getItem('list')
}

showList()

//Function para await
function esperar(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

//Mostrar alertas al usuario de los eventos
async function alert() {
    let alert = document.getElementById('alertProduct')
    alert.classList.add('show')
    await esperar(4000)
    alert.classList.remove('show')
}
