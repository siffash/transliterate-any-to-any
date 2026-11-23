export const esLatnDiphthongIRules = `
::Null;

[aeoáéóàèòâêôAEOÁÉÓÀÈÒÂÊÔ] { i } [yYjJ] > i;
[aeoáéóàèòâêôAEOÁÉÓÀÈÒÂÊÔ] { I } [yYjJ] > I;

[aeoáéóàèòâêôAEOÁÉÓÀÈÒÂÊÔ] { i } [^[:L:][:M:]] > y;
[aeoáéóàèòâêôAEOÁÉÓÀÈÒÂÊÔ] { I } [^[:L:][:M:]] > Y;

[aeoáéóàèòâêôAEOÁÉÓÀÈÒÂÊÔ] { i } [bcdfghklmnpqrstvwxzñçBCDFGHKLMNPQRSTVWXZÑÇ] > y;
[aeoáéóàèòâêôAEOÁÉÓÀÈÒÂÊÔ] { I } [bcdfghklmnpqrstvwxzñçBCDFGHKLMNPQRSTVWXZÑÇ] > Y;
`;
