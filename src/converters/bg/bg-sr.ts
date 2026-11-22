import { Text } from "types";

export const bgSr = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { bgLatnRules } = await import("data/bg/bg-latn.rules");
  const { latnSrRules } = await import("data/latn/latn-sr.rules");
  const { latnSrVoicingRules } = await import("data/latn/latn-sr_voicing.rules");
  const { bgRRules } = await import("data/bg/bg_r.rules");
  const { bgRAfterRules } = await import("data/bg/bg_r-after.rules");

  const transliterator = RBT.fromRules(
    bgRRules + bgRAfterRules + bgLatnRules + latnSrVoicingRules + latnSrRules,
  );

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
