import type { FavoritePokemon } from "@interfaces/favorite-pokemon";
import { createSignal, For } from "solid-js";
import FavoritePokemonCard from "./FavoritePokemonCard";

const getLocalStoragePokemons = (): FavoritePokemon[] => {
    const favoritePokemons = JSON.parse(
        localStorage.getItem('favoritePokemons') || '[]'
    );

    return favoritePokemons;
}

export default function FavoritePokemons() {
    const [pokemons, setPokemons] = createSignal(getLocalStoragePokemons());
    console.log(pokemons());
    return (

        <div class="grid gird-cols-2 sm:grid-cols-4">
            <For each={pokemons()}>
                {(pokemon) => <FavoritePokemonCard pokemon={pokemon} />}

            </For>
        </div>
    );

}