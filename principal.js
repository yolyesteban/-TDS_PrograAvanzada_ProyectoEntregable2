var formulario = document.getElementById('formulario')

formulario.addEventListener('submit', event => {
    event.preventDefault()

    window.location.href = 'pages/Productos.html'
})