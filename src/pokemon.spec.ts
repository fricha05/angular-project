import { Pokemon, getStartingPokemon } from './Pokemon'

describe('Pokemon Turn', () => {
    it('should return Salameche', () => {
        let carapuce = new Pokemon("Carapuce", 5, 25, 50, 50, 43, 90);
        let salameche = new Pokemon("Salameche", 5, 22, 60, 40, 65, 110);
        expect(getStartingPokemon(salameche, carapuce)).toBe(salameche);
    })

    it('should return Pikachu', () => {
        let bulbizarre = new Pokemon("Bulbizarre", 5, 24, 55, 45, 45, 95);
        let pikachu = new Pokemon("Pikachu", 5, 20, 65, 35, 90, 115);
        expect(getStartingPokemon(bulbizarre, pikachu)).toBe(pikachu);
    })  
})

describe('Pokemon Attack', () => {
    it('salameche health sould be 11', () => {
        let carapuce = new Pokemon("Carapuce", 5, 25, 50, 50, 43, 90);
        let salameche = new Pokemon("Salameche", 5, 22, 60, 40, 65, 110);
        carapuce.attackEnnemy(salameche);
        expect(salameche.health).toBe(11);
    })

    it('bulbizarre health sould be 9', () => {
        let bulbizarre = new Pokemon("Bulbizarre", 5, 24, 55, 45, 45, 95);
        let pikachu = new Pokemon("Pikachu", 5, 20, 65, 35, 90, 115);
        pikachu.attackEnnemy(bulbizarre);
        expect(bulbizarre.health).toBe(9);
    })
})