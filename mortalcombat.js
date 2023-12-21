const scorpion = {
    name: "scorpion",
    age: 31,
    hp: 100,
    damage: 15,
    skilldamage: 25,
    live: true,
    attack: function(target){
        target.hp = target.hp -this.damage;
        if (target.hp <= 0){
            target.live = false;
            console.log(this.name,"winner");
        }
    },
    skillattack: function(target){
        target.hp = target.hp - this.skilldamage;
        if(target.hp <= 0);
            target.live = false;
            console.log(this.name,"winner")
    }
};
const rainden = {
    name:"rainden",
    age:61,
    hp:100,
    damage:20,
    skilldamage:20,
    live:true,
    attack:function (target){
        target.hp = target.hp - this.damage;
        if(target.hp <= 0){
            target.live =false;
            console.log(this.name,"winner2");
        }
    },
    skillattack:function (target){
        target.hp = target.hp - this.skilldamage;
        if(target.hp <= 0){
            target.live =false;
            console.log(this.name,"winner2");
        }
    }
};

rainden.attack(scorpion);
scorpion.skillattack(rainden);
rainden.skillattack(scorpion);
scorpion.attack(rainden);
scorpion.attack(rainden);
rainden.skillattack(scorpion);
scorpion.skillattack(rainden);


console.log(scorpion);
console.log(rainden);