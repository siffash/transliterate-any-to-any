export const latnBsRules = `
::Null;

[:Lu:] { TS > C;
TS } [:Lu:] > C;
TS > C;
Ts > C;
tS > c;
ts > c;

[:Lu:] { TH > T;
TH } [:Lu:] > T;
TH > T;
Th > T;
tH > t;
th > t;

[:Lu:] { GH > G;
GH } [:Lu:] > G;
GH > G;
Gh > G;
gH > g;
gh > g;

[:Lu:] { KH > H;
KH } [:Lu:] > H;
KH > H;
Kh > H;
kH > h;
kh > h;

[:Lu:] { IJ > EJ;
IJ } [:Lu:] > EJ;
IJ > Ej;
Ij > Ej;
iJ > ej;
ij > ej;

::Null;

[^[:L:][:M:]] { I } [AaÄäEeOoÖöUuÜüŸÿ] > J;
[^[:L:][:M:]] { i } [AaÄäEeOoÖöUuÜüŸÿ] > j;

[:Lu:] { Ľ > LJ;
Ľ } [:Lu:] > LJ;
Ľ > Lj;
ľ > lj;

[:Lu:] { Ń > NJ;
Ń } [:Lu:] > NJ;
Ń > Nj;
ń > nj;

i } [aAeEuU] > ij;
I } [AEU] > IJ;
I } [aeu] > Ij;

[ÄÖ] > E;
[äö] > e;
[ÜŸ] > U;
[üÿ] > u;
Ï > I;
ï > i;
Q > K;
q > k;
W > V;
w > v;
X > H;
x > h;
Y > J;
y > j;

[^[:L:][:M:]] { \\' > ;
\\' } [^[:L:][:M:]] > ;
· > ;

::Null;

[^[:L:][:M:]] { I } [AaEeOoUu] > J;
[^[:L:][:M:]] { i } [AaEeOoUu] > j;

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
