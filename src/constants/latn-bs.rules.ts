export const latnBsRules = `
::Null;

[:Upper:] { Ľ > LJ;
Ľ } [:Upper:] > LJ;
Ľ > Lj;
ľ > lj;

[:Upper:] { Ń > NJ;
Ń } [:Upper:] > NJ;
Ń > Nj;
ń > nj;

[:Upper:] { IJ > EJ;
IJ } [:Upper:] > EJ;
IJ > Ej;
Ij > Ej;
iJ > ej;
ij > ej;

[:Upper:] { TS > C;
TS } [:Upper:] > C;
TS > C;
Ts > C;
tS > c;
ts > c;

[:Upper:] { TH > T;
TH } [:Upper:] > T;
TH > T;
Th > T;
tH > t;
th > t;

[:Upper:] { DH > D;
DH } [:Upper:] > D;
DH > D;
Dh > D;
dH > d;
dh > d;

[:Upper:] { GH > G;
GH } [:Upper:] > G;
GH > G;
Gh > G;
gH > g;
gh > g;

[:Upper:] { KH > H;
KH } [:Upper:] > H;
KH > H;
Kh > H;
kH > h;
kh > h;

i } [aAeEuU] > ij;
I } [AEU] > IJ;
I } [aeu] > Ij;

Ä > E;
ä > e;
Ö > E;
ö > e;
Ü > I;
ü > i;
Ï > I;
ï > i;
Ÿ > I;
ÿ > i;
Q > K;
q > k;
W > V;
w > v;
X > H;
x > h;
Y > J;
y > j;
['·] > ;

::Null;

[:^Letter:] { I } [AaEeOoUu] > J;
[:^Letter:] { i } [AaEeOoUu] > j;

::Null;

I } [aeu] > Ij;
I } [AEU] > IJ;
i } [AaEeUu] > ij;

::Null;

[ČčĆćĐđŠšŽž] { j > ;
[ČčĆćĐđŠšŽž] { J > ;

::Null;

[Bb] { [Bb] > ;
[Cc] { [Cc] > ;
[Čč] { [Čč] > ;
[Ćć] { [Ćć] > ;
[Dd] { [Dd] > ;
[Đđ] { [Đđ] > ;
[Ff] { [Ff] > ;
[Gg] { [Gg] > ;
[Hh] { [Hh] > ;
[Jj] { [Jj] > ;
[Kk] { [Kk] > ;
[Ll] { [Ll] > ;
[Mm] { [Mm] > ;
[Nn] { [Nn] > ;
[Pp] { [Pp] > ;
[Qq] { [Qq] > ;
[Rr] { [Rr] > ;
[Ss] { [Ss] > ;
[Šš] { [Šš] > ;
[Tt] { [Tt] > ;
[Vv] { [Vv] > ;
[Ww] { [Ww] > ;
[Xx] { [Xx] > ;
[Yy] { [Yy] > ;
[Zz] { [Zz] > ;
[Žž] { [Žž] > ;
`;
