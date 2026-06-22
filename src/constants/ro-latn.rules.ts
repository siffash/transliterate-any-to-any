export const roLatnRules = `
$backVowel = [a o u ă â A O U Ă Â];

á > a;
Á > A;
à > a;
À > A;
ã > a;
Ã > A;
é > e;
É > E;
è > e;
È > E;
ê > e;
Ê > E;
í > i;
Í > I;
ì > i;
Ì > I;
ó > o;
Ó > O;
ò > o;
Ò > O;
ô > o;
Ô > O;
õ > o;
Õ > O;
ú > u;
Ú > U;
ù > u;
Ù > U;
û > u;
Û > U;

::Null;

c h i } $backVowel > k y;
C h i } [a o u ă â] > K y;
C H i } [a o u ă â] > K y;
C H I } [A O U Ă Â] > K Y;

g h i } $backVowel > g y;
G h i } [a o u ă â] > G y;
G H i } [a o u ă â] > G y;
G H I } [A O U Ă Â] > G Y;

c h } [e i E I y Y] > k;
C h } [e i E I y Y] > K;
C H } [e i E I y Y] > K;

g h } [e i E I y Y] > g;
G h } [e i E I y Y] > G;
G H } [e i E I y Y] > G;

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

c } [e i E I y Y] > č;
C } [e i E I y Y] > Č;

g } [e i y Y] > dž;
G } [e i y Y] > Dž;
G } [E I Y] > DŽ;

c > k;
C > K;

ț > ts;
Ț } [:Upper:] > TS;
Ț > Ts;

ţ > ts;
Ţ } [:Upper:] > TS;
Ţ > Ts;

ș > š;
Ș > Š;

ş > š;
Ş > Š;

j > ž;
J > Ž;

x > k s;
X } [:Upper:] > K S;
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
