import type { SiteContent } from "./types";

// Contenido verificado en Instagram @cacau_cafe_blanes (bio, textos, fotos y vídeos)
// y en fichas públicas del negocio (dirección, teléfono y valoración en Google).
const PHONE = "+34669785951";
const IG = "https://www.instagram.com/cacau_cafe_blanes/";
const MAPS = "https://www.google.com/maps/dir/?api=1&destination=Cacau+Caf%C3%A8,+Carrer+de+Tapioles+21,+17300+Blanes";
const URL = "https://durducco-source.github.io/cacau-cafe-blanes-web/";

export const site: SiteContent = {
  lang: "es",
  brand: { name: "Cacau Cafè", top: "Blanes", sub: "Especialistas en café" },
  seo: {
    title: "Cacau Cafè · Cafetería de especialidad en Blanes | Café, brunch y bollería artesanal",
    description:
      "Cacau Cafè, cafetería en Blanes (Carrer de Tapioles, 21). Especialistas en café, productos artesanales, brunch, iced latte y bollería. Abrimos todos los días. 4,9 ★ en Google.",
    url: URL,
    image: `${URL}media/og-cacau.jpg`,
    keywords: ["cafetería Blanes", "café de especialidad Blanes", "brunch Blanes", "desayuno Blanes", "iced latte Costa Brava", "Cacau Cafè"],
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "CafeOrCoffeeShop",
      name: "Cacau Cafè",
      url: URL,
      telephone: PHONE,
      servesCuisine: ["Café", "Brunch", "Bollería"],
      address: { "@type": "PostalAddress", streetAddress: "Carrer de Tapioles, 21", addressLocality: "Blanes", postalCode: "17300", addressRegion: "Girona", addressCountry: "ES" },
      sameAs: [IG],
    },
  },
  nav: [
    { label: "La casa", href: "#casa" },
    { label: "Momentos", href: "#momentos" },
    { label: "La carta", href: "#carta" },
    { label: "Galería", href: "#galeria" },
    { label: "Visítanos", href: "#visitanos" },
  ],
  cta: { label: "Cómo llegar", href: MAPS, external: true },
  hero: {
    scrollHint: "Desliza",
    acts: [
      { label: "Primer acto", title: "Cacau *Cafè.*", text: "Un rincón de auténtico placer cafetero en el corazón de Blanes.", media: { type: "video", src: "/media/terraza.mp4", poster: "/media/terraza.jpg", alt: "Caja de bollería artesanal de Cacau Cafè" } },
      { label: "Segundo acto", title: "El *café.*", text: "Especialistas en café: del latte de cada mañana al iced caramel latte para llevar.", media: { type: "video", src: "/media/latte-art.mp4", poster: "/media/latte-art.jpg", alt: "Café con leche con latte art" } },
      { label: "Tercer acto", title: "El *obrador.*", text: "Productos artesanales: argentinos de chocolate, croissants de pistacho y mucho más.", media: { type: "video", src: "/media/argentinos.mp4", poster: "/media/argentinos.jpg", alt: "Argentinos de chocolate recién hechos" } },
      { label: "Cuarto acto", title: "El *momento.*", text: "Desayuno o merienda, pero compartido, que sabe mejor.", media: { type: "video", src: "/media/compartir.mp4", poster: "/media/compartir.jpg", alt: "Dos personas compartiendo café y croissants" } },
    ],
  },
  intro: {
    id: "casa",
    eyebrow: "La casa",
    title: "Un rincón de *auténtico placer cafetero.*",
    paragraphs: [
      "Cacau Cafè es una cafetería en Blanes especializada en café y en productos artesanales. Abrimos todos los días para tu desayuno, tu brunch o tu merienda.",
      "Lattes y cafés bien hechos, bollería con chocolate, bowls de yogur con fruta fresca y bocadillos generosos. Sin prisas, en la terraza o para llevar.",
    ],
    stats: [
      { value: "4,9", label: "Google · 191 reseñas" },
      { value: "7/7", label: "Abrimos todos los días" },
      { value: "Café", label: "Especialistas" },
      { value: "Blanes", label: "Carrer de Tapioles" },
    ],
  },
  chapters: {
    id: "momentos",
    eyebrow: "Momentos",
    title: "La hora *Cacau Cafè.*",
    items: [
      {
        label: "Café",
        title: "Que no nos quiten *nuestro iced latte.*",
        text: "Del caramel latte caliente al iced caramel latte para llevar: café de especialidad para cada momento del día.",
        bullets: ["Cafés y lattes", "Iced caramel latte", "Para tomar o para llevar"],
        media: { type: "video", src: "/media/iced-caramel-latte.mp4", poster: "/media/iced-caramel-latte.jpg", alt: "Iced caramel latte en vaso de Cacau Cafè" },
      },
      {
        label: "Bollería",
        title: "Crujientes por fuera, *irresistibles por dentro.*",
        text: "Nuestros argentinos de chocolate son de otro planeta. Y un miércoles cualquiera también puede tener croissant de pistacho.",
        bullets: ["Argentinos de chocolate", "Croissant de pistacho", "Productos artesanales"],
        media: { type: "video", src: "/media/croissant-pistacho.mp4", poster: "/media/croissant-pistacho.jpg", alt: "Croissant de pistacho" },
      },
      {
        label: "Brunch",
        title: "Fresco. Natural. *Delicioso.*",
        text: "Yogur griego con fruta fresca, y un Vegetal XL que te alegra la mañana, el día y hasta el fin de semana.",
        bullets: ["Bowl de yogur griego con fruta", "Bocadillo Vegetal XL", "Desayunos y meriendas"],
        media: { type: "image", src: "/media/bowl-0.webp", alt: "Bowl de yogur griego con kiwi, plátano y chocolate" },
      },
    ],
  },
  menu: {
    id: "carta",
    eyebrow: "La carta",
    title: "Para *cada antojo.*",
    intro: "Algunos de nuestros favoritos. Consulta la carta completa y los precios en el local.",
    groups: [
      { name: "Café", items: [
        { name: "Café con leche", detail: "Con latte art" },
        { name: "Caramel latte", detail: "Caliente" },
        { name: "Iced caramel latte", detail: "Frío, para tomar o para llevar" },
      ] },
      { name: "Bollería", items: [
        { name: "Argentinos de chocolate", detail: "Crujientes por fuera, chocolate por dentro" },
        { name: "Croissant de pistacho", detail: "Con crema de pistacho" },
        { name: "Croissants", detail: "Para desayunar o merendar" },
      ] },
      { name: "Brunch", items: [
        { name: "Yogur griego con fruta fresca", detail: "Kiwi, plátano y toppings" },
        { name: "Vegetal XL", detail: "Bocadillo vegetal con salmón y rúcula" },
      ] },
    ],
    note: "Abrimos todos los días · Carrer de Tapioles, 21 · Blanes",
  },
  gallery: {
    id: "galeria",
    eyebrow: "Galería",
    title: "Cacau *vibes.*",
    items: [
      { type: "image", src: "/media/vegetal-1.webp", alt: "Bocadillo Vegetal XL con salmón y rúcula" },
      { type: "image", src: "/media/bowl-2.webp", alt: "Bowl de yogur con fruta fresca" },
      { type: "image", src: "/media/post-0.webp", alt: "Bollería artesanal para llevar" },
      { type: "image", src: "/media/caramel-latte.jpg", alt: "Caramel latte con bollería" },
      { type: "image", src: "/media/vegetal-3.webp", alt: "Vegetal XL en plato" },
      { type: "image", src: "/media/para-llevar.jpg", alt: "Bolsa para llevar de Cacau Cafè" },
      { type: "image", src: "/media/bowl-3.webp", alt: "Bowl de yogur y cuchara de madera" },
      { type: "image", src: "/media/rutina.jpg", alt: "Café en la terraza de la calle Tapioles" },
      { type: "image", src: "/media/vegetal-0.webp", alt: "Vegetal XL recién preparado" },
      { type: "image", src: "/media/post-2.webp", alt: "Bollería artesanal" },
    ],
  },
  reels: {
    id: "videos",
    eyebrow: "Así se vive",
    title: "Así se vive *Cacau Cafè.*",
    items: [
      { type: "video", src: "/media/caramel-latte.mp4", poster: "/media/caramel-latte.jpg", alt: "Si lo estás viendo, es una señal" },
      { type: "video", src: "/media/rutina.mp4", poster: "/media/rutina.jpg", alt: "Vuelta a la rutina, sin prisas" },
      { type: "video", src: "/media/para-llevar.mp4", poster: "/media/para-llevar.jpg", alt: "Moments" },
      { type: "video", src: "/media/bowl-yogur.mp4", poster: "/media/bowl-yogur.webp", alt: "Yogur griego con fruta fresca" },
    ],
  },
  contact: {
    id: "visitanos",
    eyebrow: "Visítanos",
    title: "Te esperamos *en Tapioles.*",
    address: ["Carrer de Tapioles, 21", "17300 Blanes (Girona)"],
    directionsUrl: MAPS,
    mapEmbed: "https://www.google.com/maps?q=Cacau+Caf%C3%A8,+Carrer+de+Tapioles+21,+17300+Blanes&z=17&output=embed",
    phone: { label: "669 78 59 51", href: `tel:${PHONE}` },
    hours: [{ day: "Todos los días", value: "Abierto" }],
    hoursNote: "Consulta el horario actualizado en nuestro Instagram (destacado «Horarios»).",
    socials: [{ label: "Instagram de Cacau Cafè", href: IG, icon: "instagram" }],
  },
  finale: {
    title: "¿Un café *sin prisas?*",
    text: "Tu desayuno y tu merienda te están esperando.",
    cta: { label: "Cómo llegar", href: MAPS, external: true },
    media: { type: "image", src: "/media/compartir.jpg", alt: "" },
  },
  floating: { label: "Llamar", href: `tel:${PHONE}`, icon: "phone" },
  footer: { line: "© 2026 Cacau Cafè · Blanes", credit: "Diseño web por DURDUC" },
};
