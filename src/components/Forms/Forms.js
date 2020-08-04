import React from "react";
import "./Form.css";

function Forms() {
  return (
    <div>
      <h1>Please fill out the form completely</h1>
      <form id="formTable">
        <div className="row">
          <label for="name">Name :</label>
          <input type="text" id="name" /> <br />
        </div>

        <div className="row">
          <label for="address">Address :</label>
          <input type="text" id="address" />
        </div>

        <div className="row">
          <label for="tel">Telephone # :</label>
          <input id="tel" type="text" /> <br />
        </div>

        <div className="row">
          <label for="email">Email Add:</label>
          <input type="text" id="email" /> <br />
        </div>
      </form>
    </div>
  );
}

export default Forms;
