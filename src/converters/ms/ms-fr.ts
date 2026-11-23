import { Text } from "types";

export const msFr = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { msIdLatnRules } = await import("data/latn/ms_id-latn.rules");
  const { latnFrRules } = await import("data/latn/latn-fr.rules");

  return convertText(text, msIdLatnRules + latnFrRules);
};
