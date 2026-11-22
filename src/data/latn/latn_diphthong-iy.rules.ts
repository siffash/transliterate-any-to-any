export const latnDiphthongIyRules = `
::Null;

[aeouäöüïAEOUÄÖÜÏ] { i } [jJ] > i;
[aeouäöüïAEOUÄÖÜÏ] { I } [jJ] > I;

[aeouäöüïAEOUÄÖÜÏ] { i } [^[:L:][:M:]] > y;
[aeouäöüïAEOUÄÖÜÏ] { I } [^[:L:][:M:]] > Y;

[aeouäöüïAEOUÄÖÜÏ] { i } [[:L:]-[aeiouyäöüïõåAEIOUYÄÖÜÏÕÅ]] > y;
[aeouäöüïAEOUÄÖÜÏ] { I } [[:L:]-[aeiouyäöüïõåAEIOUYÄÖÜÏÕÅ]] > Y;
`;
