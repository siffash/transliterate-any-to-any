import { useEffect, useState } from "react";

const getHeight = () => window.visualViewport?.height ?? window.innerHeight;

/**
 * The height of the visible part of the page, which shrinks while the
 * on-screen keyboard is open: on iOS the whole web view is resized, while
 * Android's WebView (since Chromium 139) only resizes the visual viewport, so
 * a layout sized to the screen would end up behind the keyboard.
 */
export function useVisualViewportHeight() {
  const [height, setHeight] = useState(getHeight);

  useEffect(() => {
    const viewport = window.visualViewport;
    if (!viewport) return;
    const onResize = () => {
      setHeight(getHeight());
      // The page never scrolls, but the WebView may have scrolled it to reveal
      // the focused field before the layout shrank around it
      window.scrollTo(0, 0);
    };
    viewport.addEventListener("resize", onResize);
    return () => viewport.removeEventListener("resize", onResize);
  }, []);

  return height;
}
