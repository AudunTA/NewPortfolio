import React from "react";
//styles
import { Card } from "./Cards.styled";
import { TextWhiteBig, DarkTextBig } from "../../styles/Text.styles";
import { Link } from "react-router-dom";
function Cards({ id, title, desc, src }) {
  console.log(title, src, desc);
  return (
    <Card>
      <Link to={`/Specific/${id}`} className="link">
        <img className="card-img" src={src}></img>
        <div className="card-text">
          <TextWhiteBig>{title}</TextWhiteBig>
          <DarkTextBig>{desc}</DarkTextBig>
        </div>
      </Link>
    </Card>
  );
}

export default Cards;
