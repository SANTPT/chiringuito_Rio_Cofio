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
    direccion: "Urb. Río Cofio · C/ Península, 11 · 28294 Robledo de Chavela (Madrid)",
    mapsUrl: "https://maps.google.com/?q=Calle+Pen%C3%ADnsula+11,+28294+Robledo+de+Chavela",
    horarios: [
      { dias: "Domingo a jueves", horas: "11:00 – 24:00" },
      { dias: "Viernes y sábado", horas: "11:00 – 01:00" }
    ],
    avisoApertura: "Abierto todos los días"
  },

  secciones: [
    {
      id: "picoteo",
      titulo: "Picoteo",
      nota: "Cualquiera de estos productos puede pedirse con pan sin gluten",
      items: [
        { nombre: "Nuggets karaage", descripcion: "Al estilo japonés, con mayonesa cítrica", precio: 8.5 },
        { nombre: "Lágrimas de pollo", descripcion: "Con mayonesa de ajo asado", precio: 8.5 },
        { nombre: "Alitas de pollo", descripcion: "Salsa barbacoa teriyaki", precio: 6 },
        { nombre: "Patatas bravas", descripcion: "Con salsa brava casera", precio: 4.5 },
        { nombre: "Patatas con mayonesa", descripcion: "Mayo de ajo asado o mayo trufada, a elegir", precio: 4.5 },
        { nombre: "Tempura de verduras", descripcion: "", precio: 4.5, tags: ["veggie"] },
        { nombre: "Nachos", descripcion: "Con queso, guacamole y pico de gallo", precio: 10 },
        { nombre: "Tabla de embutidos o de quesos", descripcion: "A elegir", precio: 14 },
        { nombre: "Gyozas vegetarianas", descripcion: "", precio: 8.5, tags: ["veggie"] },
        { nombre: "Croquetas", descripcion: "", precio: 4.5 }
      ]
    },

    {
      id: "hamburguesas",
      titulo: "Hamburguesas",
      nota: "Cualquiera de estos productos puede pedirse con pan sin gluten",
      items: [
        { nombre: "Vegana", descripcion: "Cebolla caramelizada, mezclum, tomate y piperrada", precio: 12, tags: ["vegana"] },
        { nombre: "Ternera de Ávila clásica", descripcion: "Queso, huevo, mezclum, tomate, pepinillos y mostaza Dijon", precio: 9 },
        { nombre: "Ternera de Ávila con beicon", descripcion: "Queso, huevo, beicon y cebolla caramelizada", precio: 11.5 },
        { nombre: "Ternera trufada", descripcion: "Queso raclette y mayonesa trufada", precio: 12 },
        { nombre: "De pollo empanado", descripcion: "Queso, cebolla pochada, lechuga y tomate", precio: 7 }
      ]
    },

    {
      id: "bocadillos",
      titulo: "Bocadillos",
      nota: "Cualquiera de estos productos puede pedirse con pan sin gluten",
      items: [
        { nombre: "Pollo vegano", descripcion: "Piperrada y mayo de ajo asado", precio: 11.5, tags: ["vegana"] },
        { nombre: "Calamares", descripcion: "Frescos y rebozados al momento, con eneldo, limón y mayo de ajo asado", precio: 7.5 },
        { nombre: "Salchicha fresca", descripcion: "Cebolla caramelizada y queso cheddar", precio: 8 },
        { nombre: "Pulled pork", descripcion: "Cebolla caramelizada y cheddar", precio: 6.5 },
        { nombre: "Pollo a la plancha", descripcion: "Parmesano, mezclum, mayo-mostaza y huevo", precio: 10 },
        { nombre: "Pollo a la milanesa", descripcion: "Queso cheddar, tomate asado y mayo de ajo asado", precio: 9 },
        { nombre: "Pollo con queso de cabra", descripcion: "A la plancha, con beicon y cebolla caramelizada", precio: 8 },
        { nombre: "Morcilla", descripcion: "Con cebolla caramelizada", precio: 6 },
        { nombre: "Ternera de Ávila", descripcion: "Piperrada y parmesano", precio: 11.5 }
      ]
    },

    {
      id: "ensaladas",
      titulo: "Ensaladas",
      items: [
        { nombre: "De rulo de cabra", descripcion: "Mezclum, cebolla caramelizada, nueces y beicon", precio: 6 },
        { nombre: "De pollo frito", descripcion: "Mezclum, parmesano, nueces y cebolla caramelizada", precio: 6.5 },
        { nombre: "Tomate con ventresca", descripcion: "Limón, piparras y mezclum", precio: 12.5 },
        { nombre: "Tomate con burrata", descripcion: "Albahaca, limón, nueces y mezclum", precio: 11, tags: ["veggie"] }
      ]
    },

    {
      id: "platos",
      titulo: "Platos",
      items: [
        { nombre: "Pollo vegano", descripcion: "Piperrada, patatas y ensalada", precio: 13.5, tags: ["vegana"] },
        { nombre: "Pollo a la plancha", descripcion: "Huevo, patatas y ensalada", precio: 8.5 },
        { nombre: "Pollo a la milanesa", descripcion: "Salsa de tomate, queso raclette, patatas y ensalada", precio: 7.5 },
        { nombre: "Filete de ternera de Ávila", descripcion: "Huevo, patatas y ensalada", precio: 12.5 },
        { nombre: "Morcilla", descripcion: "Cebolla pochada, huevo, patatas y ensalada", precio: 6 },
        { nombre: "Plato del día", descripcion: "Pregunta nuestra sugerencia", precio: 8 }
      ]
    },

    {
      id: "postres",
      titulo: "Postres",
      items: [
        { nombre: "Coulant de chocolate", descripcion: "Con helado de pistacho", precio: 4 },
        { nombre: "Panna cotta", descripcion: "Con frutos rojos o mango, a elegir", precio: 4 },
        { nombre: "Tiramisú casero", descripcion: "", precio: 5 },
        { nombre: "Ensalada de frutas", descripcion: "Con helado de mandarina", precio: 5 },
        { nombre: "Bolas de helado", descripcion: "Sabores a elegir", precio: 3 },
        { nombre: "Propuesta del día", descripcion: "Pregunta nuestra sugerencia", precio: 5 }
      ]
    },

    {
      id: "cocteles",
      titulo: "Cócteles",
      items: [
        { nombre: "Margarita", descripcion: "Tequila, zumo de limón y triple sec", precio: 7.5 },
        { nombre: "Aperol Spritz", descripcion: "Aperol, prosecco y soda", precio: 7.5 },
        { nombre: "Mojito", descripcion: "Ron blanco, zumo de lima, menta, azúcar morena y soda", precio: 7.5 },
        { nombre: "Piña colada", descripcion: "Ron blanco, zumo de piña y crema de coco", precio: 7.5 },
        { nombre: "Destornillador", descripcion: "Vodka, zumo de naranja y soda de naranja", precio: 7.5 },
        { nombre: "Bloody Mary", descripcion: "Vodka, zumo de tomate y naranja, Tabasco y Worcestershire", precio: 7.5 },
        { nombre: "Tequila sunrise", descripcion: "Tequila, zumo de naranja y granadina", precio: 7.5 }
      ]
    },

    {
      id: "cocteles-sin",
      titulo: "Cócteles sin alcohol",
      items: [
        { nombre: "Mojito sin alcohol", descripcion: "Sirope a elegir, menta, zumo de lima y soda", precio: 5 },
        { nombre: "San Francisco", descripcion: "Zumo de naranja, limón y piña con un toque de granadina", precio: 5 },
        { nombre: "Limonada casera", descripcion: "Con un toque de menta y soda", precio: 4 }
      ]
    },

    {
      id: "tapas",
      titulo: "Tapas",
      intro: "Todos los días hay platos preparados a modo de tapa con la consumición, según disponibilidad:",
      listaSimple: [
        "Paellas y arroces",
        "Ensaladillas",
        "Chorizo al infierno",
        "Callos",
        "Empanadas caseras",
        "Tortillas de patata variadas",
        "Croquetas caseras"
      ],
      items: []
    },

    {
      id: "bebidas",
      titulo: "Bebidas",
      items: [
        { nombre: "Refrescos", descripcion: "", precio: 2 },
        { nombre: "Agua con gas", descripcion: "", precio: 2 },
        { nombre: "Botellín de cerveza", descripcion: "", precio: 2 },
        { nombre: "Tercio de cerveza", descripcion: "", precio: 2.8 },
        { nombre: "Vino cosechero", descripcion: "", precio: 2.5 },
        { nombre: "Vino crianza", descripcion: "", precio: 2.7 },
        { nombre: "Vino blanco Rueda", descripcion: "", precio: 2.5 },
        { nombre: "Vino blanco Godello", descripcion: "", precio: 2.5 },
        { nombre: "Cava", descripcion: "", precio: 4 },
        { nombre: "Kombuchas", descripcion: "", precio: 5 }
      ]
    }
  ]
};
