import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

// createRoot(document.getElementById("root")!).render(
//   <StrictMode>
//     <App  auth={1}/>
//   </StrictMode>
// );

const palette = document.querySelectorAll(".pickpalette-component");
palette.forEach((div) =>{
  createRoot(div).render(
    <StrictMode>
      <App auth={parseInt((div as HTMLDivElement).dataset.auth  as string)}/>
    </StrictMode>
  )
}
);
