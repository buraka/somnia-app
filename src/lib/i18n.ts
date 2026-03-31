export type Locale = "en" | "tr" | "es";

export const translations = {
  en: {
    nav: {
      features: "Features",
      howItWorks: "How It Works",
      download: "Download",
      getApp: "Get the App",
    },
    hero: {
      badge: "Now available on iOS & Apple Watch",
      title1: "Your dreams,",
      title2: "decoded three ways",
      subtitle:
        "Speak your dream before it fades. Morpheo analyzes it through Psychology, Jungian, and Mythological lenses — then maps your symbols over time.",
      cta: "Download Free",
      cta2: "Watch Demo",
      videoSrc: "/morpheo-app/preview-en.mp4",
    },
    features: {
      label: "Features",
      title: "Everything your subconscious deserves",
      items: [
        {
          icon: "🎙️",
          title: "Voice-First Capture",
          description:
            "Open your eyes, tap record. Morpheo transcribes your dream in real-time before it fades away. No typing needed — just speak naturally.",
        },
        {
          icon: "🧠",
          title: "Three-Lens AI Analysis",
          description:
            "Every dream interpreted through three perspectives: Modern Psychology, Jungian archetypes, and Mythological symbolism. No other app does this.",
        },
        {
          icon: "🗺️",
          title: "Personal Symbol Map",
          description:
            "Watch your symbol network grow with every dream. Morpheo connects recurring themes, emotions, and archetypes — revealing patterns you never noticed.",
        },
        {
          icon: "⌚",
          title: "Apple Watch",
          description:
            "Log dreams right from your wrist before you even pick up your phone. Capture every detail in the half-awake moment.",
        },
        {
          icon: "🔒",
          title: "Completely Private",
          description:
            "All data encrypted on-device with iCloud sync. Your dreams stay yours — always.",
        },
      ],
    },
    howItWorks: {
      label: "How It Works",
      title: "Three steps to clarity",
      steps: [
        {
          title: "Wake & Speak",
          description:
            "The moment you open your eyes, tap record. Morpheo captures every detail in your natural voice before the dream fades.",
        },
        {
          title: "AI Interprets",
          description:
            "Advanced AI analyzes symbols, emotions, and recurring patterns. Each dream gets a personalized, in-depth interpretation.",
        },
        {
          title: "Discover Yourself",
          description:
            "Watch your dream map grow. Uncover connections between dreams, track emotional trends, and understand your subconscious.",
        },
      ],
    },
    cta: {
      title1: "Your next dream could mean",
      title2: "everything",
      subtitle: "Start understanding your subconscious tonight.",
      appStore: "Download on the",
      appStoreName: "App Store",
      watchLabel: "Also on",
      watchName: "Apple Watch",
      androidTitle: "Android Coming Soon",
      androidSubtitle: "Get notified when Morpheo launches on Android.",
      androidButton: "Notify Me",
      androidSuccess: "You're on the list! We'll notify you.",
    },
    blog: {
      title: "Blog",
      readMore: "Read more",
      backToBlog: "All Posts",
      dreamMeaning: "Dream Meanings",
      guide: "Guides",
      psychology: "Psychology",
      subtitle: "Explore the science and meaning behind your dreams",
      ctaTitle: "Start recording your dreams today",
      ctaText: "Morpheo captures your dreams with voice recording and provides AI-powered analysis. Download free on iOS.",
      ctaButton: "Download Morpheo",
    },
    footer: {
      tagline: "Your AI-powered dream journal for iOS & Apple Watch.",
      app: "App",
      download: "Download",
      features: "Features",
      legal: "Legal",
      privacyPolicy: "Privacy Policy",
      terms: "Terms of Use",
      support: "Support",
      contact: "Contact",
      sendEmail: "Send Email",
      rights: "All rights reserved.",
    },
  },
  tr: {
    nav: {
      features: "Özellikler",
      howItWorks: "Nasıl Çalışır",
      download: "İndir",
      getApp: "Uygulamayı İndir",
    },
    hero: {
      badge: "iOS ve Apple Watch'ta yayında",
      title1: "Rüyalarınız,",
      title2: "üç farklı gözle çözüldü",
      subtitle:
        "Uyanır uyanmaz rüyanızı anlatın. Morpheo Psikoloji, Jungyen ve Mitoloji perspektiflerinden yorumlar — sembollerinizi zamanla haritalandırır.",
      cta: "Ücretsiz İndir",
      cta2: "Demoyu İzle",
      videoSrc: "/morpheo-app/preview-tr.mp4",
    },
    features: {
      label: "Özellikler",
      title: "Bilinçaltınızın hak ettiği her şey",
      items: [
        {
          icon: "🎙️",
          title: "Sesle Kayıt",
          description:
            "Gözlerinizi açın, kayda basın. Morpheo rüyanızı kaybolmadan gerçek zamanlı olarak yazıya döker. Yazmaya gerek yok — sadece doğal konuşun.",
        },
        {
          icon: "🧠",
          title: "Üç Bakış Açılı AI Analizi",
          description:
            "Her rüya üç perspektiften yorumlanır: Modern Psikoloji, Jungyen arketipler ve Mitolojik sembolizm. Bunu yapan başka uygulama yok.",
        },
        {
          icon: "🗺️",
          title: "Kişisel Sembol Haritası",
          description:
            "Her rüyayla sembol ağınızın büyümesini izleyin. Morpheo tekrarlayan temaları, duyguları ve arketipleri birbirine bağlar.",
        },
        {
          icon: "⌚",
          title: "Apple Watch",
          description:
            "Telefonunuza uzanmadan bileğinizden rüya kaydedin. Yarı uyanık anında her detayı yakalayın.",
        },
        {
          icon: "🔒",
          title: "Tamamen Gizli",
          description:
            "Tüm veriler cihazda şifrelenir, iCloud ile senkronize olur. Rüyalarınız her zaman sizin kalır.",
        },
      ],
    },
    howItWorks: {
      label: "Nasıl Çalışır",
      title: "Netliğe üç adım",
      steps: [
        {
          title: "Uyan ve Anlat",
          description:
            "Gözlerinizi açtığınız an kayda basın. Morpheo, rüya solmadan önce doğal sesinizle her detayı yakalar.",
        },
        {
          title: "Yapay Zeka Yorumlar",
          description:
            "Gelişmiş yapay zeka sembolleri, duyguları ve tekrarlayan örüntüleri analiz eder. Her rüya kişiselleştirilmiş, derinlemesine bir yorum alır.",
        },
        {
          title: "Kendini Keşfet",
          description:
            "Rüya haritanızın büyümesini izleyin. Rüyalar arasındaki bağlantıları keşfedin, duygusal eğilimleri takip edin ve bilinçaltınızı anlayın.",
        },
      ],
    },
    cta: {
      title1: "Bir sonraki rüyanız",
      title2: "her şeyi değiştirebilir",
      subtitle: "Bu gece bilinçaltınızı anlamaya başlayın.",
      appStore: "Şuradan indirin:",
      appStoreName: "App Store",
      watchLabel: "Ayrıca",
      watchName: "Apple Watch",
      androidTitle: "Android Yakında",
      androidSubtitle: "Morpheo Android'e geldiğinde haberdar olun.",
      androidButton: "Haber Ver",
      androidSuccess: "Listedesiniz! Sizi bilgilendireceğiz.",
    },
    blog: {
      title: "Blog",
      readMore: "Devamını oku",
      backToBlog: "Tüm Yazılar",
      dreamMeaning: "Rüya Tabirleri",
      guide: "Rehberler",
      psychology: "Psikoloji",
      subtitle: "Rüyalarınızın arkasındaki bilimi ve anlamı keşfedin",
      ctaTitle: "Rüyalarınızı bugün kaydetmeye başlayın",
      ctaText: "Morpheo rüyalarınızı sesle kaydeder ve yapay zeka destekli analiz sunar. iOS'ta ücretsiz indirin.",
      ctaButton: "Morpheo'yu İndir",
    },
    footer: {
      tagline: "iOS ve Apple Watch için yapay zeka destekli rüya günlüğü.",
      app: "Uygulama",
      download: "İndir",
      features: "Özellikler",
      legal: "Yasal",
      privacyPolicy: "Gizlilik Politikası",
      terms: "Kullanım Koşulları",
      support: "Destek",
      contact: "İletişim",
      sendEmail: "E-posta Gönder",
      rights: "Tüm hakları saklıdır.",
    },
  },
  es: {
    nav: {
      features: "Funciones",
      howItWorks: "Cómo Funciona",
      download: "Descargar",
      getApp: "Obtener App",
    },
    hero: {
      badge: "Disponible en iOS y Apple Watch",
      title1: "Tus sueños,",
      title2: "descifrados de tres formas",
      subtitle:
        "Habla tu sueño antes de que se desvanezca. Morpheo lo analiza desde Psicología, Jungiana y Mitología — y mapea tus símbolos con el tiempo.",
      cta: "Descarga Gratis",
      cta2: "Ver Demo",
      videoSrc: "/morpheo-app/preview-es.mp4",
    },
    features: {
      label: "Funciones",
      title: "Todo lo que tu subconsciente merece",
      items: [
        {
          icon: "🎙️",
          title: "Captura por Voz",
          description:
            "Abre los ojos, toca grabar. Morpheo transcribe tu sueño en tiempo real antes de que se desvanezca. Sin necesidad de escribir — solo habla naturalmente.",
        },
        {
          icon: "🧠",
          title: "Análisis IA con Tres Lentes",
          description:
            "Cada sueño interpretado desde tres perspectivas: Psicología Moderna, arquetipos Jungianos y simbolismo Mitológico. Ninguna otra app hace esto.",
        },
        {
          icon: "🗺️",
          title: "Mapa de Símbolos Personal",
          description:
            "Observa cómo crece tu red de símbolos con cada sueño. Morpheo conecta temas recurrentes, emociones y arquetipos — revelando patrones ocultos.",
        },
        {
          icon: "⌚",
          title: "Apple Watch",
          description:
            "Registra sueños desde tu muñeca sin tocar el teléfono. Captura cada detalle en ese momento entre el sueño y la vigilia.",
        },
        {
          icon: "🔒",
          title: "Completamente Privado",
          description:
            "Todos los datos encriptados en el dispositivo con sincronización iCloud. Tus sueños siempre son tuyos.",
        },
      ],
    },
    howItWorks: {
      label: "Cómo Funciona",
      title: "Tres pasos hacia la claridad",
      steps: [
        {
          title: "Despierta y Habla",
          description:
            "En el momento que abras los ojos, toca grabar. Morpheo captura cada detalle con tu voz natural antes de que el sueño se desvanezca.",
        },
        {
          title: "La IA Interpreta",
          description:
            "La IA avanzada analiza símbolos, emociones y patrones recurrentes. Cada sueño recibe una interpretación personalizada y profunda.",
        },
        {
          title: "Descúbrete",
          description:
            "Observa cómo crece tu mapa de sueños. Descubre conexiones entre sueños, rastrea tendencias emocionales y comprende tu subconsciente.",
        },
      ],
    },
    cta: {
      title1: "Tu próximo sueño podría significar",
      title2: "todo",
      subtitle: "Empieza a entender tu subconsciente esta noche.",
      appStore: "Descárgalo en",
      appStoreName: "App Store",
      watchLabel: "También en",
      watchName: "Apple Watch",
      androidTitle: "Android Próximamente",
      androidSubtitle: "Recibe una notificación cuando Morpheo llegue a Android.",
      androidButton: "Notifícame",
      androidSuccess: "¡Estás en la lista! Te avisaremos.",
    },
    blog: {
      title: "Blog",
      readMore: "Leer más",
      backToBlog: "Todos los Posts",
      dreamMeaning: "Significados",
      guide: "Guías",
      psychology: "Psicología",
      subtitle: "Explora la ciencia y el significado detrás de tus sueños",
      ctaTitle: "Empieza a grabar tus sueños hoy",
      ctaText: "Morpheo captura tus sueños con grabación de voz y análisis con IA. Descarga gratis en iOS.",
      ctaButton: "Descargar Morpheo",
    },
    footer: {
      tagline: "Tu diario de sueños con IA para iOS y Apple Watch.",
      app: "App",
      download: "Descargar",
      features: "Funciones",
      legal: "Legal",
      privacyPolicy: "Política de Privacidad",
      terms: "Términos de Uso",
      support: "Soporte",
      contact: "Contacto",
      sendEmail: "Enviar Email",
      rights: "Todos los derechos reservados.",
    },
  },
} as const;

type DeepStringify<T> = {
  [K in keyof T]: T[K] extends string
    ? string
    : T[K] extends readonly (infer _)[]
    ? DeepStringify<T[K]>
    : DeepStringify<T[K]>;
};

export type Translations = DeepStringify<(typeof translations)["en"]>;
