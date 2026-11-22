import { useEffect, useState } from "react";

const read = () => {
  const viewport = window.visualViewport;
  return {
    height: viewport?.height ?? window.innerHeight,
    offsetTop: viewport?.offsetTop ?? 0,
    keyboardOpen: !!viewport && viewport.height * viewport.scale < window.innerHeight - 150,
  };
};

export function useVisualViewport() {
  const [state, setState] = useState(read);

  useEffect(() => {
    const viewport = window.visualViewport;
    if (!viewport) return;
    const update = () => {
      const next = read();
      setState(prev =>
        prev.height === next.height &&
        prev.offsetTop === next.offsetTop &&
        prev.keyboardOpen === next.keyboardOpen
          ? prev
          : next,
      );
    };
    const onResize = () => {
      update();
      window.scrollTo(0, 0);
    };
    viewport.addEventListener("resize", onResize);
    viewport.addEventListener("scroll", update);
    window.addEventListener("resize", update);
    return () => {
      viewport.removeEventListener("resize", onResize);
      viewport.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return state;
}
