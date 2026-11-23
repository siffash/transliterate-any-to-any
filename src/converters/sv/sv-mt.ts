import { Text } from "types";

export const svMt = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { svLatnRules } = await import("data/sv/sv-latn.rules");
  const { latnMtRules } = await import("data/latn/latn-mt.rules");

  return convertText(text, svLatnRules + latnMtRules);
};
