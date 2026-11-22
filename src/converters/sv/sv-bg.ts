import { Text } from "types";

export const svBg = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { svLatnRules } = await import("data/sv/sv-latn.rules");
  const { latnSilentHRules } = await import("data/latn/latn_silent-h.rules");
  const { latnBgRules } = await import("data/latn/latn-bg.rules");
  const { svLatnCyrlYuRules } = await import("data/sv/sv-latn_cyrl-yu.rules");
  const { svLatnShRules } = await import("data/sv/sv-latn_sh.rules");

  const transliterator = RBT.fromRules(
    svLatnRules + svLatnShRules + svLatnCyrlYuRules + latnSilentHRules + latnBgRules,
  );

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
