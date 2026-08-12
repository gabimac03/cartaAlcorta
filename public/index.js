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
    description: "Carne 100 gr, cheddar, tomate, lechuga, mayo bacon y panceta. Incluye papas.",
    variants: standardBurgerVariants,
  },
  {
    id: "alterada",
    name: "Alterada",
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
    description: "Pan, carne, salsa de tomate, queso azul y chimichurri argentino. Incluye papas.",
    variants: [{ label: "Unidad", price: 15000 }],
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
    choice: { title: "Elegí los 2 lomos especiales", options: ["Lomo Americano", "Lomo Criollo", "Lomo Blue"] },
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
    choice: { title: "Elegí las 2 burgers triples", options: ["American", "Caprichosa", "Mexi", "Andes", "Argenta", "Alterada", "Chesse"] },
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
  {
    id: "extra-doble-carne",
    name: "Doble Carne",
    description: "Agregado de doble carne.",
    variants: [{ label: "Extra", price: 5000 }],
  },
  {
    id: "extra-medallon",
    name: "Medallón Extra",
    description: "Agregá un medallón extra.",
    variants: [{ label: "Extra", price: 2500 }],
  },
  {
    id: "extra-cheddar",
    name: "Cheddar x2",
    description: "Agregado extra de cheddar.",
    variants: [{ label: "Extra", price: 3000 }],
  },
  {
    id: "extra-panceta",
    name: "Cheddar y Panceta",
    description: "Agregado de cheddar y panceta.",
    variants: [{ label: "Extra", price: 3000 }],
  },
  {
    id: "extra-papas",
    name: "Convertí tus Papas",
    description: "Convertí las papas de tu pedido.",
    variants: [{ label: "Extra", price: 2000 }],
  },
  {
    id: "extra-dip",
    name: "Dip de Salsas",
    description: "Dip de salsa adicional.",
    variants: [{ label: "Extra", price: 500 }],
  },
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
  { id: "burgers", label: "Burgers", description: "Todas llevan papas. Elegí simple, doble o triple según el producto.", items: burgers },
  { id: "lomos", label: "Lomos", description: "Todos llevan papas.", items: lomos },
  { id: "papas", label: "Papas", description: "Bandejas para acompañar o compartir.", items: papas },
  { id: "extras", label: "Agregados", description: "Sumale un extra a tu pedido.", items: extras },
  { id: "bebidas", label: "Bebidas", description: "Opciones sin alcohol.", items: bebidas },
  { id: "alcohol", label: "Cervezas", description: "Latas y latones bien fríos.", items: alcohol },
];

const visiblePromos = promos;
const products = [...visiblePromos, ...menuGroups.flatMap((group) => group.items)];
const selectedVariants = new Map();
let cart = [];
let pendingPromo = null;
let promoSelections = [];
const promosGrid = document.querySelector("#promosGrid");
const fullMenu = document.querySelector("#fullMenu");
const cartDrawer = document.querySelector("#cartDrawer");
const cartOverlay = document.querySelector("#cartOverlay");
const checkoutModal = document.querySelector("#checkoutModal");
const checkoutOverlay = document.querySelector("#checkoutOverlay");
const promoModal = document.querySelector("#promoModal");
const promoOverlay = document.querySelector("#promoOverlay");

function renderProductCard(product) {
  const image = product.image
    ? `<img src="${product.image}" alt="${product.name}" loading="lazy" />`
    : '<div class="photo-placeholder">ALCORTA</div>';
  const eyebrow = product.eyebrow ? `<span class="photo-label">${product.eyebrow}</span>` : "";
  const variants = product.variants.length > 1
    ? `<div class="variant-list" aria-label="Elegir opción de ${product.name}">
        ${product.variants.map((variant, index) => `
          <button class="${index === 0 ? "is-active" : ""}" type="button" data-action="variant" data-index="${index}">${variant.label}</button>
        `).join("")}
      </div>`
    : "";

  return `
    <article class="product-card" data-product-id="${product.id}">
      <div class="product-photo">
        ${image}
        ${eyebrow}
      </div>
      <div class="product-body">
        <div class="product-heading">
          <h3>${product.name}</h3>
          <strong data-role="price">${money(product.variants[0].price)}</strong>
        </div>
        <p>${product.description}</p>
        ${variants}
        <button class="add-button" type="button" data-action="add">
          Agregar al pedido <span>+</span>
        </button>
      </div>
    </article>
  `;
}

function renderMenu() {
  promosGrid.innerHTML = visiblePromos.map(renderProductCard).join("");
  fullMenu.innerHTML = menuGroups.map((group, index) => `
    <div class="menu-group" id="${group.id}">
      <div class="group-title">
        <span>${String(index + 1).padStart(2, "0")}</span>
        <h2>${group.label}</h2>
        <p>${group.description}</p>
      </div>
      <div class="product-grid">
        ${group.items.map(renderProductCard).join("")}
      </div>
    </div>
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
  document.querySelector("#cartTotal").textContent = money(total);
  document.querySelector("#checkoutTotal").textContent = money(total);
  document.querySelector("#continueOrder").disabled = cart.length === 0;

  const lines = document.querySelector("#cartLines");
  if (!cart.length) {
    lines.innerHTML = `
      <div class="empty-cart">
        <span>01</span>
        <h3>Tu pedido está vacío.</h3>
        <p>Elegí un favorito y lo preparamos al momento.</p>
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
  const open = [cartDrawer, checkoutModal, promoModal].some((element) => element.classList.contains("is-open"));
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
  }, 240);
}

function openCart() {
  openLayer(cartDrawer, cartOverlay);
}

function closeCart() {
  closeLayer(cartDrawer, cartOverlay);
}

function openCheckout() {
  closeCart();
  window.setTimeout(() => openLayer(checkoutModal, checkoutOverlay), 160);
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

document.addEventListener("click", (event) => {
  const variantButton = event.target.closest('[data-action="variant"]');
  if (variantButton) {
    const card = variantButton.closest(".product-card");
    const product = getProduct(card.dataset.productId);
    const index = Number(variantButton.dataset.index);
    selectedVariants.set(product.id, index);
    card.querySelectorAll('[data-action="variant"]').forEach((button) => button.classList.remove("is-active"));
    variantButton.classList.add("is-active");
    card.querySelector('[data-role="price"]').textContent = money(product.variants[index].price);
    return;
  }

  const addButton = event.target.closest('[data-action="add"]');
  if (addButton) {
    const card = addButton.closest(".product-card");
    const product = getProduct(card.dataset.productId);
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
  if (promoModal.classList.contains("is-open")) closePromoChooser();
  else if (checkoutModal.classList.contains("is-open")) closeCheckout();
  else if (cartDrawer.classList.contains("is-open")) closeCart();
});

renderMenu();
renderCart();
syncCheckoutOptions();
