import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import Square from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Square />
  </StrictMode>,
);
