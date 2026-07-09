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
[jqxy] { ue > ü ö;
ü { e > ö;
[jqxy] { uan > ü ä n;
[jqxy] { u > ü;
[iy] { an > ä n;
[iy] { ong > ÿ n g;
[:^Letter:] { a > \\'a;
[:^Letter:] { e > \\'e;
[:^Letter:] { o > \\'o;

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
w > v;

::Null;

ei > ij;

::Title;
`;
