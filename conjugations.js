// Present-tense conjugations for every verb in the Verbs category, for both
// Russian and Portuguese. Hand-authored (not rule-generated) because both
// languages have enough irregular verbs that a generic conjugator would
// produce wrong forms.
//
// Each entry maps the verb's English infinitive (matching WORDS.verbs[level][i].en)
// to six forms per language: я/ты/он-она-оно/мы/вы/они and eu/tu/ele-ela/nós/vós/eles.
// Each form is split into { stem, ending } so the UI can highlight just the
// part that changes with person — plus an optional `tail` for multi-word
// verb phrases (e.g. "терпеть неудачу"), appended after the conjugated verb.

const RU_PRONOUNS = ["я", "ты", "он / она / оно", "мы", "вы", "они"];
const PT_PRONOUNS = ["eu", "tu", "ele / ela", "nós", "vós", "eles / elas"];

// Helper: same stem for every person (the common case for regular verbs).
function reg(stem, endings) {
  return endings.map((ending) => ({ stem, ending }));
}

const VERB_CONJUGATIONS = {
  // ---- easy ----
  "To eat": {
    ru: { forms: [{ stem: "е", ending: "м" }, { stem: "е", ending: "шь" }, { stem: "е", ending: "ст" }, { stem: "ед", ending: "им" }, { stem: "ед", ending: "ите" }, { stem: "ед", ending: "ят" }] },
    pt: { forms: reg("com", ["o", "es", "e", "emos", "eis", "em"]) },
  },
  "To drink": {
    ru: { forms: reg("пь", ["ю", "ёшь", "ёт", "ём", "ёте", "ют"]) },
    pt: { forms: reg("beb", ["o", "es", "e", "emos", "eis", "em"]) },
  },
  "To go": {
    ru: { forms: reg("ид", ["у", "ёшь", "ёт", "ём", "ёте", "ут"]) },
    pt: { forms: [{ stem: "v", ending: "ou" }, { stem: "v", ending: "ais" }, { stem: "v", ending: "ai" }, { stem: "vam", ending: "os" }, { stem: "id", ending: "es" }, { stem: "v", ending: "ão" }] },
  },
  "To see": {
    ru: { forms: [{ stem: "виж", ending: "у" }, { stem: "вид", ending: "ишь" }, { stem: "вид", ending: "ит" }, { stem: "вид", ending: "им" }, { stem: "вид", ending: "ите" }, { stem: "вид", ending: "ят" }] },
    pt: { forms: [{ stem: "vej", ending: "o" }, { stem: "v", ending: "ês" }, { stem: "v", ending: "ê" }, { stem: "v", ending: "emos" }, { stem: "v", ending: "edes" }, { stem: "ve", ending: "em" }] },
  },
  "To sleep": {
    ru: { forms: [{ stem: "спл", ending: "ю" }, { stem: "сп", ending: "ишь" }, { stem: "сп", ending: "ит" }, { stem: "сп", ending: "им" }, { stem: "сп", ending: "ите" }, { stem: "сп", ending: "ят" }] },
    pt: { forms: [{ stem: "durm", ending: "o" }, { stem: "dorm", ending: "es" }, { stem: "dorm", ending: "e" }, { stem: "dorm", ending: "imos" }, { stem: "dorm", ending: "is" }, { stem: "dorm", ending: "em" }] },
  },
  "To read": {
    ru: { forms: reg("чита", ["ю", "ешь", "ет", "ем", "ете", "ют"]) },
    pt: { forms: [{ stem: "le", ending: "io" }, { stem: "l", ending: "ês" }, { stem: "l", ending: "ê" }, { stem: "le", ending: "mos" }, { stem: "le", ending: "des" }, { stem: "le", ending: "em" }] },
  },
  "To write": {
    ru: { forms: reg("пиш", ["у", "ешь", "ет", "ем", "ете", "ут"]) },
    pt: { forms: reg("escrev", ["o", "es", "e", "emos", "eis", "em"]) },
  },
  "To speak": {
    ru: { forms: reg("говор", ["ю", "ишь", "ит", "им", "ите", "ят"]) },
    pt: { forms: reg("fal", ["o", "as", "a", "amos", "ais", "am"]) },
  },
  "To run": {
    ru: { forms: reg("бега", ["ю", "ешь", "ет", "ем", "ете", "ют"]) },
    pt: { forms: reg("corr", ["o", "es", "e", "emos", "eis", "em"]) },
  },
  "To walk": {
    ru: { forms: reg("гуля", ["ю", "ешь", "ет", "ем", "ете", "ют"]) },
    pt: { forms: reg("caminh", ["o", "as", "a", "amos", "ais", "am"]) },
  },
  "To swim": {
    ru: { forms: reg("плава", ["ю", "ешь", "ет", "ем", "ете", "ют"]) },
    pt: { forms: reg("nad", ["o", "as", "a", "amos", "ais", "am"]) },
  },
  "To play": {
    ru: { forms: reg("игра", ["ю", "ешь", "ет", "ем", "ете", "ют"]) },
    pt: { forms: reg("jog", ["o", "as", "a", "amos", "ais", "am"]) },
  },
  "To sing": {
    ru: { forms: reg("по", ["ю", "ёшь", "ёт", "ём", "ёте", "ют"]) },
    pt: { forms: reg("cant", ["o", "as", "a", "amos", "ais", "am"]) },
  },
  "To dance": {
    ru: { forms: reg("танцу", ["ю", "ешь", "ет", "ем", "ете", "ют"]) },
    pt: { forms: reg("danç", ["o", "as", "a", "amos", "ais", "am"]) },
  },
  "To cook": {
    ru: { forms: [{ stem: "готовл", ending: "ю" }, { stem: "готов", ending: "ишь" }, { stem: "готов", ending: "ит" }, { stem: "готов", ending: "им" }, { stem: "готов", ending: "ите" }, { stem: "готов", ending: "ят" }] },
    pt: { forms: reg("cozinh", ["o", "as", "a", "amos", "ais", "am"]) },
  },
  "To help": {
    ru: { forms: reg("помога", ["ю", "ешь", "ет", "ем", "ете", "ют"]) },
    pt: { forms: reg("ajud", ["o", "as", "a", "amos", "ais", "am"]) },
  },

  // ---- medium ----
  "To buy": {
    ru: { forms: reg("покупа", ["ю", "ешь", "ет", "ем", "ете", "ют"]) },
    pt: { forms: reg("compr", ["o", "as", "a", "amos", "ais", "am"]) },
  },
  "To sell": {
    ru: { forms: reg("прода", ["ю", "ёшь", "ёт", "ём", "ёте", "ют"]) },
    pt: { forms: reg("vend", ["o", "es", "e", "emos", "eis", "em"]) },
  },
  "To open": {
    ru: { forms: reg("открыва", ["ю", "ешь", "ет", "ем", "ете", "ют"]) },
    pt: { forms: reg("abr", ["o", "es", "e", "imos", "is", "em"]) },
  },
  "To close": {
    ru: { forms: reg("закрыва", ["ю", "ешь", "ет", "ем", "ете", "ют"]) },
    pt: { forms: reg("fech", ["o", "as", "a", "amos", "ais", "am"]) },
  },
  "To understand": {
    ru: { forms: reg("понима", ["ю", "ешь", "ет", "ем", "ете", "ют"]) },
    pt: { forms: reg("entend", ["o", "es", "e", "emos", "eis", "em"]) },
  },
  "To remember": {
    ru: { forms: reg("помн", ["ю", "ишь", "ит", "им", "ите", "ят"]) },
    pt: { forms: reg("lembr", ["o", "as", "a", "amos", "ais", "am"]) },
  },
  "To forget": {
    ru: { forms: reg("забыва", ["ю", "ешь", "ет", "ем", "ете", "ют"]) },
    pt: { forms: [{ stem: "esque", ending: "ço" }, { stem: "esquec", ending: "es" }, { stem: "esquec", ending: "e" }, { stem: "esquec", ending: "emos" }, { stem: "esquec", ending: "eis" }, { stem: "esquec", ending: "em" }] },
  },
  "To wait": {
    ru: { forms: reg("жд", ["у", "ёшь", "ёт", "ём", "ёте", "ут"]) },
    pt: { forms: reg("esper", ["o", "as", "a", "amos", "ais", "am"]) },
  },
  "To learn": {
    ru: { forms: [{ stem: "уч", ending: "усь" }, { stem: "уч", ending: "ишься" }, { stem: "уч", ending: "ится" }, { stem: "уч", ending: "имся" }, { stem: "уч", ending: "итесь" }, { stem: "уч", ending: "атся" }] },
    pt: { forms: reg("aprend", ["o", "es", "e", "emos", "eis", "em"]) },
  },
  "To teach": {
    ru: { forms: reg("уч", ["у", "ишь", "ит", "им", "ите", "ат"]) },
    pt: { forms: reg("ensin", ["o", "as", "a", "amos", "ais", "am"]) },
  },
  "To travel": {
    ru: { forms: reg("путешеству", ["ю", "ешь", "ет", "ем", "ете", "ют"]) },
    pt: { forms: reg("viaj", ["o", "as", "a", "amos", "ais", "am"]) },
  },
  "To arrive": {
    ru: { forms: reg("прибыва", ["ю", "ешь", "ет", "ем", "ете", "ют"]) },
    pt: { forms: reg("cheg", ["o", "as", "a", "amos", "ais", "am"]) },
  },
  "To leave": {
    ru: { forms: [{ stem: "ухож", ending: "у" }, { stem: "уход", ending: "ишь" }, { stem: "уход", ending: "ит" }, { stem: "уход", ending: "им" }, { stem: "уход", ending: "ите" }, { stem: "уход", ending: "ят" }] },
    pt: { forms: reg("part", ["o", "es", "e", "imos", "is", "em"]) },
  },
  "To find": {
    ru: { forms: [{ stem: "нахож", ending: "у" }, { stem: "наход", ending: "ишь" }, { stem: "наход", ending: "ит" }, { stem: "наход", ending: "им" }, { stem: "наход", ending: "ите" }, { stem: "наход", ending: "ят" }] },
    pt: { forms: reg("encontr", ["o", "as", "a", "amos", "ais", "am"]) },
  },
  "To lose": {
    ru: { forms: reg("теря", ["ю", "ешь", "ет", "ем", "ете", "ют"]) },
    pt: { forms: [{ stem: "per", ending: "co" }, { stem: "perd", ending: "es" }, { stem: "perd", ending: "e" }, { stem: "perd", ending: "emos" }, { stem: "perd", ending: "eis" }, { stem: "perd", ending: "em" }] },
  },
  "To choose": {
    ru: { forms: reg("выбира", ["ю", "ешь", "ет", "ем", "ете", "ют"]) },
    pt: { forms: reg("escolh", ["o", "es", "e", "emos", "eis", "em"]) },
  },

  // ---- hard ----
  "To achieve": {
    ru: { forms: reg("достига", ["ю", "ешь", "ет", "ем", "ете", "ют"]) },
    pt: { forms: reg("alcanç", ["o", "as", "a", "amos", "ais", "am"]) },
  },
  "To improve": {
    ru: { forms: reg("улучша", ["ю", "ешь", "ет", "ем", "ете", "ют"]) },
    pt: { forms: reg("melhor", ["o", "as", "a", "amos", "ais", "am"]) },
  },
  "To complain": {
    ru: { forms: reg("жалу", ["юсь", "ешься", "ется", "емся", "етесь", "ются"]) },
    pt: { forms: reg("reclam", ["o", "as", "a", "amos", "ais", "am"]) },
  },
  "To pretend": {
    ru: { forms: reg("притворя", ["юсь", "ешься", "ется", "емся", "етесь", "ются"]) },
    pt: { forms: [{ stem: "fin", ending: "jo" }, { stem: "fing", ending: "es" }, { stem: "fing", ending: "e" }, { stem: "fing", ending: "imos" }, { stem: "fing", ending: "is" }, { stem: "fing", ending: "em" }] },
  },
  "To convince": {
    ru: { forms: reg("убежда", ["ю", "ешь", "ет", "ем", "ете", "ют"]) },
    pt: { forms: [{ stem: "conven", ending: "ço" }, { stem: "convenc", ending: "es" }, { stem: "convenc", ending: "e" }, { stem: "convenc", ending: "emos" }, { stem: "convenc", ending: "eis" }, { stem: "convenc", ending: "em" }] },
  },
  "To avoid": {
    ru: { forms: reg("избега", ["ю", "ешь", "ет", "ем", "ете", "ют"]) },
    pt: { forms: reg("evit", ["o", "as", "a", "amos", "ais", "am"]) },
  },
  "To require": {
    ru: { forms: reg("требу", ["ю", "ешь", "ет", "ем", "ете", "ют"]) },
    pt: { forms: [{ stem: "exi", ending: "jo" }, { stem: "exig", ending: "es" }, { stem: "exig", ending: "e" }, { stem: "exig", ending: "imos" }, { stem: "exig", ending: "is" }, { stem: "exig", ending: "em" }] },
  },
  "To warn": {
    ru: { forms: reg("предупрежда", ["ю", "ешь", "ет", "ем", "ете", "ют"]) },
    pt: { forms: reg("avis", ["o", "as", "a", "amos", "ais", "am"]) },
  },
  "To succeed": {
    ru: { forms: reg("преуспева", ["ю", "ешь", "ет", "ем", "ете", "ют"]) },
    pt: {
      forms: [{ stem: "ten", ending: "ho" }, { stem: "ten", ending: "s" }, { stem: "te", ending: "m" }, { stem: "tem", ending: "os" }, { stem: "ten", ending: "des" }, { stem: "tê", ending: "m" }],
      tail: " sucesso",
    },
  },
  "To fail": {
    ru: {
      forms: [{ stem: "терпл", ending: "ю" }, { stem: "терп", ending: "ишь" }, { stem: "терп", ending: "ит" }, { stem: "терп", ending: "им" }, { stem: "терп", ending: "ите" }, { stem: "терп", ending: "ят" }],
      tail: " неудачу",
    },
    pt: { forms: reg("falh", ["o", "as", "a", "amos", "ais", "am"]) },
  },
  "To hesitate": {
    ru: { forms: reg("колебл", ["юсь", "ешься", "ется", "емся", "етесь", "ются"]) },
    pt: { forms: reg("hesit", ["o", "as", "a", "amos", "ais", "am"]) },
  },
  "To manage": {
    ru: { forms: reg("справля", ["юсь", "ешься", "ется", "емся", "етесь", "ются"]) },
    pt: { forms: reg("gerenci", ["o", "as", "a", "amos", "ais", "am"]) },
  },
  "To suggest": {
    ru: { forms: reg("предлага", ["ю", "ешь", "ет", "ем", "ете", "ют"]) },
    pt: { forms: [{ stem: "sug", ending: "iro" }, { stem: "suger", ending: "es" }, { stem: "suger", ending: "e" }, { stem: "suger", ending: "imos" }, { stem: "suger", ending: "is" }, { stem: "suger", ending: "em" }] },
  },
  "To struggle": {
    ru: { forms: reg("бор", ["юсь", "ешься", "ется", "емся", "етесь", "ются"]) },
    pt: { forms: reg("lut", ["o", "as", "a", "amos", "ais", "am"]) },
  },
  "To admit": {
    ru: { forms: reg("призна", ["ю", "ёшь", "ёт", "ём", "ёте", "ют"]) },
    pt: { forms: reg("admit", ["o", "es", "e", "imos", "is", "em"]) },
  },
  "To deny": {
    ru: { forms: reg("отрица", ["ю", "ешь", "ет", "ем", "ете", "ют"]) },
    pt: { forms: reg("neg", ["o", "as", "a", "amos", "ais", "am"]) },
  },

  // ---- insane ----
  "To relinquish": {
    ru: { forms: reg("отказыва", ["юсь", "ешься", "ется", "емся", "етесь", "ются"]) },
    pt: { forms: reg("renunci", ["o", "as", "a", "amos", "ais", "am"]) },
  },
  "To undermine": {
    ru: { forms: reg("подрыва", ["ю", "ешь", "ет", "ем", "ете", "ют"]) },
    pt: { forms: reg("min", ["o", "as", "a", "amos", "ais", "am"]) },
  },
  "To reconcile": {
    ru: { forms: reg("примиря", ["ю", "ешь", "ет", "ем", "ете", "ют"]) },
    pt: { forms: reg("reconcili", ["o", "as", "a", "amos", "ais", "am"]) },
  },
  "To alleviate": {
    ru: { forms: reg("облегча", ["ю", "ешь", "ет", "ем", "ете", "ют"]) },
    pt: { forms: reg("alivi", ["o", "as", "a", "amos", "ais", "am"]) },
  },
  "To perceive": {
    ru: { forms: reg("воспринима", ["ю", "ешь", "ет", "ем", "ете", "ют"]) },
    pt: { forms: reg("perceb", ["o", "es", "e", "emos", "eis", "em"]) },
  },
  "To overwhelm": {
    ru: { forms: reg("ошеломля", ["ю", "ешь", "ет", "ем", "ете", "ют"]) },
    pt: { forms: reg("sobrecarreg", ["o", "as", "a", "amos", "ais", "am"]) },
  },
  "To scrutinize": {
    ru: { forms: reg("изуча", ["ю", "ешь", "ет", "ем", "ете", "ют"]), tail: " досконально" },
    pt: { forms: reg("examin", ["o", "as", "a", "amos", "ais", "am"]), tail: " minuciosamente" },
  },
  "To hinder": {
    ru: { forms: reg("препятству", ["ю", "ешь", "ет", "ем", "ете", "ют"]) },
    pt: { forms: [{ stem: "impe", ending: "ço" }, { stem: "imped", ending: "es" }, { stem: "imped", ending: "e" }, { stem: "imped", ending: "imos" }, { stem: "imped", ending: "is" }, { stem: "imped", ending: "em" }] },
  },
  "To exacerbate": {
    ru: { forms: reg("усугубля", ["ю", "ешь", "ет", "ем", "ете", "ют"]) },
    pt: { forms: reg("exacerb", ["o", "as", "a", "amos", "ais", "am"]) },
  },
  "To alienate": {
    ru: { forms: reg("отчужда", ["ю", "ешь", "ет", "ем", "ете", "ют"]) },
    pt: { forms: reg("alien", ["o", "as", "a", "amos", "ais", "am"]) },
  },
  "To circumvent": {
    ru: { forms: [{ stem: "обхож", ending: "у" }, { stem: "обход", ending: "ишь" }, { stem: "обход", ending: "ит" }, { stem: "обход", ending: "им" }, { stem: "обход", ending: "ите" }, { stem: "обход", ending: "ят" }] },
    pt: { forms: reg("contorn", ["o", "as", "a", "amos", "ais", "am"]) },
  },
  "To substantiate": {
    ru: { forms: reg("обосновыва", ["ю", "ешь", "ет", "ем", "ете", "ют"]) },
    pt: { forms: reg("fundament", ["o", "as", "a", "amos", "ais", "am"]) },
  },
  "To ostracize": {
    ru: { forms: reg("подверга", ["ю", "ешь", "ет", "ем", "ете", "ют"]), tail: " остракизму" },
    pt: { forms: reg("marginaliz", ["o", "as", "a", "amos", "ais", "am"]) },
  },
  "To vindicate": {
    ru: { forms: reg("оправдыва", ["ю", "ешь", "ет", "ем", "ете", "ют"]) },
    pt: { forms: reg("justific", ["o", "as", "a", "amos", "ais", "am"]) },
  },
  "To acquiesce": {
    ru: { forms: reg("соглаша", ["юсь", "ешься", "ется", "емся", "етесь", "ются"]) },
    pt: { forms: [{ stem: "aquies", ending: "ço" }, { stem: "aquiec", ending: "es" }, { stem: "aquiec", ending: "e" }, { stem: "aquiesc", ending: "emos" }, { stem: "aquiec", ending: "eis" }, { stem: "aquiesc", ending: "em" }] },
  },
  "To dissipate": {
    ru: { forms: reg("рассеива", ["ю", "ешь", "ет", "ем", "ете", "ют"]) },
    pt: { forms: reg("dissip", ["o", "as", "a", "amos", "ais", "am"]) },
  },
};

