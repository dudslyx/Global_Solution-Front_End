// Paletas de cores centralizadas por categoria
export const colorPalettes = {
  // IA e Machine Learning - Roxo/Violeta
  ai: {
    name: "IA & Machine Learning",
    color: "#7C3AED",
    light: "#EDE9FE",
    textColor: "#FFFFFF",
  },
  
  // Cloud Computing - Azul
  cloud: {
    name: "Cloud Computing",
    color: "#3B82F6",
    light: "#DBEAFE",
    textColor: "#FFFFFF",
  },
  
  // Arquitetura - Laranja
  architecture: {
    name: "Arquitetura",
    color: "#F97316",
    light: "#FFEDD5",
    textColor: "#FFFFFF",
  },
  
  // DevOps - Vermelho
  devops: {
    name: "DevOps",
    color: "#EF4444",
    light: "#FEE2E2",
    textColor: "#FFFFFF",
  },
  
  // Web Development - Verde
  web: {
    name: "Web Development",
    color: "#16A34A",
    light: "#DCFCE7",
    textColor: "#FFFFFF",
  },
  
  // Mobile - Ciano
  mobile: {
    name: "Mobile",
    color: "#06B6D4",
    light: "#CFFAFE",
    textColor: "#FFFFFF",
  },
  
  // Banco de Dados - Indigo
  database: {
    name: "Banco de Dados",
    color: "#4F46E5",
    light: "#E0E7FF",
    textColor: "#FFFFFF",
  },
  
  // Segurança - Rosa
  security: {
    name: "Segurança",
    color: "#EC4899",
    light: "#FCE7F3",
    textColor: "#FFFFFF",
  },
  
  // QA/Testes - Amarelo
  qa: {
    name: "QA & Testes",
    color: "#EAB308",
    light: "#FEF08A",
    textColor: "#000000",
  },
  
  // Data Science - Roxo Claro
  data: {
    name: "Data Science",
    color: "#A855F7",
    light: "#F3E8FF",
    textColor: "#FFFFFF",
  },
  
  // Metodologias - Azul Claro
  agile: {
    name: "Metodologias",
    color: "#0EA5E9",
    light: "#E0F2FE",
    textColor: "#FFFFFF",
  },
}

export const getPaletteByArea = (area: string): string => {
  const areaLower = area.toLowerCase()
  
  if (areaLower.includes("desenvolvim") || areaLower.includes("frontend") || areaLower.includes("backend") || areaLower.includes("full stack")) {
    return colorPalettes.web.color
  }
  if (areaLower.includes("ia") || areaLower.includes("inteligência") || areaLower.includes("machine") || areaLower.includes("deep")) {
    return colorPalettes.ai.color
  }
  if (areaLower.includes("cloud") || areaLower.includes("aws") || areaLower.includes("azure") || areaLower.includes("gcp")) {
    return colorPalettes.cloud.color
  }
  if (areaLower.includes("arquitetura") || areaLower.includes("design") || areaLower.includes("microserviço")) {
    return colorPalettes.architecture.color
  }
  if (areaLower.includes("devops") || areaLower.includes("docker") || areaLower.includes("kubernetes")) {
    return colorPalettes.devops.color
  }
  if (areaLower.includes("mobile") || areaLower.includes("ios") || areaLower.includes("android")) {
    return colorPalettes.mobile.color
  }
  if (areaLower.includes("banco") || areaLower.includes("database") || areaLower.includes("sql") || areaLower.includes("nosql")) {
    return colorPalettes.database.color
  }
  if (areaLower.includes("segurança") || areaLower.includes("security") || areaLower.includes("crypto")) {
    return colorPalettes.security.color
  }
  if (areaLower.includes("qa") || areaLower.includes("teste") || areaLower.includes("test")) {
    return colorPalettes.qa.color
  }
  if (areaLower.includes("data") || areaLower.includes("science") || areaLower.includes("analytics")) {
    return colorPalettes.data.color
  }
  if (areaLower.includes("agile") || areaLower.includes("scrum") || areaLower.includes("metodologia")) {
    return colorPalettes.agile.color
  }
  
  return colorPalettes.web.color // cor padrão
}
