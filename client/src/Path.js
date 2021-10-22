import React from "react";
import "./path.css";

function Path(props) {
  return (
    <div className="container">
      <div className="row">
            <div className={props.side}>
              <div className="icon">
                <img src={props.img} alt="Logo" />
              </div>
            
            <div className="content">
              <h4>{props.title}</h4>
              <p>{props.data}</p>
            </div>
            </div>
      </div>
    </div>
  );
}

export default Path;
