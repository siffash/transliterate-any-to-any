export const enIpaBgRules = `
::Null;

iː > ii;
i { a } n [^[:L:][:M:]] > ə;
[aeoɔ] ɪ { a } [bdfɡklɫmnpɹstvzʃʒθðŋ]+ [^[:L:][:M:]] > ə;
[aeiouæɑɒɔəɛɜɪʊʌ] ɫ+ { a } n [^[:L:][:M:]] > ə;
ʃ { w > v;
[aeiɑɒɔæəɛʌo] [ˈˌ]? { w } [ˈˌ]? [ɑa] ɹ > w;
[aeiɑɒɔæəɛʌo] [ˈˌ]? { w } [ˈˌ]? [ɑa] > v;
w { ɑ } [bdfɡklɫmnpstvzʃʒθðŋ] > ɔ;
[^[:L:][:M:]] [ˈˌ]? { e } [nɫlmɹ] [^aeiouæɑɒɔəɛɜɝɚɪʊʌɐ] > e;
e } [nɫlmɹ] [^aeiouæɑɒɔəɛɜɝɚɪʊʌɐ] > ə;

::Null;

w } [ˈˌ]? ʊ ː? d [sz]? [^[:L:][:M:]] > u;
[uʊ] [ˈˌ]? { w > ;
w } [ˈˌ]? [uʊ] > ;
w > u;
t } [ˈˌ] s [^u] > т;
t } [ˈˌ]? s [^[:L:][:M:]] > т;
t } [ˈˌ]? s [əɔ] n > т;
t } [ˈˌ]? s i [^[:L:][:M:]] > т;
t } [ˈˌ]? s [bdfɡlɫmnpɹstwzʃθ] > т;
ʦ > ц;
`;
