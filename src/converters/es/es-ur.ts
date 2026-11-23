import { Text } from "types";

export const esUr = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { esIpaRules } = await import("data/es/es-ipa.rules");
  const { esIpaZRules } = await import("data/es/es-ipa_z.rules");
  const { ipaUrRules } = await import("data/ipa/ipa-ur.rules");
  const { ipaUrInitialARules } = await import("data/ipa/ipa-ur_initial-a.rules");
  const { esIpaYRules } = await import("data/es/es-ipa_y.rules");

  return convertText(
    text,
    esIpaZRules + esIpaRules + ipaUrInitialARules + esIpaYRules + ipaUrRules,
  );
};
