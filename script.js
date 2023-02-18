/* Código do painel*/
const paineis = document.querySelectorAll('.painel')

paineis.forEach(panel => {
    panel.addEventListener('click', () => {
        mover_imagens()
        panel.classList.add('active')
    })
})

function mover_imagens() {
    paineis.forEach(panel => {
        panel.classList.remove('active')
    })
}