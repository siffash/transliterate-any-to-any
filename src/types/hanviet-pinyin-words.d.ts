declare module "hanviet-pinyin-words" {
  export function getHanviet(
    tradHanzi: string,
    pinyinWords: string[],
    firstCharUpperCase?: boolean,
  ): string;
}
