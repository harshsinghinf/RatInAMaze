window.onload = function () {
  //creates maze onload of the Webpage
  createMaze();
};

// Level definition using Matrix
//1 is empty space, 0 is wall, 2 is rat's position,3 is food's position
let level1 = [
  [2, 0, 1, 0],
  [1, 1, 1, 1],
  [1, 0, 1, 0],
  [1, 0, 1, 3],
];
let level2 = [
  [2, 0, 1, 1, 1, 0, 1],
  [1, 0, 1, 0, 1, 0, 1],
  [1, 1, 1, 0, 1, 1, 1],
  [0, 1, 0, 0, 0, 1, 0],
  [1, 1, 0, 1, 1, 1, 1],
  [1, 0, 0, 1, 0, 0, 0],
  [1, 1, 0, 1, 1, 1, 3],
];
let level3 = [
  [2, 0, 1, 1, 1, 0, 1, 1, 1, 1],
  [1, 0, 1, 0, 1, 0, 1, 0, 0, 1],
  [1, 1, 1, 0, 1, 1, 1, 0, 0, 1],
  [0, 0, 1, 0, 0, 0, 0, 1, 0, 0],
  [1, 1, 1, 1, 1, 1, 0, 1, 1, 1],
  [1, 0, 0, 0, 0, 1, 0, 1, 0, 1],
  [1, 1, 1, 1, 0, 1, 1, 1, 0, 1],
  [0, 0, 0, 1, 0, 0, 0, 1, 0, 1],
  [1, 1, 1, 1, 1, 0, 1, 1, 0, 0],
  [0, 1, 0, 0, 0, 0, 0, 1, 1, 3],
];
let level4 = [
  [2, 1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 0, 0, 0],
  [0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1],
  [0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1],
  [0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1],
  [1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1],
  [0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1],
  [0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1],
  [0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1],
  [0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1],
  [0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1],
  [0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1],
  [1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1],
  [0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1],
  [0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0],
  [0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1],
  [0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1],
  [1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1],
  [1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1],
  [0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 1, 0, 1, 0, 0, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
  [1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1],
  [1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1],
  [0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 3],
];
let level5 = [
  [2, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1],
  [1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1],
  [1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1],
  [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1],
  [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1],
  [1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1],
  [1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1],
  [1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1],
  [1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1],
  [1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1],
  [1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1],
  [1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1],
  [1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1],
  [0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
  [1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
  [1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1],
  [1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1],
  [1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1],
  [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 3],
];

let mazearray = level1;
let level = document.getElementById("levelSelect"); //Selector Menu
level.addEventListener("change", () => {
  let lvl = level.value;
  switch (
    lvl //To switch Levels
  ) {
    case "1":
      mazearray = level1;
      break;
    case "2":
      mazearray = level2;
      break;
    case "3":
      mazearray = level3;
      break;
    case "4":
      mazearray = level4;
      break;
    case "5":
      mazearray = level5;
      break;
    default:
      console.log("Invalid Level Value");
  }
  maze.innerHTML =
    '<img id="rat" src="ratImage.jpg" alt="Rat" width="45px" height="45px" />\
  <img id="food" src="cheese_transparent.png" alt="Cheese" width="45px" height="45px" />';
  createMaze(); //After switching Maze has to be Re-created according to new level matrix
});

let maze = document.getElementById("maze-container");
let rat = document.getElementById("rat");
let food = document.getElementById("food");

function createMaze() {
  //Function to create the Maze
  //1 is empty space, 0 is wall, 2 is rat's position,3 is food's position
  for (let i = 0; i < mazearray.length; i++) {
    let row = document.createElement("div");
    row.classList.add("row");
    for (let j = 0; j < mazearray[i].length; j++) {
      let cell = document.createElement("div");
      cell.classList.add("cell");
      if (mazearray[i][j] == 0) {
        cell.classList.add("wall");
      }
      row.appendChild(cell);
    }
    maze.appendChild(row);
  }
  let ratPos = getRatPosition();
  let foodPos = getFoodPosition();
  setRatPosition(ratPos[0], ratPos[1]);
  setFoodPosition(foodPos[0], foodPos[1]);
}

function getRatPosition() {
  let position = [-1, -1];
  loop1: for (let i = 0; i < mazearray.length; i++) {
    loop2: for (let j = 0; j < mazearray[i].length; j++) {
      if (mazearray[i][j] == 2) {
        position[0] = i;
        position[1] = j;
        break loop1;
      }
    }
  }
  return position;
}

function getFoodPosition() {
  let position = [-1, -1];
  loop1: for (let i = 0; i < mazearray.length; i++) {
    loop2: for (let j = 0; j < mazearray[i].length; j++) {
      if (mazearray[i][j] == 3) {
        position[0] = i;
        position[1] = j;
        break loop1;
      }
    }
  }
  return position;
}

function setRatPosition(x, y) {
  rat.style.top = x * 50 + 3 + "px";
  rat.style.left = y * 50 + 3 + "px";
}

function setFoodPosition(x, y) {
  rat.style.bottom = x * 50 + 3 + "px";
  rat.style.right = y * 50 + 3 + "px";
}

//Event Listener to control the Rat
document.addEventListener("keydown", (e) => {
  let rat = document.getElementById("rat");
  let food = document.getElementById("food");
  let ratLeft = rat.offsetLeft;
  let ratTop = rat.offsetTop;
  let foodLeft = food.offsetLeft;
  let foodTop = food.offsetTop;
  let posRat = getRatPosition();
  if (e.key == "ArrowRight") {
    if (ratLeft < (mazearray.length - 1) * 50) {
      if (mazearray[posRat[0]][posRat[1] + 1]) {
        e.preventDefault();
        ratLeft += 50;
        rat.style.left = ratLeft + "px";
        mazearray[posRat[0]][posRat[1]] = 1;
        mazearray[posRat[0]][posRat[1] + 1] = 2;
      }
    }
  }
  if (e.key == "ArrowLeft") {
    if (ratLeft > 0) {
      if (mazearray[posRat[0]][posRat[1] - 1]) {
        e.preventDefault();
        ratLeft -= 50;
        rat.style.left = ratLeft + "px";
        mazearray[posRat[0]][posRat[1]] = 1;
        mazearray[posRat[0]][posRat[1] - 1] = 2;
      }
    }
  }
  if (e.key == "ArrowUp") {
    if (ratTop > 0) {
      if (mazearray[posRat[0] - 1][posRat[1]]) {
        e.preventDefault();
        ratTop -= 50;
        rat.style.top = ratTop + "px";
        mazearray[posRat[0]][posRat[1]] = 1;
        mazearray[posRat[0] - 1][posRat[1]] = 2;
      }
    }
  }
  if (e.key == "ArrowDown") {
    if (ratTop < (mazearray.length - 1) * 50) {
      if (mazearray[posRat[0] + 1][posRat[1]]) {
        e.preventDefault();
        ratTop += 50;
        rat.style.top = ratTop + "px";
        mazearray[posRat[0]][posRat[1]] = 1;
        mazearray[posRat[0] + 1][posRat[1]] = 2;
      }
    }
  }
  if (ratLeft - 1 == foodLeft && ratTop - 1 == foodTop) {
    openModal();
  }
});

//You Win PopUP
function openModal() {
  const modal = document.getElementById("myModal");
  const modalImg = document.getElementById("modalImg");
  modal.style.display = "block";
  modalImg.src = "Remy Ratatouille.jpeg";
}
function closeModal() {
  const modal = document.getElementById("myModal");
  modal.style.display = "none";
  location.reload(true);
}

var hotbod = document.querySelector("body");

function doStuff() {
  hotbod.className += " animate";
}
doStuff();

var words = [
    "ackTracking",
    "ACKTRACKING",
    "ackTracking",
    "acktracking",
    "ack-Tracking",
  ],
  part,
  i = 0,
  offset = 0,
  len = words.length,
  forwards = true,
  skip_count = 0,
  skip_delay = 30,
  speed = 90;

var wordflick = function () {
  setInterval(function () {
    if (forwards) {
      if (offset >= words[i].length) {
        ++skip_count;
        if (skip_count === skip_delay) {
          forwards = false;
          skip_count = 0;
        }
      }
    } else {
      if (offset === 0) {
        forwards = true;
        i++;
        offset = 0;
        if (i >= len) {
          i = 0;
        }
      }
    }
    part = "B" + words[i].substr(0, offset); // Adding "B" to the animated part
    if (skip_count === 0) {
      if (forwards) {
        offset++;
      } else {
        offset--;
      }
    }
    document.querySelector(".word").textContent = part;
  }, speed);
};

document.addEventListener("DOMContentLoaded", function () {
  wordflick();
});

const game2 = document.querySelector(".game2");
let loadgame = document.querySelector("#loadGame");
let mazeCreated = false; // Track whether the maze has been created

loadgame.addEventListener("click", () => {
  if (loadgame.textContent === "Load Game") {
    openGame2();
    loadgame.textContent = "Close Game";

    // Check if the maze has already been created to prevent duplicate creation
    if (!mazeCreated) {
      createMaze2();
      mazeCreated = true; // Mark maze as created
    }
    restartGame();
  } else {
    closeGame2();
    loadgame.textContent = "Load Game";
    resetGame(); // Stop all ongoing processes and reset the game
    mazeCreated = false; // Reset maze creation status
  }
});
function resetGame() {
  resetFlag = true; // Set reset flag to stop any ongoing processes
  clearOngoingDelays(); // Stop all ongoing delays

  maze2.innerHTML = ""; // Clear the maze
  mazeCreated = false; // Mark the maze as not created for next load

  // Optionally, reset any other game state variables or elements here
  restartGame(); // Reinitialize the game elements
}

function openGame2() {
  game2.style.display = "flex";
}

function closeGame2() {
  game2.style.display = "none";
}

let levelII = document.getElementById("levelSelect2"); //Selector Menu
levelII.addEventListener("change", () => {
  let lvl2 = levelII.value;
  switch (
    lvl2 //To switch Levels
  ) {
    case "1":
      mazearray2 = level1;
      break;
    case "2":
      mazearray2 = level2;
      break;
    case "3":
      mazearray2 = level3;
      break;
    case "4":
      mazearray2 = level4;
      break;
    case "5":
      mazearray2 = level5;
      break;
    default:
      console.log("Invalid Level Value");
  }
  restartGame();
});
// let resetFlag = false;

// function restartGame() {
//   // Clear the existing maze
//   maze2.innerHTML = "";

//   // Reinitialize the rat and food images
//   maze2.innerHTML =
//     '<img id="rat2" src="ratImage.jpg" alt="Rat" width="45px" height="45px" />\
//      <img id="food2" src="cheese_transparent.png" alt="Cheese" width="45px" height="45px" />';

//   rat2 = document.getElementById("rat2");
//   food2 = document.getElementById("food2");

//   // Recreate the maze with the new level
//   createMaze2();

//   // Reset visited and path arrays
//   resetVisAndPath();

//   // Recalculate and reset rat and food positions
//   posRat2 = getRatPosition2();
//   setRatPosition2(posRat2[0], posRat2[1]);

//   foodPos2 = getFoodPosition2();
//   setFoodPosition2(foodPos2[0], foodPos2[1]);

//   setTimeout(() => {
//     resetFlag = false; // Reset the flag after some delay
//   }, 50);
// }

let button = document.querySelector(".start");

function resetVisAndPath() {
  n = mazearray2.length;
  vis = [];
  path = [];
  for (let i = 0; i < n; i++) {
    vis[i] = [];
    path[i] = [];
    for (let j = 0; j < n; j++) {
      vis[i][j] = false;
      path[i][j] = undefined;
    }
  }
}
let mazearray2 = level1;
let maze2 = document.getElementById("maze-container2");
let rat2 = document.getElementById("rat2");
let food2 = document.getElementById("food2");

function createMaze2() {
  //Function to create the Maze
  //1 is empty space, 0 is wall, 2 is rat's position,3 is food's position
  for (let i = 0; i < mazearray2.length; i++) {
    let row = document.createElement("div");
    row.classList.add("row");
    for (let j = 0; j < mazearray2[i].length; j++) {
      let cell = document.createElement("div");
      cell.classList.add("cell");
      cell.id = `cell-${i}-${j}`;
      if (mazearray2[i][j] == 0) {
        cell.classList.add("wall");
      }
      row.appendChild(cell);
    }
    maze2.appendChild(row);
  }

  let ratPos2 = getRatPosition2();
  let foodPos2 = getFoodPosition2();
  setRatPosition2(ratPos2[0], ratPos2[1]);
  setFoodPosition2(foodPos2[0], foodPos2[1]);
}

function getFoodPosition2() {
  let position = [,];
  loop1: for (let i = 0; i < mazearray2.length; i++) {
    loop2: for (let j = 0; j < mazearray2[i].length; j++) {
      if (mazearray2[i][j] == 3) {
        position[0] = i;
        position[1] = j;
        break loop1;
      }
    }
  }
  return position;
}
function getRatPosition2() {
  let position = [,];
  loop1: for (let i = 0; i < mazearray2.length; i++) {
    loop2: for (let j = 0; j < mazearray2[i].length; j++) {
      if (mazearray2[i][j] == 2) {
        position[0] = i;
        position[1] = j;
        break loop1;
      }
    }
  }
  return position;
}

function setRatPosition2(x, y) {
  rat2.style.top = x * 50 + 3 + "px";
  rat2.style.left = y * 50 + 3 + "px";
}

function setFoodPosition2(x, y) {
  food2.style.top = x * 50 + 3 + "px";
  food2.style.left = y * 50 + 3 + "px";
}

var n = mazearray2.length;
let vis = [];
let path = [];
for (let i = 0; i < n; i++) {
  vis[i] = [];
  path[i] = [];
  for (let j = 0; j < n; j++) {
    vis[i][j] = false;
    path[i][j] = undefined;
  }
}
let ratLeft2 = rat2.offsetLeft;
let ratTop2 = rat2.offsetTop;
let foodLeft2 = food2.offsetLeft;
let foodTop2 = food2.offsetTop;
let posRat2 = getRatPosition2();
let startPos2 = posRat2;
let foodPos2 = getFoodPosition2();

button.addEventListener("click", () => {
  row = posRat2[0];
  col = posRat2[1];
  findPath(row, col, mazearray2, foodPos2, n, row, col);
});
function accessCell(row, col) {
  let cell = document.getElementById(`cell-${row}-${col}`);
  return cell;
}

let msec = 1000;
// function delay() {
//   return new Promise((resolve) => setTimeout(resolve, msec));
// }

// async function findPath(row, col, mazearray2, foodPos2, n, prevR, prevC) {
//   // Check if reset was triggered
//   if (resetFlag) {
//     return false; // Stop execution if reset is active
//   }

//   // Set the current cell's style and position the rat
//   let curCell = accessCell(row, col);
//   curCell.classList.add("yellow");
//   setRatPosition2(row, col);

//   // Check for the win condition
//   if (row === foodPos2[0] && col === foodPos2[1]) {
//     await delay();
//     curCell.classList.add("green");
//     curCell.classList.remove("yellow");
//     alert("Got the Cheese!!!");
//     return true; // Path found
//   }

//   // Mark the current cell as visited
//   vis[row][col] = true;

//   await delay();
//   setRatPosition2(row, col);

//   // Try moving down
//   if (row < n - 1 && mazearray2[row + 1][col] !== 0 && !vis[row + 1][col]) {
//     if (await findPath(row + 1, col, mazearray2, foodPos2, n, row, col)) {
//       curCell.classList.add("green");
//       curCell.classList.remove("yellow");
//       return true;
//     }
//   }

//   // Check resetFlag in each step before continuing
//   if (resetFlag) return false;

//   // Try moving right
//   if (col < n - 1 && mazearray2[row][col + 1] !== 0 && !vis[row][col + 1]) {
//     if (await findPath(row, col + 1, mazearray2, foodPos2, n, row, col)) {
//       curCell.classList.add("green");
//       curCell.classList.remove("yellow");
//       return true;
//     }
//   }

//   // Check resetFlag in each step before continuing
//   if (resetFlag) return false;

//   // Try moving up
//   if (row > 0 && mazearray2[row - 1][col] !== 0 && !vis[row - 1][col]) {
//     if (await findPath(row - 1, col, mazearray2, foodPos2, n, row, col)) {
//       curCell.classList.add("green");
//       curCell.classList.remove("yellow");
//       return true;
//     }
//   }

//   // Check resetFlag in each step before continuing
//   if (resetFlag) return false;

//   // Try moving left
//   if (col > 0 && mazearray2[row][col - 1] !== 0 && !vis[row][col - 1]) {
//     if (await findPath(row, col - 1, mazearray2, foodPos2, n, row, col)) {
//       curCell.classList.add("green");
//       curCell.classList.remove("yellow");
//       return true;
//     }
//   }

//   // Backtracking
//   await delay(1000);
//   setRatPosition2(prevR, prevC);
//   curCell.classList.add("red");
//   curCell.classList.remove("yellow");

//   // If the rat returns to the start position with no solution
//   if (row === startPos2[0] && col === startPos2[1]) {
//     alert("No Path Available");
//   }

//   return false; // No path found
// }

// let loadgame = document.querySelector("#loadGame");
// loadgame.addEventListener("click", () => {
//   if (loadgame.textContent == "Load Game") openGame2();
//   loadgame.innerHTML = "Close Game";
//   createMaze2();
// });

let twoX = document.querySelector(".twoX");
let threeX = document.querySelector(".threeX");
let fourX = document.querySelector(".fourX");
let reset = document.querySelector(".reset");

twoX.addEventListener("click", () => {
  msec = 300;
});
threeX.addEventListener("click", () => {
  msec = 150;
});
fourX.addEventListener("click", () => {
  msec = 50;
});

let resetFlag = false; // Global reset flag to stop ongoing tasks
let ongoingDelay = null; // To store ongoing delay promises

// Reset button event listener
reset.addEventListener("click", () => {
  resetFlag = true; // Set flag to stop findPath recursion
  restartGame(); // Reset the game fully
});

// Updated findPath function with immediate exit on reset
let finalPath = []; // To store the valid path

async function findPath(row, col, mazearray2, foodPos2, n, prevR, prevC) {
  // Set the current cell's style and position the rat
  let curCell = accessCell(row, col);
  curCell.classList.add("yellow");
  setRatPosition2(row, col);

  // Check for the win condition (rat reaches the cheese)
  if (row === foodPos2[0] && col === foodPos2[1]) {
    await delay();
    curCell.classList.add("green");
    curCell.classList.remove("yellow");
    alert("Got the Cheese!!!");

    // Highlight the final path
    highlightFinalPath();
    return true; // Path found
  }

  // Mark the current cell as visited
  vis[row][col] = true;

  // Add current cell to the path
  finalPath.push([row, col]);

  await delay();
  setRatPosition2(row, col);

  // Try moving in all directions (down, right, up, left)
  if (row < n - 1 && mazearray2[row + 1][col] !== 0 && !vis[row + 1][col]) {
    if (await findPath(row + 1, col, mazearray2, foodPos2, n, row, col)) {
      curCell.classList.add("green");
      curCell.classList.remove("yellow");
      return true;
    }
  }

  if (col < n - 1 && mazearray2[row][col + 1] !== 0 && !vis[row][col + 1]) {
    if (await findPath(row, col + 1, mazearray2, foodPos2, n, row, col)) {
      curCell.classList.add("green");
      curCell.classList.remove("yellow");
      return true;
    }
  }

  if (row > 0 && mazearray2[row - 1][col] !== 0 && !vis[row - 1][col]) {
    if (await findPath(row - 1, col, mazearray2, foodPos2, n, row, col)) {
      curCell.classList.add("green");
      curCell.classList.remove("yellow");
      return true;
    }
  }

  if (col > 0 && mazearray2[row][col - 1] !== 0 && !vis[row][col - 1]) {
    if (await findPath(row, col - 1, mazearray2, foodPos2, n, row, col)) {
      curCell.classList.add("green");
      curCell.classList.remove("yellow");
      return true;
    }
  }

  // Backtracking
  await delay();
  setRatPosition2(prevR, prevC);
  curCell.classList.add("red");
  curCell.classList.remove("yellow");

  // Remove current cell from the final path since we're backtracking
  finalPath.pop();

  // If the rat returns to the start position with no solution
  if (row === startPos2[0] && col === startPos2[1]) {
    alert("No Path Available");
  }

  return false; // No path found
}

// Function to highlight the final path
function highlightFinalPath() {
  finalPath.forEach(([row, col]) => {
    let cell = accessCell(row, col);
    cell.classList.add("green");
  });
}

// Helper function to move in a specific direction with reset check
async function moveInDirection(newRow, newCol, curRow, curCol) {
  if (
    newRow >= 0 &&
    newRow < n &&
    newCol >= 0 &&
    newCol < n &&
    mazearray2[newRow][newCol] !== 0 &&
    !vis[newRow][newCol]
  ) {
    if (resetFlag) return false; // Check reset flag before moving
    if (
      await findPath(newRow, newCol, mazearray2, foodPos2, n, curRow, curCol)
    ) {
      return true;
    }
  }
  return false;
}

// Function to handle delay with cancellation on reset
async function delay() {
  if (resetFlag) return; // Exit if reset is active
  return new Promise((resolve) => {
    ongoingDelay = setTimeout(resolve, msec); // Set timeout for delay
  });
}

// Function to clear all ongoing delays and reset game state
function clearOngoingDelays() {
  if (ongoingDelay) {
    clearTimeout(ongoingDelay); // Clear any pending delays
    ongoingDelay = null; // Reset ongoing delay tracker
  }
}

// Function to reset the game state
function restartGame() {
  // Immediately stop all ongoing recursive calls and animations
  clearOngoingDelays();

  // Set reset flag to true to stop any ongoing recursive function
  resetFlag = true;

  // Clear the maze and reinitialize the game elements
  maze2.innerHTML = ""; // Clear the maze

  maze2.innerHTML =
    '<img id="rat2" src="ratImage.jpg" alt="Rat" width="45px" height="45px" />\
     <img id="food2" src="cheese_transparent.png" alt="Cheese" width="45px" height="45px" />';

  rat2 = document.getElementById("rat2");
  food2 = document.getElementById("food2");

  // Recreate the maze with the new level
  createMaze2();

  // Reset visited and path arrays
  resetVisAndPath();

  // Recalculate and reset rat and food positions
  posRat2 = getRatPosition2();
  setRatPosition2(posRat2[0], posRat2[1]);

  foodPos2 = getFoodPosition2();
  setFoodPosition2(foodPos2[0], foodPos2[1]);

  //reset delay time
  msec = 500;

  // Ensure resetFlag is reset after the game has been fully reset
  setTimeout(() => {
    resetFlag = false; // Allow the game to restart after reset
  }, 50); // Adjust delay for a full reset
}
