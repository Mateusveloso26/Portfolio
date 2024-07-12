ScrollReveal().reveal('.animacao', {
    delay: 300,
    distance: '20px',
    origin: 'bottom',
    duration: 1000,
    easing: 'cubic-bezier(0.5, 0, 0, 1)',
    reset: true
})

function abrirMenu() {
    document.getElementById('menuNav').style.width = '100%';
}

function fecharMenu() {
    document.getElementById('menuNav').style.width = '0';
}
