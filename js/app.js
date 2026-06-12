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
    return precio.toFixed(2).replace(".", ",") + "\u00A0€";
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
    var nav = document.getElementById("navegacion");
    var enlaces = Array.prototype.slice.call(
      document.querySelectorAll(".navegacion a")
    );
    var porId = {};
    enlaces.forEach(function (a) { porId[a.getAttribute("href").slice(1)] = a; });

    var seccionActivaId = null;

    function marcarActivo(id) {
      if (seccionActivaId === id) return;
      seccionActivaId = id;

      enlaces.forEach(function (a) {
        if (a.getAttribute("href").slice(1) === id) {
          a.classList.add("activa");
          
          // Scroll the menu container to center the active link
          var navWidth = nav.clientWidth;
          var linkLeft = a.offsetLeft;
          var linkWidth = a.clientWidth;
          var targetScrollLeft = linkLeft - (navWidth / 2) + (linkWidth / 2);
          
          nav.scrollTo({
            left: targetScrollLeft,
            behavior: "smooth"
          });
        } else {
          a.classList.remove("activa");
        }
      });
    }

    function actualizarScrollspy() {
      var secciones = document.querySelectorAll(".seccion");
      if (!secciones.length) return;

      var isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 20;
      if (isAtBottom) {
        marcarActivo(secciones[secciones.length - 1].id);
        return;
      }

      var navHeight = nav.offsetHeight || 58;
      var threshold = navHeight + 24; 

      var activaId = seccionActivaId || secciones[0].id;
      
      for (var i = 0; i < secciones.length; i++) {
        var rect = secciones[i].getBoundingClientRect();
        if (rect.top <= threshold) {
          activaId = secciones[i].id;
        } else {
          break;
        }
      }

      if (window.scrollY < 10) {
        activaId = secciones[0].id;
      }

      marcarActivo(activaId);
    }

    window.addEventListener("scroll", actualizarScrollspy);
    window.addEventListener("resize", actualizarScrollspy);
    
    // Initial check
    actualizarScrollspy();
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
