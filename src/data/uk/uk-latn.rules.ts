export const ukLatnRules = `
::NFC;

['’‘\`´ʼ] > \\';

ЕЙ > IJ;
Ей > Ij;
ей > ij;

Л } [ЬЮЯЄьюяє] > Ľ;
л } [ЬЮЯЄьюяє] > ľ;
Н } [ЬЮЯЄьюяє] > Ń;
н } [ЬЮЯЄьюяє] > ń;

ьо > ö;
ЬО > Ö;
[ьЬ] [оО] > ö;

[AEIOUÏaeiouï] { Є } [:Lu:] > YE;
[^[:L:][:M:]] { Є } [:Lu:] > YE;
[AEIOUÏ] { Є > YE;
[AEIOUÏaeiouï] { Є > Ye;
[^[:L:][:M:]] { Є > Ye;
[AEIOUÏaeiouï] { є > ye;
[^[:L:][:M:]] { є > ye;

[AEIOUÏaeiouï] { Ю } [:Lu:] > YU;
[^[:L:][:M:]] { Ю } [:Lu:] > YU;
[AEIOUÏ] { Ю > YU;
[AEIOUÏaeiouï] { Ю > Yu;
[^[:L:][:M:]] { Ю > Yu;
[AEIOUÏaeiouï] { ю > yu;
[^[:L:][:M:]] { ю > yu;

[AEIOUÏaeiouï] { Я } [:Lu:] > YA;
[^[:L:][:M:]] { Я } [:Lu:] > YA;
[AEIOUÏ] { Я > YA;
[AEIOUÏaeiouï] { Я > Ya;
[^[:L:][:M:]] { Я > Ya;
[AEIOUÏaeiouï] { я > ya;
[^[:L:][:M:]] { я > ya;

Ї } [:Lu:] > YI;
[:Lu:] { Ї > YI;
Ї > Yi;
ї > yi;

Й > Y;
й > y;

Є > E;
є > e;

Ю } [:Lu:] > YU;
[:Lu:] { Ю > YU;
Ю > Yu;
ю > yu;

Я } [:Lu:] > YA;
[:Lu:] { Я > YA;
Я > Ya;
я > ya;

Щ } [:Lu:] > ŠČ;
[:Lu:] { Щ > ŠČ;
Щ > Šč;
щ > šč;

Ц } [:Lu:] > TS;
[:Lu:] { Ц > TS;
Ц > Ts;
ц > ts;

А > A; а > a;
Б > B; б > b;
В > V; в > v;
Г > H; г > h;
Ґ > G; ґ > g;
Д > D; д > d;
Е > E; е > e;
Ж > Ž; ж > ž;
З > Z; з > z;
И > Ï; и > ï;
І > I; і > i;
К > K; к > k;
Л > L; л > l;
М > M; м > m;
Н > N; н > n;
О > O; о > o;
П > P; п > p;
Р > R; р > r;
С > S; с > s;
Т > T; т > t;
У > U; у > u;
Ф > F; ф > f;
Х > X; х > x;
Ч > Č; ч > č;
Ш > Š; ш > š;

Ь > ; ь > ;
`;
