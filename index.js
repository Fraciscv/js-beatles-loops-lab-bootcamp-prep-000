function theBeatlesPlay(musicians, instruments) {
  var array = []

  for (var i = 0, x = musicians.length; i < x; i++) { //for loop which iterates over the array of musicians.
    array.push(`${musicians[i]} plays ${instruments[i]}`); //create a string using the _first_
  //index of the musicians array **and** the first index of the instruments
  }

  return array//The function should return the array of new strings containing what
  //instruments each musician plays.
}

function johnLennonFacts(facts) {
  var Facts = []

  let i = 0
  while (i < facts.length) {
    Facts.push(`${facts[i]}!!!`); //returns an array of strings with exclamation points
    i++
  }

  return Facts
}

function iLoveTheBeatles(n) {
  var array = []

  do {
    array.push('I love the Beatles!');
    n++
  } while (n < 15)

  return array
}
