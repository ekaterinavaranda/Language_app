// Phrase data for Happy Learning — situational everyday phrases.
// Structure: PHRASES[category] = [{ en, ru, pt, ruPron, ptPron, emoji }, ...]
// ruPron / ptPron are approximate, English-reader-friendly pronunciation guides (not IPA).

const PHRASE_CATEGORY_LABELS = {
  "doctor": "At the Doctor",
  "store": "At the Store",
  "government": "At a Government Office",
  "restaurant": "At a Restaurant",
  "airport": "At the Airport",
  "hotel": "At the Hotel",
  "bank": "At the Bank",
  "pharmacy": "At the Pharmacy"
};

const PHRASE_CATEGORY_ICONS = {
  "doctor": "🏥",
  "store": "🛒",
  "government": "🏛️",
  "restaurant": "🍽️",
  "airport": "✈️",
  "hotel": "🏨",
  "bank": "🏦",
  "pharmacy": "💊"
};

const PHRASES = {
  "doctor": [
    {
      "en": "I feel sick.",
      "ru": "Я плохо себя чувствую.",
      "pt": "Sinto-me mal.",
      "ruPron": "Ya plokho sebya chuvstvuyu.",
      "ptPron": "Sinto-me mal.",
      "emoji": "🤒"
    },
    {
      "en": "Where does it hurt?",
      "ru": "Где у вас болит?",
      "pt": "Onde lhe dói?",
      "ruPron": "Gde u vas bolit?",
      "ptPron": "Onde lye doi?",
      "emoji": "🩹"
    },
    {
      "en": "I have a headache.",
      "ru": "У меня болит голова.",
      "pt": "Tenho dor de cabeça.",
      "ruPron": "U menya bolit golova.",
      "ptPron": "Tenyo dor de cabesa.",
      "emoji": "🤕"
    },
    {
      "en": "I have a fever.",
      "ru": "У меня температура.",
      "pt": "Tenho febre.",
      "ruPron": "U menya temperatura.",
      "ptPron": "Tenyo febre.",
      "emoji": "🌡️"
    },
    {
      "en": "I have a cough.",
      "ru": "У меня кашель.",
      "pt": "Tenho tosse.",
      "ruPron": "U menya kashel.",
      "ptPron": "Tenyo tosse.",
      "emoji": "😷"
    },
    {
      "en": "I feel dizzy.",
      "ru": "У меня кружится голова.",
      "pt": "Sinto-me tonto.",
      "ruPron": "U menya kruzhitsya golova.",
      "ptPron": "Sinto-me tonto.",
      "emoji": "💫"
    },
    {
      "en": "I need a doctor.",
      "ru": "Мне нужен врач.",
      "pt": "Preciso de um médico.",
      "ruPron": "Mne nuzhen vrach.",
      "ptPron": "Preciso de um medico.",
      "emoji": "👨‍⚕️"
    },
    {
      "en": "Call an ambulance!",
      "ru": "Вызовите скорую помощь!",
      "pt": "Chame uma ambulância!",
      "ruPron": "Vyzovite skoruyu pomoshch!",
      "ptPron": "Shame uma ambulancia!",
      "emoji": "🚑"
    },
    {
      "en": "I am allergic to penicillin.",
      "ru": "У меня аллергия на пенициллин.",
      "pt": "Sou alérgico à penicilina.",
      "ruPron": "U menya allergiya na penitsillin.",
      "ptPron": "Sou alerzhico à penicilina.",
      "emoji": "⚠️"
    },
    {
      "en": "How long have you had these symptoms?",
      "ru": "Как долго у вас эти симптомы?",
      "pt": "Há quanto tempo tem estes sintomas?",
      "ruPron": "Kak dolgo u vas eti simptomy?",
      "ptPron": "Ha quanto tempo tem estes sintomas?",
      "emoji": "⏳"
    },
    {
      "en": "Please take a seat.",
      "ru": "Пожалуйста, присядьте.",
      "pt": "Por favor, sente-se.",
      "ruPron": "Pozhaluysta, prisyadte.",
      "ptPron": "Por favor, sente-se.",
      "emoji": "🪑"
    },
    {
      "en": "I need to make an appointment.",
      "ru": "Мне нужно записаться на приём.",
      "pt": "Preciso marcar uma consulta.",
      "ruPron": "Mne nuzhno zapisatsya na priyom.",
      "ptPron": "Preciso marcar uma consulta.",
      "emoji": "📅"
    },
    {
      "en": "Do you have insurance?",
      "ru": "У вас есть страховка?",
      "pt": "Tem seguro de saúde?",
      "ruPron": "U vas yest strakhovka?",
      "ptPron": "Tem seguro de saude?",
      "emoji": "📄"
    },
    {
      "en": "I am pregnant.",
      "ru": "Я беременна.",
      "pt": "Estou grávida.",
      "ruPron": "Ya beremenna.",
      "ptPron": "Estou gravida.",
      "emoji": "🤰"
    },
    {
      "en": "I take this medication regularly.",
      "ru": "Я регулярно принимаю это лекарство.",
      "pt": "Tomo este medicamento regularmente.",
      "ruPron": "Ya regulyarno prinimayu eto lekarstvo.",
      "ptPron": "Tomo este medicamento regularmente.",
      "emoji": "💊"
    },
    {
      "en": "Please prescribe something for the pain.",
      "ru": "Пожалуйста, выпишите что-нибудь от боли.",
      "pt": "Por favor, receite algo para a dor.",
      "ruPron": "Pozhaluysta, vypishite chto-nibud ot boli.",
      "ptPron": "Por favor, receite algo para a dor.",
      "emoji": "📝"
    },
    {
      "en": "How often should I take this?",
      "ru": "Как часто мне это принимать?",
      "pt": "Com que frequência devo tomar isto?",
      "ruPron": "Kak chasto mne eto prinimat?",
      "ptPron": "Com ke frequencia devo tomar isto?",
      "emoji": "⏰"
    },
    {
      "en": "Is it serious?",
      "ru": "Это серьёзно?",
      "pt": "É grave?",
      "ruPron": "Eto seryozno?",
      "ptPron": "E grave?",
      "emoji": "❓"
    },
    {
      "en": "I need an X-ray.",
      "ru": "Мне нужен рентген.",
      "pt": "Preciso de um raio-X.",
      "ruPron": "Mne nuzhen rentgen.",
      "ptPron": "Preciso de um raio-sh.",
      "emoji": "🩻"
    },
    {
      "en": "My blood pressure is high.",
      "ru": "У меня высокое давление.",
      "pt": "Tenho a pressão alta.",
      "ruPron": "U menya vysokoye davleniye.",
      "ptPron": "Tenyo a pressowng alta.",
      "emoji": "❤️"
    },
    {
      "en": "I broke my arm.",
      "ru": "Я сломал руку.",
      "pt": "Parti o braço.",
      "ruPron": "Ya slomal ruku.",
      "ptPron": "Parti o braso.",
      "emoji": "🦴"
    },
    {
      "en": "I have a stomachache.",
      "ru": "У меня болит живот.",
      "pt": "Tenho dor de estômago.",
      "ruPron": "U menya bolit zhivot.",
      "ptPron": "Tenyo dor de estomago.",
      "emoji": "🤢"
    },
    {
      "en": "Take a deep breath.",
      "ru": "Сделайте глубокий вдох.",
      "pt": "Respire fundo.",
      "ruPron": "Sdelayte glubokiy vdokh.",
      "ptPron": "Hespire fundo.",
      "emoji": "🫁"
    },
    {
      "en": "I need a blood test.",
      "ru": "Мне нужен анализ крови.",
      "pt": "Preciso de um exame de sangue.",
      "ruPron": "Mne nuzhen analiz krovi.",
      "ptPron": "Preciso de um eshame de sanzhe.",
      "emoji": "🩸"
    },
    {
      "en": "When will the results be ready?",
      "ru": "Когда будут готовы результаты?",
      "pt": "Quando estarão prontos os resultados?",
      "ruPron": "Kogda budut gotovy rezultaty?",
      "ptPron": "Quando estarowng prontos os resultados?",
      "emoji": "📋"
    },
    {
      "en": "I feel much better now.",
      "ru": "Мне уже намного лучше.",
      "pt": "Sinto-me muito melhor agora.",
      "ruPron": "Mne uzhe namnogo luchshe.",
      "ptPron": "Sinto-me muito melyor agora.",
      "emoji": "🙂"
    },
    {
      "en": "Do I need surgery?",
      "ru": "Мне нужна операция?",
      "pt": "Preciso de cirurgia?",
      "ruPron": "Mne nuzhna operatsiya?",
      "ptPron": "Preciso de cirurzhia?",
      "emoji": "🏥"
    },
    {
      "en": "I have not slept well.",
      "ru": "Я плохо спал.",
      "pt": "Não dormi bem.",
      "ruPron": "Ya plokho spal.",
      "ptPron": "Nowng dormi bem.",
      "emoji": "😴"
    },
    {
      "en": "Get well soon.",
      "ru": "Выздоравливай скорее.",
      "pt": "Melhoras.",
      "ruPron": "Vyzdoravlivay skoreye.",
      "ptPron": "Melyoras.",
      "emoji": "🌟"
    },
    {
      "en": "Thank you, doctor.",
      "ru": "Спасибо, доктор.",
      "pt": "Obrigado, doutor.",
      "ruPron": "Spasibo, doktor.",
      "ptPron": "Obrigado, doutor.",
      "emoji": "🙏"
    }
  ],
  "store": [
    {
      "en": "How much does this cost?",
      "ru": "Сколько это стоит?",
      "pt": "Quanto custa isto?",
      "ruPron": "Skolko eto stoit?",
      "ptPron": "Quanto custa isto?",
      "emoji": "💰"
    },
    {
      "en": "Do you have this in a different size?",
      "ru": "У вас есть это другого размера?",
      "pt": "Tem isto noutro tamanho?",
      "ruPron": "U vas yest eto drugogo razmera?",
      "ptPron": "Tem isto noutro tamanyo?",
      "emoji": "📏"
    },
    {
      "en": "Can I try this on?",
      "ru": "Могу я это примерить?",
      "pt": "Posso experimentar isto?",
      "ruPron": "Mogu ya eto primerit?",
      "ptPron": "Posso eshperimentar isto?",
      "emoji": "👕"
    },
    {
      "en": "Where is the fitting room?",
      "ru": "Где примерочная?",
      "pt": "Onde é o provador?",
      "ruPron": "Gde primerochnaya?",
      "ptPron": "Onde e o provador?",
      "emoji": "🚪"
    },
    {
      "en": "Do you accept credit cards?",
      "ru": "Вы принимаете кредитные карты?",
      "pt": "Aceitam cartão de crédito?",
      "ruPron": "Vy prinimayete kreditnyye karty?",
      "ptPron": "Aceitam cartowng de credito?",
      "emoji": "💳"
    },
    {
      "en": "I am just looking, thank you.",
      "ru": "Я просто смотрю, спасибо.",
      "pt": "Estou só a ver, obrigado.",
      "ruPron": "Ya prosto smotryu, spasibo.",
      "ptPron": "Estou so a ver, obrigado.",
      "emoji": "👀"
    },
    {
      "en": "Do you have a discount?",
      "ru": "У вас есть скидка?",
      "pt": "Têm desconto?",
      "ruPron": "U vas yest skidka?",
      "ptPron": "Tem desconto?",
      "emoji": "🏷️"
    },
    {
      "en": "Where is the checkout?",
      "ru": "Где касса?",
      "pt": "Onde é a caixa?",
      "ruPron": "Gde kassa?",
      "ptPron": "Onde e a caisha?",
      "emoji": "🛒"
    },
    {
      "en": "Can I get a receipt?",
      "ru": "Можно чек?",
      "pt": "Posso ter o recibo?",
      "ruPron": "Mozhno chek?",
      "ptPron": "Posso ter o recibo?",
      "emoji": "🧾"
    },
    {
      "en": "Is this on sale?",
      "ru": "Это со скидкой?",
      "pt": "Isto está em promoção?",
      "ruPron": "Eto so skidkoy?",
      "ptPron": "Isto esta em promosowng?",
      "emoji": "🔖"
    },
    {
      "en": "Do you have this in another color?",
      "ru": "У вас есть это другого цвета?",
      "pt": "Tem isto noutra cor?",
      "ruPron": "U vas yest eto drugogo tsveta?",
      "ptPron": "Tem isto noutra cor?",
      "emoji": "🎨"
    },
    {
      "en": "Can you gift-wrap this?",
      "ru": "Можете упаковать это в подарок?",
      "pt": "Pode embrulhar para presente?",
      "ruPron": "Mozhete upakovat eto v podarok?",
      "ptPron": "Pode embrulyar para presente?",
      "emoji": "🎁"
    },
    {
      "en": "I would like to return this item.",
      "ru": "Я хочу вернуть этот товар.",
      "pt": "Gostaria de devolver este artigo.",
      "ruPron": "Ya khochu vernut etot tovar.",
      "ptPron": "Gostaria de devolver este artigo.",
      "emoji": "↩️"
    },
    {
      "en": "What is your return policy?",
      "ru": "Какие у вас условия возврата?",
      "pt": "Qual é a vossa política de devoluções?",
      "ruPron": "Kakiye u vas usloviya vozvrata?",
      "ptPron": "Qual e a vossa politica de devolusoyngs?",
      "emoji": "📃"
    },
    {
      "en": "Do you have a bigger one?",
      "ru": "У вас есть больше?",
      "pt": "Tem um maior?",
      "ruPron": "U vas yest bolshe?",
      "ptPron": "Tem um maior?",
      "emoji": "📐"
    },
    {
      "en": "I need a bag, please.",
      "ru": "Мне нужен пакет, пожалуйста.",
      "pt": "Preciso de um saco, por favor.",
      "ruPron": "Mne nuzhen paket, pozhaluysta.",
      "ptPron": "Preciso de um saco, por favor.",
      "emoji": "🛍️"
    },
    {
      "en": "Where can I find the shoes section?",
      "ru": "Где отдел обуви?",
      "pt": "Onde fica a secção de sapatos?",
      "ruPron": "Gde otdel obuvi?",
      "ptPron": "Onde fica a secsowng de sapatos?",
      "emoji": "👟"
    },
    {
      "en": "Is this handmade?",
      "ru": "Это ручная работа?",
      "pt": "Isto é feito à mão?",
      "ruPron": "Eto ruchnaya rabota?",
      "ptPron": "Isto e feito à mowng?",
      "emoji": "🧵"
    },
    {
      "en": "Can I pay by card?",
      "ru": "Можно оплатить картой?",
      "pt": "Posso pagar com cartão?",
      "ruPron": "Mozhno oplatit kartoy?",
      "ptPron": "Posso pagar com cartowng?",
      "emoji": "💳"
    },
    {
      "en": "Do you take cash?",
      "ru": "Вы принимаете наличные?",
      "pt": "Aceitam dinheiro?",
      "ruPron": "Vy prinimayete nalichnyye?",
      "ptPron": "Aceitam dinyeiro?",
      "emoji": "💵"
    },
    {
      "en": "It's too expensive.",
      "ru": "Это слишком дорого.",
      "pt": "Está muito caro.",
      "ruPron": "Eto slishkom dorogo.",
      "ptPron": "Esta muito caro.",
      "emoji": "😬"
    },
    {
      "en": "Can you lower the price?",
      "ru": "Можете снизить цену?",
      "pt": "Pode baixar o preço?",
      "ruPron": "Mozhete snizit tsenu?",
      "ptPron": "Pode baishar o preso?",
      "emoji": "📉"
    },
    {
      "en": "I'll take it.",
      "ru": "Я это возьму.",
      "pt": "Eu levo isto.",
      "ruPron": "Ya eto vozmu.",
      "ptPron": "Eu levo isto.",
      "emoji": "✅"
    },
    {
      "en": "Do you deliver?",
      "ru": "У вас есть доставка?",
      "pt": "Fazem entregas?",
      "ruPron": "U vas yest dostavka?",
      "ptPron": "Fazem entregas?",
      "emoji": "🚚"
    },
    {
      "en": "What time do you close?",
      "ru": "Во сколько вы закрываетесь?",
      "pt": "A que horas fecham?",
      "ruPron": "Vo skolko vy zakryvayetes?",
      "ptPron": "A ke horas fesham?",
      "emoji": "🕒"
    },
    {
      "en": "Excuse me, where are the fitting rooms?",
      "ru": "Извините, где примерочные?",
      "pt": "Desculpe, onde ficam os provadores?",
      "ruPron": "Izvinite, gde primerochnyye?",
      "ptPron": "Desculpe, onde ficam os provadores?",
      "emoji": "❓"
    },
    {
      "en": "This is defective.",
      "ru": "Это бракованное.",
      "pt": "Isto está com defeito.",
      "ruPron": "Eto brakovannoye.",
      "ptPron": "Isto esta com defeito.",
      "emoji": "⚠️"
    },
    {
      "en": "Can I exchange this for another size?",
      "ru": "Могу я обменять на другой размер?",
      "pt": "Posso trocar por outro tamanho?",
      "ruPron": "Mogu ya obmenyat na drugoy razmer?",
      "ptPron": "Posso trocar por outro tamanyo?",
      "emoji": "🔄"
    },
    {
      "en": "Do you have a loyalty card?",
      "ru": "У вас есть карта постоянного покупателя?",
      "pt": "Têm cartão de fidelidade?",
      "ruPron": "U vas yest karta postoyannogo pokupatelya?",
      "ptPron": "Tem cartowng de fidelidade?",
      "emoji": "💳"
    },
    {
      "en": "Thank you, have a nice day!",
      "ru": "Спасибо, хорошего дня!",
      "pt": "Obrigado, tenha um bom dia!",
      "ruPron": "Spasibo, khoroshego dnya!",
      "ptPron": "Obrigado, tenya um bom dia!",
      "emoji": "👋"
    }
  ],
  "government": [
    {
      "en": "I need to renew my passport.",
      "ru": "Мне нужно продлить паспорт.",
      "pt": "Preciso renovar o meu passaporte.",
      "ruPron": "Mne nuzhno prodlit pasport.",
      "ptPron": "Preciso renovar o meu passaporte.",
      "emoji": "📘"
    },
    {
      "en": "Where do I submit this application?",
      "ru": "Куда подать это заявление?",
      "pt": "Onde entrego este requerimento?",
      "ruPron": "Kuda podat eto zayavleniye?",
      "ptPron": "Onde entrego este rekerimento?",
      "emoji": "📨"
    },
    {
      "en": "What documents do I need?",
      "ru": "Какие документы мне нужны?",
      "pt": "Que documentos preciso?",
      "ruPron": "Kakiye dokumenty mne nuzhny?",
      "ptPron": "Ke documentos preciso?",
      "emoji": "📄"
    },
    {
      "en": "I would like to register my address.",
      "ru": "Я хочу зарегистрировать свой адрес.",
      "pt": "Gostaria de registar a minha morada.",
      "ruPron": "Ya khochu zaregistrirovat svoy adres.",
      "ptPron": "Gostaria de rezhistar a minya morada.",
      "emoji": "🏠"
    },
    {
      "en": "Is there a fee for this service?",
      "ru": "Есть ли плата за эту услугу?",
      "pt": "Há alguma taxa para este serviço?",
      "ruPron": "Yest li plata za etu uslugu?",
      "ptPron": "Ha alguma tasha para este serviso?",
      "emoji": "💶"
    },
    {
      "en": "How long does this process take?",
      "ru": "Сколько времени занимает эта процедура?",
      "pt": "Quanto tempo demora este processo?",
      "ruPron": "Skolko vremeni zanimayet eta protsedura?",
      "ptPron": "Quanto tempo demora este processo?",
      "emoji": "⏳"
    },
    {
      "en": "I need to speak to a civil servant.",
      "ru": "Мне нужно поговорить с чиновником.",
      "pt": "Preciso falar com um funcionário público.",
      "ruPron": "Mne nuzhno pogovorit s chinovnikom.",
      "ptPron": "Preciso falar com um funcionario publico.",
      "emoji": "🗣️"
    },
    {
      "en": "Where is window number five?",
      "ru": "Где окно номер пять?",
      "pt": "Onde é o balcão número cinco?",
      "ruPron": "Gde okno nomer pyat?",
      "ptPron": "Onde e o balcowng numero cinco?",
      "emoji": "🔢"
    },
    {
      "en": "I lost my identity card.",
      "ru": "Я потерял удостоверение личности.",
      "pt": "Perdi o meu bilhete de identidade.",
      "ruPron": "Ya poteryal udostovereniye lichnosti.",
      "ptPron": "Perdi o meu bilyete de identidade.",
      "emoji": "🪪"
    },
    {
      "en": "I need a copy of this certificate.",
      "ru": "Мне нужна копия этого сертификата.",
      "pt": "Preciso de uma cópia deste certificado.",
      "ruPron": "Mne nuzhna kopiya etogo sertifikata.",
      "ptPron": "Preciso de uma copia deste certificado.",
      "emoji": "📑"
    },
    {
      "en": "Can you stamp this document?",
      "ru": "Можете поставить штамп на этот документ?",
      "pt": "Pode carimbar este documento?",
      "ruPron": "Mozhete postavit shtamp na etot dokument?",
      "ptPron": "Pode carimbar este documento?",
      "emoji": "📮"
    },
    {
      "en": "What is the next available appointment?",
      "ru": "Когда ближайшая свободная запись?",
      "pt": "Qual é a próxima marcação disponível?",
      "ruPron": "Kogda blizhayshaya svobodnaya zapis?",
      "ptPron": "Qual e a proshima marcasowng disponivel?",
      "emoji": "📅"
    },
    {
      "en": "I am here to pay a fine.",
      "ru": "Я пришёл оплатить штраф.",
      "pt": "Vim pagar uma multa.",
      "ruPron": "Ya prishyol oplatit shtraf.",
      "ptPron": "Vim pagar uma multa.",
      "emoji": "💰"
    },
    {
      "en": "Do I need to bring the originals?",
      "ru": "Мне нужно принести оригиналы?",
      "pt": "Preciso trazer os originais?",
      "ruPron": "Mne nuzhno prinesti originaly?",
      "ptPron": "Preciso trazer os orizhinais?",
      "emoji": "📂"
    },
    {
      "en": "Where can I get this form?",
      "ru": "Где можно получить эту форму?",
      "pt": "Onde posso obter este formulário?",
      "ruPron": "Gde mozhno poluchit etu formu?",
      "ptPron": "Onde posso obter este formulario?",
      "emoji": "📋"
    },
    {
      "en": "Please fill out this form.",
      "ru": "Пожалуйста, заполните эту форму.",
      "pt": "Por favor, preencha este formulário.",
      "ruPron": "Pozhaluysta, zapolnite etu formu.",
      "ptPron": "Por favor, preensha este formulario.",
      "emoji": "✍️"
    },
    {
      "en": "I need to register the birth of my child.",
      "ru": "Мне нужно зарегистрировать рождение ребёнка.",
      "pt": "Preciso registar o nascimento do meu filho.",
      "ruPron": "Mne nuzhno zaregistrirovat rozhdeniye rebyonka.",
      "ptPron": "Preciso rezhistar o nascimento do meu filyo.",
      "emoji": "👶"
    },
    {
      "en": "Take a number and wait.",
      "ru": "Возьмите талон и подождите.",
      "pt": "Tire uma senha e aguarde.",
      "ruPron": "Vozmite talon i podozhdite.",
      "ptPron": "Tire uma senya e aguarde.",
      "emoji": "🎫"
    },
    {
      "en": "What is the office's working hours?",
      "ru": "Какие часы работы учреждения?",
      "pt": "Qual é o horário de funcionamento?",
      "ruPron": "Kakiye chasy raboty uchrezhdeniya?",
      "ptPron": "Qual e o horario de funcionamento?",
      "emoji": "🕒"
    },
    {
      "en": "I would like to apply for a visa.",
      "ru": "Я хочу подать заявление на визу.",
      "pt": "Gostaria de solicitar um visto.",
      "ruPron": "Ya khochu podat zayavleniye na vizu.",
      "ptPron": "Gostaria de solicitar um visto.",
      "emoji": "🛂"
    },
    {
      "en": "Is my application ready?",
      "ru": "Моё заявление готово?",
      "pt": "O meu pedido está pronto?",
      "ruPron": "Moyo zayavleniye gotovo?",
      "ptPron": "O meu pedido esta pronto?",
      "emoji": "✅"
    },
    {
      "en": "I need to update my personal information.",
      "ru": "Мне нужно обновить свои личные данные.",
      "pt": "Preciso atualizar os meus dados pessoais.",
      "ruPron": "Mne nuzhno obnovit svoi lichnyye dannyye.",
      "ptPron": "Preciso atualizar os meus dados pessoais.",
      "emoji": "🔄"
    },
    {
      "en": "Where do I sign?",
      "ru": "Где мне подписать?",
      "pt": "Onde assino?",
      "ruPron": "Gde mne podpisat?",
      "ptPron": "Onde assino?",
      "emoji": "✒️"
    },
    {
      "en": "I have a question about my tax return.",
      "ru": "У меня вопрос о налоговой декларации.",
      "pt": "Tenho uma pergunta sobre a minha declaração de impostos.",
      "ruPron": "U menya vopros o nalogovoy deklaratsii.",
      "ptPron": "Tenyo uma pergunta sobre a minya declarasowng de impostos.",
      "emoji": "🧾"
    },
    {
      "en": "Can I get this notarized?",
      "ru": "Могу я это заверить нотариально?",
      "pt": "Posso autenticar isto?",
      "ruPron": "Mogu ya eto zaverit notarialno?",
      "ptPron": "Posso autenticar isto?",
      "emoji": "⚖️"
    },
    {
      "en": "My number is being called.",
      "ru": "Вызывают мой номер.",
      "pt": "Estão a chamar o meu número.",
      "ruPron": "Vyzyvayut moy nomer.",
      "ptPron": "Estowng a shamar o meu numero.",
      "emoji": "🔔"
    },
    {
      "en": "Please wait in line.",
      "ru": "Пожалуйста, ждите в очереди.",
      "pt": "Por favor, aguarde na fila.",
      "ruPron": "Pozhaluysta, zhdite v ocheredi.",
      "ptPron": "Por favor, aguarde na fila.",
      "emoji": "🚶"
    },
    {
      "en": "I need a certificate of residence.",
      "ru": "Мне нужна справка о месте жительства.",
      "pt": "Preciso de um certificado de residência.",
      "ruPron": "Mne nuzhna spravka o meste zhitelstva.",
      "ptPron": "Preciso de um certificado de residencia.",
      "emoji": "🏘️"
    },
    {
      "en": "Whom should I contact for more information?",
      "ru": "К кому обратиться за дополнительной информацией?",
      "pt": "Com quem devo falar para mais informações?",
      "ruPron": "K komu obratitsya za dopolnitelnoy informatsiyey?",
      "ptPron": "Com kem devo falar para mais informasoyngs?",
      "emoji": "☎️"
    },
    {
      "en": "Thank you for your help.",
      "ru": "Спасибо за помощь.",
      "pt": "Obrigado pela sua ajuda.",
      "ruPron": "Spasibo za pomoshch.",
      "ptPron": "Obrigado pela sua azhuda.",
      "emoji": "🙏"
    }
  ],
  "restaurant": [
    {
      "en": "Can I see the menu, please?",
      "ru": "Можно меню, пожалуйста?",
      "pt": "Posso ver o menu, por favor?",
      "ruPron": "Mozhno menyu, pozhaluysta?",
      "ptPron": "Posso ver o menu, por favor?",
      "emoji": "📋"
    },
    {
      "en": "A table for two, please.",
      "ru": "Столик на двоих, пожалуйста.",
      "pt": "Uma mesa para dois, por favor.",
      "ruPron": "Stolik na dvoikh, pozhaluysta.",
      "ptPron": "Uma mesa para dois, por favor.",
      "emoji": "🍽️"
    },
    {
      "en": "What do you recommend?",
      "ru": "Что вы порекомендуете?",
      "pt": "O que recomenda?",
      "ruPron": "Chto vy porekomenduyete?",
      "ptPron": "O ke recomenda?",
      "emoji": "👍"
    },
    {
      "en": "I would like to order.",
      "ru": "Я хотел бы сделать заказ.",
      "pt": "Gostaria de fazer o pedido.",
      "ruPron": "Ya khotel by sdelat zakaz.",
      "ptPron": "Gostaria de fazer o pedido.",
      "emoji": "✍️"
    },
    {
      "en": "Could I have some water, please?",
      "ru": "Можно воды, пожалуйста?",
      "pt": "Posso ter água, por favor?",
      "ruPron": "Mozhno vody, pozhaluysta?",
      "ptPron": "Posso ter agua, por favor?",
      "emoji": "💧"
    },
    {
      "en": "Is this dish spicy?",
      "ru": "Это блюдо острое?",
      "pt": "Este prato é picante?",
      "ruPron": "Eto blyudo ostroye?",
      "ptPron": "Este prato e picante?",
      "emoji": "🌶️"
    },
    {
      "en": "I am allergic to nuts.",
      "ru": "У меня аллергия на орехи.",
      "pt": "Sou alérgico a frutos secos.",
      "ruPron": "U menya allergiya na orekhi.",
      "ptPron": "Sou alerzhico a frutos secos.",
      "emoji": "🥜"
    },
    {
      "en": "I am a vegetarian.",
      "ru": "Я вегетарианец.",
      "pt": "Sou vegetariano.",
      "ruPron": "Ya vegetarianets.",
      "ptPron": "Sou vezhetariano.",
      "emoji": "🥦"
    },
    {
      "en": "Can I get this without onions?",
      "ru": "Можно это без лука?",
      "pt": "Posso ter isto sem cebola?",
      "ruPron": "Mozhno eto bez luka?",
      "ptPron": "Posso ter isto sem cebola?",
      "emoji": "🧅"
    },
    {
      "en": "The bill, please.",
      "ru": "Счёт, пожалуйста.",
      "pt": "A conta, por favor.",
      "ruPron": "Schyot, pozhaluysta.",
      "ptPron": "A conta, por favor.",
      "emoji": "🧾"
    },
    {
      "en": "Is service included?",
      "ru": "Обслуживание включено?",
      "pt": "O serviço está incluído?",
      "ruPron": "Obsluzhivaniye vklyucheno?",
      "ptPron": "O serviso esta incluido?",
      "emoji": "💁"
    },
    {
      "en": "Can we split the bill?",
      "ru": "Можем разделить счёт?",
      "pt": "Podemos dividir a conta?",
      "ruPron": "Mozhem razdelit schyot?",
      "ptPron": "Podemos dividir a conta?",
      "emoji": "➗"
    },
    {
      "en": "This is delicious.",
      "ru": "Это очень вкусно.",
      "pt": "Isto está delicioso.",
      "ruPron": "Eto ochen vkusno.",
      "ptPron": "Isto esta delicioso.",
      "emoji": "😋"
    },
    {
      "en": "Can I have the check, please?",
      "ru": "Можно счёт, пожалуйста?",
      "pt": "Posso ter a conta, por favor?",
      "ruPron": "Mozhno schyot, pozhaluysta?",
      "ptPron": "Posso ter a conta, por favor?",
      "emoji": "🧾"
    },
    {
      "en": "Do you have a vegetarian option?",
      "ru": "У вас есть вегетарианское блюдо?",
      "pt": "Têm alguma opção vegetariana?",
      "ruPron": "U vas yest vegetarianskoye blyudo?",
      "ptPron": "Tem alguma opsowng vezhetariana?",
      "emoji": "🥗"
    },
    {
      "en": "Can I get a coffee to go?",
      "ru": "Можно кофе с собой?",
      "pt": "Posso ter um café para levar?",
      "ruPron": "Mozhno kofe s soboy?",
      "ptPron": "Posso ter um cafe para levar?",
      "emoji": "☕"
    },
    {
      "en": "What is the special today?",
      "ru": "Что сегодня в меню особенного?",
      "pt": "Qual é o prato do dia?",
      "ruPron": "Chto segodnya v menyu osobennogo?",
      "ptPron": "Qual e o prato do dia?",
      "emoji": "⭐"
    },
    {
      "en": "I would like the same as him.",
      "ru": "Я хочу то же, что и он.",
      "pt": "Quero o mesmo que ele.",
      "ruPron": "Ya khochu to zhe, chto i on.",
      "ptPron": "Kero o mesmo ke ele.",
      "emoji": "👉"
    },
    {
      "en": "Excuse me, can we order?",
      "ru": "Извините, можно заказать?",
      "pt": "Desculpe, podemos pedir?",
      "ruPron": "Izvinite, mozhno zakazat?",
      "ptPron": "Desculpe, podemos pedir?",
      "emoji": "🙋"
    },
    {
      "en": "Is this table free?",
      "ru": "Этот столик свободен?",
      "pt": "Esta mesa está livre?",
      "ruPron": "Etot stolik svoboden?",
      "ptPron": "Esta mesa esta livre?",
      "emoji": "🪑"
    },
    {
      "en": "Could you bring more bread, please?",
      "ru": "Принесите ещё хлеба, пожалуйста?",
      "pt": "Pode trazer mais pão, por favor?",
      "ruPron": "Prinesite yeshchyo khleba, pozhaluysta?",
      "ptPron": "Pode trazer mais powng, por favor?",
      "emoji": "🍞"
    },
    {
      "en": "This is not what I ordered.",
      "ru": "Это не то, что я заказывал.",
      "pt": "Isto não é o que eu pedi.",
      "ruPron": "Eto ne to, chto ya zakazyval.",
      "ptPron": "Isto nowng e o ke eu pedi.",
      "emoji": "😕"
    },
    {
      "en": "Can we have the dessert menu?",
      "ru": "Можно меню десертов?",
      "pt": "Podemos ver o menu de sobremesas?",
      "ruPron": "Mozhno menyu desertov?",
      "ptPron": "Podemos ver o menu de sobremesas?",
      "emoji": "🍰"
    },
    {
      "en": "Do you take reservations?",
      "ru": "Вы принимаете бронирования?",
      "pt": "Aceitam reservas?",
      "ruPron": "Vy prinimayete bronirovaniya?",
      "ptPron": "Aceitam reservas?",
      "emoji": "📖"
    },
    {
      "en": "I would like it well done.",
      "ru": "Я хочу хорошо прожаренное.",
      "pt": "Quero bem passado.",
      "ruPron": "Ya khochu khorosho prozharennoye.",
      "ptPron": "Kero bem passado.",
      "emoji": "🥩"
    },
    {
      "en": "Enjoy your meal!",
      "ru": "Приятного аппетита!",
      "pt": "Bom apetite!",
      "ruPron": "Priyatnogo appetita!",
      "ptPron": "Bom apetite!",
      "emoji": "🍴"
    },
    {
      "en": "Can I get a doggy bag?",
      "ru": "Можно упаковать с собой остатки?",
      "pt": "Posso levar as sobras?",
      "ruPron": "Mozhno upakovat s soboy ostatki?",
      "ptPron": "Posso levar as sobras?",
      "emoji": "🥡"
    },
    {
      "en": "Where is the restroom?",
      "ru": "Где туалет?",
      "pt": "Onde é a casa de banho?",
      "ruPron": "Gde tualet?",
      "ptPron": "Onde e a casa de banyo?",
      "emoji": "🚻"
    },
    {
      "en": "This was a wonderful dinner.",
      "ru": "Это был прекрасный ужин.",
      "pt": "Foi um jantar maravilhoso.",
      "ruPron": "Eto byl prekrasnyy uzhin.",
      "ptPron": "Foi um zhantar maravilyoso.",
      "emoji": "🌟"
    },
    {
      "en": "Can I make a reservation for tonight?",
      "ru": "Могу я забронировать столик на сегодня?",
      "pt": "Posso fazer uma reserva para hoje à noite?",
      "ruPron": "Mogu ya zabronirovat stolik na segodnya?",
      "ptPron": "Posso fazer uma reserva para hozhe à noite?",
      "emoji": "📅"
    }
  ],
  "airport": [
    {
      "en": "Where is the check-in counter?",
      "ru": "Где стойка регистрации?",
      "pt": "Onde é o balcão de check-in?",
      "ruPron": "Gde stoyka registratsii?",
      "ptPron": "Onde e o balcowng de sheck-in?",
      "emoji": "🛄"
    },
    {
      "en": "I would like to check in for my flight.",
      "ru": "Я хочу зарегистрироваться на рейс.",
      "pt": "Gostaria de fazer o check-in do meu voo.",
      "ruPron": "Ya khochu zaregistrirovatsya na reys.",
      "ptPron": "Gostaria de fazer o sheck-in do meu voo.",
      "emoji": "✈️"
    },
    {
      "en": "Here is my passport and ticket.",
      "ru": "Вот мой паспорт и билет.",
      "pt": "Aqui está o meu passaporte e bilhete.",
      "ruPron": "Vot moy pasport i bilet.",
      "ptPron": "Aki esta o meu passaporte e bilyete.",
      "emoji": "🎫"
    },
    {
      "en": "Where is the gate?",
      "ru": "Где выход на посадку?",
      "pt": "Onde é o portão de embarque?",
      "ruPron": "Gde vykhod na posadku?",
      "ptPron": "Onde e o portowng de embarke?",
      "emoji": "🚪"
    },
    {
      "en": "Is the flight on time?",
      "ru": "Рейс по расписанию?",
      "pt": "O voo está no horário?",
      "ruPron": "Reys po raspisaniyu?",
      "ptPron": "O voo esta no horario?",
      "emoji": "🕒"
    },
    {
      "en": "My flight is delayed.",
      "ru": "Мой рейс задерживается.",
      "pt": "O meu voo está atrasado.",
      "ruPron": "Moy reys zaderzhivayetsya.",
      "ptPron": "O meu voo esta atrasado.",
      "emoji": "⏱️"
    },
    {
      "en": "Where can I collect my luggage?",
      "ru": "Где можно получить багаж?",
      "pt": "Onde posso recolher a minha bagagem?",
      "ruPron": "Gde mozhno poluchit bagazh?",
      "ptPron": "Onde posso recolyer a minya bagazhem?",
      "emoji": "🧳"
    },
    {
      "en": "I lost my luggage.",
      "ru": "Я потерял багаж.",
      "pt": "Perdi a minha bagagem.",
      "ruPron": "Ya poteryal bagazh.",
      "ptPron": "Perdi a minya bagazhem.",
      "emoji": "😟"
    },
    {
      "en": "Where is customs?",
      "ru": "Где таможня?",
      "pt": "Onde é a alfândega?",
      "ruPron": "Gde tamozhnya?",
      "ptPron": "Onde e a alfandega?",
      "emoji": "🛃"
    },
    {
      "en": "Do I need to declare anything?",
      "ru": "Мне нужно что-то декларировать?",
      "pt": "Preciso declarar alguma coisa?",
      "ruPron": "Mne nuzhno chto-to deklarirovat?",
      "ptPron": "Preciso declarar alguma coisa?",
      "emoji": "📋"
    },
    {
      "en": "Where is passport control?",
      "ru": "Где паспортный контроль?",
      "pt": "Onde é o controlo de passaportes?",
      "ruPron": "Gde pasportnyy kontrol?",
      "ptPron": "Onde e o controlo de passaportes?",
      "emoji": "🛂"
    },
    {
      "en": "What is the baggage allowance?",
      "ru": "Какая норма провоза багажа?",
      "pt": "Qual é o limite de bagagem?",
      "ruPron": "Kakaya norma provoza bagazha?",
      "ptPron": "Qual e o limite de bagazhem?",
      "emoji": "⚖️"
    },
    {
      "en": "This is my carry-on luggage.",
      "ru": "Это моя ручная кладь.",
      "pt": "Esta é a minha bagagem de mão.",
      "ruPron": "Eto moya ruchnaya klad.",
      "ptPron": "Esta e a minya bagazhem de mowng.",
      "emoji": "🎒"
    },
    {
      "en": "Where can I exchange currency?",
      "ru": "Где можно обменять валюту?",
      "pt": "Onde posso trocar moeda?",
      "ruPron": "Gde mozhno obmenyat valyutu?",
      "ptPron": "Onde posso trocar moeda?",
      "emoji": "💱"
    },
    {
      "en": "Is there a bus to the city center?",
      "ru": "Есть автобус до центра города?",
      "pt": "Há autocarro para o centro da cidade?",
      "ruPron": "Yest avtobus do tsentra goroda?",
      "ptPron": "Ha autocaho para o centro da cidade?",
      "emoji": "🚌"
    },
    {
      "en": "I missed my connecting flight.",
      "ru": "Я пропустил стыковочный рейс.",
      "pt": "Perdi o meu voo de ligação.",
      "ruPron": "Ya propustil stykovochnyy reys.",
      "ptPron": "Perdi o meu voo de ligasowng.",
      "emoji": "😰"
    },
    {
      "en": "Where is the boarding area?",
      "ru": "Где зона посадки?",
      "pt": "Onde é a área de embarque?",
      "ruPron": "Gde zona posadki?",
      "ptPron": "Onde e a area de embarke?",
      "emoji": "🛫"
    },
    {
      "en": "Can I get a window seat?",
      "ru": "Можно место у окна?",
      "pt": "Posso ter um lugar à janela?",
      "ruPron": "Mozhno mesto u okna?",
      "ptPron": "Posso ter um lugar à zhanela?",
      "emoji": "🪟"
    },
    {
      "en": "What time does boarding begin?",
      "ru": "Во сколько начинается посадка?",
      "pt": "A que horas começa o embarque?",
      "ruPron": "Vo skolko nachinayetsya posadka?",
      "ptPron": "A ke horas comesa o embarke?",
      "emoji": "⏰"
    },
    {
      "en": "Please have your boarding pass ready.",
      "ru": "Приготовьте посадочный талон.",
      "pt": "Por favor, tenha o cartão de embarque pronto.",
      "ruPron": "Prigotovte posadochnyy talon.",
      "ptPron": "Por favor, tenya o cartowng de embarke pronto.",
      "emoji": "🎫"
    },
    {
      "en": "Where is the information desk?",
      "ru": "Где справочная?",
      "pt": "Onde é o balcão de informações?",
      "ruPron": "Gde spravochnaya?",
      "ptPron": "Onde e o balcowng de informasoyngs?",
      "emoji": "ℹ️"
    },
    {
      "en": "I need to change my flight.",
      "ru": "Мне нужно изменить рейс.",
      "pt": "Preciso mudar o meu voo.",
      "ruPron": "Mne nuzhno izmenit reys.",
      "ptPron": "Preciso mudar o meu voo.",
      "emoji": "🔄"
    },
    {
      "en": "Is there free Wi-Fi here?",
      "ru": "Здесь есть бесплатный Wi-Fi?",
      "pt": "Há Wi-Fi grátis aqui?",
      "ruPron": "Zdes yest besplatnyy Wi-Fi?",
      "ptPron": "Ha wi-fi gratis aki?",
      "emoji": "📶"
    },
    {
      "en": "Where is the nearest restroom?",
      "ru": "Где ближайший туалет?",
      "pt": "Onde é a casa de banho mais próxima?",
      "ruPron": "Gde blizhayshiy tualet?",
      "ptPron": "Onde e a casa de banyo mais proshima?",
      "emoji": "🚻"
    },
    {
      "en": "My flight was cancelled.",
      "ru": "Мой рейс отменили.",
      "pt": "O meu voo foi cancelado.",
      "ruPron": "Moy reys otmenili.",
      "ptPron": "O meu voo foi cancelado.",
      "emoji": "❌"
    },
    {
      "en": "Where do I pick up a luggage cart?",
      "ru": "Где взять тележку для багажа?",
      "pt": "Onde apanho um carrinho de bagagem?",
      "ruPron": "Gde vzyat telezhku dlya bagazha?",
      "ptPron": "Onde apanyo um cahinyo de bagazhem?",
      "emoji": "🛒"
    },
    {
      "en": "Please remove your shoes for security.",
      "ru": "Пожалуйста, снимите обувь для досмотра.",
      "pt": "Por favor, retire os sapatos para a segurança.",
      "ruPron": "Pozhaluysta, snimite obuv dlya dosmotra.",
      "ptPron": "Por favor, retire os sapatos para a seguransa.",
      "emoji": "👞"
    },
    {
      "en": "Have a safe flight!",
      "ru": "Счастливого полёта!",
      "pt": "Boa viagem!",
      "ruPron": "Schastlivogo polyota!",
      "ptPron": "Boa viazhem!",
      "emoji": "🛫"
    },
    {
      "en": "Where can I find a taxi?",
      "ru": "Где можно найти такси?",
      "pt": "Onde posso encontrar um táxi?",
      "ruPron": "Gde mozhno nayti taksi?",
      "ptPron": "Onde posso encontrar um tashi?",
      "emoji": "🚕"
    },
    {
      "en": "Welcome, may I see your ticket?",
      "ru": "Добро пожаловать, могу я увидеть ваш билет?",
      "pt": "Bem-vindo, posso ver o seu bilhete?",
      "ruPron": "Dobro pozhalovat, mogu ya uvidet vash bilet?",
      "ptPron": "Bem-vindo, posso ver o seu bilyete?",
      "emoji": "👋"
    }
  ],
  "hotel": [
    {
      "en": "I have a reservation.",
      "ru": "У меня забронирован номер.",
      "pt": "Tenho uma reserva.",
      "ruPron": "U menya zabronirovan nomer.",
      "ptPron": "Tenyo uma reserva.",
      "emoji": "🔑"
    },
    {
      "en": "I would like to check in.",
      "ru": "Я хочу заселиться.",
      "pt": "Gostaria de fazer o check-in.",
      "ruPron": "Ya khochu zaselitsya.",
      "ptPron": "Gostaria de fazer o sheck-in.",
      "emoji": "🏨"
    },
    {
      "en": "What time is check-out?",
      "ru": "Во сколько выселение?",
      "pt": "A que horas é o check-out?",
      "ruPron": "Vo skolko vyseleniye?",
      "ptPron": "A ke horas e o sheck-out?",
      "emoji": "🕒"
    },
    {
      "en": "Do you have any rooms available?",
      "ru": "У вас есть свободные номера?",
      "pt": "Têm quartos disponíveis?",
      "ruPron": "U vas yest svobodnyye nomera?",
      "ptPron": "Tem quartos disponiveis?",
      "emoji": "🛏️"
    },
    {
      "en": "How much is a room per night?",
      "ru": "Сколько стоит номер за ночь?",
      "pt": "Quanto custa um quarto por noite?",
      "ruPron": "Skolko stoit nomer za noch?",
      "ptPron": "Quanto custa um quarto por noite?",
      "emoji": "💰"
    },
    {
      "en": "Is breakfast included?",
      "ru": "Завтрак включён?",
      "pt": "O pequeno-almoço está incluído?",
      "ruPron": "Zavtrak vklyuchyon?",
      "ptPron": "O pekeno-almoso esta incluido?",
      "emoji": "🍳"
    },
    {
      "en": "Can I have a wake-up call?",
      "ru": "Можно разбудить меня по звонку?",
      "pt": "Posso ter uma chamada para despertar?",
      "ruPron": "Mozhno razbudit menya po zvonku?",
      "ptPron": "Posso ter uma shamada para despertar?",
      "emoji": "⏰"
    },
    {
      "en": "The Wi-Fi password, please?",
      "ru": "Пароль от Wi-Fi, пожалуйста?",
      "pt": "A senha do Wi-Fi, por favor?",
      "ruPron": "Parol ot Wi-Fi, pozhaluysta?",
      "ptPron": "A senya do wi-fi, por favor?",
      "emoji": "📶"
    },
    {
      "en": "Could I get an extra towel?",
      "ru": "Можно ещё одно полотенце?",
      "pt": "Posso ter mais uma toalha?",
      "ruPron": "Mozhno yeshchyo odno polotentse?",
      "ptPron": "Posso ter mais uma toalya?",
      "emoji": "🧻"
    },
    {
      "en": "My room key doesn't work.",
      "ru": "Мой ключ от номера не работает.",
      "pt": "A minha chave não funciona.",
      "ruPron": "Moy klyuch ot nomera ne rabotayet.",
      "ptPron": "A minya shave nowng funciona.",
      "emoji": "🔑"
    },
    {
      "en": "Is there room service?",
      "ru": "Есть обслуживание номеров?",
      "pt": "Há serviço de quarto?",
      "ruPron": "Yest obsluzhivaniye nomerov?",
      "ptPron": "Ha serviso de quarto?",
      "emoji": "🛎️"
    },
    {
      "en": "What time does the pool open?",
      "ru": "Во сколько открывается бассейн?",
      "pt": "A que horas abre a piscina?",
      "ruPron": "Vo skolko otkryvayetsya basseyn?",
      "ptPron": "A ke horas abre a piscina?",
      "emoji": "🏊"
    },
    {
      "en": "Can you recommend a good restaurant nearby?",
      "ru": "Можете порекомендовать хороший ресторан рядом?",
      "pt": "Pode recomendar um bom restaurante perto?",
      "ruPron": "Mozhete porekomendovat khoroshiy restoran ryadom?",
      "ptPron": "Pode recomendar um bom restaurante perto?",
      "emoji": "🍽️"
    },
    {
      "en": "I would like a room with a sea view.",
      "ru": "Я хочу номер с видом на море.",
      "pt": "Gostaria de um quarto com vista para o mar.",
      "ruPron": "Ya khochu nomer s vidom na more.",
      "ptPron": "Gostaria de um quarto com vista para o mar.",
      "emoji": "🌊"
    },
    {
      "en": "Could you send someone to fix the air conditioning?",
      "ru": "Пришлите кого-нибудь починить кондиционер?",
      "pt": "Pode enviar alguém para arranjar o ar condicionado?",
      "ruPron": "Prishlite kogo-nibud pochinit konditsioner?",
      "ptPron": "Pode enviar alguem para ahanzhar o ar condicionado?",
      "emoji": "❄️"
    },
    {
      "en": "Is there parking available?",
      "ru": "Есть парковка?",
      "pt": "Há estacionamento disponível?",
      "ruPron": "Yest parkovka?",
      "ptPron": "Ha estacionamento disponivel?",
      "emoji": "🅿️"
    },
    {
      "en": "I need to extend my stay.",
      "ru": "Мне нужно продлить проживание.",
      "pt": "Preciso prolongar a minha estadia.",
      "ruPron": "Mne nuzhno prodlit prozhivaniye.",
      "ptPron": "Preciso prolongar a minya estadia.",
      "emoji": "📅"
    },
    {
      "en": "Can I check out late?",
      "ru": "Можно выселиться позже?",
      "pt": "Posso fazer o check-out mais tarde?",
      "ruPron": "Mozhno vyselitsya pozzhe?",
      "ptPron": "Posso fazer o sheck-out mais tarde?",
      "emoji": "🕓"
    },
    {
      "en": "Is there a gym in the hotel?",
      "ru": "В отеле есть спортзал?",
      "pt": "Há ginásio no hotel?",
      "ruPron": "V otele yest sportzal?",
      "ptPron": "Ha zhinasio no hotel?",
      "emoji": "🏋️"
    },
    {
      "en": "Please clean my room.",
      "ru": "Пожалуйста, уберите мой номер.",
      "pt": "Por favor, limpe o meu quarto.",
      "ruPron": "Pozhaluysta, uberite moy nomer.",
      "ptPron": "Por favor, limpe o meu quarto.",
      "emoji": "🧹"
    },
    {
      "en": "Do not disturb, please.",
      "ru": "Не беспокоить, пожалуйста.",
      "pt": "Não incomodar, por favor.",
      "ruPron": "Ne bespokoit, pozhaluysta.",
      "ptPron": "Nowng incomodar, por favor.",
      "emoji": "🚫"
    },
    {
      "en": "Can I leave my luggage here after check-out?",
      "ru": "Можно оставить багаж здесь после выселения?",
      "pt": "Posso deixar a minha bagagem aqui depois do check-out?",
      "ruPron": "Mozhno ostavit bagazh zdes posle vyseleniya?",
      "ptPron": "Posso deishar a minya bagazhem aki depois do sheck-out?",
      "emoji": "🧳"
    },
    {
      "en": "Where is the elevator?",
      "ru": "Где лифт?",
      "pt": "Onde é o elevador?",
      "ruPron": "Gde lift?",
      "ptPron": "Onde e o elevador?",
      "emoji": "🛗"
    },
    {
      "en": "Is there a shuttle to the airport?",
      "ru": "Есть трансфер до аэропорта?",
      "pt": "Há transporte para o aeroporto?",
      "ruPron": "Yest transfer do aeroporta?",
      "ptPron": "Ha transporte para o aeroporto?",
      "emoji": "🚐"
    },
    {
      "en": "The room is too cold.",
      "ru": "В номере слишком холодно.",
      "pt": "O quarto está muito frio.",
      "ruPron": "V nomere slishkom kholodno.",
      "ptPron": "O quarto esta muito frio.",
      "emoji": "🥶"
    },
    {
      "en": "Can I get a late check-out?",
      "ru": "Можно поздний выезд?",
      "pt": "Posso ter um check-out tardio?",
      "ruPron": "Mozhno pozdniy vyyezd?",
      "ptPron": "Posso ter um sheck-out tardio?",
      "emoji": "🕔"
    },
    {
      "en": "Where can I exchange money nearby?",
      "ru": "Где рядом можно обменять деньги?",
      "pt": "Onde posso trocar dinheiro por perto?",
      "ruPron": "Gde ryadom mozhno obmenyat dengi?",
      "ptPron": "Onde posso trocar dinyeiro por perto?",
      "emoji": "💱"
    },
    {
      "en": "Thank you for staying with us.",
      "ru": "Спасибо, что остановились у нас.",
      "pt": "Obrigado por ficar connosco.",
      "ruPron": "Spasibo, chto ostanovilis u nas.",
      "ptPron": "Obrigado por ficar connosco.",
      "emoji": "🙏"
    },
    {
      "en": "Could I get a receipt for my stay?",
      "ru": "Можно чек за проживание?",
      "pt": "Posso ter um recibo da minha estadia?",
      "ruPron": "Mozhno chek za prozhivaniye?",
      "ptPron": "Posso ter um recibo da minya estadia?",
      "emoji": "🧾"
    },
    {
      "en": "Enjoy your stay!",
      "ru": "Приятного пребывания!",
      "pt": "Aproveite a sua estadia!",
      "ruPron": "Priyatnogo prebyvaniya!",
      "ptPron": "Aproveite a sua estadia!",
      "emoji": "🌟"
    }
  ],
  "bank": [
    {
      "en": "I would like to open an account.",
      "ru": "Я хотел бы открыть счёт.",
      "pt": "Gostaria de abrir uma conta.",
      "ruPron": "Ya khotel by otkryt schyot.",
      "ptPron": "Gostaria de abrir uma conta.",
      "emoji": "🏦"
    },
    {
      "en": "I would like to withdraw some money.",
      "ru": "Я хочу снять деньги.",
      "pt": "Gostaria de levantar dinheiro.",
      "ruPron": "Ya khochu snyat dengi.",
      "ptPron": "Gostaria de levantar dinyeiro.",
      "emoji": "💵"
    },
    {
      "en": "I would like to make a deposit.",
      "ru": "Я хочу внести деньги.",
      "pt": "Gostaria de fazer um depósito.",
      "ruPron": "Ya khochu vnesti dengi.",
      "ptPron": "Gostaria de fazer um deposito.",
      "emoji": "💰"
    },
    {
      "en": "What is my account balance?",
      "ru": "Какой у меня остаток на счёте?",
      "pt": "Qual é o saldo da minha conta?",
      "ruPron": "Kakoy u menya ostatok na schyote?",
      "ptPron": "Qual e o saldo da minya conta?",
      "emoji": "📊"
    },
    {
      "en": "I need to transfer money.",
      "ru": "Мне нужно перевести деньги.",
      "pt": "Preciso transferir dinheiro.",
      "ruPron": "Mne nuzhno perevesti dengi.",
      "ptPron": "Preciso transferir dinyeiro.",
      "emoji": "🔁"
    },
    {
      "en": "Where is the nearest ATM?",
      "ru": "Где ближайший банкомат?",
      "pt": "Onde é o caixa eletrônico mais próximo?",
      "ruPron": "Gde blizhayshiy bankomat?",
      "ptPron": "Onde e o caisha eletronico mais proshimo?",
      "emoji": "🏧"
    },
    {
      "en": "My card was swallowed by the machine.",
      "ru": "Банкомат забрал мою карту.",
      "pt": "O caixa eletrônico engoliu o meu cartão.",
      "ruPron": "Bankomat zabral moyu kartu.",
      "ptPron": "O caisha eletronico engoliu o meu cartowng.",
      "emoji": "😳"
    },
    {
      "en": "I lost my debit card.",
      "ru": "Я потерял дебетовую карту.",
      "pt": "Perdi o meu cartão de débito.",
      "ruPron": "Ya poteryal debetovuyu kartu.",
      "ptPron": "Perdi o meu cartowng de debito.",
      "emoji": "💳"
    },
    {
      "en": "I would like to apply for a loan.",
      "ru": "Я хочу подать заявку на кредит.",
      "pt": "Gostaria de solicitar um empréstimo.",
      "ruPron": "Ya khochu podat zayavku na kredit.",
      "ptPron": "Gostaria de solicitar um emprestimo.",
      "emoji": "📄"
    },
    {
      "en": "What is the exchange rate today?",
      "ru": "Какой сегодня курс обмена?",
      "pt": "Qual é a taxa de câmbio hoje?",
      "ruPron": "Kakoy segodnya kurs obmena?",
      "ptPron": "Qual e a tasha de cambio hozhe?",
      "emoji": "💱"
    },
    {
      "en": "I need to exchange currency.",
      "ru": "Мне нужно обменять валюту.",
      "pt": "Preciso trocar moeda.",
      "ruPron": "Mne nuzhno obmenyat valyutu.",
      "ptPron": "Preciso trocar moeda.",
      "emoji": "💶"
    },
    {
      "en": "Can I get a bank statement?",
      "ru": "Можно выписку по счёту?",
      "pt": "Posso ter um extrato bancário?",
      "ruPron": "Mozhno vypisku po schyotu?",
      "ptPron": "Posso ter um eshtrato bancario?",
      "emoji": "🧾"
    },
    {
      "en": "What documents do I need to open an account?",
      "ru": "Какие документы нужны для открытия счёта?",
      "pt": "Que documentos preciso para abrir uma conta?",
      "ruPron": "Kakiye dokumenty nuzhny dlya otkrytiya schyota?",
      "ptPron": "Ke documentos preciso para abrir uma conta?",
      "emoji": "📑"
    },
    {
      "en": "Is there a fee for this transaction?",
      "ru": "Есть комиссия за эту операцию?",
      "pt": "Há alguma taxa para esta transação?",
      "ruPron": "Yest komissiya za etu operatsiyu?",
      "ptPron": "Ha alguma tasha para esta transasowng?",
      "emoji": "❓"
    },
    {
      "en": "I forgot my PIN code.",
      "ru": "Я забыл свой пин-код.",
      "pt": "Esqueci o meu código PIN.",
      "ruPron": "Ya zabyl svoy pin-kod.",
      "ptPron": "Eskeci o meu codigo pin.",
      "emoji": "🔢"
    },
    {
      "en": "I would like to close my account.",
      "ru": "Я хочу закрыть счёт.",
      "pt": "Gostaria de encerrar a minha conta.",
      "ruPron": "Ya khochu zakryt schyot.",
      "ptPron": "Gostaria de encehar a minya conta.",
      "emoji": "🔒"
    },
    {
      "en": "Can I set up online banking?",
      "ru": "Можно подключить онлайн-банкинг?",
      "pt": "Posso configurar o banco online?",
      "ruPron": "Mozhno podklyuchit onlayn-banking?",
      "ptPron": "Posso configurar o banco online?",
      "emoji": "💻"
    },
    {
      "en": "My card was declined.",
      "ru": "Мою карту отклонили.",
      "pt": "O meu cartão foi recusado.",
      "ruPron": "Moyu kartu otklonili.",
      "ptPron": "O meu cartowng foi recusado.",
      "emoji": "❌"
    },
    {
      "en": "I need a new checkbook.",
      "ru": "Мне нужна новая чековая книжка.",
      "pt": "Preciso de um novo livro de cheques.",
      "ruPron": "Mne nuzhna novaya chekovaya knizhka.",
      "ptPron": "Preciso de um novo livro de shekes.",
      "emoji": "📓"
    },
    {
      "en": "What are your interest rates?",
      "ru": "Какие у вас процентные ставки?",
      "pt": "Quais são as vossas taxas de juro?",
      "ruPron": "Kakiye u vas protsentnyye stavki?",
      "ptPron": "Quais sowng as vossas tashas de zhuro?",
      "emoji": "📈"
    },
    {
      "en": "I would like to report a lost card.",
      "ru": "Я хочу сообщить о потере карты.",
      "pt": "Gostaria de comunicar a perda de um cartão.",
      "ruPron": "Ya khochu soobshchit o potere karty.",
      "ptPron": "Gostaria de comunicar a perda de um cartowng.",
      "emoji": "🚨"
    },
    {
      "en": "Can you block my card, please?",
      "ru": "Заблокируйте мою карту, пожалуйста?",
      "pt": "Pode bloquear o meu cartão, por favor?",
      "ruPron": "Zablokiruyte moyu kartu, pozhaluysta?",
      "ptPron": "Pode blokear o meu cartowng, por favor?",
      "emoji": "🔒"
    },
    {
      "en": "I need to update my contact information.",
      "ru": "Мне нужно обновить контактные данные.",
      "pt": "Preciso atualizar os meus dados de contacto.",
      "ruPron": "Mne nuzhno obnovit kontaktnyye dannyye.",
      "ptPron": "Preciso atualizar os meus dados de contacto.",
      "emoji": "📇"
    },
    {
      "en": "How long does a transfer take?",
      "ru": "Сколько времени занимает перевод?",
      "pt": "Quanto tempo demora uma transferência?",
      "ruPron": "Skolko vremeni zanimayet perevod?",
      "ptPron": "Quanto tempo demora uma transferencia?",
      "emoji": "⏳"
    },
    {
      "en": "I would like to speak with a financial advisor.",
      "ru": "Я хочу поговорить с финансовым консультантом.",
      "pt": "Gostaria de falar com um consultor financeiro.",
      "ruPron": "Ya khochu pogovorit s finansovym konsultantom.",
      "ptPron": "Gostaria de falar com um consultor financeiro.",
      "emoji": "🗣️"
    },
    {
      "en": "Please sign here.",
      "ru": "Пожалуйста, подпишите здесь.",
      "pt": "Por favor, assine aqui.",
      "ruPron": "Pozhaluysta, podpishite zdes.",
      "ptPron": "Por favor, assine aki.",
      "emoji": "✍️"
    },
    {
      "en": "Do you offer savings accounts?",
      "ru": "У вас есть сберегательные счета?",
      "pt": "Oferecem contas poupança?",
      "ruPron": "U vas yest sberegatelnyye scheta?",
      "ptPron": "Oferecem contas poupansa?",
      "emoji": "🐖"
    },
    {
      "en": "I need a copy of my transaction history.",
      "ru": "Мне нужна копия истории операций.",
      "pt": "Preciso de uma cópia do histórico de transações.",
      "ruPron": "Mne nuzhna kopiya istorii operatsiy.",
      "ptPron": "Preciso de uma copia do historico de transasoyngs.",
      "emoji": "📜"
    },
    {
      "en": "Is this branch open on weekends?",
      "ru": "Это отделение работает по выходным?",
      "pt": "Esta agência está aberta aos fins de semana?",
      "ruPron": "Eto otdeleniye rabotayet po vykhodnym?",
      "ptPron": "Esta agencia esta aberta aos fins de semana?",
      "emoji": "🗓️"
    },
    {
      "en": "Thank you for banking with us.",
      "ru": "Спасибо, что выбираете наш банк.",
      "pt": "Obrigado por escolher o nosso banco.",
      "ruPron": "Spasibo, chto vybirayete nash bank.",
      "ptPron": "Obrigado por escolyer o nosso banco.",
      "emoji": "🙏"
    }
  ],
  "pharmacy": [
    {
      "en": "Do you have anything for a headache?",
      "ru": "У вас есть что-нибудь от головной боли?",
      "pt": "Tem alguma coisa para dor de cabeça?",
      "ruPron": "U vas yest chto-nibud ot golovnoy boli?",
      "ptPron": "Tem alguma coisa para dor de cabesa?",
      "emoji": "💊"
    },
    {
      "en": "I need this medicine, please.",
      "ru": "Мне нужно это лекарство, пожалуйста.",
      "pt": "Preciso deste medicamento, por favor.",
      "ruPron": "Mne nuzhno eto lekarstvo, pozhaluysta.",
      "ptPron": "Preciso deste medicamento, por favor.",
      "emoji": "💉"
    },
    {
      "en": "Do I need a prescription for this?",
      "ru": "Мне нужен рецепт на это?",
      "pt": "Preciso de receita para isto?",
      "ruPron": "Mne nuzhen retsept na eto?",
      "ptPron": "Preciso de receita para isto?",
      "emoji": "📝"
    },
    {
      "en": "Here is my prescription.",
      "ru": "Вот мой рецепт.",
      "pt": "Aqui está a minha receita.",
      "ruPron": "Vot moy retsept.",
      "ptPron": "Aki esta a minya receita.",
      "emoji": "📄"
    },
    {
      "en": "What do you recommend for a cold?",
      "ru": "Что вы порекомендуете от простуды?",
      "pt": "O que recomenda para uma constipação?",
      "ruPron": "Chto vy porekomenduyete ot prostudy?",
      "ptPron": "O ke recomenda para uma constipasowng?",
      "emoji": "🤧"
    },
    {
      "en": "How many times a day should I take this?",
      "ru": "Сколько раз в день это принимать?",
      "pt": "Quantas vezes por dia devo tomar isto?",
      "ruPron": "Skolko raz v den eto prinimat?",
      "ptPron": "Quantas vezes por dia devo tomar isto?",
      "emoji": "🔢"
    },
    {
      "en": "Are there any side effects?",
      "ru": "Есть побочные эффекты?",
      "pt": "Há efeitos secundários?",
      "ruPron": "Yest pobochnyye effekty?",
      "ptPron": "Ha efeitos secundarios?",
      "emoji": "⚠️"
    },
    {
      "en": "Do you have painkillers?",
      "ru": "У вас есть обезболивающее?",
      "pt": "Tem analgésicos?",
      "ruPron": "U vas yest obezbolivayushcheye?",
      "ptPron": "Tem analgesicos?",
      "emoji": "💊"
    },
    {
      "en": "I need something for allergies.",
      "ru": "Мне нужно что-то от аллергии.",
      "pt": "Preciso de algo para alergias.",
      "ruPron": "Mne nuzhno chto-to ot allergii.",
      "ptPron": "Preciso de algo para alerzhias.",
      "emoji": "🤧"
    },
    {
      "en": "Do you sell vitamins?",
      "ru": "Вы продаёте витамины?",
      "pt": "Vendem vitaminas?",
      "ruPron": "Vy prodayote vitaminy?",
      "ptPron": "Vendem vitaminas?",
      "emoji": "🍊"
    },
    {
      "en": "Can you recommend a sunscreen?",
      "ru": "Можете порекомендовать солнцезащитный крем?",
      "pt": "Pode recomendar um protetor solar?",
      "ruPron": "Mozhete porekomendovat solntsezashchitnyy krem?",
      "ptPron": "Pode recomendar um protetor solar?",
      "emoji": "☀️"
    },
    {
      "en": "I need a thermometer.",
      "ru": "Мне нужен градусник.",
      "pt": "Preciso de um termómetro.",
      "ruPron": "Mne nuzhen gradusnik.",
      "ptPron": "Preciso de um termometro.",
      "emoji": "🌡️"
    },
    {
      "en": "Do you have band-aids?",
      "ru": "У вас есть пластыри?",
      "pt": "Tem pensos rápidos?",
      "ruPron": "U vas yest plastyri?",
      "ptPron": "Tem pensos rapidos?",
      "emoji": "🩹"
    },
    {
      "en": "This is for my child.",
      "ru": "Это для моего ребёнка.",
      "pt": "Isto é para o meu filho.",
      "ruPron": "Eto dlya moyego rebyonka.",
      "ptPron": "Isto e para o meu filyo.",
      "emoji": "🧒"
    },
    {
      "en": "What is the dosage for children?",
      "ru": "Какая дозировка для детей?",
      "pt": "Qual é a dosagem para crianças?",
      "ruPron": "Kakaya dozirovka dlya detey?",
      "ptPron": "Qual e a dosazhem para criansas?",
      "emoji": "🧴"
    },
    {
      "en": "I have a sore throat.",
      "ru": "У меня болит горло.",
      "pt": "Tenho dor de garganta.",
      "ruPron": "U menya bolit gorlo.",
      "ptPron": "Tenyo dor de garganta.",
      "emoji": "🗣️"
    },
    {
      "en": "Do you have cough syrup?",
      "ru": "У вас есть сироп от кашля?",
      "pt": "Tem xarope para a tosse?",
      "ruPron": "U vas yest sirop ot kashlya?",
      "ptPron": "Tem sharope para a tosse?",
      "emoji": "🍯"
    },
    {
      "en": "Can I take this with other medication?",
      "ru": "Можно принимать это с другими лекарствами?",
      "pt": "Posso tomar isto com outros medicamentos?",
      "ruPron": "Mozhno prinimat eto s drugimi lekarstvami?",
      "ptPron": "Posso tomar isto com outros medicamentos?",
      "emoji": "❓"
    },
    {
      "en": "Is this safe during pregnancy?",
      "ru": "Это безопасно при беременности?",
      "pt": "Isto é seguro durante a gravidez?",
      "ruPron": "Eto bezopasno pri beremennosti?",
      "ptPron": "Isto e seguro durante a gravidez?",
      "emoji": "🤰"
    },
    {
      "en": "Do you have insect repellent?",
      "ru": "У вас есть средство от насекомых?",
      "pt": "Tem repelente de insetos?",
      "ruPron": "U vas yest sredstvo ot nasekomykh?",
      "ptPron": "Tem repelente de insetos?",
      "emoji": "🦟"
    },
    {
      "en": "I need eye drops.",
      "ru": "Мне нужны глазные капли.",
      "pt": "Preciso de gotas para os olhos.",
      "ruPron": "Mne nuzhny glaznyye kapli.",
      "ptPron": "Preciso de gotas para os olyos.",
      "emoji": "👁️"
    },
    {
      "en": "How should I store this medication?",
      "ru": "Как хранить это лекарство?",
      "pt": "Como devo guardar este medicamento?",
      "ruPron": "Kak khranit eto lekarstvo?",
      "ptPron": "Como devo guardar este medicamento?",
      "emoji": "🧊"
    },
    {
      "en": "Can you check if my insurance covers this?",
      "ru": "Можете проверить, покрывает ли это моя страховка?",
      "pt": "Pode verificar se o meu seguro cobre isto?",
      "ruPron": "Mozhete proverit, pokryvayet li eto moya strakhovka?",
      "ptPron": "Pode verificar se o meu seguro cobre isto?",
      "emoji": "📋"
    },
    {
      "en": "Do you have a generic version of this?",
      "ru": "У вас есть дженерик этого лекарства?",
      "pt": "Tem uma versão genérica disto?",
      "ruPron": "U vas yest dzhenerik etogo lekarstva?",
      "ptPron": "Tem uma versowng zhenerica disto?",
      "emoji": "💊"
    },
    {
      "en": "I need something to help me sleep.",
      "ru": "Мне нужно что-то от бессонницы.",
      "pt": "Preciso de algo para me ajudar a dormir.",
      "ruPron": "Mne nuzhno chto-to ot bessonnitsy.",
      "ptPron": "Preciso de algo para me azhudar a dormir.",
      "emoji": "😴"
    },
    {
      "en": "What time do you open tomorrow?",
      "ru": "Во сколько вы открываетесь завтра?",
      "pt": "A que horas abrem amanhã?",
      "ruPron": "Vo skolko vy otkryvayetes zavtra?",
      "ptPron": "A ke horas abrem amanyang?",
      "emoji": "🕒"
    },
    {
      "en": "Is this available without a prescription?",
      "ru": "Это можно купить без рецепта?",
      "pt": "Isto está disponível sem receita?",
      "ruPron": "Eto mozhno kupit bez retsepta?",
      "ptPron": "Isto esta disponivel sem receita?",
      "emoji": "✅"
    },
    {
      "en": "I need a refill on my prescription.",
      "ru": "Мне нужно повторить рецепт.",
      "pt": "Preciso de renovar a minha receita.",
      "ruPron": "Mne nuzhno povtorit retsept.",
      "ptPron": "Preciso de renovar a minya receita.",
      "emoji": "🔄"
    },
    {
      "en": "Can you recommend something for an upset stomach?",
      "ru": "Можете порекомендовать что-то от расстройства желудка?",
      "pt": "Pode recomendar algo para o estômago perturbado?",
      "ruPron": "Mozhete porekomendovat chto-to ot rasstroystva zheludka?",
      "ptPron": "Pode recomendar algo para o estomago perturbado?",
      "emoji": "🤢"
    },
    {
      "en": "Thank you, take care!",
      "ru": "Спасибо, берегите себя!",
      "pt": "Obrigado, cuide-se!",
      "ruPron": "Spasibo, beregite sebya!",
      "ptPron": "Obrigado, cuide-se!",
      "emoji": "🙏"
    }
  ]
};
