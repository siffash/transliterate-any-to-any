export const ptLatnDiphthongIRules = `
::Null;

[aeoáéóàèòâêôAEOÁÉÓÀÈÒÂÊÔ] { i } [yYjJ] > i;
[aeoáéóàèòâêôAEOÁÉÓÀÈÒÂÊÔ] { I } [yYjJ] > I;

[aeoáéóàèòâêôAEOÁÉÓÀÈÒÂÊÔ] { i } [lrzmnLRZMN] [^aeiouáéíóúâêôãõàlrzmnAEIOUÁÉÍÓÚÂÊÔÃÕÀLRZMN] > i;
[aeoáéóàèòâêôAEOÁÉÓÀÈÒÂÊÔ] { I } [lrzmnLRZMN] [^aeiouáéíóúâêôãõàlrzmnAEIOUÁÉÍÓÚÂÊÔÃÕÀLRZMN] > I;

[aeoáéóàèòâêôAEOÁÉÓÀÈÒÂÊÔ] { i } [lrzmnLRZMN] [^[:L:][:M:]] > i;
[aeoáéóàèòâêôAEOÁÉÓÀÈÒÂÊÔ] { I } [lrzmnLRZMN] [^[:L:][:M:]] > I;

[aeoáéóàèòâêôAEOÁÉÓÀÈÒÂÊÔ] { i } [^[:L:][:M:]] > y;
[aeoáéóàèòâêôAEOÁÉÓÀÈÒÂÊÔ] { I } [^[:L:][:M:]] > Y;

[aeoáéóàèòâêôAEOÁÉÓÀÈÒÂÊÔ] { i } [bcdfghjklmnpqrstvwxzñçBCDFGHJKLMNPQRSTVWXZÑÇ] > y;
[aeoáéóàèòâêôAEOÁÉÓÀÈÒÂÊÔ] { I } [bcdfghjklmnpqrstvwxzñçBCDFGHJKLMNPQRSTVWXZÑÇ] > Y;
`;
