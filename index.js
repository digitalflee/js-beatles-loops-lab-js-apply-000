
function theBeatlesPlay(musicians, instruments) {
  musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];

  instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
  
  const play = [];
  
  for (let i = 0; i < musicians.length; i++) {
      console.log(play[i]);
    for (let j = 0; j < instruments.length; j++) {
      if (musicians.length === instruments.length) {
      play.push(musicians[i] + " plays " + instruments[j]);
      
  }
}
}

function johnLennonFacts(facts) {
  facts = ["He was the last Beatle to learn to drive", "He was never a vegetarian", "He was a choir boy and boy scout", "He hated the sound of his own voice"];
  
  while (facts) {
    console.log(facts + "!!!");
    facts++;
  }
}

function iLoveTheBeatles() {
  let blove = [];
  let Number = 13;
  
  do {
    blove++;
  } while (Number < 15);
  console.log(blove.push("I love the Beatles!"))
} 
}