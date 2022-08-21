import "./index.css";
import React from "react";
import { useState } from "react";

export function DaoSetup({ setup }) {
  const [proposal, setProposal] = useState("");
  const [wager, setWager] = useState("");
  const [deadline, setDeadline] = useState("");
  const [beneficiary, setBeneficiary] = useState();

  return (
    <div
      className="section"
      style={{ display: "flex", flexDirection: "column" }}
    >
      {/* <textarea className="textarea" value={info} /> */}
      <h5>What is your proposal</h5>
      <textarea
        className="textarea"
        onChange={(e) => setProposal(e.target.value)}
      />

      <h6>Set wager</h6>
      <input type={"text"} onChange={(e) => setWager(e.target.value)} />

      <h6>Set deadline</h6>
      <input type={"number"} onChange={(e) => setDeadline(e.target.value)} />

      <h6>Add beneficiary</h6>
      <input type={"text"} onChange={(e) => setBeneficiary(e.target.value)} />

      <button
        className="button"
        onClick={() => setup(proposal, wager, deadline, beneficiary)}
      >
        Setup DAO
      </button>
    </div>
  );
}
