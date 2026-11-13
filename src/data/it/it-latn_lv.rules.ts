export const itLatnLvRules = `
::Null;

[aeiouAEIOU] [^aeiouAEIOU[^[:L:][:M:]]]+ { a } [bcdfghklmnprstvzčšžǯẑBCDFGHKLMNPRSTVZČŠŽǮẐ] [iyIY]? [aeiouAEIOU] [^[:L:][:M:]] > ā;
[aeiouAEIOU] [^aeiouAEIOU[^[:L:][:M:]]]+ { A } [bcdfghklmnprstvzčšžǯẑBCDFGHKLMNPRSTVZČŠŽǮẐ] [iyIY]? [aeiouAEIOU] [^[:L:][:M:]] > Ā;

[aeiouAEIOU] [^aeiouAEIOU[^[:L:][:M:]]]+ { e } [bcdfghklmnprstvzčšžǯẑBCDFGHKLMNPRSTVZČŠŽǮẐ] [iyIY]? [aeiouAEIOU] [^[:L:][:M:]] > ē;
[aeiouAEIOU] [^aeiouAEIOU[^[:L:][:M:]]]+ { E } [bcdfghklmnprstvzčšžǯẑBCDFGHKLMNPRSTVZČŠŽǮẐ] [iyIY]? [aeiouAEIOU] [^[:L:][:M:]] > Ē;

[aeiouAEIOU] [^aeiouAEIOU[^[:L:][:M:]]]+ { i } [bcdfghklmnprstvzčšžǯẑBCDFGHKLMNPRSTVZČŠŽǮẐ] [iyIY]? [aeiouAEIOU] [^[:L:][:M:]] > ī;
[aeiouAEIOU] [^aeiouAEIOU[^[:L:][:M:]]]+ { I } [bcdfghklmnprstvzčšžǯẑBCDFGHKLMNPRSTVZČŠŽǮẐ] [iyIY]? [aeiouAEIOU] [^[:L:][:M:]] > Ī;

[aeiouAEIOU] [^aeiouAEIOU[^[:L:][:M:]]]+ { u } [bcdfghklmnprstvzčšžǯẑBCDFGHKLMNPRSTVZČŠŽǮẐ] [iyIY]? [aeiouAEIOU] [^[:L:][:M:]] > ū;
[aeiouAEIOU] [^aeiouAEIOU[^[:L:][:M:]]]+ { U } [bcdfghklmnprstvzčšžǯẑBCDFGHKLMNPRSTVZČŠŽǮẐ] [iyIY]? [aeiouAEIOU] [^[:L:][:M:]] > Ū;
`;
