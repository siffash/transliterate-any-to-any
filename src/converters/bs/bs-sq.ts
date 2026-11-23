import { Text } from "types";

export const bsSq = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { bsLatnRules } = await import("data/bs/bs-latn.rules");
  const { latnSlavicLjRules } = await import("data/latn/latn_slavic-lj.rules");
  const { latnSlavicNjRules } = await import("data/latn/latn_slavic-nj.rules");
  const { latnSqRules } = await import("data/latn/latn-sq.rules");
  const { latnSqLjRules } = await import("data/latn/latn-sq_lj.rules");
  const { latnSqErRules } = await import("data/latn/latn-sq_er.rules");

  return convertText(
    text,
    bsLatnRules +
      latnSlavicLjRules +
      latnSlavicNjRules +
      latnSqLjRules +
      latnSqErRules +
      latnSqRules,
  );
};
