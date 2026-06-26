export const ukLatnRules = `
$upper = [АБВГҐДЕЄЖЗИІЇЙКЛМНОПРСТУФХЦЧШЩЬЮЯ[:Upper:]];

['’‘\`´ʼ"] > ;

ЗГ > ZH;
Зг > Zh;
зГ > zH;
зг > zh;

[:^Letter:] { Є } $upper > YE;
[:^Letter:] { Є } > Ye;
$upper { Є } > IE;
Є } $upper > IE;
Є > Ie;
[:^Letter:] { є } > ye;
є > ie;

[:^Letter:] { Ю } $upper > YU;
[:^Letter:] { Ю } > Yu;
$upper { Ю } > IU;
Ю } $upper > IU;
Ю > Iu;
[:^Letter:] { ю } > yu;
ю > iu;

[:^Letter:] { Я } $upper > YA;
[:^Letter:] { Я } > Ya;
$upper { Я } > IA;
Я } $upper > IA;
Я > Ia;
[:^Letter:] { я } > ya;
я > ia;

[:^Letter:] { Ї } $upper > YI;
[:^Letter:] { Ї } > Yi;
$upper { Ї } > I;
Ї } $upper > I;
Ї > I;
[:^Letter:] { ї } > yi;
ї > i;

[:^Letter:] { Й } $upper > Y;
[:^Letter:] { Й } > Y;
$upper { Й } > I;
Й } $upper > I;
Й > I;
[:^Letter:] { й } > y;
й > i;

$upper { Щ } > ŠČ;
Щ } $upper > ŠČ;
Щ > Šč;
щ > šč;

$upper { Ц } > TS;
Ц } $upper > TS;
Ц > Ts;
ц > ts;

А > A;
Б > B;
В > V;
Г > H;
Ґ > G;
Д > D;
Е > E;
Ж > Ž;
З > Z;
И > Ï;
І > I;
К > K;
Л > L;
М > M;
Н > N;
О > O;
П > P;
Р > R;
С > S;
Т > T;
У > U;
Ф > F;
Х > X;
Ч > Č;
Ш > Š;
Ь > ;
а > a;
б > b;
в > v;
г > h;
ґ > g;
д > d;
е > e;
ж > ž;
з > z;
и > ï;
і > i;
к > k;
л > l;
м > m;
н > n;
о > o;
п > p;
р > r;
с > s;
т > t;
у > u;
ф > f;
х > x;
ч > č;
ш > š;
ь > ;
`;
