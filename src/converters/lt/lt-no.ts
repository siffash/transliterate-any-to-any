import { Text } from "types";

export const ltNo = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ltLatnRules } = await import("data/lt/lt-latn.rules");
  const { latnNoRules } = await import("data/latn/latn-no.rules");

  return convertText(text, ltLatnRules + latnNoRules);
};
