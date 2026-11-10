import { describe, it, expect } from "vitest";
import { detectLanguage } from "../src/helpers/detectLanguage";

describe("detectLanguage", () => {
  it("detects the language of a script used by one language only", () => {
    expect(detectLanguage("თბილისი")).toBe("ka");
    expect(detectLanguage("Երևան")).toBe("hy");
    expect(detectLanguage("Αθήνα")).toBe("el");
    expect(detectLanguage("서울")).toBe("ko");
    expect(detectLanguage("กรุงเทพ")).toBe("th");
    expect(detectLanguage("मुंबई")).toBe("hi");
    expect(detectLanguage("ঢাকা")).toBe("bn");
    expect(detectLanguage("ירושלים")).toBe("he");
  });

  it("falls back to zh for Han only, but detects ja by kana", () => {
    expect(detectLanguage("上海")).toBe("zh");
    expect(detectLanguage("青森")).toBe("zh");
    expect(detectLanguage("みやざき")).toBe("ja");
    expect(detectLanguage("東京タワー")).toBe("ja");
  });

  it("falls back to ar, unless the letters are Persian/Urdu", () => {
    expect(detectLanguage("القاهرة")).toBe("ar");
    expect(detectLanguage("ایران")).toBe("fa");
    expect(detectLanguage("کراچی ٹاؤن")).toBe("ur");
  });

  it("falls back to ru, unless the letters are of another Cyrillic language", () => {
    expect(detectLanguage("Иван")).toBe("ru");
    expect(detectLanguage("Київ")).toBe("uk");
    expect(detectLanguage("Ѝсус")).toBe("bg");
    expect(detectLanguage("Ќустендил")).toBe("mk");
    expect(detectLanguage("Өскемен")).toBe("kk");
    expect(detectLanguage("Ҷиликул")).toBe("tg");
  });

  it("falls back to en, unless the letters are of another Latin language", () => {
    expect(detectLanguage("London")).toBe("en");
    expect(detectLanguage("Müller")).toBe("de");
    expect(detectLanguage("François")).toBe("fr");
    expect(detectLanguage("Bogotá")).toBe("es");
    expect(detectLanguage("Erdoğan")).toBe("tr");
    expect(detectLanguage("Gəncə")).toBe("az");
    expect(detectLanguage("Kragujevac, Čačak")).toBe("sr");
    expect(detectLanguage("Peña")).toBe("es");
    expect(detectLanguage("Łódź")).toBe("pl");
    expect(detectLanguage("Hà Nội")).toBe("vi");
  });

  it("works with arrays of strings", () => {
    expect(detectLanguage(["Київ", "Іван"])).toBe("uk");
    expect(detectLanguage(["上海", "みやざき"])).toBe("ja");
  });

  it("returns undefined when there are no letters", () => {
    expect(detectLanguage("123 - !")).toBeUndefined();
    expect(detectLanguage("")).toBeUndefined();
  });

  it("returns undefined for letters no supported language uses", () => {
    expect(detectLanguage("Ŵ")).toBeUndefined();
  });

  it("throws on mixed scripts or letters of different languages", () => {
    const error = "Source text should be written only in one language.";
    expect(() => detectLanguage("Иван Ivan")).toThrow(error);
    expect(() => detectLanguage("서울 東京")).toThrow(error);
    expect(() => detectLanguage(["Иван", "Ivan"])).toThrow(error);
    expect(() => detectLanguage("Łódź Hà Nội")).toThrow(error);
  });
});
