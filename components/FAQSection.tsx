"use client"
import { useState } from "react";
import { ChevronRight } from "lucide-react";

function FAQItem({ question, answer, index }: { question: string; answer: string; index: number }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={`border-b border-gray-200 pb-4 animate-fade-in-up`} style={{ animationDelay: `${index * 0.1}s` }}>
      <button
        className="w-full text-left py-4 flex items-center justify-between group hover:text-[#268656] transition-colors duration-300"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-semibold text-gray-900 group-hover:text-[#268656] transition-colors">
          {question}
        </span>
        <div
          className={`w-8 h-8 rounded-full border-2 border-gray-300 group-hover:border-[#268656] flex items-center justify-center transition-all duration-300 ${isOpen ? "bg-[#268656] border-[#268656] rotate-180" : ""}`}
        >
          <ChevronRight
            className={`w-4 h-4 transition-all duration-300 ${isOpen ? "text-white rotate-90" : "text-gray-600 group-hover:text-[#268656]"}`}
          />
        </div>
      </button>

      {isOpen && (
        <div className="pb-4 animate-fade-in-up">
          <p className="text-gray-600 leading-relaxed pl-0">{answer}</p>
        </div>
      )}
    </div>
  )
}

// FAQSection.ts
export function FAQSection() {
  return (
    <section className="py-20 relative overflow-hidden select-none" id="preguntas-frecuentes">
      <div className="absolute inset-0 bg-gradient-to-r from-[#268656]/5 to-[#1f6b4a]/5 animate-gradient-shift-slow"></div>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-6 mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold text-gray-900 animate-text-reveal">Preguntas frecuentes</h2>
            <p className="text-xl text-gray-600">Resolvemos las dudas más comunes sobre Waichatt</p>
          </div>

          <div className="space-y-4">
            {[
              {
                question: "¿Qué diferencia a Waichatt de otras inteligencias artificiales?",
                answer:
                  "Waichatt es la única inteligencia artificial en el mercado capaz de automatizar el flujo de ventas de principio a fin, desde el primer 'hola' hasta el pago final. A diferencia de otras soluciones que solo automatizan partes del proceso y requieren que respondas manualmente a algunos mensajes, Waichatt se encarga de todo el proceso de ventas por mensaje, asegurando eficiencia y resultados.",
              },
              {
                question: "¿Cómo se conecta Waichatt con WhatsApp Business?",
                answer:
                  "Waichatt se integra directamente con la API oficial de WhatsApp Business Cloud, lo que garantiza una conexión segura y estable. Todo funciona desde la nube con la máxima seguridad y disponibilidad 24/7.",
              },
              {
                question: "¿Cuánto cuesta implementar Waichatt en mi negocio?",
                answer:
                  "Ofrecemos planes desde $60/mes para emprendedores hasta soluciones enterprise personalizadas. Todos nuestros planes incluyen la implementación completa sin costos adicionales, soporte técnico y actualizaciones automáticas. El ROI típico se ve en las primeras 4 semanas.",
              },
              {
                question: "¿Qué tan personalizado es mi asistente de IA?",
                answer:
                  "Tu asistente de IA es 100% personalizado para tu negocio. Aprende de tu catálogo de productos, tu forma de comunicarte, tus procesos de venta y se adapta a tu industria específica. Puede manejar consultas complejas, procesar pedidos, agendar citas y mucho más, todo con tu personalidad de marca.",
              },
              {
                question: "¿Waichatt es solo para WhatsApp o maneja otras plataformas?",
                answer:
                  "Aunque nos especializamos en WhatsApp Business, Waichatt también se integra con Instagram, Facebook Messenger, Telegram y más de 50 plataformas adicionales. Puedes gestionar todas tus conversaciones desde un solo CRM unificado.",
              },
              {
                question: "¿La inteligencia artificial entiende audios, fotos y documentos?",
                answer:
                  "Sí, Waichatt puede entender audios, imágenes, documentos o cualquier tipo de archivo multimedia.",
              },
              {
                question: "¿La inteligencia artificial puede enviar fotos o videos?",
                answer:
                  "Sí, Waichatt puede enviar imágenes, videos, documentos, audios y cualquier tipo de archivo multimedia. Puede mostrar tu catálogo de productos con fotos, enviar videos explicativos, comprobantes de pago y todo lo que necesites para cerrar ventas efectivamente.",
              },
              {
                question: "¿Qué pasa si el cliente quiere hablar con una persona real?",
                answer:
                  "Waichatt está diseñado para detectar cuándo un cliente necesita atención humana y puede transferir la conversación automáticamente a tu equipo. También puedes configurar palabras clave específicas que activen esta transferencia, manteniendo siempre la satisfacción del cliente.",
              },
              {
                question: "¿Cuánto tiempo toma implementar Waichatt?",
                answer:
                  "La implementación básica toma entre 24-48 horas. Nuestro equipo se encarga de toda la configuración, entrenamiento de la IA con tu información y pruebas. Para implementaciones enterprise más complejas, el tiempo puede extenderse a 1-2 semanas dependiendo de las integraciones requeridas.",
              },
              {
                question: "¿Que pasa si quiero automatizar diferentes areas de mi empresa?",
                answer:
                  "Se hace una auditoria gratuita para evaluar cuales son las tareas que se repiten, que hacen perder tiempo, y que la ia lo puede hacer. Luego desarrollar una solución a medida para automatizar esos procesos.",
              },
            ].map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

