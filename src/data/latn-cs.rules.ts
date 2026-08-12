export const latnCsRules = `
::Null;

TS > C;
Ts > C;
ts > c;

TH > T;
Th > T;
th > t;

GH > G;
Gh > G;
gh > g;

KH > CH;
Kh > Ch;
kh > ch;

IJ > EJ;
Ij > Ej;
ij > ej;

::Null;

[:Lu:] { X > CH;
X } [:Lu:] > CH;
X > Ch;
x > ch;

[:Lu:] { Q > KV;
Q } [:Lu:] > KV;
Q > Kv;
q > kv;

W > V;
w > v;

ĆE > TĚ;
Će > Tě;
će > tě;

ĐE > DĚ;
Đe > Dě;
đe > dě;

ŃE > NĚ;
Ńe > Ně;
ńe > ně;

Ć } [iI] > T;
ć } [iI] > t;

Đ } [iI] > D;
đ } [iI] > d;

Ń } [iI] > N;
ń } [iI] > n;

Ć > Ť;
ć > ť;

Đ > Ď;
đ > ď;

Ń > Ň;
ń > ň;

Y > J;
y > j;

Ï > Y;
ï > y;

Ÿ > Y;
ÿ > y;

Ä > E;
ä > e;

Ö > O;
ö > o;

Ü > U;
ü > u;

Ľ > L;
ľ > l;

['·] > ;

::Null;

[:^Letter:] { uu > ú;
[:^Letter:] { Uu > Ú;
[:^Letter:] { uU > Ú;
[:^Letter:] { UU > Ú;
uu > ů;
Uu > Ů;
uU > Ů;
UU > Ů;

[:^Letter:] { ů > ú;
[:^Letter:] { Ů > Ú;
[:^Letter:] { ě > je;
[:^Letter:] { Ě } [:Lu:] > JE;
[:^Letter:] { Ě > Je;

[cjřščžťďňCJŘŠČŽŤĎŇ] { y > i;
[cjřščžťďňCJŘŠČŽŤĎŇ] { Y > I;
[cjřščžťďňCJŘŠČŽŤĎŇ] { ý > í;
[cjřščžťďňCJŘŠČŽŤĎŇ] { Ý > Í;

[cjřščžhkrgxlqwszCJŘŠČŽHKRGXLQWSZ] { ě > e;
[cjřščžhkrgxlqwszCJŘŠČŽHKRGXLQWSZ] { Ě > E;

[ďťňĎŤŇ] { e > ě;
[ďťňĎŤŇ] { E > Ě;

::Null;

ď } [iíěIÍĚ] > d;
ť } [iíěIÍĚ] > t;
ň } [iíěIÍĚ] > n;
Ď } [iíěIÍĚ] > D;
Ť } [iíěIÍĚ] > T;
Ň } [iíěIÍĚ] > N;
`;
