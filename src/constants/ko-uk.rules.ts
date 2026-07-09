export const koUkRules = `
$vowel_kouk = [aeiouywаеєиіоуюяї'];
$cyr_voiceless = [ктпсхчшц];
$cyr_j_end = [чж];

seoul > сеул;
pyeongyang > пхеньян;

ng } $vowel_kouk > н\\';
k } $vowel_kouk > кх;
t } $vowel_kouk > тх;
p } $vowel_kouk > пх;

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

$vowel_kouk { ui > ий;
[:^Letter:] { ui > ий;
ui > і;

$vowel_kouk { eui > ий;
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
$vowel_kouk { yeo > йо;
yeo > ьо;

[:^Letter:] { yo > йо;
$vowel_kouk { yo > йо;
yo > ьо;

ye > є;
eu > и;
a > а;
e > е;
o > о;
u > у;

$vowel_kouk { i > ї;
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

шч > щ;
й { й > ;

[бпвмфгґкхр] { йа > \\'я;
[бпвмфгґкхр] { йе > \\'є;
[бпвмфгґкхр] { йі > \\'ї;
[бпвмфгґкхр] { йу > \\'ю;

йа > я;
йе > є;
йі > ї;
йу > ю;

::Null;

[:^Letter:] { й } [бвгґджзклмнпрстфхцчшщ] > і;
[бвгґджзклмнпрстфхцчшщ] { й } [бвгґджзклмнпрстфхцчшщ] > і;

::Null;

[жчшщ] { я > а;
[жчшщ] { ю > у;
[жчшщ] { є > е;

[бпвмфгґкхр] { ь } [яюєї] > \\';
[бпвмфгґкхр] { Ь } [яюєї] > \\';

[аеєиіїоуюя] { ь > ;
[:^Letter:] { ь > ;
[жчшщ] { ь > ;
ь } ь > ;

[:^Letter:] { ['’‘\`´ʼ"] > ;
[аеєиіїоуюя] { ['’‘\`´ʼ"] > ;
['’‘\`´ʼ"] { ь > ;
ь } ['’‘\`´ʼ"] > ;
['’‘\`´ʼ"] { ['’‘\`´ʼ"] > ;

::Title;
`;
