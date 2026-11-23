import { Text } from "types";

export const itHy = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { itLatnRules } = await import("data/it/it-latn.rules");
  const { itLatnSantSpaceRules } = await import("data/it/it-latn_sant-space.rules");
  const { latnHyRules } = await import("data/latn/latn-hy.rules");
  const { hyEvRules } = await import("data/hy/hy_ev.rules");

  return convertText(text, itLatnRules + itLatnSantSpaceRules + latnHyRules + hyEvRules);
};
