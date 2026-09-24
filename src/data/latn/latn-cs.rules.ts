export const latnCsRules = `
::Null;

T [sS] > C;
t [sS] > c;

T [hH] > T;
t [hH] > t;

G [hH] > G;
g [hH] > g;

KH > CH;
Kh > Ch;
kH > cH;
kh > ch;

IJ > EJ;
Ij > Ej;
iJ > eJ;
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
ćE > tĚ;
će > tě;

ĐE > DĚ;
Đe > Dě;
đE > dĚ;
đe > dě;

ŃE > NĚ;
Ńe > Ně;
ńE > nĚ;
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

[^[:L:][:M:]] { u [uU] > ú;
[^[:L:][:M:]] { U [uU] > Ú;
u [uU] > ů;
U [uU] > Ů;

[^[:L:][:M:]] { ů > ú;
[^[:L:][:M:]] { Ů > Ú;
[^[:L:][:M:]] { Ě } [:Lu:] > JE;
[^[:L:][:M:]] { Ě > Je;
[^[:L:][:M:]] { ě > je;

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
