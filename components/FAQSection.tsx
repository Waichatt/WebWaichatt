"use client"

import { FAQItem } from "@/components/FAQItem"
import { useLanguage } from "@/contexts/LanguageContext"

export function FAQSection() {
  const { t } = useLanguage()

  const faqData = [
    {
      id: "q1",
      question: t("faq.q1"),
      answer: t("faq.a1"),
    },
    {
      id: "q2",
      question: t("faq.q2"),
      answer: t("faq.a2"),
    },
    {
      id: "q3",
      question: t("faq.q3"),
      answer: t("faq.a3"),
    },
    {
      id: "q4",
      question: t("faq.q4"),
      answer: t("faq.a4"),
    },
    {
      id: "q5",
      question: t("faq.q5"),
      answer: t("faq.a5"),
    },
    {
      id: "q6",
      question: t("faq.q6"),
      answer: t("faq.a6"),
    },
    {
      id: "q7",
      question: t("faq.q7"),
      answer: t("faq.a7"),
    },
    {
      id: "q8",
      question: t("faq.q8"),
      answer: t("faq.a8"),
    },
  ]

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#268656]/5 to-[#1f6b4a]/5 animate-gradient-shift-slow"></div>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-6 mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold text-gray-900 animate-text-reveal">{t("faq.title")}</h2>
            <p className="text-xl text-gray-600">{t("faq.subtitle")}</p>
          </div>

          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <FAQItem 
                key={faq.id} 
                question={faq.question} 
                answer={faq.answer} 
                index={index} 
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}