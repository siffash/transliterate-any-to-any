export const frIpaJaRules = `
::Null;

[bdfgklmnpstvzʃʒʁ] { j } [ɛœ]̃ > i;
[ɛœ]̃ > ã;
d { jø } [^[:L:][:M:]] > yː;
d { jø > y;
[uø] } [^[:L:][:M:]] > uː;
[dt] { ə > o;
ə } [bdfgɡklmnpstvzʃʒʁɲŋ] [bdfgɡkmnpstvzʃʒɲŋ] > e;
[əœø] > u;

::Null;

([aeiouyɛɔ]) } [ʁvzʒɲ] [^[:L:][:M:]] > $1ː;
([aeiouyɛɔ]) } vʁ [^[:L:][:M:]] > $1ː;
([aeiouyɛɔ]) } nu [^[:L:][:M:]] > $1ː;
o } [bdfgɡklmnpstʃ] [^[:L:][:M:]] > oː;

::Null;

ɲ } [^[:L:][:M:]] > ɲu;
i { j } [^[:L:][:M:]] > ːju;
[aɛeoɔuœø] { j } [^[:L:][:M:]] > iju;
[aɑɛeoɔuyœø] { j } [ɛei] > i;
[aɑɛeoɔuyœø] { j } [aɑoɔuy] > ij;
`;
