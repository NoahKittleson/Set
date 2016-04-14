var properties = [["red", "purple", "green"], ["squiggle", "diamond", "pill"], [1, 2, 3], ["empty", "crosshatch", "full"]];
var cards = [];
var score = 0;

function Card (propertyArray) {
  this.properties = propertyArray;
}

function Deck () {
  this.cards = shuffle(createDeck()).concat(shuffle(createDeck()));
  //this.shuffle();
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

function shuffle (array) {
  var oldCopy = array.pop();
  var newCopy;
  for (var i = 0; i < array.length * 2; i++) {
    var rand = Math.floor(Math.random() * 1000);
    rand = rand % array.length;
    newCopy = array[rand];
    array[rand] = oldCopy;
    oldCopy = newCopy;
  }
  array.push(oldCopy);
  return array;
}

Deck.prototype.printDeck = function() {
  for (var i = 0; i < this.cards.length; i++) {
    console.log(this.cards[i].getID());
  }
}

Deck.prototype.getNextCard = function() {
  return this.cards.pop();
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


function isDoubleSet(cardArray) {
  debugger;
  var setOne = cardArray.slice(0,3);
  var setTwo = cardArray.slice(2,5);
  console.log(setOne);
  console.log(setTwo);
  var possibleSets = [[0,1,2], [0,1,3], [0,2,3], [1,2,3], [0,1,4], [0,2,4], [1,2,4], [0,3,4], [1,3,4], [2,3,4]];
  if (isSet(setOne) && isSet(setTwo)) {
    return true;
  } else {
    return false;
  }

  var bool = true;
  for (var i = 0; i < properties.length; i++) {
    if ((cardArray[2].properties[i] === cardArray[3].properties[i] && cardArray[3].properties[i] === cardArray[4].properties[i]) || cardArray[2].properties[i] !== cardArray[3].properties[i] && cardArray[3].properties[i] !== cardArray[4].properties[i] && cardArray[2].properties[i] !== cardArray[4].properties[i]) {
    } else {
      bool = false;
    }
  }
  if (isSet(cardArray)) {
    return bool;
  }
}

function doubleSetTwoPointOh(cardArray) {
  if (cardArray.length != 5) {
    return false;
  }
  sets = 0;
  var possibleSets = [[0,1,2], [0,1,3], [0,2,3], [1,2,3], [0,1,4], [0,2,4], [1,2,4], [0,3,4], [1,3,4], [2,3,4]];
  for (var i = 0; i < possibleSets.length; i++) {
    var combo = [cardArray[possibleSets[i][0]], cardArray[possibleSets[i][1]], cardArray[possibleSets[i][2]]];
    if (isSet(combo)) {
      sets++;
    }
  }
  if (sets >= 2) {
    return true;
  } else {
    return false;
  }
}

$(document).ready(function() {
  var newDeck = new Deck();
  var cardIDArray = ["card1", "card2", "card3", "card4", "card5", "card6", "card7", "card8", "card9", "card10", "card11", "card12", "card13", "card14", "card15", "card16", "card17", "card18", "card19", "card20"];
  var newCard;
  for (var i = 0; i < cardIDArray.length; i++) {
    newCard = newDeck.getNextCard();
    console.log(newCard.getID());
    $("." + cardIDArray[i]).attr("value", newCard.getID());
    str = newCard.getID();
    str = str.substring(0, str.length-1);
    $("." + cardIDArray[i]).attr("src", "img/" + str + ".png");
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
      $(this).removeAttr('checked');
    });
    console.log(chosenIDs);
    console.log(parsedCards);

    //determine if it's a set
    var result = false;
    if (chosenIDs.length === 3) {
      result = isSet(parsedCards);
    } else if (chosenIDs.length === 5) {
      result = doubleSetTwoPointOh(parsedCards);
    }

    //change cards if it is a set
    if (result) {
      if (chosenIDs.length === 5) {
        score += 4;
      }
      score++;
      // $('.clock').FlipClock(reset);
      $("#score").text(score);
      for (var i = 0; i < chosenIDs.length; i++) {
        if (newDeck.cards.length) {
          clock.reset;
          newCard = newDeck.getNextCard();
          console.log(newCard.getID());
          $("." + chosenIDs[i]).attr("value", newCard.getID());
          str = newCard.getID();
          str = str.substring(0, str.length-1);
          $("." + chosenIDs[i]).attr("src", "img/" + str + ".png");
        } else {
          $("." + chosenIDs[i]).each(function() {
            $(this).replaceWith("");
          });
        }
      }
    } else {
      for (var i = 0; i < chosenIDs.length; i++) {
        $("." + chosenIDs[i]).effect("shake");
        $('input[type=checkbox]').hide();
      }
    }
  });
});
