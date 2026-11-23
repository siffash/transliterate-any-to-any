import { Text } from "types";

export const kkPl = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { kkLatnJeRules } = await import("data/kk/kk-latn_je.rules");
  const { kkLjRules } = await import("data/kk/kk_lj.rules");
  const { kkLatnRules } = await import("data/kk/kk-latn.rules");
  const { kkLatnORules } = await import("data/kk/kk-latn_o.rules");
  const { latnPlLyRules } = await import("data/latn/latn-pl_ly.rules");
  const { latnPlCyrlRules } = await import("data/latn/latn-pl_cyrl.rules");
  const { latnPlLRules } = await import("data/latn/latn-pl_l.rules");
  const { latnPlRules } = await import("data/latn/latn-pl.rules");

  return convertText(
    text,
    kkLatnJeRules +
      kkLjRules +
      kkLatnRules +
      kkLatnORules +
      latnPlLyRules +
      latnPlCyrlRules +
      latnPlLRules +
      latnPlRules,
  );
};
