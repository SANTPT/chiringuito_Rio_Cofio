/* ============================================================
   EL CHIRINGUITO DEL COFIO — Renderizado de la carta
   Lee los datos de js/menu.js (objeto MENU) y construye la web.
   No hace falta tocar este archivo para actualizar la carta.
   ============================================================ */

(function () {
  "use strict";

  var ETIQUETAS = {
    vegana: "Vegana",
    veggie: "Veggie",
    singluten: "Sin gluten"
  };

  function formatearPrecio(precio) {
    var texto = Number.isInteger(precio)
      ? String(precio)
      : precio.toFixed(2).replace(".", ",");
    return texto + "\u00A0€";
  }

  function crear(tag, clase, texto) {
    var el = document.createElement(tag);
    if (clase) el.className = clase;
    if (texto) el.textContent = texto;
    return el;
  }

  function renderizarCabeceraYPie() {
    document.getElementById("aviso-apertura").textContent =
      MENU.local.avisoApertura + " · " + MENU.local.lema;

    document.getElementById("pie-horarios").textContent = MENU.local.horarios
      .map(function (h) { return h.dias + " " + h.horas; })
      .join(" · ");

    document.getElementById("pie-direccion").textContent = MENU.local.direccion;

    var maps = document.getElementById("pie-maps");
    maps.href = MENU.local.mapsUrl;
  }

  function renderizarNavegacion(secciones) {
    var nav = document.getElementById("navegacion");
    secciones.forEach(function (seccion) {
      var enlace = crear("a", null, seccion.titulo);
      enlace.href = "#" + seccion.id;
      nav.appendChild(enlace);
    });
  }

  function renderizarPlato(item) {
    var plato = crear("div", "plato");

    var linea = crear("div", "plato__linea");
    var nombre = crear("span", "plato__nombre", item.nombre);

    (item.tags || []).forEach(function (tag) {
      if (ETIQUETAS[tag]) nombre.appendChild(crear("span", "etiqueta", ETIQUETAS[tag]));
    });

    linea.appendChild(nombre);
    linea.appendChild(crear("span", "plato__puntos"));
    linea.appendChild(crear("span", "plato__precio", formatearPrecio(item.precio)));
    plato.appendChild(linea);

    if (item.descripcion) {
      plato.appendChild(crear("p", "plato__descripcion", item.descripcion));
    }
    return plato;
  }

  function renderizarSeccion(seccion) {
    var bloque = crear("section", "seccion");
    bloque.id = seccion.id;

    var cabecera = crear("div", "seccion__cabecera");
    cabecera.appendChild(crear("span", "seccion__vineta"));
    cabecera.appendChild(crear("h2", "seccion__titulo", seccion.titulo));
    bloque.appendChild(cabecera);

    if (seccion.nota) bloque.appendChild(crear("p", "seccion__nota", seccion.nota));
    if (seccion.intro) bloque.appendChild(crear("p", "seccion__intro", seccion.intro));

    if (seccion.listaSimple && seccion.listaSimple.length) {
      var lista = crear("ul", "lista-simple");
      seccion.listaSimple.forEach(function (texto) {
        lista.appendChild(crear("li", null, texto));
      });
      bloque.appendChild(lista);
    }

    (seccion.items || [])
      .filter(function (item) { return item.disponible !== false; })
      .forEach(function (item) { bloque.appendChild(renderizarPlato(item)); });

    return bloque;
  }

  function activarSeguimientoNavegacion() {
    var enlaces = Array.prototype.slice.call(
      document.querySelectorAll(".navegacion a")
    );
    var porId = {};
    enlaces.forEach(function (a) { porId[a.getAttribute("href").slice(1)] = a; });

    var observador = new IntersectionObserver(
      function (entradas) {
        entradas.forEach(function (entrada) {
          if (!entrada.isIntersecting) return;
          enlaces.forEach(function (a) { a.classList.remove("activa"); });
          var activa = porId[entrada.target.id];
          if (activa) {
            activa.classList.add("activa");
            activa.scrollIntoView({ block: "nearest", inline: "center", behavior: "smooth" });
          }
        });
      },
      { rootMargin: "-20% 0px -70% 0px" }
    );

    document.querySelectorAll(".seccion").forEach(function (seccion) {
      observador.observe(seccion);
    });
  }

  function iniciar() {
    var secciones = MENU.secciones;
    renderizarCabeceraYPie();
    renderizarNavegacion(secciones);

    var carta = document.getElementById("carta");
    secciones.forEach(function (seccion) {
      carta.appendChild(renderizarSeccion(seccion));
    });

    activarSeguimientoNavegacion();
  }

  document.addEventListener("DOMContentLoaded", iniciar);
})();
