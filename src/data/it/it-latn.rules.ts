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

gn } [aeiouAEIOU] > ny;
Gn } [aeiouAEIOU] > Ny;
GN } [aeiouAEIOU] > NY;
g [nN] > ń;
G [nN] > Ń;

c [hH] > k;
C [hH] > K;

g [hH] > g;
G [hH] > G;

c } [eiEI] > č;
C } [eiEI] > Č;

g } [ei] > dž;
g } [EI] > dŽ;
G } [EI] > DŽ;
G } [ei] > Dž;

c > k;
C > K;

[:Lu:] { X > KS;
X } [:Lu:] > KS;
X > Ks;
x > ks;

[:Lu:] { Z > TS;
Z } [:Lu:] > TS;
Z > Ts;
z > ts;

j > y;
J > Y;

h > ;
H ([:L:]) >| &Any-Upper($1);
H > ;
`;
