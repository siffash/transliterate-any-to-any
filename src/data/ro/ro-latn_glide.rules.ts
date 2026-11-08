export const roLatnGlideRules = `
::Null;

[aeiouəïAEIOUƏÏ] { i } [aeouəïAEOUƏÏ] > y;
[aeiouəïAEIOUƏÏ] { I } [aeouəïAEOUƏÏ] > Y;
[aeouəAEOUƏ] { i } [^[:L:][:M:]] > y;
[aeouəAEOUƏ] { I } [^[:L:][:M:]] > Y;
[^aeiouəïAEIOUƏÏ] [iI] { i } [^[:L:][:M:]] > y;
[^aeiouəïAEIOUƏÏ] [iI] { I } [^[:L:][:M:]] > Y;
`;
