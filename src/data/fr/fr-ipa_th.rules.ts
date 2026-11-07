export const frIpaThRules = `
::Null;

\\- } [aæʌɑɛeiɪoɒɔuʊyʏøœɵəɜɐ] > ʔ;
ɥ [iɪ] > uj;
[aɑɐeɛəoɔiɪ] { [yʏɥ] } [aɑɐoɔɒ] > ʔuʔ;
[yʏɥ] } [aɑɐoɔɒ] > uʔ;
[aɑɐeɛəoɔiɪ] { [yʏɥ] > ʔu;
[yʏɥ] > u;

::Null;

jj > j;
[bcdfɡgklmnpʁstvzʃʒ] { i? j [ɛe] } ŋ [^aæʌɑɛeiɪoɒɔuʊyʏøœɵəɜɐ] > \\@IA;
[bcdfɡgklmnpʁstvzʃʒ] { j } [aæʌɑɛeiɪoɒɔuʊyøœɵəɜɐ] > ij;
[^[:L:][:M:]] { i } [aæʌɑɛeiɪoɒɔuʊyøœɵəɜɐ] > ij;

::Null;

[ɑa] } ŋ [^aæʌɑɛeiɪoɒɔuʊyʏøœɵəɜɐ] > \\@AN\\_;
[ɛe] } ŋ [^aæʌɑɛeiɪoɒɔuʊyʏøœɵəɜɐ] > \\@EN\\_;
[ɔo] } ŋ [^aæʌɑɛeiɪoɒɔuʊyʏøœɵəɜɐ] > \\@ON\\_;
([aɑiu]) } [ˈˌ]? [bcdfghjklmnpqrstvwxzßçðħŋɓɕɖɗɟɡɢɣɦɧɫɭɱɲɳɹɽɾʀʁʂʃʈʋʎʐʑʒʔʕɸθχβʝɰ] > $1ː;
([aɑ]) } [ˈˌ]? [eɛoɔəæ] > $1ː;
([aɑiu]) } [^[:L:][:M:]] > $1ː;
`;
