export const koBgRules = `
seoul > сеул;
pyeongyang > пхенян;

$vowel = [aeiouwyаеиоуъюя];
$cyr_voiceless = [ктпсхчшц];
$cyr_j_end = [чж];

chyae > чхе;
chya > чха;
chyeo > чхо;
chyo > чхо;
chyu > чху;

k } $vowel > кх;
t } $vowel > тх;
p } $vowel > пх;

kk > кк;
tt > тт;
pp > пп;
ss > сс;
jj > чч;
ch > чх;

$cyr_j_end { yae > е;
$cyr_j_end { ya > а;
$cyr_j_end { yeo > о;
$cyr_j_end { yo > о;
$cyr_j_end { yu > у;

j { yae > е;
j { ya > а;
j { yeo > о;
j { yo > о;
j { yu > у;

$vowel { ui > ъй;
[:^Letter:] { ui > ъй;
ui > и;
$vowel { eui > ъй;
[:^Letter:] { eui > ъй;
eui > и;
[:^Letter:] { yae > йе;
$vowel { yae > йе;
yae > е;
[:^Letter:] { yeo > йо;
$vowel { yeo > йо;
yeo > ьо;
wae > уе;
[:^Letter:] { ye > йе;
$vowel { ye > йе;
ye > е;
[:^Letter:] { yo > йо;
$vowel { yo > йо;
yo > ьо;

wa > уа;
we > уе;
wo > уо;
wi > уи;
oe > уе;
yu > ю;
ya > я;
ae > е;
eo > о;
eu > ъ;
a > а;
e > е;
o > о;
u > у;
i > и;
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
l > л;
r > р;
m > м;
n > н;
\\- > ;

::Null;

аа > а;
бб > б;
вв > в;
гг > г;
дд > д;
ее > е;
жж > ж;
зз > з;
ии > и;
йй > й;
кк > к;
лл > л;
мм > м;
нн > н;
оо > о;
пп > п;
рр > р;
сс > с;
тт > т;
уу > у;
фф > ф;
хх > х;
цц > ц;
чч > ч;
шш > ш;
щщ > щ;
ъъ > ъ;
ьь > ь;
юю > ю;
яя > я;

::Null;

йа > я;
йу > ю;
шт > щ;

[:Letter:] [:Letter:] { ъ } [:^Letter:] > ;

::Title;
`;
