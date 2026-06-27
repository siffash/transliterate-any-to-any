export const koMkRules = `
seoul > сеул;
pyeongyang > пјонгјанг;

$vowel = [aeiouwyаеиоу];
$voiceless = [кптсхчшц];
$j_end = [чџ];

$j_end { yae > е;
$j_end { ya > а;
$j_end { yeo > о;
$j_end { yo > о;
$j_end { yu > у;
$j_end { ye > е;

$vowel { ui > уи;
[:^Letter:] { ui > уи;
ui > и;

$vowel { eui > уи;
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

аа > а;
бб > б;
вв > в;
гг > г;
дд > д;
ѓѓ > ѓ;
ее > е;
жж > ж;
зз > з;
ѕѕ > ѕ;
ии > и;
јј > ј;
кк > к;
лл > л;
љљ > љ;
мм > м;
нн > н;
њњ > њ;
оо > о;
пп > п;
рр > р;
сс > с;
тт > т;
ќќ > ќ;
уу > у;
фф > ф;
хх > х;
цц > ц;
чч > ч;
џџ > џ;
шш > ш;

::Null;

дз > ѕ;
дж > џ;
лј > љ;
нј > њ;

::Title;
`;
