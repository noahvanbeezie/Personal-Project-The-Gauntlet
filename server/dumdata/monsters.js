// Current Classes: Goblin, Beast, Spectre, Human,

// Current Attack Types: Slash, Blunt, Fire, Ice, Holy, Arcane, Poison, Heal, Block, Dark,

// Attack Types Used: Slash: 4 , Blunt: 1 , Fire: 2 , Ice: 1 , Holy: 2 , Arcane: 1 , Poison: 1 , Heal: 1 , Block: 1 , Dark: 1 ,

// Weaknesses: Slash: 3 , Blunt: 1 , Fire: 2, Ice: 0, Holy: 1, Arcane: 1, Poison: 3,  Dark: 0,

// Resistances: Slash: 2 , Blunt: 0 , Fire: 0, Ice: 3, Holy: 0, Arcane: 5, Poison: 1,  Dark: 0,


module.exports = [
    {
        name:'Goblin Fisher',
        class:'Goblin',
        health:8,
        weaknesses:'Slash',
        resistances:'Ice',
        attack1name:'Kick',
        attack1damage:3,
        attack2name:'Punch',
        attack2damage:3,
        xpReward:3,
        scoreReward:20,
    },
    //Example Setup for multiple Weaknesses later 
    // monsWeak = {slash,blunt}
    // findIndex()
        // found = monsWeak.forIndex(type => {
            // if(found !==-1){

            
    //     if(type === mons.Weak){


    //     }else if(type === mons.strength){

    //     }else{

    //     }
    // })
         // }else{
            //     null
     // }
    {
        name:'Goblin Archer',
        class:'Goblin',
        health:6,
        weaknesses:'Slash',
        resistances:'Ice',
        attack1name:'Fragile Arrow',
        attack1damage:4,
        attack2name:'Punch',
        attack2damage:3,
        xpReward:3,
        scoreReward:25,
    },
    {
        name:'Goblin Warrior',
        class:'Goblin',
        health:20,
        weaknesses:'Blunt',
        resistances:'Slash',
        attack1name:'Shield-Bash',
        attack1damage:3,
        attack2name:'Headbutt',
        attack2damage:3,
        xpReward:8,
        scoreReward:50,
    },
    {
        name:'Wolf',
        class:'Beast',
        health:15,
        weaknesses:'Fire',
        resistances:'Ice',
        attack1name:'Bite',
        attack1damage:3,
        attack2name:'Claw',
        attack2damage:3,
        xpReward:3,
        scoreReward:25,
    },
    {
        name:'Spider',
        class:'Beast',
        health:12,
        weaknesses:'Fire',
        resistances:'Poison',
        attack1name:'Bite',
        attack1damage:2,
        attack2name:'Spit Poison',
        attack2damage:4,
        xpReward:5,
        scoreReward:40,
    },
    {
        name:'Tiger',
        class:'Beast',
        health:20,
        weaknesses:'Slash',
        resistances:'Arcane',
        attack1name:'Death Hug',
        attack1damage:6,
        attack2name:'Chomp',
        attack2damage:4,
        xpReward:10,
        scoreReward:80,
    },
    {
        name:'Ghost',
        class:'Spectre',
        health:15,
        weaknesses:'Holy',
        resistances:'Arcane',
        attack1name:'Curse',
        attack1damage:3,
        attack2name:'Possessed-Dagger',
        attack2damage:4,
        xpReward:4,
        scoreReward:40,
    },
    {
        name:'Possessed Armor',
        class:'Spectre',
        health:25,
        weaknesses:'Arcane',
        resistances:'Slash',
        attack1name:'Shield-Bash',
        attack1damage:3,
        attack2name:'Decapitate',
        attack2damage:5,
        xpReward:12,
        scoreReward:120,
    },
    {
        name:'Bandit Looter',
        class:'Human',
        health:15,
        weaknesses:'Poison',
        resistances:'Arcane',
        attack1name:'Shank',
        attack1damage:3,
        attack2name:'Upper-Cut',
        attack2damage:4,
        xpReward:3,
        scoreReward:25,
    },
    {
        name:'Bandit Ravager',
        class:'Human',
        health:18,
        weaknesses:'Poison',
        resistances:'Arcane',
        attack1name:'Kidney Punch',
        attack1damage:4,
        attack2name:'R.K.O.',
        attack2damage:8,
        xpReward:10,
        scoreReward:65,
    },
    {
        name:'Bandit Archer',
        class:'Human',
        health:12,
        weaknesses:'Poison',
        resistances:'Arcane',
        attack1name:'Fire Arrow',
        attack1damage:4,
        attack2name:'Kick',
        attack2damage:3,
        xpReward:4,
        scoreReward:35,
    },
    // {
    //     name:'',
    //     class:'',
    //     health:0,
    //     weaknesses:'',
    //     resistances:'',
    //     attack1name:'',
    //     attack1damage:0,
    //     attack2name:'',
    //     attack2damage:0,
    //     xpReward:0,
    //     scoreReward:0,
    // },
   
]