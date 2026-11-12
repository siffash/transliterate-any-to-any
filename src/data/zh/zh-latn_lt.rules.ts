export const zhLatnLtRules = `
::NFC;

[^[:L:][:M:]'’] { w } [uūúǔù] > ;
[^[:L:][:M:]'’] { y } [iīíǐì] > ;
[^[:L:][:M:]] { j } [uūúǔù] > ẑi;
[^[:L:][:M:]] { j > ẑ;
[^[:L:][:M:]] { r > ž;
`;
