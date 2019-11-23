import React, { useState, useEffect } from "react";
import axios from "axios";
import SwCard from "./swCards";
import { Container, Row } from "reactstrap";
import styled from "styled-components";

const Background = styled.div`
  background-color: gray;
  border: solid 3px black;
`;

export default function StarWars() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios
      .get("https://swapi.co/api/people/")
      .then(response => {
        console.log(response.data.results);
        setCharacters(response.data.results);
      })
      .catch(error => {
        console.log("the data was not returned", error);
      });
  }, []);

  return (
    <Container>
      <Row>
        {characters.map(item => {
          //  console.log(item.name)

          console.log(item.mass);
          return (
            <Background>
              <div class="row">
                <div class="col">
                  <SwCard
                    character={item.name}
                    howTall={item.height}
                    weight={item.mass}
                  />
                </div>
              </div>
            </Background>
          );
        })}
      </Row>
    </Container>
  );
}
