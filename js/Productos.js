function EditarProducto(codigoProducto) {
    window.location.href = 'EditarProducto.html'
}

function RealizarPedido(codigoProducto) {
    window.location.href = 'RealizarPedido.html'
}

let logOut = document.getElementById('logout')
logOut.addEventListener('click', function (){
    window.location.href = '../principal.html'
})