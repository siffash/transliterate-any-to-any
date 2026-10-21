import { describe, it, expect, vi } from "vitest";
import { convertWithExceptions } from "../src/helpers/convertWithExceptions";

const brackets = (text: string) => `[${text}]`;

describe("convertWithExceptions", () => {
  it("converts the whole text in one piece when no word is an exception", () => {
    const convert = vi.fn(brackets);
    expect(convertWithExceptions("Moien, wéi geet et?", "lb", () => undefined, convert)).toBe(
      "[Moien, wéi geet et?]",
    );
    expect(convert).toHaveBeenCalledTimes(1);
  });

  it("replaces exception words and converts the text between them in one piece", () => {
    const exception = (word: string) => (word === "Jean" ? "J" : undefined);
    expect(convertWithExceptions("Moien Jean an Anna", "lb", exception, brackets)).toBe(
      "[Moien ]J[ an Anna]",
    );
  });

  it("handles exceptions at the start and the end of the text", () => {
    const exception = (word: string) => (word === "Jean" ? "J" : undefined);
    expect(convertWithExceptions("Jean-Jean", "lb", exception, brackets)).toBe("[]J[-]J[]");
  });

  it("looks a word up behind an elided article and keeps the article with the surrounding text", () => {
    const exception = (word: string) => (word === "Marie" ? "M" : undefined);
    expect(convertWithExceptions("an d’Marie", "lb", exception, brackets)).toBe("[an d’]M[]");
    expect(convertWithExceptions("l'Marie", "lb", exception, brackets)).toBe("[l']M[]");
  });

  it("prefers the whole word to the part behind the apostrophe", () => {
    const exception = (word: string) => ({ "d'Marie": "DM", Marie: "M" })[word];
    expect(convertWithExceptions("d'Marie", "lb", exception, brackets)).toBe("[]DM[]");
  });

  it("converts an empty text", () => {
    expect(convertWithExceptions("", "lb", () => "x", brackets)).toBe("[]");
  });
});
