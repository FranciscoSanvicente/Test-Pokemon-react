import data from '../data/data.json';


export const getPokemonByName = ( name = '' ) => {

    if ( name === '' ) {
        return [];
    }

    name = name.toLocaleLowerCase();
    return data.pokemon( hero => hero.name.toLocaleLowerCase().includes( name )  );

}