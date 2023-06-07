import React, { useState, useEffect} from 'react';
import { UserCard } from '../components/UserCard';

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Home.css";
import disney from '../public/disney.jpg';


function Home({userList, userFilteredList, setUserFilteredList}) {


  function handleChange(e) {
    const value = e.target.value;
    const regex = new RegExp(value, 'gi');
    const filtered = userList.filter((user) => {
      return user.name.match(regex);
    });
    setUserFilteredList(filtered);
    // console.log(UserFilteredList)
  }

  return (
    <div className='Body'>
      
      <div className='UserInput'>
        <InputGroup onChange={handleChange}  >
        <h1 className='InputGrouText'>Search Disney Characters:</h1>
        <input
          className='FormControl text-black'
          //placeholder="Search"
          //aria-label="search"
          //aria-describedby="basic-addon1"
          />
        </InputGroup>
      </div>
      
      <Container >
        <Row md={4}>
          {userFilteredList.map((user, idx) => (
            <Col key={idx} className="mt-4" md="4" >
              <UserCard
                userFilteredList={userFilteredList}
                key={idx}
                name={user.name}
                url={user.url}
                id={user._id}
              />
            </Col>
          ))}
        </Row>
      </Container>
      
      
    </div>
  );
}

export { Home };