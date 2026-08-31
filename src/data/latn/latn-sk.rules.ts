export const latnSkRules = `
::Null;

IJ > EJ;
Ij > Ej;
iJ > eJ;
ij > ej;

TS > C;
Ts > C;
tS > c;
ts > c;

TH > T;
Th > T;
tH > t;
th > t;

GH > G;
Gh > G;
gH > g;
gh > g;

KH > CH;
Kh > Ch;
kH > cH;
kh > ch;

::Null;

X } [:Lu:] > CH;
[:Lu:] { X > CH;
X > Ch;
x > ch;

Q > K;
q > k;

W > V;
w > v;

Y > J;
y > j;

Ï > Y;
ï > y;

Ö > O;
ö > o;

[ÜŸ] > U;
[üÿ] > u;

Đ } [eEiI] > D;
đ } [eEiI] > d;
Đ > Ď;
đ > ď;

Ć } [eEiI] > T;
ć } [eEiI] > t;
Ć > Ť;
ć > ť;

Ń } [eEiI] > N;
ń } [eEiI] > n;
Ń > Ň;
ń > ň;

Ľ } [eEiI] > L;
ľ } [eEiI] > l;

[:^Letter:] { \\' > ;
\\' } [:^Letter:] > ;
· > ;

::Null;

[ďťňľĎŤŇĽ] { y > i;
[ďťňľĎŤŇĽ] { ý > í;
[ďťňľĎŤŇĽ] { Y > I;
[ďťňľĎŤŇĽ] { Ý > Í;

::Null;

ď } [iíeéIÍEÉ] > d;
ť } [iíeéIÍEÉ] > t;
ň } [iíeéIÍEÉ] > n;
ľ } [iíeéIÍEÉ] > l;
Ď } [iíeéIÍEÉ] > D;
Ť } [iíeéIÍEÉ] > T;
Ň } [iíeéIÍEÉ] > N;
Ľ } [iíeéIÍEÉ] > L;
`;
