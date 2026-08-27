export const svLatnRules = `
::NFC;

[Nn] { G > G;
[Nn] { g > g;

S [KT] J > Š;
S [kt] j > Š;
s [kt] j > š;

SCH > Š;
Sch > Š;
sch > š;

S [HJ] > Š;
S [hj] > Š;
s [hj] > š;

[TK] J > Ć;
[TK] j > Ć;
[tk] j > ć;

CHR > KR;
Chr > Kr;
chr > kr;

MICH > MIK;
Mich > Mik;
mich > mik;

CH > Š;
Ch > Š;
ch > š;

CK > K;
Ck > K;
ck > k;

QU > KV;
Qu > Kv;
qu > kv;

TION > ŠON;
Tion > Šon;
tion > šon;

TH > T;
Th > T;
th > t;

PH > F;
Ph > F;
ph > f;

[^[:Letter:][:Mark:]] { [DGHL] ([Jj]) > &Any-Upper($1);
[^[:Letter:][:Mark:]] { [dghl] ([Jj]) > &Any-Lower($1);

[Ff] [Aa] [Ll] { K } [Ee] [Nn] > K;
[Ff] [Aa] [Ll] { k } [Ee] [Nn] > k;
[Ll] [Aa] { G } [Ee] [Rr] > G;
[Ll] [Aa] { g } [Ee] [Rr] > g;
[Tt] [Aa] { G } [Ee] [Nn] > G;
[Tt] [Aa] { g } [Ee] [Nn] > g;
[Bb] [Ii] [Rr] { G } [Ii] [Tt] > G;
[Bb] [Ii] [Rr] { g } [Ii] [Tt] > g;
[Åå] { K } [Ee] > K;
[Åå] { k } [Ee] > k;

[Rr] { G } [Rr] > G;
[Rr] { g } [Rr] > g;
[Ll] { G } [Rr] > G;
[Ll] { g } [Rr] > g;
[Rr] { G } [AOUÅaouå] > G;
[Rr] { g } [AOUÅaouå] > g;
[Ll] { G } [AOUÅaouå] > G;
[Ll] { g } [AOUÅaouå] > g;

SK } [EIYÄÖÆØeiyäöæø] > Š;
Sk } [EIYÄÖÆØeiyäöæø] > Š;
sk } [EIYÄÖÆØeiyäöæø] > š;
C } [EIYÄÖÆØeiyäöæø] > S;
c } [EIYÄÖÆØeiyäöæø] > s;

::Null;

[AaEeOo] { Y > Y;
[AaEeOo] { y > y;
Å > O;
å > o;
Y > Ü;
y > ü;
Æ > Ä;
æ > ä;
Ø > Ö;
ø > ö;
X } [:Ll:] > Ks;
X > KS;
x > ks;
Z > S;
z > s;
W > V;
w > v;
Q > K;
q > k;
C > K;
c > k;
J > Y;
j > y;

EIJ > IJ;
Eij > Ij;
eij > ij;
EJ > IJ;
Ej > Ij;
ej > ij;
EI > IJ;
Ei > Ij;
ei > ij;
`;
