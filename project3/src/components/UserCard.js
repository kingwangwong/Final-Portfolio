import React, { useEffect, useState, useContext } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { FavoritesContext } from './FavoritesProvider';
import Col from "react-bootstrap/Col";


function UserCard({ id, url, name, userFilteredList }) {

  const { addFavorite, removeFavorite, isFavorite } = useContext(FavoritesContext);

  const [user, setUser] = useState(null);

  const fetchUser = async () => {
    // render the first page of 50 characters (array of id, name, image, url)
    const res = await fetch(url);
    const data = await res.json();
    setUser(data);
    console.log(user)
  };

  useEffect(() => {
    fetchUser();
  }, [userFilteredList]);

  console.log(user)

  return (
    <>
      {user ? (
            <div className="card mb-3 w-100 h-100 indiv-card d-flex" >
                <div className="row g-0">
                    <div className="col-md-6 my-auto">
                      <img src={`${user.imageUrl}`} className="img-fluid rounded-start pt-3 ps-2" alt="disney characters"/>
                    </div>
                    <div className="col-md-6 my-auto">
                      <div className="card-body">
                        <Link to={`/characters/${url.substring(37)}`} style={{color: "black"}}>
                          <h5 className="card-title">{user.name}</h5>
                        </Link>
                      </div>
                    </div>
                </div>
              <div className="d-flex justify-content-center mt-3">
                {isFavorite(name) ? (
                  <Button onClick={() => removeFavorite(name)} variant="danger" >
                    Remove from Favorites
                  </Button>
                ) : (
                  <Button onClick={() => addFavorite({ name, url })}>
                    Add to Favorites
                  </Button>
                )}
              </div>
            </div>
      ) : (
        ""
      )}
    </>
  );
}

export { UserCard };