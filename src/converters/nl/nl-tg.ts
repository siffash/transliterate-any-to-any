import { Text } from "types";

export const nlTg = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { nlLatnRules } = await import("data/nl/nl-latn.rules");
  const { latnSilentHRules } = await import("data/latn/latn_silent-h.rules");
  const { nlLatnCyrlRules } = await import("data/nl/nl-latn_cyrl.rules");
  const { latnTgRules } = await import("data/latn/latn-tg.rules");

  const transliterator = RBT.fromRules(
    nlLatnRules + latnSilentHRules + nlLatnCyrlRules + latnTgRules,
  );

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
