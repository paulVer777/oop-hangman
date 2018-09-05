

const game = new HangmanGame('computer', 5)

window.addEventListener('keypress', (e) => {

    const key = String.fromCharCode(e.charCode)

    game.shoot(key)
    game.getPuzzleBack()
    game.calculate()
})


game.getPuzzleBack()

const span=document.createElement('span')
    span.textContent=this.left
    document.querySelector('#counter').appendChild(span)