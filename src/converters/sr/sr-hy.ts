import { Text } from "types";

export const srHy = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { srLatnRules } = await import("data/sr/sr-latn.rules");
  const { latnHyRules } = await import("data/latn/latn-hy.rules");
  const { latnHyCRules } = await import("data/latn/latn-hy_c.rules");
  const { hyEvRules } = await import("data/hy/hy_ev.rules");

  return convertText(text, srLatnRules + latnHyCRules + latnHyRules + hyEvRules);
};
