declare module "kuroshiro" {
  export default class Kuroshiro {
    constructor();
    init(analyzer: unknown): Promise<void>;
    convert(text: string, options: { to: "hiragana" | "katakana" | "romaji" }): Promise<string>;
  }
}
