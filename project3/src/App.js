import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navigation } from '../src/components/Navigation';
import { Home } from './routes/Home';
import { UserDetails } from './routes/UserDetails';
import { FavCharacters } from './routes/FavCharacters';
import { FavoritesProvider } from './components/FavoritesProvider';


// const maxUsers = 20;
const disneyCharApi = `https://api.disneyapi.dev/characters`;

function App () {

    const [userList, setUserList] = useState([]);
    const [userFilteredList, setUserFilteredList] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
        const res = await fetch(disneyCharApi);
        const data = await res.json();
        setUserList(data.data);
        setUserFilteredList(data.data);
        console.log(userList);
        // console.log(typeof cards);
      }
        fetchData()
          .catch(console.error);
        }, []);

    return (
        <FavoritesProvider>
            <BrowserRouter>
                <div data-testid="app">
                    <Navigation />
                    <Routes>
                        <Route path="/" element={<Home userList={userList} userFilteredList={userFilteredList} setUserFilteredList={setUserFilteredList}/>} />
                        <Route path="/characters/:_id" element={<UserDetails userFilteredList={userFilteredList}/>} />
                        <Route path="/favorites" element={<FavCharacters />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </FavoritesProvider>
    )
}

export { App };