var properties = [["red", "purple", "green"], ["squigly", "diamond", "pill"], [ 1, 2, 3], ["empty", "crosshatch", "full"]];

// var color = ["red", "purple", "green"];
// var shape = ["squigly", "diamond", "pill"];
// var numberOfSet = [ 1, 2, 3];
// var fill = ["empty", "crosshatch", "full"];
var cards = [];

function Card (color, shape, numberOfSet, fill) {
  this.color = color;
  this.shape = shape;
  this.numberOfSet = numberOfSet;
  this.fill = fill;
}

function checkShape(cardArray) {
  if ((cardArray[0].shape === cardArray[1].shape && cardArray[1].shape === cardArray[2].shape) || ((cardArray[0].shape !== cardArray[1].shape) && (cardArray[1].shape !== cardArray[2].shape) && (cardArray[0].shape !== cardArray[2].shape))) {
    console.log(true);
    return true;
  } else {
    return false;
  }
}

function checkNumberOfSet(cardArray) {
  if ((cardArray[0].numberOfSet === cardArray[1].numberOfSet && cardArray[1].numberOfSet === cardArray[2].numberOfSet) || ((cardArray[0].numberOfSet !== cardArray[1].numberOfSet) && (cardArray[1].numberOfSet !== cardArray[2].numberOfSet) && (cardArray[0].numberOfSet !== cardArray[2].numberOfSet))) {
    console.log(true);
    return true;
  } else {
    return false;
  }
}

function checkFill(cardArray) {
  if ((cardArray[0].fill === cardArray[1].fill && cardArray[1].fill === cardArray[2].fill) || ((cardArray[0].fill !== cardArray[1].fill) && (cardArray[1].fill !== cardArray[2].fill) && (cardArray[0].fill !== cardArray[2].fill))) {
    console.log(true);
    return true;
  } else {
    return false;
  }
}




function isSet(cardArray) {

  if ((cardArray[0].color === cardArray[1].color && cardArray[1].color === cardArray[2].color) || ((cardArray[0].color !== cardArray[1].color) && (cardArray[1].color !== cardArray[2].color) && (cardArray[0].color !== cardArray[2].color))) {

  if (checkShape(cardArray)) {
    if (checkNumberOfSet(cardArray)) {
      if (checkFill(cardArray)) {
        return true;
        }
      }
    }
  }
  return false;
}

function getRandomCard() {
  var cardProperties = [];
  for (var i = 0; i < properties.length; i++) {
    var rand = Math.floor(Math.random() * 100);
    rand = rand % 3;
    cardProperties.push(properties[i][rand]);
  }
  var newCard = new Card (cardProperties[0],cardProperties[1],cardProperties[2],cardProperties[3]);
  return newCard;
}

$(document).ready(function() {
  for (var i = 0; i < 12; i++) {
    cards.push(getRandomCard());
  }
  // var bool = isSet(cards);
  // console.log(bool);

  goodSet =[];
  goodSet.push(new Card(["red","squigly", 2, "empty"]));
  goodSet.push(new Card(["red","squigly", 1, "empty"]));
  goodSet.push(new Card(["red","squigly", 1, "empty"]));

  console.log(isSet(goodSet));
  //console.log(cards);
});
