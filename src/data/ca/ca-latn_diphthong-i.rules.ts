export const caLatnDiphthongIRules = `
::Null;

[aeoáéóàèòâêôAEOÁÉÓÀÈÒÂÊÔ] { i } [yYjJxX] > i;
[aeoáéóàèòâêôAEOÁÉÓÀÈÒÂÊÔ] { I } [yYjJxX] > I;

[aeoáéóàèòâêôAEOÁÉÓÀÈÒÂÊÔ] { i } [gG] [^[:L:][:M:]] > i;
[aeoáéóàèòâêôAEOÁÉÓÀÈÒÂÊÔ] { I } [gG] [^[:L:][:M:]] > I;

[aeoáéóàèòâêôAEOÁÉÓÀÈÒÂÊÔ] { i } [^[:L:][:M:]] > y;
[aeoáéóàèòâêôAEOÁÉÓÀÈÒÂÊÔ] { I } [^[:L:][:M:]] > Y;

[aeoáéóàèòâêôAEOÁÉÓÀÈÒÂÊÔ] { i } [bcdfghjklmnpqrstvwxzñçBCDFGHJKLMNPQRSTVWXZÑÇ] > y;
[aeoáéóàèòâêôAEOÁÉÓÀÈÒÂÊÔ] { I } [bcdfghjklmnpqrstvwxzñçBCDFGHJKLMNPQRSTVWXZÑÇ] > Y;
`;
