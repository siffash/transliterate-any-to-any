import { describe, expect, it } from "vitest";
import { transliterate } from "transliterate";
import { languages, scripts, supportedLanguages } from "helpers/constants";
import { confirmLanguageByScript } from "helpers/confirmLanguageByScript";
import { settings } from "helpers/rbt-distributor";
import { examples } from "./examples";

describe("transliterate", () => {
  for (const from of supportedLanguages) {
    for (const to of supportedLanguages.filter(l => l !== from)) {
      it(`from ${languages[from].name} to ${languages[to].name}`, async () => {
        const example = examples[from];
        const transliterated = await transliterate(example, { from, to });

        // Check if output is generated without errors
        expect(transliterated).toBeTypeOf("string");

        // Check if output is in the correct script
        const outputScriptConfirmed = confirmLanguageByScript(to, transliterated);
        expect(outputScriptConfirmed).toBe(true);

        // Check if output has correct cases (skip Georgian because usually it doesn't have cases, yet Unicode contains Georgian uppercase letters)
        const { cases } = scripts[languages[to].script];
        if (to !== "ka") {
          if (cases) {
            const hasBothCases = /\p{Ll}/u.test(transliterated) && /\p{Lu}/u.test(transliterated);
            expect(hasBothCases).toBe(true);
          } else {
            const hasCaselessLetters =
              /\p{L}/u.test(transliterated) && !/[\p{Ll}\p{Lu}]/u.test(transliterated);
            expect(hasCaselessLetters).toBe(true);
          }
        }

        // Check if the output is the same if we pass each word separately in an array
        const exampleArray = example.split(", ");
        const transliteratedArray = transliterated.split(", ");
        const transliteratedArrayResult = await transliterate(exampleArray, { from, to });
        expect(transliteratedArrayResult).toEqual(transliteratedArray);

        // Check the JS implementation of ICU RBT
        settings.JS_IMPLEMENTATION = true;
        const transliteratedJS = await transliterate(example, { from, to });
        expect(transliteratedJS).toEqual(transliterated);
        const transliteratedJSArrayResult = await transliterate(exampleArray, { from, to });
        expect(transliteratedJSArrayResult).toEqual(transliteratedArrayResult);
        settings.JS_IMPLEMENTATION = false;
      });
    }
  }
});
