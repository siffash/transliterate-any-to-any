import { Text } from "types";

export const noRo = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { noLatnRules } = await import("data/no/no-latn.rules");
  const { latnRoRules } = await import("data/latn/latn-ro.rules");

  return convertText(text, noLatnRules + latnRoRules);
};
