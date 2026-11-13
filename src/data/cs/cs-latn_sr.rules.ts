export const csLatnSrRules = `
::NFC;

[AEIOUYÁÉÍÓÚŮÝĚ] { Ř } [aeiouyáéíóúůýěAEIOUYÁÉÍÓÚŮÝĚ] > RŽ;
[aeiouyáéíóúůýěAEIOUYÁÉÍÓÚŮÝĚ] { Ř } [AEIOUYÁÉÍÓÚŮÝĚ] > RŽ;
[aeiouyáéíóúůýěAEIOUYÁÉÍÓÚŮÝĚ] { Ř } [aeiouyáéíóúůýěAEIOUYÁÉÍÓÚŮÝĚ] > Rž;
[aeiouyáéíóúůýěAEIOUYÁÉÍÓÚŮÝĚ] { ř } [aeiouyáéíóúůýěAEIOUYÁÉÍÓÚŮÝĚ] > rž;

[aeiouyáéíóúůýěAEIOUYÁÉÍÓÚŮÝĚ] { Ř } [^[:L:][:M:]] > RŽ;
[aeiouyáéíóúůýěAEIOUYÁÉÍÓÚŮÝĚ] { ř } [^[:L:][:M:]] > rž;

Ř > R;
ř > r;

dě > dje;
Dě > Dje;
dĚ > dJE;
DĚ > DJE;

[iI] [šŠ] { tě } [^[:L:][:M:]] > te;
[iI] [šŠ] { Tě } [^[:L:][:M:]] > Te;
[iI] [šŠ] { tĚ } [^[:L:][:M:]] > tE;
[IÍ] [šŠ] { TĚ } [^[:L:][:M:]] > TE;

tě > tje;
Tě > Tje;
tĚ > tJE;
TĚ > TJE;

Ď } [AEIOUYÁÉÍÓÚŮÝ] > DJ;
Ď } [aeiouyáéíóúůý] > Dj;
ď } [aeiouyáéíóúůýAEIOUYÁÉÍÓÚŮÝ] > dj;

Ď > D;
ď > d;

Ť } [AEIOUYÁÉÍÓÚŮÝ] > TJ;
Ť } [aeiouyáéíóúůý] > Tj;
ť } [aeiouyáéíóúůýAEIOUYÁÉÍÓÚŮÝ] > tj;

Ť > T;
ť > t;

N } [iíIÍ] > Ň;
n } [iíIÍ] > ň;
`;
