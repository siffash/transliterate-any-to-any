import { Text } from "types";

export const csHr = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { csLatnRules } = await import("data/cs/cs-latn.rules");
  const { csLatnNjRules } = await import("data/cs/cs-latn_nj.rules");
  const { csLatnJeRules } = await import("data/cs/cs-latn_je.rules");
  const { csSkLatnPalatalRules } = await import("data/latn/cs_sk-latn_palatal.rules");
  const { latnHrRules } = await import("data/latn/latn-hr.rules");

  const transliterator = RBT.fromRules(
    csSkLatnPalatalRules + csLatnNjRules + csLatnJeRules + csLatnRules + latnHrRules,
  );

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
