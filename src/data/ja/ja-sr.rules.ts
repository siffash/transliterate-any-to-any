export const jaSrRules = `
::Null;
::Lower;

['’‘\`´ʼ] > ;

[aou] { i } [^[:L:][:M:]] > j;
ij } [^[:L:][:M:]] > ej;
ij > ei;

ćć > č;
ć > č;
[đǯ] > dž;
ń > nj;
y > j;
w > v;



::Null;

a { a+ > ;
e { e+ > ;
i { i+ > ;
o { o+ > ;
u { u+ > ;
b { b+ > ;
c { c+ > ;
č { č+ > ;
ć { ć+ > ;
d { d+ > ;
đ { đ+ > ;
f { f+ > ;
g { g+ > ;
h { h+ > ;
j { j+ > ;
k { k+ > ;
l { l+ > ;
m { m+ > ;
n { n+ > ;
p { p+ > ;
r { r+ > ;
s { s+ > ;
š { š+ > ;
t { t+ > ;
v { v+ > ;
z { z+ > ;
ž { ž+ > ;

::Null;

dz { (dz)+ > ;
dž { (dž)+ > ;
lj { (lj)+ > ;
nj { (nj)+ > ;

::Null;

i { a > ja;
i { e > je;
i { u > ju;

::Title;
`;
