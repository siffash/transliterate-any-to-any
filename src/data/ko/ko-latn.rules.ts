export const koLatnRules = `
::Lower;
::NFC;

０ > 0;
１ > 1;
２ > 2;
３ > 3;
４ > 4;
５ > 5;
６ > 6;
７ > 7;
８ > 8;
９ > 9;

[:Hangul:] > ;

::Null;

seoul > seul;

[^[:L:][:M:]] { ng > ;
ng > ŋ;

wae > wä;
yae > yä;
ae > ä;
eo > o;
'_' eui > ïi;
[bcdghjklmnprstŋ] { eui > i;
eu > ï;
oe > ö;
ui > ïi;
wi > ü;
'_' > ;

::Null;

k { k+ > ;
t { t+ > ;
p { p+ > ;
s { s+ > ;
j { j+ > ;
l { l+ > ;
c { c+ > ;

::Null;

s } [iyü] > š;
ŋ { n > n;
n } [iyü] > ń;

ch > č;
sh > š;
c > k;
j > ǯ;

::Null;

[ščǯ] { y > ;

::Title;
`;
