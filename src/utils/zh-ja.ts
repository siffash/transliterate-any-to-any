import { Text } from "types/languages";

export const zhJa = async (text: Text) => {
  const { OpenCC } = (await import("opencc")).default;
  const { default: Kuroshiro } = await import("kuroshiro");
  const { default: KuromojiAnalyzer } = await import("kuroshiro-analyzer-kuromoji");
  const { RBT } = await import("icu-transliterator");
  const { zhJaRules } = await import("constants/zh-ja.rules");

  const s2t = new OpenCC("s2t.json");
  const t2jp = new OpenCC("t2jp.json");

  const convert = async (text: string) => {
    const traditional = await s2t.convertPromise(text);
    const shinjitai = await t2jp.convertPromise(traditional);

    // Convert to Katakana
    let reading = RBT.fromRules(zhJaRules).transliterate(shinjitai);

    // Final safety check: if ICU failed and left Kanji, use Kuroshiro as absolute last resort
    if (/[一-龠々]/.test(reading)) {
      const kuroshiro = new Kuroshiro();
      await kuroshiro.init(new KuromojiAnalyzer());

      reading = await kuroshiro.convert(reading, { to: "katakana" });
    }

    return reading;
  };

  if (typeof text === "string") {
    return await convert(text);
  } else {
    return Promise.all(text.map(convert));
  }
};
