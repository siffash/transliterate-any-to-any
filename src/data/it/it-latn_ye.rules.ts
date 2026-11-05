export const itLatnYeRules = `
::Null;

[^[:L:][:M:]] { i } [aeouAEOU] > y;
[^[:L:][:M:]] { I } [aeouAEOU] > Y;
[aeouAEOU] { i } [aouAOU] > y;
[aeouAEOU] { I } [aouAOU] > Y;

[bfklmnptvBFKLMNPTV] { i } [eE] [lL] [^lL] > i;
[bfklmnptvBFKLMNPTV] { I } [eE] [lL] [^lL] > I;
[bfklmnptvBFKLMNPTV] { i } [eE] [:L:] > y;
[bfklmnptvBFKLMNPTV] { I } [eE] [:L:] > Y;

[kgKG] { i } [aouAOU] > y;
[kgKG] { I } [aouAOU] > Y;
[bflmnpstvBFLMNPSTV] { i } [aouAOU] [^[:L:][:M:]] > i;
[bflmnpstvBFLMNPSTV] { I } [aouAOU] [^[:L:][:M:]] > I;
[bflmnpstvBFLMNPSTV] { i } [oO] [lL] [aeioAEIO] [^[:L:][:M:]] > i;
[bflmnpstvBFLMNPSTV] { I } [oO] [lL] [aeioAEIO] [^[:L:][:M:]] > I;
[:L:] [bflmnpstvBFLMNPSTV] { i } [aA] [glntGLNT] [aeiouAEIOU] [^[:L:][:M:]] > i;
[:L:] [bflmnpstvBFLMNPSTV] { I } [aA] [glntGLNT] [aeiouAEIOU] [^[:L:][:M:]] > I;
[:L:] [bflmnpstvBFLMNPSTV] { i } [aA] [sS] [kK] [aeiouAEIOU] [^[:L:][:M:]] > i;
[:L:] [bflmnpstvBFLMNPSTV] { I } [aA] [sS] [kK] [aeiouAEIOU] [^[:L:][:M:]] > I;
[bflmnpstvBFLMNPSTV] { i } [aouAOU] [:L:] > y;
[bflmnpstvBFLMNPSTV] { I } [aouAOU] [:L:] > Y;
`;
