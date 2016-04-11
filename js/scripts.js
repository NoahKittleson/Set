var colors = ["red", "purple", "green"];
var cards = [];

function Card (color) {
  this.color = color;
}

function isSet(cardArray) {
  //return true or false if it is in a set
}

function getRandomCard() {
  var rand = Math.floor(Math.random() * 100);
  rand = rand % 3;
  var newCard = new Card (colors[rand]);
  return newCard;
}

$(document).ready(function() {
  for (var i = 0; i < 12; i++) {
    cards.push(getRandomCard());
  }
  console.log(cards);
});
