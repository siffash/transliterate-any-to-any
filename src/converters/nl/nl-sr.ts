import { Text } from "types";

export const nlSr = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { nlLatnRules } = await import("data/nl/nl-latn.rules");
  const { latnSilentHRules } = await import("data/latn/latn_silent-h.rules");
  const { latnUeRules } = await import("data/latn/latn_ue.rules");
  const { latnSrRules } = await import("data/latn/latn-sr.rules");

  const transliterator = RBT.fromRules(nlLatnRules + latnSilentHRules + latnUeRules + latnSrRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
