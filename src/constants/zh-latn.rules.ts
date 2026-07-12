export const zhLatnRules = `
::Lower;
::NFC;

[āáǎà] > a;
[ēéěèêếềễệ] > e;
[īíǐì] > i;
[ōóǒò] > o;
[ūúǔù] > u;
[ǖǘǚǜ] > ü;

::Null;

[zcshr] { i > ï;
[jqxy] { ue > üö;
ü { e > ö;
[jqxy] { uan > üän;
[jqxy] { u > ü;
[iy] { a } ng > a;
[iy] { an > än;
[iy] { ong > ÿng;

::Null;

zh > dž;
ch > č;
sh > š;
c > ts;
z > dz;
q > ć;
j > đ;
x > s;
h > x;
r } [aäeiïoöuüÿ] > ž;

::Null;

ei > ij;

::Title;
`;
