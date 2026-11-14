import { describe, expect, it } from "vitest";
import { transliterate } from "../src/transliterate";
import { spellingAffects } from "../src/helpers/establishedSpelling";
import { Language, Spelling } from "../src/types";

describe("established spelling", () => {
  it.each([
    ["成都", "zh", "de"],
    ["서울", "ko", "fr"],
    ["Αθήνα", "el", "es"],
    ["Москва", "ru", "pt"],
    ["تهران", "fa", "it"],
  ] as const)("%s (%s → %s) uses the English romanization", async (text, from, to) => {
    const english = await transliterate(text, { from, to: "en" });
    expect(await transliterate(text, { from, to, spelling: "established" })).toBe(english);
  });

  it.each([
    ["Челябинск", "ru", "de"],
    ["成都", "zh", "vi"],
    ["Αθήνα", "el", "hu"],
    ["東京", "ja", "lv"],
  ] as const)("%s (%s → %s) uses the target's own spelling", async (text, from, to) => {
    const own = await transliterate(text, { from, to });
    expect(await transliterate(text, { from, to, spelling: "established" })).toBe(own);
  });

  it.each([
    ["Bordeaux", "fr", "de"],
    ["Łódź", "pl", "en"],
    [["Stuttgart", "D‘Angelo"], "de", "it"],
  ] as const)("%s (%s → %s) is kept unchanged", async (text, from, to) => {
    expect(await transliterate(text, { from, to, spelling: "established" })).toEqual(text);
  });

  it.each([
    ["Bordeaux", "fr", "lt"],
    ["Stuttgart", "de", "sq"],
  ] as const)("%s (%s → %s) is re-spelled", async (text, from, to) => {
    const own = await transliterate(text, { from, to });
    expect(own).not.toBe(text);
    expect(await transliterate(text, { from, to, spelling: "established" })).toBe(own);
  });

  it("does not affect non-Latin targets", async () => {
    expect(await transliterate("Bordeaux", { from: "fr", to: "ru", spelling: "established" })).toBe(
      await transliterate("Bordeaux", { from: "fr", to: "ru" }),
    );
  });

  it("keeps the orthographic spelling by default", async () => {
    expect(await transliterate("成都", { from: "zh", to: "de", spelling: "orthographic" })).toBe(
      await transliterate("成都", { from: "zh", to: "de" }),
    );
  });

  it("rejects an unsupported spelling", async () => {
    await expect(
      transliterate("成都", { from: "zh", to: "de", spelling: "native" as Spelling }),
    ).rejects.toThrow("Unsupported spelling: native.");
  });

  it("still validates the source text", async () => {
    await expect(
      transliterate("Москва", { from: "de", to: "fr", spelling: "established" }),
    ).rejects.toThrow("Source text does not match German.");
  });
});

describe("spellingAffects", () => {
  it.each([
    ["zh", "de"],
    ["ru", "pt"],
    ["fr", "de"],
    ["pl", "en"],
    ["he", "sq"],
  ] as const)("%s → %s can change", (from, to) => {
    expect(spellingAffects({ from, to })).toBe(true);
  });

  it.each([
    ["uk", "de"],
    ["ja", "lv"],
    ["fr", "lt"],
    ["de", "sq"],
    ["ru", "en"],
    ["fr", "ru"],
    ["de", "de"],
  ] as const)("%s → %s can't change", (from, to) => {
    expect(spellingAffects({ from, to })).toBe(false);
  });

  it.each([
    ["xx", "de"],
    ["zh", "xx"],
  ])("%s → %s (unsupported) can't change", (from, to) => {
    expect(spellingAffects({ from: from as Language, to: to as Language })).toBe(false);
  });

  // Every pair it rules out gives the same result either way
  it.each([
    ["Харків", "uk", "de"],
    ["東京", "ja", "lv"],
    ["Bordeaux", "fr", "lt"],
    ["Смит", "ru", "en"],
  ] as const)("%s (%s → %s) is the same either way", async (text, from, to) => {
    expect(spellingAffects({ from, to })).toBe(false);
    expect(await transliterate(text, { from, to, spelling: "established" })).toBe(
      await transliterate(text, { from, to }),
    );
  });
});
