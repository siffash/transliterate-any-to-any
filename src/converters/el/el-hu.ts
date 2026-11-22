import { Text } from "types";

export const elHu = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { elLatnIoRules } = await import("data/el/el-latn_io.rules");
  const { elLatnRules } = await import("data/el/el-latn.rules");
  const { latnHuRules } = await import("data/latn/latn-hu.rules");
  const { latnHuXRules } = await import("data/latn/latn-hu_x.rules");
  const { elLatnGiRules } = await import("data/el/el-latn_gi.rules");
  const { elLatnJiRules } = await import("data/el/el-latn_ji.rules");
  const { elLatnGeRules } = await import("data/el/el-latn_ge.rules");

  const transliterator = RBT.fromRules(
    elLatnGiRules +
      elLatnJiRules +
      elLatnGeRules +
      elLatnIoRules +
      elLatnRules +
      latnHuRules +
      latnHuXRules,
  );

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
