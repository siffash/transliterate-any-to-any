export const kkLatnRules = `
::NFC;

[ЪЬъь] > ;

[:^Letter:] { Е } [:Ll:] > Ye;
[:^Letter:] { Е > YE;
[:^Letter:] { е > ye;

Щ } [:Ll:] > Šč;
Щ > ŠČ;
щ > šč;

Я } [:Ll:] > Ya;
Я > YA;
я > ya;

Ю } [:Ll:] > Yu;
Ю > YU;
ю > yu;

Ё } [:Ll:] > Yo;
Ё > YO;
ё > yo;

[ҒĞǴ] } [:Ll:] > Gh;
[ҒĞǴ] > GH;
[ғğǵ] > gh;

Ң } [:Ll:] > Ng;
Ң > NG;
ң > ng;

Sh } [:Ll:] > Š;
Sh > Š;
SH > Š;
sh > š;

Ch } [:Ll:] > Č;
Ch > Č;
CH > Č;
ch > č;

[ЦC] } [:Ll:] > Ts;
[ЦC] > TS;
[цc] > ts;

Zh } [:Ll:] > Ž;
Zh > Ž;
ZH > Ž;
zh > ž;

Kh } [:Ll:] > X;
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
Ñ } [:Ll:] > Ng;
Ñ > NG;
ñ > ng;

::Null;

[AÄEIOÖUÜÏaäeioöuüï] { I > Y;
[AÄEIOÖUÜÏaäeioöuüï] { i > y;
I } [AÄEIOÖUÜÏaäeioöuüï] > Y;
i } [AÄEIOÖUÜÏaäeioöuüï] > y;
`;
