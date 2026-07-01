export const ruLatnRules = `
$vowel_ru = [АЕЁИОУЫЭЮЯаеёиоуыэюяAEIOUÏaeiouï];

$vowel_ru { Е } [:Upper:] > YE;
$vowel_ru { Е } [:^Letter:] > YE;
$vowel_ru { Е > Ye;
$vowel_ru { е > ye;
[:^Letter:] { Е } [:Upper:] > YE;
[:^Letter:] { Е > Ye;
[:^Letter:] { е > ye;

ЪЕ } [:Upper:] > YE;
[:Upper:] { ЪЕ > YE;
ЪЕ > Ye;
Ъе > Ye;
ъе > ye;
ЪЁ } [:Upper:] > YO;
[:Upper:] { ЪЁ > YO;
ЪЁ > Yo;
Ъё > Yo;
ъё > yo;
ЪЮ } [:Upper:] > YU;
[:Upper:] { ЪЮ > YU;
ЪЮ > Yu;
Ъю > Yu;
ъю > yu;
ЪЯ } [:Upper:] > YA;
[:Upper:] { ЪЯ > YA;
ЪЯ > Ya;
Ъя > Ya;
ъя > ya;
ЬЕ } [:Upper:] > YE;
[:Upper:] { ЬЕ > YE;
ЬЕ > Ye;
Ье > Ye;
ье > ye;
ЬЁ } [:Upper:] > YO;
[:Upper:] { ЬЁ > YO;
ЬЁ > Yo;
Ьё > Yo;
ьё > yo;
ЬО } [:Upper:] > YO;
[:Upper:] { ЬО > YO;
ЬО > Yo;
Ьо > Yo;
ьо > yo;
ЬИ } [:Upper:] > YI;
[:Upper:] { ЬИ > YI;
ЬИ > Yi;
Ьи > Yi;
ьи > yi;
ЬЮ } [:Upper:] > YU;
[:Upper:] { ЬЮ > YU;
ЬЮ > Yu;
Ью > Yu;
ью > yu;
ЬЯ } [:Upper:] > YA;
[:Upper:] { ЬЯ > YA;
ЬЯ > Ya;
Ья > Ya;
ья > ya;

А > A;
а > a;
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

[:Upper:] { Ё } [:Upper:] > YO;
[:^Letter:] { Ё } [:Upper:] > YO;
Ё } [:Upper:] > YO;
[:Upper:] { Ё > YO;
Ё > Yo;
ё > yo;

Ж > Ž;
ж > ž;
З > Z;
з > z;
И > I;
и > i;
Й > Y;
й > y;
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

Ц } [:Upper:] > TS;
[:Upper:] { Ц > TS;
Ц > Ts;
ц > ts;

Ч > Č;
ч > č;
Ш > Š;
ш > š;

Щ } [:Upper:] > ŠČ;
[:Upper:] { Щ > ŠČ;
Щ > Šč;
щ > šč;


Ы > Ï;
ы > ï;

Э > E;
э > e;

Ю } [:Upper:] > YU;
[:Upper:] { Ю > YU;
Ю > Yu;
ю > yu;

Я } [:Upper:] > YA;
[:Upper:] { Я > YA;
Я > Ya;
я > ya;

[ЪъЬь] > ;
`;
