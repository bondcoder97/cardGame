//карта
class Card {
    constructor(value,suit){
        this._value = value;
        this._suit = suit;
        this._isPriority = false;//козырь
        this._cardImportance = 0;
        this.evalImportance();
        
    }
    

    getCardDescribe(){
     return this._value+" "+ this._suit;   
    };
    
    
    get isPriority(){
        return this._isPriority;
    }
    
    set isPriority(value){
        if(value == true ){
        this._cardImportance += 10;
        }
        else
            this._cardImportance -= 10;
            this._isPriority = value;
            
    }
    
    evalImportance() {
      switch(this._value){
              case "6":
              this._cardImportance = 6;
              break;
        
              case "7":
              this._cardImportance = 7;
              break;
              
              case "8":
              this._cardImportance = 8;
              break;
              
              case "9":
              this._cardImportance = 9;
              break;
              
              case "10":
              this._cardImportance = 10;
              break;
              
              case "Валет":
              this._cardImportance = 11;
              break;
              
              case "Дама":
              this._cardImportance = 12;
              break;
              
              case "Король":
              this._cardImportance = 13;
              break;
              
              case "Туз":
              this._cardImportance = 14;
              break;
              
              
             
              
      }   
        
        
    }
    
    
    
    get cardImportance(){
        return this._cardImportance;
    }
    
    
    
}//класс для карты


const values = ['6','7','8','9','10','Валет','Дама','Король','Туз'];
const suits = ['черва','трефа','пика','бубна'];



//колода карт
class Deck{
    constructor(){
       this.collectionCard = [];
       
    }
    
    createDeck() {
        for(let i = 0; i< suits.length; i++)
        
            for(let j=0; j< values.length; j++)
            this.collectionCard.push([values[j]+' '+ suits[i], new Card(values[j],suits[i])]);
            
        
    }
    
    takeCard() {
        return this.collectionCard.pop();
        
    }
    
    //перемешать колоду (берем случайный элемент колоды и кладем в конец)
    shuffleDeck() {
        for(let i = 0; i<36;i++){
        
            let randomIndex = Math.floor((Math.random()*36));
            let randomCard = this.collectionCard[randomIndex];
            console.log(randomCard);
            this.collectionCard.splice(randomIndex,1);
           
            this.collectionCard.push(randomCard);
                
            
        }
        
        
    }
    
    resetDeck() {
        this.collectionCard.length = 0;
    }
    
    get cardDeckLength() {
        return this.collectionCard.length;
    }
    
    
    
}

//игрок
class Player{

    constructor() {
       this.playerCards = [];
       this.numberOfCard = 6;
    }

    cardsForPlayer(deck){
          
          if(this.playerCards.length<6)
          console.log("Раздать карты");



    }
}

let cardDeck = new Deck();
cardDeck.createDeck();




let gameDeck = document.querySelector('#deckCards');





