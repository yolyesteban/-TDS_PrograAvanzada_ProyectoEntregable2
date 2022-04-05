var formulario = document.getElementById('formulario')

formulario.addEventListener('submit', event => {
    event.preventDefault()

})

var mostrarProductos = document.getElementById('mostrar-productos')
mostrarProductos.addEventListener('click', function () {
    window.location.href = 'Productos.html'
})