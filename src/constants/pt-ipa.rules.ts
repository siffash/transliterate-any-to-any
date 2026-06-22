export const ptIpaRules = `
::Lower;

$vowel = [a á à ã â e é ê i í î o ó õ ô u ú];
$nasal_vowel = [ã õ];
$cons = [b c d f g j k l m n p q r s t v w x y z ç ɲ ʎ ʃ ʒ ʁ ɾ];
$voiceless = [p t k f s ʃ ç x];
$voiced_cons = [b d g v m n l r z ʒ ʎ ɲ];
$letter = [:Letter:];

ch > ʃ;
lh > ʎ;
nh > ɲ;
rr > ʁ;
ss > s;
ç > s;
a l e { x } a n d r > ʃ;

::Null;

{qu} [e é ê i í î] > k;
{qu} [a á à ã â o ó õ ô u ú] > kw;
{gu} [e é ê i í î] > g;
{gu} [a á à ã â o ó õ ô u ú] > gw;

{ex} $vowel > ez;
{ex} $cons > eʃ;
$vowel {x} [p t k] > ks;
[:^Letter:] {x} > ʃ;
x > ʃ;

{c} [e é ê i í î] > s;
c > k;
{g} [e é ê i í î] > ʒ;

j > ʒ;

{r} r > ʁ;
[:^Letter:] {r} > ʁ;
r > ɾ;

$vowel {s} $vowel > z;
{s} [p t k f s ç x h] > ʃ;
{s} [:^Letter:] > ʃ;
{ s } $voiced_cons > ʒ;
s > s;

{z} [p t k f s ç x h] > ʒ;
{z} [:^Letter:] > ʃ;
{z} $voiced_cons > z;
z > z;

h > ;

[ $vowel ɾ ɫ ʃ ʒ f v ] {b} $vowel > β;
[ $vowel ɾ ɫ ʃ ʒ f v ] {d} $vowel > ð;
[ $vowel ɾ ɫ ʃ ʒ f v ] {g} $vowel > ɣ;

ãe > ɐ̃j̃;
ão > ɐ̃w̃;
õe > õj̃;

{ens} [:^Letter:] > ɐ̃j̃ʃ;
{em} [:^Letter:] > ɐ̃j̃;
{ém} [:^Letter:] > ˈɐ̃j̃;
{am} [:^Letter:] > ɐ̃w̃;
{en} [:^Letter:] > ẽj̃;

{am} $cons > ɐ̃;
{an} $cons > ɐ̃;
{em} $cons > ẽ;
{en} $cons > ẽ;
{im} $cons > ĩ;
{in} $cons > ĩ;
{om} $cons > õ;
{on} $cons > õ;
{um} $cons > ũ;
{un} $cons > ũ;

ã > ɐ̃;
õ > õ;

á > ˈa;
à > a;
â > ɐ;
é > ˈɛ;
ê > e;
í > ˈi;
ó > ˈɔ;
ô > o;
ú > ˈu;

{a} [l r z x] [:^Letter:] > a;
{a} [:^Letter:] > ɐ;
{e} [l r z x] [:^Letter:] > ɛ;
{e} [:^Letter:] > ɨ;
$letter {e} $letter > ɨ;
{o} [l r z x] [:^Letter:] > ɔ;
{o} [:^Letter:] > u;

{i} $vowel > j;
{u} $vowel > w;

{a} t r [i í] > ɐ;
{a} [m r] > ɐ;
[:^Letter:] {a} > ɐ;
a > a;
e > e;
{i} ɲ > ĩ;
i > i;
{o} s > u;
o > o;
u > u;

{l} $cons > ɫ;
{l} [:^Letter:] > ɫ;
`;
