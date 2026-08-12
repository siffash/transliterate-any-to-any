export const roIpaRules = `
::Lower;

[:^Letter:] {eu} [:^Letter:] > jeu;
[:^Letter:] {el} [:^Letter:] > jel;
[:^Letter:] {ei} [:^Letter:] > jej;
[:^Letter:] {ele} [:^Letter:] > jele;
[:^Letter:] {ea} [:^Letter:] > ja;
[:^Letter:] {este} [:^Letter:] > jeste;
[:^Letter:] {ești} [:^Letter:] > jeʃtʲ;
[:^Letter:] {eram} [:^Letter:] > jeram;
[:^Letter:] {erai} [:^Letter:] > jeraj;
[:^Letter:] {era} [:^Letter:] > jera;
[:^Letter:] {erați} [:^Letter:] > jerat͡sʲ;
[:^Letter:] {erau} [:^Letter:] > jerau;

[:^Letter:] e {x} [aăâeîiou] > gz;
[:^Letter:] e {x} h [aăâeîiou] > gz;
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

{ci} [:^Letter:] > t͡ʃʲ;
{gi} [:^Letter:] > d͡ʒʲ;
{chi} [:^Letter:] > kʲ;
{ghi} [:^Letter:] > gʲ;

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

i {i} [:^Letter:] > j;
[bdfhjklmnprstvwxzșțkgŋ] r {i} [:^Letter:] > i;
[bdfhjklmnprstvwxzșțkgŋ] l {i} [:^Letter:] > i;
[bdfhjklmnprstvwxzșțkgŋ] {i} [:^Letter:] > ʲ;

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
