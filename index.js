function theBeatlesPlay(musicians, instruments) {
  const array = []

  for (let i = 0, l = musicians.length; i < l; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`) //returns an array of strings containing what instruments each musician plays.
  }

  return array
}

function johnLennonFacts(facts) {
  const shoutedFacts = []

  let i = 0
  while (i < facts.length) {
    shoutedFacts.push(`${facts[i]}!!!`) //returns an array of strings with exclamation points
    i++
  }

  return shoutedFacts
}

function iLoveTheBeatles(n) {
  const array = []

  do {
    array.push('I love the Beatles!')
    n++
  } while (n < 15)

  return array
}
