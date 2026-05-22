export const ptIpaRules = `
::Lower;

$vowel = [a á à ã â e é ê i í î o ó õ ô u ú];
$nasal_vowel = [ã õ];
$cons = [b c d f g j k l m n p q r s t v w x y z ç ɲ ʎ ʃ ʒ ʁ ɾ];
$voiceless = [p t k f s ʃ ç x];
$voiced_cons = [b d g v m n l r z ʒ ʎ ɲ];
$boundary = [:^Letter:];
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
$boundary {x} > ʃ;
x > ʃ;

{c} [e é ê i í î] > s;
c > k;
{g} [e é ê i í î] > ʒ;

j > ʒ;

{r} r > ʁ;
$boundary {r} > ʁ;
r > ɾ;

$vowel {s} $vowel > z;
{s} [p t k f s ç x h] > ʃ;
{s} $boundary > ʃ;
{ s } $voiced_cons > ʒ;
s > s;

{z} [p t k f s ç x h] > ʒ;
{z} $boundary > ʃ;
{z} $voiced_cons > z;
z > z;

h > ;

[ $vowel ɾ ɫ ʃ ʒ f v ] {b} $vowel > β;
[ $vowel ɾ ɫ ʃ ʒ f v ] {d} $vowel > ð;
[ $vowel ɾ ɫ ʃ ʒ f v ] {g} $vowel > ɣ;

ãe > ɐ̃j̃;
ão > ɐ̃w̃;
õe > õj̃;

{ens} $boundary > ɐ̃j̃ʃ;
{em} $boundary > ɐ̃j̃;
{ém} $boundary > ˈɐ̃j̃;
{am} $boundary > ɐ̃w̃;
{en} $boundary > ẽj̃;

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

{a} [l r z x] $boundary > a;
{a} $boundary > ɐ;
{e} [l r z x] $boundary > ɛ;
{e} $boundary > ɨ;
$letter {e} $letter > ɨ;
{o} [l r z x] $boundary > ɔ;
{o} $boundary > u;

{i} $vowel > j;
{u} $vowel > w;

{a} t r [i í] > ɐ;
{a} [m r] > ɐ;
$boundary {a} > ɐ;
a > a;
e > e;
{i} ɲ > ĩ;
i > i;
{o} s > u;
o > o;
u > u;

{l} $cons > ɫ;
{l} $boundary > ɫ;
`;
