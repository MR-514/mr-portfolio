"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export function TypewriterText() {
  const [currentText, setCurrentText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [textIndex, setTextIndex] = useState(0)

  const texts = ["A Web Developer", "An AI Engineer"]

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        const current = texts[textIndex]

        if (isDeleting) {
          setCurrentText(current.substring(0, currentIndex - 1))
          setCurrentIndex(currentIndex - 1)

          if (currentIndex === 0) {
            setIsDeleting(false)
            setTextIndex((textIndex + 1) % texts.length)
          }
        } else {
          setCurrentText(current.substring(0, currentIndex + 1))
          setCurrentIndex(currentIndex + 1)

          if (currentIndex === current.length) {
            setTimeout(() => setIsDeleting(true), 2000)
          }
        }
      },
      isDeleting ? 100 : 150,
    )

    return () => clearTimeout(timeout)
  }, [currentText, currentIndex, isDeleting, textIndex, texts])

  return (
    <span className="text-primary relative">
      {currentText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
        className="inline-block w-0.5 h-8 bg-primary ml-1"
      />
    </span>
  )
}
