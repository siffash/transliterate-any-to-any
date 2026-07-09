export const bgLatnRules = `
::NFC;

И { Я } [:^Letter:] > A;
И { я } [:^Letter:] > a;
и { Я } [:^Letter:] > A;
и { я } [:^Letter:] > a;

[:Upper:] { Ц > TS;
Ц } [:Upper:] > TS;
Ц > Ts;
ц > ts;

[:Upper:] { Щ > ŠT;
Щ } [:Upper:] > ŠT;
Щ > Št;
щ > št;

[:Upper:] { Ю > YU;
Ю } [:Upper:] > YU;
Ю > Yu;
ю > yu;

[:Upper:] { Я > YA;
Я } [:Upper:] > YA;
Я > Ya;
я > ya;

[АЪ] > A;
[аъ] > a;
Б > B;
б > b;
В > V;
в > v;
Г > G;
г > g;
Д > D;
д > d;
Е > E;
е > e;
Ж > Ž;
ж > ž;
З > Z;
з > z;
[ИЍ] > I;
[иѝ] > i;
[ЙЬ] > Y;
[йь] > y;
К > K;
к > k;
Л > L;
л > l;
М > M;
м > m;
Н > N;
н > n;
О > O;
о > o;
П > P;
п > p;
Р > R;
р > r;
С > S;
с > s;
Т > T;
т > t;
У > U;
у > u;
Ф > F;
ф > f;
Х > X;
х > x;
Ч > Č;
ч > č;
Ш > Š;
ш > š;
`;
