export const enIpaBgRules = `
::Null;

iː > ii;
[ˈˌ] [bdfɡhjklɫmnpɹstvwzʃʒθðŋ]+ { i } [bfɡklɫpɹsvzʃʒθð] [bdfɡkmnptvzʃʒθðŋ] > ii;
[ˈˌ] [bdfɡhjklɫmnpɹstvwzʃʒθðŋ]+ { i } [mnŋ] [bdfɡkpstvzʃʒθð] > ii;
[ˈˌ] [bdfɡhjklɫmnpɹstvwzʃʒθðŋ]+ { i } d [bdfɡkmnpstvzθðŋ] > ii;
[ˈˌ] [bdfɡhjklɫmnpɹstvwzʃʒθðŋ]+ { i } t [bdfɡkmnpsvzθðŋ] > ii;
[^[:L:][:M:]] ˈ [bdfɡhjklɫmnpɹstvwzʃʒθðŋ]+ { i } [bdfɡklɫmnpɹstvzʃʒθðŋ] ɫ? [^[:L:][:M:]] > ii;
ˌ [bdfɡhjklɫmnpɹstvwzʃʒθðŋ]+ { i } [bdfɡklɫmnpɹstvzʃʒθðŋ] ɫ? [^[:L:][:M:]] > ii;
[ˈˌ] [bdfɡhjklɫmnpɹstvwzʃʒθðŋ]+ { i } [bdfɡkpstvzʃʒθð] [eə] ɫ [sz]? [^[:L:][:M:]] > ii;
i { a } n [^[:L:][:M:]] > ə;
[aeoɔ] ɪ { a } [bdfɡklɫmnpɹstvzʃʒθðŋ]+ [^[:L:][:M:]] > ə;
[aeiouæɑɒɔəɛɜɪʊʌ] ɫ+ { a } n [^[:L:][:M:]] > ə;
ʃ { w > v;
[aeiɑɒɔæəɛʌo] [ˈˌ]? { w } [ˈˌ]? [ɑa] ɹ > w;
[aeiɑɒɔæəɛʌo] [ˈˌ]? { w } [ˈˌ]? [ɑa] > v;
w { ɑ } [bdfɡklɫmnpstvzʃʒθðŋ] > ɔ;
[^[:L:][:M:]] [ˈˌ]? { e } [nɫlmɹ] [^aeiouæɑɒɔəɛɜɝɚɪʊʌɐ] > e;
e } [nɫlmɹ] [^aeiouæɑɒɔəɛɜɝɚɪʊʌɐ] > ə;
[ij] [ˈˌ]? { ɛ > ɛ;
ɛ } ɹ [ˈˌ]? [bcdfɡɟhjklɫmnpstvwzʃʒθðŋ] > ɛə;
ɛ } ɹ [^[:L:][:M:]] > ɛə;

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
