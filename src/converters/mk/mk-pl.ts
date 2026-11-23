import { Text } from "types";

export const mkPl = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { mkLatnPlRules } = await import("data/mk/mk-latn_pl.rules");
  const { mkLatnRules } = await import("data/mk/mk-latn.rules");
  const { latnPlLRules } = await import("data/latn/latn-pl_l.rules");
  const { latnPlRules } = await import("data/latn/latn-pl.rules");

  return convertText(text, mkLatnPlRules + mkLatnRules + latnPlLRules + latnPlRules);
};
