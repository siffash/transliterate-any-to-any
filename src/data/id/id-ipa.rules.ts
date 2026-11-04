export const idIpaRules = `
::Lower;
::NFC;

ch > tʃ;
dj > dʒ;
kh > x;
gh > ɣ;
ng > ŋ;
ny > ɲ;
sj > ʃ;
sy > ʃ;
sh > ʃ;
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
x > ks;
y > j;

e > ə;
`;
