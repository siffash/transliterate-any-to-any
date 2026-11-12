import { Text } from "types";

export const mkIt = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { mkAcuteRules } = await import("data/mk/mk_acute.rules");
  const { mkEnRules } = await import("data/mk/mk-en.rules");

  const transliterator = RBT.fromRules(mkAcuteRules + mkEnRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
