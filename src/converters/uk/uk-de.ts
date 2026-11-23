import { Text } from "types";

export const ukDe = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ukLatnRules } = await import("data/uk/uk-latn.rules");
  const { ukLatnJoRules } = await import("data/uk/uk-latn_jo.rules");
  const { latnSeparatorRules } = await import("data/latn/latn_separator.rules");
  const { latnDeCyrlRules } = await import("data/latn/latn-de_cyrl.rules");
  const { latnDeRules } = await import("data/latn/latn-de.rules");
  const { latnDeCyrlRestoreRules } = await import("data/latn/latn-de_cyrl-restore.rules");

  return convertText(
    text,
    ukLatnRules +
      ukLatnJoRules +
      latnSeparatorRules +
      latnDeCyrlRules +
      latnDeRules +
      latnDeCyrlRestoreRules,
  );
};
