// Para sumar un tema en el futuro, agregalo a este objeto. La interfaz,
// el conversor y los ejercicios lo incorporarán automáticamente.
export const topics = {
  length: {
    name: "Longitud",
    emoji: "📏",
    title: "Medimos distancias",
    example: "5 km = 5.000 m",
    exampleText: "De km a m hay 3 saltos a la derecha: 5 × 10 × 10 × 10 = 5.000.",
    units: [
      { id: "km", name: "kilómetro", factor: 1000 },
      { id: "hm", name: "hectómetro", factor: 100 },
      { id: "dam", name: "decámetro", factor: 10 },
      { id: "m", name: "metro", factor: 1 },
      { id: "dm", name: "decímetro", factor: 0.1 },
      { id: "cm", name: "centímetro", factor: 0.01 },
      { id: "mm", name: "milímetro", factor: 0.001 }
    ]
  },
  capacity: {
    name: "Capacidad",
    emoji: "💧",
    title: "Medimos líquidos",
    example: "2 hl = 200 l",
    exampleText: "De hl a l hay 2 saltos a la derecha: 2 × 10 × 10 = 200.",
    units: [
      { id: "kl", name: "kilolitro", factor: 1000 },
      { id: "hl", name: "hectolitro", factor: 100 },
      { id: "dal", name: "decalitro", factor: 10 },
      { id: "l", name: "litro", factor: 1 },
      { id: "dl", name: "decilitro", factor: 0.1 },
      { id: "cl", name: "centilitro", factor: 0.01 },
      { id: "ml", name: "mililitro", factor: 0.001 }
    ]
  },
  mass: {
    name: "Masa",
    emoji: "⚖️",
    title: "Medimos cuánto pesa",
    example: "3 kg = 3.000 g",
    exampleText: "De kg a g hay 3 saltos a la derecha: 3 × 1.000 = 3.000.",
    units: [
      { id: "kg", name: "kilogramo", factor: 1000 },
      { id: "hg", name: "hectogramo", factor: 100 },
      { id: "dag", name: "decagramo", factor: 10 },
      { id: "g", name: "gramo", factor: 1 },
      { id: "dg", name: "decigramo", factor: 0.1 },
      { id: "cg", name: "centigramo", factor: 0.01 },
      { id: "mg", name: "miligramo", factor: 0.001 }
    ]
  },
  time: {
    enabled: false,
    name: "Tiempo",
    emoji: "⏱️",
    title: "Medimos duraciones",
    example: "2 h = 120 min",
    exampleText: "Una hora tiene 60 minutos: 2 × 60 = 120.",
    nonMetric: true,
    units: [
      { id: "d", name: "día", factor: 86400 },
      { id: "h", name: "hora", factor: 3600 },
      { id: "min", name: "minuto", factor: 60 },
      { id: "s", name: "segundo", factor: 1 }
    ]
  }
};

export const questionValues = [1, 2, 3, 4, 5, 6, 8, 9, 10, 12, 15, 20, 25, 30, 50, 75, 100, 125, 250, 500];
