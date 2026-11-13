export const caLatnSHoldRules = `
::NFC;

[aeiouàèéíòóúAEIOUÀÈÉÍÒÓÚ] { s } [aeiouàèéíòóúïüAEIOUÀÈÉÍÒÓÚÏÜ] > ſ;
[aeiouàèéíòóúAEIOUÀÈÉÍÒÓÚ] { S } [aeiouàèéíòóúïüAEIOUÀÈÉÍÒÓÚÏÜ] > Ʃ;
`;
