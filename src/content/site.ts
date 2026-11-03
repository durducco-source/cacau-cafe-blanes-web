import type { Media, SiteContent } from "./types";

// Contenido verificado en Instagram @cacau_cafe_blanes (bio, textos, fotos y vídeos)
// y en fichas públicas del negocio (dirección, teléfono y valoración en Google). No se ha inventado información.
const PHONE = "+34669785951";
const IG = "https://www.instagram.com/cacau_cafe_blanes/";
const URL = "https://durducco-source.github.io/cacau-cafe-blanes-web/";
const MAPS = "https://www.google.com/maps/dir/?api=1&destination=Cacau+Caf%C3%A8,+Carrer+de+Tapioles+21,+17300+Blanes";

const v = (name: string, alt: string, poster = `/media/${name}.jpg`): Media => ({ type: "video", src: `/media/${name}.mp4`, poster, alt });
const wp = (name: string, alt: string): Media => ({ src: `/media/${name}.webp`, alt });

const llegar = { label: "Cómo llegar", href: MAPS, external: true };

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
  },
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
  primary: { label: "Cómo llegar", href: MAPS, external: true, icon: "arrow" },
  phone: PHONE,

  scenes: [
    {
      kind: "arrival", id: "inicio", n: "00", label: "Inicio",
      a: v("terraza", "Caja de bollería artesanal de Cacau Cafè"),
      b: v("rutina", "Café en la terraza de la calle Tapioles"),
      kicker: "Especialistas en café · Blanes", title: "Cacau Cafè", sub: "Abrimos todos los días", enter: "La hora Cacau",
    },
    {
      kind: "reel", id: "cafe", n: "01", label: "Café",
      videos: [v("latte-art", "Café con leche con latte art"), v("caramel-latte", "Caramel latte con bollería"), v("iced-caramel-latte", "Iced caramel latte para llevar")],
      title: "Especialistas en café", sub: "Del latte de cada mañana al iced caramel latte para llevar.",
    },
    {
      kind: "pullback", id: "obrador", n: "02", label: "Obrador",
      a: v("croissant-pistacho", "Croissant de pistacho"), origin: "50% 50%",
      b: v("argentinos", "Argentinos de chocolate recién hechos"),
      title: "Crujientes por fuera, irresistibles por dentro", sub: "Argentinos de chocolate y croissant de pistacho: productos artesanales.",
    },
    {
      kind: "door", id: "brunch", n: "03", label: "Brunch",
      door: wp("vegetal-1", "Bocadillo Vegetal XL con salmón y rúcula"),
      track: [wp("vegetal-3", "Vegetal XL"), wp("bowl-0", "Yogur griego con kiwi y plátano"), wp("bowl-2", "Bowl de yogur con fruta fresca"), wp("vegetal-0", "Vegetal XL recién preparado"), wp("bowl-3", "Bowl de yogur")],
      title: "Fresco. Natural. Delicioso.", sub: "Yogur griego con fruta fresca y un Vegetal XL que te alegra la mañana.",
    },
    {
      kind: "list", id: "carta", n: "04", label: "Carta",
      back: v("compartir", "Dos personas compartiendo café y croissants"),
      title: "Para *cada antojo*",
      groups: [
        { name: "Café", items: [{ name: "Café con leche", detail: "Con latte art" }, { name: "Caramel latte", detail: "Caliente" }, { name: "Iced caramel latte", detail: "Para tomar o para llevar" }] },
        { name: "Bollería", items: [{ name: "Argentinos de chocolate", detail: "Crujientes por fuera, chocolate por dentro" }, { name: "Croissant de pistacho", detail: "Con crema de pistacho" }, { name: "Croissants", detail: "Para desayunar o merendar" }] },
        { name: "Brunch", items: [{ name: "Yogur griego con fruta fresca", detail: "Kiwi, plátano y toppings" }, { name: "Vegetal XL", detail: "Bocadillo vegetal con salmón y rúcula" }] },
      ],
      note: "Algunos de nuestros favoritos. Carta completa y precios en el local.",
    },
    {
      kind: "depth", id: "para-llevar", n: "05", label: "Para llevar",
      back: v("para-llevar", "Bolsa para llevar de Cacau Cafè"),
      cards: [wp("post-0", "Bollería artesanal para llevar"), wp("post-2", "Bollería artesanal")],
      title: "Llévatelo y disfrútalo", sub: "Café y bollería artesanal, también para llevar.",
    },
    {
      kind: "finale", id: "visitanos", n: "06", label: "Visítanos",
      a: v("bowl-yogur", "Yogur griego con fruta fresca", "/media/bowl-yogur.webp"),
      title: "Tu desayuno y tu merienda *te están esperando*",
      ctas: [llegar, { label: "Llamar", href: `tel:${PHONE}` }, { label: "Instagram", href: IG, external: true }],
      info: [
        { label: "Dirección", value: "Carrer de Tapioles, 21 · Blanes", href: MAPS },
        { label: "Horario", value: "Abrimos todos los días" },
      ],
    },
  ],

  footer: {
    address: { label: "Carrer de Tapioles, 21 · 17300 Blanes", href: MAPS },
    contacts: [{ label: "669 78 59 51", href: `tel:${PHONE}` }],
    hours: [{ day: "Todos los días", value: "Abierto" }],
    hoursNote: "Horario detallado en el destacado «Horarios» de su Instagram.",
    socials: [{ label: "Instagram", href: IG }],
    sources: "Fotos y vídeos: Instagram @cacau_cafe_blanes",
    line: "© 2026 Cacau Cafè · Blanes",
  },
};
