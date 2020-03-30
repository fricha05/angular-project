import { Pokemon, getStartingPokemon } from './Pokemon'

describe('Pokemon', () => {
    it('should return Salameche', () => {
        let carapuce = new Pokemon("Carapuce", 43);
        let salameche = new Pokemon("Salameche", 65);
        expect(getStartingPokemon(salameche, carapuce)).toBe(salameche);
    })

    it('should return Pikachu', () => {
        let bulbizarre = new Pokemon("Bulbizarre", 45);
        let pikachu = new Pokemon("Pikachu", 90);
        expect(getStartingPokemon(bulbizarre, pikachu)).toBe(pikachu);
    })  
})