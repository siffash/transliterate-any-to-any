export const lvLatnDiphthongIRules = `
::Null;

[aeouāēūAEOUĀĒŪ] { i } [jJ] > i;
[aeouāēūAEOUĀĒŪ] { I } [jJ] > I;

[aeouāēūAEOUĀĒŪ] { i } [^[:L:][:M:]] > y;
[aeouāēūAEOUĀĒŪ] { I } [^[:L:][:M:]] > Y;

[aeouāēūAEOUĀĒŪ] { i } [bcdfghjkļlmņnprsštvzžčģķBCDFGHJKĻLMŅNPRSŠTVZŽČĢĶ] > y;
[aeouāēūAEOUĀĒŪ] { I } [bcdfghjkļlmņnprsštvzžčģķBCDFGHJKĻLMŅNPRSŠTVZŽČĢĶ] > Y;
`;
