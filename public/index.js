const WHATSAPP_NUMBERS = {
  dorrego: "5492617094467",
  godoyCruz: "5492617094474",
};

const BRANCHES = {
  dorrego: "Alem 300, Dorrego",
  godoyCruz: "Figueroa Alcorta 1304, Godoy Cruz",
};

const money = (value) => `$${Number(value).toLocaleString("es-AR")}`;

const promos = [
  {
    id: "promo-alcorta",
    eyebrow: "PROMO 01",
    name: "Promoción Alcorta",
    description: "2 Lomos Alcorta + papas clásicas.",
    image: "imagenes/lomoAlcorta.jpeg",
    variants: [{ label: "Promo", price: 20000 }],
  },
  {
    id: "promo-completa",
    eyebrow: "PROMO 02",
    name: "Promoción Completa",
    description: "2 Lomos Completos + papas clásicas.",
    image: "imagenes/lomoCompleto.jpg",
    variants: [{ label: "Promo", price: 24000 }],
  },
  {
    id: "promo-criolla",
    eyebrow: "PROMO 03",
    name: "Promoción Criolla",
    description: "2 Lomos Criollos + papas clásicas.",
    image: "imagenes/lomoCriollo.jpeg",
    variants: [{ label: "Promo", price: 26000 }],
  },
  {
    id: "promo-americana",
    eyebrow: "PROMO 04",
    name: "Promoción Americana",
    description: "2 Lomos Americanos + papas clásicas.",
    image: "imagenes/lomoAmericano.jpg",
    variants: [{ label: "Promo", price: 28000 }],
  },
  {
    id: "promo-alcorta-xl",
    eyebrow: "PROMO 05",
    name: "Promoción Alcorta XL",
    description: "2 Lomos Alcorta XL + papas clásicas.",
    image: "imagenes/lomoAlcorta.jpeg",
    variants: [{ label: "Promo", price: 30000 }],
  },
  {
    id: "promo-burger-simple",
    eyebrow: "PROMO 06",
    name: "Burger Simple",
    description: "2 hamburguesas simples + papas clásicas.",
    image: "imagenes/chesseBurg.jpg",
    variants: [{ label: "Promo", price: 19000 }],
    burgerChoice: "Simple",
  },
  {
    id: "promo-burger-doble",
    eyebrow: "PROMO 07",
    name: "Burger Doble",
    description: "2 hamburguesas dobles + papas clásicas.",
    image: "imagenes/andesBurg.jpg",
    variants: [{ label: "Promo", price: 22000 }],
    burgerChoice: "Doble",
  },
  {
    id: "promo-burger-triple",
    eyebrow: "PROMO 08",
    name: "Burger Triple",
    description: "2 hamburguesas triples + papas clásicas.",
    image: "imagenes/americanBurg.jpg",
    variants: [{ label: "Promo", price: 25000 }],
    burgerChoice: "Triple",
  },
];

const weeklyPromos = [
  {
    id: "weekly-chesse",
    eyebrow: "MAR · MIÉ · JUE",
    name: "Promo Chesse",
    description: "2 ChesseBurg iguales.",
    image: "imagenes/chesseBurg.jpg",
    variants: [{ label: "Promo", price: 15000 }],
  },
  {
    id: "weekly-triples",
    eyebrow: "MAR · MIÉ · JUE",
    name: "Promo Triples",
    description: "2 burgers triples a elección, iguales o distintas.",
    image: "imagenes/andesBurg.jpg",
    variants: [{ label: "Promo", price: 22000 }],
    burgerChoice: "Triple",
  },
];

const burgers = [
  {
    id: "chesseburg",
    name: "ChesseBurg",
    description: "Pan, carne, kétchup, cebolla y cheddar. Incluye papas.",
    image: "imagenes/chesseBurg.jpg",
    variants: [
      { label: "Simple", price: 10000 },
      { label: "Doble", price: 12000 },
      { label: "Triple", price: 13500 },
    ],
  },
  {
    id: "andesburg",
    name: "AndesBurg",
    description: "Carne, lechuga, tomate, mayo de ajo, huevo y cheddar. Incluye papas.",
    image: "imagenes/andesBurg.jpg",
    variants: [
      { label: "Simple", price: 10500 },
      { label: "Doble", price: 12500 },
      { label: "Triple", price: 14500 },
    ],
  },
  {
    id: "americaburg",
    name: "AmericaBurg",
    description: "Barbacoa, cebolla caramelizada, panceta, cheddar y salsa Thousand Island. Incluye papas.",
    image: "imagenes/americanBurg.jpg",
    variants: [
      { label: "Simple", price: 11000 },
      { label: "Doble", price: 13000 },
      { label: "Triple", price: 14500 },
    ],
  },
  {
    id: "mexiburg",
    name: "MexiBurg",
    description: "Carne, palta, morrones, mayo de ajo, huevo y cheddar. Incluye papas.",
    image: "imagenes/mexiBurg.jpg",
    variants: [
      { label: "Simple", price: 11000 },
      { label: "Doble", price: 13000 },
      { label: "Triple", price: 14500 },
    ],
  },
];

const lomos = [
  {
    id: "lomo-alcorta",
    name: "Lomo Alcorta",
    description: "Carne, tomate, lechuga y mayonesa Alcorta. Incluye papas.",
    image: "imagenes/lomoAlcorta.jpeg",
    variants: [{ label: "Unidad", price: 12000 }],
  },
  {
    id: "lomo-alcorta-xl",
    name: "Lomo Alcorta XL",
    description: "Carne XL, tomate, lechuga y mayonesa Alcorta. Incluye papas.",
    image: "imagenes/lomoAlcorta.jpeg",
    variants: [{ label: "Unidad", price: 16000 }],
  },
  {
    id: "lomo-completo",
    name: "Lomo Completo",
    description: "Carne, lechuga, tomate, huevo, jamón, queso y mayonesa Alcorta. Incluye papas.",
    image: "imagenes/lomoCompleto.jpg",
    variants: [{ label: "Unidad", price: 14000 }],
  },
  {
    id: "lomo-criollo",
    name: "Lomo Criollo",
    description: "Carne, salsa criolla, provoleta, mayo de ajo y morrones. Incluye papas.",
    image: "imagenes/lomoCriollo.jpeg",
    variants: [{ label: "Unidad", price: 15000 }],
  },
  {
    id: "lomo-americano",
    name: "Lomo Americano",
    description: "Carne, barbacoa, cebolla caramelizada, panceta y cheddar. Incluye papas.",
    image: "imagenes/lomoAmericano.jpg",
    variants: [{ label: "Unidad", price: 16000 }],
  },
];

const papas = [
  {
    id: "papas-clasicas",
    name: "Papas Clásicas",
    description: "Papas fritas tradicionales, doradas y crocantes.",
    image: "imagenes/papasClasicas.jpeg",
    variants: [{ label: "Porción", price: 5000 }],
  },
  {
    id: "papas-gramajo",
    name: "Papas Gramajo",
    description: "Papas, cebolla de verdeo y huevo.",
    image: "imagenes/papasGramajo.jpeg",
    variants: [{ label: "Porción", price: 6000 }],
  },
  {
    id: "papas-americanas",
    name: "Papas Americanas",
    description: "Papas con cheddar y panceta.",
    image: "imagenes/papasAmericanas.jpeg",
    variants: [{ label: "Porción", price: 6500 }],
  },
];

const extras = [
  {
    id: "extra-cheddar",
    name: "Cheddar x2",
    description: "Seleccioná dos veces si es para dos burgers o lomos.",
    variants: [{ label: "Extra", price: 3000 }],
  },
  {
    id: "extra-panceta",
    name: "Cheddar + Panceta",
    description: "Seleccioná dos veces si es para dos burgers o lomos.",
    variants: [{ label: "Extra", price: 3000 }],
  },
  {
    id: "extra-doble-carne",
    name: "Doble Carne",
    description: "Sólo para lomos individuales; no entra en promociones.",
    variants: [{ label: "Extra", price: 4000 }],
  },
  {
    id: "extra-dip",
    name: "Dip de Salsa",
    description: "Elegí tu salsa favorita.",
    variants: [{ label: "Extra", price: 500 }],
  },
  {
    id: "extra-medallon",
    name: "Medallón Extra",
    description: "Seleccioná dos veces si es para dos burgers.",
    variants: [{ label: "Extra", price: 2500 }],
  },
  {
    id: "extra-papas",
    name: "Convertí tus Papas",
    description: "En vez de dos cubetas, se entrega una bandeja convertida.",
    variants: [{ label: "Extra", price: 2000 }],
  },
];

const bebidas = [
  {
    id: "gaseosa-500",
    name: "Gaseosa 500 ml",
    description: "Sprite, Fanta, Coca-Cola o Coca-Cola Zero.",
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
    description: "Sprite, Fanta o Coca-Cola.",
    image: "imagenes/coca-15.jpg",
    variants: [
      { label: "Coca-Cola", price: 4300 },
      { label: "Sprite", price: 4300 },
      { label: "Fanta", price: 4300 },
    ],
  },
  {
    id: "agua-500",
    name: "Agua saborizada 500 ml",
    description: "Agua, manzana o pomelo.",
    image: "imagenes/manzana-500.jpg",
    variants: [
      { label: "Agua", price: 3000 },
      { label: "Manzana", price: 3000 },
      { label: "Pomelo", price: 3000 },
    ],
  },
];

const alcohol = [
  {
    id: "cerveza-475",
    name: "Cerveza 473 ml",
    description: "Roja, negra, rubia o IPA.",
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
    variants: [{ label: "Rubia", price: 3800 }],
  },
];

const menuGroups = [
  { id: "burgers", label: "Burgers", description: "Elegí simple, doble o triple.", items: burgers },
  { id: "lomos", label: "Lomos", description: "El clásico mendocino, bien cargado.", items: lomos },
  { id: "papas", label: "Papas", description: "Para acompañar o compartir.", items: papas },
  { id: "extras", label: "Agregados", description: "Hacelo exactamente como te gusta.", items: extras },
  { id: "bebidas", label: "Bebidas", description: "Algo fresco para completar.", items: bebidas },
  { id: "alcohol", label: "Cervezas", description: "Bien frías para acompañar.", items: alcohol },
];

const isWeeklyPromoDay = () => {
  const day = new Date().getDay();
  return day >= 2 && day <= 4;
};

const visiblePromos = isWeeklyPromoDay() ? [...weeklyPromos, ...promos] : promos;
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
  if (product.burgerChoice) {
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
  if (!pendingPromo) return;
  const burgerNames = burgers.map((burger) => burger.name);
  document.querySelector("#promoModalTitle").textContent = `Elegí las 2 burgers ${pendingPromo.burgerChoice.toLowerCase()}`;
  document.querySelector("#promoModalHelp").textContent = "Pueden ser iguales o distintas.";
  document.querySelector("#promoSelection").innerHTML = [0, 1].map((index) => {
    const selected = promoSelections[index];
    return selected
      ? `<button type="button" data-remove-promo="${index}" aria-label="Quitar ${selected}"><strong>${selected}</strong><span>×</span></button>`
      : `<div><span>${index + 1}</span><small>Elegí una</small></div>`;
  }).join("");
  document.querySelector("#promoChoices").innerHTML = burgerNames.map((name) => `
    <button type="button" data-promo-burger="${name}" ${promoSelections.length >= 2 ? "disabled" : ""}>
      <span>${name}</span><b>+</b>
    </button>
  `).join("");
  document.querySelector("#confirmPromo").disabled = promoSelections.length !== 2;
}

function confirmPromoSelection() {
  if (!pendingPromo || promoSelections.length !== 2) return;
  const label = `${pendingPromo.burgerChoice}: ${promoSelections.join(" + ")}`;
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

  const promoButton = event.target.closest("[data-promo-burger]");
  if (promoButton && promoSelections.length < 2) {
    promoSelections.push(promoButton.dataset.promoBurger);
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
