export const frIpaJaRules = `
::Null;

[bdfgklmnpstvzʃʒʁ] { j } [ɛœ]̃ > i;
[ɛœ]̃ > ã;
[uø] } [^[:L:][:M:]] > uː;
ə } [bdfgɡklmnpstvzʃʒʁɲŋ] [bdfgɡkmnpstvzʃʒɲŋ] > e;
ə > u;
[œø] > u;

::Null;

([aeiouyɛɔ]) } [ʁvzʒɲ] [^[:L:][:M:]] > $1ː;
([aeiouyɛɔ]) } vʁ [^[:L:][:M:]] > $1ː;
([aeiouyɛɔ]) } nu [^[:L:][:M:]] > $1ː;

::Null;

ɲ } [^[:L:][:M:]] > ɲu;
i { j } [^[:L:][:M:]] > ːju;
[aɛeoɔuœø] { j } [^[:L:][:M:]] > iju;
`;
