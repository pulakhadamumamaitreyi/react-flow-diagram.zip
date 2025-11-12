import React from "react";
import DiagramFlow from "./components/DiagramFlow";
import Sidebar from "./components/Sidebar";
import { FlowProvider } from "./context/FlowContext";
import "./App.css";

export default function App() {
  return (
    <FlowProvider>
      <div className="app-container">
        <Sidebar />
        <DiagramFlow />
      </div>
    </FlowProvider>
  );
}
