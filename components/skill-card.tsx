"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface SkillCardProps {
  name: string
  icon: string
  category: string
}

export function SkillCard({ name, icon, category }: SkillCardProps) {
  // Check if icon string looks like an image file path
  const isImage = /\.(svg|png|jpg|jpeg|webp|gif)$/i.test(icon)

  return (
    <motion.div whileHover={{ scale: 1.05, y: -5 }} className="flex-shrink-0 w-48 mx-3">
      <Card className="h-32 hover:shadow-lg transition-all bg-background/50 backdrop-blur-sm border-2 hover:border-primary/50">
        <CardContent className="flex flex-col items-center justify-center h-full p-4">
          <div className="mb-2">
            {isImage ? (
              <img
                src={icon.startsWith("/") ? icon : `/${icon}`}
                alt={`${name} icon`}
                className="w-12 h-12 object-contain mx-auto"
                loading="lazy"
              />
            ) : (
              <span className="text-4xl">{icon}</span>
            )}
          </div>
          <h3 className="font-semibold text-sm text-center">{name}</h3>
          <Badge variant="secondary" className="mt-1 text-xs">
            {category}
          </Badge>
        </CardContent>
      </Card>
    </motion.div>
  )
}
