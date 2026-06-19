/* ============================================================
   EL CHIRINGUITO DEL COFIO — Renderizado de la carta
   Lee los datos de js/menu.js (objeto MENU) y construye la web.
   No hace falta tocar este archivo para actualizar la carta.
   ============================================================ */

(function () {
  "use strict";

  var isProgrammaticScroll = false;
  var programmaticScrollTimeout = null;
  var marcarActivoFn = null;

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
      
      enlace.addEventListener("click", function (e) {
        e.preventDefault();
        
        var targetSection = document.getElementById(seccion.id);
        if (targetSection) {
          if (programmaticScrollTimeout) {
            clearTimeout(programmaticScrollTimeout);
          }
          isProgrammaticScroll = true;
          
          if (marcarActivoFn) {
            marcarActivoFn(seccion.id, true);
          }
          
          var navHeight = nav.offsetHeight || 58;
          var targetTop = targetSection.getBoundingClientRect().top + window.scrollY - navHeight - 12;
          
          window.scrollTo({
            top: targetTop,
            behavior: "smooth"
          });
          
          programmaticScrollTimeout = setTimeout(function () {
            isProgrammaticScroll = false;
          }, 800);
        }
      });

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

    var precioTexto = "";
    if (item.precio !== null && item.precio !== undefined) {
      precioTexto = formatearPrecio(item.precio);
    } else if (item.precioTexto) {
      precioTexto = item.precioTexto;
    }
    linea.appendChild(crear("span", "plato__precio", precioTexto));
    plato.appendChild(linea);

    if (item.descripcion) {
      plato.appendChild(crear("p", "plato__descripcion", item.descripcion));
    }

    if (item.alergenos && item.alergenos.length) {
      var alergenosCont = crear("div", "plato__alergenos");
      item.alergenos.forEach(function (key) {
        var al = MENU.alergenos[key];
        if (al) {
          var badge = crear("span", "alergeno-badge alergeno-badge--" + key, al.simbolo);
          badge.title = al.nombre;
          badge.setAttribute("aria-label", "Alérgeno: " + al.nombre);
          alergenosCont.appendChild(badge);
        }
      });
      plato.appendChild(alergenosCont);
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

    function marcarActivo(id, smooth) {
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
          
          if (smooth) {
            nav.scrollTo({
              left: targetScrollLeft,
              behavior: "smooth"
            });
          } else {
            nav.scrollLeft = targetScrollLeft;
          }
        } else {
          a.classList.remove("activa");
        }
      });
    }

    marcarActivoFn = marcarActivo;

    function actualizarScrollspy() {
      if (isProgrammaticScroll) return;

      var secciones = document.querySelectorAll(".seccion");
      if (!secciones.length) return;

      var isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 20;
      if (isAtBottom) {
        marcarActivo(secciones[secciones.length - 1].id, false);
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

      marcarActivo(activaId, false);
    }

    window.addEventListener("scroll", actualizarScrollspy);
    window.addEventListener("resize", actualizarScrollspy);
    
    // Initial check
    actualizarScrollspy();
  }

  function renderizarLeyendaAlergenos() {
    var contenedor = crear("section", "seccion seccion--leyenda");
    contenedor.id = "leyenda-alergenos";

    var cabecera = crear("div", "seccion__cabecera");
    cabecera.appendChild(crear("span", "seccion__vineta"));
    cabecera.appendChild(crear("h2", "seccion__titulo", "Leyenda de Alérgenos"));
    contenedor.appendChild(cabecera);

    var intro = crear("p", "seccion__intro", "Consulte los alérgenos presentes en nuestros platos y bebidas:");
    contenedor.appendChild(intro);

    if (MENU.alergenos) {
      var grid = crear("div", "leyenda-grid");
      Object.keys(MENU.alergenos).forEach(function (key) {
        var al = MENU.alergenos[key];
        var item = crear("div", "leyenda-item");

        var badge = crear("span", "alergeno-badge alergeno-badge--" + key, al.simbolo);
        badge.title = al.nombre;

        var nombre = crear("span", "leyenda-nombre", al.nombre);

        item.appendChild(badge);
        item.appendChild(nombre);
        grid.appendChild(item);
      });
      contenedor.appendChild(grid);
    }

    return contenedor;
  }

  function iniciar() {
    var secciones = MENU.secciones;
    renderizarCabeceraYPie();
    renderizarNavegacion(secciones);

    var carta = document.getElementById("carta");
    secciones.forEach(function (seccion) {
      carta.appendChild(renderizarSeccion(seccion));
    });

    if (MENU.alergenos) {
      carta.appendChild(renderizarLeyendaAlergenos());
    }

    activarSeguimientoNavegacion();
  }

  document.addEventListener("DOMContentLoaded", iniciar);
})();
