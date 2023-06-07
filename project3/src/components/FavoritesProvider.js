import React, { createContext, useState } from 'react';

export const FavoritesContext = createContext();

function FavoritesProvider({children}) {

    const [favorites, setFavorites] = useState([])

    function addFavorite(user) {
        // console.log("hey");
        console.log(user)
        // console.log(favorites)
        setFavorites([...favorites, user])
    }

    function removeFavorite(name) {
        // setFavorites(favorites.filter(pokemon => {
        //     return pokemon.name !== pokemon.name
        // }))
        console.log(name)
        // create a new shallow array where the name that is associated with the card I click, is not part of the new filtered array
        // if fav.name is equal to name, i DO NOT want it in the new filtered array
        setFavorites( favorites.filter(fav => fav.name != name) );

    }

    function isFavorite(name) {
        // to remove a card or to render the remove from favorites button, means there has to be at least one in that new filtered array to remove it so the below filter method needs to determine if the length is more than 0
        return favorites.filter(fav => fav.name == name).length > 0;
      }

    return (
        <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite, isFavorite }} >
            {children}
        </FavoritesContext.Provider>
    )
}

export { FavoritesProvider }