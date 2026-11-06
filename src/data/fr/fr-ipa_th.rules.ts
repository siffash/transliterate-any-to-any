export const frIpaThRules = `
::Null;

ɥ [iɪ] > uj;
[aɑɐeɛəoɔiɪ] { [yʏɥ] } [aɑɐoɔɒ] > ʔuʔ;
[yʏɥ] } [aɑɐoɔɒ] > uʔ;
[aɑɐeɛəoɔiɪ] { [yʏɥ] > ʔu;
[yʏɥ] > u;

::Null;

jj > j;
[bcdfɡklmnpʁstvzʃʒ] { j } [aæʌɑɛeiɪoɒɔuʊyøœɵəɜɐ] > ij;
[^[:L:][:M:]] { i } [aæʌɑɛeiɪoɒɔuʊyøœɵəɜɐ] > ij;

::Null;

([aɑiu]) } [ˈˌ]? [bcdfghjklmnpqrstvwxzßçðħŋɓɕɖɗɟɡɢɣɦɧɫɭɱɲɳɹɽɾʀʁʂʃʈʋʎʐʑʒʔʕɸθχβʝɰ] > $1ː;
([aɑ]) } [ˈˌ]? [eɛoɔəæ] > $1ː;
([aɑiu]) } [^[:L:][:M:]] > $1ː;
`;
