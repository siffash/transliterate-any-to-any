import { Text } from "types";

export const fiMk = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { fiLatnRules } = await import("data/fi/fi-latn.rules");
  const { latnMkRules } = await import("data/latn/latn-mk.rules");
  const { latnMkVvRules } = await import("data/latn/latn-mk_vv.rules");

  return convertText(text, fiLatnRules + latnMkRules + latnMkVvRules);
};
