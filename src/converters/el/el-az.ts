import { Text } from "types";

export const elAz = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { elLatnRules } = await import("data/el/el-latn.rules");
  const { latnAzRules } = await import("data/latn/latn-az.rules");
  const { latnAzQRules } = await import("data/latn/latn-az_q.rules");
  const { elLatnGiRules } = await import("data/el/el-latn_gi.rules");
  const { elLatnJiRules } = await import("data/el/el-latn_ji.rules");
  const { elLatnGeRules } = await import("data/el/el-latn_ge.rules");

  const transliterator = RBT.fromRules(
    elLatnGiRules + elLatnJiRules + elLatnGeRules + elLatnRules + latnAzQRules + latnAzRules,
  );

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
