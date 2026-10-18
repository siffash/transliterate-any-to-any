// Renders the app's icon and splash screen sources from the PWA's favicon,
// which `npm run icons:mobile` then turns into every native size with
// @capacitor/assets (see ../../package.json)
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const dir = path.dirname(fileURLToPath(import.meta.url));
const favicon = fs.readFileSync(path.join(dir, "../../public/favicon.svg"), "utf8");

// The favicon is a gold rounded square (32×32) with two arrows on it
const [, arrows] = favicon.match(/<rect[^>]*\/>([\s\S]*)<\/svg>/);
const GOLD = favicon.match(/<rect[^>]*fill="([^"]+)"/)[1];
// The app's background (theme.ts: lightPaper / darkPaper)
const SPLASH_LIGHT = "#FFFFFF";
const SPLASH_DARK = "#1A1822";

const svg = (body, size) =>
  `<svg viewBox="0 0 32 32" width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg">${body}</svg>`;

// Scales the favicon's content around its center
const scaled = (scale, body) =>
  `<g transform="translate(16 16) scale(${scale}) translate(-16 -16)">${body}</g>`;

const render = (fileName, body, size, background) =>
  sharp(Buffer.from(svg(body, size)))
    .flatten(background ? { background } : false)
    .png()
    .toFile(path.join(dir, fileName));

await Promise.all([
  // Without the rounded corners, which iOS and Android launchers add, and
  // with some room around the arrows (also within Android's safe zone, as
  // @capacitor/assets fits the foreground into the visible part of the icon)
  render("icon-only.png", scaled(0.75, arrows), 1024, GOLD),
  render("icon-foreground.png", scaled(0.75, arrows), 1024),
  render("icon-background.png", "", 1024, GOLD),
  // The favicon itself, in the middle of the app's background
  render("splash.png", scaled(0.16, favicon.replace(/<\/?svg[^>]*>/g, "")), 2732, SPLASH_LIGHT),
  render("splash-dark.png", scaled(0.16, favicon.replace(/<\/?svg[^>]*>/g, "")), 2732, SPLASH_DARK),
]);
