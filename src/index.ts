export { supportedLanguages } from "constants/languages";
export { Language } from "types/languages";
export { transliterate } from "utils/transliterate";

// *** EXPERIMENTS ***
import { RBT } from "icu-transliterator";
import { ipaZhRules } from "constants/ipa-zh.rules";
const test = async () => {
  const transliterator = RBT.fromRules(ipaZhRules);
  console.log(
    transliterator.transliterate(`
kæt bæt dɑɡ lɑɡ ʃɪp ʃip θɪŋk ðɪs ˈmɛʒər ˈvɪʒən jɛs wɛt ɹʌn lʌŋ but bʊk bɜ˞d bʌd əˈbaʊt ˈfɑðər
ˈlɪvərpul ˈlʌndən ˈɛdɪnbərə ˈɡlɑsgəʊ ˈkɑrdɪf ˈbɜrmɪŋəm ˈmæntʃɛstər ˈnju jɔrk ˈlɔs ˈændʒələs ˈtʃɪkəɡoʊ ˈwɑʃɪŋtən ˈsɪdnɪ ˈmɛlˌbɔrn ˈtɔkiˌoʊ ˈpɛrɪs ˈbɜrliŋ ˈbeɪdʒɪŋ ˈtʃɑrli ˈdʒoʊn ˈmɛri ˈdʒeɪms ˈeɪlɪks ˈsəˈfɪə ˈðeɪvɪd ˈændru ˈˈoʊlɪviər ˈnəʊə ˈˈɪzəbɛl ˈˈsɑfɪə ˈˈwɪljəm ˈˈoʊlɪvɪə ˈkəʊkəˈkoʊlə ˈnɑɪki ˈˈædɪdæs ˈˈstɑrbʌks ˈˈmækdənəldz ˈˈpɛpsi ˈˈɡuɡəl ˈˈæpl ˈˈæməzən ˈˈmɑɪkrəˌsɔft ˈˈfɛɪsbʊk ˈˈtʃɪpˌoʊtleɪ ˈˈkəʊstˌkoʊ ˈˈdʌŋkɪn ˈˈʃəˈnɛl ˈˈkəʊlɡeɪt
`),
  );
  // const text = "钱";
  // console.log(await zhMk(text));
};
test();
