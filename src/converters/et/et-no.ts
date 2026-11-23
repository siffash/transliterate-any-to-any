import { Text } from "types";

export const etNo = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { etLatnRules } = await import("data/et/et-latn.rules");
  const { latnNoRules } = await import("data/latn/latn-no.rules");
  const { latnIRules } = await import("data/latn/latn_i.rules");

  return convertText(text, etLatnRules + latnIRules + latnNoRules);
};
