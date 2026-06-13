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
    mapsUrl: "https://maps.google.com/?q=Piscina+Urbanizacion+Rio+Cofio+Robledo+de+Chavela",
    horarios: [
      { dias: "Domingo a jueves", horas: "11:00 – 24:00" },
      { dias: "Viernes y sábado", horas: "11:00 – 01:00" }
    ],
    avisoApertura: "Abierto todos los días"
  },

  secciones: [
    {
      id: "Raciones",
      titulo: "Raciones",
      nota: "Cualquiera de estos productos puede pedirse con pan sin gluten",
      items: [
        { nombre: "Nuggets karaage", descripcion: "Al estilo japonés, con mayonesa cítrica", precio: 8.5 },
        { nombre: "Lágrimas de pollo", descripcion: "Con mayonesa de ajo asado", precio: 8.5 },
        { nombre: "Patatas bravas", descripcion: "Con salsa brava casera", precio: 5 },
        { nombre: "Patatas con mayonesa", descripcion: "Mayo de ajo asado o mayo trufada, a elegir", precio: 5 },
        { nombre: "Tempura de verduras", descripcion: "", precio: 5, tags: ["veggie"] },
        { nombre: "Tabla de embutidos o de quesos", descripcion: "", precio: 12 },
        { nombre: "Croquetas", descripcion: "A elegir entre Jamón, Boletus, chipirones o rabo de toro", precio: 7.0 }
      ]
    },

    {
      id: "Bocatas",
      titulo: "Bocatas",
      nota: "Cualquiera de estos productos puede pedirse con pan sin gluten",
      items: [
        { nombre: "Pollo a la plancha", descripcion: "Queso cabra, beicon, cebolla caramelizada ", precio: 8 },
        { nombre: "Calamares", descripcion: "Con Mayo de ajo asado y perejil", precio: 7.5 }
      ]
    },

    {
      id: "Ensaladas",
      titulo: "Ensaladas",
      items: [
        { nombre: "Mezclum rulo de cabra", descripcion: "Rulo de cabra, cebolla caramelizada, nueces y miel", precio: 6.5 },
        { nombre: "Mezclum de pollo frito", descripcion: "Pollo frito, parmesano, nueces y cebolla caramelizada", precio: 7 },
        { nombre: "Tomate con ventresca", descripcion: "Limón, piparras y mezclum", precio: 12.5 },
      ]
    },

    {
      id: "Postres",
      titulo: "Postres",
      items: [
        { nombre: "Ensalada de frutas frescas", descripcion: "Frutas frescas con helado de mandarina", precio: 5 }
      ]
    },
    {
      id: "bebidas",
      titulo: "Bebidas",
      items: [
        { nombre: "Zumo", descripcion: "Piña, naranja, melocoton, tomate", precio: 2.2 },        
        { nombre: "Refresco", descripcion: "", precio: 2.2 },
        { nombre: "Red Bull", descripcion: "", precio: 3.2 },
        { nombre: "Botella de agua pequeña", descripcion: "", precio: 1.5 },
        { nombre: "Botella de agua grande", descripcion: "", precio: 2.8 },
        { nombre: "Agua con gas", descripcion: "", precio: 2.2 },
        { nombre: "Doble", descripcion: "", precio: 2.5 },
        { nombre: "Cañon", descripcion: "", precio: 2.8 },
        { nombre: "Tercio de cerveza", descripcion: "", precio: 2.8 },
        { nombre: "Cubo de cerveza 1/4", descripcion: "Promocion: 5 unidaes de botellin de cerveza (1/4) ", precio: 7.5 },
        { nombre: "Botellín de cerveza 1/4", descripcion: "", precio: 1.7 },
        { nombre: "Cerverza Alhambra 1/3", descripcion: "", precio: 3 },
        { nombre: "Vino cosechero", descripcion: "", precio: 2.2 },
        { nombre: "Vino crianza", descripcion: "", precio: 2.5 },
        { nombre: "Vino blanco Rueda", descripcion: "", precio: 2.2 },
        { nombre: "Tinto de verano", descripcion: "", precio: 3.5 },
        { nombre: "Aperol Spritz", descripcion: "", precio: 7.5},
        { nombre: "Cubata", descripcion: "", precio: 7.5 },
        { nombre: "Coctail", descripcion: "", precio: 8 },
        { nombre: "Coctail con redbull", descripcion: "", precio: 9 }

      ]
    }
  ]
};
