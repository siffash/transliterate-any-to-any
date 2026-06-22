export const latnFrRules = `
::Null;

$upper = [ABDEFGHIKLMNOPQRSTUVWXYZÄÏÖÜŸĆČĐĽŃŠŽ];
$vowelUpper = [AEIOUYÄÏÖÜŸ];
$vowelLower = [aeiouyäïöüÿ];
$vowel = [$vowelUpper $vowelLower];
$gTriggerUpper = [EIYÖÏŸ];
$gTriggerLower = [eiyöïÿ];
$gTrigger = [$gTriggerUpper $gTriggerLower];

· > ;

Š } $upper > CH;
Š > Ch;
š > ch;

Č } $upper > TCH;
Č > Tch;
č > tch;

Ć } $upper > TCH;
Ć > Tch;
ć > tch;

Đ } $upper > DJ;
Đ > Dj;
đ > dj;

Ľ } $upper > LI;
Ľ > Li;
ľ > li;

Ń } $upper > GN;
Ń > Gn;
ń > gn;

X } $upper > KH;
X > Kh;
x > kh;

Ž > J;
ž > j;

$vowel { S } $vowelUpper > SS;
$vowel { S } $vowelLower > Ss;
$vowel { s } $vowel > ss;

G } $gTriggerUpper > GU;
G } $gTriggerLower > Gu;
g } $gTrigger > gu;

Ä } $upper > AE;
Ä > Ae;
ä > ae;

Ö } $upper > EU;
Ö > Eu;
ö > eu;

U } $upper > OU;
U > Ou;
u > ou;

Ü } $upper > U;
Ü > U;
ü > u;
`;
