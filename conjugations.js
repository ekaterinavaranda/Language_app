// Present, past, and future conjugations for every verb in the Verbs
// category, for both Russian and Portuguese. Hand-authored/hand-verified
// (not purely rule-generated) because both languages have enough irregular
// verbs that a generic conjugator would produce wrong forms.
//
// Structure: VERB_CONJUGATIONS[en] = { ru: { present, past, future }, pt: { present, past, future } }
// Each tense is { forms: [{ stem, ending, pron }, ...], tail?, irregular? }.
//   - present/future (RU) and all PT tenses have 6 forms, one per RU_PRONOUNS /
//     PT_PRONOUNS entry (я/ты/он.../eu/tu/ele...).
//   - RU past has only 4 forms, keyed by RU_PAST_LABELS: Russian past tense
//     agrees by GENDER and NUMBER, not by person — "я" and "ты" take
//     whichever of the masculine/feminine forms matches the speaker's own
//     gender, they don't have dedicated forms of their own.
//   - `tail` is fixed text appended after the conjugated verb, for
//     multi-word verb phrases (e.g. "терпеть неудачу", "ter sucesso").
//   - `irregular` (PT only) flags verbs whose past tense doesn't follow the
//     regular -ar/-er/-ir pattern (ir, ver, ter in this verb set).
//
// PT_PRONOUNS uses "vocês" instead of the archaic "vós" — grammatically it
// always takes the same (3rd-person-plural) verb form as "eles/elas", so
// that slot is simply a copy of the eles/elas form in every tense.

const RU_PRONOUNS = ["я","ты","он / она / оно","мы","вы","они"];
const PT_PRONOUNS = ["eu","tu","ele / ela","nós","vocês","eles / elas"];
const RU_PAST_LABELS = ["он (муж.) / я, ты (муж.)","она (жен.) / я, ты (жен.)","оно","мы / вы / они"];

const VERB_CONJUGATIONS = {
  "To eat": {
    "ru": {
      "present": {
        "forms": [
          {
            "stem": "е",
            "ending": "м",
            "pron": "Yem"
          },
          {
            "stem": "е",
            "ending": "шь",
            "pron": "Yesh"
          },
          {
            "stem": "е",
            "ending": "ст",
            "pron": "Yest"
          },
          {
            "stem": "ед",
            "ending": "им",
            "pron": "Yedim"
          },
          {
            "stem": "ед",
            "ending": "ите",
            "pron": "Yedite"
          },
          {
            "stem": "ед",
            "ending": "ят",
            "pron": "Yedyat"
          }
        ]
      },
      "past": {
        "forms": [
          {
            "stem": "е",
            "ending": "л",
            "pron": "Yel"
          },
          {
            "stem": "е",
            "ending": "ла",
            "pron": "Yela"
          },
          {
            "stem": "е",
            "ending": "ло",
            "pron": "Yelo"
          },
          {
            "stem": "е",
            "ending": "ли",
            "pron": "Yeli"
          }
        ],
        "tail": ""
      },
      "future": {
        "forms": [
          {
            "stem": "буд",
            "ending": "у",
            "pron": "Budu yest"
          },
          {
            "stem": "буд",
            "ending": "ешь",
            "pron": "Budesh yest"
          },
          {
            "stem": "буд",
            "ending": "ет",
            "pron": "Budet yest"
          },
          {
            "stem": "буд",
            "ending": "ем",
            "pron": "Budem yest"
          },
          {
            "stem": "буд",
            "ending": "ете",
            "pron": "Budete yest"
          },
          {
            "stem": "буд",
            "ending": "ут",
            "pron": "Budut yest"
          }
        ],
        "tail": " есть"
      }
    },
    "pt": {
      "present": {
        "forms": [
          {
            "stem": "com",
            "ending": "o",
            "pron": "Como"
          },
          {
            "stem": "com",
            "ending": "es",
            "pron": "Comes"
          },
          {
            "stem": "com",
            "ending": "e",
            "pron": "Come"
          },
          {
            "stem": "com",
            "ending": "emos",
            "pron": "Comemos"
          },
          {
            "stem": "com",
            "ending": "em",
            "pron": "Comem"
          },
          {
            "stem": "com",
            "ending": "em",
            "pron": "Comem"
          }
        ]
      },
      "past": {
        "forms": [
          {
            "stem": "com",
            "ending": "i",
            "pron": "Comi"
          },
          {
            "stem": "com",
            "ending": "este",
            "pron": "Comeste"
          },
          {
            "stem": "com",
            "ending": "eu",
            "pron": "Comeu"
          },
          {
            "stem": "com",
            "ending": "emos",
            "pron": "Comemos"
          },
          {
            "stem": "com",
            "ending": "eram",
            "pron": "Comeram"
          },
          {
            "stem": "com",
            "ending": "eram",
            "pron": "Comeram"
          }
        ],
        "tail": "",
        "irregular": false
      },
      "future": {
        "forms": [
          {
            "stem": "comer",
            "ending": "ei",
            "pron": "Comerei"
          },
          {
            "stem": "comer",
            "ending": "ás",
            "pron": "Comeras"
          },
          {
            "stem": "comer",
            "ending": "á",
            "pron": "Comera"
          },
          {
            "stem": "comer",
            "ending": "emos",
            "pron": "Comeremos"
          },
          {
            "stem": "comer",
            "ending": "ão",
            "pron": "Comerowng"
          },
          {
            "stem": "comer",
            "ending": "ão",
            "pron": "Comerowng"
          }
        ],
        "tail": ""
      }
    }
  },
  "To drink": {
    "ru": {
      "present": {
        "forms": [
          {
            "stem": "пь",
            "ending": "ю",
            "pron": "Pyu"
          },
          {
            "stem": "пь",
            "ending": "ёшь",
            "pron": "Pyosh"
          },
          {
            "stem": "пь",
            "ending": "ёт",
            "pron": "Pyot"
          },
          {
            "stem": "пь",
            "ending": "ём",
            "pron": "Pyom"
          },
          {
            "stem": "пь",
            "ending": "ёте",
            "pron": "Pyote"
          },
          {
            "stem": "пь",
            "ending": "ют",
            "pron": "Pyut"
          }
        ]
      },
      "past": {
        "forms": [
          {
            "stem": "пи",
            "ending": "л",
            "pron": "Pil"
          },
          {
            "stem": "пи",
            "ending": "ла",
            "pron": "Pila"
          },
          {
            "stem": "пи",
            "ending": "ло",
            "pron": "Pilo"
          },
          {
            "stem": "пи",
            "ending": "ли",
            "pron": "Pili"
          }
        ],
        "tail": ""
      },
      "future": {
        "forms": [
          {
            "stem": "буд",
            "ending": "у",
            "pron": "Budu pit"
          },
          {
            "stem": "буд",
            "ending": "ешь",
            "pron": "Budesh pit"
          },
          {
            "stem": "буд",
            "ending": "ет",
            "pron": "Budet pit"
          },
          {
            "stem": "буд",
            "ending": "ем",
            "pron": "Budem pit"
          },
          {
            "stem": "буд",
            "ending": "ете",
            "pron": "Budete pit"
          },
          {
            "stem": "буд",
            "ending": "ут",
            "pron": "Budut pit"
          }
        ],
        "tail": " пить"
      }
    },
    "pt": {
      "present": {
        "forms": [
          {
            "stem": "beb",
            "ending": "o",
            "pron": "Bebo"
          },
          {
            "stem": "beb",
            "ending": "es",
            "pron": "Bebes"
          },
          {
            "stem": "beb",
            "ending": "e",
            "pron": "Bebe"
          },
          {
            "stem": "beb",
            "ending": "emos",
            "pron": "Bebemos"
          },
          {
            "stem": "beb",
            "ending": "em",
            "pron": "Bebem"
          },
          {
            "stem": "beb",
            "ending": "em",
            "pron": "Bebem"
          }
        ]
      },
      "past": {
        "forms": [
          {
            "stem": "beb",
            "ending": "i",
            "pron": "Bebi"
          },
          {
            "stem": "beb",
            "ending": "este",
            "pron": "Bebeste"
          },
          {
            "stem": "beb",
            "ending": "eu",
            "pron": "Bebeu"
          },
          {
            "stem": "beb",
            "ending": "emos",
            "pron": "Bebemos"
          },
          {
            "stem": "beb",
            "ending": "eram",
            "pron": "Beberam"
          },
          {
            "stem": "beb",
            "ending": "eram",
            "pron": "Beberam"
          }
        ],
        "tail": "",
        "irregular": false
      },
      "future": {
        "forms": [
          {
            "stem": "beber",
            "ending": "ei",
            "pron": "Beberei"
          },
          {
            "stem": "beber",
            "ending": "ás",
            "pron": "Beberas"
          },
          {
            "stem": "beber",
            "ending": "á",
            "pron": "Bebera"
          },
          {
            "stem": "beber",
            "ending": "emos",
            "pron": "Beberemos"
          },
          {
            "stem": "beber",
            "ending": "ão",
            "pron": "Beberowng"
          },
          {
            "stem": "beber",
            "ending": "ão",
            "pron": "Beberowng"
          }
        ],
        "tail": ""
      }
    }
  },
  "To go": {
    "ru": {
      "present": {
        "forms": [
          {
            "stem": "ид",
            "ending": "у",
            "pron": "Idu"
          },
          {
            "stem": "ид",
            "ending": "ёшь",
            "pron": "Idyosh"
          },
          {
            "stem": "ид",
            "ending": "ёт",
            "pron": "Idyot"
          },
          {
            "stem": "ид",
            "ending": "ём",
            "pron": "Idyom"
          },
          {
            "stem": "ид",
            "ending": "ёте",
            "pron": "Idyote"
          },
          {
            "stem": "ид",
            "ending": "ут",
            "pron": "Idut"
          }
        ]
      },
      "past": {
        "forms": [
          {
            "stem": "ш",
            "ending": "ёл",
            "pron": "Shyol"
          },
          {
            "stem": "ш",
            "ending": "ла",
            "pron": "Shla"
          },
          {
            "stem": "ш",
            "ending": "ло",
            "pron": "Shlo"
          },
          {
            "stem": "ш",
            "ending": "ли",
            "pron": "Shli"
          }
        ],
        "tail": ""
      },
      "future": {
        "forms": [
          {
            "stem": "буд",
            "ending": "у",
            "pron": "Budu idti"
          },
          {
            "stem": "буд",
            "ending": "ешь",
            "pron": "Budesh idti"
          },
          {
            "stem": "буд",
            "ending": "ет",
            "pron": "Budet idti"
          },
          {
            "stem": "буд",
            "ending": "ем",
            "pron": "Budem idti"
          },
          {
            "stem": "буд",
            "ending": "ете",
            "pron": "Budete idti"
          },
          {
            "stem": "буд",
            "ending": "ут",
            "pron": "Budut idti"
          }
        ],
        "tail": " идти"
      }
    },
    "pt": {
      "present": {
        "forms": [
          {
            "stem": "v",
            "ending": "ou",
            "pron": "Vou"
          },
          {
            "stem": "v",
            "ending": "ais",
            "pron": "Vais"
          },
          {
            "stem": "v",
            "ending": "ai",
            "pron": "Vai"
          },
          {
            "stem": "vam",
            "ending": "os",
            "pron": "Vamos"
          },
          {
            "stem": "v",
            "ending": "ão",
            "pron": "Vowng"
          },
          {
            "stem": "v",
            "ending": "ão",
            "pron": "Vowng"
          }
        ]
      },
      "past": {
        "forms": [
          {
            "stem": "",
            "ending": "fui",
            "pron": "Fui"
          },
          {
            "stem": "",
            "ending": "foste",
            "pron": "Foste"
          },
          {
            "stem": "",
            "ending": "foi",
            "pron": "Foi"
          },
          {
            "stem": "",
            "ending": "fomos",
            "pron": "Fomos"
          },
          {
            "stem": "",
            "ending": "foram",
            "pron": "Foram"
          },
          {
            "stem": "",
            "ending": "foram",
            "pron": "Foram"
          }
        ],
        "tail": "",
        "irregular": true
      },
      "future": {
        "forms": [
          {
            "stem": "ir",
            "ending": "ei",
            "pron": "Irei"
          },
          {
            "stem": "ir",
            "ending": "ás",
            "pron": "Iras"
          },
          {
            "stem": "ir",
            "ending": "á",
            "pron": "Ira"
          },
          {
            "stem": "ir",
            "ending": "emos",
            "pron": "Iremos"
          },
          {
            "stem": "ir",
            "ending": "ão",
            "pron": "Irowng"
          },
          {
            "stem": "ir",
            "ending": "ão",
            "pron": "Irowng"
          }
        ],
        "tail": ""
      }
    }
  },
  "To see": {
    "ru": {
      "present": {
        "forms": [
          {
            "stem": "виж",
            "ending": "у",
            "pron": "Vizhu"
          },
          {
            "stem": "вид",
            "ending": "ишь",
            "pron": "Vidish"
          },
          {
            "stem": "вид",
            "ending": "ит",
            "pron": "Vidit"
          },
          {
            "stem": "вид",
            "ending": "им",
            "pron": "Vidim"
          },
          {
            "stem": "вид",
            "ending": "ите",
            "pron": "Vidite"
          },
          {
            "stem": "вид",
            "ending": "ят",
            "pron": "Vidyat"
          }
        ]
      },
      "past": {
        "forms": [
          {
            "stem": "виде",
            "ending": "л",
            "pron": "Videl"
          },
          {
            "stem": "виде",
            "ending": "ла",
            "pron": "Videla"
          },
          {
            "stem": "виде",
            "ending": "ло",
            "pron": "Videlo"
          },
          {
            "stem": "виде",
            "ending": "ли",
            "pron": "Videli"
          }
        ],
        "tail": ""
      },
      "future": {
        "forms": [
          {
            "stem": "буд",
            "ending": "у",
            "pron": "Budu videt"
          },
          {
            "stem": "буд",
            "ending": "ешь",
            "pron": "Budesh videt"
          },
          {
            "stem": "буд",
            "ending": "ет",
            "pron": "Budet videt"
          },
          {
            "stem": "буд",
            "ending": "ем",
            "pron": "Budem videt"
          },
          {
            "stem": "буд",
            "ending": "ете",
            "pron": "Budete videt"
          },
          {
            "stem": "буд",
            "ending": "ут",
            "pron": "Budut videt"
          }
        ],
        "tail": " видеть"
      }
    },
    "pt": {
      "present": {
        "forms": [
          {
            "stem": "vej",
            "ending": "o",
            "pron": "Vezho"
          },
          {
            "stem": "v",
            "ending": "ês",
            "pron": "Ves"
          },
          {
            "stem": "v",
            "ending": "ê",
            "pron": "Ve"
          },
          {
            "stem": "v",
            "ending": "emos",
            "pron": "Vemos"
          },
          {
            "stem": "ve",
            "ending": "em",
            "pron": "Veem"
          },
          {
            "stem": "ve",
            "ending": "em",
            "pron": "Veem"
          }
        ]
      },
      "past": {
        "forms": [
          {
            "stem": "",
            "ending": "vi",
            "pron": "Vi"
          },
          {
            "stem": "",
            "ending": "viste",
            "pron": "Viste"
          },
          {
            "stem": "",
            "ending": "viu",
            "pron": "Viu"
          },
          {
            "stem": "",
            "ending": "vimos",
            "pron": "Vimos"
          },
          {
            "stem": "",
            "ending": "viram",
            "pron": "Viram"
          },
          {
            "stem": "",
            "ending": "viram",
            "pron": "Viram"
          }
        ],
        "tail": "",
        "irregular": true
      },
      "future": {
        "forms": [
          {
            "stem": "ver",
            "ending": "ei",
            "pron": "Verei"
          },
          {
            "stem": "ver",
            "ending": "ás",
            "pron": "Veras"
          },
          {
            "stem": "ver",
            "ending": "á",
            "pron": "Vera"
          },
          {
            "stem": "ver",
            "ending": "emos",
            "pron": "Veremos"
          },
          {
            "stem": "ver",
            "ending": "ão",
            "pron": "Verowng"
          },
          {
            "stem": "ver",
            "ending": "ão",
            "pron": "Verowng"
          }
        ],
        "tail": ""
      }
    }
  },
  "To sleep": {
    "ru": {
      "present": {
        "forms": [
          {
            "stem": "спл",
            "ending": "ю",
            "pron": "Splyu"
          },
          {
            "stem": "сп",
            "ending": "ишь",
            "pron": "Spish"
          },
          {
            "stem": "сп",
            "ending": "ит",
            "pron": "Spit"
          },
          {
            "stem": "сп",
            "ending": "им",
            "pron": "Spim"
          },
          {
            "stem": "сп",
            "ending": "ите",
            "pron": "Spite"
          },
          {
            "stem": "сп",
            "ending": "ят",
            "pron": "Spyat"
          }
        ]
      },
      "past": {
        "forms": [
          {
            "stem": "спа",
            "ending": "л",
            "pron": "Spal"
          },
          {
            "stem": "спа",
            "ending": "ла",
            "pron": "Spala"
          },
          {
            "stem": "спа",
            "ending": "ло",
            "pron": "Spalo"
          },
          {
            "stem": "спа",
            "ending": "ли",
            "pron": "Spali"
          }
        ],
        "tail": ""
      },
      "future": {
        "forms": [
          {
            "stem": "буд",
            "ending": "у",
            "pron": "Budu spat"
          },
          {
            "stem": "буд",
            "ending": "ешь",
            "pron": "Budesh spat"
          },
          {
            "stem": "буд",
            "ending": "ет",
            "pron": "Budet spat"
          },
          {
            "stem": "буд",
            "ending": "ем",
            "pron": "Budem spat"
          },
          {
            "stem": "буд",
            "ending": "ете",
            "pron": "Budete spat"
          },
          {
            "stem": "буд",
            "ending": "ут",
            "pron": "Budut spat"
          }
        ],
        "tail": " спать"
      }
    },
    "pt": {
      "present": {
        "forms": [
          {
            "stem": "durm",
            "ending": "o",
            "pron": "Durmo"
          },
          {
            "stem": "dorm",
            "ending": "es",
            "pron": "Dormes"
          },
          {
            "stem": "dorm",
            "ending": "e",
            "pron": "Dorme"
          },
          {
            "stem": "dorm",
            "ending": "imos",
            "pron": "Dormimos"
          },
          {
            "stem": "dorm",
            "ending": "em",
            "pron": "Dormem"
          },
          {
            "stem": "dorm",
            "ending": "em",
            "pron": "Dormem"
          }
        ]
      },
      "past": {
        "forms": [
          {
            "stem": "dorm",
            "ending": "i",
            "pron": "Dormi"
          },
          {
            "stem": "dorm",
            "ending": "iste",
            "pron": "Dormiste"
          },
          {
            "stem": "dorm",
            "ending": "iu",
            "pron": "Dormiu"
          },
          {
            "stem": "dorm",
            "ending": "imos",
            "pron": "Dormimos"
          },
          {
            "stem": "dorm",
            "ending": "iram",
            "pron": "Dormiram"
          },
          {
            "stem": "dorm",
            "ending": "iram",
            "pron": "Dormiram"
          }
        ],
        "tail": "",
        "irregular": false
      },
      "future": {
        "forms": [
          {
            "stem": "dormir",
            "ending": "ei",
            "pron": "Dormirei"
          },
          {
            "stem": "dormir",
            "ending": "ás",
            "pron": "Dormiras"
          },
          {
            "stem": "dormir",
            "ending": "á",
            "pron": "Dormira"
          },
          {
            "stem": "dormir",
            "ending": "emos",
            "pron": "Dormiremos"
          },
          {
            "stem": "dormir",
            "ending": "ão",
            "pron": "Dormirowng"
          },
          {
            "stem": "dormir",
            "ending": "ão",
            "pron": "Dormirowng"
          }
        ],
        "tail": ""
      }
    }
  },
  "To read": {
    "ru": {
      "present": {
        "forms": [
          {
            "stem": "чита",
            "ending": "ю",
            "pron": "Chitayu"
          },
          {
            "stem": "чита",
            "ending": "ешь",
            "pron": "Chitayesh"
          },
          {
            "stem": "чита",
            "ending": "ет",
            "pron": "Chitayet"
          },
          {
            "stem": "чита",
            "ending": "ем",
            "pron": "Chitayem"
          },
          {
            "stem": "чита",
            "ending": "ете",
            "pron": "Chitayete"
          },
          {
            "stem": "чита",
            "ending": "ют",
            "pron": "Chitayut"
          }
        ]
      },
      "past": {
        "forms": [
          {
            "stem": "чита",
            "ending": "л",
            "pron": "Chital"
          },
          {
            "stem": "чита",
            "ending": "ла",
            "pron": "Chitala"
          },
          {
            "stem": "чита",
            "ending": "ло",
            "pron": "Chitalo"
          },
          {
            "stem": "чита",
            "ending": "ли",
            "pron": "Chitali"
          }
        ],
        "tail": ""
      },
      "future": {
        "forms": [
          {
            "stem": "буд",
            "ending": "у",
            "pron": "Budu chitat"
          },
          {
            "stem": "буд",
            "ending": "ешь",
            "pron": "Budesh chitat"
          },
          {
            "stem": "буд",
            "ending": "ет",
            "pron": "Budet chitat"
          },
          {
            "stem": "буд",
            "ending": "ем",
            "pron": "Budem chitat"
          },
          {
            "stem": "буд",
            "ending": "ете",
            "pron": "Budete chitat"
          },
          {
            "stem": "буд",
            "ending": "ут",
            "pron": "Budut chitat"
          }
        ],
        "tail": " читать"
      }
    },
    "pt": {
      "present": {
        "forms": [
          {
            "stem": "le",
            "ending": "io",
            "pron": "Leio"
          },
          {
            "stem": "l",
            "ending": "ês",
            "pron": "Les"
          },
          {
            "stem": "l",
            "ending": "ê",
            "pron": "Le"
          },
          {
            "stem": "le",
            "ending": "mos",
            "pron": "Lemos"
          },
          {
            "stem": "le",
            "ending": "em",
            "pron": "Leem"
          },
          {
            "stem": "le",
            "ending": "em",
            "pron": "Leem"
          }
        ]
      },
      "past": {
        "forms": [
          {
            "stem": "l",
            "ending": "i",
            "pron": "Li"
          },
          {
            "stem": "l",
            "ending": "este",
            "pron": "Leste"
          },
          {
            "stem": "l",
            "ending": "eu",
            "pron": "Leu"
          },
          {
            "stem": "l",
            "ending": "emos",
            "pron": "Lemos"
          },
          {
            "stem": "l",
            "ending": "eram",
            "pron": "Leram"
          },
          {
            "stem": "l",
            "ending": "eram",
            "pron": "Leram"
          }
        ],
        "tail": "",
        "irregular": false
      },
      "future": {
        "forms": [
          {
            "stem": "ler",
            "ending": "ei",
            "pron": "Lerei"
          },
          {
            "stem": "ler",
            "ending": "ás",
            "pron": "Leras"
          },
          {
            "stem": "ler",
            "ending": "á",
            "pron": "Lera"
          },
          {
            "stem": "ler",
            "ending": "emos",
            "pron": "Leremos"
          },
          {
            "stem": "ler",
            "ending": "ão",
            "pron": "Lerowng"
          },
          {
            "stem": "ler",
            "ending": "ão",
            "pron": "Lerowng"
          }
        ],
        "tail": ""
      }
    }
  },
  "To write": {
    "ru": {
      "present": {
        "forms": [
          {
            "stem": "пиш",
            "ending": "у",
            "pron": "Pishu"
          },
          {
            "stem": "пиш",
            "ending": "ешь",
            "pron": "Pishesh"
          },
          {
            "stem": "пиш",
            "ending": "ет",
            "pron": "Pishet"
          },
          {
            "stem": "пиш",
            "ending": "ем",
            "pron": "Pishem"
          },
          {
            "stem": "пиш",
            "ending": "ете",
            "pron": "Pishete"
          },
          {
            "stem": "пиш",
            "ending": "ут",
            "pron": "Pishut"
          }
        ]
      },
      "past": {
        "forms": [
          {
            "stem": "писа",
            "ending": "л",
            "pron": "Pisal"
          },
          {
            "stem": "писа",
            "ending": "ла",
            "pron": "Pisala"
          },
          {
            "stem": "писа",
            "ending": "ло",
            "pron": "Pisalo"
          },
          {
            "stem": "писа",
            "ending": "ли",
            "pron": "Pisali"
          }
        ],
        "tail": ""
      },
      "future": {
        "forms": [
          {
            "stem": "буд",
            "ending": "у",
            "pron": "Budu pisat"
          },
          {
            "stem": "буд",
            "ending": "ешь",
            "pron": "Budesh pisat"
          },
          {
            "stem": "буд",
            "ending": "ет",
            "pron": "Budet pisat"
          },
          {
            "stem": "буд",
            "ending": "ем",
            "pron": "Budem pisat"
          },
          {
            "stem": "буд",
            "ending": "ете",
            "pron": "Budete pisat"
          },
          {
            "stem": "буд",
            "ending": "ут",
            "pron": "Budut pisat"
          }
        ],
        "tail": " писать"
      }
    },
    "pt": {
      "present": {
        "forms": [
          {
            "stem": "escrev",
            "ending": "o",
            "pron": "Escrevo"
          },
          {
            "stem": "escrev",
            "ending": "es",
            "pron": "Escreves"
          },
          {
            "stem": "escrev",
            "ending": "e",
            "pron": "Escreve"
          },
          {
            "stem": "escrev",
            "ending": "emos",
            "pron": "Escrevemos"
          },
          {
            "stem": "escrev",
            "ending": "em",
            "pron": "Escrevem"
          },
          {
            "stem": "escrev",
            "ending": "em",
            "pron": "Escrevem"
          }
        ]
      },
      "past": {
        "forms": [
          {
            "stem": "escrev",
            "ending": "i",
            "pron": "Escrevi"
          },
          {
            "stem": "escrev",
            "ending": "este",
            "pron": "Escreveste"
          },
          {
            "stem": "escrev",
            "ending": "eu",
            "pron": "Escreveu"
          },
          {
            "stem": "escrev",
            "ending": "emos",
            "pron": "Escrevemos"
          },
          {
            "stem": "escrev",
            "ending": "eram",
            "pron": "Escreveram"
          },
          {
            "stem": "escrev",
            "ending": "eram",
            "pron": "Escreveram"
          }
        ],
        "tail": "",
        "irregular": false
      },
      "future": {
        "forms": [
          {
            "stem": "escrever",
            "ending": "ei",
            "pron": "Escreverei"
          },
          {
            "stem": "escrever",
            "ending": "ás",
            "pron": "Escreveras"
          },
          {
            "stem": "escrever",
            "ending": "á",
            "pron": "Escrevera"
          },
          {
            "stem": "escrever",
            "ending": "emos",
            "pron": "Escreveremos"
          },
          {
            "stem": "escrever",
            "ending": "ão",
            "pron": "Escreverowng"
          },
          {
            "stem": "escrever",
            "ending": "ão",
            "pron": "Escreverowng"
          }
        ],
        "tail": ""
      }
    }
  },
  "To speak": {
    "ru": {
      "present": {
        "forms": [
          {
            "stem": "говор",
            "ending": "ю",
            "pron": "Govoryu"
          },
          {
            "stem": "говор",
            "ending": "ишь",
            "pron": "Govorish"
          },
          {
            "stem": "говор",
            "ending": "ит",
            "pron": "Govorit"
          },
          {
            "stem": "говор",
            "ending": "им",
            "pron": "Govorim"
          },
          {
            "stem": "говор",
            "ending": "ите",
            "pron": "Govorite"
          },
          {
            "stem": "говор",
            "ending": "ят",
            "pron": "Govoryat"
          }
        ]
      },
      "past": {
        "forms": [
          {
            "stem": "говори",
            "ending": "л",
            "pron": "Govoril"
          },
          {
            "stem": "говори",
            "ending": "ла",
            "pron": "Govorila"
          },
          {
            "stem": "говори",
            "ending": "ло",
            "pron": "Govorilo"
          },
          {
            "stem": "говори",
            "ending": "ли",
            "pron": "Govorili"
          }
        ],
        "tail": ""
      },
      "future": {
        "forms": [
          {
            "stem": "буд",
            "ending": "у",
            "pron": "Budu govorit"
          },
          {
            "stem": "буд",
            "ending": "ешь",
            "pron": "Budesh govorit"
          },
          {
            "stem": "буд",
            "ending": "ет",
            "pron": "Budet govorit"
          },
          {
            "stem": "буд",
            "ending": "ем",
            "pron": "Budem govorit"
          },
          {
            "stem": "буд",
            "ending": "ете",
            "pron": "Budete govorit"
          },
          {
            "stem": "буд",
            "ending": "ут",
            "pron": "Budut govorit"
          }
        ],
        "tail": " говорить"
      }
    },
    "pt": {
      "present": {
        "forms": [
          {
            "stem": "fal",
            "ending": "o",
            "pron": "Falo"
          },
          {
            "stem": "fal",
            "ending": "as",
            "pron": "Falas"
          },
          {
            "stem": "fal",
            "ending": "a",
            "pron": "Fala"
          },
          {
            "stem": "fal",
            "ending": "amos",
            "pron": "Falamos"
          },
          {
            "stem": "fal",
            "ending": "am",
            "pron": "Falam"
          },
          {
            "stem": "fal",
            "ending": "am",
            "pron": "Falam"
          }
        ]
      },
      "past": {
        "forms": [
          {
            "stem": "fal",
            "ending": "ei",
            "pron": "Falei"
          },
          {
            "stem": "fal",
            "ending": "aste",
            "pron": "Falaste"
          },
          {
            "stem": "fal",
            "ending": "ou",
            "pron": "Falou"
          },
          {
            "stem": "fal",
            "ending": "ámos",
            "pron": "Falamos"
          },
          {
            "stem": "fal",
            "ending": "aram",
            "pron": "Falaram"
          },
          {
            "stem": "fal",
            "ending": "aram",
            "pron": "Falaram"
          }
        ],
        "tail": "",
        "irregular": false
      },
      "future": {
        "forms": [
          {
            "stem": "falar",
            "ending": "ei",
            "pron": "Falarei"
          },
          {
            "stem": "falar",
            "ending": "ás",
            "pron": "Falaras"
          },
          {
            "stem": "falar",
            "ending": "á",
            "pron": "Falara"
          },
          {
            "stem": "falar",
            "ending": "emos",
            "pron": "Falaremos"
          },
          {
            "stem": "falar",
            "ending": "ão",
            "pron": "Falarowng"
          },
          {
            "stem": "falar",
            "ending": "ão",
            "pron": "Falarowng"
          }
        ],
        "tail": ""
      }
    }
  },
  "To run": {
    "ru": {
      "present": {
        "forms": [
          {
            "stem": "бега",
            "ending": "ю",
            "pron": "Begayu"
          },
          {
            "stem": "бега",
            "ending": "ешь",
            "pron": "Begayesh"
          },
          {
            "stem": "бега",
            "ending": "ет",
            "pron": "Begayet"
          },
          {
            "stem": "бега",
            "ending": "ем",
            "pron": "Begayem"
          },
          {
            "stem": "бега",
            "ending": "ете",
            "pron": "Begayete"
          },
          {
            "stem": "бега",
            "ending": "ют",
            "pron": "Begayut"
          }
        ]
      },
      "past": {
        "forms": [
          {
            "stem": "бега",
            "ending": "л",
            "pron": "Begal"
          },
          {
            "stem": "бега",
            "ending": "ла",
            "pron": "Begala"
          },
          {
            "stem": "бега",
            "ending": "ло",
            "pron": "Begalo"
          },
          {
            "stem": "бега",
            "ending": "ли",
            "pron": "Begali"
          }
        ],
        "tail": ""
      },
      "future": {
        "forms": [
          {
            "stem": "буд",
            "ending": "у",
            "pron": "Budu begat"
          },
          {
            "stem": "буд",
            "ending": "ешь",
            "pron": "Budesh begat"
          },
          {
            "stem": "буд",
            "ending": "ет",
            "pron": "Budet begat"
          },
          {
            "stem": "буд",
            "ending": "ем",
            "pron": "Budem begat"
          },
          {
            "stem": "буд",
            "ending": "ете",
            "pron": "Budete begat"
          },
          {
            "stem": "буд",
            "ending": "ут",
            "pron": "Budut begat"
          }
        ],
        "tail": " бегать"
      }
    },
    "pt": {
      "present": {
        "forms": [
          {
            "stem": "corr",
            "ending": "o",
            "pron": "Coho"
          },
          {
            "stem": "corr",
            "ending": "es",
            "pron": "Cohes"
          },
          {
            "stem": "corr",
            "ending": "e",
            "pron": "Cohe"
          },
          {
            "stem": "corr",
            "ending": "emos",
            "pron": "Cohemos"
          },
          {
            "stem": "corr",
            "ending": "em",
            "pron": "Cohem"
          },
          {
            "stem": "corr",
            "ending": "em",
            "pron": "Cohem"
          }
        ]
      },
      "past": {
        "forms": [
          {
            "stem": "corr",
            "ending": "i",
            "pron": "Cohi"
          },
          {
            "stem": "corr",
            "ending": "este",
            "pron": "Coheste"
          },
          {
            "stem": "corr",
            "ending": "eu",
            "pron": "Coheu"
          },
          {
            "stem": "corr",
            "ending": "emos",
            "pron": "Cohemos"
          },
          {
            "stem": "corr",
            "ending": "eram",
            "pron": "Coheram"
          },
          {
            "stem": "corr",
            "ending": "eram",
            "pron": "Coheram"
          }
        ],
        "tail": "",
        "irregular": false
      },
      "future": {
        "forms": [
          {
            "stem": "correr",
            "ending": "ei",
            "pron": "Coherei"
          },
          {
            "stem": "correr",
            "ending": "ás",
            "pron": "Coheras"
          },
          {
            "stem": "correr",
            "ending": "á",
            "pron": "Cohera"
          },
          {
            "stem": "correr",
            "ending": "emos",
            "pron": "Coheremos"
          },
          {
            "stem": "correr",
            "ending": "ão",
            "pron": "Coherowng"
          },
          {
            "stem": "correr",
            "ending": "ão",
            "pron": "Coherowng"
          }
        ],
        "tail": ""
      }
    }
  },
  "To walk": {
    "ru": {
      "present": {
        "forms": [
          {
            "stem": "гуля",
            "ending": "ю",
            "pron": "Gulyayu"
          },
          {
            "stem": "гуля",
            "ending": "ешь",
            "pron": "Gulyayesh"
          },
          {
            "stem": "гуля",
            "ending": "ет",
            "pron": "Gulyayet"
          },
          {
            "stem": "гуля",
            "ending": "ем",
            "pron": "Gulyayem"
          },
          {
            "stem": "гуля",
            "ending": "ете",
            "pron": "Gulyayete"
          },
          {
            "stem": "гуля",
            "ending": "ют",
            "pron": "Gulyayut"
          }
        ]
      },
      "past": {
        "forms": [
          {
            "stem": "гуля",
            "ending": "л",
            "pron": "Gulyal"
          },
          {
            "stem": "гуля",
            "ending": "ла",
            "pron": "Gulyala"
          },
          {
            "stem": "гуля",
            "ending": "ло",
            "pron": "Gulyalo"
          },
          {
            "stem": "гуля",
            "ending": "ли",
            "pron": "Gulyali"
          }
        ],
        "tail": ""
      },
      "future": {
        "forms": [
          {
            "stem": "буд",
            "ending": "у",
            "pron": "Budu gulyat"
          },
          {
            "stem": "буд",
            "ending": "ешь",
            "pron": "Budesh gulyat"
          },
          {
            "stem": "буд",
            "ending": "ет",
            "pron": "Budet gulyat"
          },
          {
            "stem": "буд",
            "ending": "ем",
            "pron": "Budem gulyat"
          },
          {
            "stem": "буд",
            "ending": "ете",
            "pron": "Budete gulyat"
          },
          {
            "stem": "буд",
            "ending": "ут",
            "pron": "Budut gulyat"
          }
        ],
        "tail": " гулять"
      }
    },
    "pt": {
      "present": {
        "forms": [
          {
            "stem": "caminh",
            "ending": "o",
            "pron": "Caminyo"
          },
          {
            "stem": "caminh",
            "ending": "as",
            "pron": "Caminyas"
          },
          {
            "stem": "caminh",
            "ending": "a",
            "pron": "Caminya"
          },
          {
            "stem": "caminh",
            "ending": "amos",
            "pron": "Caminyamos"
          },
          {
            "stem": "caminh",
            "ending": "am",
            "pron": "Caminyam"
          },
          {
            "stem": "caminh",
            "ending": "am",
            "pron": "Caminyam"
          }
        ]
      },
      "past": {
        "forms": [
          {
            "stem": "caminh",
            "ending": "ei",
            "pron": "Caminyei"
          },
          {
            "stem": "caminh",
            "ending": "aste",
            "pron": "Caminyaste"
          },
          {
            "stem": "caminh",
            "ending": "ou",
            "pron": "Caminyou"
          },
          {
            "stem": "caminh",
            "ending": "ámos",
            "pron": "Caminyamos"
          },
          {
            "stem": "caminh",
            "ending": "aram",
            "pron": "Caminyaram"
          },
          {
            "stem": "caminh",
            "ending": "aram",
            "pron": "Caminyaram"
          }
        ],
        "tail": "",
        "irregular": false
      },
      "future": {
        "forms": [
          {
            "stem": "caminhar",
            "ending": "ei",
            "pron": "Caminyarei"
          },
          {
            "stem": "caminhar",
            "ending": "ás",
            "pron": "Caminyaras"
          },
          {
            "stem": "caminhar",
            "ending": "á",
            "pron": "Caminyara"
          },
          {
            "stem": "caminhar",
            "ending": "emos",
            "pron": "Caminyaremos"
          },
          {
            "stem": "caminhar",
            "ending": "ão",
            "pron": "Caminyarowng"
          },
          {
            "stem": "caminhar",
            "ending": "ão",
            "pron": "Caminyarowng"
          }
        ],
        "tail": ""
      }
    }
  },
  "To swim": {
    "ru": {
      "present": {
        "forms": [
          {
            "stem": "плава",
            "ending": "ю",
            "pron": "Plavayu"
          },
          {
            "stem": "плава",
            "ending": "ешь",
            "pron": "Plavayesh"
          },
          {
            "stem": "плава",
            "ending": "ет",
            "pron": "Plavayet"
          },
          {
            "stem": "плава",
            "ending": "ем",
            "pron": "Plavayem"
          },
          {
            "stem": "плава",
            "ending": "ете",
            "pron": "Plavayete"
          },
          {
            "stem": "плава",
            "ending": "ют",
            "pron": "Plavayut"
          }
        ]
      },
      "past": {
        "forms": [
          {
            "stem": "плава",
            "ending": "л",
            "pron": "Plaval"
          },
          {
            "stem": "плава",
            "ending": "ла",
            "pron": "Plavala"
          },
          {
            "stem": "плава",
            "ending": "ло",
            "pron": "Plavalo"
          },
          {
            "stem": "плава",
            "ending": "ли",
            "pron": "Plavali"
          }
        ],
        "tail": ""
      },
      "future": {
        "forms": [
          {
            "stem": "буд",
            "ending": "у",
            "pron": "Budu plavat"
          },
          {
            "stem": "буд",
            "ending": "ешь",
            "pron": "Budesh plavat"
          },
          {
            "stem": "буд",
            "ending": "ет",
            "pron": "Budet plavat"
          },
          {
            "stem": "буд",
            "ending": "ем",
            "pron": "Budem plavat"
          },
          {
            "stem": "буд",
            "ending": "ете",
            "pron": "Budete plavat"
          },
          {
            "stem": "буд",
            "ending": "ут",
            "pron": "Budut plavat"
          }
        ],
        "tail": " плавать"
      }
    },
    "pt": {
      "present": {
        "forms": [
          {
            "stem": "nad",
            "ending": "o",
            "pron": "Nado"
          },
          {
            "stem": "nad",
            "ending": "as",
            "pron": "Nadas"
          },
          {
            "stem": "nad",
            "ending": "a",
            "pron": "Nada"
          },
          {
            "stem": "nad",
            "ending": "amos",
            "pron": "Nadamos"
          },
          {
            "stem": "nad",
            "ending": "am",
            "pron": "Nadam"
          },
          {
            "stem": "nad",
            "ending": "am",
            "pron": "Nadam"
          }
        ]
      },
      "past": {
        "forms": [
          {
            "stem": "nad",
            "ending": "ei",
            "pron": "Nadei"
          },
          {
            "stem": "nad",
            "ending": "aste",
            "pron": "Nadaste"
          },
          {
            "stem": "nad",
            "ending": "ou",
            "pron": "Nadou"
          },
          {
            "stem": "nad",
            "ending": "ámos",
            "pron": "Nadamos"
          },
          {
            "stem": "nad",
            "ending": "aram",
            "pron": "Nadaram"
          },
          {
            "stem": "nad",
            "ending": "aram",
            "pron": "Nadaram"
          }
        ],
        "tail": "",
        "irregular": false
      },
      "future": {
        "forms": [
          {
            "stem": "nadar",
            "ending": "ei",
            "pron": "Nadarei"
          },
          {
            "stem": "nadar",
            "ending": "ás",
            "pron": "Nadaras"
          },
          {
            "stem": "nadar",
            "ending": "á",
            "pron": "Nadara"
          },
          {
            "stem": "nadar",
            "ending": "emos",
            "pron": "Nadaremos"
          },
          {
            "stem": "nadar",
            "ending": "ão",
            "pron": "Nadarowng"
          },
          {
            "stem": "nadar",
            "ending": "ão",
            "pron": "Nadarowng"
          }
        ],
        "tail": ""
      }
    }
  },
  "To play": {
    "ru": {
      "present": {
        "forms": [
          {
            "stem": "игра",
            "ending": "ю",
            "pron": "Igrayu"
          },
          {
            "stem": "игра",
            "ending": "ешь",
            "pron": "Igrayesh"
          },
          {
            "stem": "игра",
            "ending": "ет",
            "pron": "Igrayet"
          },
          {
            "stem": "игра",
            "ending": "ем",
            "pron": "Igrayem"
          },
          {
            "stem": "игра",
            "ending": "ете",
            "pron": "Igrayete"
          },
          {
            "stem": "игра",
            "ending": "ют",
            "pron": "Igrayut"
          }
        ]
      },
      "past": {
        "forms": [
          {
            "stem": "игра",
            "ending": "л",
            "pron": "Igral"
          },
          {
            "stem": "игра",
            "ending": "ла",
            "pron": "Igrala"
          },
          {
            "stem": "игра",
            "ending": "ло",
            "pron": "Igralo"
          },
          {
            "stem": "игра",
            "ending": "ли",
            "pron": "Igrali"
          }
        ],
        "tail": ""
      },
      "future": {
        "forms": [
          {
            "stem": "буд",
            "ending": "у",
            "pron": "Budu igrat"
          },
          {
            "stem": "буд",
            "ending": "ешь",
            "pron": "Budesh igrat"
          },
          {
            "stem": "буд",
            "ending": "ет",
            "pron": "Budet igrat"
          },
          {
            "stem": "буд",
            "ending": "ем",
            "pron": "Budem igrat"
          },
          {
            "stem": "буд",
            "ending": "ете",
            "pron": "Budete igrat"
          },
          {
            "stem": "буд",
            "ending": "ут",
            "pron": "Budut igrat"
          }
        ],
        "tail": " играть"
      }
    },
    "pt": {
      "present": {
        "forms": [
          {
            "stem": "jog",
            "ending": "o",
            "pron": "Zhogo"
          },
          {
            "stem": "jog",
            "ending": "as",
            "pron": "Zhogas"
          },
          {
            "stem": "jog",
            "ending": "a",
            "pron": "Zhoga"
          },
          {
            "stem": "jog",
            "ending": "amos",
            "pron": "Zhogamos"
          },
          {
            "stem": "jog",
            "ending": "am",
            "pron": "Zhogam"
          },
          {
            "stem": "jog",
            "ending": "am",
            "pron": "Zhogam"
          }
        ]
      },
      "past": {
        "forms": [
          {
            "stem": "jogu",
            "ending": "ei",
            "pron": "Zhozhei"
          },
          {
            "stem": "jog",
            "ending": "aste",
            "pron": "Zhogaste"
          },
          {
            "stem": "jog",
            "ending": "ou",
            "pron": "Zhogou"
          },
          {
            "stem": "jog",
            "ending": "ámos",
            "pron": "Zhogamos"
          },
          {
            "stem": "jog",
            "ending": "aram",
            "pron": "Zhogaram"
          },
          {
            "stem": "jog",
            "ending": "aram",
            "pron": "Zhogaram"
          }
        ],
        "tail": "",
        "irregular": false
      },
      "future": {
        "forms": [
          {
            "stem": "jogar",
            "ending": "ei",
            "pron": "Zhogarei"
          },
          {
            "stem": "jogar",
            "ending": "ás",
            "pron": "Zhogaras"
          },
          {
            "stem": "jogar",
            "ending": "á",
            "pron": "Zhogara"
          },
          {
            "stem": "jogar",
            "ending": "emos",
            "pron": "Zhogaremos"
          },
          {
            "stem": "jogar",
            "ending": "ão",
            "pron": "Zhogarowng"
          },
          {
            "stem": "jogar",
            "ending": "ão",
            "pron": "Zhogarowng"
          }
        ],
        "tail": ""
      }
    }
  },
  "To sing": {
    "ru": {
      "present": {
        "forms": [
          {
            "stem": "по",
            "ending": "ю",
            "pron": "Poyu"
          },
          {
            "stem": "по",
            "ending": "ёшь",
            "pron": "Poyosh"
          },
          {
            "stem": "по",
            "ending": "ёт",
            "pron": "Poyot"
          },
          {
            "stem": "по",
            "ending": "ём",
            "pron": "Poyom"
          },
          {
            "stem": "по",
            "ending": "ёте",
            "pron": "Poyote"
          },
          {
            "stem": "по",
            "ending": "ют",
            "pron": "Poyut"
          }
        ]
      },
      "past": {
        "forms": [
          {
            "stem": "пе",
            "ending": "л",
            "pron": "Pel"
          },
          {
            "stem": "пе",
            "ending": "ла",
            "pron": "Pela"
          },
          {
            "stem": "пе",
            "ending": "ло",
            "pron": "Pelo"
          },
          {
            "stem": "пе",
            "ending": "ли",
            "pron": "Peli"
          }
        ],
        "tail": ""
      },
      "future": {
        "forms": [
          {
            "stem": "буд",
            "ending": "у",
            "pron": "Budu pet"
          },
          {
            "stem": "буд",
            "ending": "ешь",
            "pron": "Budesh pet"
          },
          {
            "stem": "буд",
            "ending": "ет",
            "pron": "Budet pet"
          },
          {
            "stem": "буд",
            "ending": "ем",
            "pron": "Budem pet"
          },
          {
            "stem": "буд",
            "ending": "ете",
            "pron": "Budete pet"
          },
          {
            "stem": "буд",
            "ending": "ут",
            "pron": "Budut pet"
          }
        ],
        "tail": " петь"
      }
    },
    "pt": {
      "present": {
        "forms": [
          {
            "stem": "cant",
            "ending": "o",
            "pron": "Canto"
          },
          {
            "stem": "cant",
            "ending": "as",
            "pron": "Cantas"
          },
          {
            "stem": "cant",
            "ending": "a",
            "pron": "Canta"
          },
          {
            "stem": "cant",
            "ending": "amos",
            "pron": "Cantamos"
          },
          {
            "stem": "cant",
            "ending": "am",
            "pron": "Cantam"
          },
          {
            "stem": "cant",
            "ending": "am",
            "pron": "Cantam"
          }
        ]
      },
      "past": {
        "forms": [
          {
            "stem": "cant",
            "ending": "ei",
            "pron": "Cantei"
          },
          {
            "stem": "cant",
            "ending": "aste",
            "pron": "Cantaste"
          },
          {
            "stem": "cant",
            "ending": "ou",
            "pron": "Cantou"
          },
          {
            "stem": "cant",
            "ending": "ámos",
            "pron": "Cantamos"
          },
          {
            "stem": "cant",
            "ending": "aram",
            "pron": "Cantaram"
          },
          {
            "stem": "cant",
            "ending": "aram",
            "pron": "Cantaram"
          }
        ],
        "tail": "",
        "irregular": false
      },
      "future": {
        "forms": [
          {
            "stem": "cantar",
            "ending": "ei",
            "pron": "Cantarei"
          },
          {
            "stem": "cantar",
            "ending": "ás",
            "pron": "Cantaras"
          },
          {
            "stem": "cantar",
            "ending": "á",
            "pron": "Cantara"
          },
          {
            "stem": "cantar",
            "ending": "emos",
            "pron": "Cantaremos"
          },
          {
            "stem": "cantar",
            "ending": "ão",
            "pron": "Cantarowng"
          },
          {
            "stem": "cantar",
            "ending": "ão",
            "pron": "Cantarowng"
          }
        ],
        "tail": ""
      }
    }
  },
  "To dance": {
    "ru": {
      "present": {
        "forms": [
          {
            "stem": "танцу",
            "ending": "ю",
            "pron": "Tantsuyu"
          },
          {
            "stem": "танцу",
            "ending": "ешь",
            "pron": "Tantsuyesh"
          },
          {
            "stem": "танцу",
            "ending": "ет",
            "pron": "Tantsuyet"
          },
          {
            "stem": "танцу",
            "ending": "ем",
            "pron": "Tantsuyem"
          },
          {
            "stem": "танцу",
            "ending": "ете",
            "pron": "Tantsuyete"
          },
          {
            "stem": "танцу",
            "ending": "ют",
            "pron": "Tantsuyut"
          }
        ]
      },
      "past": {
        "forms": [
          {
            "stem": "танцева",
            "ending": "л",
            "pron": "Tantseval"
          },
          {
            "stem": "танцева",
            "ending": "ла",
            "pron": "Tantsevala"
          },
          {
            "stem": "танцева",
            "ending": "ло",
            "pron": "Tantsevalo"
          },
          {
            "stem": "танцева",
            "ending": "ли",
            "pron": "Tantsevali"
          }
        ],
        "tail": ""
      },
      "future": {
        "forms": [
          {
            "stem": "буд",
            "ending": "у",
            "pron": "Budu tantsevat"
          },
          {
            "stem": "буд",
            "ending": "ешь",
            "pron": "Budesh tantsevat"
          },
          {
            "stem": "буд",
            "ending": "ет",
            "pron": "Budet tantsevat"
          },
          {
            "stem": "буд",
            "ending": "ем",
            "pron": "Budem tantsevat"
          },
          {
            "stem": "буд",
            "ending": "ете",
            "pron": "Budete tantsevat"
          },
          {
            "stem": "буд",
            "ending": "ут",
            "pron": "Budut tantsevat"
          }
        ],
        "tail": " танцевать"
      }
    },
    "pt": {
      "present": {
        "forms": [
          {
            "stem": "danç",
            "ending": "o",
            "pron": "Danso"
          },
          {
            "stem": "danç",
            "ending": "as",
            "pron": "Dansas"
          },
          {
            "stem": "danç",
            "ending": "a",
            "pron": "Dansa"
          },
          {
            "stem": "danç",
            "ending": "amos",
            "pron": "Dansamos"
          },
          {
            "stem": "danç",
            "ending": "am",
            "pron": "Dansam"
          },
          {
            "stem": "danç",
            "ending": "am",
            "pron": "Dansam"
          }
        ]
      },
      "past": {
        "forms": [
          {
            "stem": "danc",
            "ending": "ei",
            "pron": "Dancei"
          },
          {
            "stem": "danç",
            "ending": "aste",
            "pron": "Dansaste"
          },
          {
            "stem": "danç",
            "ending": "ou",
            "pron": "Dansou"
          },
          {
            "stem": "danç",
            "ending": "ámos",
            "pron": "Dansamos"
          },
          {
            "stem": "danç",
            "ending": "aram",
            "pron": "Dansaram"
          },
          {
            "stem": "danç",
            "ending": "aram",
            "pron": "Dansaram"
          }
        ],
        "tail": "",
        "irregular": false
      },
      "future": {
        "forms": [
          {
            "stem": "dançar",
            "ending": "ei",
            "pron": "Dansarei"
          },
          {
            "stem": "dançar",
            "ending": "ás",
            "pron": "Dansaras"
          },
          {
            "stem": "dançar",
            "ending": "á",
            "pron": "Dansara"
          },
          {
            "stem": "dançar",
            "ending": "emos",
            "pron": "Dansaremos"
          },
          {
            "stem": "dançar",
            "ending": "ão",
            "pron": "Dansarowng"
          },
          {
            "stem": "dançar",
            "ending": "ão",
            "pron": "Dansarowng"
          }
        ],
        "tail": ""
      }
    }
  },
  "To cook": {
    "ru": {
      "present": {
        "forms": [
          {
            "stem": "готовл",
            "ending": "ю",
            "pron": "Gotovlyu"
          },
          {
            "stem": "готов",
            "ending": "ишь",
            "pron": "Gotovish"
          },
          {
            "stem": "готов",
            "ending": "ит",
            "pron": "Gotovit"
          },
          {
            "stem": "готов",
            "ending": "им",
            "pron": "Gotovim"
          },
          {
            "stem": "готов",
            "ending": "ите",
            "pron": "Gotovite"
          },
          {
            "stem": "готов",
            "ending": "ят",
            "pron": "Gotovyat"
          }
        ]
      },
      "past": {
        "forms": [
          {
            "stem": "готови",
            "ending": "л",
            "pron": "Gotovil"
          },
          {
            "stem": "готови",
            "ending": "ла",
            "pron": "Gotovila"
          },
          {
            "stem": "готови",
            "ending": "ло",
            "pron": "Gotovilo"
          },
          {
            "stem": "готови",
            "ending": "ли",
            "pron": "Gotovili"
          }
        ],
        "tail": ""
      },
      "future": {
        "forms": [
          {
            "stem": "буд",
            "ending": "у",
            "pron": "Budu gotovit"
          },
          {
            "stem": "буд",
            "ending": "ешь",
            "pron": "Budesh gotovit"
          },
          {
            "stem": "буд",
            "ending": "ет",
            "pron": "Budet gotovit"
          },
          {
            "stem": "буд",
            "ending": "ем",
            "pron": "Budem gotovit"
          },
          {
            "stem": "буд",
            "ending": "ете",
            "pron": "Budete gotovit"
          },
          {
            "stem": "буд",
            "ending": "ут",
            "pron": "Budut gotovit"
          }
        ],
        "tail": " готовить"
      }
    },
    "pt": {
      "present": {
        "forms": [
          {
            "stem": "cozinh",
            "ending": "o",
            "pron": "Cozinyo"
          },
          {
            "stem": "cozinh",
            "ending": "as",
            "pron": "Cozinyas"
          },
          {
            "stem": "cozinh",
            "ending": "a",
            "pron": "Cozinya"
          },
          {
            "stem": "cozinh",
            "ending": "amos",
            "pron": "Cozinyamos"
          },
          {
            "stem": "cozinh",
            "ending": "am",
            "pron": "Cozinyam"
          },
          {
            "stem": "cozinh",
            "ending": "am",
            "pron": "Cozinyam"
          }
        ]
      },
      "past": {
        "forms": [
          {
            "stem": "cozinh",
            "ending": "ei",
            "pron": "Cozinyei"
          },
          {
            "stem": "cozinh",
            "ending": "aste",
            "pron": "Cozinyaste"
          },
          {
            "stem": "cozinh",
            "ending": "ou",
            "pron": "Cozinyou"
          },
          {
            "stem": "cozinh",
            "ending": "ámos",
            "pron": "Cozinyamos"
          },
          {
            "stem": "cozinh",
            "ending": "aram",
            "pron": "Cozinyaram"
          },
          {
            "stem": "cozinh",
            "ending": "aram",
            "pron": "Cozinyaram"
          }
        ],
        "tail": "",
        "irregular": false
      },
      "future": {
        "forms": [
          {
            "stem": "cozinhar",
            "ending": "ei",
            "pron": "Cozinyarei"
          },
          {
            "stem": "cozinhar",
            "ending": "ás",
            "pron": "Cozinyaras"
          },
          {
            "stem": "cozinhar",
            "ending": "á",
            "pron": "Cozinyara"
          },
          {
            "stem": "cozinhar",
            "ending": "emos",
            "pron": "Cozinyaremos"
          },
          {
            "stem": "cozinhar",
            "ending": "ão",
            "pron": "Cozinyarowng"
          },
          {
            "stem": "cozinhar",
            "ending": "ão",
            "pron": "Cozinyarowng"
          }
        ],
        "tail": ""
      }
    }
  },
  "To help": {
    "ru": {
      "present": {
        "forms": [
          {
            "stem": "помога",
            "ending": "ю",
            "pron": "Pomogayu"
          },
          {
            "stem": "помога",
            "ending": "ешь",
            "pron": "Pomogayesh"
          },
          {
            "stem": "помога",
            "ending": "ет",
            "pron": "Pomogayet"
          },
          {
            "stem": "помога",
            "ending": "ем",
            "pron": "Pomogayem"
          },
          {
            "stem": "помога",
            "ending": "ете",
            "pron": "Pomogayete"
          },
          {
            "stem": "помога",
            "ending": "ют",
            "pron": "Pomogayut"
          }
        ]
      },
      "past": {
        "forms": [
          {
            "stem": "помога",
            "ending": "л",
            "pron": "Pomogal"
          },
          {
            "stem": "помога",
            "ending": "ла",
            "pron": "Pomogala"
          },
          {
            "stem": "помога",
            "ending": "ло",
            "pron": "Pomogalo"
          },
          {
            "stem": "помога",
            "ending": "ли",
            "pron": "Pomogali"
          }
        ],
        "tail": ""
      },
      "future": {
        "forms": [
          {
            "stem": "буд",
            "ending": "у",
            "pron": "Budu pomogat"
          },
          {
            "stem": "буд",
            "ending": "ешь",
            "pron": "Budesh pomogat"
          },
          {
            "stem": "буд",
            "ending": "ет",
            "pron": "Budet pomogat"
          },
          {
            "stem": "буд",
            "ending": "ем",
            "pron": "Budem pomogat"
          },
          {
            "stem": "буд",
            "ending": "ете",
            "pron": "Budete pomogat"
          },
          {
            "stem": "буд",
            "ending": "ут",
            "pron": "Budut pomogat"
          }
        ],
        "tail": " помогать"
      }
    },
    "pt": {
      "present": {
        "forms": [
          {
            "stem": "ajud",
            "ending": "o",
            "pron": "Azhudo"
          },
          {
            "stem": "ajud",
            "ending": "as",
            "pron": "Azhudas"
          },
          {
            "stem": "ajud",
            "ending": "a",
            "pron": "Azhuda"
          },
          {
            "stem": "ajud",
            "ending": "amos",
            "pron": "Azhudamos"
          },
          {
            "stem": "ajud",
            "ending": "am",
            "pron": "Azhudam"
          },
          {
            "stem": "ajud",
            "ending": "am",
            "pron": "Azhudam"
          }
        ]
      },
      "past": {
        "forms": [
          {
            "stem": "ajud",
            "ending": "ei",
            "pron": "Azhudei"
          },
          {
            "stem": "ajud",
            "ending": "aste",
            "pron": "Azhudaste"
          },
          {
            "stem": "ajud",
            "ending": "ou",
            "pron": "Azhudou"
          },
          {
            "stem": "ajud",
            "ending": "ámos",
            "pron": "Azhudamos"
          },
          {
            "stem": "ajud",
            "ending": "aram",
            "pron": "Azhudaram"
          },
          {
            "stem": "ajud",
            "ending": "aram",
            "pron": "Azhudaram"
          }
        ],
        "tail": "",
        "irregular": false
      },
      "future": {
        "forms": [
          {
            "stem": "ajudar",
            "ending": "ei",
            "pron": "Azhudarei"
          },
          {
            "stem": "ajudar",
            "ending": "ás",
            "pron": "Azhudaras"
          },
          {
            "stem": "ajudar",
            "ending": "á",
            "pron": "Azhudara"
          },
          {
            "stem": "ajudar",
            "ending": "emos",
            "pron": "Azhudaremos"
          },
          {
            "stem": "ajudar",
            "ending": "ão",
            "pron": "Azhudarowng"
          },
          {
            "stem": "ajudar",
            "ending": "ão",
            "pron": "Azhudarowng"
          }
        ],
        "tail": ""
      }
    }
  },
  "To buy": {
    "ru": {
      "present": {
        "forms": [
          {
            "stem": "покупа",
            "ending": "ю",
            "pron": "Pokupayu"
          },
          {
            "stem": "покупа",
            "ending": "ешь",
            "pron": "Pokupayesh"
          },
          {
            "stem": "покупа",
            "ending": "ет",
            "pron": "Pokupayet"
          },
          {
            "stem": "покупа",
            "ending": "ем",
            "pron": "Pokupayem"
          },
          {
            "stem": "покупа",
            "ending": "ете",
            "pron": "Pokupayete"
          },
          {
            "stem": "покупа",
            "ending": "ют",
            "pron": "Pokupayut"
          }
        ]
      },
      "past": {
        "forms": [
          {
            "stem": "покупа",
            "ending": "л",
            "pron": "Pokupal"
          },
          {
            "stem": "покупа",
            "ending": "ла",
            "pron": "Pokupala"
          },
          {
            "stem": "покупа",
            "ending": "ло",
            "pron": "Pokupalo"
          },
          {
            "stem": "покупа",
            "ending": "ли",
            "pron": "Pokupali"
          }
        ],
        "tail": ""
      },
      "future": {
        "forms": [
          {
            "stem": "буд",
            "ending": "у",
            "pron": "Budu pokupat"
          },
          {
            "stem": "буд",
            "ending": "ешь",
            "pron": "Budesh pokupat"
          },
          {
            "stem": "буд",
            "ending": "ет",
            "pron": "Budet pokupat"
          },
          {
            "stem": "буд",
            "ending": "ем",
            "pron": "Budem pokupat"
          },
          {
            "stem": "буд",
            "ending": "ете",
            "pron": "Budete pokupat"
          },
          {
            "stem": "буд",
            "ending": "ут",
            "pron": "Budut pokupat"
          }
        ],
        "tail": " покупать"
      }
    },
    "pt": {
      "present": {
        "forms": [
          {
            "stem": "compr",
            "ending": "o",
            "pron": "Compro"
          },
          {
            "stem": "compr",
            "ending": "as",
            "pron": "Compras"
          },
          {
            "stem": "compr",
            "ending": "a",
            "pron": "Compra"
          },
          {
            "stem": "compr",
            "ending": "amos",
            "pron": "Compramos"
          },
          {
            "stem": "compr",
            "ending": "am",
            "pron": "Compram"
          },
          {
            "stem": "compr",
            "ending": "am",
            "pron": "Compram"
          }
        ]
      },
      "past": {
        "forms": [
          {
            "stem": "compr",
            "ending": "ei",
            "pron": "Comprei"
          },
          {
            "stem": "compr",
            "ending": "aste",
            "pron": "Compraste"
          },
          {
            "stem": "compr",
            "ending": "ou",
            "pron": "Comprou"
          },
          {
            "stem": "compr",
            "ending": "ámos",
            "pron": "Compramos"
          },
          {
            "stem": "compr",
            "ending": "aram",
            "pron": "Compraram"
          },
          {
            "stem": "compr",
            "ending": "aram",
            "pron": "Compraram"
          }
        ],
        "tail": "",
        "irregular": false
      },
      "future": {
        "forms": [
          {
            "stem": "comprar",
            "ending": "ei",
            "pron": "Comprarei"
          },
          {
            "stem": "comprar",
            "ending": "ás",
            "pron": "Compraras"
          },
          {
            "stem": "comprar",
            "ending": "á",
            "pron": "Comprara"
          },
          {
            "stem": "comprar",
            "ending": "emos",
            "pron": "Compraremos"
          },
          {
            "stem": "comprar",
            "ending": "ão",
            "pron": "Comprarowng"
          },
          {
            "stem": "comprar",
            "ending": "ão",
            "pron": "Comprarowng"
          }
        ],
        "tail": ""
      }
    }
  },
  "To sell": {
    "ru": {
      "present": {
        "forms": [
          {
            "stem": "прода",
            "ending": "ю",
            "pron": "Prodayu"
          },
          {
            "stem": "прода",
            "ending": "ёшь",
            "pron": "Prodayosh"
          },
          {
            "stem": "прода",
            "ending": "ёт",
            "pron": "Prodayot"
          },
          {
            "stem": "прода",
            "ending": "ём",
            "pron": "Prodayom"
          },
          {
            "stem": "прода",
            "ending": "ёте",
            "pron": "Prodayote"
          },
          {
            "stem": "прода",
            "ending": "ют",
            "pron": "Prodayut"
          }
        ]
      },
      "past": {
        "forms": [
          {
            "stem": "продава",
            "ending": "л",
            "pron": "Prodaval"
          },
          {
            "stem": "продава",
            "ending": "ла",
            "pron": "Prodavala"
          },
          {
            "stem": "продава",
            "ending": "ло",
            "pron": "Prodavalo"
          },
          {
            "stem": "продава",
            "ending": "ли",
            "pron": "Prodavali"
          }
        ],
        "tail": ""
      },
      "future": {
        "forms": [
          {
            "stem": "буд",
            "ending": "у",
            "pron": "Budu prodavat"
          },
          {
            "stem": "буд",
            "ending": "ешь",
            "pron": "Budesh prodavat"
          },
          {
            "stem": "буд",
            "ending": "ет",
            "pron": "Budet prodavat"
          },
          {
            "stem": "буд",
            "ending": "ем",
            "pron": "Budem prodavat"
          },
          {
            "stem": "буд",
            "ending": "ете",
            "pron": "Budete prodavat"
          },
          {
            "stem": "буд",
            "ending": "ут",
            "pron": "Budut prodavat"
          }
        ],
        "tail": " продавать"
      }
    },
    "pt": {
      "present": {
        "forms": [
          {
            "stem": "vend",
            "ending": "o",
            "pron": "Vendo"
          },
          {
            "stem": "vend",
            "ending": "es",
            "pron": "Vendes"
          },
          {
            "stem": "vend",
            "ending": "e",
            "pron": "Vende"
          },
          {
            "stem": "vend",
            "ending": "emos",
            "pron": "Vendemos"
          },
          {
            "stem": "vend",
            "ending": "em",
            "pron": "Vendem"
          },
          {
            "stem": "vend",
            "ending": "em",
            "pron": "Vendem"
          }
        ]
      },
      "past": {
        "forms": [
          {
            "stem": "vend",
            "ending": "i",
            "pron": "Vendi"
          },
          {
            "stem": "vend",
            "ending": "este",
            "pron": "Vendeste"
          },
          {
            "stem": "vend",
            "ending": "eu",
            "pron": "Vendeu"
          },
          {
            "stem": "vend",
            "ending": "emos",
            "pron": "Vendemos"
          },
          {
            "stem": "vend",
            "ending": "eram",
            "pron": "Venderam"
          },
          {
            "stem": "vend",
            "ending": "eram",
            "pron": "Venderam"
          }
        ],
        "tail": "",
        "irregular": false
      },
      "future": {
        "forms": [
          {
            "stem": "vender",
            "ending": "ei",
            "pron": "Venderei"
          },
          {
            "stem": "vender",
            "ending": "ás",
            "pron": "Venderas"
          },
          {
            "stem": "vender",
            "ending": "á",
            "pron": "Vendera"
          },
          {
            "stem": "vender",
            "ending": "emos",
            "pron": "Venderemos"
          },
          {
            "stem": "vender",
            "ending": "ão",
            "pron": "Venderowng"
          },
          {
            "stem": "vender",
            "ending": "ão",
            "pron": "Venderowng"
          }
        ],
        "tail": ""
      }
    }
  },
  "To open": {
    "ru": {
      "present": {
        "forms": [
          {
            "stem": "открыва",
            "ending": "ю",
            "pron": "Otkryvayu"
          },
          {
            "stem": "открыва",
            "ending": "ешь",
            "pron": "Otkryvayesh"
          },
          {
            "stem": "открыва",
            "ending": "ет",
            "pron": "Otkryvayet"
          },
          {
            "stem": "открыва",
            "ending": "ем",
            "pron": "Otkryvayem"
          },
          {
            "stem": "открыва",
            "ending": "ете",
            "pron": "Otkryvayete"
          },
          {
            "stem": "открыва",
            "ending": "ют",
            "pron": "Otkryvayut"
          }
        ]
      },
      "past": {
        "forms": [
          {
            "stem": "открыва",
            "ending": "л",
            "pron": "Otkryval"
          },
          {
            "stem": "открыва",
            "ending": "ла",
            "pron": "Otkryvala"
          },
          {
            "stem": "открыва",
            "ending": "ло",
            "pron": "Otkryvalo"
          },
          {
            "stem": "открыва",
            "ending": "ли",
            "pron": "Otkryvali"
          }
        ],
        "tail": ""
      },
      "future": {
        "forms": [
          {
            "stem": "буд",
            "ending": "у",
            "pron": "Budu otkryvat"
          },
          {
            "stem": "буд",
            "ending": "ешь",
            "pron": "Budesh otkryvat"
          },
          {
            "stem": "буд",
            "ending": "ет",
            "pron": "Budet otkryvat"
          },
          {
            "stem": "буд",
            "ending": "ем",
            "pron": "Budem otkryvat"
          },
          {
            "stem": "буд",
            "ending": "ете",
            "pron": "Budete otkryvat"
          },
          {
            "stem": "буд",
            "ending": "ут",
            "pron": "Budut otkryvat"
          }
        ],
        "tail": " открывать"
      }
    },
    "pt": {
      "present": {
        "forms": [
          {
            "stem": "abr",
            "ending": "o",
            "pron": "Abro"
          },
          {
            "stem": "abr",
            "ending": "es",
            "pron": "Abres"
          },
          {
            "stem": "abr",
            "ending": "e",
            "pron": "Abre"
          },
          {
            "stem": "abr",
            "ending": "imos",
            "pron": "Abrimos"
          },
          {
            "stem": "abr",
            "ending": "em",
            "pron": "Abrem"
          },
          {
            "stem": "abr",
            "ending": "em",
            "pron": "Abrem"
          }
        ]
      },
      "past": {
        "forms": [
          {
            "stem": "abr",
            "ending": "i",
            "pron": "Abri"
          },
          {
            "stem": "abr",
            "ending": "iste",
            "pron": "Abriste"
          },
          {
            "stem": "abr",
            "ending": "iu",
            "pron": "Abriu"
          },
          {
            "stem": "abr",
            "ending": "imos",
            "pron": "Abrimos"
          },
          {
            "stem": "abr",
            "ending": "iram",
            "pron": "Abriram"
          },
          {
            "stem": "abr",
            "ending": "iram",
            "pron": "Abriram"
          }
        ],
        "tail": "",
        "irregular": false
      },
      "future": {
        "forms": [
          {
            "stem": "abrir",
            "ending": "ei",
            "pron": "Abrirei"
          },
          {
            "stem": "abrir",
            "ending": "ás",
            "pron": "Abriras"
          },
          {
            "stem": "abrir",
            "ending": "á",
            "pron": "Abrira"
          },
          {
            "stem": "abrir",
            "ending": "emos",
            "pron": "Abriremos"
          },
          {
            "stem": "abrir",
            "ending": "ão",
            "pron": "Abrirowng"
          },
          {
            "stem": "abrir",
            "ending": "ão",
            "pron": "Abrirowng"
          }
        ],
        "tail": ""
      }
    }
  },
  "To close": {
    "ru": {
      "present": {
        "forms": [
          {
            "stem": "закрыва",
            "ending": "ю",
            "pron": "Zakryvayu"
          },
          {
            "stem": "закрыва",
            "ending": "ешь",
            "pron": "Zakryvayesh"
          },
          {
            "stem": "закрыва",
            "ending": "ет",
            "pron": "Zakryvayet"
          },
          {
            "stem": "закрыва",
            "ending": "ем",
            "pron": "Zakryvayem"
          },
          {
            "stem": "закрыва",
            "ending": "ете",
            "pron": "Zakryvayete"
          },
          {
            "stem": "закрыва",
            "ending": "ют",
            "pron": "Zakryvayut"
          }
        ]
      },
      "past": {
        "forms": [
          {
            "stem": "закрыва",
            "ending": "л",
            "pron": "Zakryval"
          },
          {
            "stem": "закрыва",
            "ending": "ла",
            "pron": "Zakryvala"
          },
          {
            "stem": "закрыва",
            "ending": "ло",
            "pron": "Zakryvalo"
          },
          {
            "stem": "закрыва",
            "ending": "ли",
            "pron": "Zakryvali"
          }
        ],
        "tail": ""
      },
      "future": {
        "forms": [
          {
            "stem": "буд",
            "ending": "у",
            "pron": "Budu zakryvat"
          },
          {
            "stem": "буд",
            "ending": "ешь",
            "pron": "Budesh zakryvat"
          },
          {
            "stem": "буд",
            "ending": "ет",
            "pron": "Budet zakryvat"
          },
          {
            "stem": "буд",
            "ending": "ем",
            "pron": "Budem zakryvat"
          },
          {
            "stem": "буд",
            "ending": "ете",
            "pron": "Budete zakryvat"
          },
          {
            "stem": "буд",
            "ending": "ут",
            "pron": "Budut zakryvat"
          }
        ],
        "tail": " закрывать"
      }
    },
    "pt": {
      "present": {
        "forms": [
          {
            "stem": "fech",
            "ending": "o",
            "pron": "Fesho"
          },
          {
            "stem": "fech",
            "ending": "as",
            "pron": "Feshas"
          },
          {
            "stem": "fech",
            "ending": "a",
            "pron": "Fesha"
          },
          {
            "stem": "fech",
            "ending": "amos",
            "pron": "Feshamos"
          },
          {
            "stem": "fech",
            "ending": "am",
            "pron": "Fesham"
          },
          {
            "stem": "fech",
            "ending": "am",
            "pron": "Fesham"
          }
        ]
      },
      "past": {
        "forms": [
          {
            "stem": "fech",
            "ending": "ei",
            "pron": "Feshei"
          },
          {
            "stem": "fech",
            "ending": "aste",
            "pron": "Feshaste"
          },
          {
            "stem": "fech",
            "ending": "ou",
            "pron": "Feshou"
          },
          {
            "stem": "fech",
            "ending": "ámos",
            "pron": "Feshamos"
          },
          {
            "stem": "fech",
            "ending": "aram",
            "pron": "Fesharam"
          },
          {
            "stem": "fech",
            "ending": "aram",
            "pron": "Fesharam"
          }
        ],
        "tail": "",
        "irregular": false
      },
      "future": {
        "forms": [
          {
            "stem": "fechar",
            "ending": "ei",
            "pron": "Fesharei"
          },
          {
            "stem": "fechar",
            "ending": "ás",
            "pron": "Fesharas"
          },
          {
            "stem": "fechar",
            "ending": "á",
            "pron": "Feshara"
          },
          {
            "stem": "fechar",
            "ending": "emos",
            "pron": "Fesharemos"
          },
          {
            "stem": "fechar",
            "ending": "ão",
            "pron": "Fesharowng"
          },
          {
            "stem": "fechar",
            "ending": "ão",
            "pron": "Fesharowng"
          }
        ],
        "tail": ""
      }
    }
  },
  "To understand": {
    "ru": {
      "present": {
        "forms": [
          {
            "stem": "понима",
            "ending": "ю",
            "pron": "Ponimayu"
          },
          {
            "stem": "понима",
            "ending": "ешь",
            "pron": "Ponimayesh"
          },
          {
            "stem": "понима",
            "ending": "ет",
            "pron": "Ponimayet"
          },
          {
            "stem": "понима",
            "ending": "ем",
            "pron": "Ponimayem"
          },
          {
            "stem": "понима",
            "ending": "ете",
            "pron": "Ponimayete"
          },
          {
            "stem": "понима",
            "ending": "ют",
            "pron": "Ponimayut"
          }
        ]
      },
      "past": {
        "forms": [
          {
            "stem": "понима",
            "ending": "л",
            "pron": "Ponimal"
          },
          {
            "stem": "понима",
            "ending": "ла",
            "pron": "Ponimala"
          },
          {
            "stem": "понима",
            "ending": "ло",
            "pron": "Ponimalo"
          },
          {
            "stem": "понима",
            "ending": "ли",
            "pron": "Ponimali"
          }
        ],
        "tail": ""
      },
      "future": {
        "forms": [
          {
            "stem": "буд",
            "ending": "у",
            "pron": "Budu ponimat"
          },
          {
            "stem": "буд",
            "ending": "ешь",
            "pron": "Budesh ponimat"
          },
          {
            "stem": "буд",
            "ending": "ет",
            "pron": "Budet ponimat"
          },
          {
            "stem": "буд",
            "ending": "ем",
            "pron": "Budem ponimat"
          },
          {
            "stem": "буд",
            "ending": "ете",
            "pron": "Budete ponimat"
          },
          {
            "stem": "буд",
            "ending": "ут",
            "pron": "Budut ponimat"
          }
        ],
        "tail": " понимать"
      }
    },
    "pt": {
      "present": {
        "forms": [
          {
            "stem": "entend",
            "ending": "o",
            "pron": "Entendo"
          },
          {
            "stem": "entend",
            "ending": "es",
            "pron": "Entendes"
          },
          {
            "stem": "entend",
            "ending": "e",
            "pron": "Entende"
          },
          {
            "stem": "entend",
            "ending": "emos",
            "pron": "Entendemos"
          },
          {
            "stem": "entend",
            "ending": "em",
            "pron": "Entendem"
          },
          {
            "stem": "entend",
            "ending": "em",
            "pron": "Entendem"
          }
        ]
      },
      "past": {
        "forms": [
          {
            "stem": "entend",
            "ending": "i",
            "pron": "Entendi"
          },
          {
            "stem": "entend",
            "ending": "este",
            "pron": "Entendeste"
          },
          {
            "stem": "entend",
            "ending": "eu",
            "pron": "Entendeu"
          },
          {
            "stem": "entend",
            "ending": "emos",
            "pron": "Entendemos"
          },
          {
            "stem": "entend",
            "ending": "eram",
            "pron": "Entenderam"
          },
          {
            "stem": "entend",
            "ending": "eram",
            "pron": "Entenderam"
          }
        ],
        "tail": "",
        "irregular": false
      },
      "future": {
        "forms": [
          {
            "stem": "entender",
            "ending": "ei",
            "pron": "Entenderei"
          },
          {
            "stem": "entender",
            "ending": "ás",
            "pron": "Entenderas"
          },
          {
            "stem": "entender",
            "ending": "á",
            "pron": "Entendera"
          },
          {
            "stem": "entender",
            "ending": "emos",
            "pron": "Entenderemos"
          },
          {
            "stem": "entender",
            "ending": "ão",
            "pron": "Entenderowng"
          },
          {
            "stem": "entender",
            "ending": "ão",
            "pron": "Entenderowng"
          }
        ],
        "tail": ""
      }
    }
  },
  "To remember": {
    "ru": {
      "present": {
        "forms": [
          {
            "stem": "помн",
            "ending": "ю",
            "pron": "Pomnyu"
          },
          {
            "stem": "помн",
            "ending": "ишь",
            "pron": "Pomnish"
          },
          {
            "stem": "помн",
            "ending": "ит",
            "pron": "Pomnit"
          },
          {
            "stem": "помн",
            "ending": "им",
            "pron": "Pomnim"
          },
          {
            "stem": "помн",
            "ending": "ите",
            "pron": "Pomnite"
          },
          {
            "stem": "помн",
            "ending": "ят",
            "pron": "Pomnyat"
          }
        ]
      },
      "past": {
        "forms": [
          {
            "stem": "помни",
            "ending": "л",
            "pron": "Pomnil"
          },
          {
            "stem": "помни",
            "ending": "ла",
            "pron": "Pomnila"
          },
          {
            "stem": "помни",
            "ending": "ло",
            "pron": "Pomnilo"
          },
          {
            "stem": "помни",
            "ending": "ли",
            "pron": "Pomnili"
          }
        ],
        "tail": ""
      },
      "future": {
        "forms": [
          {
            "stem": "буд",
            "ending": "у",
            "pron": "Budu pomnit"
          },
          {
            "stem": "буд",
            "ending": "ешь",
            "pron": "Budesh pomnit"
          },
          {
            "stem": "буд",
            "ending": "ет",
            "pron": "Budet pomnit"
          },
          {
            "stem": "буд",
            "ending": "ем",
            "pron": "Budem pomnit"
          },
          {
            "stem": "буд",
            "ending": "ете",
            "pron": "Budete pomnit"
          },
          {
            "stem": "буд",
            "ending": "ут",
            "pron": "Budut pomnit"
          }
        ],
        "tail": " помнить"
      }
    },
    "pt": {
      "present": {
        "forms": [
          {
            "stem": "lembr",
            "ending": "o",
            "pron": "Lembro"
          },
          {
            "stem": "lembr",
            "ending": "as",
            "pron": "Lembras"
          },
          {
            "stem": "lembr",
            "ending": "a",
            "pron": "Lembra"
          },
          {
            "stem": "lembr",
            "ending": "amos",
            "pron": "Lembramos"
          },
          {
            "stem": "lembr",
            "ending": "am",
            "pron": "Lembram"
          },
          {
            "stem": "lembr",
            "ending": "am",
            "pron": "Lembram"
          }
        ]
      },
      "past": {
        "forms": [
          {
            "stem": "lembr",
            "ending": "ei",
            "pron": "Lembrei"
          },
          {
            "stem": "lembr",
            "ending": "aste",
            "pron": "Lembraste"
          },
          {
            "stem": "lembr",
            "ending": "ou",
            "pron": "Lembrou"
          },
          {
            "stem": "lembr",
            "ending": "ámos",
            "pron": "Lembramos"
          },
          {
            "stem": "lembr",
            "ending": "aram",
            "pron": "Lembraram"
          },
          {
            "stem": "lembr",
            "ending": "aram",
            "pron": "Lembraram"
          }
        ],
        "tail": "",
        "irregular": false
      },
      "future": {
        "forms": [
          {
            "stem": "lembrar",
            "ending": "ei",
            "pron": "Lembrarei"
          },
          {
            "stem": "lembrar",
            "ending": "ás",
            "pron": "Lembraras"
          },
          {
            "stem": "lembrar",
            "ending": "á",
            "pron": "Lembrara"
          },
          {
            "stem": "lembrar",
            "ending": "emos",
            "pron": "Lembraremos"
          },
          {
            "stem": "lembrar",
            "ending": "ão",
            "pron": "Lembrarowng"
          },
          {
            "stem": "lembrar",
            "ending": "ão",
            "pron": "Lembrarowng"
          }
        ],
        "tail": ""
      }
    }
  },
  "To forget": {
    "ru": {
      "present": {
        "forms": [
          {
            "stem": "забыва",
            "ending": "ю",
            "pron": "Zabyvayu"
          },
          {
            "stem": "забыва",
            "ending": "ешь",
            "pron": "Zabyvayesh"
          },
          {
            "stem": "забыва",
            "ending": "ет",
            "pron": "Zabyvayet"
          },
          {
            "stem": "забыва",
            "ending": "ем",
            "pron": "Zabyvayem"
          },
          {
            "stem": "забыва",
            "ending": "ете",
            "pron": "Zabyvayete"
          },
          {
            "stem": "забыва",
            "ending": "ют",
            "pron": "Zabyvayut"
          }
        ]
      },
      "past": {
        "forms": [
          {
            "stem": "забыва",
            "ending": "л",
            "pron": "Zabyval"
          },
          {
            "stem": "забыва",
            "ending": "ла",
            "pron": "Zabyvala"
          },
          {
            "stem": "забыва",
            "ending": "ло",
            "pron": "Zabyvalo"
          },
          {
            "stem": "забыва",
            "ending": "ли",
            "pron": "Zabyvali"
          }
        ],
        "tail": ""
      },
      "future": {
        "forms": [
          {
            "stem": "буд",
            "ending": "у",
            "pron": "Budu zabyvat"
          },
          {
            "stem": "буд",
            "ending": "ешь",
            "pron": "Budesh zabyvat"
          },
          {
            "stem": "буд",
            "ending": "ет",
            "pron": "Budet zabyvat"
          },
          {
            "stem": "буд",
            "ending": "ем",
            "pron": "Budem zabyvat"
          },
          {
            "stem": "буд",
            "ending": "ете",
            "pron": "Budete zabyvat"
          },
          {
            "stem": "буд",
            "ending": "ут",
            "pron": "Budut zabyvat"
          }
        ],
        "tail": " забывать"
      }
    },
    "pt": {
      "present": {
        "forms": [
          {
            "stem": "esque",
            "ending": "ço",
            "pron": "Eskeso"
          },
          {
            "stem": "esquec",
            "ending": "es",
            "pron": "Eskeces"
          },
          {
            "stem": "esquec",
            "ending": "e",
            "pron": "Eskece"
          },
          {
            "stem": "esquec",
            "ending": "emos",
            "pron": "Eskecemos"
          },
          {
            "stem": "esquec",
            "ending": "em",
            "pron": "Eskecem"
          },
          {
            "stem": "esquec",
            "ending": "em",
            "pron": "Eskecem"
          }
        ]
      },
      "past": {
        "forms": [
          {
            "stem": "esquec",
            "ending": "i",
            "pron": "Eskeci"
          },
          {
            "stem": "esquec",
            "ending": "este",
            "pron": "Eskeceste"
          },
          {
            "stem": "esquec",
            "ending": "eu",
            "pron": "Eskeceu"
          },
          {
            "stem": "esquec",
            "ending": "emos",
            "pron": "Eskecemos"
          },
          {
            "stem": "esquec",
            "ending": "eram",
            "pron": "Eskeceram"
          },
          {
            "stem": "esquec",
            "ending": "eram",
            "pron": "Eskeceram"
          }
        ],
        "tail": "",
        "irregular": false
      },
      "future": {
        "forms": [
          {
            "stem": "esquecer",
            "ending": "ei",
            "pron": "Eskecerei"
          },
          {
            "stem": "esquecer",
            "ending": "ás",
            "pron": "Eskeceras"
          },
          {
            "stem": "esquecer",
            "ending": "á",
            "pron": "Eskecera"
          },
          {
            "stem": "esquecer",
            "ending": "emos",
            "pron": "Eskeceremos"
          },
          {
            "stem": "esquecer",
            "ending": "ão",
            "pron": "Eskecerowng"
          },
          {
            "stem": "esquecer",
            "ending": "ão",
            "pron": "Eskecerowng"
          }
        ],
        "tail": ""
      }
    }
  },
  "To wait": {
    "ru": {
      "present": {
        "forms": [
          {
            "stem": "жд",
            "ending": "у",
            "pron": "Zhdu"
          },
          {
            "stem": "жд",
            "ending": "ёшь",
            "pron": "Zhdyosh"
          },
          {
            "stem": "жд",
            "ending": "ёт",
            "pron": "Zhdyot"
          },
          {
            "stem": "жд",
            "ending": "ём",
            "pron": "Zhdyom"
          },
          {
            "stem": "жд",
            "ending": "ёте",
            "pron": "Zhdyote"
          },
          {
            "stem": "жд",
            "ending": "ут",
            "pron": "Zhdut"
          }
        ]
      },
      "past": {
        "forms": [
          {
            "stem": "жда",
            "ending": "л",
            "pron": "Zhdal"
          },
          {
            "stem": "жда",
            "ending": "ла",
            "pron": "Zhdala"
          },
          {
            "stem": "жда",
            "ending": "ло",
            "pron": "Zhdalo"
          },
          {
            "stem": "жда",
            "ending": "ли",
            "pron": "Zhdali"
          }
        ],
        "tail": ""
      },
      "future": {
        "forms": [
          {
            "stem": "буд",
            "ending": "у",
            "pron": "Budu zhdat"
          },
          {
            "stem": "буд",
            "ending": "ешь",
            "pron": "Budesh zhdat"
          },
          {
            "stem": "буд",
            "ending": "ет",
            "pron": "Budet zhdat"
          },
          {
            "stem": "буд",
            "ending": "ем",
            "pron": "Budem zhdat"
          },
          {
            "stem": "буд",
            "ending": "ете",
            "pron": "Budete zhdat"
          },
          {
            "stem": "буд",
            "ending": "ут",
            "pron": "Budut zhdat"
          }
        ],
        "tail": " ждать"
      }
    },
    "pt": {
      "present": {
        "forms": [
          {
            "stem": "esper",
            "ending": "o",
            "pron": "Espero"
          },
          {
            "stem": "esper",
            "ending": "as",
            "pron": "Esperas"
          },
          {
            "stem": "esper",
            "ending": "a",
            "pron": "Espera"
          },
          {
            "stem": "esper",
            "ending": "amos",
            "pron": "Esperamos"
          },
          {
            "stem": "esper",
            "ending": "am",
            "pron": "Esperam"
          },
          {
            "stem": "esper",
            "ending": "am",
            "pron": "Esperam"
          }
        ]
      },
      "past": {
        "forms": [
          {
            "stem": "esper",
            "ending": "ei",
            "pron": "Esperei"
          },
          {
            "stem": "esper",
            "ending": "aste",
            "pron": "Esperaste"
          },
          {
            "stem": "esper",
            "ending": "ou",
            "pron": "Esperou"
          },
          {
            "stem": "esper",
            "ending": "ámos",
            "pron": "Esperamos"
          },
          {
            "stem": "esper",
            "ending": "aram",
            "pron": "Esperaram"
          },
          {
            "stem": "esper",
            "ending": "aram",
            "pron": "Esperaram"
          }
        ],
        "tail": "",
        "irregular": false
      },
      "future": {
        "forms": [
          {
            "stem": "esperar",
            "ending": "ei",
            "pron": "Esperarei"
          },
          {
            "stem": "esperar",
            "ending": "ás",
            "pron": "Esperaras"
          },
          {
            "stem": "esperar",
            "ending": "á",
            "pron": "Esperara"
          },
          {
            "stem": "esperar",
            "ending": "emos",
            "pron": "Esperaremos"
          },
          {
            "stem": "esperar",
            "ending": "ão",
            "pron": "Esperarowng"
          },
          {
            "stem": "esperar",
            "ending": "ão",
            "pron": "Esperarowng"
          }
        ],
        "tail": ""
      }
    }
  },
  "To learn": {
    "ru": {
      "present": {
        "forms": [
          {
            "stem": "уч",
            "ending": "усь",
            "pron": "Uchus"
          },
          {
            "stem": "уч",
            "ending": "ишься",
            "pron": "Uchishsya"
          },
          {
            "stem": "уч",
            "ending": "ится",
            "pron": "Uchitsya"
          },
          {
            "stem": "уч",
            "ending": "имся",
            "pron": "Uchimsya"
          },
          {
            "stem": "уч",
            "ending": "итесь",
            "pron": "Uchites"
          },
          {
            "stem": "уч",
            "ending": "атся",
            "pron": "Uchatsya"
          }
        ]
      },
      "past": {
        "forms": [
          {
            "stem": "учи",
            "ending": "лся",
            "pron": "Uchilsya"
          },
          {
            "stem": "учи",
            "ending": "лась",
            "pron": "Uchilas"
          },
          {
            "stem": "учи",
            "ending": "лось",
            "pron": "Uchilos"
          },
          {
            "stem": "учи",
            "ending": "лись",
            "pron": "Uchilis"
          }
        ],
        "tail": ""
      },
      "future": {
        "forms": [
          {
            "stem": "буд",
            "ending": "у",
            "pron": "Budu uchitsya"
          },
          {
            "stem": "буд",
            "ending": "ешь",
            "pron": "Budesh uchitsya"
          },
          {
            "stem": "буд",
            "ending": "ет",
            "pron": "Budet uchitsya"
          },
          {
            "stem": "буд",
            "ending": "ем",
            "pron": "Budem uchitsya"
          },
          {
            "stem": "буд",
            "ending": "ете",
            "pron": "Budete uchitsya"
          },
          {
            "stem": "буд",
            "ending": "ут",
            "pron": "Budut uchitsya"
          }
        ],
        "tail": " учиться"
      }
    },
    "pt": {
      "present": {
        "forms": [
          {
            "stem": "aprend",
            "ending": "o",
            "pron": "Aprendo"
          },
          {
            "stem": "aprend",
            "ending": "es",
            "pron": "Aprendes"
          },
          {
            "stem": "aprend",
            "ending": "e",
            "pron": "Aprende"
          },
          {
            "stem": "aprend",
            "ending": "emos",
            "pron": "Aprendemos"
          },
          {
            "stem": "aprend",
            "ending": "em",
            "pron": "Aprendem"
          },
          {
            "stem": "aprend",
            "ending": "em",
            "pron": "Aprendem"
          }
        ]
      },
      "past": {
        "forms": [
          {
            "stem": "aprend",
            "ending": "i",
            "pron": "Aprendi"
          },
          {
            "stem": "aprend",
            "ending": "este",
            "pron": "Aprendeste"
          },
          {
            "stem": "aprend",
            "ending": "eu",
            "pron": "Aprendeu"
          },
          {
            "stem": "aprend",
            "ending": "emos",
            "pron": "Aprendemos"
          },
          {
            "stem": "aprend",
            "ending": "eram",
            "pron": "Aprenderam"
          },
          {
            "stem": "aprend",
            "ending": "eram",
            "pron": "Aprenderam"
          }
        ],
        "tail": "",
        "irregular": false
      },
      "future": {
        "forms": [
          {
            "stem": "aprender",
            "ending": "ei",
            "pron": "Aprenderei"
          },
          {
            "stem": "aprender",
            "ending": "ás",
            "pron": "Aprenderas"
          },
          {
            "stem": "aprender",
            "ending": "á",
            "pron": "Aprendera"
          },
          {
            "stem": "aprender",
            "ending": "emos",
            "pron": "Aprenderemos"
          },
          {
            "stem": "aprender",
            "ending": "ão",
            "pron": "Aprenderowng"
          },
          {
            "stem": "aprender",
            "ending": "ão",
            "pron": "Aprenderowng"
          }
        ],
        "tail": ""
      }
    }
  },
  "To teach": {
    "ru": {
      "present": {
        "forms": [
          {
            "stem": "уч",
            "ending": "у",
            "pron": "Uchu"
          },
          {
            "stem": "уч",
            "ending": "ишь",
            "pron": "Uchish"
          },
          {
            "stem": "уч",
            "ending": "ит",
            "pron": "Uchit"
          },
          {
            "stem": "уч",
            "ending": "им",
            "pron": "Uchim"
          },
          {
            "stem": "уч",
            "ending": "ите",
            "pron": "Uchite"
          },
          {
            "stem": "уч",
            "ending": "ат",
            "pron": "Uchat"
          }
        ]
      },
      "past": {
        "forms": [
          {
            "stem": "учи",
            "ending": "л",
            "pron": "Uchil"
          },
          {
            "stem": "учи",
            "ending": "ла",
            "pron": "Uchila"
          },
          {
            "stem": "учи",
            "ending": "ло",
            "pron": "Uchilo"
          },
          {
            "stem": "учи",
            "ending": "ли",
            "pron": "Uchili"
          }
        ],
        "tail": ""
      },
      "future": {
        "forms": [
          {
            "stem": "буд",
            "ending": "у",
            "pron": "Budu uchit"
          },
          {
            "stem": "буд",
            "ending": "ешь",
            "pron": "Budesh uchit"
          },
          {
            "stem": "буд",
            "ending": "ет",
            "pron": "Budet uchit"
          },
          {
            "stem": "буд",
            "ending": "ем",
            "pron": "Budem uchit"
          },
          {
            "stem": "буд",
            "ending": "ете",
            "pron": "Budete uchit"
          },
          {
            "stem": "буд",
            "ending": "ут",
            "pron": "Budut uchit"
          }
        ],
        "tail": " учить"
      }
    },
    "pt": {
      "present": {
        "forms": [
          {
            "stem": "ensin",
            "ending": "o",
            "pron": "Ensino"
          },
          {
            "stem": "ensin",
            "ending": "as",
            "pron": "Ensinas"
          },
          {
            "stem": "ensin",
            "ending": "a",
            "pron": "Ensina"
          },
          {
            "stem": "ensin",
            "ending": "amos",
            "pron": "Ensinamos"
          },
          {
            "stem": "ensin",
            "ending": "am",
            "pron": "Ensinam"
          },
          {
            "stem": "ensin",
            "ending": "am",
            "pron": "Ensinam"
          }
        ]
      },
      "past": {
        "forms": [
          {
            "stem": "ensin",
            "ending": "ei",
            "pron": "Ensinei"
          },
          {
            "stem": "ensin",
            "ending": "aste",
            "pron": "Ensinaste"
          },
          {
            "stem": "ensin",
            "ending": "ou",
            "pron": "Ensinou"
          },
          {
            "stem": "ensin",
            "ending": "ámos",
            "pron": "Ensinamos"
          },
          {
            "stem": "ensin",
            "ending": "aram",
            "pron": "Ensinaram"
          },
          {
            "stem": "ensin",
            "ending": "aram",
            "pron": "Ensinaram"
          }
        ],
        "tail": "",
        "irregular": false
      },
      "future": {
        "forms": [
          {
            "stem": "ensinar",
            "ending": "ei",
            "pron": "Ensinarei"
          },
          {
            "stem": "ensinar",
            "ending": "ás",
            "pron": "Ensinaras"
          },
          {
            "stem": "ensinar",
            "ending": "á",
            "pron": "Ensinara"
          },
          {
            "stem": "ensinar",
            "ending": "emos",
            "pron": "Ensinaremos"
          },
          {
            "stem": "ensinar",
            "ending": "ão",
            "pron": "Ensinarowng"
          },
          {
            "stem": "ensinar",
            "ending": "ão",
            "pron": "Ensinarowng"
          }
        ],
        "tail": ""
      }
    }
  },
  "To travel": {
    "ru": {
      "present": {
        "forms": [
          {
            "stem": "путешеству",
            "ending": "ю",
            "pron": "Puteshestvuyu"
          },
          {
            "stem": "путешеству",
            "ending": "ешь",
            "pron": "Puteshestvuyesh"
          },
          {
            "stem": "путешеству",
            "ending": "ет",
            "pron": "Puteshestvuyet"
          },
          {
            "stem": "путешеству",
            "ending": "ем",
            "pron": "Puteshestvuyem"
          },
          {
            "stem": "путешеству",
            "ending": "ете",
            "pron": "Puteshestvuyete"
          },
          {
            "stem": "путешеству",
            "ending": "ют",
            "pron": "Puteshestvuyut"
          }
        ]
      },
      "past": {
        "forms": [
          {
            "stem": "путешествова",
            "ending": "л",
            "pron": "Puteshestvoval"
          },
          {
            "stem": "путешествова",
            "ending": "ла",
            "pron": "Puteshestvovala"
          },
          {
            "stem": "путешествова",
            "ending": "ло",
            "pron": "Puteshestvovalo"
          },
          {
            "stem": "путешествова",
            "ending": "ли",
            "pron": "Puteshestvovali"
          }
        ],
        "tail": ""
      },
      "future": {
        "forms": [
          {
            "stem": "буд",
            "ending": "у",
            "pron": "Budu puteshestvovat"
          },
          {
            "stem": "буд",
            "ending": "ешь",
            "pron": "Budesh puteshestvovat"
          },
          {
            "stem": "буд",
            "ending": "ет",
            "pron": "Budet puteshestvovat"
          },
          {
            "stem": "буд",
            "ending": "ем",
            "pron": "Budem puteshestvovat"
          },
          {
            "stem": "буд",
            "ending": "ете",
            "pron": "Budete puteshestvovat"
          },
          {
            "stem": "буд",
            "ending": "ут",
            "pron": "Budut puteshestvovat"
          }
        ],
        "tail": " путешествовать"
      }
    },
    "pt": {
      "present": {
        "forms": [
          {
            "stem": "viaj",
            "ending": "o",
            "pron": "Viazho"
          },
          {
            "stem": "viaj",
            "ending": "as",
            "pron": "Viazhas"
          },
          {
            "stem": "viaj",
            "ending": "a",
            "pron": "Viazha"
          },
          {
            "stem": "viaj",
            "ending": "amos",
            "pron": "Viazhamos"
          },
          {
            "stem": "viaj",
            "ending": "am",
            "pron": "Viazham"
          },
          {
            "stem": "viaj",
            "ending": "am",
            "pron": "Viazham"
          }
        ]
      },
      "past": {
        "forms": [
          {
            "stem": "viaj",
            "ending": "ei",
            "pron": "Viazhei"
          },
          {
            "stem": "viaj",
            "ending": "aste",
            "pron": "Viazhaste"
          },
          {
            "stem": "viaj",
            "ending": "ou",
            "pron": "Viazhou"
          },
          {
            "stem": "viaj",
            "ending": "ámos",
            "pron": "Viazhamos"
          },
          {
            "stem": "viaj",
            "ending": "aram",
            "pron": "Viazharam"
          },
          {
            "stem": "viaj",
            "ending": "aram",
            "pron": "Viazharam"
          }
        ],
        "tail": "",
        "irregular": false
      },
      "future": {
        "forms": [
          {
            "stem": "viajar",
            "ending": "ei",
            "pron": "Viazharei"
          },
          {
            "stem": "viajar",
            "ending": "ás",
            "pron": "Viazharas"
          },
          {
            "stem": "viajar",
            "ending": "á",
            "pron": "Viazhara"
          },
          {
            "stem": "viajar",
            "ending": "emos",
            "pron": "Viazharemos"
          },
          {
            "stem": "viajar",
            "ending": "ão",
            "pron": "Viazharowng"
          },
          {
            "stem": "viajar",
            "ending": "ão",
            "pron": "Viazharowng"
          }
        ],
        "tail": ""
      }
    }
  },
  "To arrive": {
    "ru": {
      "present": {
        "forms": [
          {
            "stem": "прибыва",
            "ending": "ю",
            "pron": "Pribyvayu"
          },
          {
            "stem": "прибыва",
            "ending": "ешь",
            "pron": "Pribyvayesh"
          },
          {
            "stem": "прибыва",
            "ending": "ет",
            "pron": "Pribyvayet"
          },
          {
            "stem": "прибыва",
            "ending": "ем",
            "pron": "Pribyvayem"
          },
          {
            "stem": "прибыва",
            "ending": "ете",
            "pron": "Pribyvayete"
          },
          {
            "stem": "прибыва",
            "ending": "ют",
            "pron": "Pribyvayut"
          }
        ]
      },
      "past": {
        "forms": [
          {
            "stem": "прибыва",
            "ending": "л",
            "pron": "Pribyval"
          },
          {
            "stem": "прибыва",
            "ending": "ла",
            "pron": "Pribyvala"
          },
          {
            "stem": "прибыва",
            "ending": "ло",
            "pron": "Pribyvalo"
          },
          {
            "stem": "прибыва",
            "ending": "ли",
            "pron": "Pribyvali"
          }
        ],
        "tail": ""
      },
      "future": {
        "forms": [
          {
            "stem": "буд",
            "ending": "у",
            "pron": "Budu pribyvat"
          },
          {
            "stem": "буд",
            "ending": "ешь",
            "pron": "Budesh pribyvat"
          },
          {
            "stem": "буд",
            "ending": "ет",
            "pron": "Budet pribyvat"
          },
          {
            "stem": "буд",
            "ending": "ем",
            "pron": "Budem pribyvat"
          },
          {
            "stem": "буд",
            "ending": "ете",
            "pron": "Budete pribyvat"
          },
          {
            "stem": "буд",
            "ending": "ут",
            "pron": "Budut pribyvat"
          }
        ],
        "tail": " прибывать"
      }
    },
    "pt": {
      "present": {
        "forms": [
          {
            "stem": "cheg",
            "ending": "o",
            "pron": "Shego"
          },
          {
            "stem": "cheg",
            "ending": "as",
            "pron": "Shegas"
          },
          {
            "stem": "cheg",
            "ending": "a",
            "pron": "Shega"
          },
          {
            "stem": "cheg",
            "ending": "amos",
            "pron": "Shegamos"
          },
          {
            "stem": "cheg",
            "ending": "am",
            "pron": "Shegam"
          },
          {
            "stem": "cheg",
            "ending": "am",
            "pron": "Shegam"
          }
        ]
      },
      "past": {
        "forms": [
          {
            "stem": "chegu",
            "ending": "ei",
            "pron": "Shezhei"
          },
          {
            "stem": "cheg",
            "ending": "aste",
            "pron": "Shegaste"
          },
          {
            "stem": "cheg",
            "ending": "ou",
            "pron": "Shegou"
          },
          {
            "stem": "cheg",
            "ending": "ámos",
            "pron": "Shegamos"
          },
          {
            "stem": "cheg",
            "ending": "aram",
            "pron": "Shegaram"
          },
          {
            "stem": "cheg",
            "ending": "aram",
            "pron": "Shegaram"
          }
        ],
        "tail": "",
        "irregular": false
      },
      "future": {
        "forms": [
          {
            "stem": "chegar",
            "ending": "ei",
            "pron": "Shegarei"
          },
          {
            "stem": "chegar",
            "ending": "ás",
            "pron": "Shegaras"
          },
          {
            "stem": "chegar",
            "ending": "á",
            "pron": "Shegara"
          },
          {
            "stem": "chegar",
            "ending": "emos",
            "pron": "Shegaremos"
          },
          {
            "stem": "chegar",
            "ending": "ão",
            "pron": "Shegarowng"
          },
          {
            "stem": "chegar",
            "ending": "ão",
            "pron": "Shegarowng"
          }
        ],
        "tail": ""
      }
    }
  },
  "To leave": {
    "ru": {
      "present": {
        "forms": [
          {
            "stem": "ухож",
            "ending": "у",
            "pron": "Ukhozhu"
          },
          {
            "stem": "уход",
            "ending": "ишь",
            "pron": "Ukhodish"
          },
          {
            "stem": "уход",
            "ending": "ит",
            "pron": "Ukhodit"
          },
          {
            "stem": "уход",
            "ending": "им",
            "pron": "Ukhodim"
          },
          {
            "stem": "уход",
            "ending": "ите",
            "pron": "Ukhodite"
          },
          {
            "stem": "уход",
            "ending": "ят",
            "pron": "Ukhodyat"
          }
        ]
      },
      "past": {
        "forms": [
          {
            "stem": "уходи",
            "ending": "л",
            "pron": "Ukhodil"
          },
          {
            "stem": "уходи",
            "ending": "ла",
            "pron": "Ukhodila"
          },
          {
            "stem": "уходи",
            "ending": "ло",
            "pron": "Ukhodilo"
          },
          {
            "stem": "уходи",
            "ending": "ли",
            "pron": "Ukhodili"
          }
        ],
        "tail": ""
      },
      "future": {
        "forms": [
          {
            "stem": "буд",
            "ending": "у",
            "pron": "Budu ukhodit"
          },
          {
            "stem": "буд",
            "ending": "ешь",
            "pron": "Budesh ukhodit"
          },
          {
            "stem": "буд",
            "ending": "ет",
            "pron": "Budet ukhodit"
          },
          {
            "stem": "буд",
            "ending": "ем",
            "pron": "Budem ukhodit"
          },
          {
            "stem": "буд",
            "ending": "ете",
            "pron": "Budete ukhodit"
          },
          {
            "stem": "буд",
            "ending": "ут",
            "pron": "Budut ukhodit"
          }
        ],
        "tail": " уходить"
      }
    },
    "pt": {
      "present": {
        "forms": [
          {
            "stem": "part",
            "ending": "o",
            "pron": "Parto"
          },
          {
            "stem": "part",
            "ending": "es",
            "pron": "Partes"
          },
          {
            "stem": "part",
            "ending": "e",
            "pron": "Parte"
          },
          {
            "stem": "part",
            "ending": "imos",
            "pron": "Partimos"
          },
          {
            "stem": "part",
            "ending": "em",
            "pron": "Partem"
          },
          {
            "stem": "part",
            "ending": "em",
            "pron": "Partem"
          }
        ]
      },
      "past": {
        "forms": [
          {
            "stem": "part",
            "ending": "i",
            "pron": "Parti"
          },
          {
            "stem": "part",
            "ending": "iste",
            "pron": "Partiste"
          },
          {
            "stem": "part",
            "ending": "iu",
            "pron": "Partiu"
          },
          {
            "stem": "part",
            "ending": "imos",
            "pron": "Partimos"
          },
          {
            "stem": "part",
            "ending": "iram",
            "pron": "Partiram"
          },
          {
            "stem": "part",
            "ending": "iram",
            "pron": "Partiram"
          }
        ],
        "tail": "",
        "irregular": false
      },
      "future": {
        "forms": [
          {
            "stem": "partir",
            "ending": "ei",
            "pron": "Partirei"
          },
          {
            "stem": "partir",
            "ending": "ás",
            "pron": "Partiras"
          },
          {
            "stem": "partir",
            "ending": "á",
            "pron": "Partira"
          },
          {
            "stem": "partir",
            "ending": "emos",
            "pron": "Partiremos"
          },
          {
            "stem": "partir",
            "ending": "ão",
            "pron": "Partirowng"
          },
          {
            "stem": "partir",
            "ending": "ão",
            "pron": "Partirowng"
          }
        ],
        "tail": ""
      }
    }
  },
  "To find": {
    "ru": {
      "present": {
        "forms": [
          {
            "stem": "нахож",
            "ending": "у",
            "pron": "Nakhozhu"
          },
          {
            "stem": "наход",
            "ending": "ишь",
            "pron": "Nakhodish"
          },
          {
            "stem": "наход",
            "ending": "ит",
            "pron": "Nakhodit"
          },
          {
            "stem": "наход",
            "ending": "им",
            "pron": "Nakhodim"
          },
          {
            "stem": "наход",
            "ending": "ите",
            "pron": "Nakhodite"
          },
          {
            "stem": "наход",
            "ending": "ят",
            "pron": "Nakhodyat"
          }
        ]
      },
      "past": {
        "forms": [
          {
            "stem": "находи",
            "ending": "л",
            "pron": "Nakhodil"
          },
          {
            "stem": "находи",
            "ending": "ла",
            "pron": "Nakhodila"
          },
          {
            "stem": "находи",
            "ending": "ло",
            "pron": "Nakhodilo"
          },
          {
            "stem": "находи",
            "ending": "ли",
            "pron": "Nakhodili"
          }
        ],
        "tail": ""
      },
      "future": {
        "forms": [
          {
            "stem": "буд",
            "ending": "у",
            "pron": "Budu nakhodit"
          },
          {
            "stem": "буд",
            "ending": "ешь",
            "pron": "Budesh nakhodit"
          },
          {
            "stem": "буд",
            "ending": "ет",
            "pron": "Budet nakhodit"
          },
          {
            "stem": "буд",
            "ending": "ем",
            "pron": "Budem nakhodit"
          },
          {
            "stem": "буд",
            "ending": "ете",
            "pron": "Budete nakhodit"
          },
          {
            "stem": "буд",
            "ending": "ут",
            "pron": "Budut nakhodit"
          }
        ],
        "tail": " находить"
      }
    },
    "pt": {
      "present": {
        "forms": [
          {
            "stem": "encontr",
            "ending": "o",
            "pron": "Encontro"
          },
          {
            "stem": "encontr",
            "ending": "as",
            "pron": "Encontras"
          },
          {
            "stem": "encontr",
            "ending": "a",
            "pron": "Encontra"
          },
          {
            "stem": "encontr",
            "ending": "amos",
            "pron": "Encontramos"
          },
          {
            "stem": "encontr",
            "ending": "am",
            "pron": "Encontram"
          },
          {
            "stem": "encontr",
            "ending": "am",
            "pron": "Encontram"
          }
        ]
      },
      "past": {
        "forms": [
          {
            "stem": "encontr",
            "ending": "ei",
            "pron": "Encontrei"
          },
          {
            "stem": "encontr",
            "ending": "aste",
            "pron": "Encontraste"
          },
          {
            "stem": "encontr",
            "ending": "ou",
            "pron": "Encontrou"
          },
          {
            "stem": "encontr",
            "ending": "ámos",
            "pron": "Encontramos"
          },
          {
            "stem": "encontr",
            "ending": "aram",
            "pron": "Encontraram"
          },
          {
            "stem": "encontr",
            "ending": "aram",
            "pron": "Encontraram"
          }
        ],
        "tail": "",
        "irregular": false
      },
      "future": {
        "forms": [
          {
            "stem": "encontrar",
            "ending": "ei",
            "pron": "Encontrarei"
          },
          {
            "stem": "encontrar",
            "ending": "ás",
            "pron": "Encontraras"
          },
          {
            "stem": "encontrar",
            "ending": "á",
            "pron": "Encontrara"
          },
          {
            "stem": "encontrar",
            "ending": "emos",
            "pron": "Encontraremos"
          },
          {
            "stem": "encontrar",
            "ending": "ão",
            "pron": "Encontrarowng"
          },
          {
            "stem": "encontrar",
            "ending": "ão",
            "pron": "Encontrarowng"
          }
        ],
        "tail": ""
      }
    }
  },
  "To lose": {
    "ru": {
      "present": {
        "forms": [
          {
            "stem": "теря",
            "ending": "ю",
            "pron": "Teryayu"
          },
          {
            "stem": "теря",
            "ending": "ешь",
            "pron": "Teryayesh"
          },
          {
            "stem": "теря",
            "ending": "ет",
            "pron": "Teryayet"
          },
          {
            "stem": "теря",
            "ending": "ем",
            "pron": "Teryayem"
          },
          {
            "stem": "теря",
            "ending": "ете",
            "pron": "Teryayete"
          },
          {
            "stem": "теря",
            "ending": "ют",
            "pron": "Teryayut"
          }
        ]
      },
      "past": {
        "forms": [
          {
            "stem": "теря",
            "ending": "л",
            "pron": "Teryal"
          },
          {
            "stem": "теря",
            "ending": "ла",
            "pron": "Teryala"
          },
          {
            "stem": "теря",
            "ending": "ло",
            "pron": "Teryalo"
          },
          {
            "stem": "теря",
            "ending": "ли",
            "pron": "Teryali"
          }
        ],
        "tail": ""
      },
      "future": {
        "forms": [
          {
            "stem": "буд",
            "ending": "у",
            "pron": "Budu teryat"
          },
          {
            "stem": "буд",
            "ending": "ешь",
            "pron": "Budesh teryat"
          },
          {
            "stem": "буд",
            "ending": "ет",
            "pron": "Budet teryat"
          },
          {
            "stem": "буд",
            "ending": "ем",
            "pron": "Budem teryat"
          },
          {
            "stem": "буд",
            "ending": "ете",
            "pron": "Budete teryat"
          },
          {
            "stem": "буд",
            "ending": "ут",
            "pron": "Budut teryat"
          }
        ],
        "tail": " терять"
      }
    },
    "pt": {
      "present": {
        "forms": [
          {
            "stem": "per",
            "ending": "co",
            "pron": "Perco"
          },
          {
            "stem": "perd",
            "ending": "es",
            "pron": "Perdes"
          },
          {
            "stem": "perd",
            "ending": "e",
            "pron": "Perde"
          },
          {
            "stem": "perd",
            "ending": "emos",
            "pron": "Perdemos"
          },
          {
            "stem": "perd",
            "ending": "em",
            "pron": "Perdem"
          },
          {
            "stem": "perd",
            "ending": "em",
            "pron": "Perdem"
          }
        ]
      },
      "past": {
        "forms": [
          {
            "stem": "perd",
            "ending": "i",
            "pron": "Perdi"
          },
          {
            "stem": "perd",
            "ending": "este",
            "pron": "Perdeste"
          },
          {
            "stem": "perd",
            "ending": "eu",
            "pron": "Perdeu"
          },
          {
            "stem": "perd",
            "ending": "emos",
            "pron": "Perdemos"
          },
          {
            "stem": "perd",
            "ending": "eram",
            "pron": "Perderam"
          },
          {
            "stem": "perd",
            "ending": "eram",
            "pron": "Perderam"
          }
        ],
        "tail": "",
        "irregular": false
      },
      "future": {
        "forms": [
          {
            "stem": "perder",
            "ending": "ei",
            "pron": "Perderei"
          },
          {
            "stem": "perder",
            "ending": "ás",
            "pron": "Perderas"
          },
          {
            "stem": "perder",
            "ending": "á",
            "pron": "Perdera"
          },
          {
            "stem": "perder",
            "ending": "emos",
            "pron": "Perderemos"
          },
          {
            "stem": "perder",
            "ending": "ão",
            "pron": "Perderowng"
          },
          {
            "stem": "perder",
            "ending": "ão",
            "pron": "Perderowng"
          }
        ],
        "tail": ""
      }
    }
  },
  "To choose": {
    "ru": {
      "present": {
        "forms": [
          {
            "stem": "выбира",
            "ending": "ю",
            "pron": "Vybirayu"
          },
          {
            "stem": "выбира",
            "ending": "ешь",
            "pron": "Vybirayesh"
          },
          {
            "stem": "выбира",
            "ending": "ет",
            "pron": "Vybirayet"
          },
          {
            "stem": "выбира",
            "ending": "ем",
            "pron": "Vybirayem"
          },
          {
            "stem": "выбира",
            "ending": "ете",
            "pron": "Vybirayete"
          },
          {
            "stem": "выбира",
            "ending": "ют",
            "pron": "Vybirayut"
          }
        ]
      },
      "past": {
        "forms": [
          {
            "stem": "выбира",
            "ending": "л",
            "pron": "Vybiral"
          },
          {
            "stem": "выбира",
            "ending": "ла",
            "pron": "Vybirala"
          },
          {
            "stem": "выбира",
            "ending": "ло",
            "pron": "Vybiralo"
          },
          {
            "stem": "выбира",
            "ending": "ли",
            "pron": "Vybirali"
          }
        ],
        "tail": ""
      },
      "future": {
        "forms": [
          {
            "stem": "буд",
            "ending": "у",
            "pron": "Budu vybirat"
          },
          {
            "stem": "буд",
            "ending": "ешь",
            "pron": "Budesh vybirat"
          },
          {
            "stem": "буд",
            "ending": "ет",
            "pron": "Budet vybirat"
          },
          {
            "stem": "буд",
            "ending": "ем",
            "pron": "Budem vybirat"
          },
          {
            "stem": "буд",
            "ending": "ете",
            "pron": "Budete vybirat"
          },
          {
            "stem": "буд",
            "ending": "ут",
            "pron": "Budut vybirat"
          }
        ],
        "tail": " выбирать"
      }
    },
    "pt": {
      "present": {
        "forms": [
          {
            "stem": "escolh",
            "ending": "o",
            "pron": "Escolyo"
          },
          {
            "stem": "escolh",
            "ending": "es",
            "pron": "Escolyes"
          },
          {
            "stem": "escolh",
            "ending": "e",
            "pron": "Escolye"
          },
          {
            "stem": "escolh",
            "ending": "emos",
            "pron": "Escolyemos"
          },
          {
            "stem": "escolh",
            "ending": "em",
            "pron": "Escolyem"
          },
          {
            "stem": "escolh",
            "ending": "em",
            "pron": "Escolyem"
          }
        ]
      },
      "past": {
        "forms": [
          {
            "stem": "escolh",
            "ending": "i",
            "pron": "Escolyi"
          },
          {
            "stem": "escolh",
            "ending": "este",
            "pron": "Escolyeste"
          },
          {
            "stem": "escolh",
            "ending": "eu",
            "pron": "Escolyeu"
          },
          {
            "stem": "escolh",
            "ending": "emos",
            "pron": "Escolyemos"
          },
          {
            "stem": "escolh",
            "ending": "eram",
            "pron": "Escolyeram"
          },
          {
            "stem": "escolh",
            "ending": "eram",
            "pron": "Escolyeram"
          }
        ],
        "tail": "",
        "irregular": false
      },
      "future": {
        "forms": [
          {
            "stem": "escolher",
            "ending": "ei",
            "pron": "Escolyerei"
          },
          {
            "stem": "escolher",
            "ending": "ás",
            "pron": "Escolyeras"
          },
          {
            "stem": "escolher",
            "ending": "á",
            "pron": "Escolyera"
          },
          {
            "stem": "escolher",
            "ending": "emos",
            "pron": "Escolyeremos"
          },
          {
            "stem": "escolher",
            "ending": "ão",
            "pron": "Escolyerowng"
          },
          {
            "stem": "escolher",
            "ending": "ão",
            "pron": "Escolyerowng"
          }
        ],
        "tail": ""
      }
    }
  },
  "To achieve": {
    "ru": {
      "present": {
        "forms": [
          {
            "stem": "достига",
            "ending": "ю",
            "pron": "Dostigayu"
          },
          {
            "stem": "достига",
            "ending": "ешь",
            "pron": "Dostigayesh"
          },
          {
            "stem": "достига",
            "ending": "ет",
            "pron": "Dostigayet"
          },
          {
            "stem": "достига",
            "ending": "ем",
            "pron": "Dostigayem"
          },
          {
            "stem": "достига",
            "ending": "ете",
            "pron": "Dostigayete"
          },
          {
            "stem": "достига",
            "ending": "ют",
            "pron": "Dostigayut"
          }
        ]
      },
      "past": {
        "forms": [
          {
            "stem": "достига",
            "ending": "л",
            "pron": "Dostigal"
          },
          {
            "stem": "достига",
            "ending": "ла",
            "pron": "Dostigala"
          },
          {
            "stem": "достига",
            "ending": "ло",
            "pron": "Dostigalo"
          },
          {
            "stem": "достига",
            "ending": "ли",
            "pron": "Dostigali"
          }
        ],
        "tail": ""
      },
      "future": {
        "forms": [
          {
            "stem": "буд",
            "ending": "у",
            "pron": "Budu dostigat"
          },
          {
            "stem": "буд",
            "ending": "ешь",
            "pron": "Budesh dostigat"
          },
          {
            "stem": "буд",
            "ending": "ет",
            "pron": "Budet dostigat"
          },
          {
            "stem": "буд",
            "ending": "ем",
            "pron": "Budem dostigat"
          },
          {
            "stem": "буд",
            "ending": "ете",
            "pron": "Budete dostigat"
          },
          {
            "stem": "буд",
            "ending": "ут",
            "pron": "Budut dostigat"
          }
        ],
        "tail": " достигать"
      }
    },
    "pt": {
      "present": {
        "forms": [
          {
            "stem": "alcanç",
            "ending": "o",
            "pron": "Alcanso"
          },
          {
            "stem": "alcanç",
            "ending": "as",
            "pron": "Alcansas"
          },
          {
            "stem": "alcanç",
            "ending": "a",
            "pron": "Alcansa"
          },
          {
            "stem": "alcanç",
            "ending": "amos",
            "pron": "Alcansamos"
          },
          {
            "stem": "alcanç",
            "ending": "am",
            "pron": "Alcansam"
          },
          {
            "stem": "alcanç",
            "ending": "am",
            "pron": "Alcansam"
          }
        ]
      },
      "past": {
        "forms": [
          {
            "stem": "alcanc",
            "ending": "ei",
            "pron": "Alcancei"
          },
          {
            "stem": "alcanç",
            "ending": "aste",
            "pron": "Alcansaste"
          },
          {
            "stem": "alcanç",
            "ending": "ou",
            "pron": "Alcansou"
          },
          {
            "stem": "alcanç",
            "ending": "ámos",
            "pron": "Alcansamos"
          },
          {
            "stem": "alcanç",
            "ending": "aram",
            "pron": "Alcansaram"
          },
          {
            "stem": "alcanç",
            "ending": "aram",
            "pron": "Alcansaram"
          }
        ],
        "tail": "",
        "irregular": false
      },
      "future": {
        "forms": [
          {
            "stem": "alcançar",
            "ending": "ei",
            "pron": "Alcansarei"
          },
          {
            "stem": "alcançar",
            "ending": "ás",
            "pron": "Alcansaras"
          },
          {
            "stem": "alcançar",
            "ending": "á",
            "pron": "Alcansara"
          },
          {
            "stem": "alcançar",
            "ending": "emos",
            "pron": "Alcansaremos"
          },
          {
            "stem": "alcançar",
            "ending": "ão",
            "pron": "Alcansarowng"
          },
          {
            "stem": "alcançar",
            "ending": "ão",
            "pron": "Alcansarowng"
          }
        ],
        "tail": ""
      }
    }
  },
  "To improve": {
    "ru": {
      "present": {
        "forms": [
          {
            "stem": "улучша",
            "ending": "ю",
            "pron": "Uluchshayu"
          },
          {
            "stem": "улучша",
            "ending": "ешь",
            "pron": "Uluchshayesh"
          },
          {
            "stem": "улучша",
            "ending": "ет",
            "pron": "Uluchshayet"
          },
          {
            "stem": "улучша",
            "ending": "ем",
            "pron": "Uluchshayem"
          },
          {
            "stem": "улучша",
            "ending": "ете",
            "pron": "Uluchshayete"
          },
          {
            "stem": "улучша",
            "ending": "ют",
            "pron": "Uluchshayut"
          }
        ]
      },
      "past": {
        "forms": [
          {
            "stem": "улучша",
            "ending": "л",
            "pron": "Uluchshal"
          },
          {
            "stem": "улучша",
            "ending": "ла",
            "pron": "Uluchshala"
          },
          {
            "stem": "улучша",
            "ending": "ло",
            "pron": "Uluchshalo"
          },
          {
            "stem": "улучша",
            "ending": "ли",
            "pron": "Uluchshali"
          }
        ],
        "tail": ""
      },
      "future": {
        "forms": [
          {
            "stem": "буд",
            "ending": "у",
            "pron": "Budu uluchshat"
          },
          {
            "stem": "буд",
            "ending": "ешь",
            "pron": "Budesh uluchshat"
          },
          {
            "stem": "буд",
            "ending": "ет",
            "pron": "Budet uluchshat"
          },
          {
            "stem": "буд",
            "ending": "ем",
            "pron": "Budem uluchshat"
          },
          {
            "stem": "буд",
            "ending": "ете",
            "pron": "Budete uluchshat"
          },
          {
            "stem": "буд",
            "ending": "ут",
            "pron": "Budut uluchshat"
          }
        ],
        "tail": " улучшать"
      }
    },
    "pt": {
      "present": {
        "forms": [
          {
            "stem": "melhor",
            "ending": "o",
            "pron": "Melyoro"
          },
          {
            "stem": "melhor",
            "ending": "as",
            "pron": "Melyoras"
          },
          {
            "stem": "melhor",
            "ending": "a",
            "pron": "Melyora"
          },
          {
            "stem": "melhor",
            "ending": "amos",
            "pron": "Melyoramos"
          },
          {
            "stem": "melhor",
            "ending": "am",
            "pron": "Melyoram"
          },
          {
            "stem": "melhor",
            "ending": "am",
            "pron": "Melyoram"
          }
        ]
      },
      "past": {
        "forms": [
          {
            "stem": "melhor",
            "ending": "ei",
            "pron": "Melyorei"
          },
          {
            "stem": "melhor",
            "ending": "aste",
            "pron": "Melyoraste"
          },
          {
            "stem": "melhor",
            "ending": "ou",
            "pron": "Melyorou"
          },
          {
            "stem": "melhor",
            "ending": "ámos",
            "pron": "Melyoramos"
          },
          {
            "stem": "melhor",
            "ending": "aram",
            "pron": "Melyoraram"
          },
          {
            "stem": "melhor",
            "ending": "aram",
            "pron": "Melyoraram"
          }
        ],
        "tail": "",
        "irregular": false
      },
      "future": {
        "forms": [
          {
            "stem": "melhorar",
            "ending": "ei",
            "pron": "Melyorarei"
          },
          {
            "stem": "melhorar",
            "ending": "ás",
            "pron": "Melyoraras"
          },
          {
            "stem": "melhorar",
            "ending": "á",
            "pron": "Melyorara"
          },
          {
            "stem": "melhorar",
            "ending": "emos",
            "pron": "Melyoraremos"
          },
          {
            "stem": "melhorar",
            "ending": "ão",
            "pron": "Melyorarowng"
          },
          {
            "stem": "melhorar",
            "ending": "ão",
            "pron": "Melyorarowng"
          }
        ],
        "tail": ""
      }
    }
  },
  "To complain": {
    "ru": {
      "present": {
        "forms": [
          {
            "stem": "жалу",
            "ending": "юсь",
            "pron": "Zhaluyus"
          },
          {
            "stem": "жалу",
            "ending": "ешься",
            "pron": "Zhaluyeshsya"
          },
          {
            "stem": "жалу",
            "ending": "ется",
            "pron": "Zhaluyetsya"
          },
          {
            "stem": "жалу",
            "ending": "емся",
            "pron": "Zhaluyemsya"
          },
          {
            "stem": "жалу",
            "ending": "етесь",
            "pron": "Zhaluyetes"
          },
          {
            "stem": "жалу",
            "ending": "ются",
            "pron": "Zhaluyutsya"
          }
        ]
      },
      "past": {
        "forms": [
          {
            "stem": "жалова",
            "ending": "лся",
            "pron": "Zhalovalsya"
          },
          {
            "stem": "жалова",
            "ending": "лась",
            "pron": "Zhalovalas"
          },
          {
            "stem": "жалова",
            "ending": "лось",
            "pron": "Zhalovalos"
          },
          {
            "stem": "жалова",
            "ending": "лись",
            "pron": "Zhalovalis"
          }
        ],
        "tail": ""
      },
      "future": {
        "forms": [
          {
            "stem": "буд",
            "ending": "у",
            "pron": "Budu zhalovatsya"
          },
          {
            "stem": "буд",
            "ending": "ешь",
            "pron": "Budesh zhalovatsya"
          },
          {
            "stem": "буд",
            "ending": "ет",
            "pron": "Budet zhalovatsya"
          },
          {
            "stem": "буд",
            "ending": "ем",
            "pron": "Budem zhalovatsya"
          },
          {
            "stem": "буд",
            "ending": "ете",
            "pron": "Budete zhalovatsya"
          },
          {
            "stem": "буд",
            "ending": "ут",
            "pron": "Budut zhalovatsya"
          }
        ],
        "tail": " жаловаться"
      }
    },
    "pt": {
      "present": {
        "forms": [
          {
            "stem": "reclam",
            "ending": "o",
            "pron": "Heclamo"
          },
          {
            "stem": "reclam",
            "ending": "as",
            "pron": "Heclamas"
          },
          {
            "stem": "reclam",
            "ending": "a",
            "pron": "Heclama"
          },
          {
            "stem": "reclam",
            "ending": "amos",
            "pron": "Heclamamos"
          },
          {
            "stem": "reclam",
            "ending": "am",
            "pron": "Heclamam"
          },
          {
            "stem": "reclam",
            "ending": "am",
            "pron": "Heclamam"
          }
        ]
      },
      "past": {
        "forms": [
          {
            "stem": "reclam",
            "ending": "ei",
            "pron": "Heclamei"
          },
          {
            "stem": "reclam",
            "ending": "aste",
            "pron": "Heclamaste"
          },
          {
            "stem": "reclam",
            "ending": "ou",
            "pron": "Heclamou"
          },
          {
            "stem": "reclam",
            "ending": "ámos",
            "pron": "Heclamamos"
          },
          {
            "stem": "reclam",
            "ending": "aram",
            "pron": "Heclamaram"
          },
          {
            "stem": "reclam",
            "ending": "aram",
            "pron": "Heclamaram"
          }
        ],
        "tail": "",
        "irregular": false
      },
      "future": {
        "forms": [
          {
            "stem": "reclamar",
            "ending": "ei",
            "pron": "Heclamarei"
          },
          {
            "stem": "reclamar",
            "ending": "ás",
            "pron": "Heclamaras"
          },
          {
            "stem": "reclamar",
            "ending": "á",
            "pron": "Heclamara"
          },
          {
            "stem": "reclamar",
            "ending": "emos",
            "pron": "Heclamaremos"
          },
          {
            "stem": "reclamar",
            "ending": "ão",
            "pron": "Heclamarowng"
          },
          {
            "stem": "reclamar",
            "ending": "ão",
            "pron": "Heclamarowng"
          }
        ],
        "tail": ""
      }
    }
  },
  "To pretend": {
    "ru": {
      "present": {
        "forms": [
          {
            "stem": "притворя",
            "ending": "юсь",
            "pron": "Pritvoryayus"
          },
          {
            "stem": "притворя",
            "ending": "ешься",
            "pron": "Pritvoryayeshsya"
          },
          {
            "stem": "притворя",
            "ending": "ется",
            "pron": "Pritvoryayetsya"
          },
          {
            "stem": "притворя",
            "ending": "емся",
            "pron": "Pritvoryayemsya"
          },
          {
            "stem": "притворя",
            "ending": "етесь",
            "pron": "Pritvoryayetes"
          },
          {
            "stem": "притворя",
            "ending": "ются",
            "pron": "Pritvoryayutsya"
          }
        ]
      },
      "past": {
        "forms": [
          {
            "stem": "притворя",
            "ending": "лся",
            "pron": "Pritvoryalsya"
          },
          {
            "stem": "притворя",
            "ending": "лась",
            "pron": "Pritvoryalas"
          },
          {
            "stem": "притворя",
            "ending": "лось",
            "pron": "Pritvoryalos"
          },
          {
            "stem": "притворя",
            "ending": "лись",
            "pron": "Pritvoryalis"
          }
        ],
        "tail": ""
      },
      "future": {
        "forms": [
          {
            "stem": "буд",
            "ending": "у",
            "pron": "Budu pritvoryatsya"
          },
          {
            "stem": "буд",
            "ending": "ешь",
            "pron": "Budesh pritvoryatsya"
          },
          {
            "stem": "буд",
            "ending": "ет",
            "pron": "Budet pritvoryatsya"
          },
          {
            "stem": "буд",
            "ending": "ем",
            "pron": "Budem pritvoryatsya"
          },
          {
            "stem": "буд",
            "ending": "ете",
            "pron": "Budete pritvoryatsya"
          },
          {
            "stem": "буд",
            "ending": "ут",
            "pron": "Budut pritvoryatsya"
          }
        ],
        "tail": " притворяться"
      }
    },
    "pt": {
      "present": {
        "forms": [
          {
            "stem": "fin",
            "ending": "jo",
            "pron": "Finzho"
          },
          {
            "stem": "fing",
            "ending": "es",
            "pron": "Finzhes"
          },
          {
            "stem": "fing",
            "ending": "e",
            "pron": "Finzhe"
          },
          {
            "stem": "fing",
            "ending": "imos",
            "pron": "Finzhimos"
          },
          {
            "stem": "fing",
            "ending": "em",
            "pron": "Finzhem"
          },
          {
            "stem": "fing",
            "ending": "em",
            "pron": "Finzhem"
          }
        ]
      },
      "past": {
        "forms": [
          {
            "stem": "fing",
            "ending": "i",
            "pron": "Finzhi"
          },
          {
            "stem": "fing",
            "ending": "iste",
            "pron": "Finzhiste"
          },
          {
            "stem": "fing",
            "ending": "iu",
            "pron": "Finzhiu"
          },
          {
            "stem": "fing",
            "ending": "imos",
            "pron": "Finzhimos"
          },
          {
            "stem": "fing",
            "ending": "iram",
            "pron": "Finzhiram"
          },
          {
            "stem": "fing",
            "ending": "iram",
            "pron": "Finzhiram"
          }
        ],
        "tail": "",
        "irregular": false
      },
      "future": {
        "forms": [
          {
            "stem": "fingir",
            "ending": "ei",
            "pron": "Finzhirei"
          },
          {
            "stem": "fingir",
            "ending": "ás",
            "pron": "Finzhiras"
          },
          {
            "stem": "fingir",
            "ending": "á",
            "pron": "Finzhira"
          },
          {
            "stem": "fingir",
            "ending": "emos",
            "pron": "Finzhiremos"
          },
          {
            "stem": "fingir",
            "ending": "ão",
            "pron": "Finzhirowng"
          },
          {
            "stem": "fingir",
            "ending": "ão",
            "pron": "Finzhirowng"
          }
        ],
        "tail": ""
      }
    }
  },
  "To convince": {
    "ru": {
      "present": {
        "forms": [
          {
            "stem": "убежда",
            "ending": "ю",
            "pron": "Ubezhdayu"
          },
          {
            "stem": "убежда",
            "ending": "ешь",
            "pron": "Ubezhdayesh"
          },
          {
            "stem": "убежда",
            "ending": "ет",
            "pron": "Ubezhdayet"
          },
          {
            "stem": "убежда",
            "ending": "ем",
            "pron": "Ubezhdayem"
          },
          {
            "stem": "убежда",
            "ending": "ете",
            "pron": "Ubezhdayete"
          },
          {
            "stem": "убежда",
            "ending": "ют",
            "pron": "Ubezhdayut"
          }
        ]
      },
      "past": {
        "forms": [
          {
            "stem": "убежда",
            "ending": "л",
            "pron": "Ubezhdal"
          },
          {
            "stem": "убежда",
            "ending": "ла",
            "pron": "Ubezhdala"
          },
          {
            "stem": "убежда",
            "ending": "ло",
            "pron": "Ubezhdalo"
          },
          {
            "stem": "убежда",
            "ending": "ли",
            "pron": "Ubezhdali"
          }
        ],
        "tail": ""
      },
      "future": {
        "forms": [
          {
            "stem": "буд",
            "ending": "у",
            "pron": "Budu ubezhdat"
          },
          {
            "stem": "буд",
            "ending": "ешь",
            "pron": "Budesh ubezhdat"
          },
          {
            "stem": "буд",
            "ending": "ет",
            "pron": "Budet ubezhdat"
          },
          {
            "stem": "буд",
            "ending": "ем",
            "pron": "Budem ubezhdat"
          },
          {
            "stem": "буд",
            "ending": "ете",
            "pron": "Budete ubezhdat"
          },
          {
            "stem": "буд",
            "ending": "ут",
            "pron": "Budut ubezhdat"
          }
        ],
        "tail": " убеждать"
      }
    },
    "pt": {
      "present": {
        "forms": [
          {
            "stem": "conven",
            "ending": "ço",
            "pron": "Convenso"
          },
          {
            "stem": "convenc",
            "ending": "es",
            "pron": "Convences"
          },
          {
            "stem": "convenc",
            "ending": "e",
            "pron": "Convence"
          },
          {
            "stem": "convenc",
            "ending": "emos",
            "pron": "Convencemos"
          },
          {
            "stem": "convenc",
            "ending": "em",
            "pron": "Convencem"
          },
          {
            "stem": "convenc",
            "ending": "em",
            "pron": "Convencem"
          }
        ]
      },
      "past": {
        "forms": [
          {
            "stem": "convenc",
            "ending": "i",
            "pron": "Convenci"
          },
          {
            "stem": "convenc",
            "ending": "este",
            "pron": "Convenceste"
          },
          {
            "stem": "convenc",
            "ending": "eu",
            "pron": "Convenceu"
          },
          {
            "stem": "convenc",
            "ending": "emos",
            "pron": "Convencemos"
          },
          {
            "stem": "convenc",
            "ending": "eram",
            "pron": "Convenceram"
          },
          {
            "stem": "convenc",
            "ending": "eram",
            "pron": "Convenceram"
          }
        ],
        "tail": "",
        "irregular": false
      },
      "future": {
        "forms": [
          {
            "stem": "convencer",
            "ending": "ei",
            "pron": "Convencerei"
          },
          {
            "stem": "convencer",
            "ending": "ás",
            "pron": "Convenceras"
          },
          {
            "stem": "convencer",
            "ending": "á",
            "pron": "Convencera"
          },
          {
            "stem": "convencer",
            "ending": "emos",
            "pron": "Convenceremos"
          },
          {
            "stem": "convencer",
            "ending": "ão",
            "pron": "Convencerowng"
          },
          {
            "stem": "convencer",
            "ending": "ão",
            "pron": "Convencerowng"
          }
        ],
        "tail": ""
      }
    }
  },
  "To avoid": {
    "ru": {
      "present": {
        "forms": [
          {
            "stem": "избега",
            "ending": "ю",
            "pron": "Izbegayu"
          },
          {
            "stem": "избега",
            "ending": "ешь",
            "pron": "Izbegayesh"
          },
          {
            "stem": "избега",
            "ending": "ет",
            "pron": "Izbegayet"
          },
          {
            "stem": "избега",
            "ending": "ем",
            "pron": "Izbegayem"
          },
          {
            "stem": "избега",
            "ending": "ете",
            "pron": "Izbegayete"
          },
          {
            "stem": "избега",
            "ending": "ют",
            "pron": "Izbegayut"
          }
        ]
      },
      "past": {
        "forms": [
          {
            "stem": "избега",
            "ending": "л",
            "pron": "Izbegal"
          },
          {
            "stem": "избега",
            "ending": "ла",
            "pron": "Izbegala"
          },
          {
            "stem": "избега",
            "ending": "ло",
            "pron": "Izbegalo"
          },
          {
            "stem": "избега",
            "ending": "ли",
            "pron": "Izbegali"
          }
        ],
        "tail": ""
      },
      "future": {
        "forms": [
          {
            "stem": "буд",
            "ending": "у",
            "pron": "Budu izbegat"
          },
          {
            "stem": "буд",
            "ending": "ешь",
            "pron": "Budesh izbegat"
          },
          {
            "stem": "буд",
            "ending": "ет",
            "pron": "Budet izbegat"
          },
          {
            "stem": "буд",
            "ending": "ем",
            "pron": "Budem izbegat"
          },
          {
            "stem": "буд",
            "ending": "ете",
            "pron": "Budete izbegat"
          },
          {
            "stem": "буд",
            "ending": "ут",
            "pron": "Budut izbegat"
          }
        ],
        "tail": " избегать"
      }
    },
    "pt": {
      "present": {
        "forms": [
          {
            "stem": "evit",
            "ending": "o",
            "pron": "Evito"
          },
          {
            "stem": "evit",
            "ending": "as",
            "pron": "Evitas"
          },
          {
            "stem": "evit",
            "ending": "a",
            "pron": "Evita"
          },
          {
            "stem": "evit",
            "ending": "amos",
            "pron": "Evitamos"
          },
          {
            "stem": "evit",
            "ending": "am",
            "pron": "Evitam"
          },
          {
            "stem": "evit",
            "ending": "am",
            "pron": "Evitam"
          }
        ]
      },
      "past": {
        "forms": [
          {
            "stem": "evit",
            "ending": "ei",
            "pron": "Evitei"
          },
          {
            "stem": "evit",
            "ending": "aste",
            "pron": "Evitaste"
          },
          {
            "stem": "evit",
            "ending": "ou",
            "pron": "Evitou"
          },
          {
            "stem": "evit",
            "ending": "ámos",
            "pron": "Evitamos"
          },
          {
            "stem": "evit",
            "ending": "aram",
            "pron": "Evitaram"
          },
          {
            "stem": "evit",
            "ending": "aram",
            "pron": "Evitaram"
          }
        ],
        "tail": "",
        "irregular": false
      },
      "future": {
        "forms": [
          {
            "stem": "evitar",
            "ending": "ei",
            "pron": "Evitarei"
          },
          {
            "stem": "evitar",
            "ending": "ás",
            "pron": "Evitaras"
          },
          {
            "stem": "evitar",
            "ending": "á",
            "pron": "Evitara"
          },
          {
            "stem": "evitar",
            "ending": "emos",
            "pron": "Evitaremos"
          },
          {
            "stem": "evitar",
            "ending": "ão",
            "pron": "Evitarowng"
          },
          {
            "stem": "evitar",
            "ending": "ão",
            "pron": "Evitarowng"
          }
        ],
        "tail": ""
      }
    }
  },
  "To require": {
    "ru": {
      "present": {
        "forms": [
          {
            "stem": "требу",
            "ending": "ю",
            "pron": "Trebuyu"
          },
          {
            "stem": "требу",
            "ending": "ешь",
            "pron": "Trebuyesh"
          },
          {
            "stem": "требу",
            "ending": "ет",
            "pron": "Trebuyet"
          },
          {
            "stem": "требу",
            "ending": "ем",
            "pron": "Trebuyem"
          },
          {
            "stem": "требу",
            "ending": "ете",
            "pron": "Trebuyete"
          },
          {
            "stem": "требу",
            "ending": "ют",
            "pron": "Trebuyut"
          }
        ]
      },
      "past": {
        "forms": [
          {
            "stem": "требова",
            "ending": "л",
            "pron": "Treboval"
          },
          {
            "stem": "требова",
            "ending": "ла",
            "pron": "Trebovala"
          },
          {
            "stem": "требова",
            "ending": "ло",
            "pron": "Trebovalo"
          },
          {
            "stem": "требова",
            "ending": "ли",
            "pron": "Trebovali"
          }
        ],
        "tail": ""
      },
      "future": {
        "forms": [
          {
            "stem": "буд",
            "ending": "у",
            "pron": "Budu trebovat"
          },
          {
            "stem": "буд",
            "ending": "ешь",
            "pron": "Budesh trebovat"
          },
          {
            "stem": "буд",
            "ending": "ет",
            "pron": "Budet trebovat"
          },
          {
            "stem": "буд",
            "ending": "ем",
            "pron": "Budem trebovat"
          },
          {
            "stem": "буд",
            "ending": "ете",
            "pron": "Budete trebovat"
          },
          {
            "stem": "буд",
            "ending": "ут",
            "pron": "Budut trebovat"
          }
        ],
        "tail": " требовать"
      }
    },
    "pt": {
      "present": {
        "forms": [
          {
            "stem": "exi",
            "ending": "jo",
            "pron": "Eshizho"
          },
          {
            "stem": "exig",
            "ending": "es",
            "pron": "Eshizhes"
          },
          {
            "stem": "exig",
            "ending": "e",
            "pron": "Eshizhe"
          },
          {
            "stem": "exig",
            "ending": "imos",
            "pron": "Eshizhimos"
          },
          {
            "stem": "exig",
            "ending": "em",
            "pron": "Eshizhem"
          },
          {
            "stem": "exig",
            "ending": "em",
            "pron": "Eshizhem"
          }
        ]
      },
      "past": {
        "forms": [
          {
            "stem": "exig",
            "ending": "i",
            "pron": "Eshizhi"
          },
          {
            "stem": "exig",
            "ending": "iste",
            "pron": "Eshizhiste"
          },
          {
            "stem": "exig",
            "ending": "iu",
            "pron": "Eshizhiu"
          },
          {
            "stem": "exig",
            "ending": "imos",
            "pron": "Eshizhimos"
          },
          {
            "stem": "exig",
            "ending": "iram",
            "pron": "Eshizhiram"
          },
          {
            "stem": "exig",
            "ending": "iram",
            "pron": "Eshizhiram"
          }
        ],
        "tail": "",
        "irregular": false
      },
      "future": {
        "forms": [
          {
            "stem": "exigir",
            "ending": "ei",
            "pron": "Eshizhirei"
          },
          {
            "stem": "exigir",
            "ending": "ás",
            "pron": "Eshizhiras"
          },
          {
            "stem": "exigir",
            "ending": "á",
            "pron": "Eshizhira"
          },
          {
            "stem": "exigir",
            "ending": "emos",
            "pron": "Eshizhiremos"
          },
          {
            "stem": "exigir",
            "ending": "ão",
            "pron": "Eshizhirowng"
          },
          {
            "stem": "exigir",
            "ending": "ão",
            "pron": "Eshizhirowng"
          }
        ],
        "tail": ""
      }
    }
  },
  "To warn": {
    "ru": {
      "present": {
        "forms": [
          {
            "stem": "предупрежда",
            "ending": "ю",
            "pron": "Preduprezhdayu"
          },
          {
            "stem": "предупрежда",
            "ending": "ешь",
            "pron": "Preduprezhdayesh"
          },
          {
            "stem": "предупрежда",
            "ending": "ет",
            "pron": "Preduprezhdayet"
          },
          {
            "stem": "предупрежда",
            "ending": "ем",
            "pron": "Preduprezhdayem"
          },
          {
            "stem": "предупрежда",
            "ending": "ете",
            "pron": "Preduprezhdayete"
          },
          {
            "stem": "предупрежда",
            "ending": "ют",
            "pron": "Preduprezhdayut"
          }
        ]
      },
      "past": {
        "forms": [
          {
            "stem": "предупрежда",
            "ending": "л",
            "pron": "Preduprezhdal"
          },
          {
            "stem": "предупрежда",
            "ending": "ла",
            "pron": "Preduprezhdala"
          },
          {
            "stem": "предупрежда",
            "ending": "ло",
            "pron": "Preduprezhdalo"
          },
          {
            "stem": "предупрежда",
            "ending": "ли",
            "pron": "Preduprezhdali"
          }
        ],
        "tail": ""
      },
      "future": {
        "forms": [
          {
            "stem": "буд",
            "ending": "у",
            "pron": "Budu preduprezhdat"
          },
          {
            "stem": "буд",
            "ending": "ешь",
            "pron": "Budesh preduprezhdat"
          },
          {
            "stem": "буд",
            "ending": "ет",
            "pron": "Budet preduprezhdat"
          },
          {
            "stem": "буд",
            "ending": "ем",
            "pron": "Budem preduprezhdat"
          },
          {
            "stem": "буд",
            "ending": "ете",
            "pron": "Budete preduprezhdat"
          },
          {
            "stem": "буд",
            "ending": "ут",
            "pron": "Budut preduprezhdat"
          }
        ],
        "tail": " предупреждать"
      }
    },
    "pt": {
      "present": {
        "forms": [
          {
            "stem": "avis",
            "ending": "o",
            "pron": "Aviso"
          },
          {
            "stem": "avis",
            "ending": "as",
            "pron": "Avisas"
          },
          {
            "stem": "avis",
            "ending": "a",
            "pron": "Avisa"
          },
          {
            "stem": "avis",
            "ending": "amos",
            "pron": "Avisamos"
          },
          {
            "stem": "avis",
            "ending": "am",
            "pron": "Avisam"
          },
          {
            "stem": "avis",
            "ending": "am",
            "pron": "Avisam"
          }
        ]
      },
      "past": {
        "forms": [
          {
            "stem": "avis",
            "ending": "ei",
            "pron": "Avisei"
          },
          {
            "stem": "avis",
            "ending": "aste",
            "pron": "Avisaste"
          },
          {
            "stem": "avis",
            "ending": "ou",
            "pron": "Avisou"
          },
          {
            "stem": "avis",
            "ending": "ámos",
            "pron": "Avisamos"
          },
          {
            "stem": "avis",
            "ending": "aram",
            "pron": "Avisaram"
          },
          {
            "stem": "avis",
            "ending": "aram",
            "pron": "Avisaram"
          }
        ],
        "tail": "",
        "irregular": false
      },
      "future": {
        "forms": [
          {
            "stem": "avisar",
            "ending": "ei",
            "pron": "Avisarei"
          },
          {
            "stem": "avisar",
            "ending": "ás",
            "pron": "Avisaras"
          },
          {
            "stem": "avisar",
            "ending": "á",
            "pron": "Avisara"
          },
          {
            "stem": "avisar",
            "ending": "emos",
            "pron": "Avisaremos"
          },
          {
            "stem": "avisar",
            "ending": "ão",
            "pron": "Avisarowng"
          },
          {
            "stem": "avisar",
            "ending": "ão",
            "pron": "Avisarowng"
          }
        ],
        "tail": ""
      }
    }
  },
  "To succeed": {
    "ru": {
      "present": {
        "forms": [
          {
            "stem": "преуспева",
            "ending": "ю",
            "pron": "Preuspevayu"
          },
          {
            "stem": "преуспева",
            "ending": "ешь",
            "pron": "Preuspevayesh"
          },
          {
            "stem": "преуспева",
            "ending": "ет",
            "pron": "Preuspevayet"
          },
          {
            "stem": "преуспева",
            "ending": "ем",
            "pron": "Preuspevayem"
          },
          {
            "stem": "преуспева",
            "ending": "ете",
            "pron": "Preuspevayete"
          },
          {
            "stem": "преуспева",
            "ending": "ют",
            "pron": "Preuspevayut"
          }
        ]
      },
      "past": {
        "forms": [
          {
            "stem": "преуспева",
            "ending": "л",
            "pron": "Preuspeval"
          },
          {
            "stem": "преуспева",
            "ending": "ла",
            "pron": "Preuspevala"
          },
          {
            "stem": "преуспева",
            "ending": "ло",
            "pron": "Preuspevalo"
          },
          {
            "stem": "преуспева",
            "ending": "ли",
            "pron": "Preuspevali"
          }
        ],
        "tail": ""
      },
      "future": {
        "forms": [
          {
            "stem": "буд",
            "ending": "у",
            "pron": "Budu preuspevat"
          },
          {
            "stem": "буд",
            "ending": "ешь",
            "pron": "Budesh preuspevat"
          },
          {
            "stem": "буд",
            "ending": "ет",
            "pron": "Budet preuspevat"
          },
          {
            "stem": "буд",
            "ending": "ем",
            "pron": "Budem preuspevat"
          },
          {
            "stem": "буд",
            "ending": "ете",
            "pron": "Budete preuspevat"
          },
          {
            "stem": "буд",
            "ending": "ут",
            "pron": "Budut preuspevat"
          }
        ],
        "tail": " преуспевать"
      }
    },
    "pt": {
      "present": {
        "forms": [
          {
            "stem": "ten",
            "ending": "ho",
            "pron": "Tenyo sucesso"
          },
          {
            "stem": "ten",
            "ending": "s",
            "pron": "Tens sucesso"
          },
          {
            "stem": "te",
            "ending": "m",
            "pron": "Tem sucesso"
          },
          {
            "stem": "tem",
            "ending": "os",
            "pron": "Temos sucesso"
          },
          {
            "stem": "tê",
            "ending": "m",
            "pron": "Tem sucesso"
          },
          {
            "stem": "tê",
            "ending": "m",
            "pron": "Tem sucesso"
          }
        ],
        "tail": " sucesso"
      },
      "past": {
        "forms": [
          {
            "stem": "",
            "ending": "tive",
            "pron": "Tive sucesso"
          },
          {
            "stem": "",
            "ending": "tiveste",
            "pron": "Tiveste sucesso"
          },
          {
            "stem": "",
            "ending": "teve",
            "pron": "Teve sucesso"
          },
          {
            "stem": "",
            "ending": "tivemos",
            "pron": "Tivemos sucesso"
          },
          {
            "stem": "",
            "ending": "tiveram",
            "pron": "Tiveram sucesso"
          },
          {
            "stem": "",
            "ending": "tiveram",
            "pron": "Tiveram sucesso"
          }
        ],
        "tail": " sucesso",
        "irregular": true
      },
      "future": {
        "forms": [
          {
            "stem": "ter",
            "ending": "ei",
            "pron": "Terei sucesso"
          },
          {
            "stem": "ter",
            "ending": "ás",
            "pron": "Teras sucesso"
          },
          {
            "stem": "ter",
            "ending": "á",
            "pron": "Tera sucesso"
          },
          {
            "stem": "ter",
            "ending": "emos",
            "pron": "Teremos sucesso"
          },
          {
            "stem": "ter",
            "ending": "ão",
            "pron": "Terowng sucesso"
          },
          {
            "stem": "ter",
            "ending": "ão",
            "pron": "Terowng sucesso"
          }
        ],
        "tail": " sucesso"
      }
    }
  },
  "To fail": {
    "ru": {
      "present": {
        "forms": [
          {
            "stem": "терпл",
            "ending": "ю",
            "pron": "Terplyu neudachu"
          },
          {
            "stem": "терп",
            "ending": "ишь",
            "pron": "Terpish neudachu"
          },
          {
            "stem": "терп",
            "ending": "ит",
            "pron": "Terpit neudachu"
          },
          {
            "stem": "терп",
            "ending": "им",
            "pron": "Terpim neudachu"
          },
          {
            "stem": "терп",
            "ending": "ите",
            "pron": "Terpite neudachu"
          },
          {
            "stem": "терп",
            "ending": "ят",
            "pron": "Terpyat neudachu"
          }
        ],
        "tail": " неудачу"
      },
      "past": {
        "forms": [
          {
            "stem": "терпе",
            "ending": "л",
            "pron": "Terpel neudachu"
          },
          {
            "stem": "терпе",
            "ending": "ла",
            "pron": "Terpela neudachu"
          },
          {
            "stem": "терпе",
            "ending": "ло",
            "pron": "Terpelo neudachu"
          },
          {
            "stem": "терпе",
            "ending": "ли",
            "pron": "Terpeli neudachu"
          }
        ],
        "tail": " неудачу"
      },
      "future": {
        "forms": [
          {
            "stem": "буд",
            "ending": "у",
            "pron": "Budu terpet neudachu"
          },
          {
            "stem": "буд",
            "ending": "ешь",
            "pron": "Budesh terpet neudachu"
          },
          {
            "stem": "буд",
            "ending": "ет",
            "pron": "Budet terpet neudachu"
          },
          {
            "stem": "буд",
            "ending": "ем",
            "pron": "Budem terpet neudachu"
          },
          {
            "stem": "буд",
            "ending": "ете",
            "pron": "Budete terpet neudachu"
          },
          {
            "stem": "буд",
            "ending": "ут",
            "pron": "Budut terpet neudachu"
          }
        ],
        "tail": " терпеть неудачу"
      }
    },
    "pt": {
      "present": {
        "forms": [
          {
            "stem": "falh",
            "ending": "o",
            "pron": "Falyo"
          },
          {
            "stem": "falh",
            "ending": "as",
            "pron": "Falyas"
          },
          {
            "stem": "falh",
            "ending": "a",
            "pron": "Falya"
          },
          {
            "stem": "falh",
            "ending": "amos",
            "pron": "Falyamos"
          },
          {
            "stem": "falh",
            "ending": "am",
            "pron": "Falyam"
          },
          {
            "stem": "falh",
            "ending": "am",
            "pron": "Falyam"
          }
        ]
      },
      "past": {
        "forms": [
          {
            "stem": "falh",
            "ending": "ei",
            "pron": "Falyei"
          },
          {
            "stem": "falh",
            "ending": "aste",
            "pron": "Falyaste"
          },
          {
            "stem": "falh",
            "ending": "ou",
            "pron": "Falyou"
          },
          {
            "stem": "falh",
            "ending": "ámos",
            "pron": "Falyamos"
          },
          {
            "stem": "falh",
            "ending": "aram",
            "pron": "Falyaram"
          },
          {
            "stem": "falh",
            "ending": "aram",
            "pron": "Falyaram"
          }
        ],
        "tail": "",
        "irregular": false
      },
      "future": {
        "forms": [
          {
            "stem": "falhar",
            "ending": "ei",
            "pron": "Falyarei"
          },
          {
            "stem": "falhar",
            "ending": "ás",
            "pron": "Falyaras"
          },
          {
            "stem": "falhar",
            "ending": "á",
            "pron": "Falyara"
          },
          {
            "stem": "falhar",
            "ending": "emos",
            "pron": "Falyaremos"
          },
          {
            "stem": "falhar",
            "ending": "ão",
            "pron": "Falyarowng"
          },
          {
            "stem": "falhar",
            "ending": "ão",
            "pron": "Falyarowng"
          }
        ],
        "tail": ""
      }
    }
  },
  "To hesitate": {
    "ru": {
      "present": {
        "forms": [
          {
            "stem": "колебл",
            "ending": "юсь",
            "pron": "Koleblyus"
          },
          {
            "stem": "колебл",
            "ending": "ешься",
            "pron": "Kolebleshsya"
          },
          {
            "stem": "колебл",
            "ending": "ется",
            "pron": "Kolebletsya"
          },
          {
            "stem": "колебл",
            "ending": "емся",
            "pron": "Koleblemsya"
          },
          {
            "stem": "колебл",
            "ending": "етесь",
            "pron": "Kolebletes"
          },
          {
            "stem": "колебл",
            "ending": "ются",
            "pron": "Koleblyutsya"
          }
        ]
      },
      "past": {
        "forms": [
          {
            "stem": "колеба",
            "ending": "лся",
            "pron": "Kolebalsya"
          },
          {
            "stem": "колеба",
            "ending": "лась",
            "pron": "Kolebalas"
          },
          {
            "stem": "колеба",
            "ending": "лось",
            "pron": "Kolebalos"
          },
          {
            "stem": "колеба",
            "ending": "лись",
            "pron": "Kolebalis"
          }
        ],
        "tail": ""
      },
      "future": {
        "forms": [
          {
            "stem": "буд",
            "ending": "у",
            "pron": "Budu kolebatsya"
          },
          {
            "stem": "буд",
            "ending": "ешь",
            "pron": "Budesh kolebatsya"
          },
          {
            "stem": "буд",
            "ending": "ет",
            "pron": "Budet kolebatsya"
          },
          {
            "stem": "буд",
            "ending": "ем",
            "pron": "Budem kolebatsya"
          },
          {
            "stem": "буд",
            "ending": "ете",
            "pron": "Budete kolebatsya"
          },
          {
            "stem": "буд",
            "ending": "ут",
            "pron": "Budut kolebatsya"
          }
        ],
        "tail": " колебаться"
      }
    },
    "pt": {
      "present": {
        "forms": [
          {
            "stem": "hesit",
            "ending": "o",
            "pron": "Hesito"
          },
          {
            "stem": "hesit",
            "ending": "as",
            "pron": "Hesitas"
          },
          {
            "stem": "hesit",
            "ending": "a",
            "pron": "Hesita"
          },
          {
            "stem": "hesit",
            "ending": "amos",
            "pron": "Hesitamos"
          },
          {
            "stem": "hesit",
            "ending": "am",
            "pron": "Hesitam"
          },
          {
            "stem": "hesit",
            "ending": "am",
            "pron": "Hesitam"
          }
        ]
      },
      "past": {
        "forms": [
          {
            "stem": "hesit",
            "ending": "ei",
            "pron": "Hesitei"
          },
          {
            "stem": "hesit",
            "ending": "aste",
            "pron": "Hesitaste"
          },
          {
            "stem": "hesit",
            "ending": "ou",
            "pron": "Hesitou"
          },
          {
            "stem": "hesit",
            "ending": "ámos",
            "pron": "Hesitamos"
          },
          {
            "stem": "hesit",
            "ending": "aram",
            "pron": "Hesitaram"
          },
          {
            "stem": "hesit",
            "ending": "aram",
            "pron": "Hesitaram"
          }
        ],
        "tail": "",
        "irregular": false
      },
      "future": {
        "forms": [
          {
            "stem": "hesitar",
            "ending": "ei",
            "pron": "Hesitarei"
          },
          {
            "stem": "hesitar",
            "ending": "ás",
            "pron": "Hesitaras"
          },
          {
            "stem": "hesitar",
            "ending": "á",
            "pron": "Hesitara"
          },
          {
            "stem": "hesitar",
            "ending": "emos",
            "pron": "Hesitaremos"
          },
          {
            "stem": "hesitar",
            "ending": "ão",
            "pron": "Hesitarowng"
          },
          {
            "stem": "hesitar",
            "ending": "ão",
            "pron": "Hesitarowng"
          }
        ],
        "tail": ""
      }
    }
  },
  "To manage": {
    "ru": {
      "present": {
        "forms": [
          {
            "stem": "справля",
            "ending": "юсь",
            "pron": "Spravlyayus"
          },
          {
            "stem": "справля",
            "ending": "ешься",
            "pron": "Spravlyayeshsya"
          },
          {
            "stem": "справля",
            "ending": "ется",
            "pron": "Spravlyayetsya"
          },
          {
            "stem": "справля",
            "ending": "емся",
            "pron": "Spravlyayemsya"
          },
          {
            "stem": "справля",
            "ending": "етесь",
            "pron": "Spravlyayetes"
          },
          {
            "stem": "справля",
            "ending": "ются",
            "pron": "Spravlyayutsya"
          }
        ]
      },
      "past": {
        "forms": [
          {
            "stem": "справля",
            "ending": "лся",
            "pron": "Spravlyalsya"
          },
          {
            "stem": "справля",
            "ending": "лась",
            "pron": "Spravlyalas"
          },
          {
            "stem": "справля",
            "ending": "лось",
            "pron": "Spravlyalos"
          },
          {
            "stem": "справля",
            "ending": "лись",
            "pron": "Spravlyalis"
          }
        ],
        "tail": ""
      },
      "future": {
        "forms": [
          {
            "stem": "буд",
            "ending": "у",
            "pron": "Budu spravlyatsya"
          },
          {
            "stem": "буд",
            "ending": "ешь",
            "pron": "Budesh spravlyatsya"
          },
          {
            "stem": "буд",
            "ending": "ет",
            "pron": "Budet spravlyatsya"
          },
          {
            "stem": "буд",
            "ending": "ем",
            "pron": "Budem spravlyatsya"
          },
          {
            "stem": "буд",
            "ending": "ете",
            "pron": "Budete spravlyatsya"
          },
          {
            "stem": "буд",
            "ending": "ут",
            "pron": "Budut spravlyatsya"
          }
        ],
        "tail": " справляться"
      }
    },
    "pt": {
      "present": {
        "forms": [
          {
            "stem": "gerenci",
            "ending": "o",
            "pron": "Zherencio"
          },
          {
            "stem": "gerenci",
            "ending": "as",
            "pron": "Zherencias"
          },
          {
            "stem": "gerenci",
            "ending": "a",
            "pron": "Zherencia"
          },
          {
            "stem": "gerenci",
            "ending": "amos",
            "pron": "Zherenciamos"
          },
          {
            "stem": "gerenci",
            "ending": "am",
            "pron": "Zherenciam"
          },
          {
            "stem": "gerenci",
            "ending": "am",
            "pron": "Zherenciam"
          }
        ]
      },
      "past": {
        "forms": [
          {
            "stem": "gerenci",
            "ending": "ei",
            "pron": "Zherenciei"
          },
          {
            "stem": "gerenci",
            "ending": "aste",
            "pron": "Zherenciaste"
          },
          {
            "stem": "gerenci",
            "ending": "ou",
            "pron": "Zherenciou"
          },
          {
            "stem": "gerenci",
            "ending": "ámos",
            "pron": "Zherenciamos"
          },
          {
            "stem": "gerenci",
            "ending": "aram",
            "pron": "Zherenciaram"
          },
          {
            "stem": "gerenci",
            "ending": "aram",
            "pron": "Zherenciaram"
          }
        ],
        "tail": "",
        "irregular": false
      },
      "future": {
        "forms": [
          {
            "stem": "gerenciar",
            "ending": "ei",
            "pron": "Zherenciarei"
          },
          {
            "stem": "gerenciar",
            "ending": "ás",
            "pron": "Zherenciaras"
          },
          {
            "stem": "gerenciar",
            "ending": "á",
            "pron": "Zherenciara"
          },
          {
            "stem": "gerenciar",
            "ending": "emos",
            "pron": "Zherenciaremos"
          },
          {
            "stem": "gerenciar",
            "ending": "ão",
            "pron": "Zherenciarowng"
          },
          {
            "stem": "gerenciar",
            "ending": "ão",
            "pron": "Zherenciarowng"
          }
        ],
        "tail": ""
      }
    }
  },
  "To suggest": {
    "ru": {
      "present": {
        "forms": [
          {
            "stem": "предлага",
            "ending": "ю",
            "pron": "Predlagayu"
          },
          {
            "stem": "предлага",
            "ending": "ешь",
            "pron": "Predlagayesh"
          },
          {
            "stem": "предлага",
            "ending": "ет",
            "pron": "Predlagayet"
          },
          {
            "stem": "предлага",
            "ending": "ем",
            "pron": "Predlagayem"
          },
          {
            "stem": "предлага",
            "ending": "ете",
            "pron": "Predlagayete"
          },
          {
            "stem": "предлага",
            "ending": "ют",
            "pron": "Predlagayut"
          }
        ]
      },
      "past": {
        "forms": [
          {
            "stem": "предлага",
            "ending": "л",
            "pron": "Predlagal"
          },
          {
            "stem": "предлага",
            "ending": "ла",
            "pron": "Predlagala"
          },
          {
            "stem": "предлага",
            "ending": "ло",
            "pron": "Predlagalo"
          },
          {
            "stem": "предлага",
            "ending": "ли",
            "pron": "Predlagali"
          }
        ],
        "tail": ""
      },
      "future": {
        "forms": [
          {
            "stem": "буд",
            "ending": "у",
            "pron": "Budu predlagat"
          },
          {
            "stem": "буд",
            "ending": "ешь",
            "pron": "Budesh predlagat"
          },
          {
            "stem": "буд",
            "ending": "ет",
            "pron": "Budet predlagat"
          },
          {
            "stem": "буд",
            "ending": "ем",
            "pron": "Budem predlagat"
          },
          {
            "stem": "буд",
            "ending": "ете",
            "pron": "Budete predlagat"
          },
          {
            "stem": "буд",
            "ending": "ут",
            "pron": "Budut predlagat"
          }
        ],
        "tail": " предлагать"
      }
    },
    "pt": {
      "present": {
        "forms": [
          {
            "stem": "sug",
            "ending": "iro",
            "pron": "Suzhiro"
          },
          {
            "stem": "suger",
            "ending": "es",
            "pron": "Suzheres"
          },
          {
            "stem": "suger",
            "ending": "e",
            "pron": "Suzhere"
          },
          {
            "stem": "suger",
            "ending": "imos",
            "pron": "Suzherimos"
          },
          {
            "stem": "suger",
            "ending": "em",
            "pron": "Suzherem"
          },
          {
            "stem": "suger",
            "ending": "em",
            "pron": "Suzherem"
          }
        ]
      },
      "past": {
        "forms": [
          {
            "stem": "suger",
            "ending": "i",
            "pron": "Suzheri"
          },
          {
            "stem": "suger",
            "ending": "iste",
            "pron": "Suzheriste"
          },
          {
            "stem": "suger",
            "ending": "iu",
            "pron": "Suzheriu"
          },
          {
            "stem": "suger",
            "ending": "imos",
            "pron": "Suzherimos"
          },
          {
            "stem": "suger",
            "ending": "iram",
            "pron": "Suzheriram"
          },
          {
            "stem": "suger",
            "ending": "iram",
            "pron": "Suzheriram"
          }
        ],
        "tail": "",
        "irregular": false
      },
      "future": {
        "forms": [
          {
            "stem": "sugerir",
            "ending": "ei",
            "pron": "Suzherirei"
          },
          {
            "stem": "sugerir",
            "ending": "ás",
            "pron": "Suzheriras"
          },
          {
            "stem": "sugerir",
            "ending": "á",
            "pron": "Suzherira"
          },
          {
            "stem": "sugerir",
            "ending": "emos",
            "pron": "Suzheriremos"
          },
          {
            "stem": "sugerir",
            "ending": "ão",
            "pron": "Suzherirowng"
          },
          {
            "stem": "sugerir",
            "ending": "ão",
            "pron": "Suzherirowng"
          }
        ],
        "tail": ""
      }
    }
  },
  "To struggle": {
    "ru": {
      "present": {
        "forms": [
          {
            "stem": "бор",
            "ending": "юсь",
            "pron": "Boryus"
          },
          {
            "stem": "бор",
            "ending": "ешься",
            "pron": "Boreshsya"
          },
          {
            "stem": "бор",
            "ending": "ется",
            "pron": "Boretsya"
          },
          {
            "stem": "бор",
            "ending": "емся",
            "pron": "Boremsya"
          },
          {
            "stem": "бор",
            "ending": "етесь",
            "pron": "Boretes"
          },
          {
            "stem": "бор",
            "ending": "ются",
            "pron": "Boryutsya"
          }
        ]
      },
      "past": {
        "forms": [
          {
            "stem": "боро",
            "ending": "лся",
            "pron": "Borolsya"
          },
          {
            "stem": "боро",
            "ending": "лась",
            "pron": "Borolas"
          },
          {
            "stem": "боро",
            "ending": "лось",
            "pron": "Borolos"
          },
          {
            "stem": "боро",
            "ending": "лись",
            "pron": "Borolis"
          }
        ],
        "tail": ""
      },
      "future": {
        "forms": [
          {
            "stem": "буд",
            "ending": "у",
            "pron": "Budu borotsya"
          },
          {
            "stem": "буд",
            "ending": "ешь",
            "pron": "Budesh borotsya"
          },
          {
            "stem": "буд",
            "ending": "ет",
            "pron": "Budet borotsya"
          },
          {
            "stem": "буд",
            "ending": "ем",
            "pron": "Budem borotsya"
          },
          {
            "stem": "буд",
            "ending": "ете",
            "pron": "Budete borotsya"
          },
          {
            "stem": "буд",
            "ending": "ут",
            "pron": "Budut borotsya"
          }
        ],
        "tail": " бороться"
      }
    },
    "pt": {
      "present": {
        "forms": [
          {
            "stem": "lut",
            "ending": "o",
            "pron": "Luto"
          },
          {
            "stem": "lut",
            "ending": "as",
            "pron": "Lutas"
          },
          {
            "stem": "lut",
            "ending": "a",
            "pron": "Luta"
          },
          {
            "stem": "lut",
            "ending": "amos",
            "pron": "Lutamos"
          },
          {
            "stem": "lut",
            "ending": "am",
            "pron": "Lutam"
          },
          {
            "stem": "lut",
            "ending": "am",
            "pron": "Lutam"
          }
        ]
      },
      "past": {
        "forms": [
          {
            "stem": "lut",
            "ending": "ei",
            "pron": "Lutei"
          },
          {
            "stem": "lut",
            "ending": "aste",
            "pron": "Lutaste"
          },
          {
            "stem": "lut",
            "ending": "ou",
            "pron": "Lutou"
          },
          {
            "stem": "lut",
            "ending": "ámos",
            "pron": "Lutamos"
          },
          {
            "stem": "lut",
            "ending": "aram",
            "pron": "Lutaram"
          },
          {
            "stem": "lut",
            "ending": "aram",
            "pron": "Lutaram"
          }
        ],
        "tail": "",
        "irregular": false
      },
      "future": {
        "forms": [
          {
            "stem": "lutar",
            "ending": "ei",
            "pron": "Lutarei"
          },
          {
            "stem": "lutar",
            "ending": "ás",
            "pron": "Lutaras"
          },
          {
            "stem": "lutar",
            "ending": "á",
            "pron": "Lutara"
          },
          {
            "stem": "lutar",
            "ending": "emos",
            "pron": "Lutaremos"
          },
          {
            "stem": "lutar",
            "ending": "ão",
            "pron": "Lutarowng"
          },
          {
            "stem": "lutar",
            "ending": "ão",
            "pron": "Lutarowng"
          }
        ],
        "tail": ""
      }
    }
  },
  "To admit": {
    "ru": {
      "present": {
        "forms": [
          {
            "stem": "призна",
            "ending": "ю",
            "pron": "Priznayu"
          },
          {
            "stem": "призна",
            "ending": "ёшь",
            "pron": "Priznayosh"
          },
          {
            "stem": "призна",
            "ending": "ёт",
            "pron": "Priznayot"
          },
          {
            "stem": "призна",
            "ending": "ём",
            "pron": "Priznayom"
          },
          {
            "stem": "призна",
            "ending": "ёте",
            "pron": "Priznayote"
          },
          {
            "stem": "призна",
            "ending": "ют",
            "pron": "Priznayut"
          }
        ]
      },
      "past": {
        "forms": [
          {
            "stem": "признава",
            "ending": "л",
            "pron": "Priznaval"
          },
          {
            "stem": "признава",
            "ending": "ла",
            "pron": "Priznavala"
          },
          {
            "stem": "признава",
            "ending": "ло",
            "pron": "Priznavalo"
          },
          {
            "stem": "признава",
            "ending": "ли",
            "pron": "Priznavali"
          }
        ],
        "tail": ""
      },
      "future": {
        "forms": [
          {
            "stem": "буд",
            "ending": "у",
            "pron": "Budu priznavat"
          },
          {
            "stem": "буд",
            "ending": "ешь",
            "pron": "Budesh priznavat"
          },
          {
            "stem": "буд",
            "ending": "ет",
            "pron": "Budet priznavat"
          },
          {
            "stem": "буд",
            "ending": "ем",
            "pron": "Budem priznavat"
          },
          {
            "stem": "буд",
            "ending": "ете",
            "pron": "Budete priznavat"
          },
          {
            "stem": "буд",
            "ending": "ут",
            "pron": "Budut priznavat"
          }
        ],
        "tail": " признавать"
      }
    },
    "pt": {
      "present": {
        "forms": [
          {
            "stem": "admit",
            "ending": "o",
            "pron": "Admito"
          },
          {
            "stem": "admit",
            "ending": "es",
            "pron": "Admites"
          },
          {
            "stem": "admit",
            "ending": "e",
            "pron": "Admite"
          },
          {
            "stem": "admit",
            "ending": "imos",
            "pron": "Admitimos"
          },
          {
            "stem": "admit",
            "ending": "em",
            "pron": "Admitem"
          },
          {
            "stem": "admit",
            "ending": "em",
            "pron": "Admitem"
          }
        ]
      },
      "past": {
        "forms": [
          {
            "stem": "admit",
            "ending": "i",
            "pron": "Admiti"
          },
          {
            "stem": "admit",
            "ending": "iste",
            "pron": "Admitiste"
          },
          {
            "stem": "admit",
            "ending": "iu",
            "pron": "Admitiu"
          },
          {
            "stem": "admit",
            "ending": "imos",
            "pron": "Admitimos"
          },
          {
            "stem": "admit",
            "ending": "iram",
            "pron": "Admitiram"
          },
          {
            "stem": "admit",
            "ending": "iram",
            "pron": "Admitiram"
          }
        ],
        "tail": "",
        "irregular": false
      },
      "future": {
        "forms": [
          {
            "stem": "admitir",
            "ending": "ei",
            "pron": "Admitirei"
          },
          {
            "stem": "admitir",
            "ending": "ás",
            "pron": "Admitiras"
          },
          {
            "stem": "admitir",
            "ending": "á",
            "pron": "Admitira"
          },
          {
            "stem": "admitir",
            "ending": "emos",
            "pron": "Admitiremos"
          },
          {
            "stem": "admitir",
            "ending": "ão",
            "pron": "Admitirowng"
          },
          {
            "stem": "admitir",
            "ending": "ão",
            "pron": "Admitirowng"
          }
        ],
        "tail": ""
      }
    }
  },
  "To deny": {
    "ru": {
      "present": {
        "forms": [
          {
            "stem": "отрица",
            "ending": "ю",
            "pron": "Otritsayu"
          },
          {
            "stem": "отрица",
            "ending": "ешь",
            "pron": "Otritsayesh"
          },
          {
            "stem": "отрица",
            "ending": "ет",
            "pron": "Otritsayet"
          },
          {
            "stem": "отрица",
            "ending": "ем",
            "pron": "Otritsayem"
          },
          {
            "stem": "отрица",
            "ending": "ете",
            "pron": "Otritsayete"
          },
          {
            "stem": "отрица",
            "ending": "ют",
            "pron": "Otritsayut"
          }
        ]
      },
      "past": {
        "forms": [
          {
            "stem": "отрица",
            "ending": "л",
            "pron": "Otritsal"
          },
          {
            "stem": "отрица",
            "ending": "ла",
            "pron": "Otritsala"
          },
          {
            "stem": "отрица",
            "ending": "ло",
            "pron": "Otritsalo"
          },
          {
            "stem": "отрица",
            "ending": "ли",
            "pron": "Otritsali"
          }
        ],
        "tail": ""
      },
      "future": {
        "forms": [
          {
            "stem": "буд",
            "ending": "у",
            "pron": "Budu otritsat"
          },
          {
            "stem": "буд",
            "ending": "ешь",
            "pron": "Budesh otritsat"
          },
          {
            "stem": "буд",
            "ending": "ет",
            "pron": "Budet otritsat"
          },
          {
            "stem": "буд",
            "ending": "ем",
            "pron": "Budem otritsat"
          },
          {
            "stem": "буд",
            "ending": "ете",
            "pron": "Budete otritsat"
          },
          {
            "stem": "буд",
            "ending": "ут",
            "pron": "Budut otritsat"
          }
        ],
        "tail": " отрицать"
      }
    },
    "pt": {
      "present": {
        "forms": [
          {
            "stem": "neg",
            "ending": "o",
            "pron": "Nego"
          },
          {
            "stem": "neg",
            "ending": "as",
            "pron": "Negas"
          },
          {
            "stem": "neg",
            "ending": "a",
            "pron": "Nega"
          },
          {
            "stem": "neg",
            "ending": "amos",
            "pron": "Negamos"
          },
          {
            "stem": "neg",
            "ending": "am",
            "pron": "Negam"
          },
          {
            "stem": "neg",
            "ending": "am",
            "pron": "Negam"
          }
        ]
      },
      "past": {
        "forms": [
          {
            "stem": "negu",
            "ending": "ei",
            "pron": "Nezhei"
          },
          {
            "stem": "neg",
            "ending": "aste",
            "pron": "Negaste"
          },
          {
            "stem": "neg",
            "ending": "ou",
            "pron": "Negou"
          },
          {
            "stem": "neg",
            "ending": "ámos",
            "pron": "Negamos"
          },
          {
            "stem": "neg",
            "ending": "aram",
            "pron": "Negaram"
          },
          {
            "stem": "neg",
            "ending": "aram",
            "pron": "Negaram"
          }
        ],
        "tail": "",
        "irregular": false
      },
      "future": {
        "forms": [
          {
            "stem": "negar",
            "ending": "ei",
            "pron": "Negarei"
          },
          {
            "stem": "negar",
            "ending": "ás",
            "pron": "Negaras"
          },
          {
            "stem": "negar",
            "ending": "á",
            "pron": "Negara"
          },
          {
            "stem": "negar",
            "ending": "emos",
            "pron": "Negaremos"
          },
          {
            "stem": "negar",
            "ending": "ão",
            "pron": "Negarowng"
          },
          {
            "stem": "negar",
            "ending": "ão",
            "pron": "Negarowng"
          }
        ],
        "tail": ""
      }
    }
  },
  "To relinquish": {
    "ru": {
      "present": {
        "forms": [
          {
            "stem": "отказыва",
            "ending": "юсь",
            "pron": "Otkazyvayus"
          },
          {
            "stem": "отказыва",
            "ending": "ешься",
            "pron": "Otkazyvayeshsya"
          },
          {
            "stem": "отказыва",
            "ending": "ется",
            "pron": "Otkazyvayetsya"
          },
          {
            "stem": "отказыва",
            "ending": "емся",
            "pron": "Otkazyvayemsya"
          },
          {
            "stem": "отказыва",
            "ending": "етесь",
            "pron": "Otkazyvayetes"
          },
          {
            "stem": "отказыва",
            "ending": "ются",
            "pron": "Otkazyvayutsya"
          }
        ]
      },
      "past": {
        "forms": [
          {
            "stem": "отказыва",
            "ending": "лся",
            "pron": "Otkazyvalsya"
          },
          {
            "stem": "отказыва",
            "ending": "лась",
            "pron": "Otkazyvalas"
          },
          {
            "stem": "отказыва",
            "ending": "лось",
            "pron": "Otkazyvalos"
          },
          {
            "stem": "отказыва",
            "ending": "лись",
            "pron": "Otkazyvalis"
          }
        ],
        "tail": ""
      },
      "future": {
        "forms": [
          {
            "stem": "буд",
            "ending": "у",
            "pron": "Budu otkazyvatsya"
          },
          {
            "stem": "буд",
            "ending": "ешь",
            "pron": "Budesh otkazyvatsya"
          },
          {
            "stem": "буд",
            "ending": "ет",
            "pron": "Budet otkazyvatsya"
          },
          {
            "stem": "буд",
            "ending": "ем",
            "pron": "Budem otkazyvatsya"
          },
          {
            "stem": "буд",
            "ending": "ете",
            "pron": "Budete otkazyvatsya"
          },
          {
            "stem": "буд",
            "ending": "ут",
            "pron": "Budut otkazyvatsya"
          }
        ],
        "tail": " отказываться"
      }
    },
    "pt": {
      "present": {
        "forms": [
          {
            "stem": "renunci",
            "ending": "o",
            "pron": "Henuncio"
          },
          {
            "stem": "renunci",
            "ending": "as",
            "pron": "Henuncias"
          },
          {
            "stem": "renunci",
            "ending": "a",
            "pron": "Henuncia"
          },
          {
            "stem": "renunci",
            "ending": "amos",
            "pron": "Henunciamos"
          },
          {
            "stem": "renunci",
            "ending": "am",
            "pron": "Henunciam"
          },
          {
            "stem": "renunci",
            "ending": "am",
            "pron": "Henunciam"
          }
        ]
      },
      "past": {
        "forms": [
          {
            "stem": "renunci",
            "ending": "ei",
            "pron": "Henunciei"
          },
          {
            "stem": "renunci",
            "ending": "aste",
            "pron": "Henunciaste"
          },
          {
            "stem": "renunci",
            "ending": "ou",
            "pron": "Henunciou"
          },
          {
            "stem": "renunci",
            "ending": "ámos",
            "pron": "Henunciamos"
          },
          {
            "stem": "renunci",
            "ending": "aram",
            "pron": "Henunciaram"
          },
          {
            "stem": "renunci",
            "ending": "aram",
            "pron": "Henunciaram"
          }
        ],
        "tail": "",
        "irregular": false
      },
      "future": {
        "forms": [
          {
            "stem": "renunciar",
            "ending": "ei",
            "pron": "Henunciarei"
          },
          {
            "stem": "renunciar",
            "ending": "ás",
            "pron": "Henunciaras"
          },
          {
            "stem": "renunciar",
            "ending": "á",
            "pron": "Henunciara"
          },
          {
            "stem": "renunciar",
            "ending": "emos",
            "pron": "Henunciaremos"
          },
          {
            "stem": "renunciar",
            "ending": "ão",
            "pron": "Henunciarowng"
          },
          {
            "stem": "renunciar",
            "ending": "ão",
            "pron": "Henunciarowng"
          }
        ],
        "tail": ""
      }
    }
  },
  "To undermine": {
    "ru": {
      "present": {
        "forms": [
          {
            "stem": "подрыва",
            "ending": "ю",
            "pron": "Podryvayu"
          },
          {
            "stem": "подрыва",
            "ending": "ешь",
            "pron": "Podryvayesh"
          },
          {
            "stem": "подрыва",
            "ending": "ет",
            "pron": "Podryvayet"
          },
          {
            "stem": "подрыва",
            "ending": "ем",
            "pron": "Podryvayem"
          },
          {
            "stem": "подрыва",
            "ending": "ете",
            "pron": "Podryvayete"
          },
          {
            "stem": "подрыва",
            "ending": "ют",
            "pron": "Podryvayut"
          }
        ]
      },
      "past": {
        "forms": [
          {
            "stem": "подрыва",
            "ending": "л",
            "pron": "Podryval"
          },
          {
            "stem": "подрыва",
            "ending": "ла",
            "pron": "Podryvala"
          },
          {
            "stem": "подрыва",
            "ending": "ло",
            "pron": "Podryvalo"
          },
          {
            "stem": "подрыва",
            "ending": "ли",
            "pron": "Podryvali"
          }
        ],
        "tail": ""
      },
      "future": {
        "forms": [
          {
            "stem": "буд",
            "ending": "у",
            "pron": "Budu podryvat"
          },
          {
            "stem": "буд",
            "ending": "ешь",
            "pron": "Budesh podryvat"
          },
          {
            "stem": "буд",
            "ending": "ет",
            "pron": "Budet podryvat"
          },
          {
            "stem": "буд",
            "ending": "ем",
            "pron": "Budem podryvat"
          },
          {
            "stem": "буд",
            "ending": "ете",
            "pron": "Budete podryvat"
          },
          {
            "stem": "буд",
            "ending": "ут",
            "pron": "Budut podryvat"
          }
        ],
        "tail": " подрывать"
      }
    },
    "pt": {
      "present": {
        "forms": [
          {
            "stem": "min",
            "ending": "o",
            "pron": "Mino"
          },
          {
            "stem": "min",
            "ending": "as",
            "pron": "Minas"
          },
          {
            "stem": "min",
            "ending": "a",
            "pron": "Mina"
          },
          {
            "stem": "min",
            "ending": "amos",
            "pron": "Minamos"
          },
          {
            "stem": "min",
            "ending": "am",
            "pron": "Minam"
          },
          {
            "stem": "min",
            "ending": "am",
            "pron": "Minam"
          }
        ]
      },
      "past": {
        "forms": [
          {
            "stem": "min",
            "ending": "ei",
            "pron": "Minei"
          },
          {
            "stem": "min",
            "ending": "aste",
            "pron": "Minaste"
          },
          {
            "stem": "min",
            "ending": "ou",
            "pron": "Minou"
          },
          {
            "stem": "min",
            "ending": "ámos",
            "pron": "Minamos"
          },
          {
            "stem": "min",
            "ending": "aram",
            "pron": "Minaram"
          },
          {
            "stem": "min",
            "ending": "aram",
            "pron": "Minaram"
          }
        ],
        "tail": "",
        "irregular": false
      },
      "future": {
        "forms": [
          {
            "stem": "minar",
            "ending": "ei",
            "pron": "Minarei"
          },
          {
            "stem": "minar",
            "ending": "ás",
            "pron": "Minaras"
          },
          {
            "stem": "minar",
            "ending": "á",
            "pron": "Minara"
          },
          {
            "stem": "minar",
            "ending": "emos",
            "pron": "Minaremos"
          },
          {
            "stem": "minar",
            "ending": "ão",
            "pron": "Minarowng"
          },
          {
            "stem": "minar",
            "ending": "ão",
            "pron": "Minarowng"
          }
        ],
        "tail": ""
      }
    }
  },
  "To reconcile": {
    "ru": {
      "present": {
        "forms": [
          {
            "stem": "примиря",
            "ending": "ю",
            "pron": "Primiryayu"
          },
          {
            "stem": "примиря",
            "ending": "ешь",
            "pron": "Primiryayesh"
          },
          {
            "stem": "примиря",
            "ending": "ет",
            "pron": "Primiryayet"
          },
          {
            "stem": "примиря",
            "ending": "ем",
            "pron": "Primiryayem"
          },
          {
            "stem": "примиря",
            "ending": "ете",
            "pron": "Primiryayete"
          },
          {
            "stem": "примиря",
            "ending": "ют",
            "pron": "Primiryayut"
          }
        ]
      },
      "past": {
        "forms": [
          {
            "stem": "примиря",
            "ending": "л",
            "pron": "Primiryal"
          },
          {
            "stem": "примиря",
            "ending": "ла",
            "pron": "Primiryala"
          },
          {
            "stem": "примиря",
            "ending": "ло",
            "pron": "Primiryalo"
          },
          {
            "stem": "примиря",
            "ending": "ли",
            "pron": "Primiryali"
          }
        ],
        "tail": ""
      },
      "future": {
        "forms": [
          {
            "stem": "буд",
            "ending": "у",
            "pron": "Budu primiryat"
          },
          {
            "stem": "буд",
            "ending": "ешь",
            "pron": "Budesh primiryat"
          },
          {
            "stem": "буд",
            "ending": "ет",
            "pron": "Budet primiryat"
          },
          {
            "stem": "буд",
            "ending": "ем",
            "pron": "Budem primiryat"
          },
          {
            "stem": "буд",
            "ending": "ете",
            "pron": "Budete primiryat"
          },
          {
            "stem": "буд",
            "ending": "ут",
            "pron": "Budut primiryat"
          }
        ],
        "tail": " примирять"
      }
    },
    "pt": {
      "present": {
        "forms": [
          {
            "stem": "reconcili",
            "ending": "o",
            "pron": "Heconcilio"
          },
          {
            "stem": "reconcili",
            "ending": "as",
            "pron": "Heconcilias"
          },
          {
            "stem": "reconcili",
            "ending": "a",
            "pron": "Heconcilia"
          },
          {
            "stem": "reconcili",
            "ending": "amos",
            "pron": "Heconciliamos"
          },
          {
            "stem": "reconcili",
            "ending": "am",
            "pron": "Heconciliam"
          },
          {
            "stem": "reconcili",
            "ending": "am",
            "pron": "Heconciliam"
          }
        ]
      },
      "past": {
        "forms": [
          {
            "stem": "reconcili",
            "ending": "ei",
            "pron": "Heconciliei"
          },
          {
            "stem": "reconcili",
            "ending": "aste",
            "pron": "Heconciliaste"
          },
          {
            "stem": "reconcili",
            "ending": "ou",
            "pron": "Heconciliou"
          },
          {
            "stem": "reconcili",
            "ending": "ámos",
            "pron": "Heconciliamos"
          },
          {
            "stem": "reconcili",
            "ending": "aram",
            "pron": "Heconciliaram"
          },
          {
            "stem": "reconcili",
            "ending": "aram",
            "pron": "Heconciliaram"
          }
        ],
        "tail": "",
        "irregular": false
      },
      "future": {
        "forms": [
          {
            "stem": "reconciliar",
            "ending": "ei",
            "pron": "Heconciliarei"
          },
          {
            "stem": "reconciliar",
            "ending": "ás",
            "pron": "Heconciliaras"
          },
          {
            "stem": "reconciliar",
            "ending": "á",
            "pron": "Heconciliara"
          },
          {
            "stem": "reconciliar",
            "ending": "emos",
            "pron": "Heconciliaremos"
          },
          {
            "stem": "reconciliar",
            "ending": "ão",
            "pron": "Heconciliarowng"
          },
          {
            "stem": "reconciliar",
            "ending": "ão",
            "pron": "Heconciliarowng"
          }
        ],
        "tail": ""
      }
    }
  },
  "To alleviate": {
    "ru": {
      "present": {
        "forms": [
          {
            "stem": "облегча",
            "ending": "ю",
            "pron": "Oblegchayu"
          },
          {
            "stem": "облегча",
            "ending": "ешь",
            "pron": "Oblegchayesh"
          },
          {
            "stem": "облегча",
            "ending": "ет",
            "pron": "Oblegchayet"
          },
          {
            "stem": "облегча",
            "ending": "ем",
            "pron": "Oblegchayem"
          },
          {
            "stem": "облегча",
            "ending": "ете",
            "pron": "Oblegchayete"
          },
          {
            "stem": "облегча",
            "ending": "ют",
            "pron": "Oblegchayut"
          }
        ]
      },
      "past": {
        "forms": [
          {
            "stem": "облегча",
            "ending": "л",
            "pron": "Oblegchal"
          },
          {
            "stem": "облегча",
            "ending": "ла",
            "pron": "Oblegchala"
          },
          {
            "stem": "облегча",
            "ending": "ло",
            "pron": "Oblegchalo"
          },
          {
            "stem": "облегча",
            "ending": "ли",
            "pron": "Oblegchali"
          }
        ],
        "tail": ""
      },
      "future": {
        "forms": [
          {
            "stem": "буд",
            "ending": "у",
            "pron": "Budu oblegchat"
          },
          {
            "stem": "буд",
            "ending": "ешь",
            "pron": "Budesh oblegchat"
          },
          {
            "stem": "буд",
            "ending": "ет",
            "pron": "Budet oblegchat"
          },
          {
            "stem": "буд",
            "ending": "ем",
            "pron": "Budem oblegchat"
          },
          {
            "stem": "буд",
            "ending": "ете",
            "pron": "Budete oblegchat"
          },
          {
            "stem": "буд",
            "ending": "ут",
            "pron": "Budut oblegchat"
          }
        ],
        "tail": " облегчать"
      }
    },
    "pt": {
      "present": {
        "forms": [
          {
            "stem": "alivi",
            "ending": "o",
            "pron": "Alivio"
          },
          {
            "stem": "alivi",
            "ending": "as",
            "pron": "Alivias"
          },
          {
            "stem": "alivi",
            "ending": "a",
            "pron": "Alivia"
          },
          {
            "stem": "alivi",
            "ending": "amos",
            "pron": "Aliviamos"
          },
          {
            "stem": "alivi",
            "ending": "am",
            "pron": "Aliviam"
          },
          {
            "stem": "alivi",
            "ending": "am",
            "pron": "Aliviam"
          }
        ]
      },
      "past": {
        "forms": [
          {
            "stem": "alivi",
            "ending": "ei",
            "pron": "Aliviei"
          },
          {
            "stem": "alivi",
            "ending": "aste",
            "pron": "Aliviaste"
          },
          {
            "stem": "alivi",
            "ending": "ou",
            "pron": "Aliviou"
          },
          {
            "stem": "alivi",
            "ending": "ámos",
            "pron": "Aliviamos"
          },
          {
            "stem": "alivi",
            "ending": "aram",
            "pron": "Aliviaram"
          },
          {
            "stem": "alivi",
            "ending": "aram",
            "pron": "Aliviaram"
          }
        ],
        "tail": "",
        "irregular": false
      },
      "future": {
        "forms": [
          {
            "stem": "aliviar",
            "ending": "ei",
            "pron": "Aliviarei"
          },
          {
            "stem": "aliviar",
            "ending": "ás",
            "pron": "Aliviaras"
          },
          {
            "stem": "aliviar",
            "ending": "á",
            "pron": "Aliviara"
          },
          {
            "stem": "aliviar",
            "ending": "emos",
            "pron": "Aliviaremos"
          },
          {
            "stem": "aliviar",
            "ending": "ão",
            "pron": "Aliviarowng"
          },
          {
            "stem": "aliviar",
            "ending": "ão",
            "pron": "Aliviarowng"
          }
        ],
        "tail": ""
      }
    }
  },
  "To perceive": {
    "ru": {
      "present": {
        "forms": [
          {
            "stem": "воспринима",
            "ending": "ю",
            "pron": "Vosprinimayu"
          },
          {
            "stem": "воспринима",
            "ending": "ешь",
            "pron": "Vosprinimayesh"
          },
          {
            "stem": "воспринима",
            "ending": "ет",
            "pron": "Vosprinimayet"
          },
          {
            "stem": "воспринима",
            "ending": "ем",
            "pron": "Vosprinimayem"
          },
          {
            "stem": "воспринима",
            "ending": "ете",
            "pron": "Vosprinimayete"
          },
          {
            "stem": "воспринима",
            "ending": "ют",
            "pron": "Vosprinimayut"
          }
        ]
      },
      "past": {
        "forms": [
          {
            "stem": "воспринима",
            "ending": "л",
            "pron": "Vosprinimal"
          },
          {
            "stem": "воспринима",
            "ending": "ла",
            "pron": "Vosprinimala"
          },
          {
            "stem": "воспринима",
            "ending": "ло",
            "pron": "Vosprinimalo"
          },
          {
            "stem": "воспринима",
            "ending": "ли",
            "pron": "Vosprinimali"
          }
        ],
        "tail": ""
      },
      "future": {
        "forms": [
          {
            "stem": "буд",
            "ending": "у",
            "pron": "Budu vosprinimat"
          },
          {
            "stem": "буд",
            "ending": "ешь",
            "pron": "Budesh vosprinimat"
          },
          {
            "stem": "буд",
            "ending": "ет",
            "pron": "Budet vosprinimat"
          },
          {
            "stem": "буд",
            "ending": "ем",
            "pron": "Budem vosprinimat"
          },
          {
            "stem": "буд",
            "ending": "ете",
            "pron": "Budete vosprinimat"
          },
          {
            "stem": "буд",
            "ending": "ут",
            "pron": "Budut vosprinimat"
          }
        ],
        "tail": " воспринимать"
      }
    },
    "pt": {
      "present": {
        "forms": [
          {
            "stem": "perceb",
            "ending": "o",
            "pron": "Percebo"
          },
          {
            "stem": "perceb",
            "ending": "es",
            "pron": "Percebes"
          },
          {
            "stem": "perceb",
            "ending": "e",
            "pron": "Percebe"
          },
          {
            "stem": "perceb",
            "ending": "emos",
            "pron": "Percebemos"
          },
          {
            "stem": "perceb",
            "ending": "em",
            "pron": "Percebem"
          },
          {
            "stem": "perceb",
            "ending": "em",
            "pron": "Percebem"
          }
        ]
      },
      "past": {
        "forms": [
          {
            "stem": "perceb",
            "ending": "i",
            "pron": "Percebi"
          },
          {
            "stem": "perceb",
            "ending": "este",
            "pron": "Percebeste"
          },
          {
            "stem": "perceb",
            "ending": "eu",
            "pron": "Percebeu"
          },
          {
            "stem": "perceb",
            "ending": "emos",
            "pron": "Percebemos"
          },
          {
            "stem": "perceb",
            "ending": "eram",
            "pron": "Perceberam"
          },
          {
            "stem": "perceb",
            "ending": "eram",
            "pron": "Perceberam"
          }
        ],
        "tail": "",
        "irregular": false
      },
      "future": {
        "forms": [
          {
            "stem": "perceber",
            "ending": "ei",
            "pron": "Perceberei"
          },
          {
            "stem": "perceber",
            "ending": "ás",
            "pron": "Perceberas"
          },
          {
            "stem": "perceber",
            "ending": "á",
            "pron": "Percebera"
          },
          {
            "stem": "perceber",
            "ending": "emos",
            "pron": "Perceberemos"
          },
          {
            "stem": "perceber",
            "ending": "ão",
            "pron": "Perceberowng"
          },
          {
            "stem": "perceber",
            "ending": "ão",
            "pron": "Perceberowng"
          }
        ],
        "tail": ""
      }
    }
  },
  "To overwhelm": {
    "ru": {
      "present": {
        "forms": [
          {
            "stem": "ошеломля",
            "ending": "ю",
            "pron": "Oshelomlyayu"
          },
          {
            "stem": "ошеломля",
            "ending": "ешь",
            "pron": "Oshelomlyayesh"
          },
          {
            "stem": "ошеломля",
            "ending": "ет",
            "pron": "Oshelomlyayet"
          },
          {
            "stem": "ошеломля",
            "ending": "ем",
            "pron": "Oshelomlyayem"
          },
          {
            "stem": "ошеломля",
            "ending": "ете",
            "pron": "Oshelomlyayete"
          },
          {
            "stem": "ошеломля",
            "ending": "ют",
            "pron": "Oshelomlyayut"
          }
        ]
      },
      "past": {
        "forms": [
          {
            "stem": "ошеломля",
            "ending": "л",
            "pron": "Oshelomlyal"
          },
          {
            "stem": "ошеломля",
            "ending": "ла",
            "pron": "Oshelomlyala"
          },
          {
            "stem": "ошеломля",
            "ending": "ло",
            "pron": "Oshelomlyalo"
          },
          {
            "stem": "ошеломля",
            "ending": "ли",
            "pron": "Oshelomlyali"
          }
        ],
        "tail": ""
      },
      "future": {
        "forms": [
          {
            "stem": "буд",
            "ending": "у",
            "pron": "Budu oshelomlyat"
          },
          {
            "stem": "буд",
            "ending": "ешь",
            "pron": "Budesh oshelomlyat"
          },
          {
            "stem": "буд",
            "ending": "ет",
            "pron": "Budet oshelomlyat"
          },
          {
            "stem": "буд",
            "ending": "ем",
            "pron": "Budem oshelomlyat"
          },
          {
            "stem": "буд",
            "ending": "ете",
            "pron": "Budete oshelomlyat"
          },
          {
            "stem": "буд",
            "ending": "ут",
            "pron": "Budut oshelomlyat"
          }
        ],
        "tail": " ошеломлять"
      }
    },
    "pt": {
      "present": {
        "forms": [
          {
            "stem": "sobrecarreg",
            "ending": "o",
            "pron": "Sobrecahego"
          },
          {
            "stem": "sobrecarreg",
            "ending": "as",
            "pron": "Sobrecahegas"
          },
          {
            "stem": "sobrecarreg",
            "ending": "a",
            "pron": "Sobrecahega"
          },
          {
            "stem": "sobrecarreg",
            "ending": "amos",
            "pron": "Sobrecahegamos"
          },
          {
            "stem": "sobrecarreg",
            "ending": "am",
            "pron": "Sobrecahegam"
          },
          {
            "stem": "sobrecarreg",
            "ending": "am",
            "pron": "Sobrecahegam"
          }
        ]
      },
      "past": {
        "forms": [
          {
            "stem": "sobrecarregu",
            "ending": "ei",
            "pron": "Sobrecahezhei"
          },
          {
            "stem": "sobrecarreg",
            "ending": "aste",
            "pron": "Sobrecahegaste"
          },
          {
            "stem": "sobrecarreg",
            "ending": "ou",
            "pron": "Sobrecahegou"
          },
          {
            "stem": "sobrecarreg",
            "ending": "ámos",
            "pron": "Sobrecahegamos"
          },
          {
            "stem": "sobrecarreg",
            "ending": "aram",
            "pron": "Sobrecahegaram"
          },
          {
            "stem": "sobrecarreg",
            "ending": "aram",
            "pron": "Sobrecahegaram"
          }
        ],
        "tail": "",
        "irregular": false
      },
      "future": {
        "forms": [
          {
            "stem": "sobrecarregar",
            "ending": "ei",
            "pron": "Sobrecahegarei"
          },
          {
            "stem": "sobrecarregar",
            "ending": "ás",
            "pron": "Sobrecahegaras"
          },
          {
            "stem": "sobrecarregar",
            "ending": "á",
            "pron": "Sobrecahegara"
          },
          {
            "stem": "sobrecarregar",
            "ending": "emos",
            "pron": "Sobrecahegaremos"
          },
          {
            "stem": "sobrecarregar",
            "ending": "ão",
            "pron": "Sobrecahegarowng"
          },
          {
            "stem": "sobrecarregar",
            "ending": "ão",
            "pron": "Sobrecahegarowng"
          }
        ],
        "tail": ""
      }
    }
  },
  "To scrutinize": {
    "ru": {
      "present": {
        "forms": [
          {
            "stem": "изуча",
            "ending": "ю",
            "pron": "Izuchayu doskonalno"
          },
          {
            "stem": "изуча",
            "ending": "ешь",
            "pron": "Izuchayesh doskonalno"
          },
          {
            "stem": "изуча",
            "ending": "ет",
            "pron": "Izuchayet doskonalno"
          },
          {
            "stem": "изуча",
            "ending": "ем",
            "pron": "Izuchayem doskonalno"
          },
          {
            "stem": "изуча",
            "ending": "ете",
            "pron": "Izuchayete doskonalno"
          },
          {
            "stem": "изуча",
            "ending": "ют",
            "pron": "Izuchayut doskonalno"
          }
        ],
        "tail": " досконально"
      },
      "past": {
        "forms": [
          {
            "stem": "изуча",
            "ending": "л",
            "pron": "Izuchal doskonalno"
          },
          {
            "stem": "изуча",
            "ending": "ла",
            "pron": "Izuchala doskonalno"
          },
          {
            "stem": "изуча",
            "ending": "ло",
            "pron": "Izuchalo doskonalno"
          },
          {
            "stem": "изуча",
            "ending": "ли",
            "pron": "Izuchali doskonalno"
          }
        ],
        "tail": " досконально"
      },
      "future": {
        "forms": [
          {
            "stem": "буд",
            "ending": "у",
            "pron": "Budu izuchat doskonalno"
          },
          {
            "stem": "буд",
            "ending": "ешь",
            "pron": "Budesh izuchat doskonalno"
          },
          {
            "stem": "буд",
            "ending": "ет",
            "pron": "Budet izuchat doskonalno"
          },
          {
            "stem": "буд",
            "ending": "ем",
            "pron": "Budem izuchat doskonalno"
          },
          {
            "stem": "буд",
            "ending": "ете",
            "pron": "Budete izuchat doskonalno"
          },
          {
            "stem": "буд",
            "ending": "ут",
            "pron": "Budut izuchat doskonalno"
          }
        ],
        "tail": " изучать досконально"
      }
    },
    "pt": {
      "present": {
        "forms": [
          {
            "stem": "examin",
            "ending": "o",
            "pron": "Eshamino minuciosamente"
          },
          {
            "stem": "examin",
            "ending": "as",
            "pron": "Eshaminas minuciosamente"
          },
          {
            "stem": "examin",
            "ending": "a",
            "pron": "Eshamina minuciosamente"
          },
          {
            "stem": "examin",
            "ending": "amos",
            "pron": "Eshaminamos minuciosamente"
          },
          {
            "stem": "examin",
            "ending": "am",
            "pron": "Eshaminam minuciosamente"
          },
          {
            "stem": "examin",
            "ending": "am",
            "pron": "Eshaminam minuciosamente"
          }
        ],
        "tail": " minuciosamente"
      },
      "past": {
        "forms": [
          {
            "stem": "examin",
            "ending": "ei",
            "pron": "Eshaminei minuciosamente"
          },
          {
            "stem": "examin",
            "ending": "aste",
            "pron": "Eshaminaste minuciosamente"
          },
          {
            "stem": "examin",
            "ending": "ou",
            "pron": "Eshaminou minuciosamente"
          },
          {
            "stem": "examin",
            "ending": "ámos",
            "pron": "Eshaminamos minuciosamente"
          },
          {
            "stem": "examin",
            "ending": "aram",
            "pron": "Eshaminaram minuciosamente"
          },
          {
            "stem": "examin",
            "ending": "aram",
            "pron": "Eshaminaram minuciosamente"
          }
        ],
        "tail": " minuciosamente",
        "irregular": false
      },
      "future": {
        "forms": [
          {
            "stem": "examinar",
            "ending": "ei",
            "pron": "Eshaminarei minuciosamente"
          },
          {
            "stem": "examinar",
            "ending": "ás",
            "pron": "Eshaminaras minuciosamente"
          },
          {
            "stem": "examinar",
            "ending": "á",
            "pron": "Eshaminara minuciosamente"
          },
          {
            "stem": "examinar",
            "ending": "emos",
            "pron": "Eshaminaremos minuciosamente"
          },
          {
            "stem": "examinar",
            "ending": "ão",
            "pron": "Eshaminarowng minuciosamente"
          },
          {
            "stem": "examinar",
            "ending": "ão",
            "pron": "Eshaminarowng minuciosamente"
          }
        ],
        "tail": " minuciosamente"
      }
    }
  },
  "To hinder": {
    "ru": {
      "present": {
        "forms": [
          {
            "stem": "препятству",
            "ending": "ю",
            "pron": "Prepyatstvuyu"
          },
          {
            "stem": "препятству",
            "ending": "ешь",
            "pron": "Prepyatstvuyesh"
          },
          {
            "stem": "препятству",
            "ending": "ет",
            "pron": "Prepyatstvuyet"
          },
          {
            "stem": "препятству",
            "ending": "ем",
            "pron": "Prepyatstvuyem"
          },
          {
            "stem": "препятству",
            "ending": "ете",
            "pron": "Prepyatstvuyete"
          },
          {
            "stem": "препятству",
            "ending": "ют",
            "pron": "Prepyatstvuyut"
          }
        ]
      },
      "past": {
        "forms": [
          {
            "stem": "препятствова",
            "ending": "л",
            "pron": "Prepyatstvoval"
          },
          {
            "stem": "препятствова",
            "ending": "ла",
            "pron": "Prepyatstvovala"
          },
          {
            "stem": "препятствова",
            "ending": "ло",
            "pron": "Prepyatstvovalo"
          },
          {
            "stem": "препятствова",
            "ending": "ли",
            "pron": "Prepyatstvovali"
          }
        ],
        "tail": ""
      },
      "future": {
        "forms": [
          {
            "stem": "буд",
            "ending": "у",
            "pron": "Budu prepyatstvovat"
          },
          {
            "stem": "буд",
            "ending": "ешь",
            "pron": "Budesh prepyatstvovat"
          },
          {
            "stem": "буд",
            "ending": "ет",
            "pron": "Budet prepyatstvovat"
          },
          {
            "stem": "буд",
            "ending": "ем",
            "pron": "Budem prepyatstvovat"
          },
          {
            "stem": "буд",
            "ending": "ете",
            "pron": "Budete prepyatstvovat"
          },
          {
            "stem": "буд",
            "ending": "ут",
            "pron": "Budut prepyatstvovat"
          }
        ],
        "tail": " препятствовать"
      }
    },
    "pt": {
      "present": {
        "forms": [
          {
            "stem": "impe",
            "ending": "ço",
            "pron": "Impeso"
          },
          {
            "stem": "imped",
            "ending": "es",
            "pron": "Impedes"
          },
          {
            "stem": "imped",
            "ending": "e",
            "pron": "Impede"
          },
          {
            "stem": "imped",
            "ending": "imos",
            "pron": "Impedimos"
          },
          {
            "stem": "imped",
            "ending": "em",
            "pron": "Impedem"
          },
          {
            "stem": "imped",
            "ending": "em",
            "pron": "Impedem"
          }
        ]
      },
      "past": {
        "forms": [
          {
            "stem": "imped",
            "ending": "i",
            "pron": "Impedi"
          },
          {
            "stem": "imped",
            "ending": "iste",
            "pron": "Impediste"
          },
          {
            "stem": "imped",
            "ending": "iu",
            "pron": "Impediu"
          },
          {
            "stem": "imped",
            "ending": "imos",
            "pron": "Impedimos"
          },
          {
            "stem": "imped",
            "ending": "iram",
            "pron": "Impediram"
          },
          {
            "stem": "imped",
            "ending": "iram",
            "pron": "Impediram"
          }
        ],
        "tail": "",
        "irregular": false
      },
      "future": {
        "forms": [
          {
            "stem": "impedir",
            "ending": "ei",
            "pron": "Impedirei"
          },
          {
            "stem": "impedir",
            "ending": "ás",
            "pron": "Impediras"
          },
          {
            "stem": "impedir",
            "ending": "á",
            "pron": "Impedira"
          },
          {
            "stem": "impedir",
            "ending": "emos",
            "pron": "Impediremos"
          },
          {
            "stem": "impedir",
            "ending": "ão",
            "pron": "Impedirowng"
          },
          {
            "stem": "impedir",
            "ending": "ão",
            "pron": "Impedirowng"
          }
        ],
        "tail": ""
      }
    }
  },
  "To exacerbate": {
    "ru": {
      "present": {
        "forms": [
          {
            "stem": "усугубля",
            "ending": "ю",
            "pron": "Usugublyayu"
          },
          {
            "stem": "усугубля",
            "ending": "ешь",
            "pron": "Usugublyayesh"
          },
          {
            "stem": "усугубля",
            "ending": "ет",
            "pron": "Usugublyayet"
          },
          {
            "stem": "усугубля",
            "ending": "ем",
            "pron": "Usugublyayem"
          },
          {
            "stem": "усугубля",
            "ending": "ете",
            "pron": "Usugublyayete"
          },
          {
            "stem": "усугубля",
            "ending": "ют",
            "pron": "Usugublyayut"
          }
        ]
      },
      "past": {
        "forms": [
          {
            "stem": "усугубля",
            "ending": "л",
            "pron": "Usugublyal"
          },
          {
            "stem": "усугубля",
            "ending": "ла",
            "pron": "Usugublyala"
          },
          {
            "stem": "усугубля",
            "ending": "ло",
            "pron": "Usugublyalo"
          },
          {
            "stem": "усугубля",
            "ending": "ли",
            "pron": "Usugublyali"
          }
        ],
        "tail": ""
      },
      "future": {
        "forms": [
          {
            "stem": "буд",
            "ending": "у",
            "pron": "Budu usugublyat"
          },
          {
            "stem": "буд",
            "ending": "ешь",
            "pron": "Budesh usugublyat"
          },
          {
            "stem": "буд",
            "ending": "ет",
            "pron": "Budet usugublyat"
          },
          {
            "stem": "буд",
            "ending": "ем",
            "pron": "Budem usugublyat"
          },
          {
            "stem": "буд",
            "ending": "ете",
            "pron": "Budete usugublyat"
          },
          {
            "stem": "буд",
            "ending": "ут",
            "pron": "Budut usugublyat"
          }
        ],
        "tail": " усугублять"
      }
    },
    "pt": {
      "present": {
        "forms": [
          {
            "stem": "exacerb",
            "ending": "o",
            "pron": "Eshacerbo"
          },
          {
            "stem": "exacerb",
            "ending": "as",
            "pron": "Eshacerbas"
          },
          {
            "stem": "exacerb",
            "ending": "a",
            "pron": "Eshacerba"
          },
          {
            "stem": "exacerb",
            "ending": "amos",
            "pron": "Eshacerbamos"
          },
          {
            "stem": "exacerb",
            "ending": "am",
            "pron": "Eshacerbam"
          },
          {
            "stem": "exacerb",
            "ending": "am",
            "pron": "Eshacerbam"
          }
        ]
      },
      "past": {
        "forms": [
          {
            "stem": "exacerb",
            "ending": "ei",
            "pron": "Eshacerbei"
          },
          {
            "stem": "exacerb",
            "ending": "aste",
            "pron": "Eshacerbaste"
          },
          {
            "stem": "exacerb",
            "ending": "ou",
            "pron": "Eshacerbou"
          },
          {
            "stem": "exacerb",
            "ending": "ámos",
            "pron": "Eshacerbamos"
          },
          {
            "stem": "exacerb",
            "ending": "aram",
            "pron": "Eshacerbaram"
          },
          {
            "stem": "exacerb",
            "ending": "aram",
            "pron": "Eshacerbaram"
          }
        ],
        "tail": "",
        "irregular": false
      },
      "future": {
        "forms": [
          {
            "stem": "exacerbar",
            "ending": "ei",
            "pron": "Eshacerbarei"
          },
          {
            "stem": "exacerbar",
            "ending": "ás",
            "pron": "Eshacerbaras"
          },
          {
            "stem": "exacerbar",
            "ending": "á",
            "pron": "Eshacerbara"
          },
          {
            "stem": "exacerbar",
            "ending": "emos",
            "pron": "Eshacerbaremos"
          },
          {
            "stem": "exacerbar",
            "ending": "ão",
            "pron": "Eshacerbarowng"
          },
          {
            "stem": "exacerbar",
            "ending": "ão",
            "pron": "Eshacerbarowng"
          }
        ],
        "tail": ""
      }
    }
  },
  "To alienate": {
    "ru": {
      "present": {
        "forms": [
          {
            "stem": "отчужда",
            "ending": "ю",
            "pron": "Otchuzhdayu"
          },
          {
            "stem": "отчужда",
            "ending": "ешь",
            "pron": "Otchuzhdayesh"
          },
          {
            "stem": "отчужда",
            "ending": "ет",
            "pron": "Otchuzhdayet"
          },
          {
            "stem": "отчужда",
            "ending": "ем",
            "pron": "Otchuzhdayem"
          },
          {
            "stem": "отчужда",
            "ending": "ете",
            "pron": "Otchuzhdayete"
          },
          {
            "stem": "отчужда",
            "ending": "ют",
            "pron": "Otchuzhdayut"
          }
        ]
      },
      "past": {
        "forms": [
          {
            "stem": "отчужда",
            "ending": "л",
            "pron": "Otchuzhdal"
          },
          {
            "stem": "отчужда",
            "ending": "ла",
            "pron": "Otchuzhdala"
          },
          {
            "stem": "отчужда",
            "ending": "ло",
            "pron": "Otchuzhdalo"
          },
          {
            "stem": "отчужда",
            "ending": "ли",
            "pron": "Otchuzhdali"
          }
        ],
        "tail": ""
      },
      "future": {
        "forms": [
          {
            "stem": "буд",
            "ending": "у",
            "pron": "Budu otchuzhdat"
          },
          {
            "stem": "буд",
            "ending": "ешь",
            "pron": "Budesh otchuzhdat"
          },
          {
            "stem": "буд",
            "ending": "ет",
            "pron": "Budet otchuzhdat"
          },
          {
            "stem": "буд",
            "ending": "ем",
            "pron": "Budem otchuzhdat"
          },
          {
            "stem": "буд",
            "ending": "ете",
            "pron": "Budete otchuzhdat"
          },
          {
            "stem": "буд",
            "ending": "ут",
            "pron": "Budut otchuzhdat"
          }
        ],
        "tail": " отчуждать"
      }
    },
    "pt": {
      "present": {
        "forms": [
          {
            "stem": "alien",
            "ending": "o",
            "pron": "Alieno"
          },
          {
            "stem": "alien",
            "ending": "as",
            "pron": "Alienas"
          },
          {
            "stem": "alien",
            "ending": "a",
            "pron": "Aliena"
          },
          {
            "stem": "alien",
            "ending": "amos",
            "pron": "Alienamos"
          },
          {
            "stem": "alien",
            "ending": "am",
            "pron": "Alienam"
          },
          {
            "stem": "alien",
            "ending": "am",
            "pron": "Alienam"
          }
        ]
      },
      "past": {
        "forms": [
          {
            "stem": "alien",
            "ending": "ei",
            "pron": "Alienei"
          },
          {
            "stem": "alien",
            "ending": "aste",
            "pron": "Alienaste"
          },
          {
            "stem": "alien",
            "ending": "ou",
            "pron": "Alienou"
          },
          {
            "stem": "alien",
            "ending": "ámos",
            "pron": "Alienamos"
          },
          {
            "stem": "alien",
            "ending": "aram",
            "pron": "Alienaram"
          },
          {
            "stem": "alien",
            "ending": "aram",
            "pron": "Alienaram"
          }
        ],
        "tail": "",
        "irregular": false
      },
      "future": {
        "forms": [
          {
            "stem": "alienar",
            "ending": "ei",
            "pron": "Alienarei"
          },
          {
            "stem": "alienar",
            "ending": "ás",
            "pron": "Alienaras"
          },
          {
            "stem": "alienar",
            "ending": "á",
            "pron": "Alienara"
          },
          {
            "stem": "alienar",
            "ending": "emos",
            "pron": "Alienaremos"
          },
          {
            "stem": "alienar",
            "ending": "ão",
            "pron": "Alienarowng"
          },
          {
            "stem": "alienar",
            "ending": "ão",
            "pron": "Alienarowng"
          }
        ],
        "tail": ""
      }
    }
  },
  "To circumvent": {
    "ru": {
      "present": {
        "forms": [
          {
            "stem": "обхож",
            "ending": "у",
            "pron": "Obkhozhu"
          },
          {
            "stem": "обход",
            "ending": "ишь",
            "pron": "Obkhodish"
          },
          {
            "stem": "обход",
            "ending": "ит",
            "pron": "Obkhodit"
          },
          {
            "stem": "обход",
            "ending": "им",
            "pron": "Obkhodim"
          },
          {
            "stem": "обход",
            "ending": "ите",
            "pron": "Obkhodite"
          },
          {
            "stem": "обход",
            "ending": "ят",
            "pron": "Obkhodyat"
          }
        ]
      },
      "past": {
        "forms": [
          {
            "stem": "обходи",
            "ending": "л",
            "pron": "Obkhodil"
          },
          {
            "stem": "обходи",
            "ending": "ла",
            "pron": "Obkhodila"
          },
          {
            "stem": "обходи",
            "ending": "ло",
            "pron": "Obkhodilo"
          },
          {
            "stem": "обходи",
            "ending": "ли",
            "pron": "Obkhodili"
          }
        ],
        "tail": ""
      },
      "future": {
        "forms": [
          {
            "stem": "буд",
            "ending": "у",
            "pron": "Budu obkhodit"
          },
          {
            "stem": "буд",
            "ending": "ешь",
            "pron": "Budesh obkhodit"
          },
          {
            "stem": "буд",
            "ending": "ет",
            "pron": "Budet obkhodit"
          },
          {
            "stem": "буд",
            "ending": "ем",
            "pron": "Budem obkhodit"
          },
          {
            "stem": "буд",
            "ending": "ете",
            "pron": "Budete obkhodit"
          },
          {
            "stem": "буд",
            "ending": "ут",
            "pron": "Budut obkhodit"
          }
        ],
        "tail": " обходить"
      }
    },
    "pt": {
      "present": {
        "forms": [
          {
            "stem": "contorn",
            "ending": "o",
            "pron": "Contorno"
          },
          {
            "stem": "contorn",
            "ending": "as",
            "pron": "Contornas"
          },
          {
            "stem": "contorn",
            "ending": "a",
            "pron": "Contorna"
          },
          {
            "stem": "contorn",
            "ending": "amos",
            "pron": "Contornamos"
          },
          {
            "stem": "contorn",
            "ending": "am",
            "pron": "Contornam"
          },
          {
            "stem": "contorn",
            "ending": "am",
            "pron": "Contornam"
          }
        ]
      },
      "past": {
        "forms": [
          {
            "stem": "contorn",
            "ending": "ei",
            "pron": "Contornei"
          },
          {
            "stem": "contorn",
            "ending": "aste",
            "pron": "Contornaste"
          },
          {
            "stem": "contorn",
            "ending": "ou",
            "pron": "Contornou"
          },
          {
            "stem": "contorn",
            "ending": "ámos",
            "pron": "Contornamos"
          },
          {
            "stem": "contorn",
            "ending": "aram",
            "pron": "Contornaram"
          },
          {
            "stem": "contorn",
            "ending": "aram",
            "pron": "Contornaram"
          }
        ],
        "tail": "",
        "irregular": false
      },
      "future": {
        "forms": [
          {
            "stem": "contornar",
            "ending": "ei",
            "pron": "Contornarei"
          },
          {
            "stem": "contornar",
            "ending": "ás",
            "pron": "Contornaras"
          },
          {
            "stem": "contornar",
            "ending": "á",
            "pron": "Contornara"
          },
          {
            "stem": "contornar",
            "ending": "emos",
            "pron": "Contornaremos"
          },
          {
            "stem": "contornar",
            "ending": "ão",
            "pron": "Contornarowng"
          },
          {
            "stem": "contornar",
            "ending": "ão",
            "pron": "Contornarowng"
          }
        ],
        "tail": ""
      }
    }
  },
  "To substantiate": {
    "ru": {
      "present": {
        "forms": [
          {
            "stem": "обосновыва",
            "ending": "ю",
            "pron": "Obosnovyvayu"
          },
          {
            "stem": "обосновыва",
            "ending": "ешь",
            "pron": "Obosnovyvayesh"
          },
          {
            "stem": "обосновыва",
            "ending": "ет",
            "pron": "Obosnovyvayet"
          },
          {
            "stem": "обосновыва",
            "ending": "ем",
            "pron": "Obosnovyvayem"
          },
          {
            "stem": "обосновыва",
            "ending": "ете",
            "pron": "Obosnovyvayete"
          },
          {
            "stem": "обосновыва",
            "ending": "ют",
            "pron": "Obosnovyvayut"
          }
        ]
      },
      "past": {
        "forms": [
          {
            "stem": "обосновыва",
            "ending": "л",
            "pron": "Obosnovyval"
          },
          {
            "stem": "обосновыва",
            "ending": "ла",
            "pron": "Obosnovyvala"
          },
          {
            "stem": "обосновыва",
            "ending": "ло",
            "pron": "Obosnovyvalo"
          },
          {
            "stem": "обосновыва",
            "ending": "ли",
            "pron": "Obosnovyvali"
          }
        ],
        "tail": ""
      },
      "future": {
        "forms": [
          {
            "stem": "буд",
            "ending": "у",
            "pron": "Budu obosnovyvat"
          },
          {
            "stem": "буд",
            "ending": "ешь",
            "pron": "Budesh obosnovyvat"
          },
          {
            "stem": "буд",
            "ending": "ет",
            "pron": "Budet obosnovyvat"
          },
          {
            "stem": "буд",
            "ending": "ем",
            "pron": "Budem obosnovyvat"
          },
          {
            "stem": "буд",
            "ending": "ете",
            "pron": "Budete obosnovyvat"
          },
          {
            "stem": "буд",
            "ending": "ут",
            "pron": "Budut obosnovyvat"
          }
        ],
        "tail": " обосновывать"
      }
    },
    "pt": {
      "present": {
        "forms": [
          {
            "stem": "fundament",
            "ending": "o",
            "pron": "Fundamento"
          },
          {
            "stem": "fundament",
            "ending": "as",
            "pron": "Fundamentas"
          },
          {
            "stem": "fundament",
            "ending": "a",
            "pron": "Fundamenta"
          },
          {
            "stem": "fundament",
            "ending": "amos",
            "pron": "Fundamentamos"
          },
          {
            "stem": "fundament",
            "ending": "am",
            "pron": "Fundamentam"
          },
          {
            "stem": "fundament",
            "ending": "am",
            "pron": "Fundamentam"
          }
        ]
      },
      "past": {
        "forms": [
          {
            "stem": "fundament",
            "ending": "ei",
            "pron": "Fundamentei"
          },
          {
            "stem": "fundament",
            "ending": "aste",
            "pron": "Fundamentaste"
          },
          {
            "stem": "fundament",
            "ending": "ou",
            "pron": "Fundamentou"
          },
          {
            "stem": "fundament",
            "ending": "ámos",
            "pron": "Fundamentamos"
          },
          {
            "stem": "fundament",
            "ending": "aram",
            "pron": "Fundamentaram"
          },
          {
            "stem": "fundament",
            "ending": "aram",
            "pron": "Fundamentaram"
          }
        ],
        "tail": "",
        "irregular": false
      },
      "future": {
        "forms": [
          {
            "stem": "fundamentar",
            "ending": "ei",
            "pron": "Fundamentarei"
          },
          {
            "stem": "fundamentar",
            "ending": "ás",
            "pron": "Fundamentaras"
          },
          {
            "stem": "fundamentar",
            "ending": "á",
            "pron": "Fundamentara"
          },
          {
            "stem": "fundamentar",
            "ending": "emos",
            "pron": "Fundamentaremos"
          },
          {
            "stem": "fundamentar",
            "ending": "ão",
            "pron": "Fundamentarowng"
          },
          {
            "stem": "fundamentar",
            "ending": "ão",
            "pron": "Fundamentarowng"
          }
        ],
        "tail": ""
      }
    }
  },
  "To ostracize": {
    "ru": {
      "present": {
        "forms": [
          {
            "stem": "подверга",
            "ending": "ю",
            "pron": "Podvergayu ostrakizmu"
          },
          {
            "stem": "подверга",
            "ending": "ешь",
            "pron": "Podvergayesh ostrakizmu"
          },
          {
            "stem": "подверга",
            "ending": "ет",
            "pron": "Podvergayet ostrakizmu"
          },
          {
            "stem": "подверга",
            "ending": "ем",
            "pron": "Podvergayem ostrakizmu"
          },
          {
            "stem": "подверга",
            "ending": "ете",
            "pron": "Podvergayete ostrakizmu"
          },
          {
            "stem": "подверга",
            "ending": "ют",
            "pron": "Podvergayut ostrakizmu"
          }
        ],
        "tail": " остракизму"
      },
      "past": {
        "forms": [
          {
            "stem": "подверга",
            "ending": "л",
            "pron": "Podvergal ostrakizmu"
          },
          {
            "stem": "подверга",
            "ending": "ла",
            "pron": "Podvergala ostrakizmu"
          },
          {
            "stem": "подверга",
            "ending": "ло",
            "pron": "Podvergalo ostrakizmu"
          },
          {
            "stem": "подверга",
            "ending": "ли",
            "pron": "Podvergali ostrakizmu"
          }
        ],
        "tail": " остракизму"
      },
      "future": {
        "forms": [
          {
            "stem": "буд",
            "ending": "у",
            "pron": "Budu podvergat ostrakizmu"
          },
          {
            "stem": "буд",
            "ending": "ешь",
            "pron": "Budesh podvergat ostrakizmu"
          },
          {
            "stem": "буд",
            "ending": "ет",
            "pron": "Budet podvergat ostrakizmu"
          },
          {
            "stem": "буд",
            "ending": "ем",
            "pron": "Budem podvergat ostrakizmu"
          },
          {
            "stem": "буд",
            "ending": "ете",
            "pron": "Budete podvergat ostrakizmu"
          },
          {
            "stem": "буд",
            "ending": "ут",
            "pron": "Budut podvergat ostrakizmu"
          }
        ],
        "tail": " подвергать остракизму"
      }
    },
    "pt": {
      "present": {
        "forms": [
          {
            "stem": "marginaliz",
            "ending": "o",
            "pron": "Marzhinalizo"
          },
          {
            "stem": "marginaliz",
            "ending": "as",
            "pron": "Marzhinalizas"
          },
          {
            "stem": "marginaliz",
            "ending": "a",
            "pron": "Marzhinaliza"
          },
          {
            "stem": "marginaliz",
            "ending": "amos",
            "pron": "Marzhinalizamos"
          },
          {
            "stem": "marginaliz",
            "ending": "am",
            "pron": "Marzhinalizam"
          },
          {
            "stem": "marginaliz",
            "ending": "am",
            "pron": "Marzhinalizam"
          }
        ]
      },
      "past": {
        "forms": [
          {
            "stem": "marginaliz",
            "ending": "ei",
            "pron": "Marzhinalizei"
          },
          {
            "stem": "marginaliz",
            "ending": "aste",
            "pron": "Marzhinalizaste"
          },
          {
            "stem": "marginaliz",
            "ending": "ou",
            "pron": "Marzhinalizou"
          },
          {
            "stem": "marginaliz",
            "ending": "ámos",
            "pron": "Marzhinalizamos"
          },
          {
            "stem": "marginaliz",
            "ending": "aram",
            "pron": "Marzhinalizaram"
          },
          {
            "stem": "marginaliz",
            "ending": "aram",
            "pron": "Marzhinalizaram"
          }
        ],
        "tail": "",
        "irregular": false
      },
      "future": {
        "forms": [
          {
            "stem": "marginalizar",
            "ending": "ei",
            "pron": "Marzhinalizarei"
          },
          {
            "stem": "marginalizar",
            "ending": "ás",
            "pron": "Marzhinalizaras"
          },
          {
            "stem": "marginalizar",
            "ending": "á",
            "pron": "Marzhinalizara"
          },
          {
            "stem": "marginalizar",
            "ending": "emos",
            "pron": "Marzhinalizaremos"
          },
          {
            "stem": "marginalizar",
            "ending": "ão",
            "pron": "Marzhinalizarowng"
          },
          {
            "stem": "marginalizar",
            "ending": "ão",
            "pron": "Marzhinalizarowng"
          }
        ],
        "tail": ""
      }
    }
  },
  "To vindicate": {
    "ru": {
      "present": {
        "forms": [
          {
            "stem": "оправдыва",
            "ending": "ю",
            "pron": "Opravdyvayu"
          },
          {
            "stem": "оправдыва",
            "ending": "ешь",
            "pron": "Opravdyvayesh"
          },
          {
            "stem": "оправдыва",
            "ending": "ет",
            "pron": "Opravdyvayet"
          },
          {
            "stem": "оправдыва",
            "ending": "ем",
            "pron": "Opravdyvayem"
          },
          {
            "stem": "оправдыва",
            "ending": "ете",
            "pron": "Opravdyvayete"
          },
          {
            "stem": "оправдыва",
            "ending": "ют",
            "pron": "Opravdyvayut"
          }
        ]
      },
      "past": {
        "forms": [
          {
            "stem": "оправдыва",
            "ending": "л",
            "pron": "Opravdyval"
          },
          {
            "stem": "оправдыва",
            "ending": "ла",
            "pron": "Opravdyvala"
          },
          {
            "stem": "оправдыва",
            "ending": "ло",
            "pron": "Opravdyvalo"
          },
          {
            "stem": "оправдыва",
            "ending": "ли",
            "pron": "Opravdyvali"
          }
        ],
        "tail": ""
      },
      "future": {
        "forms": [
          {
            "stem": "буд",
            "ending": "у",
            "pron": "Budu opravdyvat"
          },
          {
            "stem": "буд",
            "ending": "ешь",
            "pron": "Budesh opravdyvat"
          },
          {
            "stem": "буд",
            "ending": "ет",
            "pron": "Budet opravdyvat"
          },
          {
            "stem": "буд",
            "ending": "ем",
            "pron": "Budem opravdyvat"
          },
          {
            "stem": "буд",
            "ending": "ете",
            "pron": "Budete opravdyvat"
          },
          {
            "stem": "буд",
            "ending": "ут",
            "pron": "Budut opravdyvat"
          }
        ],
        "tail": " оправдывать"
      }
    },
    "pt": {
      "present": {
        "forms": [
          {
            "stem": "justific",
            "ending": "o",
            "pron": "Zhustifico"
          },
          {
            "stem": "justific",
            "ending": "as",
            "pron": "Zhustificas"
          },
          {
            "stem": "justific",
            "ending": "a",
            "pron": "Zhustifica"
          },
          {
            "stem": "justific",
            "ending": "amos",
            "pron": "Zhustificamos"
          },
          {
            "stem": "justific",
            "ending": "am",
            "pron": "Zhustificam"
          },
          {
            "stem": "justific",
            "ending": "am",
            "pron": "Zhustificam"
          }
        ]
      },
      "past": {
        "forms": [
          {
            "stem": "justific",
            "ending": "ei",
            "pron": "Zhustificei"
          },
          {
            "stem": "justific",
            "ending": "aste",
            "pron": "Zhustificaste"
          },
          {
            "stem": "justific",
            "ending": "ou",
            "pron": "Zhustificou"
          },
          {
            "stem": "justific",
            "ending": "ámos",
            "pron": "Zhustificamos"
          },
          {
            "stem": "justific",
            "ending": "aram",
            "pron": "Zhustificaram"
          },
          {
            "stem": "justific",
            "ending": "aram",
            "pron": "Zhustificaram"
          }
        ],
        "tail": "",
        "irregular": false
      },
      "future": {
        "forms": [
          {
            "stem": "justificar",
            "ending": "ei",
            "pron": "Zhustificarei"
          },
          {
            "stem": "justificar",
            "ending": "ás",
            "pron": "Zhustificaras"
          },
          {
            "stem": "justificar",
            "ending": "á",
            "pron": "Zhustificara"
          },
          {
            "stem": "justificar",
            "ending": "emos",
            "pron": "Zhustificaremos"
          },
          {
            "stem": "justificar",
            "ending": "ão",
            "pron": "Zhustificarowng"
          },
          {
            "stem": "justificar",
            "ending": "ão",
            "pron": "Zhustificarowng"
          }
        ],
        "tail": ""
      }
    }
  },
  "To acquiesce": {
    "ru": {
      "present": {
        "forms": [
          {
            "stem": "соглаша",
            "ending": "юсь",
            "pron": "Soglashayus"
          },
          {
            "stem": "соглаша",
            "ending": "ешься",
            "pron": "Soglashayeshsya"
          },
          {
            "stem": "соглаша",
            "ending": "ется",
            "pron": "Soglashayetsya"
          },
          {
            "stem": "соглаша",
            "ending": "емся",
            "pron": "Soglashayemsya"
          },
          {
            "stem": "соглаша",
            "ending": "етесь",
            "pron": "Soglashayetes"
          },
          {
            "stem": "соглаша",
            "ending": "ются",
            "pron": "Soglashayutsya"
          }
        ]
      },
      "past": {
        "forms": [
          {
            "stem": "соглаша",
            "ending": "лся",
            "pron": "Soglashalsya"
          },
          {
            "stem": "соглаша",
            "ending": "лась",
            "pron": "Soglashalas"
          },
          {
            "stem": "соглаша",
            "ending": "лось",
            "pron": "Soglashalos"
          },
          {
            "stem": "соглаша",
            "ending": "лись",
            "pron": "Soglashalis"
          }
        ],
        "tail": ""
      },
      "future": {
        "forms": [
          {
            "stem": "буд",
            "ending": "у",
            "pron": "Budu soglashatsya"
          },
          {
            "stem": "буд",
            "ending": "ешь",
            "pron": "Budesh soglashatsya"
          },
          {
            "stem": "буд",
            "ending": "ет",
            "pron": "Budet soglashatsya"
          },
          {
            "stem": "буд",
            "ending": "ем",
            "pron": "Budem soglashatsya"
          },
          {
            "stem": "буд",
            "ending": "ете",
            "pron": "Budete soglashatsya"
          },
          {
            "stem": "буд",
            "ending": "ут",
            "pron": "Budut soglashatsya"
          }
        ],
        "tail": " соглашаться"
      }
    },
    "pt": {
      "present": {
        "forms": [
          {
            "stem": "aquies",
            "ending": "ço",
            "pron": "Akiesso"
          },
          {
            "stem": "aquiec",
            "ending": "es",
            "pron": "Akieces"
          },
          {
            "stem": "aquiec",
            "ending": "e",
            "pron": "Akiece"
          },
          {
            "stem": "aquiesc",
            "ending": "emos",
            "pron": "Akiescemos"
          },
          {
            "stem": "aquiesc",
            "ending": "em",
            "pron": "Akiescem"
          },
          {
            "stem": "aquiesc",
            "ending": "em",
            "pron": "Akiescem"
          }
        ]
      },
      "past": {
        "forms": [
          {
            "stem": "aquiesc",
            "ending": "i",
            "pron": "Akiesci"
          },
          {
            "stem": "aquiesc",
            "ending": "este",
            "pron": "Akiesceste"
          },
          {
            "stem": "aquiesc",
            "ending": "eu",
            "pron": "Akiesceu"
          },
          {
            "stem": "aquiesc",
            "ending": "emos",
            "pron": "Akiescemos"
          },
          {
            "stem": "aquiesc",
            "ending": "eram",
            "pron": "Akiesceram"
          },
          {
            "stem": "aquiesc",
            "ending": "eram",
            "pron": "Akiesceram"
          }
        ],
        "tail": "",
        "irregular": false
      },
      "future": {
        "forms": [
          {
            "stem": "aquiescer",
            "ending": "ei",
            "pron": "Akiescerei"
          },
          {
            "stem": "aquiescer",
            "ending": "ás",
            "pron": "Akiesceras"
          },
          {
            "stem": "aquiescer",
            "ending": "á",
            "pron": "Akiescera"
          },
          {
            "stem": "aquiescer",
            "ending": "emos",
            "pron": "Akiesceremos"
          },
          {
            "stem": "aquiescer",
            "ending": "ão",
            "pron": "Akiescerowng"
          },
          {
            "stem": "aquiescer",
            "ending": "ão",
            "pron": "Akiescerowng"
          }
        ],
        "tail": ""
      }
    }
  },
  "To dissipate": {
    "ru": {
      "present": {
        "forms": [
          {
            "stem": "рассеива",
            "ending": "ю",
            "pron": "Rasseivayu"
          },
          {
            "stem": "рассеива",
            "ending": "ешь",
            "pron": "Rasseivayesh"
          },
          {
            "stem": "рассеива",
            "ending": "ет",
            "pron": "Rasseivayet"
          },
          {
            "stem": "рассеива",
            "ending": "ем",
            "pron": "Rasseivayem"
          },
          {
            "stem": "рассеива",
            "ending": "ете",
            "pron": "Rasseivayete"
          },
          {
            "stem": "рассеива",
            "ending": "ют",
            "pron": "Rasseivayut"
          }
        ]
      },
      "past": {
        "forms": [
          {
            "stem": "рассеива",
            "ending": "л",
            "pron": "Rasseival"
          },
          {
            "stem": "рассеива",
            "ending": "ла",
            "pron": "Rasseivala"
          },
          {
            "stem": "рассеива",
            "ending": "ло",
            "pron": "Rasseivalo"
          },
          {
            "stem": "рассеива",
            "ending": "ли",
            "pron": "Rasseivali"
          }
        ],
        "tail": ""
      },
      "future": {
        "forms": [
          {
            "stem": "буд",
            "ending": "у",
            "pron": "Budu rasseivat"
          },
          {
            "stem": "буд",
            "ending": "ешь",
            "pron": "Budesh rasseivat"
          },
          {
            "stem": "буд",
            "ending": "ет",
            "pron": "Budet rasseivat"
          },
          {
            "stem": "буд",
            "ending": "ем",
            "pron": "Budem rasseivat"
          },
          {
            "stem": "буд",
            "ending": "ете",
            "pron": "Budete rasseivat"
          },
          {
            "stem": "буд",
            "ending": "ут",
            "pron": "Budut rasseivat"
          }
        ],
        "tail": " рассеивать"
      }
    },
    "pt": {
      "present": {
        "forms": [
          {
            "stem": "dissip",
            "ending": "o",
            "pron": "Dissipo"
          },
          {
            "stem": "dissip",
            "ending": "as",
            "pron": "Dissipas"
          },
          {
            "stem": "dissip",
            "ending": "a",
            "pron": "Dissipa"
          },
          {
            "stem": "dissip",
            "ending": "amos",
            "pron": "Dissipamos"
          },
          {
            "stem": "dissip",
            "ending": "am",
            "pron": "Dissipam"
          },
          {
            "stem": "dissip",
            "ending": "am",
            "pron": "Dissipam"
          }
        ]
      },
      "past": {
        "forms": [
          {
            "stem": "dissip",
            "ending": "ei",
            "pron": "Dissipei"
          },
          {
            "stem": "dissip",
            "ending": "aste",
            "pron": "Dissipaste"
          },
          {
            "stem": "dissip",
            "ending": "ou",
            "pron": "Dissipou"
          },
          {
            "stem": "dissip",
            "ending": "ámos",
            "pron": "Dissipamos"
          },
          {
            "stem": "dissip",
            "ending": "aram",
            "pron": "Dissiparam"
          },
          {
            "stem": "dissip",
            "ending": "aram",
            "pron": "Dissiparam"
          }
        ],
        "tail": "",
        "irregular": false
      },
      "future": {
        "forms": [
          {
            "stem": "dissipar",
            "ending": "ei",
            "pron": "Dissiparei"
          },
          {
            "stem": "dissipar",
            "ending": "ás",
            "pron": "Dissiparas"
          },
          {
            "stem": "dissipar",
            "ending": "á",
            "pron": "Dissipara"
          },
          {
            "stem": "dissipar",
            "ending": "emos",
            "pron": "Dissiparemos"
          },
          {
            "stem": "dissipar",
            "ending": "ão",
            "pron": "Dissiparowng"
          },
          {
            "stem": "dissipar",
            "ending": "ão",
            "pron": "Dissiparowng"
          }
        ],
        "tail": ""
      }
    }
  }
};
