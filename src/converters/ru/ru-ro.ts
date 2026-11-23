import { Text } from "types";

export const ruRo = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ruLatnRules } = await import("data/ru/ru-latn.rules");
  const { latnSeparatorRules } = await import("data/latn/latn_separator.rules");
  const { latnIyIiRules } = await import("data/latn/latn_iy-ii.rules");
  const { latnDzRules } = await import("data/latn/latn_dz.rules");
  const { latnRoERules } = await import("data/latn/latn-ro_e.rules");
  const { latnRoRules } = await import("data/latn/latn-ro.rules");
  const { latnRoDjRules } = await import("data/latn/latn-ro_dj.rules");

  return convertText(
    text,
    ruLatnRules +
      latnSeparatorRules +
      latnIyIiRules +
      latnDzRules +
      latnRoERules +
      latnRoDjRules +
      latnRoRules,
  );
};
