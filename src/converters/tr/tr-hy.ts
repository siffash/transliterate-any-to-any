import { Text } from "types";

export const trHy = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { trLatnFrontGhRules } = await import("data/tr/tr-latn_front-gh.rules");
  const { trLatnRules } = await import("data/tr/tr-latn.rules");
  const { latnHyRules } = await import("data/latn/latn-hy.rules");
  const { trLatnHyRules } = await import("data/tr/tr-latn_hy.rules");
  const { hyEvRules } = await import("data/hy/hy_ev.rules");

  return convertText(
    text,
    trLatnFrontGhRules + trLatnRules + trLatnHyRules + latnHyRules + hyEvRules,
  );
};
