export const itLatnRules = `
::NFC;

[àá] > a;
[ÀÁ] > A;
[èé] > e;
[ÈÉ] > E;
[ìí] > i;
[ÌÍ] > I;
[òó] > o;
[ÒÓ] > O;
[ùú] > u;
[ÙÚ] > U;

::Null;

sci } [aouAOU] > š;
Sci } [aouAOU] > Š;
SCI } [AOU] > Š;

cci } [aouAOU] > čč;
Cci } [aouAOU] > Čč;
CCI } [AOU] > ČČ;

ggi } [aouAOU] > dždž;
Ggi } [aouAOU] > Dždž;
GGI } [AOU] > DŽDŽ;

gli } [aeouAEOU] > ľ;
Gli } [aeouAEOU] > Ľ;
GLI } [AEOU] > Ľ;

gl } [iI] > ľ;
Gl } [iI] > Ľ;
GL } [I] > Ľ;

sc } [eiEI] > š;
Sc } [eiEI] > Š;
SC } [EI] > Š;

cc } [eiEI] > čč;
Cc } [eiEI] > Čč;
CC } [EI] > ČČ;

gg } [eiEI] > dždž;
Gg } [eiEI] > Dždž;
GG } [EI] > DŽDŽ;

ci } [aouAOU] > č;
Ci } [aouAOU] > Č;
CI } [AOU] > Č;

gi } [aouAOU] > dž;
Gi } [aouAOU] > Dž;
GI } [AOU] > DŽ;

gn > ń;
Gn > Ń;
GN > Ń;

ch > k;
Ch > K;
CH > K;

gh > g;
Gh > G;
GH > G;

qu > kw;
Qu > Kw;
QU > KW;

c } [eiEI] > č;
C } [eiEI] > Č;

g } [eiEI] > dž;
G } [eiEI] > Dž;

c > k;
C > K;

q > k;
Q > K;

x > ks;
X } [:Lower:] > Ks;
X } [:^Letter:] > KS;
X > KS;

z > ts;
Z } [:Lower:] > Ts;
Z } [:^Letter:] > TS;
Z > TS;

j > y;
J > Y;

h > ;
H ([:Letter:]) > &Any-Upper($1);
H > ;
`;
