export const categories = {
  material: "Material de Construção",
  mao_de_obra: "Mão de Obra",
  ferramentas: "Ferramentas",
  eletrica: "Elétrica",
  hidraulica: "Hidráulica",
  pintura: "Pintura",
  acabamento: "Acabamento",
  transporte: "Transporte",
  alimentacao: "Alimentação",
  outros: "Outros"
} as const

export type Categories = typeof categories;
export type CategoryValue = typeof categories[keyof typeof categories];
export type CategoryKey = keyof typeof categories;