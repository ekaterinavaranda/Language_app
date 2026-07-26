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
      },
      {
        "en": "Elephant",
        "ru": "слон",
        "pt": "elefante",
        "ruPron": "Slon",
        "ptPron": "Elefante",
        "emoji": "🐘"
      },
      {
        "en": "Lion",
        "ru": "лев",
        "pt": "leão",
        "ruPron": "Lev",
        "ptPron": "Leowng",
        "emoji": "🦁"
      },
      {
        "en": "Tiger",
        "ru": "тигр",
        "pt": "tigre",
        "ruPron": "Tigr",
        "ptPron": "Tigre",
        "emoji": "🐯"
      },
      {
        "en": "Chicken",
        "ru": "курица",
        "pt": "galinha",
        "ruPron": "Kuritsa",
        "ptPron": "Galinya",
        "emoji": "🐔"
      },
      {
        "en": "Bee",
        "ru": "пчела",
        "pt": "abelha",
        "ruPron": "Pchela",
        "ptPron": "Abelya",
        "emoji": "🐝"
      },
      {
        "en": "Butterfly",
        "ru": "бабочка",
        "pt": "borboleta",
        "ruPron": "Babochka",
        "ptPron": "Borboleta",
        "emoji": "🦋"
      },
      {
        "en": "Spider",
        "ru": "паук",
        "pt": "aranha",
        "ruPron": "Pauk",
        "ptPron": "Aranya",
        "emoji": "🕷️"
      },
      {
        "en": "Camel",
        "ru": "верблюд",
        "pt": "camelo",
        "ruPron": "Verblyud",
        "ptPron": "Camelo",
        "emoji": "🐫"
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
      },
      {
        "en": "Giraffe",
        "ru": "жираф",
        "pt": "girafa",
        "ruPron": "Zhiraf",
        "ptPron": "Zhirafa",
        "emoji": "🦒"
      },
      {
        "en": "Zebra",
        "ru": "зебра",
        "pt": "zebra",
        "ruPron": "Zebra",
        "ptPron": "Zebra",
        "emoji": "🦓"
      },
      {
        "en": "Kangaroo",
        "ru": "кенгуру",
        "pt": "canguru",
        "ruPron": "Kenguru",
        "ptPron": "Canguru",
        "emoji": "🦘"
      },
      {
        "en": "Penguin",
        "ru": "пингвин",
        "pt": "pinguim",
        "ruPron": "Pingvin",
        "ptPron": "Pinzhim",
        "emoji": "🐧"
      },
      {
        "en": "Dolphin",
        "ru": "дельфин",
        "pt": "golfinho",
        "ruPron": "Delfin",
        "ptPron": "Golfinyo",
        "emoji": "🐬"
      },
      {
        "en": "Shark",
        "ru": "акула",
        "pt": "tubarão",
        "ruPron": "Akula",
        "ptPron": "Tubarowng",
        "emoji": "🦈"
      },
      {
        "en": "Crocodile",
        "ru": "крокодил",
        "pt": "crocodilo",
        "ruPron": "Krokodil",
        "ptPron": "Crocodilo",
        "emoji": "🐊"
      },
      {
        "en": "Parrot",
        "ru": "попугай",
        "pt": "papagaio",
        "ruPron": "Popugay",
        "ptPron": "Papagaio",
        "emoji": "🦜"
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
      },
      {
        "en": "Hippopotamus",
        "ru": "бегемот",
        "pt": "hipopótamo",
        "ruPron": "Begemot",
        "ptPron": "Hipopotamo",
        "emoji": "🦛"
      },
      {
        "en": "Rhinoceros",
        "ru": "носорог",
        "pt": "rinoceronte",
        "ruPron": "Nosorog",
        "ptPron": "Hinoceronte",
        "emoji": "🦏"
      },
      {
        "en": "Leopard",
        "ru": "леопард",
        "pt": "leopardo",
        "ruPron": "Leopard",
        "ptPron": "Leopardo",
        "emoji": "🐆"
      },
      {
        "en": "Cheetah",
        "ru": "гепард",
        "pt": "guepardo",
        "ruPron": "Gepard",
        "ptPron": "Zhepardo",
        "emoji": "🐆"
      },
      {
        "en": "Raccoon",
        "ru": "енот",
        "pt": "guaxinim",
        "ruPron": "Yenot",
        "ptPron": "Guashinim",
        "emoji": "🦝"
      },
      {
        "en": "Beaver",
        "ru": "бобр",
        "pt": "castor",
        "ruPron": "Bobr",
        "ptPron": "Castor",
        "emoji": "🦫"
      },
      {
        "en": "Peacock",
        "ru": "павлин",
        "pt": "pavão",
        "ruPron": "Pavlin",
        "ptPron": "Pavowng",
        "emoji": "🦚"
      },
      {
        "en": "Flamingo",
        "ru": "фламинго",
        "pt": "flamingo",
        "ruPron": "Flamingo",
        "ptPron": "Flamingo",
        "emoji": "🦩"
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
      },
      {
        "en": "Chameleon",
        "ru": "хамелеон",
        "pt": "camaleão",
        "ruPron": "Khameleon",
        "ptPron": "Camaleowng",
        "emoji": "🦎"
      },
      {
        "en": "Porcupine",
        "ru": "дикобраз",
        "pt": "porco-espinho",
        "ruPron": "Dikobraz",
        "ptPron": "Porco-espinyo",
        "emoji": "🦔"
      },
      {
        "en": "Armadillo",
        "ru": "броненосец",
        "pt": "tatu",
        "ruPron": "Bronenosets",
        "ptPron": "Tatu",
        "emoji": "🦔"
      },
      {
        "en": "Mongoose",
        "ru": "мангуст",
        "pt": "mangusto",
        "ruPron": "Mangust",
        "ptPron": "Mangusto",
        "emoji": "🐾"
      },
      {
        "en": "Ferret",
        "ru": "хорёк",
        "pt": "furão",
        "ruPron": "Khoryok",
        "ptPron": "Furowng",
        "emoji": "🦡"
      },
      {
        "en": "Antelope",
        "ru": "антилопа",
        "pt": "antílope",
        "ruPron": "Antilopa",
        "ptPron": "Antilope",
        "emoji": "🦌"
      },
      {
        "en": "Walrus",
        "ru": "морж",
        "pt": "morsa",
        "ruPron": "Morzh",
        "ptPron": "Morsa",
        "emoji": "🦭"
      },
      {
        "en": "Koala",
        "ru": "коала",
        "pt": "coala",
        "ruPron": "Koala",
        "ptPron": "Coala",
        "emoji": "🐨"
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
      },
      {
        "en": "Cup",
        "ru": "чашка",
        "pt": "xícara",
        "ruPron": "Chashka",
        "ptPron": "Shicara",
        "emoji": "☕"
      },
      {
        "en": "Plate",
        "ru": "тарелка",
        "pt": "prato",
        "ruPron": "Tarelka",
        "ptPron": "Prato",
        "emoji": "🍽️"
      },
      {
        "en": "Spoon",
        "ru": "ложка",
        "pt": "colher",
        "ruPron": "Lozhka",
        "ptPron": "Colyer",
        "emoji": "🥄"
      },
      {
        "en": "Fork",
        "ru": "вилка",
        "pt": "garfo",
        "ruPron": "Vilka",
        "ptPron": "Garfo",
        "emoji": "🍴"
      },
      {
        "en": "Knife",
        "ru": "нож",
        "pt": "faca",
        "ruPron": "Nozh",
        "ptPron": "Faca",
        "emoji": "🔪"
      },
      {
        "en": "Towel",
        "ru": "полотенце",
        "pt": "toalha",
        "ruPron": "Polotentse",
        "ptPron": "Toalya",
        "emoji": "🧻"
      },
      {
        "en": "Backpack",
        "ru": "рюкзак",
        "pt": "mochila",
        "ruPron": "Ryukzak",
        "ptPron": "Moshila",
        "emoji": "🎒"
      },
      {
        "en": "Glasses",
        "ru": "очки",
        "pt": "óculos",
        "ruPron": "Ochki",
        "ptPron": "Oculos",
        "emoji": "👓"
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
      },
      {
        "en": "Watch",
        "ru": "наручные часы",
        "pt": "relógio de pulso",
        "ruPron": "Naruchnyye chasy",
        "ptPron": "Helozhio de pulso",
        "emoji": "⌚"
      },
      {
        "en": "Camera",
        "ru": "фотоаппарат",
        "pt": "câmera",
        "ruPron": "Fotoapparat",
        "ptPron": "Camera",
        "emoji": "📷"
      },
      {
        "en": "Suitcase",
        "ru": "чемодан",
        "pt": "mala",
        "ruPron": "Chemodan",
        "ptPron": "Mala",
        "emoji": "🧳"
      },
      {
        "en": "Notebook",
        "ru": "тетрадь",
        "pt": "caderno",
        "ruPron": "Tetrad",
        "ptPron": "Caderno",
        "emoji": "📓"
      },
      {
        "en": "Calendar",
        "ru": "календарь",
        "pt": "calendário",
        "ruPron": "Kalendar",
        "ptPron": "Calendario",
        "emoji": "📅"
      },
      {
        "en": "Battery",
        "ru": "батарейка",
        "pt": "pilha",
        "ruPron": "Batareyka",
        "ptPron": "Pilya",
        "emoji": "🔋"
      },
      {
        "en": "Charger",
        "ru": "зарядное устройство",
        "pt": "carregador",
        "ruPron": "Zaryadnoye ustroystvo",
        "ptPron": "Cahegador",
        "emoji": "🔌"
      },
      {
        "en": "Remote control",
        "ru": "пульт",
        "pt": "controle remoto",
        "ruPron": "Pult",
        "ptPron": "Controle remoto",
        "emoji": "📺"
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
      },
      {
        "en": "Bucket",
        "ru": "ведро",
        "pt": "balde",
        "ruPron": "Vedro",
        "ptPron": "Balde",
        "emoji": "🪣"
      },
      {
        "en": "Broom",
        "ru": "метла",
        "pt": "vassoura",
        "ruPron": "Metla",
        "ptPron": "Vassoura",
        "emoji": "🧹"
      },
      {
        "en": "Mop",
        "ru": "швабра",
        "pt": "esfregão",
        "ruPron": "Shvabra",
        "ptPron": "Esfregowng",
        "emoji": "🧽"
      },
      {
        "en": "Vase",
        "ru": "ваза",
        "pt": "vaso",
        "ruPron": "Vaza",
        "ptPron": "Vaso",
        "emoji": "🏺"
      },
      {
        "en": "Frame",
        "ru": "рамка",
        "pt": "moldura",
        "ruPron": "Ramka",
        "ptPron": "Moldura",
        "emoji": "🖼️"
      },
      {
        "en": "Bolt",
        "ru": "болт",
        "pt": "parafuso",
        "ruPron": "Bolt",
        "ptPron": "Parafuso",
        "emoji": "🔩"
      },
      {
        "en": "Nail",
        "ru": "гвоздь",
        "pt": "prego",
        "ruPron": "Gvozd",
        "ptPron": "Prego",
        "emoji": "📌"
      },
      {
        "en": "Rope",
        "ru": "верёвка",
        "pt": "corda",
        "ruPron": "Veryovka",
        "ptPron": "Corda",
        "emoji": "🪢"
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
      },
      {
        "en": "Chisel",
        "ru": "долото",
        "pt": "formão",
        "ruPron": "Doloto",
        "ptPron": "Formowng",
        "emoji": "🔨"
      },
      {
        "en": "Wrench",
        "ru": "гаечный ключ",
        "pt": "chave inglesa",
        "ruPron": "Gayechnyy klyuch",
        "ptPron": "Shave inglesa",
        "emoji": "🔧"
      },
      {
        "en": "Screwdriver",
        "ru": "отвёртка",
        "pt": "chave de fenda",
        "ruPron": "Otvyortka",
        "ptPron": "Shave de fenda",
        "emoji": "🪛"
      },
      {
        "en": "Trowel",
        "ru": "мастерок",
        "pt": "colher de pedreiro",
        "ruPron": "Masterok",
        "ptPron": "Colyer de pedreiro",
        "emoji": "🛠️"
      },
      {
        "en": "Ladle",
        "ru": "половник",
        "pt": "concha",
        "ruPron": "Polovnik",
        "ptPron": "Consha",
        "emoji": "🥄"
      },
      {
        "en": "Pestle",
        "ru": "пестик",
        "pt": "pilão",
        "ruPron": "Pestik",
        "ptPron": "Pilowng",
        "emoji": "⚗️"
      },
      {
        "en": "Awl",
        "ru": "шило",
        "pt": "sovela",
        "ruPron": "Shilo",
        "ptPron": "Sovela",
        "emoji": "📍"
      },
      {
        "en": "Funnel",
        "ru": "воронка",
        "pt": "funil",
        "ruPron": "Voronka",
        "ptPron": "Funil",
        "emoji": "🔻"
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
      },
      {
        "en": "Name",
        "ru": "имя",
        "pt": "nome",
        "ruPron": "Imya",
        "ptPron": "Nome",
        "emoji": "🏷️"
      },
      {
        "en": "Day",
        "ru": "день",
        "pt": "dia",
        "ruPron": "Den",
        "ptPron": "Dia",
        "emoji": "☀️"
      },
      {
        "en": "Night",
        "ru": "ночь",
        "pt": "noite",
        "ruPron": "Noch",
        "ptPron": "Noite",
        "emoji": "🌙"
      },
      {
        "en": "Hand",
        "ru": "рука",
        "pt": "mão",
        "ruPron": "Ruka",
        "ptPron": "Mowng",
        "emoji": "✋"
      },
      {
        "en": "Eye",
        "ru": "глаз",
        "pt": "olho",
        "ruPron": "Glaz",
        "ptPron": "Olyo",
        "emoji": "👁️"
      },
      {
        "en": "Head",
        "ru": "голова",
        "pt": "cabeça",
        "ruPron": "Golova",
        "ptPron": "Cabesa",
        "emoji": "🗣️"
      },
      {
        "en": "Room",
        "ru": "комната",
        "pt": "quarto",
        "ruPron": "Komnata",
        "ptPron": "Quarto",
        "emoji": "🚪"
      },
      {
        "en": "Tree",
        "ru": "дерево",
        "pt": "árvore",
        "ruPron": "Derevo",
        "ptPron": "Arvore",
        "emoji": "🌳"
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
      },
      {
        "en": "Question",
        "ru": "вопрос",
        "pt": "pergunta",
        "ruPron": "Vopros",
        "ptPron": "Pergunta",
        "emoji": "❓"
      },
      {
        "en": "Answer",
        "ru": "ответ",
        "pt": "resposta",
        "ruPron": "Otvet",
        "ptPron": "Hesposta",
        "emoji": "💡"
      },
      {
        "en": "Problem",
        "ru": "проблема",
        "pt": "problema",
        "ruPron": "Problema",
        "ptPron": "Problema",
        "emoji": "⚠️"
      },
      {
        "en": "Reason",
        "ru": "причина",
        "pt": "razão",
        "ruPron": "Prichina",
        "ptPron": "Hazowng",
        "emoji": "🧠"
      },
      {
        "en": "Party",
        "ru": "вечеринка",
        "pt": "festa",
        "ruPron": "Vecherinka",
        "ptPron": "Festa",
        "emoji": "🎉"
      },
      {
        "en": "Trip",
        "ru": "поездка",
        "pt": "viagem",
        "ruPron": "Poyezdka",
        "ptPron": "Viazhem",
        "emoji": "🧳"
      },
      {
        "en": "News",
        "ru": "новости",
        "pt": "notícias",
        "ruPron": "Novosti",
        "ptPron": "Noticias",
        "emoji": "📰"
      },
      {
        "en": "Voice",
        "ru": "голос",
        "pt": "voz",
        "ruPron": "Golos",
        "ptPron": "Voz",
        "emoji": "🗣️"
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
      },
      {
        "en": "Opportunity",
        "ru": "возможность",
        "pt": "oportunidade",
        "ruPron": "Vozmozhnost",
        "ptPron": "Oportunidade",
        "emoji": "🚪"
      },
      {
        "en": "Responsibility",
        "ru": "ответственность",
        "pt": "responsabilidade",
        "ruPron": "Otvetstvennost",
        "ptPron": "Hesponsabilidade",
        "emoji": "📋"
      },
      {
        "en": "Achievement",
        "ru": "достижение",
        "pt": "conquista",
        "ruPron": "Dostizheniye",
        "ptPron": "Conkista",
        "emoji": "🏆"
      },
      {
        "en": "Behavior",
        "ru": "поведение",
        "pt": "comportamento",
        "ruPron": "Povedeniye",
        "ptPron": "Comportamento",
        "emoji": "🎭"
      },
      {
        "en": "Purpose",
        "ru": "цель",
        "pt": "propósito",
        "ruPron": "Tsel",
        "ptPron": "Proposito",
        "emoji": "🎯"
      },
      {
        "en": "Confidence",
        "ru": "уверенность",
        "pt": "confiança",
        "ruPron": "Uverennost",
        "ptPron": "Confiansa",
        "emoji": "💪"
      },
      {
        "en": "Patience",
        "ru": "терпение",
        "pt": "paciência",
        "ruPron": "Terpeniye",
        "ptPron": "Paciencia",
        "emoji": "⏳"
      },
      {
        "en": "Curiosity",
        "ru": "любопытство",
        "pt": "curiosidade",
        "ruPron": "Lyubopytstvo",
        "ptPron": "Curiosidade",
        "emoji": "🔍"
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
      },
      {
        "en": "Hypocrisy",
        "ru": "лицемерие",
        "pt": "hipocrisia",
        "ruPron": "Litsemeriye",
        "ptPron": "Hipocrisia",
        "emoji": "🎭"
      },
      {
        "en": "Integrity",
        "ru": "честность",
        "pt": "integridade",
        "ruPron": "Chestnost",
        "ptPron": "Integridade",
        "emoji": "✅"
      },
      {
        "en": "Vulnerability",
        "ru": "уязвимость",
        "pt": "vulnerabilidade",
        "ruPron": "Uyazvimost",
        "ptPron": "Vulnerabilidade",
        "emoji": "🥚"
      },
      {
        "en": "Empathy",
        "ru": "эмпатия",
        "pt": "empatia",
        "ruPron": "Empatiya",
        "ptPron": "Empatia",
        "emoji": "❤️"
      },
      {
        "en": "Resentment",
        "ru": "обида",
        "pt": "ressentimento",
        "ruPron": "Obida",
        "ptPron": "Hessentimento",
        "emoji": "😒"
      },
      {
        "en": "Serenity",
        "ru": "безмятежность",
        "pt": "serenidade",
        "ruPron": "Bezmyatezhnost",
        "ptPron": "Serenidade",
        "emoji": "🕊️"
      },
      {
        "en": "Skepticism",
        "ru": "скептицизм",
        "pt": "ceticismo",
        "ruPron": "Skeptitsizm",
        "ptPron": "Ceticismo",
        "emoji": "🤨"
      },
      {
        "en": "Indifference",
        "ru": "безразличие",
        "pt": "indiferença",
        "ruPron": "Bezrazlichiye",
        "ptPron": "Indiferensa",
        "emoji": "🤷"
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
      },
      {
        "en": "Tall",
        "ru": "высокий",
        "pt": "alto",
        "ruPron": "Vysokiy",
        "ptPron": "Alto",
        "emoji": "📏"
      },
      {
        "en": "Short",
        "ru": "низкий",
        "pt": "baixo",
        "ruPron": "Nizkiy",
        "ptPron": "Baisho",
        "emoji": "📉"
      },
      {
        "en": "Long",
        "ru": "длинный",
        "pt": "longo",
        "ruPron": "Dlinnyy",
        "ptPron": "Longo",
        "emoji": "➖"
      },
      {
        "en": "Beautiful",
        "ru": "красивый",
        "pt": "bonito",
        "ruPron": "Krasivyy",
        "ptPron": "Bonito",
        "emoji": "🌸"
      },
      {
        "en": "Ugly",
        "ru": "некрасивый",
        "pt": "feio",
        "ruPron": "Nekrasivyy",
        "ptPron": "Feio",
        "emoji": "🙁"
      },
      {
        "en": "Easy",
        "ru": "лёгкий",
        "pt": "fácil",
        "ruPron": "Lyogkiy",
        "ptPron": "Facil",
        "emoji": "✅"
      },
      {
        "en": "Difficult",
        "ru": "трудный",
        "pt": "difícil",
        "ruPron": "Trudnyy",
        "ptPron": "Dificil",
        "emoji": "🧗"
      },
      {
        "en": "Full",
        "ru": "полный",
        "pt": "cheio",
        "ruPron": "Polnyy",
        "ptPron": "Sheio",
        "emoji": "🈵"
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
      },
      {
        "en": "Rich",
        "ru": "богатый",
        "pt": "rico",
        "ruPron": "Bogatyy",
        "ptPron": "Hico",
        "emoji": "💰"
      },
      {
        "en": "Poor",
        "ru": "бедный",
        "pt": "pobre",
        "ruPron": "Bednyy",
        "ptPron": "Pobre",
        "emoji": "🪙"
      },
      {
        "en": "Young",
        "ru": "молодой",
        "pt": "jovem",
        "ruPron": "Molodoy",
        "ptPron": "Zhovem",
        "emoji": "👶"
      },
      {
        "en": "Heavy",
        "ru": "тяжёлый",
        "pt": "pesado",
        "ruPron": "Tyazhyolyy",
        "ptPron": "Pesado",
        "emoji": "🏋️"
      },
      {
        "en": "Light",
        "ru": "лёгкий",
        "pt": "leve",
        "ruPron": "Lyogkiy",
        "ptPron": "Leve",
        "emoji": "🪶"
      },
      {
        "en": "Loud",
        "ru": "громкий",
        "pt": "alto",
        "ruPron": "Gromkiy",
        "ptPron": "Alto",
        "emoji": "🔊"
      },
      {
        "en": "Quiet",
        "ru": "тихий",
        "pt": "quieto",
        "ruPron": "Tikhiy",
        "ptPron": "Kieto",
        "emoji": "🤫"
      },
      {
        "en": "Interesting",
        "ru": "интересный",
        "pt": "interessante",
        "ruPron": "Interesnyy",
        "ptPron": "Interessante",
        "emoji": "✨"
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
      },
      {
        "en": "Reliable",
        "ru": "надёжный",
        "pt": "confiável",
        "ruPron": "Nadyozhnyy",
        "ptPron": "Confiavel",
        "emoji": "🤝"
      },
      {
        "en": "Honest",
        "ru": "честный",
        "pt": "honesto",
        "ruPron": "Chestnyy",
        "ptPron": "Honesto",
        "emoji": "✅"
      },
      {
        "en": "Polite",
        "ru": "вежливый",
        "pt": "educado",
        "ruPron": "Vezhlivyy",
        "ptPron": "Educado",
        "emoji": "🙏"
      },
      {
        "en": "Rude",
        "ru": "грубый",
        "pt": "rude",
        "ruPron": "Grubyy",
        "ptPron": "Hude",
        "emoji": "😠"
      },
      {
        "en": "Talented",
        "ru": "талантливый",
        "pt": "talentoso",
        "ruPron": "Talantlivyy",
        "ptPron": "Talentoso",
        "emoji": "🌟"
      },
      {
        "en": "Confident",
        "ru": "уверенный",
        "pt": "confiante",
        "ruPron": "Uverennyy",
        "ptPron": "Confiante",
        "emoji": "💪"
      },
      {
        "en": "Nervous",
        "ru": "нервный",
        "pt": "nervoso",
        "ruPron": "Nervnyy",
        "ptPron": "Nervoso",
        "emoji": "😬"
      },
      {
        "en": "Cheerful",
        "ru": "весёлый",
        "pt": "alegre",
        "ruPron": "Vesyolyy",
        "ptPron": "Alegre",
        "emoji": "😄"
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
      },
      {
        "en": "Enigmatic",
        "ru": "загадочный",
        "pt": "enigmático",
        "ruPron": "Zagadochnyy",
        "ptPron": "Enigmatico",
        "emoji": "🌫️"
      },
      {
        "en": "Audacious",
        "ru": "дерзкий",
        "pt": "audacioso",
        "ruPron": "Derzkiy",
        "ptPron": "Audacioso",
        "emoji": "😎"
      },
      {
        "en": "Insidious",
        "ru": "коварный",
        "pt": "insidioso",
        "ruPron": "Kovarnyy",
        "ptPron": "Insidioso",
        "emoji": "🐍"
      },
      {
        "en": "Vindictive",
        "ru": "мстительный",
        "pt": "vingativo",
        "ruPron": "Mstitelnyy",
        "ptPron": "Vingativo",
        "emoji": "😈"
      },
      {
        "en": "Frivolous",
        "ru": "легкомысленный",
        "pt": "frívolo",
        "ruPron": "Legkomyslennyy",
        "ptPron": "Frivolo",
        "emoji": "🎈"
      },
      {
        "en": "Tenacious",
        "ru": "упорный",
        "pt": "tenaz",
        "ruPron": "Upornyy",
        "ptPron": "Tenaz",
        "emoji": "🐾"
      },
      {
        "en": "Nonchalant",
        "ru": "беспечный",
        "pt": "despreocupado",
        "ruPron": "Bespechnyy",
        "ptPron": "Despreocupado",
        "emoji": "😌"
      },
      {
        "en": "Gregarious",
        "ru": "общительный",
        "pt": "gregário",
        "ruPron": "Obshchitelnyy",
        "ptPron": "Gregario",
        "emoji": "🎉"
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
      },
      {
        "en": "To run",
        "ru": "бегать",
        "pt": "correr",
        "ruPron": "Begat",
        "ptPron": "Coher",
        "emoji": "🏃"
      },
      {
        "en": "To walk",
        "ru": "гулять",
        "pt": "caminhar",
        "ruPron": "Gulyat",
        "ptPron": "Caminyar",
        "emoji": "🚶"
      },
      {
        "en": "To swim",
        "ru": "плавать",
        "pt": "nadar",
        "ruPron": "Plavat",
        "ptPron": "Nadar",
        "emoji": "🏊"
      },
      {
        "en": "To play",
        "ru": "играть",
        "pt": "jogar",
        "ruPron": "Igrat",
        "ptPron": "Zhogar",
        "emoji": "🎮"
      },
      {
        "en": "To sing",
        "ru": "петь",
        "pt": "cantar",
        "ruPron": "Pet",
        "ptPron": "Cantar",
        "emoji": "🎤"
      },
      {
        "en": "To dance",
        "ru": "танцевать",
        "pt": "dançar",
        "ruPron": "Tantsevat",
        "ptPron": "Dansar",
        "emoji": "💃"
      },
      {
        "en": "To cook",
        "ru": "готовить",
        "pt": "cozinhar",
        "ruPron": "Gotovit",
        "ptPron": "Cozinyar",
        "emoji": "🍳"
      },
      {
        "en": "To help",
        "ru": "помогать",
        "pt": "ajudar",
        "ruPron": "Pomogat",
        "ptPron": "Azhudar",
        "emoji": "🤝"
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
      },
      {
        "en": "To learn",
        "ru": "учиться",
        "pt": "aprender",
        "ruPron": "Uchitsya",
        "ptPron": "Aprender",
        "emoji": "📚"
      },
      {
        "en": "To teach",
        "ru": "учить",
        "pt": "ensinar",
        "ruPron": "Uchit",
        "ptPron": "Ensinar",
        "emoji": "🍎"
      },
      {
        "en": "To travel",
        "ru": "путешествовать",
        "pt": "viajar",
        "ruPron": "Puteshestvovat",
        "ptPron": "Viazhar",
        "emoji": "✈️"
      },
      {
        "en": "To arrive",
        "ru": "прибывать",
        "pt": "chegar",
        "ruPron": "Pribyvat",
        "ptPron": "Shegar",
        "emoji": "🛬"
      },
      {
        "en": "To leave",
        "ru": "уходить",
        "pt": "partir",
        "ruPron": "Ukhodit",
        "ptPron": "Partir",
        "emoji": "🚪"
      },
      {
        "en": "To find",
        "ru": "находить",
        "pt": "encontrar",
        "ruPron": "Nakhodit",
        "ptPron": "Encontrar",
        "emoji": "🔍"
      },
      {
        "en": "To lose",
        "ru": "терять",
        "pt": "perder",
        "ruPron": "Teryat",
        "ptPron": "Perder",
        "emoji": "❌"
      },
      {
        "en": "To choose",
        "ru": "выбирать",
        "pt": "escolher",
        "ruPron": "Vybirat",
        "ptPron": "Escolyer",
        "emoji": "👉"
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
      },
      {
        "en": "To succeed",
        "ru": "преуспевать",
        "pt": "ter sucesso",
        "ruPron": "Preuspevat",
        "ptPron": "Ter sucesso",
        "emoji": "🏆"
      },
      {
        "en": "To fail",
        "ru": "терпеть неудачу",
        "pt": "falhar",
        "ruPron": "Terpet neudachu",
        "ptPron": "Falyar",
        "emoji": "❌"
      },
      {
        "en": "To hesitate",
        "ru": "колебаться",
        "pt": "hesitar",
        "ruPron": "Kolebatsya",
        "ptPron": "Hesitar",
        "emoji": "🤔"
      },
      {
        "en": "To manage",
        "ru": "справляться",
        "pt": "gerenciar",
        "ruPron": "Spravlyatsya",
        "ptPron": "Zherenciar",
        "emoji": "🗂️"
      },
      {
        "en": "To suggest",
        "ru": "предлагать",
        "pt": "sugerir",
        "ruPron": "Predlagat",
        "ptPron": "Suzherir",
        "emoji": "💡"
      },
      {
        "en": "To struggle",
        "ru": "бороться",
        "pt": "lutar",
        "ruPron": "Borotsya",
        "ptPron": "Lutar",
        "emoji": "😣"
      },
      {
        "en": "To admit",
        "ru": "признавать",
        "pt": "admitir",
        "ruPron": "Priznavat",
        "ptPron": "Admitir",
        "emoji": "🙋"
      },
      {
        "en": "To deny",
        "ru": "отрицать",
        "pt": "negar",
        "ruPron": "Otritsat",
        "ptPron": "Negar",
        "emoji": "🙅"
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
      },
      {
        "en": "To exacerbate",
        "ru": "усугублять",
        "pt": "exacerbar",
        "ruPron": "Usugublyat",
        "ptPron": "Eshacerbar",
        "emoji": "📈"
      },
      {
        "en": "To alienate",
        "ru": "отчуждать",
        "pt": "alienar",
        "ruPron": "Otchuzhdat",
        "ptPron": "Alienar",
        "emoji": "🚷"
      },
      {
        "en": "To circumvent",
        "ru": "обходить",
        "pt": "contornar",
        "ruPron": "Obkhodit",
        "ptPron": "Contornar",
        "emoji": "🔄"
      },
      {
        "en": "To substantiate",
        "ru": "обосновывать",
        "pt": "fundamentar",
        "ruPron": "Obosnovyvat",
        "ptPron": "Fundamentar",
        "emoji": "📄"
      },
      {
        "en": "To ostracize",
        "ru": "подвергать остракизму",
        "pt": "marginalizar",
        "ruPron": "Podvergat ostrakizmu",
        "ptPron": "Marzhinalizar",
        "emoji": "🚫"
      },
      {
        "en": "To vindicate",
        "ru": "оправдывать",
        "pt": "justificar",
        "ruPron": "Opravdyvat",
        "ptPron": "Zhustificar",
        "emoji": "⚖️"
      },
      {
        "en": "To acquiesce",
        "ru": "соглашаться",
        "pt": "aquiescer",
        "ruPron": "Soglashatsya",
        "ptPron": "Akiescer",
        "emoji": "🤝"
      },
      {
        "en": "To dissipate",
        "ru": "рассеивать",
        "pt": "dissipar",
        "ruPron": "Rasseivat",
        "ptPron": "Dissipar",
        "emoji": "💨"
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
      },
      {
        "en": "Well",
        "ru": "хорошо",
        "pt": "bem",
        "ruPron": "Khorosho",
        "ptPron": "Bem",
        "emoji": "👍"
      },
      {
        "en": "Badly",
        "ru": "плохо",
        "pt": "mal",
        "ruPron": "Plokho",
        "ptPron": "Mal",
        "emoji": "👎"
      },
      {
        "en": "Very",
        "ru": "очень",
        "pt": "muito",
        "ruPron": "Ochen",
        "ptPron": "Muito",
        "emoji": "❗"
      },
      {
        "en": "Too",
        "ru": "слишком",
        "pt": "demais",
        "ruPron": "Slishkom",
        "ptPron": "Demais",
        "emoji": "⚠️"
      },
      {
        "en": "Also",
        "ru": "тоже",
        "pt": "também",
        "ruPron": "Tozhe",
        "ptPron": "Tambem",
        "emoji": "➕"
      },
      {
        "en": "Only",
        "ru": "только",
        "pt": "apenas",
        "ruPron": "Tolko",
        "ptPron": "Apenas",
        "emoji": "☝️"
      },
      {
        "en": "Outside",
        "ru": "снаружи",
        "pt": "fora",
        "ruPron": "Snaruzhi",
        "ptPron": "Fora",
        "emoji": "🌳"
      },
      {
        "en": "Inside",
        "ru": "внутри",
        "pt": "dentro",
        "ruPron": "Vnutri",
        "ptPron": "Dentro",
        "emoji": "🏠"
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
      },
      {
        "en": "Upstairs",
        "ru": "наверху",
        "pt": "em cima",
        "ruPron": "Naverkhu",
        "ptPron": "Em cima",
        "emoji": "⬆️"
      },
      {
        "en": "Downstairs",
        "ru": "внизу",
        "pt": "embaixo",
        "ruPron": "Vnizu",
        "ptPron": "Embaisho",
        "emoji": "⬇️"
      },
      {
        "en": "Everywhere",
        "ru": "везде",
        "pt": "em todo lugar",
        "ruPron": "Vezde",
        "ptPron": "Em todo lugar",
        "emoji": "🌍"
      },
      {
        "en": "Nowhere",
        "ru": "нигде",
        "pt": "lugar nenhum",
        "ruPron": "Nigde",
        "ptPron": "Lugar nenyum",
        "emoji": "🚫"
      },
      {
        "en": "Somewhere",
        "ru": "где-то",
        "pt": "algum lugar",
        "ruPron": "Gde-to",
        "ptPron": "Algum lugar",
        "emoji": "📍"
      },
      {
        "en": "Anyway",
        "ru": "в любом случае",
        "pt": "de qualquer forma",
        "ruPron": "V lyubom sluchaye",
        "ptPron": "De qualker forma",
        "emoji": "🤷"
      },
      {
        "en": "Instead",
        "ru": "вместо этого",
        "pt": "em vez disso",
        "ruPron": "Vmesto etogo",
        "ptPron": "Em vez disso",
        "emoji": "🔄"
      },
      {
        "en": "Besides",
        "ru": "кроме того",
        "pt": "além disso",
        "ruPron": "Krome togo",
        "ptPron": "Alem disso",
        "emoji": "➕"
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
      },
      {
        "en": "Apparently",
        "ru": "по-видимому",
        "pt": "aparentemente",
        "ruPron": "Po-vidimomu",
        "ptPron": "Aparentemente",
        "emoji": "🤔"
      },
      {
        "en": "Eventually",
        "ru": "в конце концов",
        "pt": "eventualmente",
        "ruPron": "V kontse kontsov",
        "ptPron": "Eventualmente",
        "emoji": "⏳"
      },
      {
        "en": "Unfortunately",
        "ru": "к сожалению",
        "pt": "infelizmente",
        "ruPron": "K sozhaleniyu",
        "ptPron": "Infelizmente",
        "emoji": "😔"
      },
      {
        "en": "Fortunately",
        "ru": "к счастью",
        "pt": "felizmente",
        "ruPron": "K schastyu",
        "ptPron": "Felizmente",
        "emoji": "🍀"
      },
      {
        "en": "Actually",
        "ru": "на самом деле",
        "pt": "na verdade",
        "ruPron": "Na samom dele",
        "ptPron": "Na verdade",
        "emoji": "✅"
      },
      {
        "en": "Basically",
        "ru": "по сути",
        "pt": "basicamente",
        "ruPron": "Po suti",
        "ptPron": "Basicamente",
        "emoji": "📌"
      },
      {
        "en": "Generally",
        "ru": "как правило",
        "pt": "geralmente",
        "ruPron": "Kak pravilo",
        "ptPron": "Zheralmente",
        "emoji": "📊"
      },
      {
        "en": "Specifically",
        "ru": "особенно",
        "pt": "especificamente",
        "ruPron": "Osobenno",
        "ptPron": "Especificamente",
        "emoji": "🎯"
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
      },
      {
        "en": "Ostensibly",
        "ru": "якобы",
        "pt": "ostensivamente",
        "ruPron": "Yakoby",
        "ptPron": "Ostensivamente",
        "emoji": "🎭"
      },
      {
        "en": "Invariably",
        "ru": "неизменно",
        "pt": "invariavelmente",
        "ruPron": "Neizmenno",
        "ptPron": "Invariavelmente",
        "emoji": "🔁"
      },
      {
        "en": "Irrevocably",
        "ru": "безвозвратно",
        "pt": "irrevogavelmente",
        "ruPron": "Bezvozvratno",
        "ptPron": "Ihevogavelmente",
        "emoji": "🔒"
      },
      {
        "en": "Retrospectively",
        "ru": "ретроспективно",
        "pt": "retrospectivamente",
        "ruPron": "Retrospektivno",
        "ptPron": "Hetrospectivamente",
        "emoji": "⏪"
      },
      {
        "en": "Unwittingly",
        "ru": "невольно",
        "pt": "inconscientemente",
        "ruPron": "Nevolno",
        "ptPron": "Inconscientemente",
        "emoji": "😳"
      },
      {
        "en": "Painstakingly",
        "ru": "кропотливо",
        "pt": "meticulosamente",
        "ruPron": "Kropotlivo",
        "ptPron": "Meticulosamente",
        "emoji": "🔬"
      },
      {
        "en": "Indiscriminately",
        "ru": "без разбора",
        "pt": "indiscriminadamente",
        "ruPron": "Bez razbora",
        "ptPron": "Indiscriminadamente",
        "emoji": "🎲"
      },
      {
        "en": "Perfunctorily",
        "ru": "формально",
        "pt": "superficialmente",
        "ruPron": "Formalno",
        "ptPron": "Superficialmente",
        "emoji": "📄"
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
      },
      {
        "en": "Orange juice",
        "ru": "апельсиновый сок",
        "pt": "suco de laranja",
        "ruPron": "Apelsinovyy sok",
        "ptPron": "Suco de laranzha",
        "emoji": "🧃"
      },
      {
        "en": "Iced tea",
        "ru": "холодный чай",
        "pt": "chá gelado",
        "ruPron": "Kholodnyy chay",
        "ptPron": "Sha zhelado",
        "emoji": "🧊"
      },
      {
        "en": "Cappuccino",
        "ru": "капучино",
        "pt": "cappuccino",
        "ruPron": "Kapuchino",
        "ptPron": "Cappuccino",
        "emoji": "☕"
      },
      {
        "en": "Espresso",
        "ru": "эспрессо",
        "pt": "espresso",
        "ruPron": "Espresso",
        "ptPron": "Espresso",
        "emoji": "☕"
      },
      {
        "en": "Milkshake",
        "ru": "молочный коктейль",
        "pt": "milkshake",
        "ruPron": "Molochnyy kokteyl",
        "ptPron": "Milkshake",
        "emoji": "🥤"
      },
      {
        "en": "Rum",
        "ru": "ром",
        "pt": "rum",
        "ruPron": "Rom",
        "ptPron": "Hum",
        "emoji": "🥃"
      },
      {
        "en": "Gin",
        "ru": "джин",
        "pt": "gin",
        "ruPron": "Dzhin",
        "ptPron": "Zhin",
        "emoji": "🍸"
      },
      {
        "en": "Yogurt drink",
        "ru": "питьевой йогурт",
        "pt": "iogurte líquido",
        "ruPron": "Pityevoy yogurt",
        "ptPron": "Iogurte likido",
        "emoji": "🥛"
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
      },
      {
        "en": "Mojito",
        "ru": "мохито",
        "pt": "mojito",
        "ruPron": "Mokhito",
        "ptPron": "Mozhito",
        "emoji": "🍹"
      },
      {
        "en": "Sangria",
        "ru": "сангрия",
        "pt": "sangria",
        "ruPron": "Sangriya",
        "ptPron": "Sangria",
        "emoji": "🍷"
      },
      {
        "en": "Grape juice",
        "ru": "виноградный сок",
        "pt": "suco de uva",
        "ruPron": "Vinogradnyy sok",
        "ptPron": "Suco de uva",
        "emoji": "🧃"
      },
      {
        "en": "Ginger tea",
        "ru": "имбирный чай",
        "pt": "chá de gengibre",
        "ruPron": "Imbirnyy chay",
        "ptPron": "Sha de zhenzhibre",
        "emoji": "🍵"
      },
      {
        "en": "Green tea",
        "ru": "зелёный чай",
        "pt": "chá verde",
        "ruPron": "Zelyonyy chay",
        "ptPron": "Sha verde",
        "emoji": "🍵"
      },
      {
        "en": "Black tea",
        "ru": "чёрный чай",
        "pt": "chá preto",
        "ruPron": "Chyornyy chay",
        "ptPron": "Sha preto",
        "emoji": "🍵"
      },
      {
        "en": "Hot toddy",
        "ru": "грог",
        "pt": "grogue",
        "ruPron": "Grog",
        "ptPron": "Grozhe",
        "emoji": "🥃"
      },
      {
        "en": "Fruit tea",
        "ru": "фруктовый чай",
        "pt": "chá de frutas",
        "ruPron": "Fruktovyy chay",
        "ptPron": "Sha de frutas",
        "emoji": "🍓"
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
      },
      {
        "en": "Rosé wine",
        "ru": "розовое вино",
        "pt": "vinho rosé",
        "ruPron": "Rozovoye vino",
        "ptPron": "Vinyo rose",
        "emoji": "🍷"
      },
      {
        "en": "Craft beer",
        "ru": "крафтовое пиво",
        "pt": "cerveja artesanal",
        "ruPron": "Kraftovoye pivo",
        "ptPron": "Cervezha artesanal",
        "emoji": "🍺"
      },
      {
        "en": "Non-alcoholic beer",
        "ru": "безалкогольное пиво",
        "pt": "cerveja sem álcool",
        "ruPron": "Bezalkogolnoye pivo",
        "ptPron": "Cervezha sem alcool",
        "emoji": "🍺"
      },
      {
        "en": "Prosecco",
        "ru": "просекко",
        "pt": "prosecco",
        "ruPron": "Prosekko",
        "ptPron": "Prosecco",
        "emoji": "🥂"
      },
      {
        "en": "Brandy",
        "ru": "бренди",
        "pt": "conhaque",
        "ruPron": "Brendi",
        "ptPron": "Conyake",
        "emoji": "🥃"
      },
      {
        "en": "Tequila",
        "ru": "текила",
        "pt": "tequila",
        "ruPron": "Tekila",
        "ptPron": "Tekila",
        "emoji": "🥃"
      },
      {
        "en": "Sake",
        "ru": "саке",
        "pt": "saquê",
        "ruPron": "Sake",
        "ptPron": "Saque",
        "emoji": "🍶"
      },
      {
        "en": "Port wine",
        "ru": "портвейн",
        "pt": "vinho do porto",
        "ruPron": "Portveyn",
        "ptPron": "Vinyo do porto",
        "emoji": "🍷"
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
      },
      {
        "en": "Vermouth",
        "ru": "вермут",
        "pt": "vermute",
        "ruPron": "Vermut",
        "ptPron": "Vermute",
        "emoji": "🍷"
      },
      {
        "en": "Grappa",
        "ru": "граппа",
        "pt": "grappa",
        "ruPron": "Grappa",
        "ptPron": "Grappa",
        "emoji": "🥃"
      },
      {
        "en": "Ouzo",
        "ru": "узо",
        "pt": "ouzo",
        "ruPron": "Uzo",
        "ptPron": "Ouzo",
        "emoji": "🥃"
      },
      {
        "en": "Eggnog",
        "ru": "гоголь-моголь",
        "pt": "gemada",
        "ruPron": "Gogol-mogol",
        "ptPron": "Zhemada",
        "emoji": "🥛"
      },
      {
        "en": "Horchata",
        "ru": "орчата",
        "pt": "horchata",
        "ruPron": "Orchata",
        "ptPron": "Horshata",
        "emoji": "🥛"
      },
      {
        "en": "Kombucha",
        "ru": "комбуча",
        "pt": "kombuchá",
        "ruPron": "Kombucha",
        "ptPron": "Kombusha",
        "emoji": "🍾"
      },
      {
        "en": "Tarhun",
        "ru": "тархун",
        "pt": "tarhun",
        "ruPron": "Tarkhun",
        "ptPron": "Tarhun",
        "emoji": "🥤"
      },
      {
        "en": "Sbiten",
        "ru": "сбитень",
        "pt": "sbiten",
        "ruPron": "Sbiten",
        "ptPron": "Sbiten",
        "emoji": "🍯"
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
      },
      {
        "en": "Sky blue",
        "ru": "голубой",
        "pt": "azul claro",
        "ruPron": "Goluboy",
        "ptPron": "Azul claro",
        "emoji": "🔵",
        "swatch": "#87CEEB"
      },
      {
        "en": "Lime",
        "ru": "лаймовый",
        "pt": "verde-limão",
        "ruPron": "Laymovyy",
        "ptPron": "Verde-limowng",
        "emoji": "🟢",
        "swatch": "#BFFF00"
      },
      {
        "en": "Cream",
        "ru": "кремовый",
        "pt": "creme",
        "ruPron": "Kremovyy",
        "ptPron": "Creme",
        "emoji": "⚪",
        "swatch": "#FFFDD0"
      },
      {
        "en": "Indigo",
        "ru": "индиго",
        "pt": "anil",
        "ruPron": "Indigo",
        "ptPron": "Anil",
        "emoji": "🟣",
        "swatch": "#4B0082"
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
      },
      {
        "en": "Coral",
        "ru": "коралловый",
        "pt": "coral",
        "ruPron": "Korallovyy",
        "ptPron": "Coral",
        "emoji": "🟠",
        "swatch": "#FF7F50"
      },
      {
        "en": "Mint",
        "ru": "мятный",
        "pt": "menta",
        "ruPron": "Myatnyy",
        "ptPron": "Menta",
        "emoji": "🟢",
        "swatch": "#98FF98"
      },
      {
        "en": "Peach",
        "ru": "персиковый",
        "pt": "pêssego",
        "ruPron": "Persikovyy",
        "ptPron": "Pessego",
        "emoji": "🟠",
        "swatch": "#FFE5B4"
      },
      {
        "en": "Denim",
        "ru": "джинсовый",
        "pt": "jeans",
        "ruPron": "Dzhinsovyy",
        "ptPron": "Zheans",
        "emoji": "🔵",
        "swatch": "#1560BD"
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
      },
      {
        "en": "Rust",
        "ru": "ржавый",
        "pt": "ferrugem",
        "ruPron": "Rzhavyy",
        "ptPron": "Fehuzhem",
        "emoji": "🟠",
        "swatch": "#B7410E"
      },
      {
        "en": "Teal",
        "ru": "изумрудно-синий",
        "pt": "verde-azulado",
        "ruPron": "Izumrudno-siniy",
        "ptPron": "Verde-azulado",
        "emoji": "🔵",
        "swatch": "#008080"
      },
      {
        "en": "Salmon",
        "ru": "лососёвый",
        "pt": "salmão",
        "ruPron": "Lososyovyy",
        "ptPron": "Salmowng",
        "emoji": "🟠",
        "swatch": "#FA8072"
      },
      {
        "en": "Plum",
        "ru": "сливовый",
        "pt": "ameixa",
        "ruPron": "Slivovyy",
        "ptPron": "Ameisha",
        "emoji": "🟣",
        "swatch": "#8E4585"
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
      },
      {
        "en": "Puce",
        "ru": "тёмно-красновато-коричневый",
        "pt": "puce",
        "ruPron": "Tyomno-krasnovato-korichnevyy",
        "ptPron": "Puce",
        "emoji": "🟤",
        "swatch": "#A95C68"
      },
      {
        "en": "Fuchsia",
        "ru": "фуксия",
        "pt": "fúcsia",
        "ruPron": "Fuksiya",
        "ptPron": "Fucsia",
        "emoji": "🩷",
        "swatch": "#FF00FF"
      },
      {
        "en": "Celadon",
        "ru": "селадон",
        "pt": "celadon",
        "ruPron": "Seladon",
        "ptPron": "Celadon",
        "emoji": "🟢",
        "swatch": "#ACE1AF"
      },
      {
        "en": "Cinnabar",
        "ru": "киноварь",
        "pt": "cinábrio",
        "ruPron": "Kinovar",
        "ptPron": "Cinabrio",
        "emoji": "🔴",
        "swatch": "#E34234"
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
      },
      {
        "en": "Ham",
        "ru": "ветчина",
        "pt": "presunto",
        "ruPron": "Vetchina",
        "ptPron": "Presunto",
        "emoji": "🍖"
      },
      {
        "en": "Bacon",
        "ru": "бекон",
        "pt": "bacon",
        "ruPron": "Bekon",
        "ptPron": "Bacon",
        "emoji": "🥓"
      },
      {
        "en": "Yogurt",
        "ru": "йогурт",
        "pt": "iogurte",
        "ruPron": "Yogurt",
        "ptPron": "Iogurte",
        "emoji": "🥣"
      },
      {
        "en": "Cookie",
        "ru": "печенье",
        "pt": "biscoito",
        "ruPron": "Pechenye",
        "ptPron": "Biscoito",
        "emoji": "🍪"
      },
      {
        "en": "Cake",
        "ru": "торт",
        "pt": "bolo",
        "ruPron": "Tort",
        "ptPron": "Bolo",
        "emoji": "🎂"
      },
      {
        "en": "Chocolate",
        "ru": "шоколад",
        "pt": "chocolate",
        "ruPron": "Shokolad",
        "ptPron": "Shocolate",
        "emoji": "🍫"
      },
      {
        "en": "Ice cream",
        "ru": "мороженое",
        "pt": "sorvete",
        "ruPron": "Morozhenoye",
        "ptPron": "Sorvete",
        "emoji": "🍨"
      },
      {
        "en": "Noodles",
        "ru": "лапша",
        "pt": "macarrão",
        "ruPron": "Lapsha",
        "ptPron": "Macahowng",
        "emoji": "🍜"
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
      },
      {
        "en": "Omelette",
        "ru": "омлет",
        "pt": "omelete",
        "ruPron": "Omlet",
        "ptPron": "Omelete",
        "emoji": "🍳"
      },
      {
        "en": "Meatball",
        "ru": "тефтеля",
        "pt": "almôndega",
        "ruPron": "Teftelya",
        "ptPron": "Almondega",
        "emoji": "🍖"
      },
      {
        "en": "Cutlet",
        "ru": "котлета",
        "pt": "costeleta",
        "ruPron": "Kotleta",
        "ptPron": "Costeleta",
        "emoji": "🍖"
      },
      {
        "en": "Filling",
        "ru": "начинка",
        "pt": "recheio",
        "ruPron": "Nachinka",
        "ptPron": "Hesheio",
        "emoji": "🥧"
      },
      {
        "en": "Crust",
        "ru": "корка",
        "pt": "crosta",
        "ruPron": "Korka",
        "ptPron": "Crosta",
        "emoji": "🍞"
      },
      {
        "en": "Syrup",
        "ru": "сироп",
        "pt": "xarope",
        "ruPron": "Sirop",
        "ptPron": "Sharope",
        "emoji": "🍯"
      },
      {
        "en": "Vinegar",
        "ru": "уксус",
        "pt": "vinagre",
        "ruPron": "Uksus",
        "ptPron": "Vinagre",
        "emoji": "🧴"
      },
      {
        "en": "Mustard",
        "ru": "горчица",
        "pt": "mostarda",
        "ruPron": "Gorchitsa",
        "ptPron": "Mostarda",
        "emoji": "🌭"
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
      },
      {
        "en": "Goulash",
        "ru": "гуляш",
        "pt": "goulash",
        "ruPron": "Gulyash",
        "ptPron": "Goulash",
        "emoji": "🍲"
      },
      {
        "en": "Risotto",
        "ru": "ризотто",
        "pt": "risoto",
        "ruPron": "Rizotto",
        "ptPron": "Hisoto",
        "emoji": "🍚"
      },
      {
        "en": "Ravioli",
        "ru": "равиоли",
        "pt": "ravióli",
        "ruPron": "Ravioli",
        "ptPron": "Havioli",
        "emoji": "🥟"
      },
      {
        "en": "Souffle",
        "ru": "суфле",
        "pt": "suflê",
        "ruPron": "Sufle",
        "ptPron": "Sufle",
        "emoji": "🍮"
      },
      {
        "en": "Custard",
        "ru": "заварной крем",
        "pt": "creme de confeiteiro",
        "ruPron": "Zavarnoy krem",
        "ptPron": "Creme de confeiteiro",
        "emoji": "🍮"
      },
      {
        "en": "Marzipan",
        "ru": "марципан",
        "pt": "maçapão",
        "ruPron": "Martsipan",
        "ptPron": "Masapowng",
        "emoji": "🍬"
      },
      {
        "en": "Nougat",
        "ru": "нуга",
        "pt": "nogado",
        "ruPron": "Nuga",
        "ptPron": "Nogado",
        "emoji": "🍬"
      },
      {
        "en": "Meringue",
        "ru": "безе",
        "pt": "merengue",
        "ruPron": "Beze",
        "ptPron": "Merenzhe",
        "emoji": "🍰"
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
      },
      {
        "en": "Bouillabaisse",
        "ru": "буйабес",
        "pt": "bouillabaisse",
        "ruPron": "Buyabes",
        "ptPron": "Bouillabaisse",
        "emoji": "🍲"
      },
      {
        "en": "Consommé",
        "ru": "консоме",
        "pt": "consommé",
        "ruPron": "Konsome",
        "ptPron": "Consomme",
        "emoji": "🍵"
      },
      {
        "en": "Terrine",
        "ru": "террин",
        "pt": "terrine",
        "ruPron": "Terrin",
        "ptPron": "Tehine",
        "emoji": "🍖"
      },
      {
        "en": "Charcuterie",
        "ru": "колбасные изделия",
        "pt": "charcutaria",
        "ruPron": "Kolbasnyye izdeliya",
        "ptPron": "Sharcutaria",
        "emoji": "🥓"
      },
      {
        "en": "Foie gras",
        "ru": "фуа-гра",
        "pt": "foie gras",
        "ruPron": "Fua-gra",
        "ptPron": "Foie gras",
        "emoji": "🍖"
      },
      {
        "en": "Ratatouille",
        "ru": "рататуй",
        "pt": "ratatouille",
        "ruPron": "Ratatuy",
        "ptPron": "Hatatouille",
        "emoji": "🍆"
      },
      {
        "en": "Bisque",
        "ru": "биск",
        "pt": "bisque",
        "ruPron": "Bisk",
        "ptPron": "Biske",
        "emoji": "🍲"
      },
      {
        "en": "Julienne",
        "ru": "жюльен",
        "pt": "julienne",
        "ruPron": "Zhyulyen",
        "ptPron": "Zhulienne",
        "emoji": "🍄"
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
      },
      {
        "en": "Baker",
        "ru": "пекарь",
        "pt": "padeiro",
        "ruPron": "Pekar",
        "ptPron": "Padeiro",
        "emoji": "🥖"
      },
      {
        "en": "Waiter",
        "ru": "официант",
        "pt": "garçom",
        "ruPron": "Ofitsiant",
        "ptPron": "Garsom",
        "emoji": "🍽️"
      },
      {
        "en": "Cashier",
        "ru": "кассир",
        "pt": "caixa",
        "ruPron": "Kassir",
        "ptPron": "Caisha",
        "emoji": "💵"
      },
      {
        "en": "Cleaner",
        "ru": "уборщик",
        "pt": "faxineiro",
        "ruPron": "Uborshchik",
        "ptPron": "Fashineiro",
        "emoji": "🧹"
      },
      {
        "en": "Guard",
        "ru": "охранник",
        "pt": "guarda",
        "ruPron": "Okhrannik",
        "ptPron": "Guarda",
        "emoji": "💂"
      },
      {
        "en": "Barber",
        "ru": "парикмахер",
        "pt": "barbeiro",
        "ruPron": "Parikmakher",
        "ptPron": "Barbeiro",
        "emoji": "💈"
      },
      {
        "en": "Gardener",
        "ru": "садовник",
        "pt": "jardineiro",
        "ruPron": "Sadovnik",
        "ptPron": "Zhardineiro",
        "emoji": "🌱"
      },
      {
        "en": "Postman",
        "ru": "почтальон",
        "pt": "carteiro",
        "ruPron": "Pochtalon",
        "ptPron": "Carteiro",
        "emoji": "📮"
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
      },
      {
        "en": "Dentist",
        "ru": "стоматолог",
        "pt": "dentista",
        "ruPron": "Stomatolog",
        "ptPron": "Dentista",
        "emoji": "🦷"
      },
      {
        "en": "Chef",
        "ru": "шеф-повар",
        "pt": "chef",
        "ruPron": "Shef-povar",
        "ptPron": "Shef",
        "emoji": "👨‍🍳"
      },
      {
        "en": "Tailor",
        "ru": "портной",
        "pt": "alfaiate",
        "ruPron": "Portnoy",
        "ptPron": "Alfaiate",
        "emoji": "🧵"
      },
      {
        "en": "Translator",
        "ru": "переводчик",
        "pt": "tradutor",
        "ruPron": "Perevodchik",
        "ptPron": "Tradutor",
        "emoji": "🌐"
      },
      {
        "en": "Designer",
        "ru": "дизайнер",
        "pt": "designer",
        "ruPron": "Dizayner",
        "ptPron": "Designer",
        "emoji": "🎨"
      },
      {
        "en": "Programmer",
        "ru": "программист",
        "pt": "programador",
        "ruPron": "Programmist",
        "ptPron": "Programador",
        "emoji": "💻"
      },
      {
        "en": "Salesperson",
        "ru": "продавец",
        "pt": "vendedor",
        "ruPron": "Prodavets",
        "ptPron": "Vendedor",
        "emoji": "🛍️"
      },
      {
        "en": "Manager",
        "ru": "менеджер",
        "pt": "gerente",
        "ruPron": "Menedzher",
        "ptPron": "Zherente",
        "emoji": "📋"
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
      },
      {
        "en": "Psychologist",
        "ru": "психолог",
        "pt": "psicólogo",
        "ruPron": "Psikholog",
        "ptPron": "Psicologo",
        "emoji": "🧠"
      },
      {
        "en": "Pharmacist",
        "ru": "фармацевт",
        "pt": "farmacêutico",
        "ruPron": "Farmatsevt",
        "ptPron": "Farmaceutico",
        "emoji": "💊"
      },
      {
        "en": "Biologist",
        "ru": "биолог",
        "pt": "biólogo",
        "ruPron": "Biolog",
        "ptPron": "Biologo",
        "emoji": "🔬"
      },
      {
        "en": "Economist",
        "ru": "экономист",
        "pt": "economista",
        "ruPron": "Ekonomist",
        "ptPron": "Economista",
        "emoji": "📈"
      },
      {
        "en": "Historian",
        "ru": "историк",
        "pt": "historiador",
        "ruPron": "Istorik",
        "ptPron": "Historiador",
        "emoji": "📜"
      },
      {
        "en": "Librarian",
        "ru": "библиотекарь",
        "pt": "bibliotecário",
        "ruPron": "Bibliotekar",
        "ptPron": "Bibliotecario",
        "emoji": "📚"
      },
      {
        "en": "Interpreter",
        "ru": "устный переводчик",
        "pt": "intérprete",
        "ruPron": "Ustnyy perevodchik",
        "ptPron": "Interprete",
        "emoji": "🗣️"
      },
      {
        "en": "Consultant",
        "ru": "консультант",
        "pt": "consultor",
        "ruPron": "Konsultant",
        "ptPron": "Consultor",
        "emoji": "💼"
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
      },
      {
        "en": "Ombudsman",
        "ru": "омбудсмен",
        "pt": "ombudsman",
        "ruPron": "Ombudsmen",
        "ptPron": "Ombudsman",
        "emoji": "⚖️"
      },
      {
        "en": "Cryptographer",
        "ru": "криптограф",
        "pt": "criptógrafo",
        "ruPron": "Kriptograf",
        "ptPron": "Criptografo",
        "emoji": "🔐"
      },
      {
        "en": "Lexicographer",
        "ru": "лексикограф",
        "pt": "lexicógrafo",
        "ruPron": "Leksikograf",
        "ptPron": "Leshicografo",
        "emoji": "📖"
      },
      {
        "en": "Numismatist",
        "ru": "нумизмат",
        "pt": "numismata",
        "ruPron": "Numizmat",
        "ptPron": "Numismata",
        "emoji": "🪙"
      },
      {
        "en": "Entomologist",
        "ru": "энтомолог",
        "pt": "entomologista",
        "ruPron": "Entomolog",
        "ptPron": "Entomolozhista",
        "emoji": "🐞"
      },
      {
        "en": "Horologist",
        "ru": "часовщик",
        "pt": "relojoeiro",
        "ruPron": "Chasovshchik",
        "ptPron": "Helozhoeiro",
        "emoji": "🕰️"
      },
      {
        "en": "Genealogist",
        "ru": "генеалог",
        "pt": "genealogista",
        "ruPron": "Genealog",
        "ptPron": "Zhenealozhista",
        "emoji": "🌳"
      },
      {
        "en": "Philologist",
        "ru": "филолог",
        "pt": "filólogo",
        "ruPron": "Filolog",
        "ptPron": "Filologo",
        "emoji": "📚"
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
      },
      {
        "en": "Skateboard",
        "ru": "скейтборд",
        "pt": "skate",
        "ruPron": "Skeytbord",
        "ptPron": "Skate",
        "emoji": "🛹"
      },
      {
        "en": "Wheelchair",
        "ru": "инвалидное кресло",
        "pt": "cadeira de rodas",
        "ruPron": "Invalidnoye kreslo",
        "ptPron": "Cadeira de rodas",
        "emoji": "🦽"
      },
      {
        "en": "Sled",
        "ru": "санки",
        "pt": "trenó",
        "ruPron": "Sanki",
        "ptPron": "Treno",
        "emoji": "🛷"
      },
      {
        "en": "Canoe",
        "ru": "каноэ",
        "pt": "canoa",
        "ruPron": "Kanoe",
        "ptPron": "Canoa",
        "emoji": "🛶"
      },
      {
        "en": "Cart",
        "ru": "тележка",
        "pt": "carrinho",
        "ruPron": "Telezhka",
        "ptPron": "Cahinyo",
        "emoji": "🛒"
      },
      {
        "en": "Pickup truck",
        "ru": "пикап",
        "pt": "picape",
        "ruPron": "Pikap",
        "ptPron": "Picape",
        "emoji": "🛻"
      },
      {
        "en": "Minibus",
        "ru": "маршрутка",
        "pt": "micro-ônibus",
        "ruPron": "Marshrutka",
        "ptPron": "Micro-onibus",
        "emoji": "🚐"
      },
      {
        "en": "Cable car",
        "ru": "канатная дорога",
        "pt": "teleférico",
        "ruPron": "Kanatnaya doroga",
        "ptPron": "Teleferico",
        "emoji": "🚡"
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
      },
      {
        "en": "Kayak",
        "ru": "байдарка",
        "pt": "caiaque",
        "ruPron": "Baydarka",
        "ptPron": "Caiake",
        "emoji": "🛶"
      },
      {
        "en": "Raft",
        "ru": "плот",
        "pt": "jangada",
        "ruPron": "Plot",
        "ptPron": "Zhangada",
        "emoji": "🛟"
      },
      {
        "en": "Jet ski",
        "ru": "гидроцикл",
        "pt": "jet ski",
        "ruPron": "Gidrotsikl",
        "ptPron": "Zhet ski",
        "emoji": "🌊"
      },
      {
        "en": "Limousine",
        "ru": "лимузин",
        "pt": "limusine",
        "ruPron": "Limuzin",
        "ptPron": "Limusine",
        "emoji": "🚗"
      },
      {
        "en": "Camper van",
        "ru": "дом на колёсах",
        "pt": "trailer",
        "ruPron": "Dom na kolyosakh",
        "ptPron": "Trailer",
        "emoji": "🚐"
      },
      {
        "en": "Golf cart",
        "ru": "гольф-кар",
        "pt": "carrinho de golfe",
        "ruPron": "Golf-kar",
        "ptPron": "Cahinyo de golfe",
        "emoji": "🛺"
      },
      {
        "en": "Forklift",
        "ru": "погрузчик",
        "pt": "empilhadeira",
        "ruPron": "Pogruzchik",
        "ptPron": "Empilyadeira",
        "emoji": "🏗️"
      },
      {
        "en": "Bulldozer",
        "ru": "бульдозер",
        "pt": "buldôzer",
        "ruPron": "Buldozer",
        "ptPron": "Buldozer",
        "emoji": "🚜"
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
      },
      {
        "en": "Crane truck",
        "ru": "автокран",
        "pt": "caminhão-guindaste",
        "ruPron": "Avtokran",
        "ptPron": "Caminyowng-zhindaste",
        "emoji": "🏗️"
      },
      {
        "en": "Garbage truck",
        "ru": "мусоровоз",
        "pt": "caminhão de lixo",
        "ruPron": "Musorovoz",
        "ptPron": "Caminyowng de lisho",
        "emoji": "🚛"
      },
      {
        "en": "Fire truck",
        "ru": "пожарная машина",
        "pt": "carro de bombeiros",
        "ruPron": "Pozharnaya mashina",
        "ptPron": "Caho de bombeiros",
        "emoji": "🚒"
      },
      {
        "en": "Tow truck",
        "ru": "эвакуатор",
        "pt": "reboque",
        "ruPron": "Evakuator",
        "ptPron": "Heboke",
        "emoji": "🚛"
      },
      {
        "en": "Cement mixer",
        "ru": "бетономешалка",
        "pt": "betoneira",
        "ruPron": "Betonomeshalka",
        "ptPron": "Betoneira",
        "emoji": "🚧"
      },
      {
        "en": "Dump truck",
        "ru": "самосвал",
        "pt": "caminhão basculante",
        "ruPron": "Samosval",
        "ptPron": "Caminyowng basculante",
        "emoji": "🚛"
      },
      {
        "en": "Semi-trailer",
        "ru": "фура",
        "pt": "carreta",
        "ruPron": "Fura",
        "ptPron": "Caheta",
        "emoji": "🚛"
      },
      {
        "en": "Hang glider",
        "ru": "дельтаплан",
        "pt": "asa-delta",
        "ruPron": "Deltaplan",
        "ptPron": "Asa-delta",
        "emoji": "🪂"
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
      },
      {
        "en": "Amphibious vehicle",
        "ru": "амфибия",
        "pt": "veículo anfíbio",
        "ruPron": "Amfibiya",
        "ptPron": "Veiculo anfibio",
        "emoji": "🚙"
      },
      {
        "en": "Maglev train",
        "ru": "поезд на магнитной подушке",
        "pt": "trem maglev",
        "ruPron": "Poyezd na magnitnoy podushke",
        "ptPron": "Trem maglev",
        "emoji": "🚄"
      },
      {
        "en": "Bathyscaphe",
        "ru": "батискаф",
        "pt": "batiscafo",
        "ruPron": "Batiskaf",
        "ptPron": "Batiscafo",
        "emoji": "🌊"
      },
      {
        "en": "Gyrocopter",
        "ru": "автожир",
        "pt": "autogiro",
        "ruPron": "Avtozhir",
        "ptPron": "Autozhiro",
        "emoji": "🚁"
      },
      {
        "en": "Sidecar motorcycle",
        "ru": "мотоцикл с коляской",
        "pt": "motocicleta com sidecar",
        "ruPron": "Mototsikl s kolyaskoy",
        "ptPron": "Motocicleta com sidecar",
        "emoji": "🏍️"
      },
      {
        "en": "Pontoon boat",
        "ru": "понтонная лодка",
        "pt": "barco pontão",
        "ruPron": "Pontonnaya lodka",
        "ptPron": "Barco pontowng",
        "emoji": "⛴️"
      },
      {
        "en": "Land yacht",
        "ru": "парусная тележка",
        "pt": "carro à vela",
        "ruPron": "Parusnaya telezhka",
        "ptPron": "Caho à vela",
        "emoji": "⛵"
      },
      {
        "en": "Steamroller",
        "ru": "каток",
        "pt": "rolo compressor",
        "ruPron": "Katok",
        "ptPron": "Holo compressor",
        "emoji": "🚧"
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
      },
      {
        "en": "Weather",
        "ru": "погода",
        "pt": "tempo",
        "ruPron": "Pogoda",
        "ptPron": "Tempo",
        "emoji": "🌤️"
      },
      {
        "en": "Climate",
        "ru": "климат",
        "pt": "clima",
        "ruPron": "Klimat",
        "ptPron": "Clima",
        "emoji": "🌍"
      },
      {
        "en": "Sunshine",
        "ru": "солнечный свет",
        "pt": "luz do sol",
        "ruPron": "Solnechnyy svet",
        "ptPron": "Luz do sol",
        "emoji": "☀️"
      },
      {
        "en": "Cloud",
        "ru": "облако",
        "pt": "nuvem",
        "ruPron": "Oblako",
        "ptPron": "Nuvem",
        "emoji": "☁️"
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
      },
      {
        "en": "Storm",
        "ru": "шторм",
        "pt": "tempestade",
        "ruPron": "Shtorm",
        "ptPron": "Tempestade",
        "emoji": "⛈️"
      },
      {
        "en": "Fog",
        "ru": "туман",
        "pt": "névoa",
        "ruPron": "Tuman",
        "ptPron": "Nevoa",
        "emoji": "🌫️"
      },
      {
        "en": "Ice",
        "ru": "лёд",
        "pt": "gelo",
        "ruPron": "Lyod",
        "ptPron": "Zhelo",
        "emoji": "🧊"
      },
      {
        "en": "Puddle",
        "ru": "лужа",
        "pt": "poça",
        "ruPron": "Luzha",
        "ptPron": "Posa",
        "emoji": "💧"
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
      },
      {
        "en": "Hail",
        "ru": "град",
        "pt": "granizo",
        "ruPron": "Grad",
        "ptPron": "Granizo",
        "emoji": "🧊"
      },
      {
        "en": "Humidity",
        "ru": "влажность",
        "pt": "umidade",
        "ruPron": "Vlazhnost",
        "ptPron": "Umidade",
        "emoji": "💦"
      },
      {
        "en": "Heatwave",
        "ru": "жара",
        "pt": "onda de calor",
        "ruPron": "Zhara",
        "ptPron": "Onda de calor",
        "emoji": "🥵"
      },
      {
        "en": "Overcast",
        "ru": "пасмурно",
        "pt": "nublado",
        "ruPron": "Pasmurno",
        "ptPron": "Nublado",
        "emoji": "☁️"
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
      },
      {
        "en": "Precipitation",
        "ru": "осадки",
        "pt": "precipitação",
        "ruPron": "Osadki",
        "ptPron": "Precipitasowng",
        "emoji": "🌧️"
      },
      {
        "en": "Cyclone",
        "ru": "циклон",
        "pt": "ciclone",
        "ruPron": "Tsiklon",
        "ptPron": "Ciclone",
        "emoji": "🌀"
      },
      {
        "en": "Permafrost",
        "ru": "вечная мерзлота",
        "pt": "permafrost",
        "ruPron": "Vechnaya merzlota",
        "ptPron": "Permafrost",
        "emoji": "🧊"
      },
      {
        "en": "Aurora",
        "ru": "полярное сияние",
        "pt": "aurora boreal",
        "ruPron": "Polyarnoye siyaniye",
        "ptPron": "Aurora boreal",
        "emoji": "🌌"
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
      },
      {
        "en": "Chess",
        "ru": "шахматы",
        "pt": "xadrez",
        "ruPron": "Shakhmaty",
        "ptPron": "Shadrez",
        "emoji": "♟️"
      },
      {
        "en": "Yoga",
        "ru": "йога",
        "pt": "ioga",
        "ruPron": "Yoga",
        "ptPron": "Ioga",
        "emoji": "🧘"
      },
      {
        "en": "Darts",
        "ru": "дартс",
        "pt": "dardos",
        "ruPron": "Darts",
        "ptPron": "Dardos",
        "emoji": "🎯"
      },
      {
        "en": "Bowling",
        "ru": "боулинг",
        "pt": "boliche",
        "ruPron": "Bouling",
        "ptPron": "Bolishe",
        "emoji": "🎳"
      },
      {
        "en": "Surfing",
        "ru": "сёрфинг",
        "pt": "surfe",
        "ruPron": "Syorfing",
        "ptPron": "Surfe",
        "emoji": "🏄"
      },
      {
        "en": "Karate",
        "ru": "карате",
        "pt": "caratê",
        "ruPron": "Karate",
        "ptPron": "Carate",
        "emoji": "🥋"
      },
      {
        "en": "Judo",
        "ru": "дзюдо",
        "pt": "judô",
        "ruPron": "Dzyudo",
        "ptPron": "Zhudo",
        "emoji": "🥋"
      },
      {
        "en": "Climbing",
        "ru": "скалолазание",
        "pt": "escalada",
        "ruPron": "Skalolazaniye",
        "ptPron": "Escalada",
        "emoji": "🧗"
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
      },
      {
        "en": "Taekwondo",
        "ru": "тхэквондо",
        "pt": "taekwondo",
        "ruPron": "Tkhekvondo",
        "ptPron": "Taekwondo",
        "emoji": "🥋"
      },
      {
        "en": "Rugby",
        "ru": "регби",
        "pt": "rugby",
        "ruPron": "Regbi",
        "ptPron": "Hugby",
        "emoji": "🏉"
      },
      {
        "en": "Baseball",
        "ru": "бейсбол",
        "pt": "beisebol",
        "ruPron": "Beysbol",
        "ptPron": "Beisebol",
        "emoji": "⚾"
      },
      {
        "en": "Cricket",
        "ru": "крикет",
        "pt": "críquete",
        "ruPron": "Kriket",
        "ptPron": "Crikete",
        "emoji": "🏏"
      },
      {
        "en": "Squash",
        "ru": "сквош",
        "pt": "squash",
        "ruPron": "Skvosh",
        "ptPron": "Squash",
        "emoji": "🎾"
      },
      {
        "en": "Water polo",
        "ru": "водное поло",
        "pt": "polo aquático",
        "ruPron": "Vodnoye polo",
        "ptPron": "Polo aquatico",
        "emoji": "🤽"
      },
      {
        "en": "Triathlon",
        "ru": "триатлон",
        "pt": "triatlo",
        "ruPron": "Triatlon",
        "ptPron": "Triatlo",
        "emoji": "🏊"
      },
      {
        "en": "Motorsport",
        "ru": "автоспорт",
        "pt": "automobilismo",
        "ruPron": "Avtosport",
        "ptPron": "Automobilismo",
        "emoji": "🏎️"
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
      },
      {
        "en": "Parkour",
        "ru": "паркур",
        "pt": "parkour",
        "ruPron": "Parkur",
        "ptPron": "Parkour",
        "emoji": "🏃"
      },
      {
        "en": "Kickboxing",
        "ru": "кикбоксинг",
        "pt": "kickboxing",
        "ruPron": "Kikboksing",
        "ptPron": "Kickboshing",
        "emoji": "🥊"
      },
      {
        "en": "Aikido",
        "ru": "айкидо",
        "pt": "aikido",
        "ruPron": "Aykido",
        "ptPron": "Aikido",
        "emoji": "🥋"
      },
      {
        "en": "Sumo",
        "ru": "сумо",
        "pt": "sumô",
        "ruPron": "Sumo",
        "ptPron": "Sumo",
        "emoji": "🤼"
      },
      {
        "en": "Polo",
        "ru": "поло",
        "pt": "polo",
        "ruPron": "Polo",
        "ptPron": "Polo",
        "emoji": "🐎"
      },
      {
        "en": "Lacrosse",
        "ru": "лакросс",
        "pt": "lacrosse",
        "ruPron": "Lakross",
        "ptPron": "Lacrosse",
        "emoji": "🥍"
      },
      {
        "en": "Bocce",
        "ru": "боча",
        "pt": "bocha",
        "ruPron": "Bocha",
        "ptPron": "Bosha",
        "emoji": "⚪"
      },
      {
        "en": "Windsurfing",
        "ru": "виндсёрфинг",
        "pt": "windsurf",
        "ruPron": "Vindsyorfing",
        "ptPron": "Windsurf",
        "emoji": "🏄"
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
      },
      {
        "en": "Orienteering",
        "ru": "спортивное ориентирование",
        "pt": "corrida de orientação",
        "ruPron": "Sportivnoye oriyentirovaniye",
        "ptPron": "Cohida de orientasowng",
        "emoji": "🧭"
      },
      {
        "en": "Speedway",
        "ru": "спидвей",
        "pt": "speedway",
        "ruPron": "Spidvey",
        "ptPron": "Speedway",
        "emoji": "🏍️"
      },
      {
        "en": "Netball",
        "ru": "нетбол",
        "pt": "netball",
        "ruPron": "Netbol",
        "ptPron": "Netball",
        "emoji": "🏐"
      },
      {
        "en": "Cross-country skiing",
        "ru": "лыжные гонки",
        "pt": "esqui cross-country",
        "ruPron": "Lyzhnyye gonki",
        "ptPron": "Eski cross-country",
        "emoji": "⛷️"
      },
      {
        "en": "Ultramarathon",
        "ru": "ультрамарафон",
        "pt": "ultramaratona",
        "ruPron": "Ultramarafon",
        "ptPron": "Ultramaratona",
        "emoji": "🏃"
      },
      {
        "en": "Skeleton",
        "ru": "скелетон",
        "pt": "skeleton",
        "ruPron": "Skeleton",
        "ptPron": "Skeleton",
        "emoji": "🛷"
      },
      {
        "en": "Luge",
        "ru": "санный спорт",
        "pt": "luge",
        "ruPron": "Sannyy sport",
        "ptPron": "Luzhe",
        "emoji": "🛷"
      },
      {
        "en": "Rhythmic gymnastics",
        "ru": "художественная гимнастика",
        "pt": "ginástica rítmica",
        "ruPron": "Khudozhestvennaya gimnastika",
        "ptPron": "Zhinastica ritmica",
        "emoji": "🎀"
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
      },
      {
        "en": "Tangerine",
        "ru": "мандарин",
        "pt": "tangerina",
        "ruPron": "Mandarin",
        "ptPron": "Tanzherina",
        "emoji": "🍊"
      },
      {
        "en": "Grapefruit",
        "ru": "грейпфрут",
        "pt": "toranja",
        "ruPron": "Greypfrut",
        "ptPron": "Toranzha",
        "emoji": "🍊"
      },
      {
        "en": "Nectarine",
        "ru": "нектарин",
        "pt": "nectarina",
        "ruPron": "Nektarin",
        "ptPron": "Nectarina",
        "emoji": "🍑"
      },
      {
        "en": "Avocado",
        "ru": "авокадо",
        "pt": "abacate",
        "ruPron": "Avokado",
        "ptPron": "Abacate",
        "emoji": "🥑"
      },
      {
        "en": "Clementine",
        "ru": "клементин",
        "pt": "clementina",
        "ruPron": "Klementin",
        "ptPron": "Clementina",
        "emoji": "🍊"
      },
      {
        "en": "Date",
        "ru": "финик",
        "pt": "tâmara",
        "ruPron": "Finik",
        "ptPron": "Tamara",
        "emoji": "🌴"
      },
      {
        "en": "Pomelo",
        "ru": "помело",
        "pt": "pomelo",
        "ruPron": "Pomelo",
        "ptPron": "Pomelo",
        "emoji": "🍈"
      },
      {
        "en": "Cantaloupe",
        "ru": "дыня канталупа",
        "pt": "melão cantalupo",
        "ruPron": "Dynya kantalupa",
        "ptPron": "Melowng cantalupo",
        "emoji": "🍈"
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
      },
      {
        "en": "Starfruit",
        "ru": "карамбола",
        "pt": "carambola",
        "ruPron": "Karambola",
        "ptPron": "Carambola",
        "emoji": "⭐"
      },
      {
        "en": "Mulberry",
        "ru": "шелковица",
        "pt": "amora-preta",
        "ruPron": "Shelkovitsa",
        "ptPron": "Amora-preta",
        "emoji": "🫐"
      },
      {
        "en": "Elderberry",
        "ru": "бузина",
        "pt": "sabugueiro",
        "ruPron": "Buzina",
        "ptPron": "Sabuzheiro",
        "emoji": "🫐"
      },
      {
        "en": "Cranberry",
        "ru": "клюква",
        "pt": "oxicoco",
        "ruPron": "Klyukva",
        "ptPron": "Oshicoco",
        "emoji": "🔴"
      },
      {
        "en": "Tamarind",
        "ru": "тамаринд",
        "pt": "tamarindo",
        "ruPron": "Tamarind",
        "ptPron": "Tamarindo",
        "emoji": "🟤"
      },
      {
        "en": "Loquat",
        "ru": "мушмула",
        "pt": "nêspera",
        "ruPron": "Mushmula",
        "ptPron": "Nespera",
        "emoji": "🟠"
      },
      {
        "en": "Physalis",
        "ru": "физалис",
        "pt": "physalis",
        "ruPron": "Fizalis",
        "ptPron": "Physalis",
        "emoji": "🟠"
      },
      {
        "en": "Rhubarb",
        "ru": "ревень",
        "pt": "ruibarbo",
        "ruPron": "Reven",
        "ptPron": "Huibarbo",
        "emoji": "🌿"
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
      },
      {
        "en": "Durian",
        "ru": "дуриан",
        "pt": "durian",
        "ruPron": "Durian",
        "ptPron": "Durian",
        "emoji": "🟢"
      },
      {
        "en": "Jackfruit",
        "ru": "джекфрут",
        "pt": "jaca",
        "ruPron": "Dzhekfrut",
        "ptPron": "Zhaca",
        "emoji": "🟢"
      },
      {
        "en": "Mangosteen",
        "ru": "мангустин",
        "pt": "mangostão",
        "ruPron": "Mangustin",
        "ptPron": "Mangostowng",
        "emoji": "🟣"
      },
      {
        "en": "Kumquat",
        "ru": "кумкват",
        "pt": "kumquat",
        "ruPron": "Kumkvat",
        "ptPron": "Kumquat",
        "emoji": "🟠"
      },
      {
        "en": "Longan",
        "ru": "лонган",
        "pt": "longan",
        "ruPron": "Longan",
        "ptPron": "Longan",
        "emoji": "🟤"
      },
      {
        "en": "Cherimoya",
        "ru": "черимойя",
        "pt": "cherimoia",
        "ruPron": "Cherimoyya",
        "ptPron": "Sherimoia",
        "emoji": "🟢"
      },
      {
        "en": "Breadfruit",
        "ru": "хлебное дерево",
        "pt": "fruta-pão",
        "ruPron": "Khlebnoye derevo",
        "ptPron": "Fruta-powng",
        "emoji": "🌳"
      },
      {
        "en": "Sour cherry",
        "ru": "кислая вишня",
        "pt": "ginja",
        "ruPron": "Kislaya vishnya",
        "ptPron": "Zhinzha",
        "emoji": "🍒"
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
      },
      {
        "en": "Ackee",
        "ru": "акки",
        "pt": "ackee",
        "ruPron": "Akki",
        "ptPron": "Ackee",
        "emoji": "🟡"
      },
      {
        "en": "Rambutan",
        "ru": "рамбутан",
        "pt": "rambutan",
        "ruPron": "Rambutan",
        "ptPron": "Hambutan",
        "emoji": "🔴"
      },
      {
        "en": "Salak",
        "ru": "салак",
        "pt": "salak",
        "ruPron": "Salak",
        "ptPron": "Salak",
        "emoji": "🟤"
      },
      {
        "en": "Jabuticaba",
        "ru": "жаботикаба",
        "pt": "jabuticaba",
        "ruPron": "Zhabotikaba",
        "ptPron": "Zhabuticaba",
        "emoji": "🟣"
      },
      {
        "en": "Cupuacu",
        "ru": "купуасу",
        "pt": "cupuaçu",
        "ruPron": "Kupuasu",
        "ptPron": "Cupuasu",
        "emoji": "🟤"
      },
      {
        "en": "Soursop",
        "ru": "гуанабана",
        "pt": "graviola",
        "ruPron": "Guanabana",
        "ptPron": "Graviola",
        "emoji": "🟢"
      },
      {
        "en": "Mamey",
        "ru": "мамей",
        "pt": "mamey",
        "ruPron": "Mamey",
        "ptPron": "Mamey",
        "emoji": "🟠"
      },
      {
        "en": "Buddha's hand",
        "ru": "рука будды",
        "pt": "mão-de-buda",
        "ruPron": "Ruka buddy",
        "ptPron": "Mowng-de-buda",
        "emoji": "🍋"
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
      },
      {
        "en": "Lettuce",
        "ru": "салат-латук",
        "pt": "alface",
        "ruPron": "Salat-latuk",
        "ptPron": "Alface",
        "emoji": "🥬"
      },
      {
        "en": "Mushroom",
        "ru": "гриб",
        "pt": "cogumelo",
        "ruPron": "Grib",
        "ptPron": "Cogumelo",
        "emoji": "🍄"
      },
      {
        "en": "Green beans",
        "ru": "зелёная фасоль",
        "pt": "vagem",
        "ruPron": "Zelyonaya fasol",
        "ptPron": "Vazhem",
        "emoji": "🫛"
      },
      {
        "en": "Peas",
        "ru": "горошек",
        "pt": "ervilha",
        "ruPron": "Goroshek",
        "ptPron": "Ervilya",
        "emoji": "🟢"
      },
      {
        "en": "Sweet potato",
        "ru": "батат",
        "pt": "batata-doce",
        "ruPron": "Batat",
        "ptPron": "Batata-doce",
        "emoji": "🍠"
      },
      {
        "en": "Chili pepper",
        "ru": "острый перец",
        "pt": "pimenta",
        "ruPron": "Ostryy perets",
        "ptPron": "Pimenta",
        "emoji": "🌶️"
      },
      {
        "en": "Ginger",
        "ru": "имбирь",
        "pt": "gengibre",
        "ruPron": "Imbir",
        "ptPron": "Zhenzhibre",
        "emoji": "🫚"
      },
      {
        "en": "Scallion",
        "ru": "зелёный лук",
        "pt": "cebolinha",
        "ruPron": "Zelyonyy luk",
        "ptPron": "Cebolinya",
        "emoji": "🌱"
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
      },
      {
        "en": "Beans",
        "ru": "фасоль",
        "pt": "feijão",
        "ruPron": "Fasol",
        "ptPron": "Feizhowng",
        "emoji": "🫘"
      },
      {
        "en": "Lentils",
        "ru": "чечевица",
        "pt": "lentilha",
        "ruPron": "Chechevitsa",
        "ptPron": "Lentilya",
        "emoji": "🟤"
      },
      {
        "en": "Chickpeas",
        "ru": "нут",
        "pt": "grão-de-bico",
        "ruPron": "Nut",
        "ptPron": "Growng-de-bico",
        "emoji": "🟡"
      },
      {
        "en": "Bamboo shoots",
        "ru": "побеги бамбука",
        "pt": "broto de bambu",
        "ruPron": "Pobegi bambuka",
        "ptPron": "Broto de bambu",
        "emoji": "🎋"
      },
      {
        "en": "Bean sprouts",
        "ru": "ростки фасоли",
        "pt": "broto de feijão",
        "ruPron": "Rostki fasoli",
        "ptPron": "Broto de feizhowng",
        "emoji": "🌱"
      },
      {
        "en": "Water chestnut",
        "ru": "водяной орех",
        "pt": "castanha-de-água",
        "ruPron": "Vodyanoy orekh",
        "ptPron": "Castanya-de-agua",
        "emoji": "🌰"
      },
      {
        "en": "Taro",
        "ru": "таро",
        "pt": "taro",
        "ruPron": "Taro",
        "ptPron": "Taro",
        "emoji": "🍠"
      },
      {
        "en": "Yam",
        "ru": "ямс",
        "pt": "inhame",
        "ruPron": "Yams",
        "ptPron": "Inyame",
        "emoji": "🍠"
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
      },
      {
        "en": "Jicama",
        "ru": "хикама",
        "pt": "jicama",
        "ruPron": "Khikama",
        "ptPron": "Zhicama",
        "emoji": "🥔"
      },
      {
        "en": "Daikon",
        "ru": "дайкон",
        "pt": "rabanete-japonês",
        "ruPron": "Daykon",
        "ptPron": "Habanete-zhapones",
        "emoji": "⚪"
      },
      {
        "en": "Bok choy",
        "ru": "бок-чой",
        "pt": "couve-chinesa",
        "ruPron": "Bok-choy",
        "ptPron": "Couve-shinesa",
        "emoji": "🥬"
      },
      {
        "en": "Endive",
        "ru": "эндивий",
        "pt": "endívia",
        "ruPron": "Endiviy",
        "ptPron": "Endivia",
        "emoji": "🥬"
      },
      {
        "en": "Radicchio",
        "ru": "радиккио",
        "pt": "radicchio",
        "ruPron": "Radikkio",
        "ptPron": "Hadicshio",
        "emoji": "🥬"
      },
      {
        "en": "Sorrel",
        "ru": "щавель",
        "pt": "azedinha",
        "ruPron": "Shchavel",
        "ptPron": "Azedinya",
        "emoji": "🌿"
      },
      {
        "en": "Nettle",
        "ru": "крапива",
        "pt": "urtiga",
        "ruPron": "Krapiva",
        "ptPron": "Urtiga",
        "emoji": "🌿"
      },
      {
        "en": "Purslane",
        "ru": "портулак",
        "pt": "beldroega",
        "ruPron": "Portulak",
        "ptPron": "Beldroega",
        "emoji": "🌿"
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
      },
      {
        "en": "Salsify",
        "ru": "козлобородник",
        "pt": "salsifi",
        "ruPron": "Kozloborodnik",
        "ptPron": "Salsifi",
        "emoji": "🥕"
      },
      {
        "en": "Chayote",
        "ru": "чайот",
        "pt": "chuchu",
        "ruPron": "Chayot",
        "ptPron": "Shushu",
        "emoji": "🟢"
      },
      {
        "en": "Cardoon",
        "ru": "кардон",
        "pt": "cardo",
        "ruPron": "Kardon",
        "ptPron": "Cardo",
        "emoji": "🌿"
      },
      {
        "en": "Galangal",
        "ru": "галангал",
        "pt": "galanga",
        "ruPron": "Galangal",
        "ptPron": "Galanga",
        "emoji": "🫚"
      },
      {
        "en": "Wasabi",
        "ru": "васаби",
        "pt": "wasabi",
        "ruPron": "Vasabi",
        "ptPron": "Wasabi",
        "emoji": "🟢"
      },
      {
        "en": "Yuca",
        "ru": "маниока",
        "pt": "mandioca",
        "ruPron": "Manioka",
        "ptPron": "Mandioca",
        "emoji": "🥔"
      },
      {
        "en": "Celeriac",
        "ru": "сельдерей корневой",
        "pt": "aipo-rábano",
        "ruPron": "Selderey kornevoy",
        "ptPron": "Aipo-rabano",
        "emoji": "🥔"
      },
      {
        "en": "Water spinach",
        "ru": "водяной шпинат",
        "pt": "espinafre-d'água",
        "ruPron": "Vodyanoy shpinat",
        "ptPron": "Espinafre-d'agua",
        "emoji": "🥬"
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
      },
      {
        "en": "Week",
        "ru": "неделя",
        "pt": "semana",
        "ruPron": "Nedelya",
        "ptPron": "Semana",
        "emoji": "📅"
      },
      {
        "en": "Month",
        "ru": "месяц",
        "pt": "mês",
        "ruPron": "Mesyats",
        "ptPron": "Mes",
        "emoji": "📆"
      },
      {
        "en": "Year",
        "ru": "год",
        "pt": "ano",
        "ruPron": "God",
        "ptPron": "Ano",
        "emoji": "🗓️"
      },
      {
        "en": "Date",
        "ru": "дата",
        "pt": "data",
        "ruPron": "Data",
        "ptPron": "Data",
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
      },
      {
        "en": "Morning",
        "ru": "утро",
        "pt": "manhã",
        "ruPron": "Utro",
        "ptPron": "Manyang",
        "emoji": "🌅"
      },
      {
        "en": "Afternoon",
        "ru": "день",
        "pt": "tarde",
        "ruPron": "Den",
        "ptPron": "Tarde",
        "emoji": "🌇"
      },
      {
        "en": "Evening",
        "ru": "вечер",
        "pt": "noite",
        "ruPron": "Vecher",
        "ptPron": "Noite",
        "emoji": "🌆"
      },
      {
        "en": "Midnight",
        "ru": "полночь",
        "pt": "meia-noite",
        "ruPron": "Polnoch",
        "ptPron": "Meia-noite",
        "emoji": "🌃"
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
      },
      {
        "en": "Noon",
        "ru": "полдень",
        "pt": "meio-dia",
        "ruPron": "Polden",
        "ptPron": "Meio-dia",
        "emoji": "🌞"
      },
      {
        "en": "Dawn",
        "ru": "рассвет",
        "pt": "amanhecer",
        "ruPron": "Rassvet",
        "ptPron": "Amanyecer",
        "emoji": "🌄"
      },
      {
        "en": "Dusk",
        "ru": "сумерки",
        "pt": "crepúsculo",
        "ruPron": "Sumerki",
        "ptPron": "Crepusculo",
        "emoji": "🌆"
      },
      {
        "en": "Century",
        "ru": "век",
        "pt": "século",
        "ruPron": "Vek",
        "ptPron": "Seculo",
        "emoji": "🏛️"
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
      },
      {
        "en": "Decade",
        "ru": "десятилетие",
        "pt": "década",
        "ruPron": "Desyatiletiye",
        "ptPron": "Decada",
        "emoji": "🗓️"
      },
      {
        "en": "Millennium",
        "ru": "тысячелетие",
        "pt": "milênio",
        "ruPron": "Tysyacheletiye",
        "ptPron": "Milenio",
        "emoji": "⏳"
      },
      {
        "en": "Leap year",
        "ru": "високосный год",
        "pt": "ano bissexto",
        "ruPron": "Visokosnyy god",
        "ptPron": "Ano bisseshto",
        "emoji": "🗓️"
      },
      {
        "en": "Anniversary",
        "ru": "годовщина",
        "pt": "aniversário",
        "ruPron": "Godovshchina",
        "ptPron": "Aniversario",
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
