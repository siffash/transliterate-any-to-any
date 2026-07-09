export const koRuRules = `
seoul > сеул;
pyeongyang > пхеньян;

$vowel_koru = [aeiouywаеёиоуыэюя];
$cyr_voiceless = [ктпсхчщшц];
$cyr_j_end = [чж];

ng } $vowel_koru > нъ;
k } $vowel_koru > кх;
t } $vowel_koru > тх;
p } $vowel_koru > пх;

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

$vowel_koru { ui > ый;
[:^Letter:] { ui > ый;
ui > и;

$vowel_koru { eui > ый;
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

[жшчщ] { ы > и;
йй > й;

::Null;

[:^Letter:] { й } [бвгджзйклмнпрстфхцчшщ] > и;
[бвгджзйклмнпрстфхцчшщ] { й } [бвгджзйклмнпрстфхцчшщ] > и;

[:^Letter:] { [ъь] > ;
ъ } [:^Letter:] > ;
[ьъй] { [ьъ] > ;

::Title;
`;
