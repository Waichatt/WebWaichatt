"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type Language = "en" | "es"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

interface LanguageProviderProps {
  children: ReactNode
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguage] = useState<Language>("en")

  const t = (key: string): string => {
    return translations[language][key] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

const translations = {
  en: {
    // Header
    "nav.home": "Home",
    "nav.about": "What is Waichatt",
    "nav.crm": "CRM",
    "nav.plans": "Plans",
    "nav.integrations": "Integrations",
    "header.demo": "Schedule your demo",

    // Hero Section
    "hero.badge": "Advanced Conversational AI",
    "hero.title": "Automate your business with",
    "hero.title.highlight": "conversational AI",
    "hero.subtitle": "CRM, Intelligent Agents and Reports that transform your WhatsApp into a sales machine",
    "hero.demo": "Watch demo",
    "hero.audit": "Schedule your free audit",
    "hero.feature1": "No initial setup",
    "hero.feature2": "24/7 Support",
    "hero.feature3": "Guaranteed ROI",
    "hero.ai.active": "AI Active 🤖",

    // Hero Features (new)
    "hero.feature.sales": "CLOSE COMPLETE SALES",
    "hero.feature.sales.sub": "FROM HELLO TO PAYMENT",
    "hero.feature.respond": "RESPOND AS IF YOU WERE YOU",
    "hero.feature.respond.sub": "LEARN FROM YOUR CATALOG",
    "hero.feature.sell": "SELL UP TO 3X MORE",
    "hero.feature.sell.sub": "OPTIMIZES ITSELF",
    "hero.feature.implement": "WE IMPLEMENT IT FOR YOU",
    "hero.feature.implement.sub": "NO CONFIGURATIONS",

    // Problem Solution Section
    "problem.title": "Tired of losing customers due to slow responses?",
    "problem.subtitle": "Waichatt responds for you, 24/7, learns from every conversation and helps you sell more",
    "problem.attention": "Attention",
    "problem.attention.desc": "Immediate response",
    "problem.sales": "Sales",
    "problem.sales.desc": "Automatic closing",
    "problem.schedule": "Schedule",
    "problem.schedule.desc": "Smart appointments",
    "problem.collection": "Collection",
    "problem.collection.desc": "Active follow-up",
    "problem.reports": "Reports",
    "problem.reports.desc": "Real-time insights",

    // CRM Section
    "crm.badge": "Intelligent CRM",
    "crm.title": "Manage all your conversations from one place",
    "crm.subtitle":
      "Our conversational CRM automatically organizes all your chats, identifies hot leads and helps you not miss any sales opportunity.",
    "crm.feature1": "Automatic conversation tagging",
    "crm.feature2": "Hot lead identification",
    "crm.feature3": "Complete customer history",
    "crm.feature4": "Real-time reports",
    "crm.action": "See CRM in action",
    "crm.integrated": "Integrated with",
    "crm.live": "Live",

    // Pricing Section
    "pricing.title": "Plans designed for your growth",
    "pricing.subtitle": "Scalable, flexible and with message accumulation",
    "pricing.popular": "Most Popular",
    "pricing.starter": "Starter",
    "pricing.starter.target": "Entrepreneurs and small businesses",
    "pricing.starter.messages": "1,000 messages",
    "pricing.pro": "Pro",
    "pricing.pro.target": "Growing companies",
    "pricing.pro.messages": "5,000 messages",
    "pricing.enterprise": "Enterprise",
    "pricing.enterprise.target": "Large companies",
    "pricing.enterprise.messages": "14,000 messages",
    "pricing.custom": "Custom",
    "pricing.custom.target": "Specific solutions",
    "pricing.custom.messages": "Unlimited messages",
    "pricing.contact": "Contact",
    "pricing.start": "Start now",
    "pricing.note": "💡 Unused messages accumulate for the next month",
    "pricing.services.title": "Other services we offer",
    "pricing.service1": "Personal assistants with AI",
    "pricing.service2": "Accounting system + AI",
    "pricing.service3": "Advertising with Meta ADS",
    "pricing.service4": "Data science (Business Intelligence)",
    "pricing.service5": "Automation of any process",
    "pricing.service6": "Customer service agent",
    "pricing.service7": "Agents for digital businesses (WhatsApp, marketing, Meta Ads, automated metrics and alerts)",
    "pricing.service8": "Website Creation",

    // Integrations Section
    "integrations.title": "Integrations that power your ecosystem",
    "integrations.subtitle": "Connect with the tools you already use",

    // FAQ Section
    "faq.title": "Frequently Asked Questions",
    "faq.subtitle": "We resolve the most common doubts about Waichatt",
    "faq.q1": "What differentiates Waichatt from other artificial intelligences?",
    "faq.a1":
      "Waichatt is the only artificial intelligence on the market capable of automating the sales flow from start to finish, from the first 'hello' to the final payment. Unlike other solutions that only automate parts of the process and require you to manually respond to some messages, Waichatt handles the entire sales process by message, ensuring efficiency and results.",
    "faq.q2": "How does Waichatt connect with WhatsApp Business?",
    "faq.a2":
      "Waichatt integrates directly with the official WhatsApp Business Cloud API, which guarantees a secure and stable connection. You don't need to install additional applications on your phone, everything works from the cloud with maximum security and 24/7 availability.",
    "faq.q3": "How much does it cost to implement Waichatt in my business?",
    "faq.a3":
      "We offer plans from $60/month for entrepreneurs to personalized enterprise solutions. All our plans include complete implementation at no additional cost, technical support and automatic updates. Typical ROI is seen within the first 4 weeks.",
    "faq.q4": "How personalized is my AI assistant?",
    "faq.a4":
      "Your AI assistant is 100% customized for your business. It learns from your product catalog, your way of communicating, your sales processes and adapts to your specific industry. It can handle complex queries, process orders, schedule appointments and much more, all with your brand personality.",
    "faq.q5": "Is Waichatt only for WhatsApp or does it handle other platforms?",
    "faq.a5":
      "Although we specialize in WhatsApp Business, Waichatt also integrates with Instagram, Facebook Messenger, Telegram and more than 50 additional platforms. You can manage all your conversations from a single unified CRM.",
    "faq.q6": "Can artificial intelligence send photos or videos?",
    "faq.a6":
      "Yes, Waichatt can send images, videos, documents, audios and any type of multimedia file. It can show your product catalog with photos, send explanatory videos, payment receipts and everything you need to close sales effectively.",
    "faq.q7": "What happens if the customer wants to talk to a real person?",
    "faq.a7":
      "Waichatt is designed to detect when a customer needs human attention and can automatically transfer the conversation to your team. You can also configure specific keywords that trigger this transfer, always maintaining customer satisfaction.",
    "faq.q8": "How long does it take to implement Waichatt?",
    "faq.a8":
      "Basic implementation takes 24-48 hours. Our team handles all configuration, AI training with your information and testing. For more complex enterprise implementations, time can extend to 1-2 weeks depending on required integrations.",

    // CTA Section
    "cta.title": "Want to see how it would work in your business?",
    "cta.subtitle": "Schedule a personalized demo and discover the potential of conversational AI for your company",
    "cta.demo": "Schedule demo",
    "cta.audit": "Request audit",

    // Footer
    "footer.tagline": "Intelligent automation for the future of your business",
    "footer.navigation": "Navigation",
    "footer.services": "Services",
    "footer.contact": "Contact",
    "footer.service1": "Personal assistants with AI",
    "footer.service2": "Accounting system + AI",
    "footer.service3": "Advertising with Meta Ads",
    "footer.service4": "Data science",
    "footer.support": "24/7 Support",
    "footer.demo": "Personalized demo",
    "footer.rights": "© 2024 Waichatt. All rights reserved.",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms",
  },
  es: {
    // Header
    "nav.home": "Inicio",
    "nav.about": "Qué es Waichatt",
    "nav.crm": "CRM",
    "nav.plans": "Planes",
    "nav.integrations": "Integraciones",
    "header.demo": "Agendá tu demo",

    // Hero Section
    "hero.badge": "IA Conversacional Avanzada",
    "hero.title": "Automatizá tu negocio con",
    "hero.title.highlight": "IA conversacional",
    "hero.subtitle": "CRM, Agentes Inteligentes y Reportes que transforman tu WhatsApp en una máquina de ventas",
    "hero.demo": "Ver demo",
    "hero.audit": "Agenda gratis tu auditoría",
    "hero.feature1": "Sin setup inicial",
    "hero.feature2": "Soporte 24/7",
    "hero.feature3": "ROI garantizado",
    "hero.ai.active": "IA Activa 🤖",

    // Hero Features (new)
    "hero.feature.sales": "CIERRA VENTAS COMPLETAS",
    "hero.feature.sales.sub": "DESDE EL HOLA HASTA EL PAGO",
    "hero.feature.respond": "RESPONDE COMO SI FUERAS VOS",
    "hero.feature.respond.sub": "APRENDE DE TU CATÁLOGO",
    "hero.feature.sell": "VENDÉ HASTA 3X MÁS",
    "hero.feature.sell.sub": "SE OPTIMIZA SOLO",
    "hero.feature.implement": "LO IMPLEMENTAMOS POR VOS",
    "hero.feature.implement.sub": "SIN CONFIGURACIONES",

    // Problem Solution Section
    "problem.title": "¿Cansado de perder clientes por respuestas lentas?",
    "problem.subtitle": "Waichatt responde por vos, 24/7, aprende de cada conversación y te ayuda a vender más",
    "problem.attention": "Atención",
    "problem.attention.desc": "Respuesta inmediata",
    "problem.sales": "Venta",
    "problem.sales.desc": "Cierre automático",
    "problem.schedule": "Agenda",
    "problem.schedule.desc": "Citas inteligentes",
    "problem.collection": "Cobranza",
    "problem.collection.desc": "Seguimiento activo",
    "problem.reports": "Reportes",
    "problem.reports.desc": "Insights en tiempo real",

    // CRM Section
    "crm.badge": "CRM Inteligente",
    "crm.title": "Gestiona todas tus conversaciones desde un solo lugar",
    "crm.subtitle":
      "Nuestro CRM conversacional organiza automáticamente todos tus chats, identifica leads calientes y te ayuda a no perder ninguna oportunidad de venta.",
    "crm.feature1": "Etiquetado automático de conversaciones",
    "crm.feature2": "Identificación de leads calientes",
    "crm.feature3": "Historial completo de cada cliente",
    "crm.feature4": "Reportes en tiempo real",
    "crm.action": "Ver CRM en acción",
    "crm.integrated": "Integrado con",
    "crm.live": "En Vivo",

    // Pricing Section
    "pricing.title": "Planes diseñados para tu crecimiento",
    "pricing.subtitle": "Escalable, flexible y con acumulación de mensajes",
    "pricing.popular": "Más Popular",
    "pricing.starter": "Starter",
    "pricing.starter.target": "Emprendedores y pequeños negocios",
    "pricing.starter.messages": "1,000 mensajes",
    "pricing.pro": "Pro",
    "pricing.pro.target": "Empresas en crecimiento",
    "pricing.pro.messages": "5,000 mensajes",
    "pricing.enterprise": "Enterprise",
    "pricing.enterprise.target": "Grandes empresas",
    "pricing.enterprise.messages": "14,000 mensajes",
    "pricing.custom": "Personalizado",
    "pricing.custom.target": "Soluciones específicas",
    "pricing.custom.messages": "Mensajes ilimitados",
    "pricing.contact": "Contactar",
    "pricing.start": "Comenzar ahora",
    "pricing.note": "💡 Los mensajes no utilizados se acumulan para el siguiente mes",
    "pricing.services.title": "Otros servicios que ofrecemos",
    "pricing.service1": "Asistentes personales con IA",
    "pricing.service2": "Sistema contable + IA",
    "pricing.service3": "Publicidad con Meta ADS",
    "pricing.service4": "Ciencia de datos (Business Intelligence)",
    "pricing.service5": "Automatización de cualquier proceso",
    "pricing.service6": "Agente de atención al público",
    "pricing.service7":
      "Agentes para negocios digitales (WhatsApp, marketing, Meta Ads, métricas y alertas automatizadas)",
    "pricing.service8": "Creación de Sitios Web",

    // Integrations Section
    "integrations.title": "Integraciones que potencian tu ecosistema",
    "integrations.subtitle": "Conecta con las herramientas que ya usas",

    // FAQ Section
    "faq.title": "Preguntas frecuentes",
    "faq.subtitle": "Resolvemos las dudas más comunes sobre Waichatt",
    "faq.q1": "¿Qué diferencia a Waichatt de otras inteligencias artificiales?",
    "faq.a1":
      "Waichatt es la única inteligencia artificial en el mercado capaz de automatizar el flujo de ventas de principio a fin, desde el primer 'hola' hasta el pago final. A diferencia de otras soluciones que solo automatizan partes del proceso y requieren que respondas manualmente a algunos mensajes, Waichatt se encarga de todo el proceso de ventas por mensaje, asegurando eficiencia y resultados.",
    "faq.q2": "¿Cómo se conecta Waichatt con WhatsApp Business?",
    "faq.a2":
      "Waichatt se integra directamente con la API oficial de WhatsApp Business Cloud, lo que garantiza una conexión segura y estable. No necesitas instalar aplicaciones adicionales en tu teléfono, todo funciona desde la nube con la máxima seguridad y disponibilidad 24/7.",
    "faq.q3": "¿Cuánto cuesta implementar Waichatt en mi negocio?",
    "faq.a3":
      "Ofrecemos planes desde $60/mes para emprendedores hasta soluciones enterprise personalizadas. Todos nuestros planes incluyen la implementación completa sin costos adicionales, soporte técnico y actualizaciones automáticas. El ROI típico se ve en las primeras 4 semanas.",
    "faq.q4": "¿Qué tan personalizado es mi asistente de IA?",
    "faq.a4":
      "Tu asistente de IA es 100% personalizado para tu negocio. Aprende de tu catálogo de productos, tu forma de comunicarte, tus procesos de venta y se adapta a tu industria específica. Puede manejar consultas complejas, procesar pedidos, agendar citas y mucho más, todo con tu personalidad de marca.",
    "faq.q5": "¿Waichatt es solo para WhatsApp o maneja otras plataformas?",
    "faq.a5":
      "Aunque nos especializamos en WhatsApp Business, Waichatt también se integra con Instagram, Facebook Messenger, Telegram y más de 50 plataformas adicionales. Puedes gestionar todas tus conversaciones desde un solo CRM unificado.",
    "faq.q6": "¿La inteligencia artificial puede enviar fotos o videos?",
    "faq.a6":
      "Sí, Waichatt puede enviar imágenes, videos, documentos, audios y cualquier tipo de archivo multimedia. Puede mostrar tu catálogo de productos con fotos, enviar videos explicativos, comprobantes de pago y todo lo que necesites para cerrar ventas efectivamente.",
    "faq.q7": "¿Qué pasa si el cliente quiere hablar con una persona real?",
    "faq.a7":
      "Waichatt está diseñado para detectar cuándo un cliente necesita atención humana y puede transferir la conversación automáticamente a tu equipo. También puedes configurar palabras clave específicas que activen esta transferencia, manteniendo siempre la satisfacción del cliente.",
    "faq.q8": "¿Cuánto tiempo toma implementar Waichatt?",
    "faq.a8":
      "La implementación básica toma entre 24-48 horas. Nuestro equipo se encarga de toda la configuración, entrenamiento de la IA con tu información y pruebas. Para implementaciones enterprise más complejas, el tiempo puede extenderse a 1-2 semanas dependiendo de las integraciones requeridas.",

    // CTA Section
    "cta.title": "¿Querés ver cómo funcionaría en tu negocio?",
    "cta.subtitle": "Agenda una demo personalizada y descubre el potencial de la IA conversacional para tu empresa",
    "cta.demo": "Agendar demo",
    "cta.audit": "Solicitar auditoría",

    // Footer
    "footer.tagline": "Automatización inteligente para el futuro de tu negocio",
    "footer.navigation": "Navegación",
    "footer.services": "Servicios",
    "footer.contact": "Contacto",
    "footer.service1": "Asistentes personales con IA",
    "footer.service2": "Sistema contable + IA",
    "footer.service3": "Publicidad con Meta Ads",
    "footer.service4": "Ciencia de datos",
    "footer.support": "Soporte 24/7",
    "footer.demo": "Demo personalizada",
    "footer.rights": "© 2024 Waichatt. Todos los derechos reservados.",
    "footer.privacy": "Políticas de privacidad",
    "footer.terms": "Términos",
  },
}
