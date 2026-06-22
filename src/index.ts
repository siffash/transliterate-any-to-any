export { supportedLanguages } from "helpers/languages";
export { Language } from "types";
export { transliterate } from "transliterate";

// *** EXPERIMENTS ***

import { transliterate } from "transliterate";
import { RBT } from "icu-transliterator";
import { kkLatnRules } from "constants/kk-latn.rules";
const test = async () => {
  // console.log(
  //   await transliterate(
  //     `القدس, بغداد, طنجة, مسقط, المنامة, بيروت, الخرطوم, تلمسان, بنغازي, حلب, نواكشوط, جيبوتي, صفاقس, جبل طارق, وادي النيل, صلالة, مكة المكرمة, إربد, تطوان, تعز, محمد عبد الرحمن الفاسي, يوسف إبراهيم الحوسني, فاطمة صالح المري, سارة جاسم الغامدي, خالد وليد الزهراني, عمر حسن الشمري, ليلى كمال العبيدي, زينب محمود الرشيدي, علي حمزة البلوشي, مريم سيف الناصري, إيمان ناصر الكندري, فهد سليمان العتيبي, نورة حمد التميمي, ماجد عدنان السعدي, ريم منير القحطاني, بدر عصام الحربي, منى توفيق الدوسري, حمد عيسى الهاجري, لولوة مساعد المطيري, سامي رائد الخالدي, شركة النبراس للخدمات النفطية, مؤسسة الأفق للتجارة العامة, مصنع الرواد للصناعات الثقيلة, مجموعة الهلال للاستثمارات المالية, وكالة الصقور للسياحة والسفر, مطابع التميز الفنية, مختبرات الحياة للتحاليل الطبية, مدارس القمة العالمية, فندق اللؤلؤة السياحي, مطاعم الضيافة العربية, شركة البنيان للمقاولات الإنشائية, مؤسسة الثريا للطاقة المتجددة, شركة السنابل للمنتجات الغذائية, مصنع الياقوت للمجوهرات, مجموعة المسار للحلول التقنية, شركة الأمانة للتأمين التكافلي, مؤسسة الشراع للملاحة البحرية, شركة الواحة للزراعة الحديثة, مكتبة الحكمة للنشر والتوزيع, شركة المنارة للخدمات اللوجستية
  // `,
  //     { from: "ar", to: "en" },
  //   ),
  // );
  // console.log(
  //   RBT.fromRules(kkLatnRules)
  //     .transliterate(`Alakól, Balqaş, Kökşetau, Ulytau, Baianauyl, Mañğystau, Zaiysan, Qyzylorda, Jetisu, Saryarqa, Temirtau, Shardara, Qarqaraly, Merkí, Qatunqarğai, Atasu, Üştöbe, Jarkent, Alatau, Maibalyq, Arman Seríkuly Bolatov, Dana Muratqyzy Sakenova, Bauyrjan Erjanuly Amanov, Gùlnar Bolatqyzy Isajonova, Ruslan Aslanuly Qairatov, Aigùl Janatqyzy Omarova, Marat Sùleimenuly Ahmedov, Janar Aidarqyzy Beisenova, Timur Erbolatuly Jùsípov, Meruert Qanatqyzy Seríkova, Oljas Muratuly Ismailov, Saule Beríkqyzy Hasanova, Darhan Nurlanuly Saparov, Tolqyn Talatqyzy Alieva, Esen Bolatuly Qydyrov, Saltanat Asqarqyzy Temírova, Nurdaulet Erjanuly Batyrov, Ämína Diasqyzy Joldasova, Bekzat Maratuly Nurjanov, Gauhar Alíqyzy Maqsutova, Qazaqstan Temír Joly, Almaty Qurylys Kompaniasy, Astana Baiterek Holdingi, Kaspi Bank Aktsionerlìk Qoğamy, Nomad Saqtandyru Ortalyğy, Barys Hokkei Kluby, Samruq Qazyna Qory, Qazaqtelekom Bailanys Operatory, Kúitai Jer Resurstary, Dalatrans Jùk Tasymaldaýşy, Alma TV Televizia Jelìsì, Magnum Retail Sauda Jelìsì, Air Astana Äue Kompaniasy, Qazaqoil Energetika Korporasiasy, Bi Group Qurylys Holdingi, Techno Dom Elekronika Dùkenì, Sulpak Turmystyq Tehnika, Kazatomprom Atom Óndìrìsì, Beeline Mobil Baky qyzmetì, Halyk Bank Halyqtyq Jinaq Bankì
  // `),
  // );
};
test();
