import React, { useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';


function UserDetails() {

    const [user, setUser] = useState(null)

    const params = useParams();

    // add useEffect here ⬇️
    useEffect(() => {
    const fetchSingleUser = async () => {
    const res = await fetch(`https://api.disneyapi.dev/characters/${params._id}`);
    const data = await res.json();
    setUser(data);
  }
    fetchSingleUser()
    //   .catch(console.error);
    }, []);

      // if user state is not(!) true (false aka still initial state of null (which is falsey)), then return "loading..." once api is fetched, this conditonal statement will be false and the other return below will render
    if (!user) {
        return <h2 className="loading" >Loading...</h2>;
      }
      
    return (
        <>
            <div className='d-flex justify-content-evenly align-items-center mt-5 single-view '>
              <div>
                <img src={`${user.imageUrl}`} height={'450'}/>
              </div>
              <div>
                <h1>{user.name}</h1>
                <div id="description" className='d-flex mt-3'>
                  <div className='me-5'>
                    {/* <p><span className='fw-bold'>TV Show(s)</span>: {pokemon.height}</p>
                    <p><span className='fw-bold'>Weight</span>: {pokemon.weight}</p> */}
                    <div><span className='fw-bold'>TV Shows</span>:               
                      <ul>
                        {user.tvShows.length === 0 ? <li>N/A</li> : user.tvShows.map((tvshow, idx) => (
                          <li key={idx}>{tvshow}</li>
                        ))}
                      </ul>
                    </div>
                    <div><span className='fw-bold'>Short Films</span>:               
                        <ul>
                        {user.shortFilms.length === 0 ? <li>N/A</li> : user.shortFilms.map((short, idx) => (
                          <li key={idx}>{short}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div>
                    <div><span className='fw-bold'>Films</span>:               
                        <ul>
                        {user.films.length === 0 ? <li>N/A</li> : user.films.map((film, idx) => (
                          <li key={idx}>{film}</li>
                        ))}
                      </ul>
                    </div>
                    <div><span className='fw-bold'>Video Games</span>:               
                        <ul>
                        {user.videoGames.length === 0 ? <li>N/A</li> : user.videoGames.map((game, idx) => (
                          <li key={idx}>{game}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </>
      )
}

export { UserDetails }