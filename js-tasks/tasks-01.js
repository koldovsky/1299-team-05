//Messi Goals   https://www.codewars.com/kata/grasshopper-messi-goals-function/train/javascript

function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  let ret = laLigaGoals + copaDelReyGoals + championsLeagueGoals;
  return ret;
}


//Make negative    https://www.codewars.com/kata/55685cd7ad70877c23000102/train/javascript
function makeNegative(num) {
  if (num > 0){
    num = num * -1;
  }
  return num;
}

//Game Move https://www.codewars.com/kata/grasshopper-terminal-game-move-function/train/javascript
function move (position, roll) {
  let newPosition = position + (roll * 2);
  return newPosition;
}

//Personalized Message https://www.codewars.com/kata/grasshopper-personalized-message/train/javascript
function greet (name, owner) {
  let greeting = 'guest';
  if (name === owner){greeting = 'boss';}
  return 'Hello ' + greeting;
}

//Keep Hydrated https://www.codewars.com/kata/keep-hydrated-1/train/javascript
function litres(time) {
  let litres = time * 0.5;
  litres = Math.floor(litres);
  return litres;
}

//Opposites Attract https://www.codewars.com/kata/555086d53eac039a2a000083/train/javascript
function lovefunc(flower1, flower2){
  let checkFlower1 = (flower1 % 2) === 0;
  let checkFlower2 = (flower2 % 2) === 0;
  return ((checkFlower1 && !checkFlower2) || (!checkFlower1 && checkFlower2))
}

