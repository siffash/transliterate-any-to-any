const allowedIpaChars = new Set(
  "abcdefghijklmnopqrstuvwxyzâæçêðôõøăčďęħĩŋœťũžơưɐɑɒɓɔɕɖɗɘəɚɛɜɝɟɡɢɣɤɰɥɦɧɨɪɫɭɯɱɲɳɵɹɽɾʀʁʂʃʈʉʊʋʌʎʏʐʑʒʔʕʝʰʱʲʷʼˈ'’ˌ̧̇ːˠˤ˥˧˩̝̟̥̩̪̯͈̃̊̚͡βθχẽɸ",
);

export const filterIpa = (ipa: string): string => {
  return [...ipa].filter(char => !allowedIpaChars.has(char)).join("");
};
