import { Text } from "types";

export const zhVi = async (text: Text) => {
  const OpenCC = await import("opencc-js");
  const { pinyin } = await import("pinyin-pro");
  const { getHanviet } = await import("hanviet-pinyin-words");
  const { ZH_VI_MAP } = await import("data/zh/zh-vi.map");

  const converter = OpenCC.Converter({ from: "cn", to: "t" });

  const convert = (text: string) => {
    // 1. Normalize input to Traditional Chinese for accurate dictionary lookups
    const traditionalText = converter(text);

    // 2. Regex to extract continuous blocks of Chinese characters
    const chineseRegex = /[\u4e00-\u9fa5]+/g;

    let result = "";
    let lastIndex = 0;
    let match;

    // 3. Process the string, distinguishing Chinese chunks from other characters
    while ((match = chineseRegex.exec(traditionalText)) !== null) {
      // Append preceding non-Chinese text (spaces, punctuation, English)
      const preceding = traditionalText.substring(lastIndex, match.index);
      result += preceding;

      // Add a visual space boundary if English text collides with Vietnamese syllables
      if (result.length > 0 && /[a-zA-Z0-9]$/.test(result)) {
        result += " ";
      }

      const chunk = match[0];

      // 4. Get the context-aware Pinyin array for the entire chunk
      // `toneType: 'num'` gives us formats like ['zhong1', 'guo2']
      const pyArray = pinyin(chunk, { toneType: "num", type: "array" }) as string[];

      const chunkHanViet: string[] = [];

      // 5. Look up Hán Việt pronunciation for each individual character
      for (let i = 0; i < chunk.length; i++) {
        const char = chunk[i];
        let py = pyArray[i];

        // Fix Tone Discrepancy: pinyin-pro returns '0' for neutral tones,
        // but hanviet-pinyin-words expects '5' (e.g., shang0 -> shang5)
        py = py.replace(/0$/, "5");

        if (ZH_VI_MAP[char]) {
          chunkHanViet.push(ZH_VI_MAP[char]);
          continue;
        }

        try {
          let hvResult = getHanviet(char, [py]);

          // Fallback: If exact pinyin + tone match fails, try stripping the tone
          if (hvResult === "_" || !hvResult) {
            const pyNoTone = py.replace(/[0-9]/g, "");
            hvResult = getHanviet(char, [pyNoTone]);
          }

          // Extract the primary (first) pronunciation for clean output
          const primaryHv = hvResult ? hvResult.split(",")[0].split("|")[0].trim() : "_";

          chunkHanViet.push(primaryHv !== "_" ? primaryHv : char);
        } catch (e) {
          console.error(e);
          chunkHanViet.push(char);
        }
      }

      // Capitalize the first letter of each Hán Việt syllable (Title Case)
      const titleCasedChunk = chunkHanViet.map(word => {
        if (!word) return word;
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      });

      // Join the transliterated words of the chunk
      result += titleCasedChunk.join(" ");
      lastIndex = chineseRegex.lastIndex;
    }

    // 6. Append any trailing non-Chinese text
    const remainder = traditionalText.substring(lastIndex);
    if (
      remainder.length > 0 &&
      /^[a-zA-Z0-9]/.test(remainder) &&
      result.length > 0 &&
      !result.endsWith(" ")
    ) {
      result += " ";
    }
    result += remainder;

    // Clean up any double spaces that might have been introduced
    result = result
      .replace(/\s+/g, " ")
      .replace(/\s+([.,!?;:])/g, "$1")
      .trim();

    return result;
  };

  if (typeof text === "string") {
    return convert(text);
  } else {
    return text.map(text => convert(text));
  }
};
