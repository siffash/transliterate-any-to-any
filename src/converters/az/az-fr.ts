import { Text } from "types";

export const azFr = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { azLatnRules } = await import("data/az/az-latn.rules");
  const { azLatnARules } = await import("data/az/az-latn_a.rules");
  const { latnGhGRules } = await import("data/latn/latn_gh-g.rules");
  const { latnFrRules } = await import("data/latn/latn-fr.rules");
  const { latnIRules } = await import("data/latn/latn_i.rules");

  return convertText(text, azLatnRules + azLatnARules + latnGhGRules + latnIRules + latnFrRules);
};
