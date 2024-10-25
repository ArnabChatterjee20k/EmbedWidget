import { useEffect, useState } from 'react';

const EmbedTest = () => {
  const [state, setState] = useState(1);

  useEffect(() => {
    // Load external script
    const script = document.createElement('script');
    // script.src = "https://cdn.jsdelivr.net/gh/ArnabChatterjee20k/EmbedWidget@master/dist/bundle.js";
    script.src = "../dist/bundle.js"
    script.type = "module";
    document.body.appendChild(script);

    // Load external stylesheet
    const link = document.createElement('link');
    link.href = "https://cdn.jsdelivr.net/gh/ArnabChatterjee20k/EmbedWidget@master/dist/style.css";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    return () => {
      document.body.removeChild(script);
      document.head.removeChild(link);
    };
  }, [state]);

  // Update `data-auth` attribute whenever `state` changes
  useEffect(() => {
    const componentElement = document.querySelector('.pickpalette-component');
    if (componentElement) {
      componentElement.setAttribute('data-auth', state.toString());
    }
  }, [state]);

  return (
    <>
      <div data-auth={state} className="pickpalette-component">hello</div>
      <button onClick={() => setState(s => s + 1)}>{state}</button>
    </>
  );
};

export default EmbedTest;
