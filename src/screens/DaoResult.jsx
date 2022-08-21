import "./index.css";
import React from "react";
import { useState } from "react";

export function DaoResult({ vote }) {
  const yes = localStorage.getItem("Yes");
  const no = localStorage.getItem("No");

  const proposal = localStorage.getItem("Proposal");

  return (
    <div
      className="section"
      style={{ display: "flex", flexDirection: "column" }}
    >
      <h4>DAO voting Result for</h4>

      <p>{proposal}</p>

      <div
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          flex: 1,
        }}
      >
        <h6>Yes: </h6>
        <br />
        <h5>{yes}</h5>

        <h6>No: </h6>
        <br />
        <h5>{no}</h5>
      </div>
    </div>
  );
}
