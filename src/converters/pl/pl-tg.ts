import { Text } from "types";

export const plTg = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { plLatnRules } = await import("data/pl/pl-latn.rules");
  const { plLatnCyrlRules } = await import("data/pl/pl-latn_cyrl.rules");
  const { latnThTRules } = await import("data/latn/latn_th-t.rules");
  const { latnTgRules } = await import("data/latn/latn-tg.rules");

  return convertText(text, plLatnCyrlRules + plLatnRules + latnThTRules + latnTgRules);
};
