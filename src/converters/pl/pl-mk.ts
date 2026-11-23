import { Text } from "types";

export const plMk = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { plLatnRules } = await import("data/pl/pl-latn.rules");
  const { latnMkRules } = await import("data/latn/latn-mk.rules");

  return convertText(text, plLatnRules + latnMkRules);
};
