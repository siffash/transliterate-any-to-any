import { Text } from "types";

export const sqSr = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { sqLatnFinalERules } = await import("data/sq/sq-latn_final-e.rules");
  const { sqLatnRules } = await import("data/sq/sq-latn.rules");
  const { sqLatnDhRules } = await import("data/sq/sq-latn_dh.rules");
  const { latnSrRules } = await import("data/latn/latn-sr.rules");
  const { sqLatnQRules } = await import("data/sq/sq-latn_q.rules");

  return convertText(
    text,
    sqLatnFinalERules + sqLatnRules + sqLatnDhRules + sqLatnQRules + latnSrRules,
  );
};
