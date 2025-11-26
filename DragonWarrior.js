
// variables with respect to their ID:
const button1=document.querySelector("#button1");
const button2=document.querySelector("#button2");
const button3=document.querySelector("#button3");
const text=document.querySelector("#text");
const stats=document.querySelector("#stats");



// only variables:
var gold=50;
var xp=0;
var health=100;
var claim=-1;
var inventory=[];




// Header texts:
const goldP=document.querySelector("#goldP");
const xpP=document.querySelector("#xpP");
const healthP=document.querySelector("#healthP");


// stats texts:
const monsternameP=document.querySelector("#monsternameP");
const monsterhealthP=document.querySelector("#monsterhealthP");
var monstername;
var monsterhealth;



// Buttons Array:
const buttons=[
    {
        name:"menu",
        "button text":["Store","Cave","Mountain"],
        "button function":[store,cave,mountain],
        text:"Welcome to Dragon Warrior!!! Kill the Boss, break the curse."
    },
    {
        name:"store",
        "button text":["Buy health","Buy weapon","Back"],
        "button function":[buyhealth,buyweapon,goback],
        text:"Welcome to the store, what would you like to buy!!!\nBuy 10 health for 10 gold.\nBuy weapon for 50 gold."
    },
    {
        name:"cave",
        "button text":["Goblin","Beast","Back"],
        "button function":[goblin,beast,goback],
        text:"You are inside the cave!!! whom do you wanna fight?"
    },
    {
        name:"mountain",
        "button text":["Leviathon","Eternal Worldshatter Dragon","Back"],
        "button function":[leviathon,boss,goback],
        text:"You are on the mountains!!! you must kill The Eternal Worldshatter Dragon to break the curse."
    },
    {
        name:"goblin",
        "button text":["Attack","Dodge","Run"],
        "button function":[attack,dodge,goback],
        text:"You are fighting Gobline!!!"
    },
    {
        name:"beast",
        "button text":["Attack","Dodge","Run"],
        "button function":[attack,dodge,goback],
        text:"You are fighting The Beast!!!"
    },
    {
        name:"leviathon",
        "button text":["Attack","Dodge","Run"],
        "button function":[attack,dodge,goback],
        text:"You are fighting Leviathon!!!"
    },
    {
        name:"boss",
        "button text":["Attack","Dodge","Run"],
        "button function":[attack,dodge,goback],
        text:"You are fighting Eternal Worldshatter Dragon!!!"
    },
    {
        name:"semi win",
        "button text":["Back","Back","Back"],
        "button function":[goback,goback,goback],
        text:""
    },
    {
        name:"win",
        "button text":["Play again","Play again","Play again"],
        "button function":[restart,restart,restart],
        text:""
    },
    {
        name:"win",
        "button text":["RETRY!!!","RETRY!!!","RETRY!!!"],
        "button function":[restart,restart,restart],
        text:""
    }

];



// Weapons array:
const weapon=[
    {
        name:"Daggar ",
        level:1,
        power:9
    },
    {
        name:"Knife ",
        level:2,
        power:11
    },
    {
        name:"Claw hammer ",
        level:3,
        power:13
    },
    {
        name:"katana ",
        level:5,
        power:40
    }
];




// Monsters array:
const monster=[
    {
        name:"Goblin",
        level:1,
        health:100
    },
    {
        name:"Beast",
        level:2,
        health:100
    },
    {
        name:"Leviathon",
        level:3,
        health:100
    },
    {
        name:"Eternal Worldshatter Dragon",
        level:5,
        health:300
    }
]



// Update function:
function update(location){
    button1.innerText=location["button text"][0];
    button2.innerText=location["button text"][1];
    button3.innerText=location["button text"][2];
    text.innerText=location.text;
    
    button1.onclick=location["button function"][0];
    button2.onclick=location["button function"][1];
    button3.onclick=location["button function"][2];
}


// Dragon warrior buttons and their functions:
button1.onclick=store;
button2.onclick=cave;
button3.onclick=mountain;


// Dragon warrior functions:
function store(){
   update(buttons[1]);

}

function cave(){
    update(buttons[2]);
}

function mountain(){
    update(buttons[3]);
}




// Store functions:
function buyhealth(){
  if(health<100){
    if(gold>=10){
        gold-=10;
        health+=10;
        goldP.innerText=gold;
        healthP.innerText=health;
        text.innerText="Your health has been increased by 10\n Your health: "+health;
        if(health>100){health=100;healthP.innerText=health;}
    }else{
        text.innerText="You don't have enough gold to buy health!!! fight monster to get gold.";
    }
 }else{
    text.innerText="Your health is full!!! you can't buy more health.";
    text.innerText+="\nYour health: "+health;
 }
}
function buyweapon(){
  if(claim<3){
    if(gold>=50){
        gold-=50;
        goldP.innerText=gold;
        claim++;
        inventory[claim]=weapon[claim].name;
        text.innerText="You now have a "+weapon[claim].name;
        text.innerText+="\nYour inventory: "+inventory;
        text.innerText+="\nPower["+weapon[claim].name+"]: "+weapon[claim].power+"."
        
    }else{
        text.innerText="You don't have enough gold to buy health!!! fight monster to get gold.";
    }
  }else{
    text.innerText="Your inventory is full!!! you can't buy more weapons."
    text.innerText+="\nYour inventory: "+inventory;
  }
}



// Cave functions:
function goblin(){
     fightno=0;
    if(claim===-1){
        text.innerText="You don't have a weapon!!! you can't fight monsters."
    }else if(weapon[claim].level<monster[fightno].level){
        text.innerText="You don't have level "+monster[fightno].level+" weapon yet!!! you can't fight "+monster[fightno].name;
    }else{
         update(buttons[4]);
         fight();
    }
   
    

}
function beast(){
    fightno=1;
    if(claim===-1){
        text.innerText="You don't have a weapon!!! you can't fight monsters."
    }else if(weapon[claim].level<monster[fightno].level){
        text.innerText="You don't have level "+monster[fightno].level+" weapon yet!!! you can't fight "+monster[fightno].name;
    }else{
        update(buttons[5]);
        fight();
    }
    
    
}


// Mountain function:
function leviathon(){
    fightno=2;
    if(claim===-1){
        text.innerText="You don't have a weapon!!! you can't fight monsters."
    }else if(weapon[claim].level<monster[fightno].level){
        text.innerText="You don't have level "+monster[fightno].level+" weapon yet!!! you can't fight "+monster[fightno].name;
    }else{
        update(buttons[6]);
        fight();
    }
    
    
}
function boss(){
    fightno=3;
    if(claim===-1){
        text.innerText="You don't have a weapon!!! you can't fight monsters."
    }else if(weapon[claim].level<monster[fightno].level){
        text.innerText="You don't have level "+monster[fightno].level+" weapon yet!!! you can't fight "+monster[fightno].name;
    }else{
        update(buttons[7]);
        fight();
    }
    
    
}


// Fighting functions:
function attack(){
    text.innerText="You attacked "+monster[fightno].name+" with your "+weapon[claim].name;
    monsterhealth-=Math.round(weapon[claim].power*3.365);
    monsterhealthP.innerText=monsterhealth;
    health-=Math.round(monster[fightno].level*6.632);
    healthP.innerText=health;
    if(monsterhealth<=0 && health>0){
        win();
    }else if(monsterhealth>0 && health<=0){
        lose();
    }else if(monsterhealth<=0 && health<=0){
        lose();
    }
}
function dodge(){
    text.innerText="You dodged the attack from "+monster[fightno].name+"."
}


// Ultimate back function:
function goback(){
    update(buttons[0]);
    stats.classList.remove("flex");
    
}


// MAIN FIGHT FUNCTION:
var fightno;
function fight(){
    stats.classList.add("flex");
    monsterhealth=monster[fightno].health
    monsterhealthP.innerText=monsterhealth;
    monstername=monster[fightno].name;
    monsternameP.innerText=monstername;
    
}

// Win function
function win(){
    stats.classList.remove("flex");
    if(monster[fightno].level===5){
        playagain();
        text.innerText="You killed The Eternal Worldshatter Dragon!!! You are a DRAGON WARRIOR.";
        
    }else{
        update(buttons[8]);
        text.innerText="You killed The "+monster[fightno].name+".";
        gold+=50+Math.round(monster[fightno].level*6.632);
        goldP.innerText=gold;
        var tempgold=50+Math.round(monster[fightno].level*6.632);
        text.innerText+="\nYou earned "+tempgold+"gold."
        xp=Math.round(monster[fightno].level*3.69);
        xpP.innerText=xp;
        text.innerText+="\nYou gained "+xp+"xp points."
    }
}


// Lose function
function lose(){
    tryagain();
    stats.classList.remove("flex");
    text.innerText="You got killed by The "+monster[fightno].name+"."
    text.innerText+="\nYou will get a new body, but not a new life!!!"
    text.innerText+="\nYou have to kill The Eternal Worldshatter Dragon to get a new life."
    
}


// Restart functions

function playagain(){
    update(buttons[9]);
}
function tryagain(){
    update(buttons[10]);
}

function restart(){
    update(buttons[0])
    xp=0;
    xpP.innerText=xp;
    gold=50;
    goldP.innerText=gold;
    claim=-1;
    health=100;
    healthP.innerText=health;
}