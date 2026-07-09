export const koMkRules = `
seoul > сеул;
pyeongyang > пјонгјанг;

$vowel_komk = [aeiouwyаеиоу];
$voiceless = [кптсхчшц];
$j_end = [чџ];

$j_end { yae > е;
$j_end { ya > а;
$j_end { yeo > о;
$j_end { yo > о;
$j_end { yu > у;
$j_end { ye > е;

$vowel_komk { ui > уи;
[:^Letter:] { ui > уи;
ui > и;

$vowel_komk { eui > уи;
[:^Letter:] { eui > уи;
eui > и;

yae > је;
wae > ве;
yeo > јо;
wa > ва;
we > ве;
wo > во;
wi > ви;
oe > ве;
yu > ју;
ya > ја;
ae > е;
eo > о;

ye > је;
yo > јо;
eu > у;

a > а;
e > е;
o > о;
u > у;
i > и;

kk > кк;
tt > тт;
pp > пп;
ss > сс;
jj > чч;
ch > ч;

k > к;
t > т;
p > п;
s > с;
h > х;

$voiceless { g > к;
[:^Letter:] { g > к;
g > г;

$voiceless { d > т;
[:^Letter:] { d > т;
d > д;

$voiceless { b > п;
[:^Letter:] { b > п;
b > б;

$voiceless { j > ч;
[:^Letter:] { j > ч;
j > џ;

ng > нг;
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
ѓ { ѓ > ;
е { е > ;
ж { ж > ;
з { з > ;
ѕ { ѕ > ;
и { и > ;
ј { ј > ;
к { к > ;
л { л > ;
љ { љ > ;
м { м > ;
н { н > ;
њ { њ > ;
о { о > ;
п { п > ;
р { р > ;
с { с > ;
т { т > ;
ќ { ќ > ;
у { у > ;
ф { ф > ;
х { х > ;
ц { ц > ;
ч { ч > ;
џ { џ > ;
ш { ш > ;

::Null;

лј > љ;
нј > њ;
дз > ѕ;
дж > џ;

ји > и;
иа > ија;

[аеиоу] { ј } [ео] > ;

[:^Letter:] { ['’‘\`´ʼ"] } р > ;

[:^Letter:] { ј } [бвгдѓжзѕјклљмнњпрстќфхцчџш] > и;
[бвгдѓжзѕјклљмнњпрстќфхцчџш] { ј } [бвгдѓжзѕјклљмнњпрстќфхцчџш] > и;

::Title;
`;
