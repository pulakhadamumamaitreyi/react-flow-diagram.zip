import React from "react";
import ReactFlow, { Background, Controls, MiniMap } from "reactflow";
import "reactflow/dist/style.css";
import { useFlow } from "../context/FlowContext";

export default function DiagramFlow() {
  const { nodes, edges } = useFlow();

  return (
    <div className="flow-area">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        fitView
        style={{ background: "#fafafa" }}
      >
        <MiniMap />
        <Controls />
        <Background />
      </ReactFlow>
    </div>
  );
}
