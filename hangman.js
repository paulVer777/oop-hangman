const HangmanGame = function (word, attempts) {

    this.word = word.toLowerCase().split('')
    this.win = []
    this.left = attempts
    this.givenShoots = []
    this.status='playing'
}

HangmanGame.prototype.shoot = function (shoot) {

    if (!this.word.includes(shoot) && !this.givenShoots.includes(shoot)) this.left--

    else if (this.word.includes(shoot) && !this.givenShoots.includes(shoot)) {

        this.word.forEach((value, index) => {

            value === shoot ? this.win[index] = value : ''
        })
    }

    !this.givenShoots.includes(shoot) ? this.givenShoots.push(shoot) : ''

    console.log(` Given shoots: ${this.givenShoots}`)
    console.log(`Shoots left:${this.left}`)

    document.querySelector('#counter').innerHTML=''

    const span=document.createElement('span')
    span.textContent=this.left
    document.querySelector('#counter').appendChild(span)

}

HangmanGame.prototype.getPuzzleBack = function () {

    const result = []

    this.word.forEach((value, index) => {

        //   value === this.win[index] ? result.push(value) : result.push('*')

        if (value === this.win[index]) result.push(value)
        else if (value === ' ') result.push(' ')
        else result.push('*')

    });

    document.querySelector('#boxForPassword').innerHTML = ''

    result.forEach((value, index) => {

        const span = document.createElement('span')
        span.textContent = value
        document.querySelector('#boxForPassword').appendChild(span)

    })
}

HangmanGame.prototype.calculate=function(){

   this.left > 0 ? this.status='playing' : ''
   this.left === 0 ? this.status='failed' : ''
   this.win.length === this.word.length ? this.status='finished' : ''

   console.log(this.status)
}
