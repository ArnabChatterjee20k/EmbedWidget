import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

const palette = document.querySelectorAll(".pickpalette-component");

palette.forEach((div) => {
  const initialAuth = parseInt((div as HTMLDivElement).dataset.auth as string);

  const root = createRoot(div);
  root.render(
    <StrictMode>
      <App auth={initialAuth} container={div as HTMLDivElement} />
    </StrictMode>
  );
});
