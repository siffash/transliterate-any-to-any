export const koEnRules = `
::NFC;

w { w+ > ;
y { y+ > ;
h { h+ > ;
[iy] { [iy]+ } [^[:L:][:M:]] > ;
[^[:L:][:M:]] { c+ } k > ;

::Null;

k { k+ } h > ;
g { g+ } h > ;

::Title;
`;
