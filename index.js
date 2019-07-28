const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay (musicians, instruments) { 
  let play = [];
  
  for(let i = 0; i < musicians.length; i++) {
  play.push(musicians[i] + " plays " + instruments[i]);
  }
 return play;
}

const facts = ["He was the last Beatle to learn to drive", "He was never a vegetarian", "He was a choir boy and boy scout", "He hated the sound of his own voice"];

function johnLennonFacts (facts) {
  
  let i = 0;
  
  while (i < facts.length) {
    facts[i] += "!!!";
    console.log(facts[i]);
    i++;
  }
  return facts;
}

function iLoveTheBeatles(Number) {
 let blove = [];
  let i = 0;
    do {
      blove.push('I love the Beatles!');
      i++;
    } while (i < 15);
    return blove;
}