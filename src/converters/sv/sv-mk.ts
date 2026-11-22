import { Text } from "types";

export const svMk = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { svLatnRules } = await import("data/sv/sv-latn.rules");
  const { latnSilentHRules } = await import("data/latn/latn_silent-h.rules");
  const { latnMkRules } = await import("data/latn/latn-mk.rules");
  const { svLatnShRules } = await import("data/sv/sv-latn_sh.rules");

  const transliterator = RBT.fromRules(
    svLatnRules + latnSilentHRules + svLatnShRules + latnMkRules,
  );

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
