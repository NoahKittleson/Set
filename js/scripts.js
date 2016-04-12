var properties = [["red", "purple", "green"], ["squigly", "diamond", "pill"], [ 1, 2, 3], ["empty", "crosshatch", "full"]];
var cards = [];

function Card (propertyArray) {
  this.properties = propertyArray;
}

Card.prototype.getID = function() {
  var string = "";
  this.properties.forEach(function(property) {
    string = string.concat(property + " ");
  });
  return string;
}

function shuffle(array) {
  var oldSpot, newSpot;
  for (var i = 0; i < array.length; i++) {
    var rand = Math.floor(Math.random() * i);
    oldSpot = array[i-1];
    array[i]
  }
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

function getRandomCard() {
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
  for (var i = 0; i < 12; i++) {
    cards.push(getRandomCard());
  }
  console.log(createDeck());
  //console.log(cards[0].getID(););

  goodSet =[];
  goodSet.push(new Card(["red","squigly", 1, "emptty"]));
  goodSet.push(new Card(["green","sqruigly", 2, "efmpty"]));
  goodSet.push(new Card(["hi","squiggly", 3, "emmpty"]));

  //console.log(isSet(goodSet));
  //console.log(cards);
});
