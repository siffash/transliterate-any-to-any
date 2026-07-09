export const koBgRules = `
seoul > сеул;
pyeongyang > пхенян;

$vowel_kobg = [aeiouwyаеиоуъюя];
$cyr_voiceless = [ктпсхчшц];
$cyr_j_end = [чж];

chyae > чхе;
chya > чха;
chyeo > чхо;
chyo > чхо;
chyu > чху;

k } $vowel_kobg > кх;
t } $vowel_kobg > тх;
p } $vowel_kobg > пх;

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

$vowel_kobg { ui > ъй;
[:^Letter:] { ui > ъй;
ui > и;
$vowel_kobg { eui > ъй;
[:^Letter:] { eui > ъй;
eui > и;
[:^Letter:] { yae > йе;
$vowel_kobg { yae > йе;
yae > е;
[:^Letter:] { yeo > йо;
$vowel_kobg { yeo > йо;
yeo > ьо;
wae > уе;
[:^Letter:] { ye > йе;
$vowel_kobg { ye > йе;
ye > е;
[:^Letter:] { yo > йо;
$vowel_kobg { yo > йо;
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

а { а > ;
б { б > ;
в { в > ;
г { г > ;
д { д > ;
е { е > ;
ж { ж > ;
з { з > ;
и { и > ;
й { й > ;
к { к > ;
л { л > ;
м { м > ;
н { н > ;
о { о > ;
п { п > ;
р { р > ;
с { с > ;
т { т > ;
у { у > ;
ф { ф > ;
х { х > ;
ц { ц > ;
ч { ч > ;
ш { ш > ;
щ { щ > ;
ъ { ъ > ;
ь { ь > ;
ю { ю > ;
я { я > ;

::Null;

й } и > ;
[:^Letter:] { й } [бвгджзйклмнрстфхцчшщ] > и;
[бвгджзйклмнрстфхцчшщ] { й } [бвгджзйклмнрстфхцчшщ] > и;

ь } [аеиу] > й;
ь } [яюъ] > ;
[ъь] } [:^Letter:] > ;

::Null;

йа > я;
йу > ю;
шт > щ;

::Title;
`;
