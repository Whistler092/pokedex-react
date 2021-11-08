import { Item } from "./item";

export const Items = ({ pokemons }) => {
    console.log('items', pokemons)
    return (
        <> 
            {pokemons.map(poke => {
                console.log('poke', poke);
                return (<Item pokemon={poke}  />)
            })}
        </>
    )
}