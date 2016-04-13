var properties = [["red", "purple", "green"], ["squiggle", "diamond", "pill"], [1, 2, 3], ["empty", "crosshatch", "full"]];
var cards = [];

function Card (propertyArray) {
  this.properties = propertyArray;
}

function Deck () {
  this.cards = createDeck();
}

function createDeck() {
  var deck = [];
  properties[0].forEach(function(color) {
    properties[1].forEach(function(shape) {
      properties[2].forEach(function(number) {
        properties[3].forEach(function(fill) {
          deck.push(new Card([color, shape, number, fill]));
        })
      })
    })
  })
  return deck;
}

Deck.prototype.printDeck = function() {
  for (var i = 0; i < this.cards.length; i++) {
    console.log(this.cards[i].getID());
  }
}

Deck.prototype.getRandomCard = function() {
  var rand = Math.floor(Math.random() * 1000);
  rand = rand % this.cards.length;
  var randomCard = this.cards.splice(rand,1);
  return randomCard[0];
}

Card.prototype.getID = function() {
  var string = "";
  this.properties.forEach(function(property) {
    string = string.concat(property + " ");
  });
  return string;
}

function isSet(cardArray) {
  //return true or false if it is in a set
  var bool = true;
  for (var i = 0; i < properties.length; i++) {
    if ((cardArray[0].properties[i] === cardArray[1].properties[i] && cardArray[1].properties[i] === cardArray[2].properties[i] ) || cardArray[0].properties[i] !== cardArray[1].properties[i] && cardArray[1].properties[i] !== cardArray[2].properties[i] && cardArray[0].properties[i] !== cardArray[2].properties[i]) {
    } else {
      bool = false;
    }
  }
  return bool;
}

function generateRandomCard() {
  var cardProperties = [];
  for (var i = 0; i < properties.length; i++) {
    var rand = Math.floor(Math.random() * 100);
    rand = rand % 3;
    cardProperties.push(properties[i][rand]);
  }
  var newCard = new Card (cardProperties);
  return newCard;
}

$(document).ready(function() {
  var newDeck = new Deck();
  var cardIDArray = ["card1", "card2", "card3", "card4", "card5", "card6", "card7", "card8", "card9", "card10", "card11", "card12"];
  var newCard
  for (var i = 0; i < cardIDArray.length; i++) {
    newCard = newDeck.getRandomCard();
    console.log(newCard.getID());
    $("." + cardIDArray[i]).attr("value", newCard.getID());
    str = newCard.getID();
    str = str.substring(0, str.length-1);
    $("." + cardIDArray[i]).attr("src", "img/" + str + ".png");
    //cards.push(newDeck.getRandomCard());
  }


  $("form").submit(function(event) {
    event.preventDefault();

    //parse all input (IDs --> Card objects)
    var chosenIDs = [];
    var parsedCards = [];
    $("input:checkbox[name=name]:checked").each(function(){
      var words = $(this).val().split(" ");
      parsedCards.push(new Card([words[0],words[1],words[2],words[3]]));
      chosenIDs.push($(this).attr("class"));
    });
    console.log(chosenIDs);
    console.log(parsedCards);

    //change cards if it is a set
    result = isSet(parsedCards);
    alert(result);
    if (result) {
      for (var i = 0; i < chosenIDs.length; i++) {
        newCard = newDeck.getRandomCard();
        console.log(newCard.getID());
        $("." + chosenIDs[i]).attr("value", newCard.getID());
        $("." + chosenIDs[i]).text(newCard.getID());
      }
    }
  });
});
