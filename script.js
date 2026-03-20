// ═══════════════════════════════════════════════════════════════
// CONFIGURACIÓN CENTRALIZADA
// ═══════════════════════════════════════════════════════════════

const CONFIG = {
    negocio: "Beep Bepp Popayán",
    whatsapp: "573104209977",
    //sedes: ["La Sombrilla", "Lomas de Granada", "Obando"],
    metodosPago: ["💳 Por nequi", "💵 En efectivo", "🔑 Por Bre-B"],
    horario: { abre: 17, cierra: 1 }
};

const MENU = {
    salchipapas: [
        { id: "S6", nombre: "Salchipapa ¡Beep Beep!", precio: 24000, imagen: "salchipapa-beep.jpg", ingredientes: ["4 carnes", "maicitos", "salchicha", "queso", "salsas"], emoji: "🍟", categoria: "SALCHIPAPA 🍟" },
        { id: "S7", nombre: "Salchipapa Familiar", precio: 35000, imagen: "salchipapa-familiar.jpg", ingredientes: ["costilla", "carne desmechada", "chorizo", "tocineta", "carne de hamburguesa", "queso"], emoji: "🍟", categoria: "SALCHIPAPA 🍟" },
        { id: "S8", nombre: "Salchipapa Mega Familiar", precio: 50000, imagen: "salchipapa-mega.jpg", ingredientes: ["costilla", "carne desmechada", "chorizo", "tocineta", "carne de hamburguesa", "maicitos", "maduro", "mucho queso"], emoji: "🍟", categoria: "SALCHIPAPA 🍟" },
        { id: "S9", nombre: "Salchipapa Súper Especial", precio: 30000, imagen: "salchipapa-super.jpg", ingredientes: ["3 carnes", "costilla", "salchicha ranchera", "maduro", "maicitos", "huevo de codorniz", "queso", "salsas"], emoji: "🍟", categoria: "SALCHIPAPA 🍟" },
        { id: "S10", nombre: "Salchipapa Especial", precio: 18000, imagen: "salchipapa-especial.jpg", ingredientes: ["3 carnes", "salchicha", "queso", "salsas"], emoji: "🍟", categoria: "SALCHIPAPA 🍟" },
        { id: "S11", nombre: "Salchipapa Mixta", precio: 12000, imagen: "salchipapa-mixta.jpg", ingredientes: ["2 carnes", "salchicha", "queso", "salsa"], emoji: "🍟", categoria: "SALCHIPAPA 🍟" },
        { id: "S12", nombre: "Salchipapa Carne Desmechada", precio: 10000, imagen: "salchipapa-desmechada.jpg", ingredientes: ["carne desmechada", "salchicha", "queso", "salsa"], emoji: "🍟", categoria: "SALCHIPAPA 🍟" },
        { id: "S13", nombre: "Salchipapa Carne Hamburguesa", precio: 10000, imagen: "salchipapa-hamburguesa.jpg", ingredientes: ["carne hamburguesa", "salchicha", "queso", "salsa"], emoji: "🍟", categoria: "SALCHIPAPA 🍟" },
        { id: "S14", nombre: "Salchipapa Pollo", precio: 10000, imagen: "salchipapa-pollo.jpg", ingredientes: ["pollo", "salchicha", "queso", "salsa"], emoji: "🍟", categoria: "SALCHIPAPA 🍟" },
        { id: "S15", nombre: "Salchipapa Tocineta", precio: 10000, imagen: "salchipapa-tocineta.jpg", ingredientes: ["tocineta", "salchicha", "queso", "salsa"], emoji: "🍟", categoria: "SALCHIPAPA 🍟" },
        { id: "S16", nombre: "Salchipapa Chorizo", precio: 10000, imagen: "salchipapa-chorizo.jpg", ingredientes: ["chorizo", "salchicha", "queso", "salsa"], emoji: "🍟", categoria: "SALCHIPAPA 🍟" },
        { id: "S17", nombre: "Salchipapa Sencilla", precio: 6000, imagen: "salchipapa-sencilla.jpg", ingredientes: ["papas", "salchicha", "queso", "salsa"], emoji: "🍟", categoria: "SALCHIPAPA 🍟" }
    ],
    hamburguesas: [
        { id: "H1", nombre: "Hamburguesa ¡Beep Beep!", precio: 19000, imagen: "hamburguesa-beep.jpg", ingredientes: ["filete de pollo", "tocineta", "cordero", "cebolla", "piña", "jamón", "queso", "lechuga", "tomate", "salsas"], emoji: "🍔", categoria: "HAMBURGUESA 🍔" },
        { id: "H2", nombre: "Patacón Burger", precio: 16000, imagen: "hamburguesa-patacon.jpg", ingredientes: ["tocineta", "pollo", "carne de hamburguesa", "cebolla", "piña", "doble queso", "jamón", "lechuga", "tomate", "salsas"], emoji: "🍔", categoria: "HAMBURGUESA 🍔" },
        { id: "H3", nombre: "Hamburguesa Doble Carne", precio: 17000, imagen: "hamburguesa-doble.jpg", ingredientes: ["pollo", "cebolla", "jamón", "queso", "piña", "lechuga", "tomate", "salsas"], emoji: "🍔", categoria: "HAMBURGUESA 🍔" },
        { id: "H4", nombre: "Hamburguesa Especial", precio: 15000, imagen: "hamburguesa-especial.jpg", ingredientes: ["pollo", "tocineta", "cebolla", "jamón", "piña", "lechuga", "tomate", "salsas"], emoji: "🍔", categoria: "HAMBURGUESA 🍔" },
        { id: "H5", nombre: "Combo Hamburguesa", precio: 12000, imagen: "hamburguesa-combo.jpg", ingredientes: ["hamburguesa sencilla", "papas a la francesa", "vaso gaseosa"], emoji: "🍔", categoria: "HAMBURGUESA 🍔" },
        { id: "H6", nombre: "Hamburguesa Sencilla", precio: 8000, imagen: "hamburguesa-sencilla.jpg", ingredientes: ["cebolla", "piña", "queso", "lechuga", "tomate", "salsas"], emoji: "🍔", categoria: "HAMBURGUESA 🍔" }
    ],
    perros: [
        { id: "P1", nombre: "Perro ¡Beep Beep!", precio: 15000, imagen: "perro-beep.jpg", ingredientes: ["salchicha tipo ranchera", "pollo", "jamón de cordero", "queso", "tocineta", "piña", "cebolla", "ripio", "salsas"], emoji: "🌭", categoria: "PERRO CALIENTE 🌭" },
        { id: "P2", nombre: "Perro Especial", precio: 13000, imagen: "perro-especial.jpg", ingredientes: ["salchicha tipo ranchera", "queso", "pollo", "tocineta", "piña", "cebolla", "ripio", "salsas"], emoji: "🌭", categoria: "PERRO CALIENTE 🌭" },
        { id: "P3", nombre: "Combo Perro", precio: 12000, imagen: "perro-combo.jpg", ingredientes: ["perro sencillo", "papas a la francesa", "vaso gaseosa"], emoji: "🌭", categoria: "PERRO CALIENTE 🌭" },
        { id: "P4", nombre: "Perro Sencillo", precio: 8000, imagen: "perro-sencillo.jpg", ingredientes: ["salchicha", "cebolla", "piña", "queso", "salsas"], emoji: "🌭", categoria: "PERRO CALIENTE 🌭" }
    ],
    sandwiches: [
        { id: "S1", nombre: "Sandwich ¡Beep Beep!", precio: 19000, imagen: "sandwich-beep.jpg", ingredientes: ["tocineta", "cordero", "jamón", "queso", "lechuga", "tomate"], emoji: "🥪", categoria: "SANDWICH 🥪" },
        { id: "S2", nombre: "Sandwich Cordero", precio: 15000, imagen: "sandwich-cordero.jpg", ingredientes: ["cordero", "tocineta", "jamón", "queso", "lechuga", "tomate"], emoji: "🥪", categoria: "SANDWICH 🥪" },
        { id: "S3", nombre: "Sandwich Pollo", precio: 15000, imagen: "sandwich-pollo.jpg", ingredientes: ["pollo", "jamón", "queso", "piña", "lechuga", "tomate"], emoji: "🥪", categoria: "SANDWICH 🥪" },
        { id: "S4", nombre: "Sandwich Jamón Tocineta", precio: 11000, imagen: "sandwich-jamon.jpg", ingredientes: ["jamón", "queso", "tocineta", "lechuga", "tomate"], emoji: "🥪", categoria: "SANDWICH 🥪" },
        { id: "S5", nombre: "Sandwich Hawaiano", precio: 10000, imagen: "sandwich-hawaiano.jpg", ingredientes: ["jamón", "queso", "piña", "lechuga", "tomate"], emoji: "🥪", categoria: "SANDWICH 🥪" }
    ],
    puntas: [
        { id: "P5", nombre: "Puntas de Pollo", precio: 6000, imagen: "puntas-pollo.jpg", ingredientes: ["puntas de pollo"], emoji: "🌮", categoria: "PUNTAS 🌮" },
        { id: "P6", nombre: "Puntas Hawaianas", precio: 5000, imagen: "puntas-hawaianas.jpg", ingredientes: ["puntas hawaianas"], emoji: "🌮", categoria: "PUNTAS 🌮" },
        { id: "P7", nombre: "Puntas Cubanas", precio: 5000, imagen: "puntas-cubanas.jpg", ingredientes: ["puntas cubanas"], emoji: "🌮", categoria: "PUNTAS 🌮" }
    ],
    pizza: [
        { id: "P9", nombre: "Combo Pizza", precio: 12000, imagen: "pizza-combo.jpg", ingredientes: ["pizza combinada con variedad de ingredientes"], emoji: "🍕", categoria: "PIZZA 🍕" },
        { id: "P10", nombre: "Pizza Mixta", precio: 11000, imagen: "pizza-mixta.jpg", ingredientes: ["pizza con ingredientes mixtos"], emoji: "🍕", categoria: "PIZZA 🍕" },
        { id: "P11", nombre: "Pizza Pollo-Champiñones", precio: 11000, imagen: "pizza-pollo.jpg", ingredientes: ["pollo y champiñones"], emoji: "🍕", categoria: "PIZZA 🍕" },
        { id: "P12", nombre: "Pizza Hawaiana", precio: 8000, imagen: "pizza-hawaiana.jpg", ingredientes: ["jamón y piña"], emoji: "🍕", categoria: "PIZZA 🍕" },
        { id: "P13", nombre: "Pizza Peperoni", precio: 8000, imagen: "pizza-peperoni.jpg", ingredientes: ["peperoni clásico"], emoji: "🍕", categoria: "PIZZA 🍕" }
    ],
    patacon: [
        { id: "P8", nombre: "Patacón Con Todo", precio: 15000, imagen: "patacon-todo.jpg", ingredientes: ["patacón", "carne de hamburguesa", "tomate", "pollo", "tocineta", "queso", "salsas"], emoji: "🍌", categoria: "PATACÓN 🍌" }
    ],
    pollo_apanado: [
        { id: "A1", nombre: "Pollo Entero Apanado", precio: 36000, imagen: "pollo-entero.jpg", ingredientes: ["Pollo apanado entero"], emoji: "🍗", categoria: "POLLO APANADO 🍗" },
        { id: "A2", nombre: "Medio Pollo Apanado", precio: 18000, imagen: "pollo-medio.jpg", ingredientes: ["Medio pollo apanado"], emoji: "🍗", categoria: "POLLO APANADO 🍗" },
        { id: "A3", nombre: "Cuarto de Pollo Apanado", precio: 9000, imagen: "pollo-cuarto.jpg", ingredientes: ["Cuarto de pollo apanado"], emoji: "🍗", categoria: "POLLO APANADO 🍗" }
    ],
    al_carbon: [
        { id: "C1", nombre: "Lomo de Res al Carbón", precio: 15000, imagen: "carbon-res.jpg", ingredientes: ["carne con papas", "ensalada"], emoji: "🔥", categoria: "AL CARBÓN 🔥" },
        { id: "C2", nombre: "Lomo de Cerdo al Carbón", precio: 15000, imagen: "carbon-cerdo.jpg", ingredientes: ["carne con papas", "ensalada"], emoji: "🔥", categoria: "AL CARBÓN 🔥" },
        { id: "C3", nombre: "Filete de Pollo al Carbón", precio: 15000, imagen: "carbon-pollo.jpg", ingredientes: ["carne con papas", "ensalada"], emoji: "🔥", categoria: "AL CARBÓN 🔥" },
        { id: "C4", nombre: "Pechuga Gratinada al Carbón", precio: 17000, imagen: "carbon-pechuga.jpg", ingredientes: ["pechuga gratinada", "papas", "ensalada"], emoji: "🔥", categoria: "AL CARBÓN 🔥" }
    ],
    adiciones: [
        { id: "P14", nombre: "Adición Carne Hamburguesa", precio: 5000, imagen: "adicion-carne.jpg", ingredientes: ["porción adicional de carne"], emoji: "➕", categoria: "PORCIÓN ADICIONES ➕" },
        { id: "P15", nombre: "Adición Papa", precio: 4000, imagen: "adicion-papa.jpg", ingredientes: ["porción adicional de papas"], emoji: "➕", categoria: "PORCIÓN ADICIONES ➕" },
        { id: "P16", nombre: "Adición Tocineta", precio: 4000, imagen: "adicion-tocineta.jpg", ingredientes: ["porción adicional de tocineta"], emoji: "➕", categoria: "PORCIÓN ADICIONES ➕" },
        { id: "P17", nombre: "Adición Pollo", precio: 4000, imagen: "adicion-pollo.jpg", ingredientes: ["porción adicional de pollo"], emoji: "➕", categoria: "PORCIÓN ADICIONES ➕" }
    ],
    bebidas: [
        { id: "B1", nombre: "Bebida Jugo en agua", precio: 5000, imagen: "jugo-agua.jpg", ingredientes: ["Sabor a elección", "+$500 envase para llevar"], emoji: "🥤", categoria: "BEBIDAS 🥤" },
        { id: "B2", nombre: "Bebida Jugo en leche", precio: 6000, imagen: "jugo-leche.jpg", ingredientes: ["Sabor a elección", "+$500 envase para llevar"], emoji: "🥤", categoria: "BEBIDAS 🥤" },
        { id: "B3", nombre: "Bebida Cocacola personal", precio: 3000, imagen: "cocacola-personal.jpg", ingredientes: ["Original o Sin Azúcar"], emoji: "🥤", categoria: "BEBIDAS 🥤" },
        { id: "B4", nombre: "Bebida Cocacola litro y medio", precio: 7000, imagen: "cocacola-grande.jpg", ingredientes: ["Para compartir"], emoji: "🥤", categoria: "BEBIDAS 🥤" },
        { id: "B5", nombre: "Bebida Postobón litro y medio", precio: 5000, imagen: "postobon-grande.jpg", ingredientes: ["Sabor a elección"], emoji: "🥤", categoria: "BEBIDAS 🥤" },
        { id: "B6", nombre: "Bebida Econolitro", precio: 5000, imagen: "econolitro.jpg", ingredientes: ["Económico para compartir"], emoji: "🥤", categoria: "BEBIDAS 🥤" },
        { id: "B7", nombre: "Bebida Milo Frío o Caliente", precio: 7000, imagen: "milo.jpg", ingredientes: ["Energía para el día"], emoji: "🥤", categoria: "BEBIDAS 🥤" },
        { id: "B8", nombre: "Bebida Hit en caja", precio: 5000, imagen: "hit-caja.jpg", ingredientes: ["Sabor a elección"], emoji: "🥤", categoria: "BEBIDAS 🥤" },
        { id: "B9", nombre: "Bebida Hit personal", precio: 3000, imagen: "hit-personal.jpg", ingredientes: ["Sabor a elección"], emoji: "🥤", categoria: "BEBIDAS 🥤" },
        { id: "B10", nombre: "Bebida Lata Cerveza", precio: 4000, imagen: "cerveza.jpg", ingredientes: ["Marca según disponibilidad"], emoji: "🍺", categoria: "BEBIDAS 🥤" }
    ]
};
// ═══════════════════════════════════════════════════════════════
// ESTADO GLOBAL
// ═══════════════════════════════════════════════════════════════

let carrito = [];
let tipoEntrega = "domicilio"; // "domicilio" o "recoger"
let formularioDatos = {
    nombre: "",
    telefono: "",
    direccion: "",
    barrio: "",
    indicacion: "",
    //sede: CONFIG.sedes[0],
    metodo_pago: CONFIG.metodosPago[0],
    observaciones: ""
};
let intentarEnviarCerrado = false;

// ═══════════════════════════════════════════════════════════════
// DOM ELEMENTS
// ═══════════════════════════════════════════════════════════════

const carritoBtn = document.getElementById("carritoBtn");
const carritoClose = document.getElementById("carritoClose");
const carritoDrawer = document.getElementById("carritoDrawer");
const overlay = document.getElementById("overlay");
const tabsContainer = document.getElementById("tabsContainer");
const productosGrid = document.getElementById("productosGrid");
const carritoContenido = document.getElementById("carritoContenido");
const carritoBadge = document.getElementById("carritoBadge");
const btnPedir = document.getElementById("btnPedir");
const statusHorario = document.getElementById("statusHorario");
const bannerCerrado = document.getElementById("bannerCerrado");
const modalCerrado = document.getElementById("modalCerrado");
const modalCancelar = document.getElementById("modalCancelar");
const modalConfirmar = document.getElementById("modalConfirmar");

// ═══════════════════════════════════════════════════════════════
// FUNCIONES AUXILIARES
// ═══════════════════════════════════════════════════════════════

function formatearPrecio(precio) {
    return new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP',
        minimumFractionDigits: 0
    }).format(precio);
}

function estaAbierto() {
    const ahora = new Date();
    const hora = ahora.getHours();

    // Si el cierre es menor que la apertura (ej: abre 17, cierra 1)
    if (CONFIG.horario.cierra < CONFIG.horario.abre) {
        // Está abierto si:
        // Es más de la hora de abrir (17:00 a 23:59) 
        // O es antes de la hora de cerrar (00:00 a 00:59)
        return hora >= CONFIG.horario.abre || hora < CONFIG.horario.cierra;
    }

    // Horario normal (ej: abre 9, cierra 18)
    return hora >= CONFIG.horario.abre && hora < CONFIG.horario.cierra;
}

function actualizarEstadoHorario() {
    const abierto = estaAbierto();

    const status = document.getElementById("statusHorario");
    const emoji = document.getElementById("statusEmoji");
    const texto = document.getElementById("statusTexto");

    if (!status || !emoji || !texto) return;

    if (abierto) {
        emoji.textContent = "🟢";
        texto.textContent = "Abierto ahora";
        status.classList.remove("cerrado");
        status.classList.add("abierto");
    } else {
        emoji.textContent = "⛔";
        // Texto actualizado para reflejar el horario correcto
        texto.textContent = "Cerrado. Abrimos 5:00 PM";
        status.classList.remove("abierto");
        status.classList.add("cerrado");
    }

    // Verifica que el banner exista antes de intentar cambiar su clase
    if (bannerCerrado) {
        bannerCerrado.classList.toggle("visible", !abierto);
    }
}

function abrirCarrito() {
    gtag('event', 'abrir_carrito', {
        event_category: 'interaccion',
        event_label: 'Usuario abrió carrito'
    });
    carritoDrawer.classList.add("visible");
    overlay.style.display = "block";
}

function cerrarCarrito() {
    carritoDrawer.classList.remove("visible");
    overlay.style.display = "none";
}

// ═══════════════════════════════════════════════════════════════
// RENDERIZAR MENÚ
// ═══════════════════════════════════════════════════════════════

function renderizarMenu() {
    // 1. Definimos las categorías vinculándolas con los datos del nuevo MENU
    const categorias = [
        { id: "salchipapas", nombre: "Salchipapas", emoji: "🍟", items: MENU.salchipapas },
        { id: "hamburguesas", nombre: "Hamburguesas", emoji: "🍔", items: MENU.hamburguesas },
        { id: "perros", nombre: "Perros", emoji: "🌭", items: MENU.perros },
        { id: "sandwiches", nombre: "Sandwiches", emoji: "🥪", items: MENU.sandwiches },
        { id: "puntas", nombre: "Puntas", emoji: "🌮", items: MENU.puntas },
        { id: "pizza", nombre: "Pizza", emoji: "🍕", items: MENU.pizza },
        { id: "patacon", nombre: "Patacón", emoji: "🍌", items: MENU.patacon },
        { id: "pollo_apanado", nombre: "Pollo Apanado", emoji: "🍗", items: MENU.pollo_apanado },
        { id: "al_carbon", nombre: "Al Carbón", emoji: "🔥", items: MENU.al_carbon },
        { id: "adiciones", nombre: "Adiciones", emoji: "➕", items: MENU.adiciones },
        { id: "bebidas", nombre: "Bebidas", emoji: "🥤", items: MENU.bebidas }
    ];

    // 2. Renderizar las pestañas (Tabs)
    tabsContainer.innerHTML = "";
    categorias.forEach((cat, idx) => {
        const tabBtn = document.createElement("button");
        tabBtn.className = `tab-btn ${idx === 0 ? "active" : ""}`;
        tabBtn.innerHTML = `${cat.emoji} ${cat.nombre}`;
        
        // Pasamos la lista de categorias completa para que la función encontrar el item
        tabBtn.onclick = () => seleccionarCategoria(cat.id, categorias);
        tabsContainer.appendChild(tabBtn);
    });

    // 3. Mostrar la primera categoría por defecto (Salchipapas)
    seleccionarCategoria("salchipapas", categorias);
}

function seleccionarCategoria(categoriaId, categorias) {
    const categoria = categorias.find(c => c.id === categoriaId);
    if (!categoria) return;

    // Actualizar tabs activos
    document.querySelectorAll(".tab-btn").forEach((btn) => {
        btn.classList.toggle("active", btn.innerHTML.includes(categoria.nombre));
    });

    productosGrid.innerHTML = "";
    
    // Ordenar productos de menor a mayor precio
    const itemsOrdenados = [...categoria.items].sort((a, b) => a.precio - b.precio);

    itemsOrdenados.forEach(producto => {
        const card = document.createElement("div");
        card.className = "producto-card";
        
        // ═══════════════════════════════════════════════════════════════
        // LÓGICA DE LIMPIEZA VISUAL (Para la tarjeta)
        // ═══════════════════════════════════════════════════════════════
        
        // 1. Definimos qué palabras queremos quitar de la vista
        const palabrasAQuitar = ["salchipapa", "hamburguesa", "perro", "sandwich", "pizza", "adición", "puntas", "bebida"];
        
        let nombreParaMostrar = producto.nombre;

        // 2. Buscamos y removemos la palabra si existe (sin importar mayúsculas)
        palabrasAQuitar.forEach(palabra => {
            const regex = new RegExp(palabra, "gi"); // "gi" significa global e ignora mayúsculas
            nombreParaMostrar = nombreParaMostrar.replace(regex, "");
        });

        // 3. Limpiamos espacios sobrantes y aseguramos que la primera letra sea Mayúscula
        nombreParaMostrar = nombreParaMostrar.trim();
        nombreParaMostrar = nombreParaMostrar.charAt(0).toUpperCase() + nombreParaMostrar.slice(1);
        
        // ═══════════════════════════════════════════════════════════════

        // Imagen con seguro de error
        const rutaImagen = producto.imagen ? `images/${producto.imagen}` : "images/logo.jpeg";

        card.innerHTML = `
            <img class="producto-imagen" 
                 src="${rutaImagen}" 
                 alt="${producto.nombre}" 
                 onerror="this.src='images/logo.jpeg'">
            
            <div class="producto-contenido">
                <div class="producto-header">
                    <span class="producto-emoji">${producto.emoji}</span>
                    <span class="producto-nombre">${nombreParaMostrar}</span> 
                </div>
                <div class="producto-precio">${formatearPrecio(producto.precio)}</div>
                
                <div class="ingredientes-seccion">
                    <button class="btn-ingredientes" onclick="toggleIngredientes(this)">👁 Ver ingredientes</button>
                    <div class="ingredientes-lista">
                        <strong>Ingredientes:</strong><br>${producto.ingredientes.join(", ")}
                    </div>
                </div>

                <button class="btn-agregar" onclick="agregarAlCarrito('${producto.id}', '${producto.nombre}', ${producto.precio})">
                    Pedir +
                </button>
            </div>
        `;
        productosGrid.appendChild(card);
    });

    // Desplazamiento suave al inicio
    productosGrid.scrollIntoView({ behavior: "smooth", block: "start" });
}

function toggleIngredientes(btn) {
    const lista = btn.nextElementSibling;
    lista.classList.toggle("visible");
    btn.textContent = lista.classList.contains("visible") ? "👁 Ocultar" : "👁 Ver ingredientes";
}

// ═══════════════════════════════════════════════════════════════
// CARRITO
// ═══════════════════════════════════════════════════════════════

function agregarAlCarrito(id, nombre, precio) {
    const existente = carrito.find(item => item.id === id);
      // EVENTO CORRECTO 👇
    gtag('event', 'add_to_cart', {
        event_category: 'ecommerce',
        event_label: nombre,
        value: precio
    });
    if (existente) {
        existente.cantidad++;
    } else {
        carrito.push({ id, nombre, precio, cantidad: 1 });
    }
    actualizarCarrito();

    // Feedback visual sin abrir el carrito
    carritoBadge.classList.remove('bounce');
    void carritoBadge.offsetWidth;
    carritoBadge.classList.add('bounce');
    setTimeout(() => carritoBadge.classList.remove('bounce'), 400);

    const btnClickeado = document.querySelector(`[onclick*="'${id}'"]`);
    if (btnClickeado) {
        const textoOriginal = btnClickeado.textContent;
        btnClickeado.textContent = '✓ Agregado';
        btnClickeado.style.background = '#27ae60';
        btnClickeado.disabled = true;
        setTimeout(() => {
            btnClickeado.textContent = textoOriginal;
            btnClickeado.style.background = '';
            btnClickeado.disabled = false;
        }, 1000);
    }
}

function actualizarCarrito() {
    carritoBadge.textContent = carrito.reduce((sum, item) => sum + item.cantidad, 0);
    actualizarBadge()
    renderizarCarrito();
}

function renderizarCarrito() {
    carritoContenido.innerHTML = "";

    if (carrito.length === 0) {
        carritoContenido.innerHTML = `<div class="carrito-vacio">Tu carrito está vacío</div>`;
        // SEGURIDAD: Ocultamos el botón de todas las formas posibles si no hay nada
        btnPedir.classList.add("oculto");
        btnPedir.style.display = "none"; 
        return;
    }

    // Si hay productos, nos aseguramos de que el botón sea visible
    btnPedir.classList.remove("oculto");
    btnPedir.style.display = "block"; 

    let html = `<div class="carrito-items">`;

    carrito.forEach(item => {
        html += `
            <div class="carrito-item">
                <div class="carrito-item-nombre">${item.nombre}</div>
                <div class="carrito-item-precio">${formatearPrecio(item.precio)}</div>
                <div class="carrito-item-controles">
                    <button class="btn-cantidad" onclick="cambiarCantidad('${item.id}', -1)">−</button>
                    <div class="carrito-item-cantidad">${item.cantidad}x</div>
                    <button class="btn-cantidad" onclick="cambiarCantidad('${item.id}', 1)">+</button>
                    <button class="btn-eliminar" onclick="eliminarDelCarrito('${item.id}')" title="Eliminar producto"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/><path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/></svg></button>
                </div>
            </div>
        `;
    });

    html += `</div>`;
    html += `<div class="carrito-separador"></div>`;

    const total = carrito.reduce((sum, item) => sum + (item.precio * item.cantidad), 0);
    html += `
        <div class="carrito-total">
            <div class="carrito-total-label">Total del pedido:</div>
            <div class="carrito-total-valor">${formatearPrecio(total)}</div>
        </div>
    `;

    html += `<div class="formulario-seccion">`;
    html += `<div class="formulario-titulo">Tipo de Entrega</div>`;
    html += `<div class="toggle-entrega">`;
    html += `<button class="toggle-btn ${tipoEntrega === 'domicilio' ? 'active' : ''}" onclick="cambiarTipoEntrega('domicilio')">🛵 Domicilio</button>`;
    html += `<button class="toggle-btn ${tipoEntrega === 'recoger' ? 'active' : ''}" onclick="cambiarTipoEntrega('recoger')">🏪 Recoger en punto</button>`;
    html += `</div>`;
    html += `</div>`;

    if (tipoEntrega === 'domicilio') {
        html += `<div class="banner-domicilio visible">⚠️Ten en cuenta: El valor del domicilio NO está incluido en el total. El costo del domicilio se cobra aparte.</div>`;
    }

    html += `<div class="form-group">`;
    html += `<label class="form-label">Nombre completo<span class="requerido">*</span></label>`;
    html += `<input type="text" class="form-input" id="formNombre" placeholder="Tu nombre" value="${formularioDatos.nombre}" oninput="actualizarFormulario('nombre', this.value);validarCampos()">`;
    html += `<span class="error-msg"></span>`; 
    html += `</div>`;

    html += `<div class="form-group">`;
    html += `<label class="form-label">Celular<span class="requerido">*</span></label>`;
    html += `<input type="tel" class="form-input" id="formTelefono" placeholder="3126660512" maxlength="10" inputmode="numeric" value="${formularioDatos.telefono}" oninput="filtrarTelefono(this)">`;
    html += `<span class="error-msg"></span>`; 
    html += `</div>`;

    if (tipoEntrega === 'domicilio') {
        html += `<div class="form-group">`;
        html += `<label class="form-label">Dirección<span class="requerido">*</span></label>`;
        html += `<input type="text" class="form-input" id="formDireccion" placeholder="Ej: Calle 5 # 8-45" value="${formularioDatos.direccion}" oninput="actualizarFormulario('direccion', this.value);validarCampos()">`;
        html += `<span class="error-msg"></span>`; 
        html += `</div>`;

        html += `<div class="form-group">`;
        html += `<label class="form-label">📌 Indicación especial de dirección <span style="font-weight:400;color:var(--color-gris-claro)">(opcional)</span></label>`;
        html += `<input type="text" class="form-input" id="formIndicacion" placeholder="Ej: casa amarilla, 2do piso, callejón..." value="${formularioDatos.indicacion}" onchange="actualizarFormulario('indicacion', this.value)">`;
        html += `</div>`;

        html += `<div class="form-group">`;
        html += `<label class="form-label">Barrio<span class="requerido">*</span></label>`;
        html += `<input type="text" class="form-input" id="formBarrio" placeholder="Tu barrio" value="${formularioDatos.barrio}" oninput="actualizarFormulario('barrio', this.value);validarCampos()">`;
        html += `<span class="error-msg"></span>`; 
        html += `</div>`;
    }

    //html += `<div class="form-group">`;
    //html += `<label class="form-label">Sede ${tipoEntrega === 'domicilio' ? 'del pedido' : 'donde recoge'}<span class="requerido">*</span></label>`;
    //html += `<select class="form-select" id="formSede" onchange="actualizarFormulario('sede', this.value);validarCampos()">`;
    //<CONFIG.sedes.forEach(sede => {
    //    html += `<option value="${sede}" ${formularioDatos.sede === sede ? 'selected' : ''}>${sede}</option>`;
    //});
    //html += `</select>`;
    //html += `</div>`;

    html += `<div class="form-group">`;
    html += `<label class="form-label">Método de pago<span class="requerido">*</span></label>`;
    html += `<select class="form-select" id="formMetodo" onchange="actualizarFormulario('metodo_pago', this.value);validarCampos()">`;
    CONFIG.metodosPago.forEach(metodo => {
        html += `<option value="${metodo}" ${formularioDatos.metodo_pago === metodo ? 'selected' : ''}>${metodo}</option>`;
    });
    html += `</select>`;
    html += `</div>`;

    html += `<div class="form-group">`;
    html += `<label class="form-label">📝 ¿Alguna solicitud especial? <span style="font-weight:400;color:var(--color-gris-claro)">(opcional)</span></label>`;
    html += `<textarea class="form-input" id="formObservaciones" placeholder="Ej: Todas las salsas, solo ajo, llamar cuando esté afuera" rows="2" style="resize:none" onchange="actualizarFormulario('observaciones', this.value)">${formularioDatos.observaciones}</textarea>`;
    html += `</div>`;

    carritoContenido.innerHTML = html;
    validarCampos();
}

function cambiarTipoEntrega(tipo) {
    tipoEntrega = tipo;
    renderizarCarrito();
    // validarCampos se llama al final de renderizarCarrito
}

function actualizarFormulario(campo, valor) {
    formularioDatos[campo] = valor;
}

function filtrarTelefono(input) {
    // Deja solo números
    let valor = input.value.replace(/\D/g, '');
    // Limita a 10 dígitos
    if (valor.length > 10) valor = valor.slice(0, 10);
    
    input.value = valor;
    // Actualizamos el objeto de datos
    formularioDatos.telefono = valor;
    
    // Ejecutamos la validación para que el error desaparezca apenas llegue a 10
    validarCampos();
}

function validarCampos() {
    const esRecoger = tipoEntrega === "recoger";
    
    // 1. Definimos las reglas
    const nombreOk = formularioDatos.nombre.trim().length > 2;
    const telefonoOk = formularioDatos.telefono.trim().length === 10;
    const direccionOk = esRecoger ? true : (formularioDatos.direccion.trim().length > 3);
    const barrioOk = esRecoger ? true : (formularioDatos.barrio.trim().length > 2);

    // 2. Función interna para mostrar/ocultar el error visualmente
    const actualizarVisual = (idInput, esValido, mensaje) => {
        const input = document.getElementById(idInput);
        if (!input) return;
        const contenedor = input.parentElement;
        const errorSpan = contenedor.querySelector('.error-msg');

        // Solo mostramos error si el usuario ya escribió algo o si intentó avanzar
        if (formularioDatos[idInput.replace('form', '').toLowerCase()] !== "" || !esValido) {
            if (!esValido) {
                input.classList.add('input-error');
                if (errorSpan) errorSpan.innerText = mensaje;
            } else {
                input.classList.remove('input-error');
                if (errorSpan) errorSpan.innerText = "";
            }
        }
    };

    // 3. Aplicamos la validación visual a cada campo
    actualizarVisual('formNombre', nombreOk, "Ingresa tu nombre completo");
    actualizarVisual('formTelefono', telefonoOk, "Ingresa los 10 dígitos de tu celular");
    
    if (!esRecoger) {
        actualizarVisual('formDireccion', direccionOk, "Ingresa una dirección válida");
        actualizarVisual('formBarrio', barrioOk, "Ingresa tu barrio");
    }

    // 4. Lógica del botón: Solo aparece si TODO está perfecto
    const todoValido = nombreOk && telefonoOk && direccionOk && barrioOk;
    
    if (todoValido) {
        btnPedir.classList.remove("oculto");
        btnPedir.style.display = "block"; // Aseguramos que se vea
    } else {
        btnPedir.classList.add("oculto");
        btnPedir.style.display = "none";
    }
}

function marcarError(id, mensaje) {
    const input = document.getElementById(id);

    input.classList.add("input-error");

    if (!input.nextElementSibling || !input.nextElementSibling.classList.contains("error-msg")) {
        const error = document.createElement("small");
        error.className = "error-msg";
        error.innerText = mensaje;
        input.parentNode.appendChild(error);
    }
}

function limpiarError(id) {
    const input = document.getElementById(id);

    input.classList.remove("input-error");

    if (input.nextElementSibling && input.nextElementSibling.classList.contains("error-msg")) {
        input.nextElementSibling.remove();
    }
}

function toggleBoton(valido) {
    if (valido) {
        btnPedir.disabled = false;
        btnPedir.classList.remove("deshabilitado");
    } else {
        btnPedir.disabled = true;
        btnPedir.classList.add("deshabilitado");
    }
}

function cambiarCantidad(id, cambio) {
    const item = carrito.find(i => i.id === id);
    if (item) {
        item.cantidad += cambio;
        if (item.cantidad <= 0) {
            eliminarDelCarrito(id);
        } else {
            actualizarCarrito();
        }
    }
}

function eliminarDelCarrito(id) {
    carrito = carrito.filter(item => item.id !== id);
    actualizarCarrito();
}

// ═══════════════════════════════════════════════════════════════
// ENVIAR PEDIDO
// ═══════════════════════════════════════════════════════════════

function validarFormulario() {
    let errores = [];

    const nombre = formularioDatos.nombre?.trim() || "";
    const telefono = formularioDatos.telefono?.trim() || "";
    const metodo_pago = formularioDatos.metodo_pago?.trim() || "";
    const direccion = formularioDatos.direccion?.trim() || "";
    const barrio = formularioDatos.barrio?.trim() || "";

    // VALIDACIONES BÁSICAS
    if (!nombre) {
        errores.push("El nombre es obligatorio");
    }

    if (!telefono) {
        errores.push("El número de teléfono es obligatorio");
    } else if (!/^\d{10}$/.test(telefono)) {
        errores.push("El número debe tener exactamente 10 dígitos");
    }

    if (!metodo_pago) {
        errores.push("Debes seleccionar un método de pago");
    }

    // VALIDACIÓN SI ES DOMICILIO
    if (tipoEntrega === 'domicilio') {
        if (!direccion) {
            errores.push("La dirección es obligatoria");
        }
        if (!barrio) {
            errores.push("El barrio es obligatorio");
        }
    }

    // MOSTRAR ERRORES
    if (errores.length > 0) {
        alert("⚠️ Por favor corrige lo siguiente:\n\n- " + errores.join("\n- "));
        return false;
    }

    return true;
}

function enviarPedidoWhatsApp() {
    gtag('event', 'click_pedir', {
        event_category: 'pedido',
        event_label: 'Boton Pedir Toscano'
    });
    if (!validarFormulario()) return;

    if (!estaAbierto()) {
        intentarEnviarCerrado = true;
        cerrarCarrito();
        modalCerrado.classList.add("visible");
        return;
    }

    generarYEnviarMensaje();
}

// Agrega esta función que no existía
function actualizarBadge() {
    const totalItems = carrito.reduce((sum, item) => sum + item.cantidad, 0);
    const badge = document.querySelector('.carrito-badge');
    if (badge) {
        badge.innerText = totalItems;
        // Si el carrito está vacío, ocultamos el círculo rojo
        badge.style.display = totalItems > 0 ? "flex" : "none";
    }
}

// ====== REEMPLAZAR ESTA FUNCIÓN COMPLETA EN SCRIPT.JS ======
function generarYEnviarMensaje() {
    const total = carrito.reduce((sum, item) => sum + (item.precio * item.cantidad), 0);
    const esDomicilio = tipoEntrega === "domicilio";
    
    let texto = `*🍔 Nuevo Pedido - ${CONFIG.negocio}*\n`;
    texto += `------------------------------\n`;
    
    carrito.forEach(item => {
        texto += `• ${item.cantidad}x ${item.nombre} ($${(item.precio * item.cantidad).toLocaleString()})\n`;
    });
    
    texto += `------------------------------\n`;
    
    if (esDomicilio) {
        texto += `*Total (sin domicilio):* $${total.toLocaleString()}\n`;
        texto += `_Valor del domicilio se cobra aparte_\n\n`;
    } else {
        texto += `*Total:* $${total.toLocaleString()}\n\n`;
    }
    
    texto += `*Datos del Cliente:*\n`;
    texto += `👤 Nombre: ${formularioDatos.nombre}\n`;
    texto += `📞 Teléfono: ${formularioDatos.telefono}\n`;
    
    if (esDomicilio) {
        texto += `📍 Dirección: ${formularioDatos.direccion}\n`;
        texto += `🏘️ Barrio: ${formularioDatos.barrio}\n`;
        if (formularioDatos.indicacion && formularioDatos.indicacion.trim().length > 0) {
            texto += `📝 Indicación de dirección: ${formularioDatos.indicacion}\n`;
        }
    } else {
        texto += `🏪 Entrega: Recoger en el punto\n`;
    }

    if (formularioDatos.observaciones && formularioDatos.observaciones.trim().length > 0) {
        texto += `🍳 Solicitud Especial: ${formularioDatos.observaciones}\n`;
    }

    texto += `💳 Pago: ${formularioDatos.metodo_pago}\n`;
    
    if (esDomicilio) {
        texto += `🚚 Entrega: A Domicilio`;
    }

    const enlace = `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(texto)}`;
    window.open(enlace, '_blank');

    // ⚠️ REINICIO TOTAL (Mantenlo siempre para limpiar el pedido enviado)
    carrito = [];
    formularioDatos = {
        nombre: "",
        telefono: "",
        direccion: "",
        barrio: "",
        indicacion: "",
        // sede: CONFIG.sedes[0], <-- Ya no la necesitas, la dejamos comentada o la borras
        metodo_pago: CONFIG.metodosPago[0],
        observaciones: ""
    };
    tipoEntrega = "domicilio";

    // LLAMADAS DE LIMPIEZA VISUAL
    actualizarBadge();   // Pone el círculo rojo en 0
    renderizarCarrito(); // Dibuja "Tu carrito está vacío"
    cerrarCarrito();     // Cierra el panel
}

// ═══════════════════════════════════════════════════════════════
// EVENT LISTENERS
// ═══════════════════════════════════════════════════════════════

carritoBtn.addEventListener("click", abrirCarrito);
carritoClose.addEventListener("click", cerrarCarrito);
btnPedir.addEventListener("click", enviarPedidoWhatsApp);
modalCancelar.addEventListener("click", () => {
    intentarEnviarCerrado = false;
    modalCerrado.classList.remove("visible");
    abrirCarrito();
});
modalConfirmar.addEventListener("click", () => {
    modalCerrado.classList.remove("visible");
    generarYEnviarMensaje();
});

// ═══════════════════════════════════════════════════════════════
// INICIALIZACIÓN
// ═══════════════════════════════════════════════════════════════

document.addEventListener("DOMContentLoaded", () => {
    renderizarMenu();
    actualizarEstadoHorario();
    setInterval(actualizarEstadoHorario, 60000); // Actualizar cada minuto
});

function volverMenu(){

    cerrarCarrito();

    window.scrollTo({ top:0, behavior:"smooth" });

}