import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { WidgetWrapper } from "./App";

async function fetchPaletteData() {
  try {
    const res = await fetch(
      "https://script.googleusercontent.com/macros/echo?user_content_key=EltFZhx8BqlJWb0nCPiDAO53G5kNQVPS_0IgRA0PymqOZCEKuCWwjoQBRd7lX2PtGRPVLD2N675Q0RfKSVTm36HNFccgmtupOJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMWojr9NvTBuBLhyHCd5hHa_YBVKFkpvxJaAk4fISXk6Q4h8l126QIpe7HaVJzvQSWy346rCnQXkUNAJDTMS8wDYjOy4gqZh8CTyf228iPkfdN0UTObcsn2gXIuFltvcj9x4yNiCfAIY3fcEBJNG8wJQ&lib=Mb5GO0xzony3yuV7njcBq-C7IxZbmL8rn"
    );
    return await res.json();
  } catch (error) {
    console.error("Error fetching palette data:", error);
    return [];
  }
}

// Widget initialization function
const initPaletteWidget = async () => {
  const paletteData = await fetchPaletteData();
  const containers = document.querySelectorAll<HTMLElement>(".pickpalette-component");

  containers.forEach((container) => {
    const root = createRoot(container);
    root.render(
      <StrictMode>
        <WidgetWrapper container={container} data={paletteData} />
      </StrictMode>
    );
  });
};

// Initialize the widget
initPaletteWidget();

// Export for usage in module environments
export { initPaletteWidget };