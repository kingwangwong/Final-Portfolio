import React, { useContext } from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { UserCard } from '../components/UserCard';

import { FavoritesContext } from '../components/FavoritesProvider';


function FavCharacters() {

  const { favorites } = useContext(FavoritesContext);
  console.log(favorites)

    return (
        <>
                <Container>
                    <Row md={4}>
                      {favorites.map(fav => (
                        <Col key={fav.name} className="mt-4" md="3" >
                          <UserCard
                            name={fav.name}
                            url={fav.url}
                            id={fav._id}
                          />
                        </Col>
                      ))}
                    </Row>
                </Container>
        </>
    )
}

export { FavCharacters }