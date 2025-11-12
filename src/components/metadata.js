import React, { useState } from "react";
import { useFlow } from "../context/FlowContext";

export default function MetadataForm() {
  const { addNode, addEdge } = useFlow();
  const [type, setType] = useState("node");
  const [data, setData] = useState({ id: "", label: "", source: "", target: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (type === "node") {
      addNode({ id: data.id, data: { label: data.label }, position: { x: 100, y: 100 } });
    } else {
      addEdge({ id: data.id, source: data.source, target: data.target });
    }
    setData({ id: "", label: "", source: "", target: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Type:
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="node">Node</option>
          <option value="edge">Edge</option>
        </select>
      </label>

      <br />
      <input
        placeholder="ID"
        value={data.id}
        onChange={(e) => setData({ ...data, id: e.target.value })}
        required
      />
      {type === "node" ? (
        <input
          placeholder="Label"
          value={data.label}
          onChange={(e) => setData({ ...data, label: e.target.value })}
          required
        />
      ) : (
        <>
          <input
            placeholder="Source Node ID"
            value={data.source}
            onChange={(e) => setData({ ...data, source: e.target.value })}
            required
          />
          <input
            placeholder="Target Node ID"
            value={data.target}
            onChange={(e) => setData({ ...data, target: e.target.value })}
            required
          />
        </>
      )}

      <button type="submit">Add</button>
    </form>
  );
}
