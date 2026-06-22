export const latnCaRules = `
::Null;

$frontVowel = [eEiIäÄïÏyYÿŸ];
$vowel = [aAeEiIoOuUäÄöÖüÜïÏyYÿŸ];

DŽ } $frontVowel > TG;
Dž } $frontVowel > Tg;
dž } $frontVowel > tg;
DŽ > TJ;
Dž > Tj;
dž > tj;

DZ > TZ;
Dz > Tz;
dz > tz;

Đ } [E I Ä Ï Y Ÿ] > TG;
Đ } [e i ä ï y ÿ] > Tg;
đ } $frontVowel > tg;
Đ } [:Upper:] > TJ;
Đ > Tj;
đ > tj;

Ž } $frontVowel > G;
ž } $frontVowel > g;
Ž > J;
ž > j;

Č } [:Upper:] > TX;
Č > Tx;
č > tx;

Ć } [:Upper:] > TX;
Ć > Tx;
ć > tx;

$vowel { Š } [:Upper:] > IX;
$vowel { Š > Ix;
$vowel { š > ix;
Š } [:Upper:] > X;
Š > X;
š > x;

$vowel { S } [A E I O U Ä Ö Ü Ï Y Ÿ] > SS;
$vowel { S } $vowel > Ss;
$vowel { s } $vowel > ss;

$vowel { Z } $vowel > S;
$vowel { z } $vowel > s;

G } [E I Ä Ï Y Ÿ] > GU;
G } [e i ä ï y ÿ] > Gu;
g } $frontVowel > gu;

K } [E I Ä Ï Y Ÿ] > QU;
K } [e i ä ï y ÿ] > Qu;
k } $frontVowel > qu;
K > C;
k > c;

Ń } [:Upper:] > NY;
Ń > Ny;
ń > ny;

Ľ } [:Upper:] > LL;
Ľ > Ll;
ľ > ll;

X } [:Upper:] > KH;
X > Kh;
x > kh;

y > i;
Y > I;
ÿ > i;
Ÿ > I;
ä > e;
Ä > E;
ö > o;
Ö > O;
ü > u;
Ü > U;
ï > i;
Ï > I;
`;
