export const roIpaRules = `
::Lower;

[^[:L:][:M:]] {eu} [^[:L:][:M:]] > jeu;
[^[:L:][:M:]] {el} [^[:L:][:M:]] > jel;
[^[:L:][:M:]] {ei} [^[:L:][:M:]] > jej;
[^[:L:][:M:]] {ele} [^[:L:][:M:]] > jele;
[^[:L:][:M:]] {ea} [^[:L:][:M:]] > ja;
[^[:L:][:M:]] {este} [^[:L:][:M:]] > jeste;
[^[:L:][:M:]] {ești} [^[:L:][:M:]] > jeʃtʲ;
[^[:L:][:M:]] {eram} [^[:L:][:M:]] > jeram;
[^[:L:][:M:]] {erai} [^[:L:][:M:]] > jeraj;
[^[:L:][:M:]] {era} [^[:L:][:M:]] > jera;
[^[:L:][:M:]] {erați} [^[:L:][:M:]] > jerat͡sʲ;
[^[:L:][:M:]] {erau} [^[:L:][:M:]] > jerau;

[^[:L:][:M:]] e {x} [aăâeîiou] > gz;
[^[:L:][:M:]] e {x} h [aăâeîiou] > gz;
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

{ci} [^[:L:][:M:]] > t͡ʃʲ;
{gi} [^[:L:][:M:]] > d͡ʒʲ;
{chi} [^[:L:][:M:]] > kʲ;
{ghi} [^[:L:][:M:]] > gʲ;

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

i {i} [^[:L:][:M:]] > j;
[bdfhjklmnprstvwxzșțkgŋ] r {i} [^[:L:][:M:]] > i;
[bdfhjklmnprstvwxzșțkgŋ] l {i} [^[:L:][:M:]] > i;
[bdfhjklmnprstvwxzșțkgŋ] {i} [^[:L:][:M:]] > ʲ;

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
