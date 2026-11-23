import { Text } from "types";

export const kkSv = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { kkLatnJeRules } = await import("data/kk/kk-latn_je.rules");
  const { kkLatnRules } = await import("data/kk/kk-latn.rules");
  const { latnDzjRules } = await import("data/latn/latn_dzj.rules");
  const { latnSvRules } = await import("data/latn/latn-sv.rules");

  return convertText(text, kkLatnJeRules + kkLatnRules + latnDzjRules + latnSvRules);
};
