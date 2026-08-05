export { transliterate } from "./transliterate";
export { scripts, languages } from "helpers/constants";
export { confirmLanguageByScript } from "helpers/confirmLanguageByScript";
export { type Script, type Language } from "./types";

// *** EXPERIMENTS ***

import { transliterate } from "./transliterate";
import { prettyConvert } from "helpers/prettyConvert";
// import { RBT } from "helpers/rbt";
const test = async () => {
  const { ipaUrRules } = await import("constants/ipa-ur.rules");
  console.log(
    await prettyConvert(
      ipaUrRules,
      "paʁi, ljɔ̃, maʁsɛj, tuluz, bɔʁdo, lil, mɔ̃pəlje, stʁasbuʁ, nɑ̃t, ʁɛn, gʁənɔbl, ʁuɑ̃, tulɔ̃, diʒɔ̃, nim, ɑ̃ʒe, vilyʁban, klɛʁmɔ̃-fɛʁɑ̃, bəsɑ̃sɔ̃, ɔʁleɑ̃, ʒɑ̃ pjɛʁ dypɔ̃, maʁi lwiz maʁtɛ̃, pjɛʁ ɑ̃twan bɛʁnaʁ, sɔfi klɛʁ tɔma, nikɔla fʁɑ̃swa ʁɔbɛʁ, izabɛl an ʁiʃaʁ, ʒyljɛ̃ emil pəti, kamil eliz dyʁɑ̃, ɑ̃twan lwi ləʁwa, ʃaʁlɔt maʁi mɔʁo, maksim ɑ̃ʁi simɔ̃, elɔdi ʒan loʁɑ̃, lyka pɔl miʃɛl, ameli ʁoz gaʁsja, tɔma ʃaʁl david, klɔe ʒyljɛt bɛʁtɛ̃, alɛksɑ̃dʁ ʁəne ʁu, manɔ̃ lysil vɛ̃sɑ̃, gijom ʒak fuʁnje, polin maʁgəʁit mɔʁɛl, l'ɔʁeal, danɔn, miʃəlɛ̃, ʁəno, pøʒo, kaʁfuʁ, oʃɑ̃, dəkatlɔ̃, bwig, ɛʁmɛs, ʃanɛl, kʁistjɑ̃ djɔʁ, tal, safʁɑ̃, alstɔ̃, ɔʁɑ̃ʒ, laktali, vɛ̃si, klaʁɛ̃, kaʁtje",
    ),
  );
  // console.log(RBT.fromRules("a } c > b ;").transliterate("abcd"));
};
test();
