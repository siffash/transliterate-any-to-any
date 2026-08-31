export const idIpaRules = `
::Lower;

ch > tʃ;
dj > dʒ;
kh > x;
ng > ŋ;
ny > ɲ;
sj > ʃ;
sy > ʃ;
tj > tʃ;

n } c > ɲ;
n } j > ɲ;
n } tʃ > ɲ;
n } dʒ > ɲ;
n } k > ŋ;
n } g > ŋ;
n } q > ŋ;
n } x > ŋ;

[aiueo] { k } [^[:L:][:M:]] > ʔ;
[aiueo] { k } [bcdfghjklmnpqrstvwxyz] > ʔ;

ai > aɪ;
au > aʊ;
ei > eɪ;
oi > oɪ;
ui > uɪ;

s { c > k;
c > tʃ;
j > dʒ;
q > k;
v > f;
x > ks;
y > j;

e > ə;
`;
