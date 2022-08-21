import { useState } from "react";
import "./index.css";

export function PasteContractInfo({ attach }) {
  const [info, setInfo] = useState("");

  const wager = localStorage.getItem("wager");

  return (
    <div
      className="section"
      style={{ display: "flex", flexDirection: "column" }}
    >
      <h5>Paste Contract Info</h5>
      <textarea
        className="textarea"
        value={`Accept to join the vote by paying ${wager}`}
      />
      <button className="button" onClick={() => attach()}>
        Attach To Contract
      </button>
    </div>
  );
}
