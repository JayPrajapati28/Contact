import React from "react";
import Avatar from "./Avatar";
import Datails from "./Datails";
function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <Avatar img={props.img} />
      </div>
      <div className="bottom">
        <Datails detailinfo={props.tel} />
        <Datails detailinfo={props.email} />
      </div>
    </div>
  );
}

export default Card;
