import { Text } from "types";

export const huMk = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { huLatnMkRules } = await import("data/hu/hu-latn_mk.rules");
  const { huLatnRules } = await import("data/hu/hu-latn.rules");
  const { huLatnYRules } = await import("data/hu/hu-latn_y.rules");
  const { latnMkRules } = await import("data/latn/latn-mk.rules");
  const { latnMkVvRules } = await import("data/latn/latn-mk_vv.rules");

  return convertText(
    text,
    huLatnMkRules + huLatnRules + huLatnYRules + latnMkRules + latnMkVvRules,
  );
};
