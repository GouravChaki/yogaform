import React from "react";
import { Link } from "react-router-dom";
import Rendercard from "./Rendercard";
export default function Card(props) {
    
    const givecard=(item)=>{
        return <Rendercard key={props.card.key} item={item} array={props}/>
    }
  return (
    <div className="container mt-5">
      <div className="row row-cols-1 row-cols-md-2 g-4">
        {props.card.map(givecard)}
      </div>
    </div>
  );
}
