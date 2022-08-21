import "./index.css";
import React from "react";
import { useState } from "react";

export function DaoVote({ vote }) {
  const [reason, setReason] = useState("");
  const [wager, setWager] = useState();
  const [deadline, setDeadline] = useState();
  const proposal = localStorage.getItem("proposal");

  return (
    <div
      className="section"
      style={{ display: "flex", flexDirection: "column" }}
    >
      <input type={"text"} value={proposal} />
      <h5>What is your choice</h5>

      <div
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          flex: 1,
        }}
      >
        <button className="button" onClick={() => vote(1)}>
          No
        </button>
        <button className="button" onClick={() => vote(0)}>
          Yes
        </button>
      </div>
      <h6>what is your reason</h6>
      <input type={"text"} onChange={(e) => setReason(e.target.value)} />
    </div>
  );
}
