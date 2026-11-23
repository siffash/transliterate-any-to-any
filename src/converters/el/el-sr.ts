import { Text } from "types";

export const elSr = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { elLatnGeorgiosRules } = await import("data/el/el-latn_georgios.rules");
  const { elLatnGiRules } = await import("data/el/el-latn_gi.rules");
  const { elLatnIoRules } = await import("data/el/el-latn_io.rules");
  const { elLatnRules } = await import("data/el/el-latn.rules");
  const { latnSrRules } = await import("data/latn/latn-sr.rules");
  const { elLatnNtRules } = await import("data/el/el-latn_nt.rules");
  const { elLatnIaRules } = await import("data/el/el-latn_ia.rules");

  return convertText(
    text,
    elLatnGeorgiosRules +
      elLatnGiRules +
      elLatnIoRules +
      elLatnIaRules +
      elLatnNtRules +
      elLatnRules +
      latnSrRules,
  );
};
