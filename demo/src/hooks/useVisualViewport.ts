import { useEffect, useState } from "react";

const read = () => {
  const viewport = window.visualViewport;
  return {
    height: viewport?.height ?? window.innerHeight,
    offsetTop: viewport?.offsetTop ?? 0,
    // In browsers the on-screen keyboard shrinks only the visual viewport, so
    // it's open when that's much smaller than the page (allowing for zoom)
    keyboardOpen: !!viewport && viewport.height * viewport.scale < window.innerHeight - 150,
  };
};

/**
 * The visible part of the page, which the one-screen layout fills. It shrinks
 * while the on-screen keyboard is open: in the app, iOS resizes the whole web
 * view, while Android's WebView (since Chromium 139) and browsers resize only
 * the visual viewport, so a layout sized to the screen would end up behind the
 * keyboard. Browsers may also pan it down to reveal the focused field (iOS).
 */
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
      // The page never scrolls, but the WebView may have scrolled it to reveal
      // the focused field before the layout shrank around it
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
