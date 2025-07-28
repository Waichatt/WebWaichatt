"use client"

import { useState } from "react"
import { ChevronRight } from "lucide-react"

interface FAQItemProps {
  question: string
  answer: string
  index: number
}

export function FAQItem({ question, answer, index }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false)

  const handleToggle = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    console.log(`Toggling FAQ item ${index}:`, !isOpen) // Debug log
    setIsOpen(!isOpen)
  }

  return (
    <div className="border-b border-gray-200 pb-4">
      <button
        type="button"
        className="w-full text-left py-4 flex items-center justify-between group hover:text-[#268656] transition-colors duration-300 cursor-pointer"
        onClick={handleToggle}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${index}`}
      >
        <span className="text-lg font-semibold text-gray-900 group-hover:text-[#268656] transition-colors">
          {question}
        </span>
        <div
          className={`w-8 h-8 rounded-full border-2 border-gray-300 group-hover:border-[#268656] flex items-center justify-center transition-all duration-300 ${
            isOpen ? "bg-[#268656] border-[#268656]" : ""
          }`}
        >
          <ChevronRight
            className={`w-4 h-4 transition-transform duration-300 ${
              isOpen ? "text-white rotate-90" : "text-gray-600 group-hover:text-[#268656]"
            }`}
          />
        </div>
      </button>

      <div
        id={`faq-answer-${index}`}
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="py-4 px-4 mt-2 bg-gray-50 rounded-lg">
          <p className="text-gray-600 leading-relaxed">{answer}</p>
        </div>
      </div>
    </div>
  )
}