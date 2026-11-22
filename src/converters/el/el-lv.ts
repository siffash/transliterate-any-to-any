import { Text } from "types";

export const elLv = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { elLatnIoRules } = await import("data/el/el-latn_io.rules");
  const { elLatnRules } = await import("data/el/el-latn.rules");
  const { latnLvRules } = await import("data/latn/latn-lv.rules");
  const { elLatnNtRules } = await import("data/el/el-latn_nt.rules");

  const transliterator = RBT.fromRules(elLatnIoRules + elLatnNtRules + elLatnRules + latnLvRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
