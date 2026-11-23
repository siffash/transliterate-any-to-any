import { Text } from "types";

export const bsSk = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { bsLatnRules } = await import("data/bs/bs-latn.rules");
  const { latnSkRules } = await import("data/latn/latn-sk.rules");

  return convertText(text, bsLatnRules + latnSkRules);
};
