export const zhEnRules = `
::NFC;

[āáǎà] > a;
[ēéěèêếềễệ] > e;
[īíǐì] > i;
[ōóǒò] > o;
[ūúǔù] > u;
[ǖǘǚǜ] > ü;

::Null;

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
