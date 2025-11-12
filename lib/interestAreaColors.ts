// Mapeamento de cores para Áreas de Interesse (com padrões por categoria)
export const interestAreaColorMap: Record<string, string> = {
  // IA e Machine Learning - Tons de Roxo/Violeta
  "IA": "#7C3AED",
  "Inteligência Artificial": "#7C3AED",
  "Machine Learning": "#A78BFA",
  "Deep Learning": "#8B5CF6",
  "Neural Networks": "#9333EA",
  "NLP": "#6D28D9",
  
  // Cloud Computing - Tons de Azul
  "Cloud Computing": "#3B82F6",
  "AWS": "#FF9900",
  "Azure": "#0078D4",
  "Google Cloud": "#4285F4",
  "Computação em Nuvem": "#2563EB",
  "Serverless": "#1D4ED8",
  
  // Arquitetura e Design - Tons de Laranja/Âmbar
  "Arquitetura de Software": "#F97316",
  "Design Patterns": "#FB923C",
  "Microserviços": "#EA580C",
  "Arquitetura": "#D97706",
  "System Design": "#DC2626",
  
  // DevOps e Infraestrutura - Tons de Vermelho
  "DevOps": "#EF4444",
  "Docker": "#DC2626",
  "Kubernetes": "#991B1B",
  "CI/CD": "#7F1D1D",
  "Infraestrutura": "#B91C1C",
  
  // Web Development - Tons de Verde
  "Web Development": "#16A34A",
  "Frontend": "#22C55E",
  "Backend": "#15803D",
  "Full Stack": "#4ADE80",
  "Desenvolvimento Web": "#059669",
  
  // Mobile Development - Tons de Ciano
  "Mobile Development": "#06B6D4",
  "iOS": "#0891B2",
  "Android": "#0E7490",
  "React Native": "#067E8C",
  "Flutter": "#164E63",
  
  // Banco de Dados - Tons de Indigo
  "Banco de Dados": "#4F46E5",
  "NoSQL": "#6366F1",
  "SQL": "#4338CA",
  "Big Data": "#3730A3",
  "Data Engineering": "#312E81",
  
  // Segurança - Tons de Rosa/Vermelho
  "Segurança": "#EC4899",
  "Cybersecurity": "#DB2777",
  "Segurança da Informação": "#F43F5E",
  "Criptografia": "#E11D48",
  
  // Qualidade e Testes - Tons de Amarelo
  "QA": "#EAB308",
  "Testes": "#FBBF24",
  "TDD": "#F59E0B",
  "Automação de Testes": "#D97706",
  
  // Dados e Analytics - Tons de Roxo Claro
  "Data Science": "#A855F7",
  "Analytics": "#D8B4FE",
  "Business Intelligence": "#C084FC",
  "Análise de Dados": "#E879F9",
  
  // Metodologias - Tons de Azul Claro
  "Agile": "#0EA5E9",
  "Scrum": "#06B6D4",
  "Metodologias": "#67E8F9",
  "Metodologia Ágil": "#164E63",
}

export const getInterestAreaColor = (area: string): string => {
  // Tenta encontro exato
  if (interestAreaColorMap[area]) {
    return interestAreaColorMap[area]
  }
  
  // Tenta encontro case-insensitive
  const areaLower = area.toLowerCase()
  for (const [key, color] of Object.entries(interestAreaColorMap)) {
    if (key.toLowerCase() === areaLower) {
      return color
    }
  }
  
  // Se não encontrar, gera uma cor baseada no hash da string
  const hash = area.split('').reduce((acc, char) => {
    return ((acc << 5) - acc) + char.charCodeAt(0)
  }, 0)
  
  const hue = Math.abs(hash) % 360
  return `hsl(${hue}, 70%, 50%)`
}
