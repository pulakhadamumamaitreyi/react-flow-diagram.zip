import React, { useState } from "react";
import { useFlow } from "../context/FlowContext";
import MetadataForm from "./MetadataForm";

export default function Sidebar() {
  const { nodes, edges, deleteNode, deleteEdge } = useFlow();
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="sidebar">
      <h3>Diagram Metadata</h3>
      <button onClick={() => setShowForm(!showForm)}>
        {showForm ? "Hide Form" : "Add Node / Edge"}
      </button>
      {showForm && <MetadataForm />}

      <h4>Nodes</h4>
      <ul>
        {nodes.map((n) => (
          <li key={n.id}>
            {n.data.label} <button onClick={() => deleteNode(n.id)}>❌</button>
          </li>
        ))}
      </ul>

      <h4>Edges</h4>
      <ul>
        {edges.map((e) => (
          <li key={e.id}>
            {e.source} → {e.target}{" "}
            <button onClick={() => deleteEdge(e.id)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
