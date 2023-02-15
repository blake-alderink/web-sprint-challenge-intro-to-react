// Write your Character component here
import React, { useState, useEffect } from "react";
import styled from "styled-components";

function Character({ character }) {
  return (
    <div>
      <div>
        <h2>{character}</h2>
      </div>
    </div>
  );
}

export default Character;
