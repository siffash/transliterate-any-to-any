import { Text } from "types";

export const plRu = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { plLatnRules } = await import("data/pl/pl-latn.rules");
  const { plLatnCyrlRules } = await import("data/pl/pl-latn_cyrl.rules");
  const { plLatnSoftRules } = await import("data/pl/pl-latn_soft.rules");
  const { plLatnRuRules } = await import("data/pl/pl-latn_ru.rules");
  const { latnRuRules } = await import("data/latn/latn-ru.rules");

  return convertText(
    text,
    plLatnCyrlRules + plLatnSoftRules + plLatnRules + plLatnRuRules + latnRuRules,
  );
};
