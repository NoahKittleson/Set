var properties = [["red", "purple", "green"], ["squigly", "diamond", "pill"], [ 1, 2, 3], ["empty", "crosshatch", "full"]];
var cards = [];

function Card (propertyArray) {
  this.properties = propertyArray;
}

function isSet(cardArray) {
  //return true or false if it is in a set
  for (var i = 0; i < properties.length; i++) {
    if ((cardArray[0].properties[i] === cardArray[1].properties[i] && cardArray[1].properties[i] === cardArray[2].properties[i] ) || cardArray[0].properties[i] !== cardArray[1].properties[i] && cardArray[1].properties[i] !== cardArray[2].properties[i] && cardArray[0].properties[i] !== cardArray[2].properties[i]) {
    } else {
      return false;
    }
  }
  return true;


  // for (var i = 0; i < properties.length; i++) {
  //   if ((cardArray[0].properties[i] === cardArray[1].properties[i] && cardArray[1].properties[i] === cardArray[2].properties[i] ) || cardArray[0].properties[i] !== cardArray[1].properties[i] && cardArray[1].properties[i] !== cardArray[2].properties[i] && cardArray[0].properties[i] !== cardArray[2].properties[i]) {
  //   } else {
  //     return false;
  //   }
  // }
  // return true;

  //
  //
  // if ((cardArray[0].properties[i] === cardArray[1].color && cardArray[1].color === cardArray[2].color ) || cardArray[0].color !== cardArray[1].color && cardArray[1].color !== cardArray[2].color && cardArray[0].color !== cardArray[2].color) {
  //   return true;
  // } else {
  //   return false;
  // }
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
  var bool = isSet(cards);
  console.log(bool);

  goodSet =[];
  goodSet.push(new Card(["red","squigly", 1, "empty"]));
  goodSet.push(new Card(["red","squigly", 1, "empty"]));
  goodSet.push(new Card(["red","squigly", 1, "empty"]));

  isSet(goodSet);
  console.log(cards);
});
