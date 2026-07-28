// Dialogue data for Happy Learning — short situational conversations.
// Structure: DIALOGUES[category] = [{ title, lines: [{ speaker, en, ru, pt, ruPron, ptPron }, ...] }, ...]
// ruPron / ptPron are approximate, English-reader-friendly pronunciation guides (not IPA).

const DIALOGUES = {
  "doctor": [
    {
      "title": "Describing a symptom",
      "lines": [
        {
          "speaker": "Patient",
          "en": "Hello, I feel sick.",
          "ru": "Здравствуйте, я плохо себя чувствую.",
          "pt": "Olá, sinto-me mal.",
          "ruPron": "Zdravstvuyte, ya plokho sebya chuvstvuyu.",
          "ptPron": "Ola, sinto-me mal."
        },
        {
          "speaker": "Doctor",
          "en": "Where does it hurt?",
          "ru": "Где у вас болит?",
          "pt": "Onde lhe dói?",
          "ruPron": "Gde u vas bolit?",
          "ptPron": "Onde lye doi?"
        },
        {
          "speaker": "Patient",
          "en": "I have a headache and a fever.",
          "ru": "У меня болит голова и температура.",
          "pt": "Tenho dor de cabeça e febre.",
          "ruPron": "U menya bolit golova i temperatura.",
          "ptPron": "Tenyo dor de cabesa e febre."
        },
        {
          "speaker": "Doctor",
          "en": "How long have you had these symptoms?",
          "ru": "Как долго у вас эти симптомы?",
          "pt": "Há quanto tempo tem estes sintomas?",
          "ruPron": "Kak dolgo u vas eti simptomy?",
          "ptPron": "Ha quanto tempo tem estes sintomas?"
        },
        {
          "speaker": "Patient",
          "en": "Since yesterday.",
          "ru": "Со вчерашнего дня.",
          "pt": "Desde ontem.",
          "ruPron": "So vcherashnego dnya.",
          "ptPron": "Desde ontem."
        },
        {
          "speaker": "Doctor",
          "en": "Please take a seat, I will examine you.",
          "ru": "Пожалуйста, присядьте, я вас осмотрю.",
          "pt": "Por favor, sente-se, vou examiná-lo.",
          "ruPron": "Pozhaluysta, prisyadte, ya vas osmotryu.",
          "ptPron": "Por favor, sente-se, vou eshamina-lo."
        },
        {
          "speaker": "Patient",
          "en": "Thank you, doctor.",
          "ru": "Спасибо, доктор.",
          "pt": "Obrigado, doutor.",
          "ruPron": "Spasibo, doktor.",
          "ptPron": "Obrigado, doutor."
        }
      ]
    },
    {
      "title": "Making an appointment",
      "lines": [
        {
          "speaker": "Patient",
          "en": "I need to make an appointment.",
          "ru": "Мне нужно записаться на приём.",
          "pt": "Preciso marcar uma consulta.",
          "ruPron": "Mne nuzhno zapisatsya na priyom.",
          "ptPron": "Preciso marcar uma consulta."
        },
        {
          "speaker": "Receptionist",
          "en": "Do you have insurance?",
          "ru": "У вас есть страховка?",
          "pt": "Tem seguro de saúde?",
          "ruPron": "U vas yest strakhovka?",
          "ptPron": "Tem seguro de saude?"
        },
        {
          "speaker": "Patient",
          "en": "Yes, here is my card.",
          "ru": "Да, вот моя карта.",
          "pt": "Sim, aqui está o meu cartão.",
          "ruPron": "Da, vot moya karta.",
          "ptPron": "Sim, aki esta o meu cartowng."
        },
        {
          "speaker": "Receptionist",
          "en": "Please take a seat and wait.",
          "ru": "Пожалуйста, присядьте и подождите.",
          "pt": "Por favor, sente-se e aguarde.",
          "ruPron": "Pozhaluysta, prisyadte i podozhdite.",
          "ptPron": "Por favor, sente-se e aguarde."
        },
        {
          "speaker": "Patient",
          "en": "How long is the wait?",
          "ru": "Сколько ждать?",
          "pt": "Quanto tempo é a espera?",
          "ruPron": "Skolko zhdat?",
          "ptPron": "Quanto tempo e a espera?"
        },
        {
          "speaker": "Receptionist",
          "en": "About twenty minutes.",
          "ru": "Около двадцати минут.",
          "pt": "Cerca de vinte minutos.",
          "ruPron": "Okolo dvadtsati minut.",
          "ptPron": "Cerca de vinte minutos."
        },
        {
          "speaker": "Patient",
          "en": "Thank you.",
          "ru": "Спасибо.",
          "pt": "Obrigado.",
          "ruPron": "Spasibo.",
          "ptPron": "Obrigado."
        }
      ]
    },
    {
      "title": "Getting a prescription",
      "lines": [
        {
          "speaker": "Doctor",
          "en": "I will prescribe something for the pain.",
          "ru": "Я выпишу что-нибудь от боли.",
          "pt": "Vou receitar algo para a dor.",
          "ruPron": "Ya vypishu chto-nibud ot boli.",
          "ptPron": "Vou receitar algo para a dor."
        },
        {
          "speaker": "Patient",
          "en": "How often should I take this?",
          "ru": "Как часто мне это принимать?",
          "pt": "Com que frequência devo tomar isto?",
          "ruPron": "Kak chasto mne eto prinimat?",
          "ptPron": "Com ke frequencia devo tomar isto?"
        },
        {
          "speaker": "Doctor",
          "en": "Three times a day, after meals.",
          "ru": "Три раза в день, после еды.",
          "pt": "Três vezes por dia, depois das refeições.",
          "ruPron": "Tri raza v den, posle yedy.",
          "ptPron": "Tres vezes por dia, depois das refeisoyngs."
        },
        {
          "speaker": "Patient",
          "en": "Are there any side effects?",
          "ru": "Есть побочные эффекты?",
          "pt": "Há efeitos secundários?",
          "ruPron": "Yest pobochnyye effekty?",
          "ptPron": "Ha efeitos secundarios?"
        },
        {
          "speaker": "Doctor",
          "en": "You might feel a little drowsy.",
          "ru": "Вы можете почувствовать небольшую сонливость.",
          "pt": "Pode sentir-se um pouco sonolento.",
          "ruPron": "Vy mozhete pochuvstvovat nebolshuyu sonlivost.",
          "ptPron": "Pode sentir-se um pouco sonolento."
        },
        {
          "speaker": "Patient",
          "en": "Understood. Thank you, doctor.",
          "ru": "Понятно. Спасибо, доктор.",
          "pt": "Entendido. Obrigado, doutor.",
          "ruPron": "Ponyatno. Spasibo, doktor.",
          "ptPron": "Entendido. Obrigado, doutor."
        },
        {
          "speaker": "Doctor",
          "en": "Get well soon.",
          "ru": "Выздоравливай скорее.",
          "pt": "Melhoras.",
          "ruPron": "Vyzdoravlivay skoreye.",
          "ptPron": "Melyoras."
        }
      ]
    }
  ],
  "store": [
    {
      "title": "Asking about a product",
      "lines": [
        {
          "speaker": "Customer",
          "en": "Excuse me, how much does this cost?",
          "ru": "Извините, сколько это стоит?",
          "pt": "Desculpe, quanto custa isto?",
          "ruPron": "Izvinite, skolko eto stoit?",
          "ptPron": "Desculpe, quanto custa isto?"
        },
        {
          "speaker": "Clerk",
          "en": "It costs twenty euros.",
          "ru": "Это стоит двадцать евро.",
          "pt": "Custa vinte euros.",
          "ruPron": "Eto stoit dvadtsat yevro.",
          "ptPron": "Custa vinte euros."
        },
        {
          "speaker": "Customer",
          "en": "Do you have this in a different size?",
          "ru": "У вас есть это другого размера?",
          "pt": "Tem isto noutro tamanho?",
          "ruPron": "U vas yest eto drugogo razmera?",
          "ptPron": "Tem isto noutro tamanyo?"
        },
        {
          "speaker": "Clerk",
          "en": "Yes, one moment please.",
          "ru": "Да, один момент, пожалуйста.",
          "pt": "Sim, um momento por favor.",
          "ruPron": "Da, odin moment, pozhaluysta.",
          "ptPron": "Sim, um momento por favor."
        },
        {
          "speaker": "Customer",
          "en": "Can I try this on?",
          "ru": "Могу я это примерить?",
          "pt": "Posso experimentar isto?",
          "ruPron": "Mogu ya eto primerit?",
          "ptPron": "Posso eshperimentar isto?"
        },
        {
          "speaker": "Clerk",
          "en": "Of course, the fitting room is over there.",
          "ru": "Конечно, примерочная вон там.",
          "pt": "Claro, o provador é ali.",
          "ruPron": "Konechno, primerochnaya von tam.",
          "ptPron": "Claro, o provador e ali."
        },
        {
          "speaker": "Customer",
          "en": "Thank you.",
          "ru": "Спасибо.",
          "pt": "Obrigado.",
          "ruPron": "Spasibo.",
          "ptPron": "Obrigado."
        }
      ]
    },
    {
      "title": "At the checkout",
      "lines": [
        {
          "speaker": "Clerk",
          "en": "Did you find everything you were looking for?",
          "ru": "Вы нашли всё, что искали?",
          "pt": "Encontrou tudo o que procurava?",
          "ruPron": "Vy nashli vsyo, chto iskali?",
          "ptPron": "Encontrou tudo o ke procurava?"
        },
        {
          "speaker": "Customer",
          "en": "Yes, thank you. Do you accept credit cards?",
          "ru": "Да, спасибо. Вы принимаете кредитные карты?",
          "pt": "Sim, obrigado. Aceitam cartão de crédito?",
          "ruPron": "Da, spasibo. Vy prinimayete kreditnyye karty?",
          "ptPron": "Sim, obrigado. Aceitam cartowng de credito?"
        },
        {
          "speaker": "Clerk",
          "en": "Yes, we do.",
          "ru": "Да, принимаем.",
          "pt": "Sim, aceitamos.",
          "ruPron": "Da, prinimayem.",
          "ptPron": "Sim, aceitamos."
        },
        {
          "speaker": "Customer",
          "en": "Can I get a receipt?",
          "ru": "Можно чек?",
          "pt": "Posso ter o recibo?",
          "ruPron": "Mozhno chek?",
          "ptPron": "Posso ter o recibo?"
        },
        {
          "speaker": "Clerk",
          "en": "Of course, here you go.",
          "ru": "Конечно, вот, пожалуйста.",
          "pt": "Claro, aqui está.",
          "ruPron": "Konechno, vot, pozhaluysta.",
          "ptPron": "Claro, aki esta."
        },
        {
          "speaker": "Customer",
          "en": "Thank you, have a nice day!",
          "ru": "Спасибо, хорошего дня!",
          "pt": "Obrigado, tenha um bom dia!",
          "ruPron": "Spasibo, khoroshego dnya!",
          "ptPron": "Obrigado, tenya um bom dia!"
        }
      ]
    },
    {
      "title": "Returning an item",
      "lines": [
        {
          "speaker": "Customer",
          "en": "I would like to return this item.",
          "ru": "Я хочу вернуть этот товар.",
          "pt": "Gostaria de devolver este artigo.",
          "ruPron": "Ya khochu vernut etot tovar.",
          "ptPron": "Gostaria de devolver este artigo."
        },
        {
          "speaker": "Clerk",
          "en": "May I ask why?",
          "ru": "Могу я спросить, почему?",
          "pt": "Posso perguntar porquê?",
          "ruPron": "Mogu ya sprosit, pochemu?",
          "ptPron": "Posso perguntar porque?"
        },
        {
          "speaker": "Customer",
          "en": "It's too small. Do you have a bigger one?",
          "ru": "Он слишком маленький. У вас есть больше?",
          "pt": "É muito pequeno. Tem um maior?",
          "ruPron": "On slishkom malenkiy. U vas yest bolshe?",
          "ptPron": "E muito pekeno. Tem um maior?"
        },
        {
          "speaker": "Clerk",
          "en": "Let me check. Yes, we have a bigger size.",
          "ru": "Сейчас проверю. Да, у нас есть больше размер.",
          "pt": "Vou verificar. Sim, temos um tamanho maior.",
          "ruPron": "Seychas proveryu. Da, u nas yest bolshe razmer.",
          "ptPron": "Vou verificar. Sim, temos um tamanyo maior."
        },
        {
          "speaker": "Customer",
          "en": "Can I exchange this for another size?",
          "ru": "Могу я обменять на другой размер?",
          "pt": "Posso trocar por outro tamanho?",
          "ruPron": "Mogu ya obmenyat na drugoy razmer?",
          "ptPron": "Posso trocar por outro tamanyo?"
        },
        {
          "speaker": "Clerk",
          "en": "Yes, no problem.",
          "ru": "Да, без проблем.",
          "pt": "Sim, sem problema.",
          "ruPron": "Da, bez problem.",
          "ptPron": "Sim, sem problema."
        },
        {
          "speaker": "Customer",
          "en": "Thank you very much.",
          "ru": "Большое спасибо.",
          "pt": "Muito obrigado.",
          "ruPron": "Bolshoye spasibo.",
          "ptPron": "Muito obrigado."
        }
      ]
    }
  ],
  "government": [
    {
      "title": "Renewing a passport",
      "lines": [
        {
          "speaker": "Visitor",
          "en": "I need to renew my passport.",
          "ru": "Мне нужно продлить паспорт.",
          "pt": "Preciso renovar o meu passaporte.",
          "ruPron": "Mne nuzhno prodlit pasport.",
          "ptPron": "Preciso renovar o meu passaporte."
        },
        {
          "speaker": "Clerk",
          "en": "Do you have your old passport?",
          "ru": "У вас есть старый паспорт?",
          "pt": "Tem o seu passaporte antigo?",
          "ruPron": "U vas yest staryy pasport?",
          "ptPron": "Tem o seu passaporte antigo?"
        },
        {
          "speaker": "Visitor",
          "en": "Yes, here it is.",
          "ru": "Да, вот он.",
          "pt": "Sim, aqui está.",
          "ruPron": "Da, vot on.",
          "ptPron": "Sim, aki esta."
        },
        {
          "speaker": "Clerk",
          "en": "Please fill out this form.",
          "ru": "Пожалуйста, заполните эту форму.",
          "pt": "Por favor, preencha este formulário.",
          "ruPron": "Pozhaluysta, zapolnite etu formu.",
          "ptPron": "Por favor, preensha este formulario."
        },
        {
          "speaker": "Visitor",
          "en": "Where do I sign?",
          "ru": "Где мне подписать?",
          "pt": "Onde assino?",
          "ruPron": "Gde mne podpisat?",
          "ptPron": "Onde assino?"
        },
        {
          "speaker": "Clerk",
          "en": "Right here, at the bottom.",
          "ru": "Вот здесь, внизу.",
          "pt": "Aqui mesmo, no fundo.",
          "ruPron": "Vot zdes, vnizu.",
          "ptPron": "Aki mesmo, no fundo."
        },
        {
          "speaker": "Visitor",
          "en": "How long does this process take?",
          "ru": "Сколько времени занимает эта процедура?",
          "pt": "Quanto tempo demora este processo?",
          "ruPron": "Skolko vremeni zanimayet eta protsedura?",
          "ptPron": "Quanto tempo demora este processo?"
        },
        {
          "speaker": "Clerk",
          "en": "About two weeks.",
          "ru": "Около двух недель.",
          "pt": "Cerca de duas semanas.",
          "ruPron": "Okolo dvukh nedel.",
          "ptPron": "Cerca de duas semanas."
        }
      ]
    },
    {
      "title": "Registering an address",
      "lines": [
        {
          "speaker": "Visitor",
          "en": "I would like to register my address.",
          "ru": "Я хочу зарегистрировать свой адрес.",
          "pt": "Gostaria de registar a minha morada.",
          "ruPron": "Ya khochu zaregistrirovat svoy adres.",
          "ptPron": "Gostaria de rezhistar a minya morada."
        },
        {
          "speaker": "Clerk",
          "en": "Do you have proof of residence?",
          "ru": "У вас есть подтверждение места жительства?",
          "pt": "Tem comprovativo de residência?",
          "ruPron": "U vas yest podtverzhdeniye mesta zhitelstva?",
          "ptPron": "Tem comprovativo de residencia?"
        },
        {
          "speaker": "Visitor",
          "en": "Yes, here is my rental contract.",
          "ru": "Да, вот мой договор аренды.",
          "pt": "Sim, aqui está o meu contrato de arrendamento.",
          "ruPron": "Da, vot moy dogovor arendy.",
          "ptPron": "Sim, aki esta o meu contrato de ahendamento."
        },
        {
          "speaker": "Visitor",
          "en": "Is there a fee for this service?",
          "ru": "Есть ли плата за эту услугу?",
          "pt": "Há alguma taxa para este serviço?",
          "ruPron": "Yest li plata za etu uslugu?",
          "ptPron": "Ha alguma tasha para este serviso?"
        },
        {
          "speaker": "Clerk",
          "en": "No, this service is free.",
          "ru": "Нет, эта услуга бесплатна.",
          "pt": "Não, este serviço é gratuito.",
          "ruPron": "Net, eta usluga besplatna.",
          "ptPron": "Nowng, este serviso e gratuito."
        },
        {
          "speaker": "Visitor",
          "en": "Thank you for your help.",
          "ru": "Спасибо за помощь.",
          "pt": "Obrigado pela sua ajuda.",
          "ruPron": "Spasibo za pomoshch.",
          "ptPron": "Obrigado pela sua azhuda."
        }
      ]
    },
    {
      "title": "Paying a fine",
      "lines": [
        {
          "speaker": "Visitor",
          "en": "I am here to pay a fine.",
          "ru": "Я пришёл оплатить штраф.",
          "pt": "Vim pagar uma multa.",
          "ruPron": "Ya prishyol oplatit shtraf.",
          "ptPron": "Vim pagar uma multa."
        },
        {
          "speaker": "Clerk",
          "en": "What is your name and case number?",
          "ru": "Как ваше имя и номер дела?",
          "pt": "Qual é o seu nome e número do processo?",
          "ruPron": "Kak vashe imya i nomer dela?",
          "ptPron": "Qual e o seu nome e numero do processo?"
        },
        {
          "speaker": "Visitor",
          "en": "My name is Ana Silva, case number 4521.",
          "ru": "Меня зовут Ана Силва, номер дела 4521.",
          "pt": "Chamo-me Ana Silva, número do processo 4521.",
          "ruPron": "Menya zovut ana silva, nomer dela 4521.",
          "ptPron": "Shamo-me ana silva, numero do processo 4521."
        },
        {
          "speaker": "Clerk",
          "en": "Take a number and wait.",
          "ru": "Возьмите талон и подождите.",
          "pt": "Tire uma senha e aguarde.",
          "ruPron": "Vozmite talon i podozhdite.",
          "ptPron": "Tire uma senya e aguarde."
        },
        {
          "speaker": "Visitor",
          "en": "Can I pay by card?",
          "ru": "Можно оплатить картой?",
          "pt": "Posso pagar com cartão?",
          "ruPron": "Mozhno oplatit kartoy?",
          "ptPron": "Posso pagar com cartowng?"
        },
        {
          "speaker": "Clerk",
          "en": "Yes, of course.",
          "ru": "Да, конечно.",
          "pt": "Sim, claro.",
          "ruPron": "Da, konechno.",
          "ptPron": "Sim, claro."
        },
        {
          "speaker": "Visitor",
          "en": "Thank you.",
          "ru": "Спасибо.",
          "pt": "Obrigado.",
          "ruPron": "Spasibo.",
          "ptPron": "Obrigado."
        }
      ]
    }
  ],
  "restaurant": [
    {
      "title": "Ordering food",
      "lines": [
        {
          "speaker": "Waiter",
          "en": "Good evening, a table for two?",
          "ru": "Добрый вечер, столик на двоих?",
          "pt": "Boa noite, uma mesa para dois?",
          "ruPron": "Dobryy vecher, stolik na dvoikh?",
          "ptPron": "Boa noite, uma mesa para dois?"
        },
        {
          "speaker": "Guest",
          "en": "Yes, please. Can I see the menu?",
          "ru": "Да, пожалуйста. Можно меню?",
          "pt": "Sim, por favor. Posso ver o menu?",
          "ruPron": "Da, pozhaluysta. Mozhno menyu?",
          "ptPron": "Sim, por favor. Posso ver o menu?"
        },
        {
          "speaker": "Waiter",
          "en": "Of course. Would you like something to drink?",
          "ru": "Конечно. Хотите что-нибудь выпить?",
          "pt": "Claro. Gostaria de beber alguma coisa?",
          "ruPron": "Konechno. Khotite chto-nibud vypit?",
          "ptPron": "Claro. Gostaria de beber alguma coisa?"
        },
        {
          "speaker": "Guest",
          "en": "Could I have some water, please?",
          "ru": "Можно воды, пожалуйста?",
          "pt": "Posso ter água, por favor?",
          "ruPron": "Mozhno vody, pozhaluysta?",
          "ptPron": "Posso ter agua, por favor?"
        },
        {
          "speaker": "Waiter",
          "en": "Of course. Are you ready to order?",
          "ru": "Конечно. Вы готовы сделать заказ?",
          "pt": "Claro. Está pronto para pedir?",
          "ruPron": "Konechno. Vy gotovy sdelat zakaz?",
          "ptPron": "Claro. Esta pronto para pedir?"
        },
        {
          "speaker": "Guest",
          "en": "Yes, I would like to order the fish, please.",
          "ru": "Да, я хочу заказать рыбу, пожалуйста.",
          "pt": "Sim, gostaria de pedir o peixe, por favor.",
          "ruPron": "Da, ya khochu zakazat rybu, pozhaluysta.",
          "ptPron": "Sim, gostaria de pedir o peishe, por favor."
        },
        {
          "speaker": "Waiter",
          "en": "Excellent choice.",
          "ru": "Отличный выбор.",
          "pt": "Excelente escolha.",
          "ruPron": "Otlichnyy vybor.",
          "ptPron": "Eshcelente escolya."
        }
      ]
    },
    {
      "title": "Special dietary needs",
      "lines": [
        {
          "speaker": "Guest",
          "en": "What do you recommend?",
          "ru": "Что вы порекомендуете?",
          "pt": "O que recomenda?",
          "ruPron": "Chto vy porekomenduyete?",
          "ptPron": "O ke recomenda?"
        },
        {
          "speaker": "Waiter",
          "en": "The soup is very good today.",
          "ru": "Суп сегодня очень хорош.",
          "pt": "A sopa está muito boa hoje.",
          "ruPron": "Sup segodnya ochen khorosh.",
          "ptPron": "A sopa esta muito boa hozhe."
        },
        {
          "speaker": "Guest",
          "en": "I am a vegetarian, is it vegetarian?",
          "ru": "Я вегетарианец, он вегетарианский?",
          "pt": "Sou vegetariano, é vegetariano?",
          "ruPron": "Ya vegetarianets, on vegetarianskiy?",
          "ptPron": "Sou vezhetariano, e vezhetariano?"
        },
        {
          "speaker": "Waiter",
          "en": "No, but we have a vegetarian option.",
          "ru": "Нет, но у нас есть вегетарианское блюдо.",
          "pt": "Não, mas temos uma opção vegetariana.",
          "ruPron": "Net, no u nas yest vegetarianskoye blyudo.",
          "ptPron": "Nowng, mas temos uma opsowng vezhetariana."
        },
        {
          "speaker": "Guest",
          "en": "I am also allergic to nuts.",
          "ru": "У меня также аллергия на орехи.",
          "pt": "Sou também alérgico a frutos secos.",
          "ruPron": "U menya takzhe allergiya na orekhi.",
          "ptPron": "Sou tambem alerzhico a frutos secos."
        },
        {
          "speaker": "Waiter",
          "en": "I will let the chef know.",
          "ru": "Я сообщу шеф-повару.",
          "pt": "Vou avisar o chef.",
          "ruPron": "Ya soobshchu shef-povaru.",
          "ptPron": "Vou avisar o shef."
        },
        {
          "speaker": "Guest",
          "en": "Thank you very much.",
          "ru": "Большое спасибо.",
          "pt": "Muito obrigado.",
          "ruPron": "Bolshoye spasibo.",
          "ptPron": "Muito obrigado."
        }
      ]
    },
    {
      "title": "Paying the bill",
      "lines": [
        {
          "speaker": "Guest",
          "en": "The bill, please.",
          "ru": "Счёт, пожалуйста.",
          "pt": "A conta, por favor.",
          "ruPron": "Schyot, pozhaluysta.",
          "ptPron": "A conta, por favor."
        },
        {
          "speaker": "Waiter",
          "en": "Of course, one moment.",
          "ru": "Конечно, один момент.",
          "pt": "Claro, um momento.",
          "ruPron": "Konechno, odin moment.",
          "ptPron": "Claro, um momento."
        },
        {
          "speaker": "Guest",
          "en": "Is service included?",
          "ru": "Обслуживание включено?",
          "pt": "O serviço está incluído?",
          "ruPron": "Obsluzhivaniye vklyucheno?",
          "ptPron": "O serviso esta incluido?"
        },
        {
          "speaker": "Waiter",
          "en": "Yes, it is included.",
          "ru": "Да, включено.",
          "pt": "Sim, está incluído.",
          "ruPron": "Da, vklyucheno.",
          "ptPron": "Sim, esta incluido."
        },
        {
          "speaker": "Guest",
          "en": "Can we split the bill?",
          "ru": "Можем разделить счёт?",
          "pt": "Podemos dividir a conta?",
          "ruPron": "Mozhem razdelit schyot?",
          "ptPron": "Podemos dividir a conta?"
        },
        {
          "speaker": "Waiter",
          "en": "Yes, no problem.",
          "ru": "Да, без проблем.",
          "pt": "Sim, sem problema.",
          "ruPron": "Da, bez problem.",
          "ptPron": "Sim, sem problema."
        },
        {
          "speaker": "Guest",
          "en": "This was a wonderful dinner, thank you.",
          "ru": "Это был прекрасный ужин, спасибо.",
          "pt": "Foi um jantar maravilhoso, obrigado.",
          "ruPron": "Eto byl prekrasnyy uzhin, spasibo.",
          "ptPron": "Foi um zhantar maravilyoso, obrigado."
        }
      ]
    }
  ],
  "airport": [
    {
      "title": "Checking in",
      "lines": [
        {
          "speaker": "Agent",
          "en": "May I see your passport and ticket?",
          "ru": "Могу я увидеть ваш паспорт и билет?",
          "pt": "Posso ver o seu passaporte e bilhete?",
          "ruPron": "Mogu ya uvidet vash pasport i bilet?",
          "ptPron": "Posso ver o seu passaporte e bilyete?"
        },
        {
          "speaker": "Traveler",
          "en": "Here you go.",
          "ru": "Вот, пожалуйста.",
          "pt": "Aqui está.",
          "ruPron": "Vot, pozhaluysta.",
          "ptPron": "Aki esta."
        },
        {
          "speaker": "Agent",
          "en": "Would you like a window seat?",
          "ru": "Хотите место у окна?",
          "pt": "Gostaria de um lugar à janela?",
          "ruPron": "Khotite mesto u okna?",
          "ptPron": "Gostaria de um lugar à zhanela?"
        },
        {
          "speaker": "Traveler",
          "en": "Yes, please.",
          "ru": "Да, пожалуйста.",
          "pt": "Sim, por favor.",
          "ruPron": "Da, pozhaluysta.",
          "ptPron": "Sim, por favor."
        },
        {
          "speaker": "Agent",
          "en": "Here is your boarding pass. The gate is twelve.",
          "ru": "Вот ваш посадочный талон. Выход двенадцать.",
          "pt": "Aqui está o seu cartão de embarque. O portão é doze.",
          "ruPron": "Vot vash posadochnyy talon. Vykhod dvenadtsat.",
          "ptPron": "Aki esta o seu cartowng de embarke. O portowng e doze."
        },
        {
          "speaker": "Traveler",
          "en": "Thank you.",
          "ru": "Спасибо.",
          "pt": "Obrigado.",
          "ruPron": "Spasibo.",
          "ptPron": "Obrigado."
        }
      ]
    },
    {
      "title": "Lost luggage",
      "lines": [
        {
          "speaker": "Traveler",
          "en": "I lost my luggage.",
          "ru": "Я потерял багаж.",
          "pt": "Perdi a minha bagagem.",
          "ruPron": "Ya poteryal bagazh.",
          "ptPron": "Perdi a minya bagazhem."
        },
        {
          "speaker": "Agent",
          "en": "What does your bag look like?",
          "ru": "Как выглядит ваша сумка?",
          "pt": "Como é a sua mala?",
          "ruPron": "Kak vyglyadit vasha sumka?",
          "ptPron": "Como e a sua mala?"
        },
        {
          "speaker": "Traveler",
          "en": "It's a black suitcase with a red ribbon.",
          "ru": "Это чёрный чемодан с красной лентой.",
          "pt": "É uma mala preta com uma fita vermelha.",
          "ruPron": "Eto chyornyy chemodan s krasnoy lentoy.",
          "ptPron": "E uma mala preta com uma fita vermelya."
        },
        {
          "speaker": "Agent",
          "en": "I am sorry, we will look for it right away.",
          "ru": "Мне жаль, мы сразу же начнём поиски.",
          "pt": "Lamento, vamos procurá-la imediatamente.",
          "ruPron": "Mne zhal, my srazu zhe nachnyom poiski.",
          "ptPron": "Lamento, vamos procura-la imediatamente."
        },
        {
          "speaker": "Traveler",
          "en": "Where can I collect it once you find it?",
          "ru": "Где можно её получить, когда вы её найдёте?",
          "pt": "Onde posso recolhê-la quando a encontrarem?",
          "ruPron": "Gde mozhno yeyo poluchit, kogda vy yeyo naydyote?",
          "ptPron": "Onde posso recolye-la quando a encontrarem?"
        },
        {
          "speaker": "Agent",
          "en": "We will call you as soon as we find it.",
          "ru": "Мы позвоним вам, как только найдём.",
          "pt": "Vamos ligar-lhe assim que a encontrarmos.",
          "ruPron": "My pozvonim vam, kak tolko naydyom.",
          "ptPron": "Vamos ligar-lye assim ke a encontrarmos."
        },
        {
          "speaker": "Traveler",
          "en": "Thank you for your help.",
          "ru": "Спасибо за помощь.",
          "pt": "Obrigado pela sua ajuda.",
          "ruPron": "Spasibo za pomoshch.",
          "ptPron": "Obrigado pela sua azhuda."
        }
      ]
    },
    {
      "title": "Missed connection",
      "lines": [
        {
          "speaker": "Traveler",
          "en": "I missed my connecting flight.",
          "ru": "Я пропустил стыковочный рейс.",
          "pt": "Perdi o meu voo de ligação.",
          "ruPron": "Ya propustil stykovochnyy reys.",
          "ptPron": "Perdi o meu voo de ligasowng."
        },
        {
          "speaker": "Agent",
          "en": "I understand. Is there another flight today, you ask?",
          "ru": "Понимаю. Есть другой рейс сегодня?",
          "pt": "Compreendo. Há outro voo hoje?",
          "ruPron": "Ponimayu. Yest drugoy reys segodnya?",
          "ptPron": "Compreendo. Ha outro voo hozhe?"
        },
        {
          "speaker": "Traveler",
          "en": "Yes, please, I need to change my flight.",
          "ru": "Да, пожалуйста, мне нужно изменить рейс.",
          "pt": "Sim, por favor, preciso mudar o meu voo.",
          "ruPron": "Da, pozhaluysta, mne nuzhno izmenit reys.",
          "ptPron": "Sim, por favor, preciso mudar o meu voo."
        },
        {
          "speaker": "Agent",
          "en": "Yes, there is one at six o'clock.",
          "ru": "Да, есть один в шесть часов.",
          "pt": "Sim, há um às seis horas.",
          "ruPron": "Da, yest odin v shest chasov.",
          "ptPron": "Sim, ha um às seis horas."
        },
        {
          "speaker": "Traveler",
          "en": "Where is the boarding area?",
          "ru": "Где зона посадки?",
          "pt": "Onde é a área de embarque?",
          "ruPron": "Gde zona posadki?",
          "ptPron": "Onde e a area de embarke?"
        },
        {
          "speaker": "Agent",
          "en": "It's on the second floor.",
          "ru": "Это на втором этаже.",
          "pt": "É no segundo andar.",
          "ruPron": "Eto na vtorom etazhe.",
          "ptPron": "E no segundo andar."
        },
        {
          "speaker": "Traveler",
          "en": "Thank you, have a nice day.",
          "ru": "Спасибо, хорошего дня.",
          "pt": "Obrigado, tenha um bom dia.",
          "ruPron": "Spasibo, khoroshego dnya.",
          "ptPron": "Obrigado, tenya um bom dia."
        }
      ]
    }
  ],
  "hotel": [
    {
      "title": "Checking in",
      "lines": [
        {
          "speaker": "Guest",
          "en": "I have a reservation.",
          "ru": "У меня забронирован номер.",
          "pt": "Tenho uma reserva.",
          "ruPron": "U menya zabronirovan nomer.",
          "ptPron": "Tenyo uma reserva."
        },
        {
          "speaker": "Receptionist",
          "en": "What is your name, please?",
          "ru": "Как ваше имя, пожалуйста?",
          "pt": "Qual é o seu nome, por favor?",
          "ruPron": "Kak vashe imya, pozhaluysta?",
          "ptPron": "Qual e o seu nome, por favor?"
        },
        {
          "speaker": "Guest",
          "en": "My name is John Smith.",
          "ru": "Меня зовут Джон Смит.",
          "pt": "Chamo-me John Smith.",
          "ruPron": "Menya zovut dzhon smit.",
          "ptPron": "Shamo-me zhohn smith."
        },
        {
          "speaker": "Receptionist",
          "en": "Welcome! Here is your key.",
          "ru": "Добро пожаловать! Вот ваш ключ.",
          "pt": "Bem-vindo! Aqui está a sua chave.",
          "ruPron": "Dobro pozhalovat! Vot vash klyuch.",
          "ptPron": "Bem-vindo! Aki esta a sua shave."
        },
        {
          "speaker": "Guest",
          "en": "Is breakfast included?",
          "ru": "Завтрак включён?",
          "pt": "O pequeno-almoço está incluído?",
          "ruPron": "Zavtrak vklyuchyon?",
          "ptPron": "O pekeno-almoso esta incluido?"
        },
        {
          "speaker": "Receptionist",
          "en": "Yes, from seven to ten in the morning.",
          "ru": "Да, с семи до десяти утра.",
          "pt": "Sim, das sete às dez da manhã.",
          "ruPron": "Da, s semi do desyati utra.",
          "ptPron": "Sim, das sete às dez da manyang."
        },
        {
          "speaker": "Guest",
          "en": "Thank you.",
          "ru": "Спасибо.",
          "pt": "Obrigado.",
          "ruPron": "Spasibo.",
          "ptPron": "Obrigado."
        }
      ]
    },
    {
      "title": "A problem with the room",
      "lines": [
        {
          "speaker": "Guest",
          "en": "The room is too cold. Could you send someone to fix the air conditioning?",
          "ru": "В номере слишком холодно. Пришлите кого-нибудь починить кондиционер?",
          "pt": "O quarto está muito frio. Pode enviar alguém para arranjar o ar condicionado?",
          "ruPron": "V nomere slishkom kholodno. Prishlite kogo-nibud pochinit konditsioner?",
          "ptPron": "O quarto esta muito frio. Pode enviar alguem para ahanzhar o ar condicionado?"
        },
        {
          "speaker": "Receptionist",
          "en": "I'm sorry, I will send someone right away.",
          "ru": "Извините, я сейчас же пришлю кого-нибудь.",
          "pt": "Peço desculpa, vou enviar alguém já.",
          "ruPron": "Izvinite, ya seychas zhe prishlyu kogo-nibud.",
          "ptPron": "Peso desculpa, vou enviar alguem zha."
        },
        {
          "speaker": "Guest",
          "en": "Could I get an extra towel too?",
          "ru": "Можно ещё одно полотенце?",
          "pt": "Posso ter mais uma toalha?",
          "ruPron": "Mozhno yeshchyo odno polotentse?",
          "ptPron": "Posso ter mais uma toalya?"
        },
        {
          "speaker": "Receptionist",
          "en": "Of course, right away.",
          "ru": "Конечно, сейчас же.",
          "pt": "Claro, já.",
          "ruPron": "Konechno, seychas zhe.",
          "ptPron": "Claro, zha."
        },
        {
          "speaker": "Guest",
          "en": "Thank you very much.",
          "ru": "Большое спасибо.",
          "pt": "Muito obrigado.",
          "ruPron": "Bolshoye spasibo.",
          "ptPron": "Muito obrigado."
        }
      ]
    },
    {
      "title": "Checking out",
      "lines": [
        {
          "speaker": "Guest",
          "en": "What time is check-out?",
          "ru": "Во сколько выселение?",
          "pt": "A que horas é o check-out?",
          "ruPron": "Vo skolko vyseleniye?",
          "ptPron": "A ke horas e o sheck-out?"
        },
        {
          "speaker": "Receptionist",
          "en": "Check-out is at noon.",
          "ru": "Выселение в полдень.",
          "pt": "O check-out é ao meio-dia.",
          "ruPron": "Vyseleniye v polden.",
          "ptPron": "O sheck-out e ao meio-dia."
        },
        {
          "speaker": "Guest",
          "en": "Can I check out late?",
          "ru": "Можно выселиться позже?",
          "pt": "Posso fazer o check-out mais tarde?",
          "ruPron": "Mozhno vyselitsya pozzhe?",
          "ptPron": "Posso fazer o sheck-out mais tarde?"
        },
        {
          "speaker": "Receptionist",
          "en": "Yes, until two o'clock, no extra charge.",
          "ru": "Да, до двух часов, без доплаты.",
          "pt": "Sim, até às duas horas, sem custo extra.",
          "ruPron": "Da, do dvukh chasov, bez doplaty.",
          "ptPron": "Sim, ate às duas horas, sem custo eshtra."
        },
        {
          "speaker": "Guest",
          "en": "Can I leave my luggage here after check-out?",
          "ru": "Можно оставить багаж здесь после выселения?",
          "pt": "Posso deixar a minha bagagem aqui depois do check-out?",
          "ruPron": "Mozhno ostavit bagazh zdes posle vyseleniya?",
          "ptPron": "Posso deishar a minya bagazhem aki depois do sheck-out?"
        },
        {
          "speaker": "Receptionist",
          "en": "Of course, no problem.",
          "ru": "Конечно, без проблем.",
          "pt": "Claro, sem problema.",
          "ruPron": "Konechno, bez problem.",
          "ptPron": "Claro, sem problema."
        },
        {
          "speaker": "Guest",
          "en": "Thank you for everything, goodbye!",
          "ru": "Спасибо за всё, до свидания!",
          "pt": "Obrigado por tudo, adeus!",
          "ruPron": "Spasibo za vsyo, do svidaniya!",
          "ptPron": "Obrigado por tudo, adeus!"
        }
      ]
    }
  ],
  "bank": [
    {
      "title": "Opening an account",
      "lines": [
        {
          "speaker": "Customer",
          "en": "I would like to open an account.",
          "ru": "Я хотел бы открыть счёт.",
          "pt": "Gostaria de abrir uma conta.",
          "ruPron": "Ya khotel by otkryt schyot.",
          "ptPron": "Gostaria de abrir uma conta."
        },
        {
          "speaker": "Clerk",
          "en": "What documents do you have with you?",
          "ru": "Какие документы у вас с собой?",
          "pt": "Que documentos tem consigo?",
          "ruPron": "Kakiye dokumenty u vas s soboy?",
          "ptPron": "Ke documentos tem consigo?"
        },
        {
          "speaker": "Customer",
          "en": "I have my ID and proof of address.",
          "ru": "У меня есть удостоверение личности и подтверждение адреса.",
          "pt": "Tenho o meu bilhete de identidade e comprovativo de morada.",
          "ruPron": "U menya yest udostovereniye lichnosti i podtverzhdeniye adresa.",
          "ptPron": "Tenyo o meu bilyete de identidade e comprovativo de morada."
        },
        {
          "speaker": "Clerk",
          "en": "Perfect, please sign here.",
          "ru": "Отлично, пожалуйста, подпишите здесь.",
          "pt": "Perfeito, por favor, assine aqui.",
          "ruPron": "Otlichno, pozhaluysta, podpishite zdes.",
          "ptPron": "Perfeito, por favor, assine aki."
        },
        {
          "speaker": "Customer",
          "en": "Can I set up online banking too?",
          "ru": "Можно подключить онлайн-банкинг тоже?",
          "pt": "Posso configurar o banco online também?",
          "ruPron": "Mozhno podklyuchit onlayn-banking tozhe?",
          "ptPron": "Posso configurar o banco online tambem?"
        },
        {
          "speaker": "Clerk",
          "en": "Yes, of course.",
          "ru": "Да, конечно.",
          "pt": "Sim, claro.",
          "ruPron": "Da, konechno.",
          "ptPron": "Sim, claro."
        },
        {
          "speaker": "Customer",
          "en": "Thank you very much.",
          "ru": "Большое спасибо.",
          "pt": "Muito obrigado.",
          "ruPron": "Bolshoye spasibo.",
          "ptPron": "Muito obrigado."
        }
      ]
    },
    {
      "title": "Lost card",
      "lines": [
        {
          "speaker": "Customer",
          "en": "I lost my debit card.",
          "ru": "Я потерял дебетовую карту.",
          "pt": "Perdi o meu cartão de débito.",
          "ruPron": "Ya poteryal debetovuyu kartu.",
          "ptPron": "Perdi o meu cartowng de debito."
        },
        {
          "speaker": "Clerk",
          "en": "Do not worry, we will block it right away.",
          "ru": "Не волнуйтесь, мы сразу же заблокируем её.",
          "pt": "Não se preocupe, vamos bloqueá-lo já.",
          "ruPron": "Ne volnuytes, my srazu zhe zablokiruyem yeyo.",
          "ptPron": "Nowng se preocupe, vamos blokea-lo zha."
        },
        {
          "speaker": "Customer",
          "en": "Thank you. I need a new one.",
          "ru": "Спасибо. Мне нужна новая.",
          "pt": "Obrigado. Preciso de um novo.",
          "ruPron": "Spasibo. Mne nuzhna novaya.",
          "ptPron": "Obrigado. Preciso de um novo."
        },
        {
          "speaker": "Clerk",
          "en": "We will send you a new card within a week.",
          "ru": "Мы вышлем вам новую карту в течение недели.",
          "pt": "Vamos enviar-lhe um novo cartão dentro de uma semana.",
          "ruPron": "My vyshlem vam novuyu kartu v techeniye nedeli.",
          "ptPron": "Vamos enviar-lye um novo cartowng dentro de uma semana."
        },
        {
          "speaker": "Customer",
          "en": "Is there a fee for this?",
          "ru": "Есть комиссия за это?",
          "pt": "Há alguma taxa para isto?",
          "ruPron": "Yest komissiya za eto?",
          "ptPron": "Ha alguma tasha para isto?"
        },
        {
          "speaker": "Clerk",
          "en": "No, there is no fee.",
          "ru": "Нет, комиссии нет.",
          "pt": "Não, não há taxa.",
          "ruPron": "Net, komissii net.",
          "ptPron": "Nowng, nowng ha tasha."
        },
        {
          "speaker": "Customer",
          "en": "Thank you for your help.",
          "ru": "Спасибо за помощь.",
          "pt": "Obrigado pela sua ajuda.",
          "ruPron": "Spasibo za pomoshch.",
          "ptPron": "Obrigado pela sua azhuda."
        }
      ]
    },
    {
      "title": "Currency exchange",
      "lines": [
        {
          "speaker": "Customer",
          "en": "I need to exchange currency.",
          "ru": "Мне нужно обменять валюту.",
          "pt": "Preciso trocar moeda.",
          "ruPron": "Mne nuzhno obmenyat valyutu.",
          "ptPron": "Preciso trocar moeda."
        },
        {
          "speaker": "Customer",
          "en": "What is the exchange rate today?",
          "ru": "Какой сегодня курс обмена?",
          "pt": "Qual é a taxa de câmbio hoje?",
          "ruPron": "Kakoy segodnya kurs obmena?",
          "ptPron": "Qual e a tasha de cambio hozhe?"
        },
        {
          "speaker": "Clerk",
          "en": "One euro is worth this much today.",
          "ru": "Один евро стоит столько-то сегодня.",
          "pt": "Um euro vale isto hoje.",
          "ruPron": "Odin yevro stoit stolko-to segodnya.",
          "ptPron": "Um euro vale isto hozhe."
        },
        {
          "speaker": "Customer",
          "en": "I would like to exchange two hundred euros.",
          "ru": "Я хочу обменять двести евро.",
          "pt": "Gostaria de trocar duzentos euros.",
          "ruPron": "Ya khochu obmenyat dvesti yevro.",
          "ptPron": "Gostaria de trocar duzentos euros."
        },
        {
          "speaker": "Clerk",
          "en": "Yes, there is a small fee for this transaction.",
          "ru": "Да, есть небольшая комиссия за эту операцию.",
          "pt": "Sim, há uma pequena taxa para esta transação.",
          "ruPron": "Da, yest nebolshaya komissiya za etu operatsiyu.",
          "ptPron": "Sim, ha uma pekena tasha para esta transasowng."
        },
        {
          "speaker": "Customer",
          "en": "That's fine.",
          "ru": "Хорошо.",
          "pt": "Está bem.",
          "ruPron": "Khorosho.",
          "ptPron": "Esta bem."
        },
        {
          "speaker": "Clerk",
          "en": "Here is your money, thank you.",
          "ru": "Вот ваши деньги, спасибо.",
          "pt": "Aqui está o seu dinheiro, obrigado.",
          "ruPron": "Vot vashi dengi, spasibo.",
          "ptPron": "Aki esta o seu dinyeiro, obrigado."
        }
      ]
    }
  ],
  "pharmacy": [
    {
      "title": "Getting medicine for a cold",
      "lines": [
        {
          "speaker": "Customer",
          "en": "Do you have anything for a headache?",
          "ru": "У вас есть что-нибудь от головной боли?",
          "pt": "Tem alguma coisa para dor de cabeça?",
          "ruPron": "U vas yest chto-nibud ot golovnoy boli?",
          "ptPron": "Tem alguma coisa para dor de cabesa?"
        },
        {
          "speaker": "Pharmacist",
          "en": "Yes, we have painkillers.",
          "ru": "Да, у нас есть обезболивающее.",
          "pt": "Sim, temos analgésicos.",
          "ruPron": "Da, u nas yest obezbolivayushcheye.",
          "ptPron": "Sim, temos analgesicos."
        },
        {
          "speaker": "Customer",
          "en": "What do you recommend for a cold too?",
          "ru": "Что вы порекомендуете от простуды тоже?",
          "pt": "O que recomenda para uma constipação também?",
          "ruPron": "Chto vy porekomenduyete ot prostudy tozhe?",
          "ptPron": "O ke recomenda para uma constipasowng tambem?"
        },
        {
          "speaker": "Pharmacist",
          "en": "This syrup works very well.",
          "ru": "Этот сироп очень хорошо помогает.",
          "pt": "Este xarope funciona muito bem.",
          "ruPron": "Etot sirop ochen khorosho pomogayet.",
          "ptPron": "Este sharope funciona muito bem."
        },
        {
          "speaker": "Customer",
          "en": "How many times a day should I take this?",
          "ru": "Сколько раз в день это принимать?",
          "pt": "Quantas vezes por dia devo tomar isto?",
          "ruPron": "Skolko raz v den eto prinimat?",
          "ptPron": "Quantas vezes por dia devo tomar isto?"
        },
        {
          "speaker": "Pharmacist",
          "en": "Three times a day, after meals.",
          "ru": "Три раза в день, после еды.",
          "pt": "Três vezes por dia, depois das refeições.",
          "ruPron": "Tri raza v den, posle yedy.",
          "ptPron": "Tres vezes por dia, depois das refeisoyngs."
        },
        {
          "speaker": "Customer",
          "en": "Thank you, take care!",
          "ru": "Спасибо, берегите себя!",
          "pt": "Obrigado, cuide-se!",
          "ruPron": "Spasibo, beregite sebya!",
          "ptPron": "Obrigado, cuide-se!"
        }
      ]
    },
    {
      "title": "Filling a prescription",
      "lines": [
        {
          "speaker": "Customer",
          "en": "Here is my prescription.",
          "ru": "Вот мой рецепт.",
          "pt": "Aqui está a minha receita.",
          "ruPron": "Vot moy retsept.",
          "ptPron": "Aki esta a minya receita."
        },
        {
          "speaker": "Pharmacist",
          "en": "One moment, please.",
          "ru": "Один момент, пожалуйста.",
          "pt": "Um momento, por favor.",
          "ruPron": "Odin moment, pozhaluysta.",
          "ptPron": "Um momento, por favor."
        },
        {
          "speaker": "Customer",
          "en": "Are there any side effects?",
          "ru": "Есть побочные эффекты?",
          "pt": "Há efeitos secundários?",
          "ruPron": "Yest pobochnyye effekty?",
          "ptPron": "Ha efeitos secundarios?"
        },
        {
          "speaker": "Pharmacist",
          "en": "You might feel a little drowsy.",
          "ru": "Вы можете почувствовать небольшую сонливость.",
          "pt": "Pode sentir-se um pouco sonolento.",
          "ruPron": "Vy mozhete pochuvstvovat nebolshuyu sonlivost.",
          "ptPron": "Pode sentir-se um pouco sonolento."
        },
        {
          "speaker": "Customer",
          "en": "Can I take this with other medication?",
          "ru": "Можно принимать это с другими лекарствами?",
          "pt": "Posso tomar isto com outros medicamentos?",
          "ruPron": "Mozhno prinimat eto s drugimi lekarstvami?",
          "ptPron": "Posso tomar isto com outros medicamentos?"
        },
        {
          "speaker": "Pharmacist",
          "en": "Let me check your other medications first.",
          "ru": "Дайте я сначала проверю ваши другие лекарства.",
          "pt": "Deixe-me verificar primeiro os seus outros medicamentos.",
          "ruPron": "Dayte ya snachala proveryu vashi drugiye lekarstva.",
          "ptPron": "Deishe-me verificar primeiro os seus outros medicamentos."
        },
        {
          "speaker": "Customer",
          "en": "Of course, thank you.",
          "ru": "Конечно, спасибо.",
          "pt": "Claro, obrigado.",
          "ruPron": "Konechno, spasibo.",
          "ptPron": "Claro, obrigado."
        }
      ]
    },
    {
      "title": "Buying items for a child",
      "lines": [
        {
          "speaker": "Customer",
          "en": "This is for my child, do you have band-aids?",
          "ru": "Это для моего ребёнка, у вас есть пластыри?",
          "pt": "Isto é para o meu filho, tem pensos rápidos?",
          "ruPron": "Eto dlya moyego rebyonka, u vas yest plastyri?",
          "ptPron": "Isto e para o meu filyo, tem pensos rapidos?"
        },
        {
          "speaker": "Pharmacist",
          "en": "Yes, right here.",
          "ru": "Да, вот здесь.",
          "pt": "Sim, aqui mesmo.",
          "ruPron": "Da, vot zdes.",
          "ptPron": "Sim, aki mesmo."
        },
        {
          "speaker": "Customer",
          "en": "What is the dosage for children for this medicine?",
          "ru": "Какая дозировка для детей для этого лекарства?",
          "pt": "Qual é a dosagem para crianças deste medicamento?",
          "ruPron": "Kakaya dozirovka dlya detey dlya etogo lekarstva?",
          "ptPron": "Qual e a dosazhem para criansas deste medicamento?"
        },
        {
          "speaker": "Pharmacist",
          "en": "Half a teaspoon, twice a day.",
          "ru": "Половина чайной ложки, два раза в день.",
          "pt": "Meia colher de chá, duas vezes por dia.",
          "ruPron": "Polovina chaynoy lozhki, dva raza v den.",
          "ptPron": "Meia colyer de sha, duas vezes por dia."
        },
        {
          "speaker": "Customer",
          "en": "Is this safe for a two-year-old?",
          "ru": "Это безопасно для двухлетнего ребёнка?",
          "pt": "Isto é seguro para uma criança de dois anos?",
          "ruPron": "Eto bezopasno dlya dvukhletnego rebyonka?",
          "ptPron": "Isto e seguro para uma criansa de dois anos?"
        },
        {
          "speaker": "Pharmacist",
          "en": "Yes, it is safe from one year old.",
          "ru": "Да, это безопасно с одного года.",
          "pt": "Sim, é seguro a partir de um ano.",
          "ruPron": "Da, eto bezopasno s odnogo goda.",
          "ptPron": "Sim, e seguro a partir de um ano."
        },
        {
          "speaker": "Customer",
          "en": "Thank you very much.",
          "ru": "Большое спасибо.",
          "pt": "Muito obrigado.",
          "ruPron": "Bolshoye spasibo.",
          "ptPron": "Muito obrigado."
        }
      ]
    }
  ]
};
