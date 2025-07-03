function loadTranslation(lang) {
  const t = {
    "buycrypto": {
      "en": "💳 Where to Buy Crypto?",
      "ru": "💳 Где купить крипту?",
      "pt": "💳 Onde comprar cripto?",
      "tl": "💳 Saan bibili ng crypto?",
      "hi": "💳 क्रिप्टो कहां खरीदें?"
    },
    "welcome": {
      "en": "Welcome to Stake!",
      "ru": "Добро пожаловать на Stake!",
      "pt": "Bem-vindo ao Stake!",
      "tl": "Maligayang pagdating sa Stake!",
      "hi": "Stake में आपका स्वागत है!"
    },
    "cta": {
      "en": "Claim your $10 bonus below",
      "ru": "Получите бонус $10 ниже",
      "pt": "Pegue seu bônus de $10 abaixo",
      "tl": "Kunin ang iyong $10 bonus sa ibaba",
      "hi": "$10 बोनस नीचे प्राप्त करें"
    },
    "play": {
      "en": "🎰 Play on Stake",
      "ru": "🎰 Играть на Stake",
      "pt": "🎰 Jogar no Stake",
      "tl": "🎰 Maglaro sa Stake",
      "hi": "🎰 Stake पर खेलें"
    },
    "telegram": {
      "en": "💬 Write in Telegram",
      "ru": "💬 Напиши в Telegram",
      "pt": "💬 Fale no Telegram",
      "tl": "💬 Sumulat sa Telegram",
      "hi": "💬 Telegram में लिखें"
    },
    "howto": {
      "en": "💳 How to Deposit?",
      "ru": "💳 Как пополнить?",
      "pt": "💳 Como depositar?",
      "tl": "💳 Paano magdeposito?",
      "hi": "💳 जमा कैसे करें?"
    },
    "vpn_notice": {
      "en": "❗ Having trouble? Use VPN: Brazil or Philippines",
      "ru": "❗ Проблемы со входом? Используй VPN: Бразилия или Филиппины",
      "pt": "❗ Problemas? Use VPN: Brasil ou Filipinas",
      "tl": "❗ Problema? Gumamit ng VPN: Brazil o Philippines",
      "hi": "❗ समस्या है? VPN का उपयोग करें: ब्राज़ील या फ़िलीपींस"
    },
    "howto_title": {
      "en": "How to Deposit",
      "ru": "Как пополнить",
      "pt": "Como depositar",
      "tl": "Paano magdeposito",
      "hi": "जमा कैसे करें"
    },
    "step1": {
      "en": "Go to Bybit or Binance",
      "ru": "Зайдите на Bybit или Binance",
      "pt": "Vá para Bybit ou Binance",
      "tl": "Pumunta sa Bybit o Binance",
      "hi": "Bybit या Binance पर जाएं"
    },
    "step2": {
      "en": "Buy crypto with your card",
      "ru": "Купите крипту с карты",
      "pt": "Compre cripto com seu cartão",
      "tl": "Bumili ng crypto gamit ang card",
      "hi": "अपने कार्ड से क्रिप्टो खरीदें"
    },
    "step3": {
      "en": "Send crypto to Stake",
      "ru": "Отправьте крипту на Stake",
      "pt": "Envie cripto para Stake",
      "tl": "Ipadala ang crypto sa Stake",
      "hi": "क्रिप्टो Stake पर भेजें"
    },
    "back": {
      "en": "← Back",
      "ru": "← Назад",
      "pt": "← Voltar",
      "tl": "← Bumalik",
      "hi": "← वापसी"
    }
  };

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    const text = t[key]?.[lang.slice(0, 2)] || t[key]?.["en"];
    if (text) el.textContent = text;
  });
}
