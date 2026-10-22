import { Text } from "types";

export const plKk = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { plLatnRules } = await import("data/pl/pl-latn.rules");
  const { plLatnCyrlRules } = await import("data/pl/pl-latn_cyrl.rules");
  const { plLatnKkRules } = await import("data/pl/pl-latn_kk.rules");
  const { latnKkRules } = await import("data/latn/latn-kk.rules");

  const transliterator = RBT.fromRules(plLatnCyrlRules + plLatnRules + plLatnKkRules + latnKkRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
