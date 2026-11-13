export const caLatnAyRules = `
::Null;

[aeoàèéòóAEOÀÈÉÒÓ] { i } [gG] [^[:L:][:M:]] > i;
[aeoàèéòóAEOÀÈÉÒÓ] { I } [gG] [^[:L:][:M:]] > I;

[aeoàèéòóAEOÀÈÉÒÓ] { i } [gG] [bcçdfghjklmnpqrstvwxzBCÇDFGHJKLMNPQRSTVWXZ] > i;
[aeoàèéòóAEOÀÈÉÒÓ] { I } [gG] [bcçdfghjklmnpqrstvwxzBCÇDFGHJKLMNPQRSTVWXZ] > I;

[aeoàèéòóAEOÀÈÉÒÓ] { i } [^[:L:][:M:]] > y;
[aeoàèéòóAEOÀÈÉÒÓ] { I } [^[:L:][:M:]] > Y;

[aeoàèéòóAEOÀÈÉÒÓ] { i } [bcçdfghjklmnpqrstvwzBCÇDFGHJKLMNPQRSTVWZ] > y;
[aeoàèéòóAEOÀÈÉÒÓ] { I } [bcçdfghjklmnpqrstvwzBCÇDFGHJKLMNPQRSTVWZ] > Y;
`;
