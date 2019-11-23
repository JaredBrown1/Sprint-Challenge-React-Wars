import React, { useState, useEffect } from "react";
import axios from "axios";
import SwCard from "./swCards";
import { Container, Row } from "reactstrap";

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
            <div>
              <div class="row">
                <div class="col">
                  <SwCard
                    character={item.name}
                    howTall={item.height}
                    weight={item.mass}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </Row>
    </Container>
  );
}
