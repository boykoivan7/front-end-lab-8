function fighting (fighter1, fighter2) {
    if(!(fighter1 instanceof Champion) && !(fighter1 instanceof Monster) || fighter1 == null || !(fighter2 instanceof Champion) && !(fighter2 instanceof Monster) || fighter2 == null) {
        console.log("Fighter1 or Fighter2 not a Champion or Monster");
        return;
    }
    if(fighter1 === fighter2) {
        console.log("Fighter can't fight with himself");
        return;
    }
    if(!fighter1.isAlive() && !fighter2.isAlive()) {
        console.log("One of the fighters is dead");
        return;
    }
    //Methods of fighters
    var championMethods = ["fight","heal","defence"];
    var monsterMethods = ["fight","enrage","fury"];
    
    var stepCount = 1;
    console.log("FIGHT START");
    while(fighter1.isAlive() && fighter2.isAlive()) {
        var whoseStep = Math.random() < 0.5 ? fighter1 : fighter2;
        var stepMethod = whoseStep.constructor.name === "Champion" ? championMethods[Math.floor(Math.random() * championMethods.length)] : monsterMethods[Math.floor(Math.random() * monsterMethods.length)];
        
        var stepLogs = stepMethod === "fight" ? whoseStep === fighter1 ? (`${fighter1.getName()} ${stepMethod} with ${fighter2.getName()}`) : (`${fighter2.getName()} ${stepMethod} with ${fighter1.getName()}`) : (`${whoseStep.getName()} use ${stepMethod}`);;
        console.log(`${stepCount}) ${stepLogs}`);
        if(whoseStep === fighter1){
            //we use arguments only in fight method
            fighter1[stepMethod](fighter2);
        }
        else {
            fighter2[stepMethod](fighter1);
        }
        var currentHP = `\t\t\t${fighter1.getName()} HP: ${fighter1.getHitpoints()} / ${fighter1.getTotalHitpoints()}, ${fighter2.getName()} HP: ${fighter2.getHitpoints()} / ${fighter2.getTotalHitpoints()}`;
        console.log(currentHP);
        stepCount++;
    }
    console.log("FIGHT END");
}

//TEST
/*
var hunter = new Champion({name: "Rexxar", attack: 10, hitpoints: 60});
var beast = new Monster({name: "King Krush", attack: 8, hitpoints: 80});
fighting(hunter,beast);*/
