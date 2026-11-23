import { Text } from "types";

export const ltSv = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ltLatnRules } = await import("data/lt/lt-latn.rules");
  const { latnSvRules } = await import("data/latn/latn-sv.rules");

  return convertText(text, ltLatnRules + latnSvRules);
};
