import { Text } from "types";

export const slNo = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { slLatnRules } = await import("data/sl/sl-latn.rules");
  const { latnSlavicLjRules } = await import("data/latn/latn_slavic-lj.rules");
  const { latnSlavicNjRules } = await import("data/latn/latn_slavic-nj.rules");
  const { latnNoRules } = await import("data/latn/latn-no.rules");

  return convertText(text, slLatnRules + latnSlavicLjRules + latnSlavicNjRules + latnNoRules);
};
