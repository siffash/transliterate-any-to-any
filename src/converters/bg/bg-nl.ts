import { Text } from "types";

export const bgNl = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { bgLatnRules } = await import("data/bg/bg-latn.rules");
  const { latnOuHiatusRules } = await import("data/latn/latn_ou-hiatus.rules");
  const { latnDzjRules } = await import("data/latn/latn_dzj.rules");
  const { latnNlRules } = await import("data/latn/latn-nl.rules");
  const { bgLatnIjaRules } = await import("data/bg/bg-latn_ija.rules");
  const { latnJRestoreRules } = await import("data/latn/latn_j-restore.rules");

  return convertText(
    text,
    bgLatnIjaRules +
      bgLatnRules +
      latnOuHiatusRules +
      latnDzjRules +
      latnNlRules +
      latnJRestoreRules,
  );
};
