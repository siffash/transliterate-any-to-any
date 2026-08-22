export { transliterate } from "./transliterate";
export { type Script, type Language } from "./types";
export { scripts, languages } from "helpers/constants";
export { confirmLanguageByScript } from "helpers/confirmLanguageByScript";

// *** EXPERIMENTS ***

import { transliterate } from "./transliterate";
const test = async () => {
  console.log(
    await transliterate(
      "لاہور, کراچی, پشاور, کوئٹہ, ملتان, راولپنڈی, گوجرانوالہ, سیالکوٹ, حیدرآباد, سکھر, بہاولپور, سرگودھا, مردان, چنیوٹ, گوادر, گلگت, اسکردو, مری, جہلم, قصور, عمران خان, طارق محمود, عائشہ صدیقہ, بلال احمد, زارا شیخ, عمر فاروق, ثناء میر, حمزہ علی, مریم نواز, فواد چوہدری, سعد رفیق, عثمان بزدار, اسد قیصر, شیریں مزاری, پرویز خٹک, شاہد آفریدی, ندا یاسر, دانش تیمور, سجل نور, فہد مصطفیٰ, نیسلے, پیپسی, ٹویوٹا, ہونڈا, مائیکروسافٹ, ایپل, گوگل, ایمیزون, پیناسونک, توشیبا, نوکیا, میٹا, ٹیسلا, سونی, ٹویٹر, انٹیل, ڈیل, لینووو, اوریکل, ہواوے",
      { from: "ur", to: "en" },
    ),
  );
};
test();
