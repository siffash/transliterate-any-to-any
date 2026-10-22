declare module "phonemize/en-g2p" {
  export class EnglishG2P {
    predict(word: string, language?: string, pos?: string): string | null;
  }
}
