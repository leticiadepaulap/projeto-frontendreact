import React from "react";
import { CardStyle } from "./Style";


function Card(props) {
  return ( 
    <CardStyle>
    <div className="Card">
      <h1>{props.title}</h1>
      <img src = {props.imageUrl} alt = {props.title} />
      <p>{props.value} </p>
     
    </div>
    </CardStyle>
  );
}

export default Card;
