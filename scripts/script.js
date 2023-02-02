let winDom = document.querySelector('.win-counter')
let loseDom = document.querySelector('.lose-counter')
let  guessesLeftDom = document.querySelector('.guesses-counter')
let guessesDom = document.querySelector('.guesses')
getNumber=()=>{
    let number = Math.floor(Math.random() * 10);
    return number
}
getDom=()=>{
    winDom.innerHTML = game.win;
    loseDom.innerHTML = game.lose;
    guessesLeftDom.innerHTML = game.guessesLeft;
    guessesDom.innerHTML = game.guesses
}
const game = {
    number : getNumber(),
    win:0,
    lose:0,
    guessesLeft:9,
    guesses:[],
    checkguess:function(number){
        if(Number(number) === this.number){
            this.win +=1
            this.guesses = []
            this.guessesLeft = 9
            this.number = getNumber()
        }
        else{
            if(this.guessesLeft===1){
                this.lose +=1;
                this.guesses = []
                this.guessesLeft = 9
                this.number = getNumber()
            }
            else{
                this.guessesLeft -=1;
                this.guesses.push(number)
            }
        }
    }
}
window.onkeyup = function(e){
    game.checkguess(e.key)
    getDom()
}
getDom()