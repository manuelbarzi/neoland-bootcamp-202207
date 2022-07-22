const fighter1 = document.querySelector(".fighter1");
const fighter2 = document.querySelector(".fighter2");
const scoreFighter1Element = document.querySelector(".score-fighter-1");
const scoreFighter2Element = document.querySelector(".score-fighter-2");
const scoreboard = document.querySelector(".scoreboard");

fighter1.style.width = "50px";
fighter1.style.height = "50px";
fighter1.style.backgroundColor = "black";
fighter1.style.position = "absolute";
fighter1.style.left = 0;
fighter1.style.top = "50px";

fighter2.style.width = "50px";
fighter2.style.height = "50px";
fighter2.style.backgroundColor = "red";
fighter2.style.position = "absolute";
fighter2.style.left = fighter2.x + "px";
fighter2.style.top = fighter2.y + "px";

const fighterSpeed = 5;

fighterWidth = 50;
fighterHeight = 50;

fighter1.x = 0;
fighter1.y = (visualViewport.height - fighterHeight) / 2;
fighter1.score = 0;
fighter2.x = visualViewport.width - fighterWidth;
fighter2.y = (visualViewport.height - fighterHeight) / 2;
fighter2.score = 0;

const controller = {
  87: false, //up
  83: false, //down
  65: false, //left
  68: false, //right
  38: false, //up
  40: false, //down
  37: false, //left
  39: false, //right
};

window.addEventListener("keydown", (event) => {
  controller[`${event.keyCode}`] = true;
});

window.addEventListener("keyup", (event) => {
  controller[`${event.keyCode}`] = false;
});

const checkUpdates = () => {
  checkKeyDownFighter1();
  checkKeyDownFighter2();
};

const checkKeyDownFighter1 = () => {
  if (controller[68] && fighter1.x + fighterWidth <= visualViewport.width) {
    //right
    fighter1.x += fighterSpeed;
  } else if (controller[65] && fighter1.x > 0) {
    //left
    fighter1.x -= fighterSpeed;
  } else if (controller[87] && fighter1.y > 0) {
    //up
    fighter1.y -= fighterSpeed;
  } else if (
    controller[83] &&
    fighter1.y <= visualViewport.height - fighterHeight
  ) {
    //down
    fighter1.y += fighterSpeed;
  }
  fighter1.style.left = fighter1.x + "px";
  fighter1.style.top = fighter1.y + "px";
};

const checkKeyDownFighter2 = () => {
  if (controller[39] && fighter2.x + fighterWidth <= visualViewport.width) {
    //right
    fighter2.x += fighterSpeed;
  } else if (controller[37] && fighter2.x > 0) {
    //left
    fighter2.x -= fighterSpeed;
  } else if (controller[38] && fighter2.y > 0) {
    //up
    fighter2.y += -fighterSpeed;
  } else if (
    controller[40] &&
    fighter2.y <= visualViewport.height - fighterHeight
  ) {
    //down
    fighter2.y += fighterSpeed;
  }
  fighter2.style.left = fighter2.x + "px";
  fighter2.style.top = fighter2.y + "px";
};

checkContact = () => {
  if (
    (fighter2.x >= fighter1.x - fighterWidth &&
      fighter2.x <= fighter1.x + fighterWidth &&
      fighter2.y >= fighter1.y - fighterHeight &&
      fighter2.y <= fighter1.y + fighterHeight) ||
    (fighter1.x >= fighter2.x - fighterWidth &&
      fighter1.x <= fighter2.x + fighterWidth &&
      fighter1.y >= fighter2.y - fighterHeight &&
      fighter1.y <= fighter2.y + fighterHeight)
  ) {
    fighter1.score += +1;
    fighter2.score += -1;
    scoreFighter1Element.innerHTML = "Robot Score 1: " + fighter1.score;
    scoreFighter2Element.innerHTML = "Robot Score 2: " + fighter2.score;
    fighter1.x = 0;
    fighter2.x = visualViewport.width - fighterWidth;
  }
};

// checkContact = () => {
//   if (fighter1.x === fighter2.x && fighter1.y === fighter2.y) {
//     fighter1.score += fighter1.score + 1;
//     fighter2.score += fighter2.score - 1;
//     scoreRobot1Element.innerHTML = "Robot Score: " + fighter1.score;
//     scoreRobot2Element.innerHTML = "New Heading" + fighter2.score;
//   }
// };

setInterval(checkUpdates, 10);
setInterval(checkContact, 100);
// score = () => {
//   if ((fighter1.x = fighter2.x) && (fighter1.y = fighter2.y)) return score + 1;
// };
// win = () => this.score++;
