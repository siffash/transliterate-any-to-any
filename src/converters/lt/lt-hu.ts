import { Text } from "types";

export const ltHu = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ltLatnRules } = await import("data/lt/lt-latn.rules");
  const { latnHuRules } = await import("data/latn/latn-hu.rules");

  return convertText(text, ltLatnRules + latnHuRules);
};
