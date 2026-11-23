export const msIpaRules = `
::Lower;
::NFC;

s [yh] > ʃ;
ny > ɲ;
ng > ŋ;
kh > x;
gh > ɣ;
ch > t͡ʃ;
c > t͡ʃ;
j > d͡ʒ;
y > j;
q > k;
[^[:L:][:M:]] { x > z;
x > ks;
[ao] { i } [^[:L:][:M:]] > i̯;
a { u } [^[:L:][:M:]] > u̯;
ee > iː;
e > ə;
g > ɡ;
`;
