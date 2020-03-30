import { Pokemon, getStartingPokemon } from "./Pokemon"

let salameche = new Pokemon("Salameche", 5, 22, 60, 40, 65, 110);
let bulbizarre = new Pokemon("Bulbizarre", 5, 24, 55, 45, 45, 95);


export function battle(pkmnA: Pokemon, pkmnB:Pokemon): void {
    let firstPkmn = getStartingPokemon(pkmnA, pkmnB);
    let secondPkmn = firstPkmn === pkmnA ? pkmnB : pkmnA;
    let loop = setInterval(() => {
        proceedTurn(firstPkmn, secondPkmn);
        let tmpPkmn = firstPkmn;
        firstPkmn = secondPkmn;
        secondPkmn = tmpPkmn;
        if(firstPkmn.health <= 0){
            console.log(firstPkmn.name + ' has fainted');
            clearInterval(loop);
        }
        else if( secondPkmn.health <= 0){
            console.log(secondPkmn.name + ' has fainted');
            clearInterval(loop);
        }
    }, 2000)
}

export function proceedTurn(pkmnA: Pokemon, pkmnB: Pokemon): void {
    console.log(pkmnA.name + ' has ' + pkmnA.health + ' hp');
    console.log(pkmnB.name + ' has ' + pkmnB.health + ' hp');
    console.log(pkmnA.name + ' attacks ' + pkmnB.name);
    pkmnA.attackEnnemy(pkmnB);
}

battle(salameche, bulbizarre);