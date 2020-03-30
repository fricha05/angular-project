export class Pokemon {
    name: string;
    level: number;
    health: number;
    attack: number;
    defense: number;
    speed: number;
    attackBasePower: number;

    constructor(name: string, level: number, health: number, attack: number, defense: number, speed: number, attackBasePower: number){
        this.name = name;
        this.speed = speed;
        this.attack = attack;
        this.defense = defense;
        this.level = level;
        this.health = health;
        this.attackBasePower = attackBasePower;
    }

    public attackEnnemy(ennemy: Pokemon): void{
        const { defense } = ennemy;
        let damage = Math.floor(Math.floor(Math.floor(2 * this.level / 5 + 2)* this.attack * this.attackBasePower / defense) / 50) + 2
        ennemy.health = ennemy.health - damage;
    }
}

export function getStartingPokemon(pkmnA: Pokemon, pkmnB: Pokemon): Pokemon {
    if(pkmnA.speed > pkmnB.speed)
        return pkmnA
    else if(pkmnA.speed < pkmnB.speed)
        return pkmnB
    else
        return (Math.random() >= 0.5) ? pkmnA : pkmnB;
}