import { getSkillColor } from "@/lib/skillColors"

interface SkillBadgeProps {
  skill: string
  className?: string
  variant?: "default" | "outline"
}

export function SkillBadge({ skill, className = "", variant = "default" }: SkillBadgeProps) {
  const color = getSkillColor(skill)
  
  if (variant === "outline") {
    return (
      <div
        className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors ${className}`}
        style={{
          borderColor: color,
          color: color,
          backgroundColor: "transparent",
        }}
      >
        {skill}
      </div>
    )
  }
  
  // Calcula cor de texto (branca ou preta dependendo da luminância)
  const rgb = hexToRgb(color)
  const luminance = (0.299 * rgb.r + 0.587 * rgb.g + 0.114 * rgb.b) / 255
  const textColor = luminance > 0.5 ? "#000000" : "#FFFFFF"
  
  return (
    <div
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors hover:opacity-80 ${className}`}
      style={{
        backgroundColor: color,
        color: textColor,
      }}
    >
      {skill}
    </div>
  )
}

function hexToRgb(hex: string): { r: number; g: number; b: number } {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : { r: 128, g: 128, b: 128 }
}
