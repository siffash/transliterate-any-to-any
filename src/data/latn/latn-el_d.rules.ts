export const latnElDRules = `
::Null;

[aeiouáéíóúAEIOUÁÉÍÓÚ] { d } [aeiouáéíóúrAEIOUÁÉÍÓÚR] > δ;
[aeiouáéíóúAEIOUÁÉÍÓÚ] { D } [aeiouáéíóúrAEIOUÁÉÍÓÚR] > Δ;
[aeiouáéíóúAEIOUÁÉÍÓÚ] { d } [^[:L:][:M:]] > δ;
[aeiouáéíóúAEIOUÁÉÍÓÚ] { D } [^[:L:][:M:]] > Δ;
`;
