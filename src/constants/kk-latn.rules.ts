export const kkLatnRules = `
::NFC;

[ЪЬъь] > ;

[:^Letter:] { Е } [:Lower:] > Ye;
[:^Letter:] { Е > YE;
[:^Letter:] { е > ye;

Щ } [:Lower:] > Šč;
Щ > ŠČ;
щ > šč;

Я } [:Lower:] > Ya;
Я > YA;
я > ya;

Ю } [:Lower:] > Yu;
Ю > YU;
ю > yu;

Ё } [:Lower:] > Yo;
Ё > YO;
ё > yo;

[ҒĞǴ] } [:Lower:] > Gh;
[ҒĞǴ] > GH;
[ғğǵ] > gh;

Ң } [:Lower:] > Ng;
Ң > NG;
ң > ng;

Sh } [:Lower:] > Š;
Sh > Š;
SH > Š;
sh > š;

Ch } [:Lower:] > Č;
Ch > Č;
CH > Č;
ch > č;

[ЦC] } [:Lower:] > Ts;
[ЦC] > TS;
[цc] > ts;

Zh } [:Lower:] > Ž;
Zh > Ž;
ZH > Ž;
zh > ž;

Kh } [:Lower:] > X;
Kh > X;
KH > X;
kh > x;

Y > Ï;
y > ï;
А > A;
а > a;
[ӘÁ] > Ä;
[әá] > ä;
[ЕЭ] > E;
[еэ] > e;
[ИІÍÌİ] > I;
[иіíì] > i;
[Ыı] > Ï;
ы > ï;
О > O;
о > o;
[ӨÓ] > Ö;
[өó] > ö;
[УҰŪ] > U;
[уұū] > u;
[ҮÚÙ] > Ü;
[үúù] > ü;
Ý > W;
ý > w;
Й > Y;
й > y;
Б > B;
б > b;
В > V;
в > v;
Г > G;
г > g;
Д > D;
д > d;
[ЖJ] > Ž;
[жj] > ž;
З > Z;
з > z;
К > K;
к > k;
Қ > Q;
қ > q;
Л > L;
л > l;
М > M;
м > m;
Н > N;
н > n;
П > P;
п > p;
Р > R;
р > r;
С > S;
с > s;
Т > T;
т > t;
Ф > F;
ф > f;
Х > X;
х > x;
Һ > H;
һ > h;
[ШŞ] > Š;
[шş] > š;
[ЧÇ] > Č;
[чç] > č;
Ñ } [:Lower:] > Ng;
Ñ > NG;
ñ > ng;

::Null;

[AÄEIOÖUÜÏaäeioöuüï] { I > Y;
[AÄEIOÖUÜÏaäeioöuüï] { i > y;
I } [AÄEIOÖUÜÏaäeioöuüï] > Y;
i } [AÄEIOÖUÜÏaäeioöuüï] > y;
`;
