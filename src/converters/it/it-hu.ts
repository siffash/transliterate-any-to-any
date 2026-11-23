import { Text } from "types";

export const itHu = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { itLatnRules } = await import("data/it/it-latn.rules");
  const { latnHuRules } = await import("data/latn/latn-hu.rules");

  return convertText(text, itLatnRules + latnHuRules);
};
