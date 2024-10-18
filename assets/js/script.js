ScrollReveal().reveal('.animacao', {
    delay: 300,
    distance: '20px',
    origin: 'left',
    duration: 1000,
    reset: true
})

function abrirMenu() {
    document.getElementById('menuNav').style.width = '100%';
}

function fecharMenu() {
    document.getElementById('menuNav').style.width = '0';
    document.getElementsByClassName('.navegar').style.width = '0';
}


