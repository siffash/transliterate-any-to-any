export const ruLatnRules = `
$boundary = [:^Letter:];
$upper = [:Lu:];
$vowel = [АЕЁИОУЫЭЮЯаеёиоуыэюяAEIOUÏaeiouï];

$vowel { Е } $upper > YE;
$vowel { Е } $boundary > YE;
$vowel { Е > Ye;
$vowel { е > ye;
$boundary { Е } $upper > YE;
$boundary { Е > Ye;
$boundary { е > ye;

ЪЕ } $upper > YE;
$upper { ЪЕ > YE;
ЪЕ > Ye;
Ъе > Ye;
ъе > ye;
ЪЁ } $upper > YO;
$upper { ЪЁ > YO;
ЪЁ > Yo;
Ъё > Yo;
ъё > yo;
ЪЮ } $upper > YU;
$upper { ЪЮ > YU;
ЪЮ > Yu;
Ъю > Yu;
ъю > yu;
ЪЯ } $upper > YA;
$upper { ЪЯ > YA;
ЪЯ > Ya;
Ъя > Ya;
ъя > ya;
ЬЕ } $upper > YE;
$upper { ЬЕ > YE;
ЬЕ > Ye;
Ье > Ye;
ье > ye;
ЬЁ } $upper > YO;
$upper { ЬЁ > YO;
ЬЁ > Yo;
Ьё > Yo;
ьё > yo;
ЬО } $upper > YO;
$upper { ЬО > YO;
ЬО > Yo;
Ьо > Yo;
ьо > yo;
ЬИ } $upper > YI;
$upper { ЬИ > YI;
ЬИ > Yi;
Ьи > Yi;
ьи > yi;
ЬЮ } $upper > YU;
$upper { ЬЮ > YU;
ЬЮ > Yu;
Ью > Yu;
ью > yu;
ЬЯ } $upper > YA;
$upper { ЬЯ > YA;
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

$upper { Ё } $upper > YO;
$boundary { Ё } $upper > YO;
Ё } $upper > YO;
$upper { Ё > YO;
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

Ц } $upper > TS;
$upper { Ц > TS;
Ц > Ts;
ц > ts;

Ч > Č;
ч > č;
Ш > Š;
ш > š;

Щ } $upper > ŠČ;
$upper { Щ > ŠČ;
Щ > Šč;
щ > šč;


Ы > Ï;
ы > ï;

Э > E;
э > e;

Ю } $upper > YU;
$upper { Ю > YU;
Ю > Yu;
ю > yu;

Я } $upper > YA;
$upper { Я > YA;
Я > Ya;
я > ya;

[ЪъЬь] > ;
`;
