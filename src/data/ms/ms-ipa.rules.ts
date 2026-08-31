export const msIpaRules = `
::Lower;

sy > ʃ;
ny > ɲ;
ng > ŋ;
kh > x;
gh > ɣ;
ch > t͡ʃ;
c > t͡ʃ;
j > d͡ʒ;
y > j;
q } [^[:L:][:M:]] > ʔ;
q > k;
[^[:L:][:M:]] { x > z;
x > ks;
k } [bcdfghjkmnpqstvwxyz] > ʔ;
k } [^[:L:][:M:]] > ʔ;
a { i } [^[:L:][:M:]] > i̯;
a { u } [^[:L:][:M:]] > u̯;
o { i } [^[:L:][:M:]] > i̯;
e > ə;
g > ɡ;
`;
