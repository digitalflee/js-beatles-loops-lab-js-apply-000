const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay (musicians, instruments) { 
  let play = [];
  
  for(let i = 0; i < musicians.length; i++) {
  play.push(musicians[i] + " plays " + instruments[i]);
  }
 return play;
}

const facts = [];

johnLennonFacts = facts => {}