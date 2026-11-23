import { Text } from "types";

export const bsFi = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { bsLatnRules } = await import("data/bs/bs-latn.rules");
  const { latnFiRules } = await import("data/latn/latn-fi.rules");

  return convertText(text, bsLatnRules + latnFiRules);
};
