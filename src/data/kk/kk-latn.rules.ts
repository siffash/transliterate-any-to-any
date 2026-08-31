export const kkLatnRules = `
::NFC;

[ЪЬъь] > ;

[^[:L:][:M:]] { Е } [:Ll:] > Ye;
[^[:L:][:M:]] { Е > YE;
[^[:L:][:M:]] { е > ye;

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

Ғ } [:Ll:] > Gh;
Ғ > GH;
ғ > gh;

Ң } [:Ll:] > Ng;
Ң > NG;
ң > ng;

Ц } [:Ll:] > Ts;
Ц > TS;
ц > ts;

А > A;
а > a;
Ә > Ä;
ә > ä;
[ЕЭ] > E;
[еэ] > e;
[ИІ] > I;
[иі] > i;
Ы > Ï;
ы > ï;
О > O;
о > o;
Ө > Ö;
ө > ö;
УҰ > U;
[уұ] > u;
Ү > Ü;
ү > ü;
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
Ж > Ž;
ж > ž;
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
Ш > Š;
ш > š;
Ч > Č;
ч > č;

::Null;

[AÄEIÏOÖUÜaäeiïoöuü] { I > Y;
[AÄEIÏOÖUÜaäeiïoöuü] { i > y;
I } [AÄEIÏOÖUÜaäeiïoöuü] > Y;
i } [AÄEIÏOÖUÜaäeiïoöuü] > y;
`;
