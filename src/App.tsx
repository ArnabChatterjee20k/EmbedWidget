import { useEffect, useState } from "react";

interface PaletteProps {
  auth?: number;
  data?: string[][];
  onChange?: (auth: number) => void;
}

export const Palette: React.FC<PaletteProps> = ({ auth = 0, data = [] }) => {
  const [currentAuth, setCurrentAuth] = useState(auth);
  
  useEffect(() => {
    setCurrentAuth(auth);
  }, [auth]);

  const len = data.length;
  const randomPalette = len > 0 ? data[Math.floor(Math.random() * len)] : [];

  return (
    <div className="palette-container">
      <p>Auth: {currentAuth}</p>
      <div className="palette-colors">
        {randomPalette?.map((color, index) => (
          <div
            key={index}
            className="color-box"
            style={{
              background: color,
              width: "60px",
              height: "60px",
              display: "inline-block",
            }}
          />
        ))}
      </div>
    </div>
  );
};

interface WrapperProps {
  container: HTMLElement;
  data: string[][];
}

export const WidgetWrapper: React.FC<WrapperProps> = ({ container, data }) => {
  const [auth, setAuth] = useState(() => 
    parseInt(container.dataset.auth || "0", 10)
  );

  useEffect(() => {
    // Create MutationObserver to watch for attribute changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (
          mutation.type === "attributes" &&
          mutation.attributeName === "data-auth"
        ) {
          const newAuth = parseInt(container.dataset.auth || "0", 10);
          setAuth(newAuth);
        }
      });
    });

    observer.observe(container, { attributes: true });

    return () => observer.disconnect();
  }, [container]);

  return (
    <Palette
      auth={auth}
      data={data}
      onChange={(newAuth) => {
        container.setAttribute("data-auth", newAuth.toString());
      }}
    />
  );
};