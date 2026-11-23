import { Text } from "types";

export const plHu = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { plLatnRules } = await import("data/pl/pl-latn.rules");
  const { latnHuRules } = await import("data/latn/latn-hu.rules");

  return convertText(text, plLatnRules + latnHuRules);
};
