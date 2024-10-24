import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

const palette = document.querySelectorAll(".pickpalette-component");
palette.forEach((div) =>{
  createRoot(div).render(
    <StrictMode>
      <App auth={(div as HTMLDivElement)?.dataset.auth || "no present"}/>
    </StrictMode>
  )
}
);
