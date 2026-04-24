export const roIpaRules = `
::Lower;

$vowel = [aăâeîiou];
$cons_for_i = [bdfhjklmnprstvwxzșțkgŋ];
$boundary = [:^Letter:];

$boundary {eu} $boundary > jeu;
$boundary {el} $boundary > jel;
$boundary {ei} $boundary > jej;
$boundary {ele} $boundary > jele;
$boundary {ea} $boundary > ja;
$boundary {este} $boundary > jeste;
$boundary {ești} $boundary > jeʃtʲ;
$boundary {eram} $boundary > jeram;
$boundary {erai} $boundary > jeraj;
$boundary {era} $boundary > jera;
$boundary {erați} $boundary > jerat͡sʲ;
$boundary {erau} $boundary > jerau;

$boundary e {x} $vowel > gz;
$boundary e {x} h $vowel > gz;
x > ks;

{n} c > ŋ;
{n} k > ŋ;
{n} g > ŋ;
{n} q > ŋ;
{n} x > ŋ;

{cea} > t͡ʃa;
{ceo} > t͡ʃo;
{cia} > t͡ʃa;
{cio} > t͡ʃo;
{ciu} > t͡ʃu;
{gea} > d͡ʒa;
{geo} > d͡ʒo;
{gia} > d͡ʒa;
{gio} > d͡ʒo;
{giu} > d͡ʒu;

{ci} $boundary > t͡ʃʲ;
{gi} $boundary > d͡ʒʲ;
{chi} $boundary > kʲ;
{ghi} $boundary > gʲ;

{cheo} > ke̯o;
{gheo} > ge̯o;
{che} > ke;
{chi} > ki;
{ghe} > ge;
{ghi} > gi;

{c} e > t͡ʃ;
{c} i > t͡ʃ;
{g} e > d͡ʒ;
{g} i > d͡ʒ;

c > k;

{i} [aăâeîou] > j;
[aăâeîou] {i} > j;
{u} [aăâeîo] > w;
[aăâeîo] {u} > w;

eea > eja;
{e} a > e̯;
{o} a > o̯;

i {i} $boundary > j;
$cons_for_i r {i} $boundary > i;
$cons_for_i l {i} $boundary > i;
$cons_for_i {i} $boundary > ʲ;

ă > ə;
â > ɨ;
î > ɨ;
ș > ʃ;
ț > t͡s;
j > ʒ;
y > i;
w > v;
q > k;
`;
