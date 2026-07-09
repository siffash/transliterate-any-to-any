declare module "hanviet-pinyin-words" {
  /**
   * Convert Chinese characters to Sino-Vietnamese words according to pinyin
   * @param tradHanzi - Traditional Chinese characters
   * @param pinyinWords - Array of pinyin strings with tone numbers
   * @param firstCharUpperCase - Whether to capitalize the first character (default: false)
   * @returns Sino-Vietnamese pronunciation string
   */
  export function getHanviet(
    tradHanzi: string,
    pinyinWords: string[],
    firstCharUpperCase?: boolean,
  ): string;
}
