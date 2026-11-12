import { Text } from "types";

export const elSr = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { elLatnGeorgiosRules } = await import("data/el/el-latn_georgios.rules");
  const { elLatnGiRules } = await import("data/el/el-latn_gi.rules");
  const { elLatnIoRules } = await import("data/el/el-latn_io.rules");
  const { elLatnRules } = await import("data/el/el-latn.rules");
  const { latnSrRules } = await import("data/latn/latn-sr.rules");

  const transliterator = RBT.fromRules(
    elLatnGeorgiosRules + elLatnGiRules + elLatnIoRules + elLatnRules + latnSrRules,
  );

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
