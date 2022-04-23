const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

function flipcard() {
    if(lockBoard)return
    if(this === firstCard) return;

    this.classList.add('flip');
    
    if(!hasFlippedCard) {   
        hasFlippedCard = true;
        firstCard = this;

        return;
    } 
    
    secondCard = this;
       
    checkForMatch();
};

function checkForMatch() {    
    let isMatch = firstCard.dataset.framework === secondCard.dataset.framework
    isMatch ? disableCards() : unFlipCards();
}

function disableCards(){

    firstCard.removeEventListener('click', flipcard);
    secondCard.removeEventListener('click', flipcard);

    resetBord();
}

function unFlipCards() {
    lockBoard = true;

    setTimeout(() =>{                
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip')
        resetBord();
    }, 1000);
}

function resetBord(){
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

 (function shuffle() {
    cards.forEach(card => {
        let randomPos = Math.floor(Math.random() * 12)
        card.style.order = randomPos;
    });
   
})();



cards.forEach(card =>card.addEventListener('click', flipcard));