export const zhJaRules = `
::Any-Latn;

[vüǚǜǘǔ\u0075\u0308] > yu;
::Latin-ASCII;
::Lower();

xi > shi;

ng } [^[:L:]] > n;
ng } $ > n;

[:White_Space:] > ;

::Katakana;
`;
