import React, { createContext, useContext, useState } from "react";
import sampleMetadata from "../data/sampleMetadata.json";

const FlowContext = createContext();

export const FlowProvider = ({ children }) => {
  const [nodes, setNodes] = useState(sampleMetadata.nodes);
  const [edges, setEdges] = useState(sampleMetadata.edges);

  const addNode = (node) => setNodes((prev) => [...prev, node]);
  const addEdge = (edge) => setEdges((prev) => [...prev, edge]);
  const updateNode = (id, updates) =>
    setNodes((prev) => prev.map((n) => (n.id === id ? { ...n, ...updates } : n)));
  const deleteNode = (id) => setNodes((prev) => prev.filter((n) => n.id !== id));
  const deleteEdge = (id) => setEdges((prev) => prev.filter((e) => e.id !== id));

  return (
    <FlowContext.Provider
      value={{ nodes, edges, addNode, addEdge, updateNode, deleteNode, deleteEdge }}
    >
      {children}
    </FlowContext.Provider>
  );
};

export const useFlow = () => useContext(FlowContext);
