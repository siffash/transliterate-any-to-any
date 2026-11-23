import { Text } from "types";

export const ltIt = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ltLatnRules } = await import("data/lt/lt-latn.rules");
  const { latnItRules } = await import("data/latn/latn-it.rules");
  const { latnItIiRules } = await import("data/latn/latn-it_ii.rules");

  return convertText(text, ltLatnRules + latnItRules + latnItIiRules);
};
