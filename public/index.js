const WHATSAPP_NUMBERS = {
  dorrego: "5492617094467",
  godoyCruz: "5492617094474",
};

const BRANCHES = {
  dorrego: "Alem 300, Dorrego",
  godoyCruz: "Figueroa Alcorta 1304, Godoy Cruz",
};

const money = (value) => `$${Number(value).toLocaleString("es-AR")}`;

const standardBurgerVariants = [
  { label: "Simple", price: 13500 },
  { label: "Doble", price: 14000 },
  { label: "Triple", price: 15500 },
];

const burgers = [
  {
    id: "american",
    name: "American",
    description: "Carne 100 gr, cheddar, cebolla caramelizada, panceta, salsa Chick Fill A y barbacoa. Incluye papas.",
    image: "imagenes/americanBurg.jpg",
    variants: standardBurgerVariants,
  },
  {
    id: "caprichosa",
    name: "Caprichosa",
    image: "imagenes/caprichosa.png",
    description: "Carne 100 gr, provoleta, panceta, cebolla morada, queso azul y salsa Big Alcorta. Incluye papas.",
    variants: standardBurgerVariants,
  },
  {
    id: "mexi",
    name: "Mexi",
    description: "Carne 100 gr, morrones asados, palta, huevo y mayo de ajo. Incluye papas.",
    image: "imagenes/mexiBurg.jpg",
    variants: standardBurgerVariants,
  },
  {
    id: "andes",
    name: "Andes",
    description: "Carne 100 gr, tomate, lechuga, cheddar, huevo y mayo de ajo. Incluye papas.",
    image: "imagenes/andesBurg.jpg",
    variants: standardBurgerVariants,
  },
  {
    id: "argenta",
    name: "Argenta",
    image: "imagenes/argenta.png",
    description: "Carne 100 gr, cheddar, tomate, lechuga, mayo bacon y panceta. Incluye papas.",
    variants: standardBurgerVariants,
  },
  {
    id: "alterada",
    name: "Alterada",
    image: "imagenes/alterada.png",
    description: "Carne 100 gr, cheddar, pepinillos, kétchup, cebolla y panceta. Incluye papas.",
    variants: standardBurgerVariants,
  },
  {
    id: "chesse",
    name: "Chesse",
    description: "Carne 100 gr, cheddar, cebolla y kétchup. Incluye papas.",
    image: "imagenes/chesseBurg.jpg",
    variants: [
      { label: "Simple", price: 11000 },
      { label: "Doble", price: 13000 },
      { label: "Triple", price: 14500 },
    ],
  },
  {
    id: "anomalia",
    name: "Anomalía",
    description: "Carne de lomo 150 gr, cheddar, salsa Chick Fill A, cebolla caramelizada y cheddar. Incluye papas.",
    variants: [{ label: "Unidad", price: 15000 }],
  },
];

const lomos = [
  {
    id: "lomo-alcorta",
    name: "Lomo Alcorta",
    description: "Pan, carne, tomate, lechuga y mayo Alcorta. Incluye papas.",
    image: "imagenes/lomoAlcorta.jpeg",
    variants: [{ label: "Unidad", price: 12000 }],
  },
  {
    id: "lomo-completo",
    name: "Lomo Completo",
    description: "Pan, carne, lechuga, tomate, huevo, jamón, queso y mayo Alcorta. Incluye papas.",
    image: "imagenes/lomoCompleto.jpg",
    variants: [{ label: "Unidad", price: 14000 }],
  },
  {
    id: "lomo-alcorta-xl",
    name: "Lomo Alcorta XL",
    description: "Pan, carne XL, tomate, lechuga y mayo Alcorta. Incluye papas.",
    image: "imagenes/lomoAlcorta.jpeg",
    variants: [{ label: "Unidad", price: 17000 }],
  },
  {
    id: "lomo-completo-xl",
    name: "Lomo Completo XL",
    description: "Pan, carne XL, lechuga, tomate, huevo, jamón, queso y mayo Alcorta. Incluye papas.",
    image: "imagenes/lomoCompleto.jpg",
    variants: [{ label: "Unidad", price: 18000 }],
  },
  {
    id: "lomo-americano",
    name: "Lomo Americano",
    description: "Pan, carne, cheddar, cebolla caramelizada, panceta y salsa Chick Fill A. Incluye papas.",
    image: "imagenes/lomoAmericano.jpg",
    variants: [{ label: "Unidad", price: 16000 }],
  },
  {
    id: "lomo-criollo",
    name: "Lomo Criollo",
    description: "Pan, carne, provoleta, salteado de morrones, mayo de ajo y salsa criolla. Incluye papas.",
    image: "imagenes/lomoCriollo.jpeg",
    variants: [{ label: "Unidad", price: 16000 }],
  },
  {
    id: "lomo-blue",
    name: "Lomo Blue",
    description: "Próximamente.",
    variants: [{ label: "Próximamente", price: 15000 }],
    comingSoon: true,
  },
];

const promos = [
  {
    id: "promo-lomo-alcorta",
    eyebrow: "LOMOS",
    name: "2 Lomos Alcorta",
    description: "Dos Lomos Alcorta + papas fritas.",
    image: "imagenes/lomoAlcorta.jpeg",
    variants: [{ label: "Promo", price: 22000 }],
  },
  {
    id: "promo-lomos-clasicos",
    eyebrow: "LOMOS · CLÁSICOS",
    name: "2 Lomos Clásicos",
    description: "Dos lomos clásicos a elección + papas fritas.",
    image: "imagenes/lomoCompleto.jpg",
    variants: [{ label: "Promo", price: 26000 }],
    choice: { title: "Elegí los 2 lomos clásicos", options: ["Lomo Alcorta", "Lomo Completo"] },
  },
  {
    id: "promo-lomos-especiales",
    eyebrow: "LOMOS · ESPECIALES",
    name: "2 Lomos Especiales",
    description: "Dos lomos especiales a elección + papas fritas.",
    image: "imagenes/lomoAmericano.jpg",
    variants: [{ label: "Promo", price: 29000 }],
    choice: { title: "Elegí los 2 lomos especiales", options: ["Lomo Americano", "Lomo Criollo"] },
  },
  {
    id: "promo-lomos-xl",
    eyebrow: "LOMOS · XL",
    name: "2 Lomos XL",
    description: "Dos lomos XL a elección + papas fritas.",
    image: "imagenes/lomoAlcorta.jpeg",
    variants: [{ label: "Promo", price: 33000 }],
    choice: { title: "Elegí los 2 lomos XL", options: ["Lomo Alcorta XL", "Lomo Completo XL"] },
  },
  {
    id: "promo-burger-simple",
    eyebrow: "BURGERS",
    name: "2 Burgers Simples",
    description: "Dos burgers simples a elección + papas fritas.",
    image: "imagenes/chesseBurg.jpg",
    variants: [{ label: "Promo", price: 21000 }],
    choice: { title: "Elegí las 2 burgers simples", options: ["American", "Caprichosa", "Mexi", "Andes", "Argenta", "Alterada", "Chesse"] },
  },
  {
    id: "promo-burger-doble",
    eyebrow: "BURGERS",
    name: "2 Burgers Dobles",
    description: "Dos burgers dobles a elección + papas fritas.",
    image: "imagenes/andesBurg.jpg",
    variants: [{ label: "Promo", price: 24000 }],
    choice: { title: "Elegí las 2 burgers dobles", options: ["American", "Caprichosa", "Mexi", "Andes", "Argenta", "Alterada", "Chesse"] },
  },
  {
    id: "promo-burger-triple",
    eyebrow: "BURGERS",
    name: "2 Burgers Triples",
    description: "Dos burgers triples a elección + papas fritas.",
    image: "imagenes/americanBurg.jpg",
    variants: [{ label: "Promo", price: 28000 }],
    choice: { title: "Elegí las 2 burgers triples", options: ["Mexi", "Andes", "Chesse", "Alterada", "American"] },
  },
  {
    id: "promo-anomalia",
    eyebrow: "BURGERS",
    name: "2 Burgers Anomalía",
    description: "Dos burgers Anomalía + papas fritas.",
    variants: [{ label: "Promo", price: 29000 }],
  },
  {
    id: "promo-burger-cuadruple",
    eyebrow: "BURGERS",
    name: "2 Burgers Cuádruples",
    description: "Dos burgers cuádruples a elección + papas fritas.",
    image: "imagenes/americanBurg.jpg",
    variants: [{ label: "Promo", price: 32000 }],
    choice: { title: "Elegí las 2 burgers cuádruples", options: ["American", "Caprichosa", "Mexi", "Andes", "Argenta", "Alterada", "Chesse"] },
  },
];

const papas = [
  {
    id: "papas-clasicas",
    name: "Papas Clásicas",
    description: "Bandeja de papas clásicas.",
    image: "imagenes/papasClasicas.jpeg",
    variants: [{ label: "Bandeja", price: 5500 }],
  },
  {
    id: "papas-gramajo",
    name: "Papas Gramajo",
    description: "Bandeja de papas + huevo + cebolla de verdeo.",
    image: "imagenes/papasGramajo.jpeg",
    variants: [{ label: "Bandeja", price: 6500 }],
  },
  {
    id: "papas-americanas",
    name: "Papas Americanas",
    description: "Bandeja de papas + cheddar + panceta.",
    image: "imagenes/papasAmericanas.jpeg",
    variants: [{ label: "Bandeja", price: 7000 }],
  },
];

const extras = [
  { id: "extra-doble-carne", name: "Doble Carne", description: "Agregado de doble carne.", variants: [{ label: "Extra", price: 5000 }] },
  { id: "extra-medallon", name: "Medallón Extra", description: "Agregá un medallón extra.", variants: [{ label: "Extra", price: 2500 }] },
  { id: "extra-cheddar", name: "Cheddar x2", description: "Agregado extra de cheddar.", variants: [{ label: "Extra", price: 3000 }] },
  { id: "extra-panceta", name: "Cheddar y Panceta", description: "Agregado de cheddar y panceta.", variants: [{ label: "Extra", price: 3000 }] },
  { id: "extra-papas", name: "Convertí tus Papas", description: "Convertí las papas de tu pedido.", variants: [{ label: "Extra", price: 2000 }] },
  { id: "extra-dip", name: "Dip de Salsas", description: "Dip de salsa adicional.", variants: [{ label: "Extra", price: 500 }] },
];

const bebidas = [
  {
    id: "gaseosa-500",
    name: "Gaseosa 500 ml",
    description: "Elegí tu sabor disponible.",
    image: "imagenes/coca-500.jpg",
    variants: [
      { label: "Coca-Cola", price: 3000 },
      { label: "Coca-Cola Zero", price: 3000 },
      { label: "Sprite", price: 3000 },
      { label: "Fanta", price: 3000 },
    ],
  },
  {
    id: "gaseosa-15",
    name: "Gaseosa 1,5 l",
    description: "Elegí tu sabor disponible.",
    image: "imagenes/coca-15.jpg",
    variants: [
      { label: "Coca-Cola", price: 4500 },
      { label: "Sprite", price: 4500 },
      { label: "Fanta", price: 4500 },
    ],
  },
  {
    id: "agua-saborizada",
    name: "Agua Saborizada",
    description: "Elegí entre los sabores disponibles.",
    image: "imagenes/manzana-500.jpg",
    variants: [
      { label: "Manzana", price: 3000 },
      { label: "Pomelo", price: 3000 },
    ],
  },
];

const alcohol = [
  {
    id: "lata-473",
    name: "Lata 473 ml",
    description: "Elegí entre las variedades disponibles.",
    image: "imagenes/ipa-475.jpg",
    variants: [
      { label: "IPA", price: 3000 },
      { label: "Rubia", price: 3000 },
      { label: "Roja", price: 3000 },
      { label: "Negra", price: 3000 },
    ],
  },
  {
    id: "laton-710",
    name: "Latón 710 ml",
    description: "Cerveza rubia bien fría.",
    image: "imagenes/rubia-710.jpg",
    variants: [{ label: "Rubia", price: 4000 }],
  },
];

const menuGroups = [
  { id: "burgers", label: "Burgers", description: "Todas llevan papas. Elegí simple, doble o triple según el producto.", icon: "BG", items: burgers },
  { id: "lomos", label: "Lomos", description: "Todos llevan papas.", icon: "LM", items: lomos },
  { id: "papas", label: "Papas", description: "Bandejas para acompañar o compartir.", icon: "PP", items: papas },
  { id: "extras", label: "Agregados", description: "Sumale un extra a tu pedido.", icon: "EX", items: extras },
  { id: "bebidas", label: "Bebidas", description: "Opciones sin alcohol.", icon: "BD", items: bebidas },
  { id: "alcohol", label: "Cervezas", description: "Latas y latones bien fríos.", icon: "CZ", items: alcohol },
];

const specialPromoIds = ["promo-burger-simple", "promo-burger-triple"];
const specialPromos = promos.filter((promo) => specialPromoIds.includes(promo.id));
const visiblePromos = promos.filter((promo) => !specialPromoIds.includes(promo.id));
const products = [...promos, ...menuGroups.flatMap((group) => group.items)];
const selectedVariants = new Map();
let cart = [];
let pendingPromo = null;
let promoSelections = [];

const specialPromosGrid = document.querySelector("#specialPromosGrid");
const promosGrid = document.querySelector("#promosGrid");
const fullMenu = document.querySelector("#fullMenu");
const cartDrawer = document.querySelector("#cartDrawer");
const cartOverlay = document.querySelector("#cartOverlay");
const checkoutModal = document.querySelector("#checkoutModal");
const checkoutOverlay = document.querySelector("#checkoutOverlay");
const promoModal = document.querySelector("#promoModal");
const promoOverlay = document.querySelector("#promoOverlay");
const weekdayPromoOverlay = document.querySelector("#weekdayPromoOverlay");

function imageUsesCutout(path = "") {
  return /\.png$/i.test(path);
}

const promoVisualMap = {
  "promo-burger-triple": ["imagenes/americanBurg.jpg", "imagenes/alterada.png"],
  "promo-burger-simple": ["imagenes/chesseBurg.jpg", "imagenes/mexiBurg.jpg"],
  "promo-lomos-especiales": ["imagenes/lomoAmericano.jpg", "imagenes/lomoCriollo.jpeg"],
  "promo-lomos-clasicos": ["imagenes/lomoAlcorta.jpeg", "imagenes/lomoCompleto.jpg"],
  "promo-lomos-xl": ["imagenes/lomoAlcorta.jpeg", "imagenes/lomoCompleto.jpg"],
};

function buildPromoTitle(name) {
  return name.replace(/(2)/g, "2").replace(/Burgers/i, "Burgers");
}

function buildPromoHighlight(product) {
  if (product.id === "promo-burger-triple") return "Las dobles";
  if (product.id === "promo-burger-simple") return "Más papas";
  if (product.id.includes("lomos")) return "Con papas";
  return "Promo especial";
}

function getPromoImages(product) {
  return (promoVisualMap[product.id] || [product.image]).filter(Boolean).slice(0, 2);
}

const weekdayPromoModal = document.querySelector("#weekdayPromoModal");
const weekdayPromoModals = [weekdayPromoModal].filter(Boolean);
let currentWeekdayPromoSlide = 0;

function renderWeekdayPromoSlide(index) {
  currentWeekdayPromoSlide = index;
  document.querySelectorAll(".weekday-promo-slide").forEach((slide, slideIndex) => {
    slide.classList.toggle("is-active", slideIndex === index);
  });
  document.querySelectorAll("[data-weekday-slide]").forEach((dot, dotIndex) => {
    dot.classList.toggle("is-active", dotIndex === index);
  });
}

function moveWeekdayPromoSlide(direction) {
  const slides = document.querySelectorAll(".weekday-promo-slide");
  if (!slides.length) return;
  const total = slides.length;
  const next = (currentWeekdayPromoSlide + direction + total) % total;
  renderWeekdayPromoSlide(next);
}

function renderFeaturedPromoCard(product) {
  const images = getPromoImages(product);
  const visual = images.map((path) => {
    const cutoutClass = imageUsesCutout(path) ? "is-cutout" : "";
    return `<img class="${cutoutClass}" src="${path}" alt="${product.name}" loading="lazy" />`;
  }).join("");

  return `
    <article class="featured-promo-card" data-product-id="${product.id}">
      <div class="featured-promo-copy">
        <h3>${product.name}</h3>
        <p class="promo-highlight">${buildPromoHighlight(product)}</p>
        <p class="promo-description">${product.description}</p>
        <button class="promo-action" type="button" data-action="add">PEDIR AHORA</button>
      </div>
      <div class="featured-promo-visual ${images.some((path) => imageUsesCutout(path)) ? "is-cutout" : ""}">
        ${visual}
        <span class="featured-promo-badge"><span class="value">${money(product.variants[0].price)}</span><span class="label">PROMO</span></span>
      </div>
    </article>
  `;
}

function renderPromoCard(product) {
  const image = product.image
    ? `<img src="${product.image}" alt="${product.name}" loading="lazy" />`
    : '<div class="photo-placeholder">ALCORTA</div>';
  return `
    <article class="promo-mini-card" data-product-id="${product.id}">
      <div class="promo-mini-media ${imageUsesCutout(product.image) ? "is-cutout" : ""}">${image}</div>
      <div class="promo-mini-copy">
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <div class="promo-mini-footer">
          <strong>${money(product.variants[0].price)}</strong>
          <button type="button" data-action="add">Agregar</button>
        </div>
      </div>
    </article>
  `;
}

function renderMenuItem(product) {
  const cutoutClass = imageUsesCutout(product.image) ? "is-cutout" : "";
  const image = product.image
    ? `<img src="${product.image}" alt="${product.name}" loading="lazy" />`
    : '<div class="photo-placeholder">ALCORTA</div>';

  const variants = !product.comingSoon && product.variants.length > 1
    ? `<div class="variant-list" aria-label="Elegir opción de ${product.name}">
        ${product.variants.map((variant, index) => `
          <button class="${index === 0 ? "is-active" : ""}" type="button" data-action="variant" data-index="${index}">${variant.label}</button>
        `).join("")}
      </div>`
    : "";

  const priceMarkup = product.comingSoon ? "Próximamente" : money(product.variants[0].price);
  const actionMarkup = product.comingSoon
    ? '<button class="add-button" type="button" disabled>Próximamente</button>'
    : '<button class="add-button" type="button" data-action="add">Agregar</button>';

  return `
    <article class="menu-item" data-product-id="${product.id}">
      <div class="menu-item-media ${cutoutClass}">
        ${image}
      </div>
      <div class="menu-item-main">
        <div class="menu-item-top"><h4>${product.name}</h4></div>
        <p class="item-description">${product.description}</p>
        <strong class="item-price" data-role="price">${priceMarkup}</strong>
      </div>
      <div class="menu-item-side">
        ${variants}
        <div class="menu-item-actions">${actionMarkup}</div>
      </div>
    </article>
  `;
}

function renderMenu() {
  specialPromosGrid.innerHTML = specialPromos.map(renderFeaturedPromoCard).join("");
  promosGrid.innerHTML = visiblePromos.map(renderPromoCard).join("");
  fullMenu.innerHTML = menuGroups.map((group) => `
    <section class="menu-group" id="${group.id}">
      <div class="menu-group-title">
        <div class="title-main">
          <span class="icon">${group.icon}</span>
          <h3>${group.label}</h3>
        </div>
        <a class="menu-group-link" href="#inicio">↑</a>
      </div>
      <div class="menu-group-list">
        ${group.items.map(renderMenuItem).join("")}
      </div>
    </section>
  `).join("");
}

function getProduct(productId) {
  return products.find((product) => product.id === productId);
}

function addLine(product, variant, customLabel = "") {
  const label = customLabel || variant.label;
  const key = `${product.id}-${label}`;
  const existing = cart.find((item) => item.key === key);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ key, name: product.name, variant: label, price: variant.price, quantity: 1 });
  }
  renderCart();
  openCart();
}

function addToCart(product, variant) {
  if (product.choice) {
    openPromoChooser(product);
    return;
  }
  addLine(product, variant);
}

function changeQuantity(key, delta) {
  cart = cart
    .map((item) => item.key === key ? { ...item, quantity: Math.max(0, item.quantity + delta) } : item)
    .filter((item) => item.quantity > 0);
  renderCart();
}

function cartTotal() {
  return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

function cartCount() {
  return cart.reduce((sum, item) => sum + item.quantity, 0);
}

function renderCart() {
  const count = cartCount();
  const total = cartTotal();
  document.querySelector("#headerCartCount").textContent = count;
  document.querySelector("#floatingCartCount").textContent = count;
  document.querySelector("#floatingCartTotal").textContent = money(total);
  document.querySelector("#cartTotal").textContent = money(total);
  document.querySelector("#checkoutTotal").textContent = money(total);
  document.querySelector("#continueOrder").disabled = cart.length === 0;

  const lines = document.querySelector("#cartLines");
  if (!cart.length) {
    lines.innerHTML = `
      <div class="empty-cart">
        <span>01</span>
        <h3>Tu pedido está vacío.</h3>
        <p>Elegí un favorito y agregalo al carrito.</p>
      </div>
    `;
    return;
  }

  lines.innerHTML = cart.map((item) => `
    <div class="cart-line">
      <div>
        <strong>${item.name}</strong>
        <small>${item.variant} · ${money(item.price)}</small>
      </div>
      <div class="quantity">
        <button type="button" data-cart-action="decrease" data-key="${item.key}" aria-label="Quitar uno">−</button>
        <span>${item.quantity}</span>
        <button type="button" data-cart-action="increase" data-key="${item.key}" aria-label="Agregar uno">+</button>
      </div>
    </div>
  `).join("");
}

function lockBody() {
  const open = [cartDrawer, checkoutModal, promoModal, ...weekdayPromoModals]
    .some((element) => element.classList.contains("is-open"));
  document.body.classList.toggle("is-locked", open);
}

function openLayer(element, overlay) {
  overlay.hidden = false;
  element.setAttribute("aria-hidden", "false");
  requestAnimationFrame(() => {
    overlay.classList.add("is-open");
    element.classList.add("is-open");
    lockBody();
  });
}

function closeLayer(element, overlay) {
  overlay.classList.remove("is-open");
  element.classList.remove("is-open");
  element.setAttribute("aria-hidden", "true");
  window.setTimeout(() => {
    overlay.hidden = true;
    lockBody();
  }, 220);
}

function openCart() {
  openLayer(cartDrawer, cartOverlay);
}

function closeCart() {
  closeLayer(cartDrawer, cartOverlay);
}

function openCheckout() {
  closeCart();
  window.setTimeout(() => openLayer(checkoutModal, checkoutOverlay), 140);
}

function closeCheckout() {
  closeLayer(checkoutModal, checkoutOverlay);
}

function openPromoChooser(product) {
  pendingPromo = product;
  promoSelections = [];
  renderPromoChooser();
  openLayer(promoModal, promoOverlay);
}

function closePromoChooser() {
  closeLayer(promoModal, promoOverlay);
  pendingPromo = null;
  promoSelections = [];
}

function renderPromoChooser() {
  if (!pendingPromo?.choice) return;
  const options = pendingPromo.choice.options;
  document.querySelector("#promoModalTitle").textContent = pendingPromo.choice.title;
  document.querySelector("#promoModalHelp").textContent = "Pueden ser iguales o distintos.";
  document.querySelector("#promoSelection").innerHTML = [0, 1].map((index) => {
    const selected = promoSelections[index];
    return selected
      ? `<button type="button" data-remove-promo="${index}" aria-label="Quitar ${selected}"><strong>${selected}</strong><span>×</span></button>`
      : `<div><span>${index + 1}</span><small>Elegí uno</small></div>`;
  }).join("");
  document.querySelector("#promoChoices").innerHTML = options.map((name) => `
    <button type="button" data-promo-choice="${name}" ${promoSelections.length >= 2 ? "disabled" : ""}>
      <span>${name}</span><b>+</b>
    </button>
  `).join("");
  document.querySelector("#confirmPromo").disabled = promoSelections.length !== 2;
}

function confirmPromoSelection() {
  if (!pendingPromo || promoSelections.length !== 2) return;
  const label = promoSelections.join(" + ");
  addLine(pendingPromo, pendingPromo.variants[0], label);
  closePromoChooser();
}

function syncCheckoutOptions() {
  const branch = document.querySelector('input[name="branch"]:checked').value;
  const deliveryOption = document.querySelector("#deliveryOption");
  if (branch === "godoyCruz") {
    deliveryOption.hidden = true;
    document.querySelector('input[name="orderType"][value="retiro"]').checked = true;
  } else {
    deliveryOption.hidden = false;
  }

  const orderType = document.querySelector('input[name="orderType"]:checked').value;
  document.querySelector("#deliveryFields").hidden = orderType !== "delivery";
  document.querySelectorAll(".branch-options label, .order-options label").forEach((label) => {
    const input = label.querySelector("input");
    label.classList.toggle("is-selected", input.checked);
  });
}

function finishOrder(event) {
  event.preventDefault();
  if (!cart.length) return;

  const branchId = document.querySelector('input[name="branch"]:checked').value;
  const orderType = document.querySelector('input[name="orderType"]:checked').value;
  const customerName = document.querySelector("#customerName").value.trim();
  const address = document.querySelector("#customerAddress").value.trim();
  const crossing = document.querySelector("#streetCrossing").value.trim();
  const notes = document.querySelector("#orderNotes").value.trim();

  if (!customerName) {
    alert("Por favor completá tu nombre.");
    return;
  }
  if (orderType === "delivery" && (!address || !crossing)) {
    alert("Por favor completá la dirección y las entre calles.");
    return;
  }

  const lines = cart.map((item) =>
    `• ${item.quantity}x ${item.name} (${item.variant}) — ${money(item.price * item.quantity)}`
  ).join("\n");

  const message = [
    "¡Hola ALCORTA! Quiero hacer este pedido:",
    "",
    lines,
    "",
    `Total estimado: ${money(cartTotal())}`,
    `Sucursal: ${BRANCHES[branchId]}`,
    `Modalidad: ${orderType === "delivery" ? "Delivery" : "Retiro en local"}`,
    `Nombre: ${customerName}`,
    orderType === "delivery" ? `Dirección: ${address}` : "",
    orderType === "delivery" ? `Entre calles: ${crossing}` : "",
    notes ? `Aclaraciones: ${notes}` : "",
  ].filter(Boolean).join("\n");

  window.open(
    `https://wa.me/${WHATSAPP_NUMBERS[branchId]}?text=${encodeURIComponent(message)}`,
    "_blank",
    "noopener,noreferrer",
  );
}

function isTuesdayToThursday() {
  const day = new Date().getDay();
  return day >= 2 && day <= 4;
}

function openWeekdayPromo(index = 0) {
  const modal = weekdayPromoModal;
  if (!modal || !weekdayPromoOverlay) return;
  renderWeekdayPromoSlide(index);
  weekdayPromoOverlay.hidden = false;
  modal.hidden = false;
  modal.setAttribute("aria-hidden", "false");
  requestAnimationFrame(() => {
    weekdayPromoOverlay.classList.add("is-open");
    modal.classList.add("is-open");
    lockBody();
  });
}

function closeWeekdayPromo() {
  const modal = weekdayPromoModal;
  if (!modal || !weekdayPromoOverlay) return;
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  weekdayPromoOverlay.classList.remove("is-open");
  window.setTimeout(() => {
    modal.hidden = true;
    weekdayPromoOverlay.hidden = true;
    lockBody();
  }, 220);
}

function dismissWeekdayPromos() {
  closeWeekdayPromo();
  try {
    sessionStorage.setItem("alcortaWeekdayPromosSeen", "true");
  } catch (error) {
    // noop
  }
}

function maybeOpenWeekdayPromos() {
  if (!weekdayPromoModal || !weekdayPromoOverlay || !isTuesdayToThursday()) return;
  try {
    if (sessionStorage.getItem("alcortaWeekdayPromosSeen") === "true") return;
  } catch (error) {
    // noop
  }
  window.setTimeout(() => openWeekdayPromo(0), 450);
}

document.addEventListener("click", (event) => {
  const nextWeekdayPromoButton = event.target.closest("#weekdayPromoNext");
  if (nextWeekdayPromoButton) {
    moveWeekdayPromoSlide(1);
    return;
  }

  const prevWeekdayPromoButton = event.target.closest("#weekdayPromoPrev");
  if (prevWeekdayPromoButton) {
    moveWeekdayPromoSlide(-1);
    return;
  }

  const weekdayPromoDot = event.target.closest("[data-weekday-slide]");
  if (weekdayPromoDot) {
    renderWeekdayPromoSlide(Number(weekdayPromoDot.dataset.weekdaySlide));
    return;
  }

  const closeWeekdayPromoButton = event.target.closest("#closeWeekdayPromos, #weekdayPromoUnderstood");
  if (closeWeekdayPromoButton) {
    dismissWeekdayPromos();
    return;
  }

  const variantButton = event.target.closest('[data-action="variant"]');
  if (variantButton) {
    const item = variantButton.closest("[data-product-id]");
    const product = getProduct(item.dataset.productId);
    const index = Number(variantButton.dataset.index);
    selectedVariants.set(product.id, index);
    item.querySelectorAll('[data-action="variant"]').forEach((button) => button.classList.remove("is-active"));
    variantButton.classList.add("is-active");
    item.querySelector('[data-role="price"]').textContent = money(product.variants[index].price);
    return;
  }

  const addButton = event.target.closest('[data-action="add"]');
  if (addButton) {
    const item = addButton.closest("[data-product-id]");
    const product = getProduct(item.dataset.productId);
    const index = selectedVariants.get(product.id) ?? 0;
    addToCart(product, product.variants[index]);
    return;
  }

  const cartButton = event.target.closest("[data-cart-action]");
  if (cartButton) {
    changeQuantity(cartButton.dataset.key, cartButton.dataset.cartAction === "increase" ? 1 : -1);
    return;
  }

  const promoButton = event.target.closest("[data-promo-choice]");
  if (promoButton && promoSelections.length < 2) {
    promoSelections.push(promoButton.dataset.promoChoice);
    renderPromoChooser();
    return;
  }

  const removePromoButton = event.target.closest("[data-remove-promo]");
  if (removePromoButton) {
    promoSelections.splice(Number(removePromoButton.dataset.removePromo), 1);
    renderPromoChooser();
  }
});

document.querySelector("#cartTrigger").addEventListener("click", openCart);
document.querySelector("#floatingCart").addEventListener("click", openCart);
document.querySelector("#stickyOrderButton").addEventListener("click", () => {
  if (!cart.length) {
    window.open(
      `https://wa.me/${WHATSAPP_NUMBERS.dorrego}?text=${encodeURIComponent("Hola! Quiero hacer un pedido a ALCORTA")}`,
      "_blank",
      "noopener,noreferrer",
    );
    return;
  }
  openCheckout();
});
document.querySelector("#closeCart").addEventListener("click", closeCart);
cartOverlay.addEventListener("click", closeCart);
document.querySelector("#continueOrder").addEventListener("click", openCheckout);
document.querySelector("#closeCheckout").addEventListener("click", closeCheckout);
checkoutOverlay.addEventListener("click", closeCheckout);
document.querySelector("#checkoutForm").addEventListener("submit", finishOrder);
document.querySelector("#closePromo").addEventListener("click", closePromoChooser);
promoOverlay.addEventListener("click", closePromoChooser);
document.querySelector("#confirmPromo").addEventListener("click", confirmPromoSelection);

document.querySelectorAll('input[name="branch"], input[name="orderType"]').forEach((input) => {
  input.addEventListener("change", syncCheckoutOptions);
});

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;
  const openWeekdayIndex = weekdayPromoModals.findIndex((modal) => modal.classList.contains("is-open"));
  if (openWeekdayIndex !== -1) {
    dismissWeekdayPromos();
  } else if (promoModal.classList.contains("is-open")) {
    closePromoChooser();
  } else if (checkoutModal.classList.contains("is-open")) {
    closeCheckout();
  } else if (cartDrawer.classList.contains("is-open")) {
    closeCart();
  }
});

weekdayPromoOverlay?.addEventListener("click", dismissWeekdayPromos);
document.querySelector("#closeWeekdayPromos")?.addEventListener("click", dismissWeekdayPromos);
document.querySelector("#weekdayPromoUnderstood")?.addEventListener("click", dismissWeekdayPromos);

renderMenu();
renderCart();
syncCheckoutOptions();
maybeOpenWeekdayPromos();
