import { Text } from "types";

export const elAz = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { elLatnRules } = await import("data/el/el-latn.rules");
  const { latnAzRules } = await import("data/latn/latn-az.rules");
  const { latnAzQRules } = await import("data/latn/latn-az_q.rules");
  const { elLatnGiRules } = await import("data/el/el-latn_gi.rules");
  const { elLatnJiRules } = await import("data/el/el-latn_ji.rules");

  return convertText(
    text,
    elLatnGiRules + elLatnJiRules + elLatnRules + latnAzQRules + latnAzRules,
  );
};
