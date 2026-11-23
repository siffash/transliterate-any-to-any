import { Text } from "types";

export const mkSq = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { mkLatnRules } = await import("data/mk/mk-latn.rules");
  const { latnSqRules } = await import("data/latn/latn-sq.rules");
  const { latnSqErRules } = await import("data/latn/latn-sq_er.rules");
  const { mkLatnSqRules } = await import("data/mk/mk-latn_sq.rules");

  return convertText(text, mkLatnRules + latnSqErRules + mkLatnSqRules + latnSqRules);
};
