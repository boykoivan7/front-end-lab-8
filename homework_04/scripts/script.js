var assign = function(toObject) {
    if(typeof toObject !== "object") {
        console.log("Please enter an object");
        return;
    }
    var toObj = Object(toObject);
    for(var i = 1; i < arguments.length; i++) {
        var fromObj = arguments[i];
        if(typeof fromObj === "object") {
            for(var key in fromObj) {
                if(fromObj.hasOwnProperty(key)) {
                    toObj[key] = fromObj[key];
                }
            }
        }
    }
    return toObj;
}

function Fighter(object) {
    this._name = object.name;
    this._attack = object.attack;
    this._hitpoints = object.hitpoints;
    this._totalHitpoints = object.hitpoints;
}

Fighter.prototype.getName = function() {
    return this._name;
}

Fighter.prototype.setName = function(name) {
    this._name = name;
}

Fighter.prototype.getHitpoints = function() {
    return this._hitpoints;
}

Fighter.prototype.setHitpoints = function(hitpoints) {
    this._hitpoints = hitpoints;
}

Fighter.prototype.getTotalHitpoints = function() {
    return this._totalHitpoints;
}

Fighter.prototype.setTotalHitpoints = function(totalHitpoints) {
    this._totalHitpoints = totalHitpoints;
}

Fighter.prototype.getAttack = function() {
    return this._attack;
}

Fighter.prototype.setAttack = function(attack) {
    this._attack = attack;
}

Fighter.prototype.fight = function(target) {
    if(this === target) {
        console.log(`${this._name} can't fight with himself`);
        return;
    }
    if(target instanceof Champion) {
        if(target.getIsDefence()) {
            console.log(`${target.getName()} blocked incoming damage`);
            target.setIsDefence(false);
            return;
        }
    }
    if(!target.isAlive()) {
        console.log(`${target.getName()} is dead`);
        return;
    }
    if(this instanceof Monster) {
        if(this._enrageNextCount > 0) {
            target.setHitpoints(target.getHitpoints() - this._attack * 2);
            this._enrageNextCount--;
        }
        else {
            target.setHitpoints(target.getHitpoints() - this._attack);
        }
    }
    else {
        target.setHitpoints(target.getHitpoints() - this._attack);
    }
    if(target.getHitpoints() < 0) {
        target.setHitpoints(0);
    }
    //if Champion win
    if(target.getHitpoints() === 0 && this instanceof Champion) {
        this._attack++;
        console.log(`${this._name} win!!!`);
    }
    //if Monster win
    if(target.getHitpoints() === 0 && this instanceof Monster) {
        this._hitpoints += Math.floor(target.getTotalHitpoints() * 0.25);
        this._totalHitpoints += Math.floor(target.getTotalHitpoints() * 0.1);
        if(this._hitpoints > this._totalHitpoints) {
            this._hitpoints = this._totalHitpoints;
        }
        console.log(`${this._name} win!!!`);
    }
}

Fighter.prototype.isAlive = function() {
    return this._hitpoints > 0;
}

function Champion(object) {
    Fighter.apply(this,arguments);
    this._isDefence = false; //block next incoming damage
}

Champion.prototype = Object.create(Fighter.prototype);
Champion.prototype.constructor = Champion;

Champion.prototype.heal = function() {
    if(this._hitpoints < this._totalHitpoints) {
        this._hitpoints += 5;
        if(this._hitpoints > this._totalHitpoints) {
            this._hitpoints = this._totalHitpoints;
        }
    }
    else {
        console.log(`${this._name} try to use heal, but HP is max`);
    }
}

Champion.prototype.defence = function() {
    this._isDefence = true;
    this._totalHitpoints++;
}

Champion.prototype.getIsDefence = function() {
    return this._isDefence;
}

Champion.prototype.setIsDefence = function(isDefence) {
    this._isDefence = isDefence;
}

function Monster() {
    Fighter.apply(this,arguments);
    this._enrageNextCount = 0; //count of next attacks with double damage
}

Monster.prototype = Object.create(Fighter.prototype);
Monster.prototype.constructor = Monster;

Monster.prototype.enrage = function() {
    this._enrageNextCount = 2;
}

Monster.prototype.fury = function() {
    if(this._hitpoints <= 5 || this._totalHitpoints <= 5) { //because if hp 5-5 = 0
        console.log("Not enough current HP or total HP");
        return;
    }
    this._hitpoints -= 5;
    this._totalHitpoints -= 5;
    this._attack +=2;
}

Champion.prototype.getEnrageNextCount = function() {
    return this._enrageNextCount;
}

Champion.prototype.setEnrageNextCount = function(enrageNextCount) {
    this._enrageNextCount = enrageNextCount;
}
