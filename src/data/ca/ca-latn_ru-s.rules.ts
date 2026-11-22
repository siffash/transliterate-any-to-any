export const caLatnRuSRules = `
::Null;

[^[:L:][:M:]] [Jj] [Oo] { s } [EÉeé] > s;
[^[:L:][:M:]] [Jj] [Oo] { S } [EÉeé] > S;
[aeiouàèéíòóúïüAEIOUÀÈÉÍÒÓÚÏÜ] { s } [aeiouàèéíòóúïüAEIOUÀÈÉÍÒÓÚÏÜ] > ss;
[aeiouàèéíòóúïüAEIOUÀÈÉÍÒÓÚÏÜ] { S } [aeiouàèéíòóúïüAEIOUÀÈÉÍÒÓÚÏÜ] > SS;
`;
