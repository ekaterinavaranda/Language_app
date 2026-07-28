// Grammar reference content for Happy Learning — core RFL (Russian as a
// Foreign Language) and PLE (Português Língua Estrangeira) topics.
// Structure: GRAMMAR_TOPICS[lang] = [{ id, title, paragraphs: [...], examples: [{ native, en, note, pron }, ...] }, ...]

const GRAMMAR_TOPICS = {
  "ru": [
    {
      "id": "cases",
      "title": "Cases (Падежи)",
      "paragraphs": [
        "Russian has 6 grammatical cases that show a noun's role in a sentence — the noun's ending changes depending on which case it's in. Each case answers a specific question."
      ],
      "examples": [
        {
          "native": "Это книга.",
          "en": "This is a book.",
          "note": "Nominative — who/what? (the subject)",
          "pron": "Eto kniga."
        },
        {
          "native": "У меня нет книги.",
          "en": "I don't have a book.",
          "note": "Genitive — of whom/what? (possession, absence)",
          "pron": "U menya net knigi."
        },
        {
          "native": "Я даю книгу другу.",
          "en": "I give the book to a friend.",
          "note": "Dative — to whom/what? (indirect object)",
          "pron": "Ya dayu knigu drugu."
        },
        {
          "native": "Я читаю книгу.",
          "en": "I am reading a book.",
          "note": "Accusative — whom/what? (direct object)",
          "pron": "Ya chitayu knigu."
        },
        {
          "native": "Я пишу ручкой.",
          "en": "I write with a pen.",
          "note": "Instrumental — by/with whom/what?",
          "pron": "Ya pishu ruchkoy."
        },
        {
          "native": "Я думаю о книге.",
          "en": "I'm thinking about the book.",
          "note": "Prepositional — about/at whom/what?",
          "pron": "Ya dumayu o knige."
        }
      ]
    },
    {
      "id": "gender",
      "title": "Noun Gender (Род существительных)",
      "paragraphs": [
        "Every Russian noun has a gender — masculine, feminine, or neuter — usually predictable from its dictionary-form ending. Gender matters because adjectives and past-tense verbs change to match it.",
        "A handful of words ending in the soft sign -ь can be either masculine or feminine, and those simply have to be memorized individually."
      ],
      "examples": [
        {
          "native": "стол",
          "en": "table",
          "note": "Masculine — usually ends in a consonant",
          "pron": "Stol"
        },
        {
          "native": "книга",
          "en": "book",
          "note": "Feminine — usually ends in -а/-я",
          "pron": "Kniga"
        },
        {
          "native": "окно",
          "en": "window",
          "note": "Neuter — usually ends in -о/-е",
          "pron": "Okno"
        },
        {
          "native": "день",
          "en": "day",
          "note": "Ends in -ь, but masculine — must be memorized",
          "pron": "Den"
        },
        {
          "native": "ночь",
          "en": "night",
          "note": "Ends in -ь, but feminine — must be memorized",
          "pron": "Noch"
        }
      ]
    },
    {
      "id": "aspect",
      "title": "Verb Aspect (Вид глагола)",
      "paragraphs": [
        "Almost every Russian verb comes in a pair: imperfective and perfective. Imperfective describes an ongoing, repeated, or general action. Perfective describes a single, completed action, often with a clear result.",
        "Perfective verbs typically don't have a present tense at all — only past and future. This app's Verb flashcards use the imperfective form throughout, since that's the standard starting point for learners."
      ],
      "examples": [
        {
          "native": "Я читал книгу.",
          "en": "I was reading / used to read a book.",
          "note": "Imperfective — ongoing or repeated",
          "pron": "Ya chital knigu."
        },
        {
          "native": "Я прочитал книгу.",
          "en": "I read the whole book (finished it).",
          "note": "Perfective — completed, with a result",
          "pron": "Ya prochital knigu."
        },
        {
          "native": "Я писал письмо.",
          "en": "I was writing a letter.",
          "note": "Imperfective",
          "pron": "Ya pisal pismo."
        },
        {
          "native": "Я написал письмо.",
          "en": "I wrote (finished) the letter.",
          "note": "Perfective",
          "pron": "Ya napisal pismo."
        }
      ]
    },
    {
      "id": "adjective-agreement",
      "title": "Adjective Agreement (Согласование прилагательных)",
      "paragraphs": [
        "Adjectives must match the noun they describe in gender, number, and case. The ending changes, but the core meaning of the adjective stays the same — always check what noun it's describing before choosing the ending."
      ],
      "examples": [
        {
          "native": "новый стол",
          "en": "new table",
          "note": "Masculine",
          "pron": "Novyy stol"
        },
        {
          "native": "новая книга",
          "en": "new book",
          "note": "Feminine",
          "pron": "Novaya kniga"
        },
        {
          "native": "новое окно",
          "en": "new window",
          "note": "Neuter",
          "pron": "Novoye okno"
        },
        {
          "native": "новые столы",
          "en": "new tables",
          "note": "Plural",
          "pron": "Novyye stoly"
        }
      ]
    },
    {
      "id": "numbers",
      "title": "Numbers & Counting (Числительные)",
      "paragraphs": [
        "The noun after a number changes form depending on the number itself: 1 takes the normal singular form, 2–4 take the genitive singular, and 5 and above take the genitive plural.",
        "This rule also applies to compound numbers, based on their last digit — so 21 behaves like \"1\", 22 like \"2\", and 25 like \"5\"."
      ],
      "examples": [
        {
          "native": "одна книга",
          "en": "one book",
          "note": "1 → normal singular form",
          "pron": "Odna kniga"
        },
        {
          "native": "две книги",
          "en": "two books",
          "note": "2–4 → genitive singular",
          "pron": "Dve knigi"
        },
        {
          "native": "пять книг",
          "en": "five books",
          "note": "5+ → genitive plural",
          "pron": "Pyat knig"
        },
        {
          "native": "двадцать одна книга",
          "en": "twenty-one books",
          "note": "21 → behaves like \"1\"",
          "pron": "Dvadtsat odna kniga"
        }
      ]
    },
    {
      "id": "pronoun-cases",
      "title": "Personal Pronouns & Cases (Личные местоимения)",
      "paragraphs": [
        "Like nouns, personal pronouns change form depending on their case. These forms are irregular and must be memorized, but they follow the same 6-case logic as nouns."
      ],
      "examples": [
        {
          "native": "я",
          "en": "I",
          "note": "Nominative",
          "pron": "Ya"
        },
        {
          "native": "меня",
          "en": "me / of me",
          "note": "Genitive / Accusative",
          "pron": "Menya"
        },
        {
          "native": "мне",
          "en": "to me",
          "note": "Dative",
          "pron": "Mne"
        },
        {
          "native": "мной",
          "en": "by me",
          "note": "Instrumental",
          "pron": "Mnoy"
        },
        {
          "native": "обо мне",
          "en": "about me",
          "note": "Prepositional",
          "pron": "Obo mne"
        }
      ]
    }
  ],
  "pt": [
    {
      "id": "ser-estar",
      "title": "Ser vs Estar",
      "paragraphs": [
        "Portuguese has two verbs for \"to be,\" and choosing the right one changes the meaning. Ser is for permanent or defining characteristics — identity, origin, profession, essential qualities. Estar is for temporary states, location, ongoing conditions, and feelings.",
        "A helpful test: if the quality could change soon or is a temporary state, use estar; if it defines what something fundamentally is, use ser."
      ],
      "examples": [
        {
          "native": "Ela é médica.",
          "en": "She is a doctor.",
          "note": "Ser — profession (defining)",
          "pron": "Ela e medica."
        },
        {
          "native": "Eu sou de Lisboa.",
          "en": "I am from Lisbon.",
          "note": "Ser — origin (permanent)",
          "pron": "Eu sou de lisboa."
        },
        {
          "native": "Ela está cansada.",
          "en": "She is tired.",
          "note": "Estar — temporary state",
          "pron": "Ela esta cansada."
        },
        {
          "native": "O livro está na mesa.",
          "en": "The book is on the table.",
          "note": "Estar — location",
          "pron": "O livro esta na mesa."
        }
      ]
    },
    {
      "id": "articles-gender",
      "title": "Articles & Noun Gender (Artigos e género)",
      "paragraphs": [
        "Every Portuguese noun is masculine or feminine, and articles must match: o/um for masculine, a/uma for feminine. Most nouns ending in -o are masculine and most ending in -a are feminine, but there are exceptions that must be learned individually."
      ],
      "examples": [
        {
          "native": "o carro",
          "en": "the car",
          "note": "Masculine, definite article",
          "pron": "O caho"
        },
        {
          "native": "um livro",
          "en": "a book",
          "note": "Masculine, indefinite article",
          "pron": "Um livro"
        },
        {
          "native": "a casa",
          "en": "the house",
          "note": "Feminine, definite article",
          "pron": "A casa"
        },
        {
          "native": "uma mesa",
          "en": "a table",
          "note": "Feminine, indefinite article",
          "pron": "Uma mesa"
        },
        {
          "native": "o problema",
          "en": "the problem",
          "note": "Ends in -a, but masculine — an exception",
          "pron": "O problema"
        },
        {
          "native": "a mão",
          "en": "the hand",
          "note": "Ends in -ão, but feminine — an exception",
          "pron": "A mowng"
        }
      ]
    },
    {
      "id": "adjective-agreement",
      "title": "Adjective Agreement (Concordância dos adjetivos)",
      "paragraphs": [
        "Adjectives must match the noun in gender and number. Some adjectives (like grande, feliz) don't change between masculine and feminine at all — only between singular and plural."
      ],
      "examples": [
        {
          "native": "um carro pequeno",
          "en": "a small car",
          "note": "Masculine singular",
          "pron": "Um caho pekeno"
        },
        {
          "native": "uma casa pequena",
          "en": "a small house",
          "note": "Feminine singular",
          "pron": "Uma casa pekena"
        },
        {
          "native": "carros pequenos",
          "en": "small cars",
          "note": "Masculine plural",
          "pron": "Cahos pekenos"
        },
        {
          "native": "casas pequenas",
          "en": "small houses",
          "note": "Feminine plural",
          "pron": "Casas pekenas"
        },
        {
          "native": "uma pessoa feliz",
          "en": "a happy person",
          "note": "\"Feliz\" doesn't change by gender",
          "pron": "Uma pessoa feliz"
        }
      ]
    },
    {
      "id": "pronoun-placement",
      "title": "Object Pronoun Placement (Colocação dos pronomes)",
      "paragraphs": [
        "Object pronouns (me, te, o, a, lhe, nos...) usually attach AFTER the verb with a hyphen in European Portuguese. They move BEFORE the verb after certain triggers — negation, question words, and some conjunctions. This \"before vs. after\" rule is one of the trickiest parts of PT grammar for learners."
      ],
      "examples": [
        {
          "native": "Ele viu-me.",
          "en": "He saw me.",
          "note": "After the verb — the default position",
          "pron": "Ele viu-me."
        },
        {
          "native": "Ele não me viu.",
          "en": "He didn't see me.",
          "note": "Before the verb — triggered by \"não\"",
          "pron": "Ele nowng me viu."
        },
        {
          "native": "Quando me viste?",
          "en": "When did you see me?",
          "note": "Before the verb — triggered by a question word",
          "pron": "Quando me viste?"
        }
      ]
    },
    {
      "id": "preterite-imperfect",
      "title": "Preterite vs Imperfect (Pretérito Perfeito vs Imperfeito)",
      "paragraphs": [
        "Both describe the past, but for different kinds of actions. Pretérito Perfeito is a single, completed action at a specific moment. Imperfeito is a repeated, ongoing, or background past action or description.",
        "A good test: if you can add \"used to\" or \"was ...ing\" in English, use the imperfeito."
      ],
      "examples": [
        {
          "native": "Ontem comi pizza.",
          "en": "Yesterday I ate pizza.",
          "note": "Pretérito — single completed action",
          "pron": "Ontem comi pizza."
        },
        {
          "native": "Quando era criança, comia muita pizza.",
          "en": "When I was a child, I used to eat a lot of pizza.",
          "note": "Imperfeito — repeated past habit",
          "pron": "Quando era criansa, comia muita pizza."
        }
      ]
    },
    {
      "id": "subjunctive",
      "title": "Subjunctive Basics (Modo Conjuntivo)",
      "paragraphs": [
        "The subjunctive expresses doubt, wish, emotion, or something not yet certain, and is triggered by specific phrases. It's not used for simple facts presented as certain."
      ],
      "examples": [
        {
          "native": "Espero que ela venha.",
          "en": "I hope she comes.",
          "note": "Triggered by \"espero que\" (hope)",
          "pron": "Espero ke ela venya."
        },
        {
          "native": "Talvez ele esteja certo.",
          "en": "Maybe he is right.",
          "note": "Triggered by \"talvez\" (maybe)",
          "pron": "Talvez ele estezha certo."
        },
        {
          "native": "Quero que tu saibas.",
          "en": "I want you to know.",
          "note": "Triggered by \"quero que\" (want)",
          "pron": "Kero ke tu saibas."
        },
        {
          "native": "Ela vem amanhã.",
          "en": "She's coming tomorrow.",
          "note": "Plain fact — indicative, not subjunctive",
          "pron": "Ela vem amanyang."
        }
      ]
    }
  ]
};
