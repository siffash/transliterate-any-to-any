import { Text } from "types";

export const elTr = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { elLatnGiRules } = await import("data/el/el-latn_gi.rules");
  const { elLatnJiRules } = await import("data/el/el-latn_ji.rules");
  const { elLatnGeRules } = await import("data/el/el-latn_ge.rules");
  const { elLatnRules } = await import("data/el/el-latn.rules");
  const { latnCChRules } = await import("data/latn/latn_c-ch.rules");
  const { latnTrRules } = await import("data/latn/latn-tr.rules");

  const transliterator = RBT.fromRules(
    elLatnGiRules + elLatnJiRules + elLatnGeRules + elLatnRules + latnCChRules + latnTrRules,
  );

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
