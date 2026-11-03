export const latnSkRules = `
::Null;

[:Lu:] { Ŋ > NG;
Ŋ } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > NG;
Ŋ } [:Lu:] > NG;
Ŋ > Ng;
ŋ > ng;

[:Lu:] { Ẑ > DZ;
Ẑ } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > DZ;
Ẑ } [:Lu:] > DZ;
Ẑ > Dz;
ẑ > dz;

[:Lu:] { Ǯ > DŽ;
Ǯ } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > DŽ;
Ǯ } [:Lu:] > DŽ;
Ǯ > Dž;
ǯ > dž;

::Null;

d [Žž] } dž > d;
D [Žž] } DŽ > D;

IJ > EJ;
Ij > Ej;
iJ > eJ;
ij > ej;

Þ > T;
þ > t;

Ɣ > G;
ɣ > g;

[:Lu:] { Ḫ > CH;
Ḫ } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > CH;
Ḫ } [:Lu:] > CH;
Ḫ > Ch;
ḫ > ch;

::Null;

X } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > CH;
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

[^[:L:][:M:]] { \\' > ;
\\' } [^[:L:][:M:]] > ;
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
