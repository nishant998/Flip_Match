document.addEventListener('DOMContentLoaded' , ()=>{

const Card_Array = [
    {
        name : 'bird' , 
        img : 'src_images/bird.png'
    } ,
    {
        name : 'bird' , 
        img : 'src_images/bird.png'
    } ,
    
    {
        name : 'dog' , 
        img : 'src_images/dog.jpg'
    } ,
    {
        name : 'dog' , 
        img : 'src_images/dog.jpg'
    } ,
    {
        name : 'elephant' , 
        img : 'src_images/elephant.png'
    } ,
    {
        name : 'elephant' , 
        img : 'src_images/elephant.png'
    } ,
    {
        name : 'lamb' , 
        img : 'src_images/lamb.png'
    } ,
    {
        name : 'lamb' , 
        img : 'src_images/lamb.png'
    } ,
    {
        name : 'penguin' , 
        img : 'src_images/penguin.png'
    } ,
    {
        name : 'penguin' , 
        img : 'src_images/penguin.png'
    } ,
    {
        name : 'pig' , 
        img : 'src_images/pig.png'
    } ,
    {
        name : 'pig' , 
        img : 'src_images/pig.png'
    } 
   
]
Card_Array.sort(()=> 0.5 - Math.random())

const grid = document.querySelector('.grid')
var cardsChosen = [] ;
var cardsChosenId = [] ;
var cards_won = [] ;
var count = 0 ;
const resultDisplay = document.querySelector('#result') ;
// creation of board 

function createBoard(){
    for(let i =0 ; i< Card_Array.length ; i++)
    {
        var card = document.createElement('img') ;
        card.setAttribute('src' , 'src_images/blank.jpg') ;
        card.setAttribute('data-id' , i) ;
        card.addEventListener('click' , flip_card) ;
        grid.appendChild(card) ;
    }
}

// check for match 
function checkForMatch()
    {
        var cards = document.querySelectorAll('img') ;
        const optionOneId = cardsChosenId[0] ;
        const optionTwoId = cardsChosenId[1] ;
        if(cardsChosen[0] === cardsChosen[1])
        {
            alert('You found a match')
            cards[optionOneId].setAttribute('src' , 'src_images/white.jpg')
            cards[optionTwoId].setAttribute('src' , 'src_images/white.jpg')
            cards_won.push(cardsChosen)
        }else{
            if(count==3){
                alert("game over")
                location.reload();
            }
            cards[optionOneId].setAttribute('src' , 'src_images/blank.jpg') ;
            cards[optionTwoId].setAttribute('src' , 'src_images/blank.jpg') ;
            count +=1 ;
            alert('sorry , try again')
        }
        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cards_won.length
        if(cards_won.length === Card_Array.length/2){
            resultDisplay.textContent = 'Congratulations you found all'
        }
    }




// flip your card

function flip_card()
    {
        var cardId = this.getAttribute('data-id') ;
        cardsChosen.push(Card_Array[cardId].name) ;
        cardsChosenId.push(cardId) ;
        this.setAttribute('src' , Card_Array[cardId].img) ;
        if(cardsChosen.length === 2){
            setTimeout(checkForMatch , 500)
        }
    }

createBoard() ;


})