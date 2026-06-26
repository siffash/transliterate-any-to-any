export const koUkRules = `
$vowel = [aeiouywаеєиіоуюяї'];
$cyr_voiceless = [ктпсхчшц];
$cyr_j_end = [чж];

seoul > сеул;
pyeongyang > пхеньян;

ng } $vowel > н\\';
k } $vowel > кх;
t } $vowel > тх;
p } $vowel > пх;

chyae > чхе;
chya > чха;
chyeo > чхо;
chyo > чхо;
chyu > чху;

$cyr_j_end { yae > е;
$cyr_j_end { ya > а;
$cyr_j_end { yeo > о;
$cyr_j_end { yo > о;
$cyr_j_end { yu > у;

j { yae > е;
ch { yae > е;
j { ya > а;
ch { ya > а;
j { yeo > о;
ch { yeo > о;
j { yo > о;
ch { yo > о;
j { yu > у;
ch { yu > у;

$vowel { ui > ий;
[:^Letter:] { ui > ий;
ui > і;

$vowel { eui > ий;
[:^Letter:] { eui > ий;
eui > і;

yae > є;
wae > ве;
wa > ва;
we > ве;
wo > во;
wi > ві;
oe > ве;
yu > ю;
ya > я;
ae > е;
eo > о;

[:^Letter:] { yeo > йо;
$vowel { yeo > йо;
yeo > ьо;

[:^Letter:] { yo > йо;
$vowel { yo > йо;
yo > ьо;

ye > є;
eu > и;
a > а;
e > е;
o > о;
u > у;

$vowel { i > ї;
i > і;

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
h > г;

$cyr_voiceless { g > к;
[:^Letter:] { g > к;
g > ґ;

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

йа > я;
йе > є;
йі > ї;
йу > ю;

::Title;
`;
