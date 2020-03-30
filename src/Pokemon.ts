export class Pokemon {
    name: string;
    speed: number;

    constructor(name: string, speed: number){
        this.name = name;
        this.speed = speed;
    }
}

export function getStartingPokemon(pkmnA: Pokemon, pkmnB: Pokemon) {
    if(pkmnA.speed > pkmnB.speed)
        return pkmnA
    else if(pkmnA.speed < pkmnB.speed)
        return pkmnB
    else
        return (Math.random() >= 0.5) ? pkmnA : pkmnB;
}