export const azLatnRules = `
::NFC;

Q } [pfktsşxçhPFKTSŞXÇH] > K;
q } [pfktsşxçhPFKTSŞXÇH] > k;
Q > G;
q > g;

I > Ï;
ı > ï;
İ > I;

Ə > Ä;
ə > ä;

Ç > Č;
ç > č;

C > Ǯ;
c > ǯ;

Ş > Š;
ş > š;

[nN] { Ğ > G;
[nN] { ğ > g;
Ğ > Ɣ;
ğ > ɣ;

J > Ž;
j > ž;

::Null;

[^[:L:][:M:]] { T [Ss] > C;
[^[:L:][:M:]] { t [Ss] > c;
[:L:] { K } [hH] [aeiouyäöüåæøáéíóúýőűıâêîôûàèìòùëïõAEIOUYÄÖÜÅÆØÁÉÍÓÚÝŐŰIİÂÊÎÔÛÀÈÌÒÙËÏÕ] > K;
[:L:] { k } [hH] [aeiouyäöüåæøáéíóúýőűıâêîôûàèìòùëïõAEIOUYÄÖÜÅÆØÁÉÍÓÚÝŐŰIİÂÊÎÔÛÀÈÌÒÙËÏÕ] > k;
K [Hh] > Ḫ;
k [Hh] > ḫ;
[nN] { G } [hH] > G;
[nN] { g } [hH] > g;
G [Hh] > Ɣ;
g [Hh] > ɣ;
`;
