export const koRuRules = `
seoul > сеул;
pyeongyang > пхеньян;

$vowel = [aeiouywаеёиоуыэюя];
$cyr_voiceless = [ктпсхчщшц];
$cyr_j_end = [чж];

ng } $vowel > нъ;
k } $vowel > кх;
t } $vowel > тх;
p } $vowel > пх;

chyae > чхэ;
chya > чха;
chyeo > чхо;
chyo > чхо;
chyu > чху;

$cyr_j_end { yae > э;
$cyr_j_end { ya > а;
$cyr_j_end { yeo > о;
$cyr_j_end { yo > о;
$cyr_j_end { yu > у;

j { yae > э;
ch { yae > э;
j { ya > а;
ch { ya > а;
j { yeo > о;
ch { yeo > о;
j { yo > о;
ch { yo > о;
j { yu > у;
ch { yu > у;

$vowel { ui > ый;
[:^Letter:] { ui > ый;
ui > и;

$vowel { eui > ый;
[:^Letter:] { eui > ый;
eui > и;

yae > йя;
wae > вэ;
yeo > ё;
wa > ва;
we > ве;
wo > во;
wi > ви;
oe > ве;
yu > ю;
ya > я;
ae > э;
eo > о;

[:^Letter:] { ye > йе;
ye > е;

yo > ё;
eu > ы;

a > а;

[:^Letter:] { e > э;
e > е;

o > о;
u > у;
i > и;

kk > кк;
tt > тт;
pp > пп;
ss > сс;
jj > чч;
ch > чх;

k > к;
t > т;
p > п;
s > с;
h > х;

$cyr_voiceless { g > к;
[:^Letter:] { g > к;
g > г;

$cyr_voiceless { d > т;
[:^Letter:] { d > т;
d > д;

$cyr_voiceless { b > п;
[:^Letter:] { b > п;
b > б;

$cyr_voiceless { j > ч;
[:^Letter:] { j > ч;
j > дж;

ng > н;
ll > лл;
l > ль;
r > р;
m > м;
n > н;

\\- > ;

::Null;

йе > е;
йо > ё;
йу > ю;
йа > я;

::Title;
`;
