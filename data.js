// Word data for Happy Learning.
// Structure: WORDS[category][level] = [{ en, ru, pt, ruPron, ptPron, emoji, swatch? }, ...]
// ruPron / ptPron are approximate, English-reader-friendly pronunciation guides (not IPA).
// Levels: easy, medium, hard, insane

const WORDS = {
  "animals": {
    "easy": [
      {
        "en": "Cat",
        "ru": "кошка",
        "pt": "gato",
        "ruPron": "Koshka",
        "ptPron": "Gato",
        "emoji": "🐱"
      },
      {
        "en": "Dog",
        "ru": "собака",
        "pt": "cachorro",
        "ruPron": "Sobaka",
        "ptPron": "Cashoho",
        "emoji": "🐶"
      },
      {
        "en": "Bird",
        "ru": "птица",
        "pt": "pássaro",
        "ruPron": "Ptitsa",
        "ptPron": "Passaro",
        "emoji": "🐦"
      },
      {
        "en": "Fish",
        "ru": "рыба",
        "pt": "peixe",
        "ruPron": "Ryba",
        "ptPron": "Peishe",
        "emoji": "🐟"
      },
      {
        "en": "Horse",
        "ru": "лошадь",
        "pt": "cavalo",
        "ruPron": "Loshad",
        "ptPron": "Cavalo",
        "emoji": "🐴"
      },
      {
        "en": "Cow",
        "ru": "корова",
        "pt": "vaca",
        "ruPron": "Korova",
        "ptPron": "Vaca",
        "emoji": "🐄"
      },
      {
        "en": "Pig",
        "ru": "свинья",
        "pt": "porco",
        "ruPron": "Svinya",
        "ptPron": "Porco",
        "emoji": "🐷"
      },
      {
        "en": "Mouse",
        "ru": "мышь",
        "pt": "rato",
        "ruPron": "Mysh",
        "ptPron": "Hato",
        "emoji": "🐭"
      }
    ],
    "medium": [
      {
        "en": "Rabbit",
        "ru": "кролик",
        "pt": "coelho",
        "ruPron": "Krolik",
        "ptPron": "Coelyo",
        "emoji": "🐰"
      },
      {
        "en": "Bear",
        "ru": "медведь",
        "pt": "urso",
        "ruPron": "Medved",
        "ptPron": "Urso",
        "emoji": "🐻"
      },
      {
        "en": "Wolf",
        "ru": "волк",
        "pt": "lobo",
        "ruPron": "Volk",
        "ptPron": "Lobo",
        "emoji": "🐺"
      },
      {
        "en": "Fox",
        "ru": "лиса",
        "pt": "raposa",
        "ruPron": "Lisa",
        "ptPron": "Haposa",
        "emoji": "🦊"
      },
      {
        "en": "Sheep",
        "ru": "овца",
        "pt": "ovelha",
        "ruPron": "Ovtsa",
        "ptPron": "Ovelya",
        "emoji": "🐑"
      },
      {
        "en": "Goat",
        "ru": "коза",
        "pt": "cabra",
        "ruPron": "Koza",
        "ptPron": "Cabra",
        "emoji": "🐐"
      },
      {
        "en": "Duck",
        "ru": "утка",
        "pt": "pato",
        "ruPron": "Utka",
        "ptPron": "Pato",
        "emoji": "🦆"
      },
      {
        "en": "Monkey",
        "ru": "обезьяна",
        "pt": "macaco",
        "ruPron": "Obezyana",
        "ptPron": "Macaco",
        "emoji": "🐒"
      }
    ],
    "hard": [
      {
        "en": "Squirrel",
        "ru": "белка",
        "pt": "esquilo",
        "ruPron": "Belka",
        "ptPron": "Eskilo",
        "emoji": "🐿️"
      },
      {
        "en": "Hedgehog",
        "ru": "ёж",
        "pt": "ouriço",
        "ruPron": "Yozh",
        "ptPron": "Ouriso",
        "emoji": "🦔"
      },
      {
        "en": "Deer",
        "ru": "олень",
        "pt": "cervo",
        "ruPron": "Olen",
        "ptPron": "Cervo",
        "emoji": "🦌"
      },
      {
        "en": "Turtle",
        "ru": "черепаха",
        "pt": "tartaruga",
        "ruPron": "Cherepakha",
        "ptPron": "Tartaruga",
        "emoji": "🐢"
      },
      {
        "en": "Snake",
        "ru": "змея",
        "pt": "cobra",
        "ruPron": "Zmeya",
        "ptPron": "Cobra",
        "emoji": "🐍"
      },
      {
        "en": "Frog",
        "ru": "лягушка",
        "pt": "sapo",
        "ruPron": "Lyagushka",
        "ptPron": "Sapo",
        "emoji": "🐸"
      },
      {
        "en": "Owl",
        "ru": "сова",
        "pt": "coruja",
        "ruPron": "Sova",
        "ptPron": "Coruzha",
        "emoji": "🦉"
      },
      {
        "en": "Bat",
        "ru": "летучая мышь",
        "pt": "morcego",
        "ruPron": "Letuchaya mysh",
        "ptPron": "Morcego",
        "emoji": "🦇"
      }
    ],
    "insane": [
      {
        "en": "Hedgehog's quill",
        "ru": "игла ежа",
        "pt": "espinho de ouriço",
        "ruPron": "Igla yezha",
        "ptPron": "Espinyo de ouriso",
        "emoji": "🦔"
      },
      {
        "en": "Otter",
        "ru": "выдра",
        "pt": "lontra",
        "ruPron": "Vydra",
        "ptPron": "Lontra",
        "emoji": "🦦"
      },
      {
        "en": "Weasel",
        "ru": "ласка",
        "pt": "doninha",
        "ruPron": "Laska",
        "ptPron": "Doninya",
        "emoji": "🐾"
      },
      {
        "en": "Newt",
        "ru": "тритон",
        "pt": "tritão",
        "ruPron": "Triton",
        "ptPron": "Tritowng",
        "emoji": "🦎"
      },
      {
        "en": "Mole",
        "ru": "крот",
        "pt": "toupeira",
        "ruPron": "Krot",
        "ptPron": "Toupeira",
        "emoji": "🕳️"
      },
      {
        "en": "Badger",
        "ru": "барсук",
        "pt": "texugo",
        "ruPron": "Barsuk",
        "ptPron": "Teshugo",
        "emoji": "🦡"
      },
      {
        "en": "Lynx",
        "ru": "рысь",
        "pt": "lince",
        "ruPron": "Rys",
        "ptPron": "Lince",
        "emoji": "🐆"
      },
      {
        "en": "Boar",
        "ru": "кабан",
        "pt": "javali",
        "ruPron": "Kaban",
        "ptPron": "Zhavali",
        "emoji": "🐗"
      }
    ]
  },
  "objects": {
    "easy": [
      {
        "en": "Table",
        "ru": "стол",
        "pt": "mesa",
        "ruPron": "Stol",
        "ptPron": "Mesa",
        "emoji": "🪵"
      },
      {
        "en": "Chair",
        "ru": "стул",
        "pt": "cadeira",
        "ruPron": "Stul",
        "ptPron": "Cadeira",
        "emoji": "🪑"
      },
      {
        "en": "Door",
        "ru": "дверь",
        "pt": "porta",
        "ruPron": "Dver",
        "ptPron": "Porta",
        "emoji": "🚪"
      },
      {
        "en": "Window",
        "ru": "окно",
        "pt": "janela",
        "ruPron": "Okno",
        "ptPron": "Zhanela",
        "emoji": "🪟"
      },
      {
        "en": "Book",
        "ru": "книга",
        "pt": "livro",
        "ruPron": "Kniga",
        "ptPron": "Livro",
        "emoji": "📖"
      },
      {
        "en": "Pen",
        "ru": "ручка",
        "pt": "caneta",
        "ruPron": "Ruchka",
        "ptPron": "Caneta",
        "emoji": "🖊️"
      },
      {
        "en": "Bag",
        "ru": "сумка",
        "pt": "bolsa",
        "ruPron": "Sumka",
        "ptPron": "Bolsa",
        "emoji": "👜"
      },
      {
        "en": "Key",
        "ru": "ключ",
        "pt": "chave",
        "ruPron": "Klyuch",
        "ptPron": "Shave",
        "emoji": "🔑"
      }
    ],
    "medium": [
      {
        "en": "Mirror",
        "ru": "зеркало",
        "pt": "espelho",
        "ruPron": "Zerkalo",
        "ptPron": "Espelyo",
        "emoji": "🪞"
      },
      {
        "en": "Clock",
        "ru": "часы",
        "pt": "relógio",
        "ruPron": "Chasy",
        "ptPron": "Helozhio",
        "emoji": "🕰️"
      },
      {
        "en": "Lamp",
        "ru": "лампа",
        "pt": "lâmpada",
        "ruPron": "Lampa",
        "ptPron": "Lampada",
        "emoji": "💡"
      },
      {
        "en": "Box",
        "ru": "коробка",
        "pt": "caixa",
        "ruPron": "Korobka",
        "ptPron": "Caisha",
        "emoji": "📦"
      },
      {
        "en": "Phone",
        "ru": "телефон",
        "pt": "telefone",
        "ruPron": "Telefon",
        "ptPron": "Telefone",
        "emoji": "📱"
      },
      {
        "en": "Computer",
        "ru": "компьютер",
        "pt": "computador",
        "ruPron": "Kompyuter",
        "ptPron": "Computador",
        "emoji": "💻"
      },
      {
        "en": "Wallet",
        "ru": "кошелёк",
        "pt": "carteira",
        "ruPron": "Koshelyok",
        "ptPron": "Carteira",
        "emoji": "👛"
      },
      {
        "en": "Umbrella",
        "ru": "зонт",
        "pt": "guarda-chuva",
        "ruPron": "Zont",
        "ptPron": "Guarda-shuva",
        "emoji": "☂️"
      }
    ],
    "hard": [
      {
        "en": "Scissors",
        "ru": "ножницы",
        "pt": "tesoura",
        "ruPron": "Nozhnitsy",
        "ptPron": "Tesoura",
        "emoji": "✂️"
      },
      {
        "en": "Needle",
        "ru": "игла",
        "pt": "agulha",
        "ruPron": "Igla",
        "ptPron": "Agulya",
        "emoji": "🪡"
      },
      {
        "en": "Candle",
        "ru": "свеча",
        "pt": "vela",
        "ruPron": "Svecha",
        "ptPron": "Vela",
        "emoji": "🕯️"
      },
      {
        "en": "Basket",
        "ru": "корзина",
        "pt": "cesto",
        "ruPron": "Korzina",
        "ptPron": "Cesto",
        "emoji": "🧺"
      },
      {
        "en": "Ladder",
        "ru": "лестница",
        "pt": "escada",
        "ruPron": "Lestnitsa",
        "ptPron": "Escada",
        "emoji": "🪜"
      },
      {
        "en": "Blanket",
        "ru": "одеяло",
        "pt": "cobertor",
        "ruPron": "Odeyalo",
        "ptPron": "Cobertor",
        "emoji": "🧶"
      },
      {
        "en": "Pillow",
        "ru": "подушка",
        "pt": "almofada",
        "ruPron": "Podushka",
        "ptPron": "Almofada",
        "emoji": "☁️"
      },
      {
        "en": "Hammer",
        "ru": "молоток",
        "pt": "martelo",
        "ruPron": "Molotok",
        "ptPron": "Martelo",
        "emoji": "🔨"
      }
    ],
    "insane": [
      {
        "en": "Tweezers",
        "ru": "пинцет",
        "pt": "pinça",
        "ruPron": "Pintset",
        "ptPron": "Pinsa",
        "emoji": "🔧"
      },
      {
        "en": "Corkscrew",
        "ru": "штопор",
        "pt": "saca-rolhas",
        "ruPron": "Shtopor",
        "ptPron": "Saca-rolyas",
        "emoji": "🍷"
      },
      {
        "en": "Thimble",
        "ru": "напёрсток",
        "pt": "dedal",
        "ruPron": "Napyorstok",
        "ptPron": "Dedal",
        "emoji": "🪡"
      },
      {
        "en": "Clothespin",
        "ru": "прищепка",
        "pt": "pregador de roupa",
        "ruPron": "Prishchepka",
        "ptPron": "Pregador de roupa",
        "emoji": "📎"
      },
      {
        "en": "Whetstone",
        "ru": "точильный камень",
        "pt": "pedra de amolar",
        "ruPron": "Tochilnyy kamen",
        "ptPron": "Pedra de amolar",
        "emoji": "🪨"
      },
      {
        "en": "Bellows",
        "ru": "мехи",
        "pt": "fole",
        "ruPron": "Mekhi",
        "ptPron": "Fole",
        "emoji": "💨"
      },
      {
        "en": "Anvil",
        "ru": "наковальня",
        "pt": "bigorna",
        "ruPron": "Nakovalnya",
        "ptPron": "Bigorna",
        "emoji": "⚒️"
      },
      {
        "en": "Padlock",
        "ru": "замок",
        "pt": "cadeado",
        "ruPron": "Zamok",
        "ptPron": "Cadeado",
        "emoji": "🔒"
      }
    ]
  },
  "nouns": {
    "easy": [
      {
        "en": "House",
        "ru": "дом",
        "pt": "casa",
        "ruPron": "Dom",
        "ptPron": "Casa",
        "emoji": "🏠"
      },
      {
        "en": "Man",
        "ru": "мужчина",
        "pt": "homem",
        "ruPron": "Muzhchina",
        "ptPron": "Homem",
        "emoji": "👨"
      },
      {
        "en": "Woman",
        "ru": "женщина",
        "pt": "mulher",
        "ruPron": "Zhenshchina",
        "ptPron": "Mulyer",
        "emoji": "👩"
      },
      {
        "en": "Child",
        "ru": "ребёнок",
        "pt": "criança",
        "ruPron": "Rebyonok",
        "ptPron": "Criansa",
        "emoji": "🧒"
      },
      {
        "en": "Friend",
        "ru": "друг",
        "pt": "amigo",
        "ruPron": "Drug",
        "ptPron": "Amigo",
        "emoji": "🤝"
      },
      {
        "en": "City",
        "ru": "город",
        "pt": "cidade",
        "ruPron": "Gorod",
        "ptPron": "Cidade",
        "emoji": "🏙️"
      },
      {
        "en": "School",
        "ru": "школа",
        "pt": "escola",
        "ruPron": "Shkola",
        "ptPron": "Escola",
        "emoji": "🏫"
      },
      {
        "en": "Water",
        "ru": "вода",
        "pt": "água",
        "ruPron": "Voda",
        "ptPron": "Agua",
        "emoji": "💧"
      }
    ],
    "medium": [
      {
        "en": "Family",
        "ru": "семья",
        "pt": "família",
        "ruPron": "Semya",
        "ptPron": "Familia",
        "emoji": "👨‍👩‍👧‍👦"
      },
      {
        "en": "Street",
        "ru": "улица",
        "pt": "rua",
        "ruPron": "Ulitsa",
        "ptPron": "Hua",
        "emoji": "🛣️"
      },
      {
        "en": "Country",
        "ru": "страна",
        "pt": "país",
        "ruPron": "Strana",
        "ptPron": "Pais",
        "emoji": "🌍"
      },
      {
        "en": "Money",
        "ru": "деньги",
        "pt": "dinheiro",
        "ruPron": "Dengi",
        "ptPron": "Dinyeiro",
        "emoji": "💰"
      },
      {
        "en": "Time",
        "ru": "время",
        "pt": "tempo",
        "ruPron": "Vremya",
        "ptPron": "Tempo",
        "emoji": "⏰"
      },
      {
        "en": "Work",
        "ru": "работа",
        "pt": "trabalho",
        "ruPron": "Rabota",
        "ptPron": "Trabalyo",
        "emoji": "💼"
      },
      {
        "en": "Love",
        "ru": "любовь",
        "pt": "amor",
        "ruPron": "Lyubov",
        "ptPron": "Amor",
        "emoji": "❤️"
      },
      {
        "en": "Idea",
        "ru": "идея",
        "pt": "ideia",
        "ruPron": "Ideya",
        "ptPron": "Ideia",
        "emoji": "💡"
      }
    ],
    "hard": [
      {
        "en": "Freedom",
        "ru": "свобода",
        "pt": "liberdade",
        "ruPron": "Svoboda",
        "ptPron": "Liberdade",
        "emoji": "🕊️"
      },
      {
        "en": "Truth",
        "ru": "правда",
        "pt": "verdade",
        "ruPron": "Pravda",
        "ptPron": "Verdade",
        "emoji": "✅"
      },
      {
        "en": "Justice",
        "ru": "справедливость",
        "pt": "justiça",
        "ruPron": "Spravedlivost",
        "ptPron": "Zhustisa",
        "emoji": "⚖️"
      },
      {
        "en": "Memory",
        "ru": "память",
        "pt": "memória",
        "ruPron": "Pamyat",
        "ptPron": "Memoria",
        "emoji": "🧠"
      },
      {
        "en": "Dream",
        "ru": "мечта",
        "pt": "sonho",
        "ruPron": "Mechta",
        "ptPron": "Sonyo",
        "emoji": "💭"
      },
      {
        "en": "Silence",
        "ru": "тишина",
        "pt": "silêncio",
        "ruPron": "Tishina",
        "ptPron": "Silencio",
        "emoji": "🤫"
      },
      {
        "en": "Courage",
        "ru": "смелость",
        "pt": "coragem",
        "ruPron": "Smelost",
        "ptPron": "Corazhem",
        "emoji": "🦁"
      },
      {
        "en": "Doubt",
        "ru": "сомнение",
        "pt": "dúvida",
        "ruPron": "Somneniye",
        "ptPron": "Duvida",
        "emoji": "❓"
      }
    ],
    "insane": [
      {
        "en": "Conscience",
        "ru": "совесть",
        "pt": "consciência",
        "ruPron": "Sovest",
        "ptPron": "Consciencia",
        "emoji": "🧭"
      },
      {
        "en": "Solitude",
        "ru": "одиночество",
        "pt": "solidão",
        "ruPron": "Odinochestvo",
        "ptPron": "Solidowng",
        "emoji": "🚶"
      },
      {
        "en": "Wisdom",
        "ru": "мудрость",
        "pt": "sabedoria",
        "ruPron": "Mudrost",
        "ptPron": "Sabedoria",
        "emoji": "🦉"
      },
      {
        "en": "Ambiguity",
        "ru": "двусмысленность",
        "pt": "ambiguidade",
        "ruPron": "Dvusmyslennost",
        "ptPron": "Ambizhidade",
        "emoji": "🌫️"
      },
      {
        "en": "Nostalgia",
        "ru": "ностальгия",
        "pt": "nostalgia",
        "ruPron": "Nostalgiya",
        "ptPron": "Nostalzhia",
        "emoji": "📷"
      },
      {
        "en": "Reluctance",
        "ru": "нежелание",
        "pt": "relutância",
        "ruPron": "Nezhelaniye",
        "ptPron": "Helutancia",
        "emoji": "🙅"
      },
      {
        "en": "Perseverance",
        "ru": "настойчивость",
        "pt": "perseverança",
        "ruPron": "Nastoychivost",
        "ptPron": "Perseveransa",
        "emoji": "💪"
      },
      {
        "en": "Redemption",
        "ru": "искупление",
        "pt": "redenção",
        "ruPron": "Iskupleniye",
        "ptPron": "Hedensowng",
        "emoji": "🌅"
      }
    ]
  },
  "adjectives": {
    "easy": [
      {
        "en": "Big",
        "ru": "большой",
        "pt": "grande",
        "ruPron": "Bolshoy",
        "ptPron": "Grande",
        "emoji": "🦣"
      },
      {
        "en": "Small",
        "ru": "маленький",
        "pt": "pequeno",
        "ruPron": "Malenkiy",
        "ptPron": "Pekeno",
        "emoji": "🐜"
      },
      {
        "en": "Good",
        "ru": "хороший",
        "pt": "bom",
        "ruPron": "Khoroshiy",
        "ptPron": "Bom",
        "emoji": "👍"
      },
      {
        "en": "Bad",
        "ru": "плохой",
        "pt": "mau",
        "ruPron": "Plokhoy",
        "ptPron": "Mau",
        "emoji": "👎"
      },
      {
        "en": "Hot",
        "ru": "горячий",
        "pt": "quente",
        "ruPron": "Goryachiy",
        "ptPron": "Kente",
        "emoji": "🥵"
      },
      {
        "en": "Cold",
        "ru": "холодный",
        "pt": "frio",
        "ruPron": "Kholodnyy",
        "ptPron": "Frio",
        "emoji": "🥶"
      },
      {
        "en": "New",
        "ru": "новый",
        "pt": "novo",
        "ruPron": "Novyy",
        "ptPron": "Novo",
        "emoji": "✨"
      },
      {
        "en": "Old",
        "ru": "старый",
        "pt": "velho",
        "ruPron": "Staryy",
        "ptPron": "Velyo",
        "emoji": "🕰️"
      }
    ],
    "medium": [
      {
        "en": "Happy",
        "ru": "счастливый",
        "pt": "feliz",
        "ruPron": "Schastlivyy",
        "ptPron": "Feliz",
        "emoji": "😄"
      },
      {
        "en": "Sad",
        "ru": "грустный",
        "pt": "triste",
        "ruPron": "Grustnyy",
        "ptPron": "Triste",
        "emoji": "😢"
      },
      {
        "en": "Strong",
        "ru": "сильный",
        "pt": "forte",
        "ruPron": "Silnyy",
        "ptPron": "Forte",
        "emoji": "💪"
      },
      {
        "en": "Weak",
        "ru": "слабый",
        "pt": "fraco",
        "ruPron": "Slabyy",
        "ptPron": "Fraco",
        "emoji": "🪶"
      },
      {
        "en": "Fast",
        "ru": "быстрый",
        "pt": "rápido",
        "ruPron": "Bystryy",
        "ptPron": "Hapido",
        "emoji": "⚡"
      },
      {
        "en": "Slow",
        "ru": "медленный",
        "pt": "lento",
        "ruPron": "Medlennyy",
        "ptPron": "Lento",
        "emoji": "🐌"
      },
      {
        "en": "Clean",
        "ru": "чистый",
        "pt": "limpo",
        "ruPron": "Chistyy",
        "ptPron": "Limpo",
        "emoji": "🧼"
      },
      {
        "en": "Dirty",
        "ru": "грязный",
        "pt": "sujo",
        "ruPron": "Gryaznyy",
        "ptPron": "Suzho",
        "emoji": "🟫"
      }
    ],
    "hard": [
      {
        "en": "Generous",
        "ru": "щедрый",
        "pt": "generoso",
        "ruPron": "Shchedryy",
        "ptPron": "Zheneroso",
        "emoji": "🎁"
      },
      {
        "en": "Curious",
        "ru": "любопытный",
        "pt": "curioso",
        "ruPron": "Lyubopytnyy",
        "ptPron": "Curioso",
        "emoji": "🔍"
      },
      {
        "en": "Stubborn",
        "ru": "упрямый",
        "pt": "teimoso",
        "ruPron": "Upryamyy",
        "ptPron": "Teimoso",
        "emoji": "🐂"
      },
      {
        "en": "Fragile",
        "ru": "хрупкий",
        "pt": "frágil",
        "ruPron": "Khrupkiy",
        "ptPron": "Frazhil",
        "emoji": "🥚"
      },
      {
        "en": "Ancient",
        "ru": "древний",
        "pt": "antigo",
        "ruPron": "Drevniy",
        "ptPron": "Antigo",
        "emoji": "🏛️"
      },
      {
        "en": "Brave",
        "ru": "храбрый",
        "pt": "corajoso",
        "ruPron": "Khrabryy",
        "ptPron": "Corazhoso",
        "emoji": "🦸"
      },
      {
        "en": "Jealous",
        "ru": "ревнивый",
        "pt": "ciumento",
        "ruPron": "Revnivyy",
        "ptPron": "Ciumento",
        "emoji": "😒"
      },
      {
        "en": "Lazy",
        "ru": "ленивый",
        "pt": "preguiçoso",
        "ruPron": "Lenivyy",
        "ptPron": "Prezhisoso",
        "emoji": "🦥"
      }
    ],
    "insane": [
      {
        "en": "Meticulous",
        "ru": "дотошный",
        "pt": "meticuloso",
        "ruPron": "Dotoshnyy",
        "ptPron": "Meticuloso",
        "emoji": "🔬"
      },
      {
        "en": "Ambiguous",
        "ru": "двусмысленный",
        "pt": "ambíguo",
        "ruPron": "Dvusmyslennyy",
        "ptPron": "Ambiguo",
        "emoji": "🌫️"
      },
      {
        "en": "Relentless",
        "ru": "неумолимый",
        "pt": "implacável",
        "ruPron": "Neumolimyy",
        "ptPron": "Implacavel",
        "emoji": "🌊"
      },
      {
        "en": "Sluggish",
        "ru": "вялый",
        "pt": "vagaroso",
        "ruPron": "Vyalyy",
        "ptPron": "Vagaroso",
        "emoji": "🐌"
      },
      {
        "en": "Whimsical",
        "ru": "капризный",
        "pt": "caprichoso",
        "ruPron": "Kapriznyy",
        "ptPron": "Caprishoso",
        "emoji": "🎠"
      },
      {
        "en": "Pretentious",
        "ru": "претенциозный",
        "pt": "pretensioso",
        "ruPron": "Pretentsioznyy",
        "ptPron": "Pretensioso",
        "emoji": "🎩"
      },
      {
        "en": "Resilient",
        "ru": "устойчивый",
        "pt": "resiliente",
        "ruPron": "Ustoychivyy",
        "ptPron": "Hesiliente",
        "emoji": "🌱"
      },
      {
        "en": "Melancholic",
        "ru": "меланхоличный",
        "pt": "melancólico",
        "ruPron": "Melankholichnyy",
        "ptPron": "Melancolico",
        "emoji": "🌧️"
      }
    ]
  },
  "verbs": {
    "easy": [
      {
        "en": "To eat",
        "ru": "есть",
        "pt": "comer",
        "ruPron": "Yest",
        "ptPron": "Comer",
        "emoji": "🍽️"
      },
      {
        "en": "To drink",
        "ru": "пить",
        "pt": "beber",
        "ruPron": "Pit",
        "ptPron": "Beber",
        "emoji": "🥤"
      },
      {
        "en": "To go",
        "ru": "идти",
        "pt": "ir",
        "ruPron": "Idti",
        "ptPron": "Ir",
        "emoji": "🚶"
      },
      {
        "en": "To see",
        "ru": "видеть",
        "pt": "ver",
        "ruPron": "Videt",
        "ptPron": "Ver",
        "emoji": "👀"
      },
      {
        "en": "To sleep",
        "ru": "спать",
        "pt": "dormir",
        "ruPron": "Spat",
        "ptPron": "Dormir",
        "emoji": "😴"
      },
      {
        "en": "To read",
        "ru": "читать",
        "pt": "ler",
        "ruPron": "Chitat",
        "ptPron": "Ler",
        "emoji": "📖"
      },
      {
        "en": "To write",
        "ru": "писать",
        "pt": "escrever",
        "ruPron": "Pisat",
        "ptPron": "Escrever",
        "emoji": "✍️"
      },
      {
        "en": "To speak",
        "ru": "говорить",
        "pt": "falar",
        "ruPron": "Govorit",
        "ptPron": "Falar",
        "emoji": "🗣️"
      }
    ],
    "medium": [
      {
        "en": "To buy",
        "ru": "покупать",
        "pt": "comprar",
        "ruPron": "Pokupat",
        "ptPron": "Comprar",
        "emoji": "🛒"
      },
      {
        "en": "To sell",
        "ru": "продавать",
        "pt": "vender",
        "ruPron": "Prodavat",
        "ptPron": "Vender",
        "emoji": "🏷️"
      },
      {
        "en": "To open",
        "ru": "открывать",
        "pt": "abrir",
        "ruPron": "Otkryvat",
        "ptPron": "Abrir",
        "emoji": "🔓"
      },
      {
        "en": "To close",
        "ru": "закрывать",
        "pt": "fechar",
        "ruPron": "Zakryvat",
        "ptPron": "Feshar",
        "emoji": "🔒"
      },
      {
        "en": "To understand",
        "ru": "понимать",
        "pt": "entender",
        "ruPron": "Ponimat",
        "ptPron": "Entender",
        "emoji": "💡"
      },
      {
        "en": "To remember",
        "ru": "помнить",
        "pt": "lembrar",
        "ruPron": "Pomnit",
        "ptPron": "Lembrar",
        "emoji": "🧠"
      },
      {
        "en": "To forget",
        "ru": "забывать",
        "pt": "esquecer",
        "ruPron": "Zabyvat",
        "ptPron": "Eskecer",
        "emoji": "🌫️"
      },
      {
        "en": "To wait",
        "ru": "ждать",
        "pt": "esperar",
        "ruPron": "Zhdat",
        "ptPron": "Esperar",
        "emoji": "⏳"
      }
    ],
    "hard": [
      {
        "en": "To achieve",
        "ru": "достигать",
        "pt": "alcançar",
        "ruPron": "Dostigat",
        "ptPron": "Alcansar",
        "emoji": "🏆"
      },
      {
        "en": "To improve",
        "ru": "улучшать",
        "pt": "melhorar",
        "ruPron": "Uluchshat",
        "ptPron": "Melyorar",
        "emoji": "📈"
      },
      {
        "en": "To complain",
        "ru": "жаловаться",
        "pt": "reclamar",
        "ruPron": "Zhalovatsya",
        "ptPron": "Heclamar",
        "emoji": "😤"
      },
      {
        "en": "To pretend",
        "ru": "притворяться",
        "pt": "fingir",
        "ruPron": "Pritvoryatsya",
        "ptPron": "Finzhir",
        "emoji": "🎭"
      },
      {
        "en": "To convince",
        "ru": "убеждать",
        "pt": "convencer",
        "ruPron": "Ubezhdat",
        "ptPron": "Convencer",
        "emoji": "🤝"
      },
      {
        "en": "To avoid",
        "ru": "избегать",
        "pt": "evitar",
        "ruPron": "Izbegat",
        "ptPron": "Evitar",
        "emoji": "🚫"
      },
      {
        "en": "To require",
        "ru": "требовать",
        "pt": "exigir",
        "ruPron": "Trebovat",
        "ptPron": "Eshizhir",
        "emoji": "❗"
      },
      {
        "en": "To warn",
        "ru": "предупреждать",
        "pt": "avisar",
        "ruPron": "Preduprezhdat",
        "ptPron": "Avisar",
        "emoji": "⚠️"
      }
    ],
    "insane": [
      {
        "en": "To relinquish",
        "ru": "отказываться",
        "pt": "renunciar",
        "ruPron": "Otkazyvatsya",
        "ptPron": "Henunciar",
        "emoji": "🏳️"
      },
      {
        "en": "To undermine",
        "ru": "подрывать",
        "pt": "minar",
        "ruPron": "Podryvat",
        "ptPron": "Minar",
        "emoji": "⛏️"
      },
      {
        "en": "To reconcile",
        "ru": "примирять",
        "pt": "reconciliar",
        "ruPron": "Primiryat",
        "ptPron": "Heconciliar",
        "emoji": "🤝"
      },
      {
        "en": "To alleviate",
        "ru": "облегчать",
        "pt": "aliviar",
        "ruPron": "Oblegchat",
        "ptPron": "Aliviar",
        "emoji": "💊"
      },
      {
        "en": "To perceive",
        "ru": "воспринимать",
        "pt": "perceber",
        "ruPron": "Vosprinimat",
        "ptPron": "Perceber",
        "emoji": "👁️"
      },
      {
        "en": "To overwhelm",
        "ru": "ошеломлять",
        "pt": "sobrecarregar",
        "ruPron": "Oshelomlyat",
        "ptPron": "Sobrecahegar",
        "emoji": "🌊"
      },
      {
        "en": "To scrutinize",
        "ru": "изучать досконально",
        "pt": "examinar minuciosamente",
        "ruPron": "Izuchat doskonalno",
        "ptPron": "Eshaminar minuciosamente",
        "emoji": "🔍"
      },
      {
        "en": "To hinder",
        "ru": "препятствовать",
        "pt": "impedir",
        "ruPron": "Prepyatstvovat",
        "ptPron": "Impedir",
        "emoji": "🚧"
      }
    ]
  },
  "adverbs": {
    "easy": [
      {
        "en": "Now",
        "ru": "сейчас",
        "pt": "agora",
        "ruPron": "Seychas",
        "ptPron": "Agora",
        "emoji": "⏱️"
      },
      {
        "en": "Here",
        "ru": "здесь",
        "pt": "aqui",
        "ruPron": "Zdes",
        "ptPron": "Aki",
        "emoji": "📍"
      },
      {
        "en": "There",
        "ru": "там",
        "pt": "ali",
        "ruPron": "Tam",
        "ptPron": "Ali",
        "emoji": "👉"
      },
      {
        "en": "Today",
        "ru": "сегодня",
        "pt": "hoje",
        "ruPron": "Segodnya",
        "ptPron": "Hozhe",
        "emoji": "📅"
      },
      {
        "en": "Slowly",
        "ru": "медленно",
        "pt": "devagar",
        "ruPron": "Medlenno",
        "ptPron": "Devagar",
        "emoji": "🐢"
      },
      {
        "en": "Quickly",
        "ru": "быстро",
        "pt": "rapidamente",
        "ruPron": "Bystro",
        "ptPron": "Hapidamente",
        "emoji": "⚡"
      },
      {
        "en": "Always",
        "ru": "всегда",
        "pt": "sempre",
        "ruPron": "Vsegda",
        "ptPron": "Sempre",
        "emoji": "♾️"
      },
      {
        "en": "Never",
        "ru": "никогда",
        "pt": "nunca",
        "ruPron": "Nikogda",
        "ptPron": "Nunca",
        "emoji": "🚫"
      }
    ],
    "medium": [
      {
        "en": "Often",
        "ru": "часто",
        "pt": "frequentemente",
        "ruPron": "Chasto",
        "ptPron": "Frekentemente",
        "emoji": "🔁"
      },
      {
        "en": "Rarely",
        "ru": "редко",
        "pt": "raramente",
        "ruPron": "Redko",
        "ptPron": "Haramente",
        "emoji": "🎲"
      },
      {
        "en": "Already",
        "ru": "уже",
        "pt": "já",
        "ruPron": "Uzhe",
        "ptPron": "Zha",
        "emoji": "✅"
      },
      {
        "en": "Still",
        "ru": "всё ещё",
        "pt": "ainda",
        "ruPron": "Vsyo yeshchyo",
        "ptPron": "Ainda",
        "emoji": "⏸️"
      },
      {
        "en": "Soon",
        "ru": "скоро",
        "pt": "em breve",
        "ruPron": "Skoro",
        "ptPron": "Em breve",
        "emoji": "⏳"
      },
      {
        "en": "Early",
        "ru": "рано",
        "pt": "cedo",
        "ruPron": "Rano",
        "ptPron": "Cedo",
        "emoji": "🌅"
      },
      {
        "en": "Late",
        "ru": "поздно",
        "pt": "tarde",
        "ruPron": "Pozdno",
        "ptPron": "Tarde",
        "emoji": "🌙"
      },
      {
        "en": "Together",
        "ru": "вместе",
        "pt": "juntos",
        "ruPron": "Vmeste",
        "ptPron": "Zhuntos",
        "emoji": "🤝"
      }
    ],
    "hard": [
      {
        "en": "Suddenly",
        "ru": "внезапно",
        "pt": "de repente",
        "ruPron": "Vnezapno",
        "ptPron": "De repente",
        "emoji": "💥"
      },
      {
        "en": "Certainly",
        "ru": "конечно",
        "pt": "certamente",
        "ruPron": "Konechno",
        "ptPron": "Certamente",
        "emoji": "💯"
      },
      {
        "en": "Probably",
        "ru": "вероятно",
        "pt": "provavelmente",
        "ruPron": "Veroyatno",
        "ptPron": "Provavelmente",
        "emoji": "🤔"
      },
      {
        "en": "Hardly",
        "ru": "едва",
        "pt": "dificilmente",
        "ruPron": "Yedva",
        "ptPron": "Dificilmente",
        "emoji": "🤏"
      },
      {
        "en": "Nearly",
        "ru": "почти",
        "pt": "quase",
        "ruPron": "Pochti",
        "ptPron": "Quase",
        "emoji": "🔜"
      },
      {
        "en": "Barely",
        "ru": "едва ли",
        "pt": "mal",
        "ruPron": "Yedva li",
        "ptPron": "Mal",
        "emoji": "🤏"
      },
      {
        "en": "Meanwhile",
        "ru": "тем временем",
        "pt": "entretanto",
        "ruPron": "Tem vremenem",
        "ptPron": "Entretanto",
        "emoji": "⏲️"
      },
      {
        "en": "Otherwise",
        "ru": "иначе",
        "pt": "caso contrário",
        "ruPron": "Inache",
        "ptPron": "Caso contrario",
        "emoji": "🔀"
      }
    ],
    "insane": [
      {
        "en": "Nevertheless",
        "ru": "тем не менее",
        "pt": "no entanto",
        "ruPron": "Tem ne meneye",
        "ptPron": "No entanto",
        "emoji": "🔄"
      },
      {
        "en": "Consequently",
        "ru": "следовательно",
        "pt": "consequentemente",
        "ruPron": "Sledovatelno",
        "ptPron": "Consekentemente",
        "emoji": "➡️"
      },
      {
        "en": "Inadvertently",
        "ru": "непреднамеренно",
        "pt": "inadvertidamente",
        "ruPron": "Neprednamerenno",
        "ptPron": "Inadvertidamente",
        "emoji": "🤷"
      },
      {
        "en": "Simultaneously",
        "ru": "одновременно",
        "pt": "simultaneamente",
        "ruPron": "Odnovremenno",
        "ptPron": "Simultaneamente",
        "emoji": "🕐"
      },
      {
        "en": "Reluctantly",
        "ru": "неохотно",
        "pt": "relutantemente",
        "ruPron": "Neokhotno",
        "ptPron": "Helutantemente",
        "emoji": "😬"
      },
      {
        "en": "Undoubtedly",
        "ru": "несомненно",
        "pt": "indubitavelmente",
        "ruPron": "Nesomnenno",
        "ptPron": "Indubitavelmente",
        "emoji": "✅"
      },
      {
        "en": "Thoroughly",
        "ru": "тщательно",
        "pt": "minuciosamente",
        "ruPron": "Tshchatelno",
        "ptPron": "Minuciosamente",
        "emoji": "🔎"
      },
      {
        "en": "Predominantly",
        "ru": "преимущественно",
        "pt": "predominantemente",
        "ruPron": "Preimushchestvenno",
        "ptPron": "Predominantemente",
        "emoji": "📊"
      }
    ]
  },
  "drinks": {
    "easy": [
      {
        "en": "Water",
        "ru": "вода",
        "pt": "água",
        "ruPron": "Voda",
        "ptPron": "Agua",
        "emoji": "💧"
      },
      {
        "en": "Milk",
        "ru": "молоко",
        "pt": "leite",
        "ruPron": "Moloko",
        "ptPron": "Leite",
        "emoji": "🥛"
      },
      {
        "en": "Juice",
        "ru": "сок",
        "pt": "suco",
        "ruPron": "Sok",
        "ptPron": "Suco",
        "emoji": "🧃"
      },
      {
        "en": "Tea",
        "ru": "чай",
        "pt": "chá",
        "ruPron": "Chay",
        "ptPron": "Sha",
        "emoji": "🍵"
      },
      {
        "en": "Coffee",
        "ru": "кофе",
        "pt": "café",
        "ruPron": "Kofe",
        "ptPron": "Cafe",
        "emoji": "☕"
      },
      {
        "en": "Beer",
        "ru": "пиво",
        "pt": "cerveja",
        "ruPron": "Pivo",
        "ptPron": "Cervezha",
        "emoji": "🍺"
      },
      {
        "en": "Wine",
        "ru": "вино",
        "pt": "vinho",
        "ruPron": "Vino",
        "ptPron": "Vinyo",
        "emoji": "🍷"
      },
      {
        "en": "Soda",
        "ru": "газировка",
        "pt": "refrigerante",
        "ruPron": "Gazirovka",
        "ptPron": "Hefrizherante",
        "emoji": "🥤"
      }
    ],
    "medium": [
      {
        "en": "Lemonade",
        "ru": "лимонад",
        "pt": "limonada",
        "ruPron": "Limonad",
        "ptPron": "Limonada",
        "emoji": "🍋"
      },
      {
        "en": "Hot chocolate",
        "ru": "какао",
        "pt": "chocolate quente",
        "ruPron": "Kakao",
        "ptPron": "Shocolate kente",
        "emoji": "🍫"
      },
      {
        "en": "Champagne",
        "ru": "шампанское",
        "pt": "champanhe",
        "ruPron": "Shampanskoye",
        "ptPron": "Shampanye",
        "emoji": "🍾"
      },
      {
        "en": "Cocktail",
        "ru": "коктейль",
        "pt": "coquetel",
        "ruPron": "Kokteyl",
        "ptPron": "Coketel",
        "emoji": "🍸"
      },
      {
        "en": "Smoothie",
        "ru": "смузи",
        "pt": "vitamina",
        "ruPron": "Smuzi",
        "ptPron": "Vitamina",
        "emoji": "🥤"
      },
      {
        "en": "Kefir",
        "ru": "кефир",
        "pt": "kefir",
        "ruPron": "Kefir",
        "ptPron": "Kefir",
        "emoji": "🥛"
      },
      {
        "en": "Compote",
        "ru": "компот",
        "pt": "compota de frutas",
        "ruPron": "Kompot",
        "ptPron": "Compota de frutas",
        "emoji": "🍹"
      },
      {
        "en": "Cider",
        "ru": "сидр",
        "pt": "sidra",
        "ruPron": "Sidr",
        "ptPron": "Sidra",
        "emoji": "🍏"
      }
    ],
    "hard": [
      {
        "en": "Mineral water",
        "ru": "минеральная вода",
        "pt": "água mineral",
        "ruPron": "Mineralnaya voda",
        "ptPron": "Agua mineral",
        "emoji": "💧"
      },
      {
        "en": "Herbal tea",
        "ru": "травяной чай",
        "pt": "chá de ervas",
        "ruPron": "Travyanoy chay",
        "ptPron": "Sha de ervas",
        "emoji": "🌿"
      },
      {
        "en": "Sparkling wine",
        "ru": "игристое вино",
        "pt": "vinho espumante",
        "ruPron": "Igristoye vino",
        "ptPron": "Vinyo espumante",
        "emoji": "🍾"
      },
      {
        "en": "Mulled wine",
        "ru": "глинтвейн",
        "pt": "vinho quente",
        "ruPron": "Glintveyn",
        "ptPron": "Vinyo kente",
        "emoji": "🍷"
      },
      {
        "en": "Buttermilk",
        "ru": "пахта",
        "pt": "leitelho",
        "ruPron": "Pakhta",
        "ptPron": "Leitelyo",
        "emoji": "🥛"
      },
      {
        "en": "Liqueur",
        "ru": "ликёр",
        "pt": "licor",
        "ruPron": "Likyor",
        "ptPron": "Licor",
        "emoji": "🥃"
      },
      {
        "en": "Whiskey",
        "ru": "виски",
        "pt": "uísque",
        "ruPron": "Viski",
        "ptPron": "Uiske",
        "emoji": "🥃"
      },
      {
        "en": "Vodka",
        "ru": "водка",
        "pt": "vodca",
        "ruPron": "Vodka",
        "ptPron": "Vodca",
        "emoji": "🍸"
      }
    ],
    "insane": [
      {
        "en": "Fermented milk drink",
        "ru": "кисломолочный напиток",
        "pt": "bebida láctea fermentada",
        "ruPron": "Kislomolochnyy napitok",
        "ptPron": "Bebida lactea fermentada",
        "emoji": "🥛"
      },
      {
        "en": "Birch sap",
        "ru": "берёзовый сок",
        "pt": "seiva de bétula",
        "ruPron": "Beryozovyy sok",
        "ptPron": "Seiva de betula",
        "emoji": "🌳"
      },
      {
        "en": "Kvass",
        "ru": "квас",
        "pt": "kvass",
        "ruPron": "Kvas",
        "ptPron": "Kvass",
        "emoji": "🍺"
      },
      {
        "en": "Mead",
        "ru": "медовуха",
        "pt": "hidromel",
        "ruPron": "Medovukha",
        "ptPron": "Hidromel",
        "emoji": "🍯"
      },
      {
        "en": "Absinthe",
        "ru": "абсент",
        "pt": "absinto",
        "ruPron": "Absent",
        "ptPron": "Absinto",
        "emoji": "🥃"
      },
      {
        "en": "Tonic water",
        "ru": "тоник",
        "pt": "água tônica",
        "ruPron": "Tonik",
        "ptPron": "Agua tonica",
        "emoji": "🧊"
      },
      {
        "en": "Chicory drink",
        "ru": "напиток из цикория",
        "pt": "bebida de chicória",
        "ruPron": "Napitok iz tsikoriya",
        "ptPron": "Bebida de shicoria",
        "emoji": "☕"
      },
      {
        "en": "Fruit punch",
        "ru": "фруктовый пунш",
        "pt": "ponche de frutas",
        "ruPron": "Fruktovyy punsh",
        "ptPron": "Ponshe de frutas",
        "emoji": "🍹"
      }
    ]
  },
  "colors": {
    "easy": [
      {
        "en": "Red",
        "ru": "красный",
        "pt": "vermelho",
        "ruPron": "Krasnyy",
        "ptPron": "Vermelyo",
        "emoji": "🔴",
        "swatch": "#e53935"
      },
      {
        "en": "Blue",
        "ru": "синий",
        "pt": "azul",
        "ruPron": "Siniy",
        "ptPron": "Azul",
        "emoji": "🔵",
        "swatch": "#1e88e5"
      },
      {
        "en": "Green",
        "ru": "зелёный",
        "pt": "verde",
        "ruPron": "Zelyonyy",
        "ptPron": "Verde",
        "emoji": "🟢",
        "swatch": "#43a047"
      },
      {
        "en": "Yellow",
        "ru": "жёлтый",
        "pt": "amarelo",
        "ruPron": "Zhyoltyy",
        "ptPron": "Amarelo",
        "emoji": "🟡",
        "swatch": "#fdd835"
      },
      {
        "en": "Black",
        "ru": "чёрный",
        "pt": "preto",
        "ruPron": "Chyornyy",
        "ptPron": "Preto",
        "emoji": "⚫",
        "swatch": "#212121"
      },
      {
        "en": "White",
        "ru": "белый",
        "pt": "branco",
        "ruPron": "Belyy",
        "ptPron": "Branco",
        "emoji": "⚪",
        "swatch": "#fafafa"
      },
      {
        "en": "Orange",
        "ru": "оранжевый",
        "pt": "laranja",
        "ruPron": "Oranzhevyy",
        "ptPron": "Laranzha",
        "emoji": "🟠",
        "swatch": "#fb8c00"
      },
      {
        "en": "Pink",
        "ru": "розовый",
        "pt": "rosa",
        "ruPron": "Rozovyy",
        "ptPron": "Hosa",
        "emoji": "🌸",
        "swatch": "#ec407a"
      }
    ],
    "medium": [
      {
        "en": "Purple",
        "ru": "фиолетовый",
        "pt": "roxo",
        "ruPron": "Fioletovyy",
        "ptPron": "Hosho",
        "emoji": "🟣",
        "swatch": "#8e24aa"
      },
      {
        "en": "Brown",
        "ru": "коричневый",
        "pt": "marrom",
        "ruPron": "Korichnevyy",
        "ptPron": "Mahom",
        "emoji": "🟤",
        "swatch": "#6d4c41"
      },
      {
        "en": "Gray",
        "ru": "серый",
        "pt": "cinza",
        "ruPron": "Seryy",
        "ptPron": "Cinza",
        "emoji": "🩶",
        "swatch": "#9e9e9e"
      },
      {
        "en": "Gold",
        "ru": "золотой",
        "pt": "dourado",
        "ruPron": "Zolotoy",
        "ptPron": "Dourado",
        "emoji": "✨",
        "swatch": "#d4af37"
      },
      {
        "en": "Silver",
        "ru": "серебряный",
        "pt": "prateado",
        "ruPron": "Serebryanyy",
        "ptPron": "Prateado",
        "emoji": "🥈",
        "swatch": "#c0c0c0"
      },
      {
        "en": "Beige",
        "ru": "бежевый",
        "pt": "bege",
        "ruPron": "Bezhevyy",
        "ptPron": "Bezhe",
        "emoji": "🟫",
        "swatch": "#d8c3a5"
      },
      {
        "en": "Turquoise",
        "ru": "бирюзовый",
        "pt": "turquesa",
        "ruPron": "Biryuzovyy",
        "ptPron": "Turkesa",
        "emoji": "💠",
        "swatch": "#1abc9c"
      },
      {
        "en": "Violet",
        "ru": "фиалковый",
        "pt": "violeta",
        "ruPron": "Fialkovyy",
        "ptPron": "Violeta",
        "emoji": "🟣",
        "swatch": "#7c4dff"
      }
    ],
    "hard": [
      {
        "en": "Crimson",
        "ru": "малиновый",
        "pt": "carmesim",
        "ruPron": "Malinovyy",
        "ptPron": "Carmesim",
        "emoji": "🔴",
        "swatch": "#dc143c"
      },
      {
        "en": "Burgundy",
        "ru": "бордовый",
        "pt": "bordô",
        "ruPron": "Bordovyy",
        "ptPron": "Bordo",
        "emoji": "🟥",
        "swatch": "#800020"
      },
      {
        "en": "Navy blue",
        "ru": "тёмно-синий",
        "pt": "azul-marinho",
        "ruPron": "Tyomno-siniy",
        "ptPron": "Azul-marinyo",
        "emoji": "🔵",
        "swatch": "#001f54"
      },
      {
        "en": "Olive",
        "ru": "оливковый",
        "pt": "verde-oliva",
        "ruPron": "Olivkovyy",
        "ptPron": "Verde-oliva",
        "emoji": "🟢",
        "swatch": "#708238"
      },
      {
        "en": "Lavender",
        "ru": "лавандовый",
        "pt": "lavanda",
        "ruPron": "Lavandovyy",
        "ptPron": "Lavanda",
        "emoji": "🟣",
        "swatch": "#b57edc"
      },
      {
        "en": "Emerald",
        "ru": "изумрудный",
        "pt": "esmeralda",
        "ruPron": "Izumrudnyy",
        "ptPron": "Esmeralda",
        "emoji": "💚",
        "swatch": "#50c878"
      },
      {
        "en": "Amber",
        "ru": "янтарный",
        "pt": "âmbar",
        "ruPron": "Yantarnyy",
        "ptPron": "Ambar",
        "emoji": "🟠",
        "swatch": "#ffbf00"
      },
      {
        "en": "Charcoal",
        "ru": "угольно-серый",
        "pt": "cinza-carvão",
        "ruPron": "Ugolno-seryy",
        "ptPron": "Cinza-carvowng",
        "emoji": "⚫",
        "swatch": "#36454f"
      }
    ],
    "insane": [
      {
        "en": "Chartreuse",
        "ru": "шартрёзный",
        "pt": "verde-chartreuse",
        "ruPron": "Shartryoznyy",
        "ptPron": "Verde-shartreuse",
        "emoji": "🟢",
        "swatch": "#7fff00"
      },
      {
        "en": "Vermilion",
        "ru": "киноварный",
        "pt": "vermelhão",
        "ruPron": "Kinovarnyy",
        "ptPron": "Vermelyowng",
        "emoji": "🔴",
        "swatch": "#e34234"
      },
      {
        "en": "Mauve",
        "ru": "розовато-лиловый",
        "pt": "malva",
        "ruPron": "Rozovato-lilovyy",
        "ptPron": "Malva",
        "emoji": "🟣",
        "swatch": "#b784a7"
      },
      {
        "en": "Ochre",
        "ru": "охристый",
        "pt": "ocre",
        "ruPron": "Okhristyy",
        "ptPron": "Ocre",
        "emoji": "🟠",
        "swatch": "#cc7722"
      },
      {
        "en": "Periwinkle",
        "ru": "барвинковый",
        "pt": "azul-pervinca",
        "ruPron": "Barvinkovyy",
        "ptPron": "Azul-pervinca",
        "emoji": "🔵",
        "swatch": "#ccccff"
      },
      {
        "en": "Cerulean",
        "ru": "лазурный",
        "pt": "azul-celeste",
        "ruPron": "Lazurnyy",
        "ptPron": "Azul-celeste",
        "emoji": "🔵",
        "swatch": "#007ba7"
      },
      {
        "en": "Magenta",
        "ru": "маджента",
        "pt": "magenta",
        "ruPron": "Madzhenta",
        "ptPron": "Mazhenta",
        "emoji": "🩷",
        "swatch": "#ff00ff"
      },
      {
        "en": "Taupe",
        "ru": "тауп",
        "pt": "cor de toupeira",
        "ruPron": "Taup",
        "ptPron": "Cor de toupeira",
        "emoji": "🟤",
        "swatch": "#483c32"
      }
    ]
  },
  "food": {
    "easy": [
      {
        "en": "Bread",
        "ru": "хлеб",
        "pt": "pão",
        "ruPron": "Khleb",
        "ptPron": "Powng",
        "emoji": "🍞"
      },
      {
        "en": "Cheese",
        "ru": "сыр",
        "pt": "queijo",
        "ruPron": "Syr",
        "ptPron": "Keizho",
        "emoji": "🧀"
      },
      {
        "en": "Egg",
        "ru": "яйцо",
        "pt": "ovo",
        "ruPron": "Yaytso",
        "ptPron": "Ovo",
        "emoji": "🥚"
      },
      {
        "en": "Meat",
        "ru": "мясо",
        "pt": "carne",
        "ruPron": "Myaso",
        "ptPron": "Carne",
        "emoji": "🥩"
      },
      {
        "en": "Rice",
        "ru": "рис",
        "pt": "arroz",
        "ruPron": "Ris",
        "ptPron": "Ahoz",
        "emoji": "🍚"
      },
      {
        "en": "Soup",
        "ru": "суп",
        "pt": "sopa",
        "ruPron": "Sup",
        "ptPron": "Sopa",
        "emoji": "🍲"
      },
      {
        "en": "Salad",
        "ru": "салат",
        "pt": "salada",
        "ruPron": "Salat",
        "ptPron": "Salada",
        "emoji": "🥗"
      },
      {
        "en": "Butter",
        "ru": "масло",
        "pt": "manteiga",
        "ruPron": "Maslo",
        "ptPron": "Manteiga",
        "emoji": "🧈"
      }
    ],
    "medium": [
      {
        "en": "Sausage",
        "ru": "колбаса",
        "pt": "salsicha",
        "ruPron": "Kolbasa",
        "ptPron": "Salsisha",
        "emoji": "🌭"
      },
      {
        "en": "Pasta",
        "ru": "паста",
        "pt": "massa",
        "ruPron": "Pasta",
        "ptPron": "Massa",
        "emoji": "🍝"
      },
      {
        "en": "Pizza",
        "ru": "пицца",
        "pt": "pizza",
        "ruPron": "Pitstsa",
        "ptPron": "Pizza",
        "emoji": "🍕"
      },
      {
        "en": "Sandwich",
        "ru": "бутерброд",
        "pt": "sanduíche",
        "ruPron": "Buterbrod",
        "ptPron": "Sanduishe",
        "emoji": "🥪"
      },
      {
        "en": "Pie",
        "ru": "пирог",
        "pt": "torta",
        "ruPron": "Pirog",
        "ptPron": "Torta",
        "emoji": "🥧"
      },
      {
        "en": "Honey",
        "ru": "мёд",
        "pt": "mel",
        "ruPron": "Myod",
        "ptPron": "Mel",
        "emoji": "🍯"
      },
      {
        "en": "Sugar",
        "ru": "сахар",
        "pt": "açúcar",
        "ruPron": "Sakhar",
        "ptPron": "Asucar",
        "emoji": "🍬"
      },
      {
        "en": "Salt",
        "ru": "соль",
        "pt": "sal",
        "ruPron": "Sol",
        "ptPron": "Sal",
        "emoji": "🧂"
      }
    ],
    "hard": [
      {
        "en": "Dumplings",
        "ru": "пельмени",
        "pt": "pastéis",
        "ruPron": "Pelmeni",
        "ptPron": "Pasteis",
        "emoji": "🥟"
      },
      {
        "en": "Pancake",
        "ru": "блин",
        "pt": "panqueca",
        "ruPron": "Blin",
        "ptPron": "Pankeca",
        "emoji": "🥞"
      },
      {
        "en": "Broth",
        "ru": "бульон",
        "pt": "caldo",
        "ruPron": "Bulon",
        "ptPron": "Caldo",
        "emoji": "🍲"
      },
      {
        "en": "Stew",
        "ru": "тушёное мясо",
        "pt": "ensopado",
        "ruPron": "Tushyonoye myaso",
        "ptPron": "Ensopado",
        "emoji": "🍛"
      },
      {
        "en": "Porridge",
        "ru": "каша",
        "pt": "mingau",
        "ruPron": "Kasha",
        "ptPron": "Mingau",
        "emoji": "🥣"
      },
      {
        "en": "Dough",
        "ru": "тесто",
        "pt": "massa crua",
        "ruPron": "Testo",
        "ptPron": "Massa crua",
        "emoji": "🥖"
      },
      {
        "en": "Yeast",
        "ru": "дрожжи",
        "pt": "fermento",
        "ruPron": "Drozhzhi",
        "ptPron": "Fermento",
        "emoji": "🍞"
      },
      {
        "en": "Gravy",
        "ru": "подливка",
        "pt": "molho",
        "ruPron": "Podlivka",
        "ptPron": "Molyo",
        "emoji": "🥣"
      }
    ],
    "insane": [
      {
        "en": "Casserole",
        "ru": "запеканка",
        "pt": "caçarola",
        "ruPron": "Zapekanka",
        "ptPron": "Casarola",
        "emoji": "🍲"
      },
      {
        "en": "Aspic",
        "ru": "заливное",
        "pt": "aspic",
        "ruPron": "Zalivnoye",
        "ptPron": "Aspic",
        "emoji": "🍮"
      },
      {
        "en": "Marinade",
        "ru": "маринад",
        "pt": "marinada",
        "ruPron": "Marinad",
        "ptPron": "Marinada",
        "emoji": "🧴"
      },
      {
        "en": "Bouillon cube",
        "ru": "бульонный кубик",
        "pt": "cubo de caldo",
        "ruPron": "Bulonnyy kubik",
        "ptPron": "Cubo de caldo",
        "emoji": "🧊"
      },
      {
        "en": "Sourdough",
        "ru": "закваска",
        "pt": "fermento natural",
        "ruPron": "Zakvaska",
        "ptPron": "Fermento natural",
        "emoji": "🍞"
      },
      {
        "en": "Confectionery",
        "ru": "кондитерские изделия",
        "pt": "confeitaria",
        "ruPron": "Konditerskiye izdeliya",
        "ptPron": "Confeitaria",
        "emoji": "🍰"
      },
      {
        "en": "Offal",
        "ru": "субпродукты",
        "pt": "miúdos",
        "ruPron": "Subprodukty",
        "ptPron": "Miudos",
        "emoji": "🍖"
      },
      {
        "en": "Preserve",
        "ru": "варенье",
        "pt": "conserva",
        "ruPron": "Varenye",
        "ptPron": "Conserva",
        "emoji": "🫙"
      }
    ]
  },
  "professions": {
    "easy": [
      {
        "en": "Teacher",
        "ru": "учитель",
        "pt": "professor",
        "ruPron": "Uchitel",
        "ptPron": "Professor",
        "emoji": "👩‍🏫"
      },
      {
        "en": "Doctor",
        "ru": "врач",
        "pt": "médico",
        "ruPron": "Vrach",
        "ptPron": "Medico",
        "emoji": "👨‍⚕️"
      },
      {
        "en": "Police officer",
        "ru": "полицейский",
        "pt": "policial",
        "ruPron": "Politseyskiy",
        "ptPron": "Policial",
        "emoji": "👮"
      },
      {
        "en": "Cook",
        "ru": "повар",
        "pt": "cozinheiro",
        "ruPron": "Povar",
        "ptPron": "Cozinyeiro",
        "emoji": "👨‍🍳"
      },
      {
        "en": "Driver",
        "ru": "водитель",
        "pt": "motorista",
        "ruPron": "Voditel",
        "ptPron": "Motorista",
        "emoji": "🚗"
      },
      {
        "en": "Farmer",
        "ru": "фермер",
        "pt": "fazendeiro",
        "ruPron": "Fermer",
        "ptPron": "Fazendeiro",
        "emoji": "👨‍🌾"
      },
      {
        "en": "Nurse",
        "ru": "медсестра",
        "pt": "enfermeira",
        "ruPron": "Medsestra",
        "ptPron": "Enfermeira",
        "emoji": "👩‍⚕️"
      },
      {
        "en": "Builder",
        "ru": "строитель",
        "pt": "construtor",
        "ruPron": "Stroitel",
        "ptPron": "Construtor",
        "emoji": "👷"
      }
    ],
    "medium": [
      {
        "en": "Engineer",
        "ru": "инженер",
        "pt": "engenheiro",
        "ruPron": "Inzhener",
        "ptPron": "Enzhenyeiro",
        "emoji": "🛠️"
      },
      {
        "en": "Lawyer",
        "ru": "юрист",
        "pt": "advogado",
        "ruPron": "Yurist",
        "ptPron": "Advogado",
        "emoji": "⚖️"
      },
      {
        "en": "Artist",
        "ru": "художник",
        "pt": "artista",
        "ruPron": "Khudozhnik",
        "ptPron": "Artista",
        "emoji": "🎨"
      },
      {
        "en": "Musician",
        "ru": "музыкант",
        "pt": "músico",
        "ruPron": "Muzykant",
        "ptPron": "Musico",
        "emoji": "🎵"
      },
      {
        "en": "Writer",
        "ru": "писатель",
        "pt": "escritor",
        "ruPron": "Pisatel",
        "ptPron": "Escritor",
        "emoji": "✍️"
      },
      {
        "en": "Pilot",
        "ru": "пилот",
        "pt": "piloto",
        "ruPron": "Pilot",
        "ptPron": "Piloto",
        "emoji": "✈️"
      },
      {
        "en": "Firefighter",
        "ru": "пожарный",
        "pt": "bombeiro",
        "ruPron": "Pozharnyy",
        "ptPron": "Bombeiro",
        "emoji": "🚒"
      },
      {
        "en": "Photographer",
        "ru": "фотограф",
        "pt": "fotógrafo",
        "ruPron": "Fotograf",
        "ptPron": "Fotografo",
        "emoji": "📷"
      }
    ],
    "hard": [
      {
        "en": "Accountant",
        "ru": "бухгалтер",
        "pt": "contador",
        "ruPron": "Bukhgalter",
        "ptPron": "Contador",
        "emoji": "🧮"
      },
      {
        "en": "Architect",
        "ru": "архитектор",
        "pt": "arquiteto",
        "ruPron": "Arkhitektor",
        "ptPron": "Arkiteto",
        "emoji": "📐"
      },
      {
        "en": "Scientist",
        "ru": "учёный",
        "pt": "cientista",
        "ruPron": "Uchyonyy",
        "ptPron": "Cientista",
        "emoji": "🔬"
      },
      {
        "en": "Veterinarian",
        "ru": "ветеринар",
        "pt": "veterinário",
        "ruPron": "Veterinar",
        "ptPron": "Veterinario",
        "emoji": "🐾"
      },
      {
        "en": "Electrician",
        "ru": "электрик",
        "pt": "eletricista",
        "ruPron": "Elektrik",
        "ptPron": "Eletricista",
        "emoji": "🔌"
      },
      {
        "en": "Plumber",
        "ru": "сантехник",
        "pt": "encanador",
        "ruPron": "Santekhnik",
        "ptPron": "Encanador",
        "emoji": "🔧"
      },
      {
        "en": "Surgeon",
        "ru": "хирург",
        "pt": "cirurgião",
        "ruPron": "Khirurg",
        "ptPron": "Cirurzhiowng",
        "emoji": "🩺"
      },
      {
        "en": "Journalist",
        "ru": "журналист",
        "pt": "jornalista",
        "ruPron": "Zhurnalist",
        "ptPron": "Zhornalista",
        "emoji": "📰"
      }
    ],
    "insane": [
      {
        "en": "Notary",
        "ru": "нотариус",
        "pt": "notário",
        "ruPron": "Notarius",
        "ptPron": "Notario",
        "emoji": "📜"
      },
      {
        "en": "Diplomat",
        "ru": "дипломат",
        "pt": "diplomata",
        "ruPron": "Diplomat",
        "ptPron": "Diplomata",
        "emoji": "🤝"
      },
      {
        "en": "Actuary",
        "ru": "актуарий",
        "pt": "atuário",
        "ruPron": "Aktuariy",
        "ptPron": "Atuario",
        "emoji": "📊"
      },
      {
        "en": "Blacksmith",
        "ru": "кузнец",
        "pt": "ferreiro",
        "ruPron": "Kuznets",
        "ptPron": "Feheiro",
        "emoji": "🔨"
      },
      {
        "en": "Upholsterer",
        "ru": "обойщик",
        "pt": "estofador",
        "ruPron": "Oboyshchik",
        "ptPron": "Estofador",
        "emoji": "🪡"
      },
      {
        "en": "Locksmith",
        "ru": "слесарь",
        "pt": "serralheiro",
        "ruPron": "Slesar",
        "ptPron": "Sehalyeiro",
        "emoji": "🗝️"
      },
      {
        "en": "Cartographer",
        "ru": "картограф",
        "pt": "cartógrafo",
        "ruPron": "Kartograf",
        "ptPron": "Cartografo",
        "emoji": "🗺️"
      },
      {
        "en": "Taxidermist",
        "ru": "таксидермист",
        "pt": "taxidermista",
        "ruPron": "Taksidermist",
        "ptPron": "Tashidermista",
        "emoji": "🦴"
      }
    ]
  },
  "transports": {
    "easy": [
      {
        "en": "Car",
        "ru": "машина",
        "pt": "carro",
        "ruPron": "Mashina",
        "ptPron": "Caho",
        "emoji": "🚗"
      },
      {
        "en": "Bus",
        "ru": "автобус",
        "pt": "ônibus",
        "ruPron": "Avtobus",
        "ptPron": "Onibus",
        "emoji": "🚌"
      },
      {
        "en": "Train",
        "ru": "поезд",
        "pt": "trem",
        "ruPron": "Poyezd",
        "ptPron": "Trem",
        "emoji": "🚆"
      },
      {
        "en": "Plane",
        "ru": "самолёт",
        "pt": "avião",
        "ruPron": "Samolyot",
        "ptPron": "Aviowng",
        "emoji": "✈️"
      },
      {
        "en": "Bicycle",
        "ru": "велосипед",
        "pt": "bicicleta",
        "ruPron": "Velosiped",
        "ptPron": "Bicicleta",
        "emoji": "🚲"
      },
      {
        "en": "Boat",
        "ru": "лодка",
        "pt": "barco",
        "ruPron": "Lodka",
        "ptPron": "Barco",
        "emoji": "🚤"
      },
      {
        "en": "Taxi",
        "ru": "такси",
        "pt": "táxi",
        "ruPron": "Taksi",
        "ptPron": "Tashi",
        "emoji": "🚕"
      },
      {
        "en": "Ship",
        "ru": "корабль",
        "pt": "navio",
        "ruPron": "Korabl",
        "ptPron": "Navio",
        "emoji": "🚢"
      }
    ],
    "medium": [
      {
        "en": "Motorcycle",
        "ru": "мотоцикл",
        "pt": "motocicleta",
        "ruPron": "Mototsikl",
        "ptPron": "Motocicleta",
        "emoji": "🏍️"
      },
      {
        "en": "Subway",
        "ru": "метро",
        "pt": "metrô",
        "ruPron": "Metro",
        "ptPron": "Metro",
        "emoji": "🚇"
      },
      {
        "en": "Tram",
        "ru": "трамвай",
        "pt": "bonde",
        "ruPron": "Tramvay",
        "ptPron": "Bonde",
        "emoji": "🚊"
      },
      {
        "en": "Truck",
        "ru": "грузовик",
        "pt": "caminhão",
        "ruPron": "Gruzovik",
        "ptPron": "Caminyowng",
        "emoji": "🚚"
      },
      {
        "en": "Helicopter",
        "ru": "вертолёт",
        "pt": "helicóptero",
        "ruPron": "Vertolyot",
        "ptPron": "Helicoptero",
        "emoji": "🚁"
      },
      {
        "en": "Ferry",
        "ru": "паром",
        "pt": "balsa",
        "ruPron": "Parom",
        "ptPron": "Balsa",
        "emoji": "⛴️"
      },
      {
        "en": "Scooter",
        "ru": "самокат",
        "pt": "patinete",
        "ruPron": "Samokat",
        "ptPron": "Patinete",
        "emoji": "🛴"
      },
      {
        "en": "Van",
        "ru": "фургон",
        "pt": "van",
        "ruPron": "Furgon",
        "ptPron": "Van",
        "emoji": "🚐"
      }
    ],
    "hard": [
      {
        "en": "Cargo ship",
        "ru": "грузовое судно",
        "pt": "navio de carga",
        "ruPron": "Gruzovoye sudno",
        "ptPron": "Navio de carga",
        "emoji": "🚢"
      },
      {
        "en": "Trolleybus",
        "ru": "троллейбус",
        "pt": "trólebus",
        "ruPron": "Trolleybus",
        "ptPron": "Trolebus",
        "emoji": "🚎"
      },
      {
        "en": "Submarine",
        "ru": "подводная лодка",
        "pt": "submarino",
        "ruPron": "Podvodnaya lodka",
        "ptPron": "Submarino",
        "emoji": "🌊"
      },
      {
        "en": "Sailboat",
        "ru": "парусник",
        "pt": "veleiro",
        "ruPron": "Parusnik",
        "ptPron": "Veleiro",
        "emoji": "⛵"
      },
      {
        "en": "Glider",
        "ru": "планёр",
        "pt": "planador",
        "ruPron": "Planyor",
        "ptPron": "Planador",
        "emoji": "🛩️"
      },
      {
        "en": "Tractor",
        "ru": "трактор",
        "pt": "trator",
        "ruPron": "Traktor",
        "ptPron": "Trator",
        "emoji": "🚜"
      },
      {
        "en": "Ambulance",
        "ru": "скорая помощь",
        "pt": "ambulância",
        "ruPron": "Skoraya pomoshch",
        "ptPron": "Ambulancia",
        "emoji": "🚑"
      },
      {
        "en": "Freight train",
        "ru": "товарный поезд",
        "pt": "trem de carga",
        "ruPron": "Tovarnyy poyezd",
        "ptPron": "Trem de carga",
        "emoji": "🚂"
      }
    ],
    "insane": [
      {
        "en": "Hovercraft",
        "ru": "судно на воздушной подушке",
        "pt": "aerobarco",
        "ruPron": "Sudno na vozdushnoy podushke",
        "ptPron": "Aerobarco",
        "emoji": "🛥️"
      },
      {
        "en": "Zeppelin",
        "ru": "дирижабль",
        "pt": "zepelim",
        "ruPron": "Dirizhabl",
        "ptPron": "Zepelim",
        "emoji": "🎈"
      },
      {
        "en": "Monorail",
        "ru": "монорельс",
        "pt": "monotrilho",
        "ruPron": "Monorels",
        "ptPron": "Monotrilyo",
        "emoji": "🚝"
      },
      {
        "en": "Icebreaker",
        "ru": "ледокол",
        "pt": "quebra-gelo",
        "ruPron": "Ledokol",
        "ptPron": "Kebra-zhelo",
        "emoji": "🧊"
      },
      {
        "en": "Funicular",
        "ru": "фуникулёр",
        "pt": "funicular",
        "ruPron": "Funikulyor",
        "ptPron": "Funicular",
        "emoji": "🚡"
      },
      {
        "en": "Snowmobile",
        "ru": "снегоход",
        "pt": "moto de neve",
        "ruPron": "Snegokhod",
        "ptPron": "Moto de neve",
        "emoji": "❄️"
      },
      {
        "en": "Rickshaw",
        "ru": "рикша",
        "pt": "riquixá",
        "ruPron": "Riksha",
        "ptPron": "Hikisha",
        "emoji": "🛺"
      },
      {
        "en": "Catamaran",
        "ru": "катамаран",
        "pt": "catamarã",
        "ruPron": "Katamaran",
        "ptPron": "Catamarang",
        "emoji": "⛵"
      }
    ]
  },
  "seasons": {
    "easy": [
      {
        "en": "Winter",
        "ru": "зима",
        "pt": "inverno",
        "ruPron": "Zima",
        "ptPron": "Inverno",
        "emoji": "❄️"
      },
      {
        "en": "Spring",
        "ru": "весна",
        "pt": "primavera",
        "ruPron": "Vesna",
        "ptPron": "Primavera",
        "emoji": "🌸"
      },
      {
        "en": "Summer",
        "ru": "лето",
        "pt": "verão",
        "ruPron": "Leto",
        "ptPron": "Verowng",
        "emoji": "☀️"
      },
      {
        "en": "Autumn",
        "ru": "осень",
        "pt": "outono",
        "ruPron": "Osen",
        "ptPron": "Outono",
        "emoji": "🍂"
      }
    ],
    "medium": [
      {
        "en": "Snow",
        "ru": "снег",
        "pt": "neve",
        "ruPron": "Sneg",
        "ptPron": "Neve",
        "emoji": "❄️"
      },
      {
        "en": "Rain",
        "ru": "дождь",
        "pt": "chuva",
        "ruPron": "Dozhd",
        "ptPron": "Shuva",
        "emoji": "🌧️"
      },
      {
        "en": "Sun",
        "ru": "солнце",
        "pt": "sol",
        "ruPron": "Solntse",
        "ptPron": "Sol",
        "emoji": "☀️"
      },
      {
        "en": "Wind",
        "ru": "ветер",
        "pt": "vento",
        "ruPron": "Veter",
        "ptPron": "Vento",
        "emoji": "💨"
      }
    ],
    "hard": [
      {
        "en": "Frost",
        "ru": "мороз",
        "pt": "geada",
        "ruPron": "Moroz",
        "ptPron": "Zheada",
        "emoji": "🥶"
      },
      {
        "en": "Thaw",
        "ru": "оттепель",
        "pt": "degelo",
        "ruPron": "Ottepel",
        "ptPron": "Dezhelo",
        "emoji": "💧"
      },
      {
        "en": "Drought",
        "ru": "засуха",
        "pt": "seca",
        "ruPron": "Zasukha",
        "ptPron": "Seca",
        "emoji": "🏜️"
      },
      {
        "en": "Harvest",
        "ru": "урожай",
        "pt": "colheita",
        "ruPron": "Urozhay",
        "ptPron": "Colyeita",
        "emoji": "🌾"
      }
    ],
    "insane": [
      {
        "en": "Equinox",
        "ru": "равноденствие",
        "pt": "equinócio",
        "ruPron": "Ravnodenstviye",
        "ptPron": "Ekinocio",
        "emoji": "🌗"
      },
      {
        "en": "Solstice",
        "ru": "солнцестояние",
        "pt": "solstício",
        "ruPron": "Solntsestoyaniye",
        "ptPron": "Solsticio",
        "emoji": "🌞"
      },
      {
        "en": "Blizzard",
        "ru": "метель",
        "pt": "nevasca",
        "ruPron": "Metel",
        "ptPron": "Nevasca",
        "emoji": "🌨️"
      },
      {
        "en": "Monsoon",
        "ru": "муссон",
        "pt": "monção",
        "ruPron": "Musson",
        "ptPron": "Monsowng",
        "emoji": "🌩️"
      }
    ]
  },
  "sports": {
    "easy": [
      {
        "en": "Football",
        "ru": "футбол",
        "pt": "futebol",
        "ruPron": "Futbol",
        "ptPron": "Futebol",
        "emoji": "⚽"
      },
      {
        "en": "Basketball",
        "ru": "баскетбол",
        "pt": "basquete",
        "ruPron": "Basketbol",
        "ptPron": "Baskete",
        "emoji": "🏀"
      },
      {
        "en": "Tennis",
        "ru": "теннис",
        "pt": "tênis",
        "ruPron": "Tennis",
        "ptPron": "Tenis",
        "emoji": "🎾"
      },
      {
        "en": "Swimming",
        "ru": "плавание",
        "pt": "natação",
        "ruPron": "Plavaniye",
        "ptPron": "Natasowng",
        "emoji": "🏊"
      },
      {
        "en": "Running",
        "ru": "бег",
        "pt": "corrida",
        "ruPron": "Beg",
        "ptPron": "Cohida",
        "emoji": "🏃"
      },
      {
        "en": "Volleyball",
        "ru": "волейбол",
        "pt": "voleibol",
        "ruPron": "Voleybol",
        "ptPron": "Voleibol",
        "emoji": "🏐"
      },
      {
        "en": "Boxing",
        "ru": "бокс",
        "pt": "boxe",
        "ruPron": "Boks",
        "ptPron": "Boshe",
        "emoji": "🥊"
      },
      {
        "en": "Skiing",
        "ru": "лыжи",
        "pt": "esqui",
        "ruPron": "Lyzhi",
        "ptPron": "Eski",
        "emoji": "⛷️"
      }
    ],
    "medium": [
      {
        "en": "Hockey",
        "ru": "хоккей",
        "pt": "hóquei",
        "ruPron": "Khokkey",
        "ptPron": "Hokei",
        "emoji": "🏒"
      },
      {
        "en": "Golf",
        "ru": "гольф",
        "pt": "golfe",
        "ruPron": "Golf",
        "ptPron": "Golfe",
        "emoji": "⛳"
      },
      {
        "en": "Cycling",
        "ru": "велоспорт",
        "pt": "ciclismo",
        "ruPron": "Velosport",
        "ptPron": "Ciclismo",
        "emoji": "🚴"
      },
      {
        "en": "Gymnastics",
        "ru": "гимнастика",
        "pt": "ginástica",
        "ruPron": "Gimnastika",
        "ptPron": "Zhinastica",
        "emoji": "🤸"
      },
      {
        "en": "Wrestling",
        "ru": "борьба",
        "pt": "luta",
        "ruPron": "Borba",
        "ptPron": "Luta",
        "emoji": "🤼"
      },
      {
        "en": "Rowing",
        "ru": "гребля",
        "pt": "remo",
        "ruPron": "Greblya",
        "ptPron": "Hemo",
        "emoji": "🚣"
      },
      {
        "en": "Fencing",
        "ru": "фехтование",
        "pt": "esgrima",
        "ruPron": "Fekhtovaniye",
        "ptPron": "Esgrima",
        "emoji": "🤺"
      },
      {
        "en": "Handball",
        "ru": "гандбол",
        "pt": "handebol",
        "ruPron": "Gandbol",
        "ptPron": "Handebol",
        "emoji": "🤾"
      }
    ],
    "hard": [
      {
        "en": "Archery",
        "ru": "стрельба из лука",
        "pt": "tiro com arco",
        "ruPron": "Strelba iz luka",
        "ptPron": "Tiro com arco",
        "emoji": "🏹"
      },
      {
        "en": "Weightlifting",
        "ru": "тяжёлая атлетика",
        "pt": "levantamento de peso",
        "ruPron": "Tyazhyolaya atletika",
        "ptPron": "Levantamento de peso",
        "emoji": "🏋️"
      },
      {
        "en": "Figure skating",
        "ru": "фигурное катание",
        "pt": "patinação artística",
        "ruPron": "Figurnoye kataniye",
        "ptPron": "Patinasowng artistica",
        "emoji": "⛸️"
      },
      {
        "en": "Diving",
        "ru": "дайвинг",
        "pt": "mergulho",
        "ruPron": "Dayving",
        "ptPron": "Mergulyo",
        "emoji": "🤿"
      },
      {
        "en": "Curling",
        "ru": "керлинг",
        "pt": "curling",
        "ruPron": "Kerling",
        "ptPron": "Curling",
        "emoji": "🥌"
      },
      {
        "en": "Badminton",
        "ru": "бадминтон",
        "pt": "badminton",
        "ruPron": "Badminton",
        "ptPron": "Badminton",
        "emoji": "🏸"
      },
      {
        "en": "Snowboarding",
        "ru": "сноубординг",
        "pt": "snowboard",
        "ruPron": "Snoubording",
        "ptPron": "Snowboard",
        "emoji": "🏂"
      },
      {
        "en": "Sailing",
        "ru": "парусный спорт",
        "pt": "vela",
        "ruPron": "Parusnyy sport",
        "ptPron": "Vela",
        "emoji": "⛵"
      }
    ],
    "insane": [
      {
        "en": "Biathlon",
        "ru": "биатлон",
        "pt": "biatlo",
        "ruPron": "Biatlon",
        "ptPron": "Biatlo",
        "emoji": "🎿"
      },
      {
        "en": "Pentathlon",
        "ru": "пятиборье",
        "pt": "pentatlo",
        "ruPron": "Pyatiborye",
        "ptPron": "Pentatlo",
        "emoji": "🏅"
      },
      {
        "en": "Steeplechase",
        "ru": "стипль-чез",
        "pt": "corrida de obstáculos",
        "ruPron": "Stipl-chez",
        "ptPron": "Cohida de obstaculos",
        "emoji": "🐎"
      },
      {
        "en": "Trampolining",
        "ru": "прыжки на батуте",
        "pt": "trampolim",
        "ruPron": "Pryzhki na batute",
        "ptPron": "Trampolim",
        "emoji": "🤸"
      },
      {
        "en": "Bobsleigh",
        "ru": "бобслей",
        "pt": "bobsled",
        "ruPron": "Bobsley",
        "ptPron": "Bobsled",
        "emoji": "🛷"
      },
      {
        "en": "Powerlifting",
        "ru": "пауэрлифтинг",
        "pt": "levantamento de força",
        "ruPron": "Pauerlifting",
        "ptPron": "Levantamento de forsa",
        "emoji": "🏋️"
      },
      {
        "en": "Freestyle wrestling",
        "ru": "вольная борьба",
        "pt": "luta livre",
        "ruPron": "Volnaya borba",
        "ptPron": "Luta livre",
        "emoji": "🤼"
      },
      {
        "en": "Show jumping",
        "ru": "конкур",
        "pt": "hipismo",
        "ruPron": "Konkur",
        "ptPron": "Hipismo",
        "emoji": "🐴"
      }
    ]
  },
  "fruits": {
    "easy": [
      {
        "en": "Apple",
        "ru": "яблоко",
        "pt": "maçã",
        "ruPron": "Yabloko",
        "ptPron": "Masang",
        "emoji": "🍎"
      },
      {
        "en": "Banana",
        "ru": "банан",
        "pt": "banana",
        "ruPron": "Banan",
        "ptPron": "Banana",
        "emoji": "🍌"
      },
      {
        "en": "Orange",
        "ru": "апельсин",
        "pt": "laranja",
        "ruPron": "Apelsin",
        "ptPron": "Laranzha",
        "emoji": "🍊"
      },
      {
        "en": "Grape",
        "ru": "виноград",
        "pt": "uva",
        "ruPron": "Vinograd",
        "ptPron": "Uva",
        "emoji": "🍇"
      },
      {
        "en": "Lemon",
        "ru": "лимон",
        "pt": "limão",
        "ruPron": "Limon",
        "ptPron": "Limowng",
        "emoji": "🍋"
      },
      {
        "en": "Pear",
        "ru": "груша",
        "pt": "pera",
        "ruPron": "Grusha",
        "ptPron": "Pera",
        "emoji": "🍐"
      },
      {
        "en": "Watermelon",
        "ru": "арбуз",
        "pt": "melancia",
        "ruPron": "Arbuz",
        "ptPron": "Melancia",
        "emoji": "🍉"
      },
      {
        "en": "Strawberry",
        "ru": "клубника",
        "pt": "morango",
        "ruPron": "Klubnika",
        "ptPron": "Morango",
        "emoji": "🍓"
      }
    ],
    "medium": [
      {
        "en": "Cherry",
        "ru": "вишня",
        "pt": "cereja",
        "ruPron": "Vishnya",
        "ptPron": "Cerezha",
        "emoji": "🍒"
      },
      {
        "en": "Peach",
        "ru": "персик",
        "pt": "pêssego",
        "ruPron": "Persik",
        "ptPron": "Pessego",
        "emoji": "🍑"
      },
      {
        "en": "Plum",
        "ru": "слива",
        "pt": "ameixa",
        "ruPron": "Sliva",
        "ptPron": "Ameisha",
        "emoji": "🟣"
      },
      {
        "en": "Pineapple",
        "ru": "ананас",
        "pt": "abacaxi",
        "ruPron": "Ananas",
        "ptPron": "Abacashi",
        "emoji": "🍍"
      },
      {
        "en": "Melon",
        "ru": "дыня",
        "pt": "melão",
        "ruPron": "Dynya",
        "ptPron": "Melowng",
        "emoji": "🍈"
      },
      {
        "en": "Mango",
        "ru": "манго",
        "pt": "manga",
        "ruPron": "Mango",
        "ptPron": "Manga",
        "emoji": "🥭"
      },
      {
        "en": "Raspberry",
        "ru": "малина",
        "pt": "framboesa",
        "ruPron": "Malina",
        "ptPron": "Framboesa",
        "emoji": "🔴"
      },
      {
        "en": "Apricot",
        "ru": "абрикос",
        "pt": "damasco",
        "ruPron": "Abrikos",
        "ptPron": "Damasco",
        "emoji": "🍑"
      }
    ],
    "hard": [
      {
        "en": "Kiwi",
        "ru": "киви",
        "pt": "kiwi",
        "ruPron": "Kivi",
        "ptPron": "Kiwi",
        "emoji": "🥝"
      },
      {
        "en": "Pomegranate",
        "ru": "гранат",
        "pt": "romã",
        "ruPron": "Granat",
        "ptPron": "Homang",
        "emoji": "🔴"
      },
      {
        "en": "Fig",
        "ru": "инжир",
        "pt": "figo",
        "ruPron": "Inzhir",
        "ptPron": "Figo",
        "emoji": "🟣"
      },
      {
        "en": "Blackberry",
        "ru": "ежевика",
        "pt": "amora",
        "ruPron": "Yezhevika",
        "ptPron": "Amora",
        "emoji": "🫐"
      },
      {
        "en": "Blueberry",
        "ru": "черника",
        "pt": "mirtilo",
        "ruPron": "Chernika",
        "ptPron": "Mirtilo",
        "emoji": "🫐"
      },
      {
        "en": "Currant",
        "ru": "смородина",
        "pt": "groselha",
        "ruPron": "Smorodina",
        "ptPron": "Groselya",
        "emoji": "🔴"
      },
      {
        "en": "Persimmon",
        "ru": "хурма",
        "pt": "caqui",
        "ruPron": "Khurma",
        "ptPron": "Caki",
        "emoji": "🟠"
      },
      {
        "en": "Coconut",
        "ru": "кокос",
        "pt": "coco",
        "ruPron": "Kokos",
        "ptPron": "Coco",
        "emoji": "🥥"
      }
    ],
    "insane": [
      {
        "en": "Gooseberry",
        "ru": "крыжовник",
        "pt": "groselha-espim",
        "ruPron": "Kryzhovnik",
        "ptPron": "Groselya-espim",
        "emoji": "🟢"
      },
      {
        "en": "Passion fruit",
        "ru": "маракуйя",
        "pt": "maracujá",
        "ruPron": "Marakuyya",
        "ptPron": "Maracuzha",
        "emoji": "🟡"
      },
      {
        "en": "Papaya",
        "ru": "папайя",
        "pt": "mamão",
        "ruPron": "Papayya",
        "ptPron": "Mamowng",
        "emoji": "🟠"
      },
      {
        "en": "Lychee",
        "ru": "личи",
        "pt": "lichia",
        "ruPron": "Lichi",
        "ptPron": "Lishia",
        "emoji": "⚪"
      },
      {
        "en": "Quince",
        "ru": "айва",
        "pt": "marmelo",
        "ruPron": "Ayva",
        "ptPron": "Marmelo",
        "emoji": "🍐"
      },
      {
        "en": "Guava",
        "ru": "гуава",
        "pt": "goiaba",
        "ruPron": "Guava",
        "ptPron": "Goiaba",
        "emoji": "🟢"
      },
      {
        "en": "Feijoa",
        "ru": "фейхоа",
        "pt": "feijoa",
        "ruPron": "Feykhoa",
        "ptPron": "Feizhoa",
        "emoji": "🟢"
      },
      {
        "en": "Dragon fruit",
        "ru": "драконий фрукт",
        "pt": "pitaia",
        "ruPron": "Drakoniy frukt",
        "ptPron": "Pitaia",
        "emoji": "🐉"
      }
    ]
  },
  "vegetables": {
    "easy": [
      {
        "en": "Potato",
        "ru": "картофель",
        "pt": "batata",
        "ruPron": "Kartofel",
        "ptPron": "Batata",
        "emoji": "🥔"
      },
      {
        "en": "Tomato",
        "ru": "помидор",
        "pt": "tomate",
        "ruPron": "Pomidor",
        "ptPron": "Tomate",
        "emoji": "🍅"
      },
      {
        "en": "Carrot",
        "ru": "морковь",
        "pt": "cenoura",
        "ruPron": "Morkov",
        "ptPron": "Cenoura",
        "emoji": "🥕"
      },
      {
        "en": "Onion",
        "ru": "лук",
        "pt": "cebola",
        "ruPron": "Luk",
        "ptPron": "Cebola",
        "emoji": "🧅"
      },
      {
        "en": "Cucumber",
        "ru": "огурец",
        "pt": "pepino",
        "ruPron": "Ogurets",
        "ptPron": "Pepino",
        "emoji": "🥒"
      },
      {
        "en": "Cabbage",
        "ru": "капуста",
        "pt": "repolho",
        "ruPron": "Kapusta",
        "ptPron": "Hepolyo",
        "emoji": "🥬"
      },
      {
        "en": "Pepper",
        "ru": "перец",
        "pt": "pimentão",
        "ruPron": "Perets",
        "ptPron": "Pimentowng",
        "emoji": "🫑"
      },
      {
        "en": "Garlic",
        "ru": "чеснок",
        "pt": "alho",
        "ruPron": "Chesnok",
        "ptPron": "Alyo",
        "emoji": "🧄"
      }
    ],
    "medium": [
      {
        "en": "Beet",
        "ru": "свёкла",
        "pt": "beterraba",
        "ruPron": "Svyokla",
        "ptPron": "Betehaba",
        "emoji": "🟣"
      },
      {
        "en": "Pumpkin",
        "ru": "тыква",
        "pt": "abóbora",
        "ruPron": "Tykva",
        "ptPron": "Abobora",
        "emoji": "🎃"
      },
      {
        "en": "Eggplant",
        "ru": "баклажан",
        "pt": "berinjela",
        "ruPron": "Baklazhan",
        "ptPron": "Berinzhela",
        "emoji": "🍆"
      },
      {
        "en": "Zucchini",
        "ru": "кабачок",
        "pt": "abobrinha",
        "ruPron": "Kabachok",
        "ptPron": "Abobrinya",
        "emoji": "🥒"
      },
      {
        "en": "Broccoli",
        "ru": "брокколи",
        "pt": "brócolis",
        "ruPron": "Brokkoli",
        "ptPron": "Brocolis",
        "emoji": "🥦"
      },
      {
        "en": "Spinach",
        "ru": "шпинат",
        "pt": "espinafre",
        "ruPron": "Shpinat",
        "ptPron": "Espinafre",
        "emoji": "🥬"
      },
      {
        "en": "Corn",
        "ru": "кукуруза",
        "pt": "milho",
        "ruPron": "Kukuruza",
        "ptPron": "Milyo",
        "emoji": "🌽"
      },
      {
        "en": "Radish",
        "ru": "редис",
        "pt": "rabanete",
        "ruPron": "Redis",
        "ptPron": "Habanete",
        "emoji": "🔴"
      }
    ],
    "hard": [
      {
        "en": "Cauliflower",
        "ru": "цветная капуста",
        "pt": "couve-flor",
        "ruPron": "Tsvetnaya kapusta",
        "ptPron": "Couve-flor",
        "emoji": "🥦"
      },
      {
        "en": "Celery",
        "ru": "сельдерей",
        "pt": "aipo",
        "ruPron": "Selderey",
        "ptPron": "Aipo",
        "emoji": "🥬"
      },
      {
        "en": "Turnip",
        "ru": "репа",
        "pt": "nabo",
        "ruPron": "Repa",
        "ptPron": "Nabo",
        "emoji": "⚪"
      },
      {
        "en": "Leek",
        "ru": "лук-порей",
        "pt": "alho-poró",
        "ruPron": "Luk-porey",
        "ptPron": "Alyo-poro",
        "emoji": "🧅"
      },
      {
        "en": "Asparagus",
        "ru": "спаржа",
        "pt": "aspargo",
        "ruPron": "Sparzha",
        "ptPron": "Aspargo",
        "emoji": "🥦"
      },
      {
        "en": "Squash",
        "ru": "тыква мускатная",
        "pt": "abóbora-menina",
        "ruPron": "Tykva muskatnaya",
        "ptPron": "Abobora-menina",
        "emoji": "🎃"
      },
      {
        "en": "Artichoke",
        "ru": "артишок",
        "pt": "alcachofra",
        "ruPron": "Artishok",
        "ptPron": "Alcashofra",
        "emoji": "🌿"
      },
      {
        "en": "Kale",
        "ru": "кудрявая капуста",
        "pt": "couve",
        "ruPron": "Kudryavaya kapusta",
        "ptPron": "Couve",
        "emoji": "🥬"
      }
    ],
    "insane": [
      {
        "en": "Fennel",
        "ru": "фенхель",
        "pt": "erva-doce",
        "ruPron": "Fenkhel",
        "ptPron": "Erva-doce",
        "emoji": "🌿"
      },
      {
        "en": "Rutabaga",
        "ru": "брюква",
        "pt": "rutabaga",
        "ruPron": "Bryukva",
        "ptPron": "Hutabaga",
        "emoji": "🟣"
      },
      {
        "en": "Kohlrabi",
        "ru": "кольраби",
        "pt": "couve-rábano",
        "ruPron": "Kolrabi",
        "ptPron": "Couve-rabano",
        "emoji": "🟢"
      },
      {
        "en": "Chard",
        "ru": "мангольд",
        "pt": "acelga",
        "ruPron": "Mangold",
        "ptPron": "Acelga",
        "emoji": "🥬"
      },
      {
        "en": "Parsnip",
        "ru": "пастернак",
        "pt": "pastinaca",
        "ruPron": "Pasternak",
        "ptPron": "Pastinaca",
        "emoji": "⚪"
      },
      {
        "en": "Okra",
        "ru": "окра",
        "pt": "quiabo",
        "ruPron": "Okra",
        "ptPron": "Kiabo",
        "emoji": "🟢"
      },
      {
        "en": "Watercress",
        "ru": "водяной кресс",
        "pt": "agrião",
        "ruPron": "Vodyanoy kress",
        "ptPron": "Agriowng",
        "emoji": "🌿"
      },
      {
        "en": "Horseradish",
        "ru": "хрен",
        "pt": "raiz-forte",
        "ruPron": "Khren",
        "ptPron": "Haiz-forte",
        "emoji": "⚪"
      }
    ]
  },
  "days": {
    "easy": [
      {
        "en": "Monday",
        "ru": "понедельник",
        "pt": "segunda-feira",
        "ruPron": "Ponedelnik",
        "ptPron": "Segunda-feira",
        "emoji": "📅"
      },
      {
        "en": "Tuesday",
        "ru": "вторник",
        "pt": "terça-feira",
        "ruPron": "Vtornik",
        "ptPron": "Tersa-feira",
        "emoji": "📅"
      },
      {
        "en": "Wednesday",
        "ru": "среда",
        "pt": "quarta-feira",
        "ruPron": "Sreda",
        "ptPron": "Quarta-feira",
        "emoji": "📅"
      },
      {
        "en": "Thursday",
        "ru": "четверг",
        "pt": "quinta-feira",
        "ruPron": "Chetverg",
        "ptPron": "Kinta-feira",
        "emoji": "📅"
      }
    ],
    "medium": [
      {
        "en": "Friday",
        "ru": "пятница",
        "pt": "sexta-feira",
        "ruPron": "Pyatnitsa",
        "ptPron": "Seshta-feira",
        "emoji": "🎉"
      },
      {
        "en": "Saturday",
        "ru": "суббота",
        "pt": "sábado",
        "ruPron": "Subbota",
        "ptPron": "Sabado",
        "emoji": "🌞"
      },
      {
        "en": "Sunday",
        "ru": "воскресенье",
        "pt": "domingo",
        "ruPron": "Voskresenye",
        "ptPron": "Domingo",
        "emoji": "⛪"
      },
      {
        "en": "Weekend",
        "ru": "выходные",
        "pt": "fim de semana",
        "ruPron": "Vykhodnyye",
        "ptPron": "Fim de semana",
        "emoji": "🎉"
      }
    ],
    "hard": [
      {
        "en": "Weekday",
        "ru": "будний день",
        "pt": "dia de semana",
        "ruPron": "Budniy den",
        "ptPron": "Dia de semana",
        "emoji": "💼"
      },
      {
        "en": "Yesterday",
        "ru": "вчера",
        "pt": "ontem",
        "ruPron": "Vchera",
        "ptPron": "Ontem",
        "emoji": "⏪"
      },
      {
        "en": "Tomorrow",
        "ru": "завтра",
        "pt": "amanhã",
        "ruPron": "Zavtra",
        "ptPron": "Amanyang",
        "emoji": "⏩"
      },
      {
        "en": "Tonight",
        "ru": "сегодня вечером",
        "pt": "hoje à noite",
        "ruPron": "Segodnya vecherom",
        "ptPron": "Hozhe à noite",
        "emoji": "🌙"
      }
    ],
    "insane": [
      {
        "en": "Fortnight",
        "ru": "две недели",
        "pt": "quinzena",
        "ruPron": "Dve nedeli",
        "ptPron": "Kinzena",
        "emoji": "🗓️"
      },
      {
        "en": "Day before yesterday",
        "ru": "позавчера",
        "pt": "anteontem",
        "ruPron": "Pozavchera",
        "ptPron": "Anteontem",
        "emoji": "⏪"
      },
      {
        "en": "Day after tomorrow",
        "ru": "послезавтра",
        "pt": "depois de amanhã",
        "ruPron": "Poslezavtra",
        "ptPron": "Depois de amanyang",
        "emoji": "⏩"
      },
      {
        "en": "Public holiday",
        "ru": "государственный праздник",
        "pt": "feriado nacional",
        "ruPron": "Gosudarstvennyy prazdnik",
        "ptPron": "Feriado nacional",
        "emoji": "🎊"
      }
    ]
  }
};

const CATEGORY_LABELS = {
  "objects": "Objects",
  "animals": "Animals",
  "nouns": "Nouns",
  "adjectives": "Adjectives",
  "verbs": "Verbs",
  "adverbs": "Adverbs",
  "drinks": "Drinks",
  "colors": "Colors",
  "food": "Food",
  "professions": "Professions",
  "transports": "Transports",
  "seasons": "Seasons",
  "sports": "Sports",
  "fruits": "Fruits",
  "vegetables": "Vegetables",
  "days": "Days of the week"
};

const CATEGORY_ICONS = {
  objects: "📦",
  animals: "🐾",
  nouns: "📚",
  adjectives: "🎭",
  verbs: "🏃",
  adverbs: "⏱️",
  drinks: "🥤",
  colors: "🎨",
  food: "🍽️",
  professions: "👷",
  transports: "🚗",
  seasons: "🍂",
  sports: "⚽",
  fruits: "🍎",
  vegetables: "🥦",
  days: "📅",
};

const LEVEL_LABELS = {
  easy: "Easy",
  medium: "Medium",
  hard: "Hard",
  insane: "Insane",
};

const LEVEL_ICONS = {
  easy: "🙂",
  medium: "😐",
  hard: "😅",
  insane: "🔥",
};

const LANGUAGE_LABELS = {
  ru: "Russian",
  pt: "Portuguese",
};

const SPEECH_LANG = {
  ru: "ru-RU",
  pt: "pt-PT",
};
