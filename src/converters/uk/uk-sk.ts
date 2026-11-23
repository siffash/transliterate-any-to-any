import { Text } from "types";

export const ukSk = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ukLatnRules } = await import("data/uk/uk-latn.rules");
  const { latnCsSoftRules } = await import("data/latn/latn-cs_soft.rules");
  const { ukLatnSoftLRules } = await import("data/uk/uk-latn_soft-l.rules");
  const { latnSeparatorRules } = await import("data/latn/latn_separator.rules");
  const { latnSkRules } = await import("data/latn/latn-sk.rules");
  const { latnSkCyRules } = await import("data/latn/latn-sk_cy.rules");

  return convertText(
    text,
    ukLatnRules +
      latnCsSoftRules +
      ukLatnSoftLRules +
      latnSeparatorRules +
      latnSkCyRules +
      latnSkRules,
  );
};
