import React from "react";
import { Card, CardText } from "reactstrap";

const SwCard = props => {
  return (
    <div key={props.character}>
      <Card>
        <strong>{props.character}</strong>
        <CardText>
          Height: {props.howTall}cm, Weight: {props.weight}kg
        </CardText>
      </Card>
    </div>
  );
};

export default SwCard;
