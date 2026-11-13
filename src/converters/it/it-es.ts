import { Text } from "types";

export const itEs = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { itLatnRules } = await import("data/it/it-latn.rules");
  const { itLatnYHoldRules } = await import("data/it/it-latn_y-hold.rules");
  const { itLatnYRestoreRules } = await import("data/it/it-latn_y-restore.rules");
  const { latnEsRules } = await import("data/latn/latn-es.rules");
  const { latnEsXRules } = await import("data/latn/latn-es_x.rules");
  const { latnKQuRules } = await import("data/latn/latn_k-qu.rules");

  const transliterator = RBT.fromRules(
    itLatnYHoldRules +
      itLatnRules +
      itLatnYRestoreRules +
      latnEsRules +
      latnEsXRules +
      latnKQuRules,
  );

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
