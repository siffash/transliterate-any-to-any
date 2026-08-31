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

Q > K;
q > k;

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

Ä > E;
ä > e;

Ö > O;
ö > o;

[ÜŸ] > U;
[üÿ] > u;

Ľ > L;
ľ > l;

[^[:L:][:M:]] { \\' > ;
\\' } [^[:L:][:M:]] > ;
· > ;

::Null;

[^[:L:][:M:]] { uu > ú;
[^[:L:][:M:]] { Uu > Ú;
[^[:L:][:M:]] { uU > Ú;
[^[:L:][:M:]] { UU > Ú;
uu > ů;
Uu > Ů;
uU > Ů;
UU > Ů;

[^[:L:][:M:]] { ů > ú;
[^[:L:][:M:]] { Ů > Ú;
[^[:L:][:M:]] { ě > je;
[^[:L:][:M:]] { Ě } [:Lu:] > JE;
[^[:L:][:M:]] { Ě > Je;

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
