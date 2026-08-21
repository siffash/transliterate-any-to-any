import { Text } from "types";

export const jaLb = async (text: Text) => {
  const { resolveCjsDefault } = await import("helpers/resolveCjsDefault");
  const Kuroshiro = resolveCjsDefault(await import("kuroshiro"));
  const KuromojiAnalyzer = resolveCjsDefault(await import("kuroshiro-analyzer-kuromoji"));
  const { isNode, isDeno, isBun } = await import("browser-or-node");
  const { getPhonemizeAll } = await import("helpers/getPhonemize");
  const { toIPA } = await getPhonemizeAll();
  const { filterIpa } = await import("helpers/filterIpa");
  const { RBT } = await import("helpers/rbt");
  const { jaIpaRules } = await import("data/ja/ja-ipa.rules");
  const { ipaLbRules } = await import("data/ipa/ipa-lb.rules");
  const { wordSplitter } = await import("helpers/wordSplitter");

  const kuroshiro = new Kuroshiro();
  await kuroshiro.init(
    new KuromojiAnalyzer({
      dictPath:
        isNode || isDeno || isBun ? undefined : "https://cdn.jsdelivr.net/npm/kuromoji@0.1.2/dict/",
    }),
  );
  const transliterator = RBT.fromRules(jaIpaRules + ipaLbRules + "::Title;");
  const exceptions = jaIpaRules.replace(/( ?> ?[^;]+;)|\[|]|\n/g, "");

  const convert = async (text: string) => {
    const ipa = await wordSplitter(text, "ja", async text => {
      const hiragana = await kuroshiro.convert(text, { to: "hiragana" });
      return filterIpa(toIPA(hiragana), hiragana, "ja", exceptions);
    });
    return transliterator.transliterate(ipa);
  };

  if (typeof text === "string") {
    return await convert(text);
  } else {
    return Promise.all(text.map(convert));
  }
};
