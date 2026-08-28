/* ============================================================
   EL CHIRINGUITO DEL COFIO — Datos de la carta
   ------------------------------------------------------------
   Este archivo es la ÚNICA fuente de datos de la web.
   Para cambiar la carta, edita solo este archivo:

   - Cambiar un precio  -> edita el número "precio"
   - Quitar un plato    -> pon "disponible: false" (o borra la línea)
   - Añadir un plato    -> copia un objeto { ... } y cámbialo
   - Añadir una sección -> copia un bloque de "secciones"

   Etiquetas (tags) admitidas: "vegana", "veggie", "singluten"
   ============================================================ */

const MENU = {
  local: {
    nombre: "Chiringuito del Río Cofío",
    lema: "Comida, tapas, cócteles y más",
    instagram: "",
    direccion: "Urb. Río Cofio · C/ Península, 11 · 28294 Robledo de Chavela (Madrid)",
    mapsUrl: "https://maps.google.com/?q=Piscina+Urbanizacion+Rio+Cofio+Robledo+de+Chavela",
    horarios: [
      { dias: "Todos los días", horas: "11:00 – 24:00" }
    ],
    avisoApertura: "Abierto todos los días"
  },

  /* Catálogo de los alérgenos presentes en la carta: código -> símbolo + nombre.
     El "simbolo" es el emoji que caracteriza al alérgeno. */
  alergenos: {
    gluten: { simbolo: "🌾", nombre: "Gluten" },
    huevo: { simbolo: "🥚", nombre: "Huevo" },
    pescado: { simbolo: "🐟", nombre: "Pescado" },
    soja: { simbolo: "🫛", nombre: "Soja" },
    lacteos: { simbolo: "🥛", nombre: "Lácteos" },
    frutos_secos: { simbolo: "🌰", nombre: "Frutos de cáscara" },
    mostaza: { simbolo: "🫙", nombre: "Mostaza" },
    sulfitos: { simbolo: "🍷", nombre: "Sulfitos" },
    moluscos: { simbolo: "🦪", nombre: "Moluscos" }
  },

  secciones: [
    {
      id: "picoteo",
      titulo: "Picoteo",
      items: [
        { "nombre": "Nugets karagee", "descripcion": "Al estilo japonés con mayonesa cítrica", "precio": 8.5, "disponible": false, "alergenos": ["gluten", "huevo", "soja"] },
        { "nombre": "Lágrimas de pollo", "descripcion": "Con mayonesa de ajo asado", "precio": 8.5, "alergenos": ["gluten", "huevo", "soja"] },
        { "nombre": "Patatas bravas", "descripcion": "", "precio": 5, "tags": ["veggie"], "alergenos": ["huevo"] },
        { "nombre": "Patatas con mayo", "descripcion": "Con mayo de ajo asado o mayo trufada", "precio": 5, "tags": ["veggie"], "alergenos": ["huevo"] },
        { "nombre": "Tempura de verduras", "descripcion": "", "precio": 5, "tags": ["veggie"], "alergenos": ["gluten"] },
        { "nombre": "Nachos", "descripcion": "Con queso, guacamole y pico de gallo", "precio": 10, "alergenos": ["lacteos"] },
        { "nombre": "Tabla de embutidos", "descripcion": "", "precio": 12, "disponible": false, "alergenos": ["sulfitos"] },
        { "nombre": "Croquetas", "descripcion": "A elegir entre jamón, boletus, chipirones o rabo de toro", "precio": 7, "alergenos": ["gluten", "lacteos", "huevo"] }
      ]
    },

    {
      id: "hamburguesas",
      titulo: "Hamburguesas",
      nota: "Estos productos pueden pedirse con pan sin gluten por 0,50 €",
      items: [
        { "nombre": "Hamburguesa vegana Heura", "descripcion": "Con cebolla caramelizada, mezclum, tomate y piperrada", "precio": 12, "tags": ["veggie"], disponible: false, "alergenos": ["gluten", "soja0"] },
        { "nombre": "Hamburguesa Chavela", "descripcion": "Con carne de ternera de Ávila, queso, mezclum, tomate, pepinillos y mostaza", "precio": 9.5, "alergenos": ["gluten", "lacteos", "huevo", "mostaza", "sulfitos"] },
        { "nombre": "Hamburguesa Cofío", "descripcion": "Con carne de ternera de Ávila, queso, huevo, beicon y cebolla caramelizada", "precio": 11.5, "alergenos": ["gluten", "lacteos", "huevo", "sulfitos"] },
        { "nombre": "Hamburguesa La Suiza", "descripcion": "Con carne de ternera de Ávila, queso raclette y mayonesa trufada", "precio": 12, "alergenos": ["gluten", "lacteos", "huevo"] },
        { "nombre": "Hamburguesa Pollo", "descripcion": "Con pollo empanado, queso, cebolla pochada, lechuga y tomate", "precio": 8.5, disponible: false, "alergenos": ["gluten", "lacteos", "huevo", "soja"] }
      ]
    },

    {
      id: "ensaladas",
      titulo: "Ensaladas",
      items: [
        { "nombre": "Mezclum rulo de cabra", "descripcion": "Con cebolla caramelizada, nueces y beicon", "precio": 7.5, "alergenos": ["lacteos", "frutos_secos", "sulfitos"] },
        { "nombre": "Tomate, atún, limón, aceitunas, anchoas y mezclum", "descripcion": "", "precio": 10, "alergenos": ["pescado", "sulfitos"] },
        { "nombre": "Tomate, burrata, albahaca, limón, nueces y mezclum", "descripcion": "", "precio": 11, "tags": ["veggie"], "alergenos": ["lacteos", "frutos_secos", "sulfitos"] }
      ]
    },

    {
      id: "bocadillos",
      titulo: "Bocadillos",
      nota: "Estos productos pueden pedirse con pan sin gluten por 0,50 €",
      items: [
        { "nombre": "Pollo vegano Heura", "descripcion": "Con piperrada y mayo de ajo asado", "precio": 11.5, "tags": ["veggie"], "alergenos": ["gluten", "soja", "huevo"] },
        { "nombre": "Calamares frescos", "descripcion": "Rebozados al momento con perejil, limón y mayo de ajo asado", "precio": 8.5, "alergenos": ["gluten", "moluscos", "huevo"] },
        { "nombre": "Pulled pork", "descripcion": "Con cebolla caramelizada y queso cheddar", "precio": 7.5, "alergenos": ["gluten", "lacteos", "sulfitos"] },
        { "nombre": "Pollo trufado", "descripcion": "Con queso parmesano, mezclum, mayo trufada y huevo", "precio": 10, "alergenos": ["gluten", "lacteos", "huevo"] },
        { "nombre": "Pollo cabra", "descripcion": "Con queso de cabra, beicon y cebolla caramelizada", "precio": 8, "alergenos": ["gluten", "lacteos", "sulfitos"] }
      ]
    },

    {
      id: "platos",
      titulo: "Platos",
      items: [
        { "nombre": "Pollo vegano Heura", "descripcion": "Con piperrada, patatas y ensalada", "precio": 13.5, "tags": ["veggie"], "alergenos": ["soja"] },
        { "nombre": "Pollo a la plancha", "descripcion": "Con huevo, patatas y ensalada", "precio": 8.5, "alergenos": ["huevo"] },
        { "nombre": "Plato del día", "descripcion": "Pregunta nuestra sugerencia", "precio": null, "precioTexto": "S/M", "alergenos": [], disponible: false }
      ]
    },

    {
      id: "postres",
      titulo: "Postres",
      items: [
        { "nombre": "Coulant de chocolate", "descripcion": "Con helado de pistacho", "precio": 5, "alergenos": ["gluten", "lacteos", "huevo", "frutos_secos", "soja"] },
        { "nombre": "Propuesta del día", "descripcion": "Pregunta nuestra sugerencia", "precio": null, "precioTexto": "S/M", "alergenos": [], }
      ]
    },

    {
      id: "cocteles",
      titulo: "Cócteles",
      items: [
        { "nombre": "Caipiriña", "descripcion": "Cachaça y Lima", "precio": 7.5, "alergenos": [] },
        { "nombre": "Vermut preparado", "descripcion": "Vermut rojo, Campari, ginebra y angostura", "precio": 5, "alergenos": [] },
        { "nombre": "Margarita", "descripcion": "Tequila, zumo de limón y triple sec", "precio": 7.5, "alergenos": [] },
        { "nombre": "Aperol Spritz", "descripcion": "Aperol, prosecco y soda", "precio": 7.5, "alergenos": [] },
        { "nombre": "Mojito", "descripcion": "Ron blanco, zumo de lima, menta, azúcar morena y soda", "precio": 8, "alergenos": [] },
        { "nombre": "Destornillador", "descripcion": "Vodka, zumo de naranja y soda de naranja", "precio": 8, "alergenos": [] },
        { "nombre": "Bloody Mary", "descripcion": "Vodka, zumo de tomate y naranja, Tabasco y Worcestershire", "precio": 8, "alergenos": [] },
        { "nombre": "Tequila sunrise", "descripcion": "Tequila, zumo de naranja y granadina", "precio": 8, "alergenos": [] }
      ]
    },

    {
      id: "cocteles-sin",
      titulo: "Cócteles sin alcohol",
      items: [
        { "nombre": "Mojito sin alcohol", "descripcion": "Sirope a elegir, menta, zumo de lima y soda", "precio": 5, "alergenos": [] },
        { "nombre": "San Francisco", "descripcion": "Zumo de naranja, limón y piña con un toque de granadina", "precio": 5, "alergenos": [] },
        { "nombre": "Limonada casera", "descripcion": "Con un toque de menta y soda", "precio": 4, "alergenos": [] }
      ]
    },

    {
      id: "bebidas",
      titulo: "Bebidas",
      items: [
        { "nombre": "Zumos", "descripcion": " Tomate o Mººosto", "precio": 2.4, "alergenos": [] },
        { "nombre": "Refrescos", "descripcion": "Coca-Cola, Coca-Cola Zero, Nestea, Aquarius o Fanta", "precio": 2.4, "alergenos": [] },
        { "nombre": "RedBull", "descripcion": "", "precio": 3.2, "alergenos": [] },
        { "nombre": "Agua pequeña", "descripcion": "", "precio": 1.5, "alergenos": [] },
        { "nombre": "Agua grande", "descripcion": "", "precio": 2.8, "alergenos": [] },
        { "nombre": "Agua con gas", "descripcion": "", "precio": 2.4, "alergenos": [] },
        { "nombre": "Botellín 1/3", "descripcion": "", "precio": 3.0, "alergenos": [] },
        { "nombre": "Cubo", "descripcion": "5 botellines de 1/4", "precio": 7.5, "alergenos": [] },
        { "nombre": "Botellín 1/4", "descripcion": "", "precio": 1.9, "alergenos": [] },
        { "nombre": "1906", "descripcion": "", "precio": 3.2, "alergenos": [] },
        { "nombre": "Copa de vino del año", "descripcion": "", "precio": 2.2, "alergenos": [] },
        { "nombre": "Copa de vino crianza", "descripcion": "", "precio": 2.5, "alergenos": [] },
        { "nombre": "Copa de vino blanco Rueda", "descripcion": "", "precio": 2.2, "alergenos": [] },
        { "nombre": "Cava", "descripcion": "", "precio": 4, "alergenos": [] },
        { "nombre": "Tinto de verano", "descripcion": "", "precio": 3.5, "alergenos": [] },
        { "nombre": "Cubata", "descripcion": "", "precio": 7.5, "alergenos": [] },
        { "nombre": "Cubata RedBull", "descripcion": "", "precio": 8.5, "alergenos": [] },
        { "nombre": "Cubata especial", "descripcion": "", "precio": 9, "alergenos": [] },
        { "nombre": "Chupito", "descripcion": "", "precio": 2.5, "alergenos": [] },
        { "nombre": "Copa de licor", "descripcion": "", "precio": 5, "alergenos": [] }
      ]
    }
  ]
};
