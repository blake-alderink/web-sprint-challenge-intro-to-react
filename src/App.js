import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Character from "./components/Character";
import axios from "axios";

const CharacterContainer = styled.div`
  background-color: blue;
`;

const App = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios
      .get("https://swapi.dev/api/people/")
      .then((res) => {
        setCharacters(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <CharacterContainer>
        {characters.map((ch) => {
          return <Character character={ch.name} />;
        })}
      </CharacterContainer>
    </div>
  );
};

export default App;
