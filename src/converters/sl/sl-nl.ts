import { Text } from "types";

export const slNl = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { slLatnRules } = await import("data/sl/sl-latn.rules");
  const { latnSlavicLjRules } = await import("data/latn/latn_slavic-lj.rules");
  const { latnSlavicNjRules } = await import("data/latn/latn_slavic-nj.rules");
  const { latnNlRules } = await import("data/latn/latn-nl.rules");

  return convertText(text, slLatnRules + latnSlavicLjRules + latnSlavicNjRules + latnNlRules);
};
