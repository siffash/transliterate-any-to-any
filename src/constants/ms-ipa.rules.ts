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
q } [:^Letter:] > ʔ;
q > k;
[:^Letter:] { x > z;
x > ks;
k } [bcdfghjkmnpqstvwxyz] > ʔ;
k } [:^Letter:] > ʔ;
a { i } [:^Letter:] > i̯;
a { u } [:^Letter:] > u̯;
o { i } [:^Letter:] > i̯;
e > ə;
g > ɡ;
`;
