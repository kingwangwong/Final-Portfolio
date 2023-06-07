import React, { useContext } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import castle from '../public/castle-disney.png';

import { Link } from 'react-router-dom'
import Badge from 'react-bootstrap/Navbar';
import { FavoritesContext } from './FavoritesProvider';
import './Navigation.css'

function Navigation() {

    const { favorites } = useContext(FavoritesContext);

    return (
        <>
            <Navbar className='Navigation'>
                <Container>
                    <Navbar.Brand className='NavigationText'>
                        <Image src={castle} width="65" className="me-2" />
                        Disney Character Collection
                    </Navbar.Brand>
                    <Nav className='NavigationText'>
                        <Nav.Link ClassName='FormControl' as={Link} to='/'>Disney Characters</Nav.Link>
                        <Nav.Link ClassName='FormControl'  as={Link} to='/favorites'>Favorites</Nav.Link>
                        <Badge>({favorites.length})</Badge>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export { Navigation };