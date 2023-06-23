const generateRandomNum = (min,max) => {
    let random = Math.floor(Math.random() * (max-min) + min);
    return random;
};
let display = document.querySelector(".displayContainer");

const consoleToScreen=(content)=> {
    display.append(content);
    // display.innerHTML = content
    
}

const clearScreen=()=> {
    // display.append(content);
    display.innerHTML = ""
    
}
const RETREAT = () => {
    clearScreen()
    consoleToScreen(`USS ASSEMBLY has given up the battle against ${currentAlien.name} **GAME OVER**`)
}


const ship1 ={
    name: "USS Assembly",
    hull: 20,
    firepower: 5,
    accuracy: 0.7,
};

let Alien ={
    name: "Scary",
    hull: generateRandomNum(3,6),
    firepower: generateRandomNum(2,4),
    accuracy: generateRandomNum(6,8),
    image:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT1qTZV2HM0vU4aqu2Ls0wrxz-fCj29c5WYQ&usqp=CAU"
};
let Alien1 ={
    name: "Terrible",
    hull: generateRandomNum(3,6),
    firepower: generateRandomNum(2,4),
    accuracy: generateRandomNum(6,8),
    image:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWu-EdH0rjWMDj3THA_jQTYsLlp3SKdF38Bmn6MjIjkffRtaW7gOvEgyIKWX06YXSI0so&usqp=CAU"
};
let Alien2 ={
    name: "Space",
    hull: generateRandomNum(3,6),
    firepower: generateRandomNum(2,4),
    accuracy: generateRandomNum(6,8),
    image:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxeeSZF1I8P4K3IqnbLteMc08cpTw5soEt9ki7qqhwDKiXUAgbINOVZwfFyaNhUX-pbwE&usqp=CAU"
};
let Alien3 ={
    name: "Monster",
    hull: generateRandomNum(3,6),
    firepower: generateRandomNum(2,4),
    accuracy: generateRandomNum(6,8),
    image:
    "https://www.123gif.de/gifs/ufos/ufos-0020.gif"
};
let Alien4 ={
    name: "Antenna",
    hull: generateRandomNum(3,6),
    firepower: generateRandomNum(2,4),
    accuracy: generateRandomNum(6,8),
    image:
    "https://www.123gif.de/gifs/ufos/ufos-0018.gif"
};
let Alien5 ={
    name: "Space Alien",
    hull: generateRandomNum(3,6),
    firepower: generateRandomNum(2,4),
    accuracy: generateRandomNum(6,8),
    image:
    "https://www.animierte-gifs.net/data/media/34/animiertes-ufo-bild-0040.gif"
};

let allAliens = [Alien, Alien1, Alien2, Alien3, Alien4, Alien5];

let currentAlien = Alien;
let counter = 0

defeatedEnemies = 0


// TODO - to get alien info to document
// const alienInfo =() =>{
//     let names = document.querySelector('.AlienName')
//     names.innerHTML = currentAlien.name
//     let lives = document.querySelector('.HullP')
//     lives.innerHTML = currentAlien.hull
//     let USSHP = document.querySelector('.hp')
//     USSHP.innerHTML = ship1.hull
// };

const determineLifeUSS = () =>{
    consoleToScreen(ship1.hull);
    if (ship1.hull <= 0){
        alert("Game Over")
    }else {
        startBattle(currentAlien)
    }

};
const determineLifeAlien = () =>{
    console.log(currentAlien.hull);
    if (currentAlien.hull <= 0) {
        defeatedEnemies++
        if(defeatedEnemies === 5){
            alert("USS Assembly Wins.")
        }
        changeAlien();
        counter++
        currentAlien = allAliens[counter]
        consoleToScreen(`Current Target: ${currentAlien.name}`)
    } else {
        alienAttack()
        determineLifeUSS()
    }

};


function startBattle() {
    console.log(currentAlien)
    clearScreen()
    let power = ship1.firepower;
    let enemyLife = currentAlien.hull;
    let hit = (enemyLife -= power);
    currentAlien.hull = hit;
    consoleToScreen(`${ship1.name} damaged ${currentAlien.name} by ${power} HP's`);
    consoleToScreen(`${currentAlien.name}'s remaining life: ${hit}`);

    determineLifeAlien();

};

const changeAlien = () => {
    consoleToScreen("******* Next Battle Round *******");
    console.log("Next Alien Opponent");
    let p2 = document.querySelector('.ship2');
    let p2Change = document.createElement("img");
    p2Change.setAttribute("src", allAliens[counter].image);
    p2Change.setAttribute("class", "ship2");
    p2.replaceWith(p2Change);

}
const alienAttack = () => {
    console.log("Alien attacks USS ASSEMBLY")
    let health = currentAlien.firepower;
    let ship2Attack = (ship1.hull -= currentAlien.firepower);
    ship1.hull = ship2Attack;
    console.log(`USS ASSEMBLY was hit by ${currentAlien.name} with a strength of ${health}`);
    console.log(`USS ASSEMBLY's life is now ${ship2Attack} `);
}




