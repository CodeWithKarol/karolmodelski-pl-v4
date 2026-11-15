export interface Testimonial {
  quote: string
  excerpt: string
  author: string
  context: string
  source: string
  rating: number
  url?: string
}

export const numerabbleTestimonial: Testimonial = {
  quote:
    "Dziękuję całemu Twojemu zespołowi Karolu — jesteście NIESAMOWICI! Bardzo się cieszę, że Wszechświat skrzyżował nasze ścieżki, jak dobre działanie na planszy życia... Spokojnie czekam na kolejne etapy współpracy!",
  excerpt:
    "Dziękuję całemu Twojemu zespołowi… Spokojnie czekam na kolejne etapy współpracy!",
  author: "Remigiusz",
  context: "klient Numerabble",
  source: "opinia z Google, listopad 2026",
  rating: 5,
  url: "https://maps.app.goo.gl/z9ve1PNTGFpW9Rum9",
}
