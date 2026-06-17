export const roLatnRules = `
$backVowel = [a o u ă â A O U Ă Â];

c h i } $backVowel > k y;
C h i } [a o u ă â] > K y;
C H I } [A O U Ă Â] > K Y;

g h i } $backVowel > g y;
G h i } [a o u ă â] > G y;
G H I } [A O U Ă Â] > G Y;

c h } [e i E I] > k;
C h } [e i E I] > K;
C H } [E I] > K;

g h } [e i E I] > g;
G h } [e i E I] > G;
G H } [E I] > G;

c i } $backVowel > č;
C i } [a o u ă â] > Č;
C I } [A O U Ă Â] > Č;

g i } $backVowel > dž;
G i } [a o u ă â] > Dž;
G I } [A O U Ă Â] > DŽ;

c e } [a A] > č;
C e } [a A] > Č;
C E } [A] > Č;

g e } [a A] > dž;
G e } [a A] > Dž;
G E } [A] > DŽ;

c } [e i E I] > č;
C } [e i E I] > Č;

g } [e i] > dž;
G } [e i] > Dž;
G } [E I] > DŽ;

c > k;
C > K;

ț > ts;
Ț } [:Uppercase:] > TS;
Ț > Ts;

ţ > ts;
Ţ } [:Uppercase:] > TS;
Ţ > Ts;

ș > š;
Ș > Š;

ş > š;
Ş > Š;

j > ž;
J > Ž;

x > k s;
X } [:Uppercase:] > K S;
X > K s;

q u > k v;
Q u > K v;
Q U > K V;

q > k;
Q > K;

w > v;
W > V;

ă > a;
Ă > A;

â > ï;
Â > Ï;

î > ï;
Î > Ï;
`;
