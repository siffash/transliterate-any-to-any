import { Text } from "types";

export const nlBg = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { nlLatnRules } = await import("data/nl/nl-latn.rules");
  const { latnSilentHRules } = await import("data/latn/latn_silent-h.rules");
  const { nlLatnCyrlRules } = await import("data/nl/nl-latn_cyrl.rules");
  const { latnBgRules } = await import("data/latn/latn-bg.rules");
  const { nlCyrlOuRules } = await import("data/nl/nl-cyrl_ou.rules");

  const transliterator = RBT.fromRules(
    nlLatnRules + latnSilentHRules + nlLatnCyrlRules + latnBgRules + nlCyrlOuRules,
  );

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
