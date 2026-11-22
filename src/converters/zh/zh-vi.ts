import { Text } from "types";

export const zhVi = async (text: Text) => {
  const OpenCC = await import("opencc-js");
  const { zhPinyinArray } = await import("helpers/zhPinyin");
  const { getHanviet } = await import("hanviet-pinyin-words");
  const { ZH_VI_MAP, ZH_VI_WORDS } = await import("data/zh/zh-vi.map");
  const { ZH_VI_PINYIN } = await import("data/zh/zh-vi_pinyin.map");

  const converter = OpenCC.Converter({ from: "cn", to: "t" });

  const placeTone = (syllable: string) =>
    syllable
      .normalize("NFD")
      .replace(
        /(?<!q)(o[ae]|uy)([\u0300\u0301\u0303\u0309\u0323])$/i,
        (_, vowels: string, tone: string) => vowels[0] + tone + vowels[1],
      )
      .normalize("NFC");

  const convert = (text: string) => {
    const traditionalText = converter(text).replace(/[０-９]/g, digit =>
      String(digit.charCodeAt(0) - 0xff10),
    );

    const chineseRegex = /[\u3400-\u4dbf\u4e00-\u9fff]+/g;

    let result = "";
    let lastIndex = 0;
    let match;

    while ((match = chineseRegex.exec(traditionalText)) !== null) {
      const preceding = traditionalText.substring(lastIndex, match.index);
      result += preceding;

      if (result.length > 0 && /[\p{L}\p{N}]$/u.test(result)) {
        result += " ";
      }

      const chunk = match[0];

      const pyArray = zhPinyinArray(chunk, "num");

      const chunkHanViet: string[] = [];

      for (let i = 0; i < chunk.length; i++) {
        const word = Object.keys(ZH_VI_WORDS).find(word => chunk.startsWith(word, i));
        if (word) {
          chunkHanViet.push(...ZH_VI_WORDS[word]);
          i += word.length - 1;
          continue;
        }

        const char = chunk[i];
        let py = pyArray[i];

        py = py.replace(/0$/, "5").replace("ü", "u:");

        if (ZH_VI_MAP[char]) {
          chunkHanViet.push(ZH_VI_MAP[char]);
          continue;
        }

        try {
          let hvResult = getHanviet(char, [py]);

          if (hvResult === "_" || !hvResult) {
            const pyNoTone = py.replace(/[0-9]/g, "");
            hvResult = getHanviet(char, [pyNoTone]);
          }

          for (const tone of "1234") {
            if (hvResult && hvResult !== "_") break;
            hvResult = getHanviet(char, [py.replace(/[0-9]$/, "") + tone]);
          }

          const primaryHv = hvResult ? hvResult.split(",")[0].split("|")[0].trim() : "_";

          chunkHanViet.push(primaryHv !== "_" ? primaryHv : (ZH_VI_PINYIN[py] ?? char));
        } catch (e) {
          console.error(e);
          chunkHanViet.push(char);
        }
      }

      const titleCasedChunk = chunkHanViet.map(word => {
        if (!word) return word;
        return placeTone(word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
      });

      result += titleCasedChunk.join(" ");
      lastIndex = chineseRegex.lastIndex;
    }

    const remainder = traditionalText.substring(lastIndex);
    if (
      remainder.length > 0 &&
      /^[\p{L}\p{N}]/u.test(remainder) &&
      result.length > 0 &&
      !result.endsWith(" ")
    ) {
      result += " ";
    }
    result += remainder;

    result = result
      .replace(/\s+/g, " ")
      .replace(/\s+([.,!?;:])/g, "$1")
      .trim();

    return text.match(/^\s*/)![0] + result + text.match(/\s*$/)![0];
  };

  if (typeof text === "string") {
    return convert(text);
  } else {
    return text.map(text => convert(text));
  }
};
