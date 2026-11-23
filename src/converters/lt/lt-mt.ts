import { Text } from "types";

export const ltMt = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ltLatnRules } = await import("data/lt/lt-latn.rules");
  const { latnMtRules } = await import("data/latn/latn-mt.rules");

  return convertText(text, ltLatnRules + latnMtRules);
};
