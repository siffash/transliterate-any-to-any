import { Text } from "types";

export const elPl = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { elLatnGiRules } = await import("data/el/el-latn_gi.rules");
  const { elLatnJiRules } = await import("data/el/el-latn_ji.rules");
  const { elLatnGeRules } = await import("data/el/el-latn_ge.rules");
  const { elLatnIoRules } = await import("data/el/el-latn_io.rules");
  const { elLatnRules } = await import("data/el/el-latn.rules");
  const { latnSingleRules } = await import("data/latn/latn_single.rules");
  const { latnCTsRules } = await import("data/latn/latn_c-ts.rules");
  const { latnPlRules } = await import("data/latn/latn-pl.rules");

  const transliterator = RBT.fromRules(
    elLatnGiRules +
      elLatnJiRules +
      elLatnGeRules +
      elLatnIoRules +
      elLatnRules +
      latnSingleRules +
      latnCTsRules +
      latnPlRules,
  );

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
