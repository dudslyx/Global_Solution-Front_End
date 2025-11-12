// Mapeamento de cores para cada habilidade técnica (inspirado no GitHub)
export const skillColorMap: Record<string, string> = {
  // Linguagens de Programação
  "JavaScript": "#F7DF1E",
  "TypeScript": "#3178C6",
  "Python": "#3776AB",
  "Java": "#007396",
  "C#": "#239120",
  "C++": "#00599C",
  "Go": "#00ADD8",
  "Rust": "#CE422B",
  "PHP": "#777BB4",
  "Ruby": "#CC342D",
  
  // Frontend
  "React": "#61DAFB",
  "Vue.js": "#4FC08D",
  "Angular": "#DD0031",
  "Svelte": "#FF3E00",
  "Next.js": "#000000",
  "Nuxt": "#00DC82",
  "HTML": "#E34C26",
  "CSS": "#563D7C",
  "Tailwind": "#06B6D4",
  "Bootstrap": "#7952B3",
  
  // Backend
  "Node.js": "#339933",
  "Express": "#000000",
  "Django": "#092E20",
  "Flask": "#000000",
  "Spring": "#6DB33F",
  ".NET": "#512BD4",
  "Laravel": "#FF2D20",
  "FastAPI": "#009688",
  
  // Bancos de Dados
  "PostgreSQL": "#336791",
  "MySQL": "#00758F",
  "MongoDB": "#13AA52",
  "Redis": "#DC382D",
  "Firebase": "#FFCA28",
  "SQLite": "#003B57",
  "Elasticsearch": "#005571",
  
  // DevOps & Cloud
  "AWS": "#FF9900",
  "Azure": "#0078D4",
  "Google Cloud": "#4285F4",
  "Docker": "#2496ED",
  "Kubernetes": "#326CE5",
  "Git": "#F05032",
  "GitHub": "#181717",
  "GitLab": "#FC6D26",
  "Jenkins": "#D24939",
  "CI/CD": "#2E3440",
  
  // Outras Tecnologias
  "Linux": "#FCC624",
  "Windows": "#0078D4",
  "macOS": "#000000",
  "GraphQL": "#E10098",
  "REST API": "#009688",
  "WebSocket": "#010101",
  "Microserviços": "#1F6FEB",
  "SOA": "#FF6B6B",
  "Agile": "#FF6B35",
  "Scrum": "#2C3E50",
  
  // Mobile
  "React Native": "#61DAFB",
  "Flutter": "#02569B",
  "Swift": "#FA7343",
  "Kotlin": "#7F52FF",
  "Android": "#3DDC84",
  "iOS": "#000000",
  
  // Padrões e Arquitetura
  "MVC": "#2E86DE",
  "MVVM": "#A4DE6C",
  "Clean Architecture": "#F38181",
  "DDD": "#9D84B7",
  "TDD": "#5DADE2",
  "OOP": "#F39C12",
  "Funcional": "#E74C3C",
  
  // Ferramentas
  "VS Code": "#007ACC",
  "IntelliJ": "#000000",
  "Figma": "#F24E1E",
  "Jira": "#0052CC",
  "Slack": "#36C5F0",
  "Postman": "#FF6C37",
  "Webpack": "#8DD6F9",
  "Vite": "#646CFF",
  "npm": "#CB3837",
  "yarn": "#2C8EBB",
}

export const getSkillColor = (skill: string): string => {
  // Tenta encontro exato
  if (skillColorMap[skill]) {
    return skillColorMap[skill]
  }
  
  // Tenta encontro case-insensitive
  const skillLower = skill.toLowerCase()
  for (const [key, color] of Object.entries(skillColorMap)) {
    if (key.toLowerCase() === skillLower) {
      return color
    }
  }
  
  // Se não encontrar, gera uma cor baseada no hash da string
  const hash = skill.split('').reduce((acc, char) => {
    return ((acc << 5) - acc) + char.charCodeAt(0)
  }, 0)
  
  const hue = Math.abs(hash) % 360
  return `hsl(${hue}, 70%, 50%)`
}
