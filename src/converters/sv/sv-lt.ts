import { Text } from "types";

export const svLt = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { svLatnRules } = await import("data/sv/sv-latn.rules");
  const { noSvLatnLtRules } = await import("data/latn/no_sv-latn_lt.rules");
  const { latnLtRules } = await import("data/latn/latn-lt.rules");
  const { latnVvRules } = await import("data/latn/latn_vv.rules");
  const { svLatnBalticPreRules } = await import("data/sv/sv-latn_baltic-pre.rules");
  const { svLatnBalticRules } = await import("data/sv/sv-latn_baltic.rules");

  return convertText(
    text,
    noSvLatnLtRules +
      svLatnBalticPreRules +
      svLatnRules +
      svLatnBalticRules +
      latnLtRules +
      latnVvRules,
  );
};
