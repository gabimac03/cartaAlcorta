// ==========================================
// ALCORTA - SPA & SISTEMA DE PEDIDOS
// ==========================================

const WHATSAPP_NUMBERS = {
  dorrego: "2617094467",
  godoyCruz: "2617094474"
};

const CATALOG = [
  {
    id: 'promos',
    title: 'Promociones Especiales',
    items: [
      { id: 'p1', name: 'Promoción 1', desc: '2 Lomos Alcorta + Papas Clásicas', price: 20000 },
      { id: 'p2', name: 'Promoción 2', desc: '2 Lomos Completos + Papas Clásicas', price: 24000 },
      { id: 'p3', name: 'Promoción 3', desc: '2 Lomos Criollos + Papas Clásicas', price: 26000 },
      { id: 'p4', name: 'Promoción 4', desc: '2 Lomos Americanos + Papas Clásicas', price: 28000 },
      { id: 'p5', name: 'Promoción 5', desc: '2 Lomos Alcorta XL + Papas Clásicas', price: 30000 },
      { id: 'p6', name: 'Promoción 6', desc: '2 Hamburguesas Simples + Papas Clásicas', price: 19000 },
      { id: 'p7', name: 'Promoción 7', desc: '2 Hamburguesas Dobles + Papas Clásicas', price: 22000 },
      { id: 'p8', name: 'Promoción 8', desc: '2 Hamburguesas Triples + Papas Clásicas', price: 25000 },
    ]
  },
  {
    id: 'burgers',
    title: 'Burgers',
    items: [
      {
        id: 'b1', name: 'ChesseBurg', desc: 'Pan · Carne · Kétchup · Cebolla · Cheddar', image: 'imagenes/chesseBurg.jpg',
        variants: [{ name: 'Simple', price: 10000 }, { name: 'Doble', price: 12000 }, { name: 'Triple', price: 13500 }]
      },
      {
        id: 'b2', name: 'AndesBurg', desc: 'Pan · Carne · Lechuga · Tomate · Mayo de Ajo · Huevo · Cheddar', image: 'imagenes/andesBurg.jpg',
        variants: [{ name: 'Simple', price: 10500 }, { name: 'Doble', price: 12500 }, { name: 'Triple', price: 14500 }]
      },
      {
        id: 'b3', name: 'AmericaBurg', desc: 'Pan · Carne · Barbacoa · Cebolla Caramelizada · Panceta · Cheddar · Salsa Thousand Island', image: 'imagenes/americanBurg.jpg',
        variants: [{ name: 'Simple', price: 11000 }, { name: 'Doble', price: 13000 }, { name: 'Triple', price: 14500 }]
      },
      {
        id: 'b4', name: 'MexiBurg', desc: 'Pan · Carne · Palta · Salteado de Morrones · Mayo de Ajo · Huevo · Cheddar', image: 'imagenes/mexiBurg.jpg',
        variants: [{ name: 'Simple', price: 11000 }, { name: 'Doble', price: 13000 }, { name: 'Triple', price: 14500 }]
      }
    ],
    note: "Todas las burgers vienen con papas"
  },
  {
    id: 'lomos',
    title: 'Lomos',
    items: [
      { id: 'l1', name: 'Lomo Alcorta', desc: 'Pan · Carne · Tomate · Lechuga · Mayonesa Alcorta', image: 'imagenes/lomoAlcorta.jpeg', price: 12000 },
      { id: 'l2', name: 'Lomo Alcorta XL', desc: 'Pan · Carne XL · Tomate · Lechuga · Mayonesa Alcorta', image: 'imagenes/lomoAlcorta.jpeg', price: 16000 },
      { id: 'l3', name: 'Lomo Completo', desc: 'Pan · Carne · Lechuga · Tomate · Huevo · Jamón · Queso · Mayonesa Alcorta', image: 'imagenes/lomoCompleto.jpg', price: 14000 },
      { id: 'l4', name: 'Lomo Criollo', desc: 'Pan · Carne · Salsa Criolla · Provoleta · Mayo de Ajo · Morrones', image: 'imagenes/lomoCriollo.jpeg', price: 15000 },
      { id: 'l5', name: 'Lomo Americano', desc: 'Pan · Carne · Barbacoa · Cebolla Caramelizada · Panceta · Cheddar', image: 'imagenes/lomoAmericano.jpg', price: 16000 }
    ],
    note: "Todos los lomos vienen con papas"
  },
  {
    id: 'papas',
    title: 'Papas',
    items: [
      { id: 'pa1', name: 'Papas Clásicas', desc: 'Papas fritas tradicionales', image: 'imagenes/papasClasicas.jpeg', price: 5000 },
      { id: 'pa2', name: 'Papas Gramajo', desc: 'Papa · Cebolla de Verdeo · Huevo', image: 'imagenes/papasGramajo.jpeg', price: 6000 },
      { id: 'pa3', name: 'Papas Americanas', desc: 'Papa · Cheddar · Panceta', image: 'imagenes/papasAmericanas.jpeg', price: 6500 }
    ]
  },
  {
    id: 'agregados',
    title: 'Agregados',
    items: [
      { id: 'a1', name: 'Cheddar x2 (debes seleccionar dos veces para las dos burgers o dos lomos)', price: 3000 },
      { id: 'a2', name: 'Cheddar + Panceta (debes seleccionar dos veces para las dos burgers o dos lomos)', price: 3000 },
      { id: 'a3', name: 'Doble Carne (debes seleccionar dos veces para los dos lomos)', desc: 'El doble carne no entra en las promociones, solo para los lomos individuales.', price: 4000 },
      { id: 'a4', name: 'Dips de Salsas ', price: 500 },
      { id: 'a5', name: 'Medallón Extra (debes seleccionar dos veces para las dos burgers o dos lomos)', price: 2500 },
      { id: 'a6', name: 'Convertí tus Papas (en vez de dos cubetas, se entrega bandeja convertida)', price: 2000 }
    ]
  },
  {
    id: 'bebidas',
    title: 'Bebidas Sin Alcohol',
    items: [
      {
        id: 'be1', name: 'Gaseosa 500ml', image: 'imagenes/sprite-500.jpg', price: 3000,
        subproducts: ['Sprite', 'Fanta', 'Coca-Cola', 'Coca-Cola Zero']
      },
      {
        id: 'be2', name: 'Gaseosa 1.5lts', image: 'imagenes/sprite-15.jpg', price: 4300,
        subproducts: ['Sprite', 'Fanta', 'Coca-Cola']
      },
      {
        id: 'be3', name: 'Agua Saborizada 500ml', image: 'imagenes/manzana-500.jpg', price: 3000,
        subproducts: ['Agua', 'Manzana', 'Pomelo']
      }
    ]
  },
  {
    id: 'alcohol',
    title: 'Bebidas Con Alcohol',
    items: [
      {
        id: 'al1', name: 'Lata 475ml', image: 'imagenes/roja-475.jpg', price: 3000,
        subproducts: ['Roja', 'Negra', 'Rubia', 'IPA']
      },
      {
        id: 'al2', name: 'Latón 750ml', image: 'imagenes/rubia-710.jpg', price: 3800,
        subproducts: ['Rubia']
      }
    ]
  }
];

// STATE MANAGEMENT
const state = {
  cart: [],
  isCartOpen: false,
  isCheckoutOpen: false,
  isPromoModalOpen: false,
  currentPromoItem: null,
  tempPromoSelections: [], // ['Nombre Burger 1', 'Nombre Burger 2']
  selections: {}, // { itemId: 'Variante o Sabor seleccionado' }
  selectedBranch: 'dorrego',
  orderType: 'retiro',
  isPromoPopupOpen: false,
  hasClosedPromo: false
};

// UTILS
const formatCurrency = (amt) => "$" + amt.toLocaleString('es-AR');
const getPrice = (item) => {
  if (item.price) return item.price;
  if (item.variants && state.selections[item.id]) {
    const v = item.variants.find(x => x.name === state.selections[item.id]);
    return v ? v.price : item.variants[0].price;
  }
  return item.variants ? item.variants[0].price : 0;
};
const getSubproduct = (item) => {
  if (item.variants && state.selections[item.id]) return state.selections[item.id];
  if (item.variants) return item.variants[0].name;
  if (item.subproducts && state.selections[item.id]) return state.selections[item.id];
  if (item.subproducts) return item.subproducts[0];
  return null;
};

// INITIALIZE OFF-DEFAULTS
CATALOG.forEach(cat => {
  cat.items.forEach(item => {
    if (item.variants) state.selections[item.id] = item.variants[0].name;
    if (item.subproducts) state.selections[item.id] = item.subproducts[0];
  });
});

// PROMO POPUP LOGIC
function checkPromoDay() {
  const day = new Date().getDay();
  // Martes (2), Miércoles (3), Jueves (4)
  return day >= 2 && day <= 4;
}

function initPromoPopup() {
  if (checkPromoDay() && !state.hasClosedPromo) {
    state.isPromoPopupOpen = true;
  }
}

function closePromoPopup() {
  state.isPromoPopupOpen = false;
  state.hasClosedPromo = true;
  triggerRender();
}

function openPromoPopup() {
  state.isPromoPopupOpen = true;
  triggerRender();
}

// EVENT DISPATCHER
function triggerRender() {
  renderApp();
}

// ACTIONS
function updateSelection(itemId, value) {
  state.selections[itemId] = value;
  triggerRender();
}

function updateBranch(branchId) {
  state.selectedBranch = branchId;
  if (branchId === 'godoyCruz') state.orderType = 'retiro';
  triggerRender();
}

function updateOrderType(type) {
  state.orderType = type;
  triggerRender();
}

function openPromoModal(itemId) {
  state.currentPromoItem = CATALOG.find(c => c.id === 'promos').items.find(i => i.id === itemId);
  state.tempPromoSelections = [];
  state.isPromoModalOpen = true;
  triggerRender();
}

function selectPromoBurger(name) {
  if (state.tempPromoSelections.length < 2) {
    state.tempPromoSelections.push(name);
  }
  triggerRender();
}

function removePromoBurger(index) {
  state.tempPromoSelections.splice(index, 1);
  triggerRender();
}

function confirmPromo() {
  if (state.tempPromoSelections.length < 2) {
    alert("Por favor selecciona las 2 hamburguesas de tu promo");
    return;
  }

  const item = state.currentPromoItem;
  const subproduct = state.tempPromoSelections.join(" + ");

  state.cart.push({
    id: Math.random().toString(36).substr(2, 9),
    itemId: item.id,
    name: item.name,
    subproduct: subproduct,
    price: item.price,
    qty: 1
  });

  state.isPromoModalOpen = false;
  state.currentPromoItem = null;
  state.tempPromoSelections = [];
  triggerRender();
}

function addToCart(itemId, categoryId) {
  if (['p6', 'p7', 'p8'].includes(itemId)) {
    openPromoModal(itemId);
    return;
  }

  const category = CATALOG.find(c => c.id === categoryId);
  const item = category.items.find(i => i.id === itemId);

  const subproduct = getSubproduct(item);
  const price = getPrice(item);

  const existingCartIndex = state.cart.findIndex(c => c.itemId === itemId && c.subproduct === subproduct);

  if (existingCartIndex > -1) {
    state.cart[existingCartIndex].qty += 1;
  } else {
    state.cart.push({
      id: Math.random().toString(36).substr(2, 9),
      itemId: item.id,
      name: item.name,
      subproduct: subproduct,
      price: price,
      qty: 1
    });
  }

  // Cart animation indicator on navbar could be added, but we strictly don't open the panel.
  triggerRender();
}

function updateCartQty(cartId, delta) {
  const index = state.cart.findIndex(c => c.id === cartId);
  if (index === -1) return;

  state.cart[index].qty += delta;
  if (state.cart[index].qty <= 0) {
    state.cart.splice(index, 1);
  }
  triggerRender();
}

function removeFromCart(cartId) {
  state.cart = state.cart.filter(c => c.id !== cartId);
  triggerRender();
}

function toggleCart(force) {
  state.isCartOpen = force !== undefined ? force : !state.isCartOpen;
  triggerRender();
}

function toggleCheckout(force) {
  if (state.cart.length === 0) return;
  state.isCheckoutOpen = force !== undefined ? force : !state.isCheckoutOpen;
  triggerRender();
}

// SUBMIT VIA WHATSAPP
function submitOrder(e) {
  e.preventDefault();
  const nameElement = document.getElementById('client-name');
  const name = nameElement ? nameElement.value.trim() : "";
  const addressField = document.getElementById('client-address');
  const address = addressField ? addressField.value.trim() : "";
  const crossingField = document.getElementById('client-street-crossing');
  const crossing = crossingField ? crossingField.value.trim() : "";
  const notesElement = document.getElementById('client-notes');
  const notes = notesElement ? notesElement.value.trim() : "";

  if (!name) {
    alert("Por favor completá tu Nombre.");
    return;
  }

  if (state.orderType === 'delivery' && (!address || !crossing)) {
    alert("Por favor ingresa tu dirección y las entre calles para el delivery.");
    return;
  }

  // Format WHATSAPP
  const now = new Date();
  const timeStr = now.getHours().toString().padStart(2, '0') + ":" + now.getMinutes().toString().padStart(2, '0');

  let totalMonto = 0;
  let lines = [];

  state.cart.forEach(c => {
    let subInfo = c.subproduct ? ` (${c.subproduct})` : "";
    let lineTotal = c.price * c.qty;
    totalMonto += lineTotal;
    lines.push(`${c.qty} x ${c.name}${subInfo} -> ${formatCurrency(lineTotal)}`);
  });

  let msg = `*=======================*
*NUEVO PEDIDO ALCORTA*
*(${state.selectedBranch === 'dorrego' ? 'DORREGO' : 'GODOY CRUZ'})*
*=======================*

*HORA:* ${timeStr}
*CLIENTE:* ${name}
*MODALIDAD:* ${state.orderType === 'delivery' ? 'DELIVERY' : 'RETIRO EN LOCAL'}
${state.orderType === 'delivery' ? `*DIRECCIÓN:* ${address}\n*ENTRE CALLES:* ${crossing}` : ''}

*PRODUCTOS:*
${lines.join('\n')}

*NOTAS:* ${notes || 'Ninguno'}
*TOTAL A PAGAR:* ${formatCurrency(totalMonto)}`;

  if (state.orderType === 'delivery' && !address) {
    alert("Por favor ingresa tu dirección para el delivery");
    return;
  }

  const num = WHATSAPP_NUMBERS[state.selectedBranch];
  const url = `https://wa.me/${num}?text=${encodeURIComponent(msg)}`;
  window.open(url, '_blank');

  // Clean up
  state.cart = [];
  state.isCheckoutOpen = false;
  state.isCartOpen = false;
  triggerRender();
}

// =======================
// RENDERERS
// =======================

function renderNavbar() {
  const totalItems = state.cart.reduce((acc, c) => acc + c.qty, 0);
  return `
    <nav class="sticky top-0 z-40 bg-black/90 backdrop-blur-md border-b border-borderlight px-4 py-3 shadow-sm">
      <div class="container mx-auto max-w-4xl flex items-center justify-between">
        <h1 class="font-serif text-white text-2xl font-black tracking-widest leading-none">ALCORTA</h1>
        <button onclick="toggleCart(true)" class="relative flex items-center justify-center p-2 text-white hover:text-brand transition-colors">
          <i class="fas fa-shopping-bag text-xl"></i>
          ${totalItems > 0 ? `<span class="absolute -top-1 -right-1 bg-brand text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">${totalItems}</span>` : ''}
        </button>
      </div>
    </nav>
  `;
}

function renderHero() {
  return `
    <header class="bg-black text-center py-16 px-4 border-b-2 border-brand">
      <h2 class="font-serif text-5xl md:text-6xl text-white font-black tracking-widest mb-3 fade-in">ALCORTA</h2>
      <p class="text-brand font-bold uppercase tracking-[0.2em] text-lg md:text-xl">Lomo & Burger</p>
      <p class="text-gray-400 font-medium uppercase tracking-widest text-sm mt-2">Take Away Premium</p>
    </header>
  `;
}

function renderItemCard(item, catId) {
  let imageHTML = item.image
    ? `<div class="w-20 h-20 sm:w-28 sm:h-28 flex-shrink-0 bg-transparent rounded-lg overflow-hidden mr-3 sm:mr-4">
         <img src="${item.image}" alt="${item.name}" class="w-full h-full object-cover"/>
       </div>`
    : '';

  let priceHTML = `<div class="text-brand font-extrabold text-lg sm:text-xl whitespace-nowrap">${formatCurrency(getPrice(item))}</div>`;

  let selectorsHTML = '';

  if (item.variants) {
    selectorsHTML = `
      <div class="flex flex-wrap gap-1.5 mt-1.5 w-full">
        ${item.variants.map(v => {
      const isSelected = state.selections[item.id] === v.name;
      const bg = isSelected ? 'bg-brand border-brand text-white' : 'bg-bgmain border-borderlight text-textmuted hover:bg-gray-200 hover:text-textmain';
      return `<button onclick="updateSelection('${item.id}', '${v.name}')" 
                    class="px-2.5 py-1 text-[0.7rem] sm:text-xs font-semibold border rounded-lg transition-colors ${bg}">
                    ${v.name}
                  </button>`;
    }).join('')}
      </div>
    `;
  }

  if (item.subproducts) {
    selectorsHTML = `
      <div class="mt-1.5 w-full">
        <select onchange="updateSelection('${item.id}', this.value)" 
          class="w-full text-xs sm:text-sm font-semibold bg-bgmain border border-borderlight text-textdark rounded-lg p-1.5 outline-none focus:border-brand">
          ${item.subproducts.map(s => {
      const isSelected = state.selections[item.id] === s;
      return `<option value="${s}" ${isSelected ? 'selected' : ''}>${s}</option>`;
    }).join('')}
        </select>
      </div>
    `;
  }

  return `
    <div class="fade-in bg-transparent border-b border-borderlight py-4 flex flex-row items-center justify-between">
      <div class="flex items-center flex-1 w-full overflow-hidden">
        ${imageHTML}
        <div class="flex flex-col flex-1 pr-2 justify-center">
          <h4 class="text-base sm:text-lg font-bold text-textmain mb-0.5 leading-tight">${item.name}</h4>
          ${item.desc ? `<p class="text-[0.8rem] sm:text-sm text-textmuted leading-snug mb-1 truncate-none">${item.desc}</p>` : ''}
          ${selectorsHTML}
        </div>
      </div>
      
      <div class="flex flex-col items-end justify-center ml-2 flex-shrink-0 gap-2">
        ${priceHTML}
        <button onclick="addToCart('${item.id}', '${catId}')" class="bg-black hover:bg-brand text-white font-bold py-1.5 px-4 rounded-lg text-xs sm:text-sm transition-all shadow-sm">
          Añadir
        </button>
      </div>
    </div>
  `;
}

function renderCategories() {
  return CATALOG.map(cat => `
    <section class="mb-14">
      <h3 class="font-serif text-3xl font-black text-textmain mb-1">${cat.title}</h3>
      <div class="w-16 h-1 bg-brand mb-6"></div>
      <div class="flex flex-col">
        ${cat.items.map(item => renderItemCard(item, cat.id)).join('')}
      </div>
      ${cat.note ? `<p class="text-center text-sm font-bold tracking-widest text-[#B58B35] uppercase mt-6">✦ ${cat.note} ✦</p>` : ''}
    </section>
  `).join('');
}

function renderCartOverlay() {
  if (!state.isCartOpen && !state.isCheckoutOpen) return '';

  if (state.isCheckoutOpen) return ''; // Hide cart mechanics if checkout is open

  let cartContent = '';
  let subtotal = 0;

  if (state.cart.length === 0) {
    cartContent = `
      <div class="flex flex-col items-center justify-center h-full text-center px-4">
        <i class="fas fa-shopping-basket text-5xl text-gray-300 mb-4"></i>
        <h3 class="text-xl font-bold text-textmain mb-2">Tu carrito está vacío</h3>
        <p class="text-textmuted text-sm">¡Añadí deliciosos lomos y burgers para disfrutar!</p>
        <button onclick="toggleCart(false)" class="mt-8 bg-black text-white px-6 py-2 rounded-lg font-bold">Volver al Menú</button>
      </div>
    `;
  } else {
    state.cart.forEach(c => {
      let totalLine = c.qty * c.price;
      subtotal += totalLine;
      cartContent += `
        <div class="flex items-start justify-between py-4 border-b border-borderlight">
          <div class="flex-1 pr-3">
            <h5 class="font-bold text-sm text-textmain leading-tight">${c.name}</h5>
            ${c.subproduct ? `<p class="text-xs text-brand font-semibold mt-0.5">${c.subproduct}</p>` : ''}
            <div class="text-xs text-textmuted mt-1">${formatCurrency(c.price)} c/u</div>
          </div>
          <div class="flex flex-col items-end">
            <div class="font-black text-base">${formatCurrency(totalLine)}</div>
            <div class="flex items-center mt-2 border border-borderlight rounded-md overflow-hidden bg-bgcard">
              <button onclick="updateCartQty('${c.id}', -1)" class="w-7 h-7 flex items-center justify-center text-textmain hover:bg-gray-100 transition"><i class="fas fa-minus text-xs"></i></button>
              <span class="w-8 text-center text-sm font-bold">${c.qty}</span>
              <button onclick="updateCartQty('${c.id}', 1)" class="w-7 h-7 flex items-center justify-center text-textmain hover:bg-gray-100 transition"><i class="fas fa-plus text-xs"></i></button>
            </div>
          </div>
        </div>
      `;
    });

    cartContent = `
      <div class="flex-1 overflow-y-auto px-5 py-2">
        ${cartContent}
      </div>
      <div class="p-5 border-t border-borderlight bg-bgcard">
        <div class="flex justify-between items-center mb-4">
          <span class="text-textmuted font-semibold uppercase text-sm tracking-wider">Subtotal</span>
          <span class="text-2xl font-black text-brand">${formatCurrency(subtotal)}</span>
        </div>
        <button onclick="toggleCheckout(true)" class="w-full bg-black hover:bg-brand text-white font-bold py-3 px-4 rounded-xl text-lg transition-colors shadow-lg">
          Confirmar Pedido
        </button>
      </div>
    `;
  }

  return `
    <div class="fixed inset-0 z-50 flex justify-end">
      <div class="absolute inset-0 bg-black/50 cart-overlay" onclick="toggleCart(false)"></div>
      <div class="relative w-full max-w-sm h-full bg-bgmain shadow-2xl flex flex-col cart-slide-active overflow-hidden">
        
        <div class="p-4 border-b border-borderlight flex items-center justify-between bg-white">
          <h2 class="font-serif text-xl font-bold">Tu Pedido</h2>
          <button onclick="toggleCart(false)" class="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-textmain hover:bg-gray-200">
            <i class="fas fa-times"></i>
          </button>
        </div>
        
        ${cartContent}
      </div>
    </div>
  `;
}

function renderCheckoutModal() {
  if (!state.isCheckoutOpen) return '';

  let subtotal = state.cart.reduce((acc, c) => acc + (c.qty * c.price), 0);

  return `
    <div class="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div class="absolute inset-0 bg-black/70 backdrop-blur-sm" onclick="toggleCheckout(false)"></div>
      <div class="relative bg-bgmain w-[92%] sm:w-full max-w-[400px] rounded-2xl shadow-2xl overflow-hidden fade-in flex flex-col max-h-[90vh]">
        
        <div class="bg-black text-white p-4 sm:p-5 flex items-center justify-between">
          <div>
            <h2 class="font-serif text-2xl font-bold leading-tight">Detalles del Cliente</h2>
            <p class="text-brand text-sm font-semibold uppercase tracking-widest mt-1">Paso Final</p>
          </div>
          <button onclick="toggleCheckout(false)" class="text-gray-400 hover:text-white transition">
            <i class="fas fa-times text-xl"></i>
          </button>
        </div>
        
        <form onsubmit="submitOrder(event)" class="p-5 flex-1 overflow-y-auto">
          <div class="mb-4">
            <h3 class="text-center text-xs font-bold text-brand uppercase tracking-widest mb-3">¿A qué local pedís?</h3>
            <div class="grid grid-cols-2 gap-2 mb-2">
              <button type="button" onclick="updateBranch('dorrego')" class="py-2 px-3 rounded-lg border text-xs font-bold transition-all ${state.selectedBranch === 'dorrego' ? 'bg-brand border-brand text-white shadow-md' : 'bg-white border-borderlight text-textmuted'}">
                ALCORTA DORREGO
              </button>
              <button type="button" onclick="updateBranch('godoyCruz')" class="py-2 px-3 rounded-lg border text-xs font-bold transition-all ${state.selectedBranch === 'godoyCruz' ? 'bg-brand border-brand text-white shadow-md' : 'bg-white border-borderlight text-textmuted'}">
                ALCORTA G. CRUZ
              </button>
            </div>
          </div>

          <div class="mb-4">
            <h3 class="text-center text-xs font-bold text-textmuted uppercase tracking-widest mb-3">Modalidad</h3>
            <div class="grid grid-cols-2 gap-2 mb-2">
              <button type="button" onclick="updateOrderType('retiro')" class="py-2 px-3 rounded-lg border text-xs font-bold transition-all ${state.orderType === 'retiro' ? 'bg-black border-black text-white' : 'bg-white border-borderlight text-textmuted'}">
                RETIRO LOCAL
              </button>
              ${state.selectedBranch === 'dorrego' ? `
                <button type="button" onclick="updateOrderType('delivery')" class="py-2 px-3 rounded-lg border text-xs font-bold transition-all ${state.orderType === 'delivery' ? 'bg-black border-black text-white' : 'bg-white border-borderlight text-textmuted'}">
                  DELIVERY
                </button>
              ` : ''}
            </div>
          </div>

          <div class="mb-4">
            <label class="block text-xs sm:text-sm font-bold text-textmain mb-1.5">👤 Nombre Completo <span class="text-red-500">*</span></label>
            <input type="text" id="client-name" required placeholder="Ej: Juan Pérez" class="w-full text-sm sm:text-base border border-borderlight rounded-lg px-3 py-2.5 bg-white outline-none focus:border-brand focus:ring-1 focus:ring-brand transition">
          </div>
          
          ${state.orderType === 'delivery' ? `
          <div class="mb-4">
            <label class="block text-xs sm:text-sm font-bold text-textmain mb-1.5">📍 Dirección de Envío <span class="text-red-500">*</span></label>
            <input type="text" id="client-address" required placeholder="Ej: San Martín 1234, Dorrego" class="w-full text-sm sm:text-base border border-borderlight rounded-lg px-3 py-2.5 bg-white outline-none focus:border-brand focus:ring-1 focus:ring-brand transition">
          </div>
          <div class="mb-4">
            <label class="block text-xs sm:text-sm font-bold text-textmain mb-1.5">🛣️ Entre calles <span class="text-red-500">*</span></label>
            <input type="text" id="client-street-crossing" required placeholder="Ej: Entre Colón y San Martín" class="w-full text-sm sm:text-base border border-borderlight rounded-lg px-3 py-2.5 bg-white outline-none focus:border-brand focus:ring-1 focus:ring-brand transition">
          </div>
          ` : ''}
          
          <div class="mb-5">
            <label class="block text-xs sm:text-sm font-bold text-textmain mb-1.5">📝 Notas Adicionales</label>
            <textarea id="client-notes" rows="2" placeholder="Sin tomate, sin sal, etc..." class="w-full text-sm sm:text-base border border-borderlight rounded-lg px-3 py-2.5 bg-white outline-none focus:border-brand focus:ring-1 focus:ring-brand transition resize-none"></textarea>
          </div>
          
          <div class="border-t border-borderlight pt-5 flex items-center justify-between mb-6">
            <span class="text-textmuted font-semibold uppercase text-sm tracking-wider">Total a pagar (no incluye envío)</span>
            <span class="text-2xl font-black text-brand">${formatCurrency(subtotal)}</span>
          </div>
          
          <button type="submit" class="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-3.5 px-4 rounded-xl text-lg flex items-center justify-center gap-3 transition-colors shadow-lg">
            <i class="fab fa-whatsapp text-2xl"></i> Enviar Pedido vía WhatsApp
          </button>
          
          <button type="button" onclick="toggleCheckout(false)" class="w-full mt-3 text-center text-textmuted font-semibold text-sm hover:text-textmain py-2">
            Volver al Carrito
          </button>
        </form>
      </div>
    </div>
  `;
}

function renderLocations() {
  return `
    <section class="hidden md:block py-16 bg-bgcard border-t border-borderlight mt-8">
      <div class="container mx-auto px-4 max-w-5xl text-center">
        <h3 class="font-serif text-3xl font-black text-textmain mb-8">Nuestras Sucursales</h3>
        <div class="grid grid-cols-2 gap-8 text-left">
          
          <div class="bg-bgmain border border-borderlight rounded-xl p-6 shadow-sm transition hover:border-brand">
            <div class="flex items-center gap-3 mb-2">
              <i class="fas fa-store text-brand text-2xl"></i>
              <h4 class="text-xl font-bold text-textmain">Sucursal Dorrego</h4>
            </div>
            <p class="text-sm font-semibold text-textmuted mb-4">ALEM 300, Dorrego, Mendoza</p>
            <div class="w-full h-48 rounded-lg overflow-hidden border border-borderlight mb-4 shadow-inner">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3349.9395620677606!2d-68.82997702503863!3d-32.89976616952102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e090049601253%3A0xc2b91fe68685431c!2sALCORTA%20Lomos%20%26%20Burgers!5e0!3m2!1ses-419!2sar!4v1777410237100!5m2!1ses-419!2sar" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <a href="https://maps.app.goo.gl/9TzD1sY451uYh8Q2A" target="_blank" class="inline-flex items-center justify-center gap-2 font-bold text-white bg-black hover:bg-brand py-2.5 px-6 rounded-lg transition w-full text-sm shadow">
              <i class="fas fa-external-link-alt"></i> Abrir en Maps
            </a>
          </div>

          <div class="bg-bgmain border border-borderlight rounded-xl p-6 shadow-sm transition hover:border-brand">
            <div class="flex items-center gap-3 mb-2">
              <i class="fas fa-store-alt text-brand text-2xl"></i>
              <h4 class="text-xl font-bold text-textmain">Sucursal Godoy Cruz</h4>
            </div>
            <p class="text-sm font-semibold text-textmuted mb-4">Figueroa Alcorta 1304, Godoy Cruz, Mendoza</p>
            <div class="w-full h-48 rounded-lg overflow-hidden border border-borderlight mb-4 shadow-inner">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3348.4188047733232!2d-68.84627422503628!3d-32.93995057154916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e0b08d5d5cb71%3A0xec2ec8803df6040d!2sALCORTA%20Lomos%20%26%20Burgers%20Godoy%20Cruz!5e0!3m2!1ses-419!2sar!4v1777410265034!5m2!1ses-419!2sar" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <a href="https://maps.app.goo.gl/pW6z3mD3J6XfFzQk8" target="_blank" class="inline-flex items-center justify-center gap-2 font-bold text-white bg-black hover:bg-brand py-2.5 px-6 rounded-lg transition w-full text-sm shadow">
              <i class="fas fa-external-link-alt"></i> Abrir en Maps
            </a>
          </div>
          
        </div>
      </div>
    </section>
  `;
}

function renderPromoModal() {
  if (!state.isPromoModalOpen || !state.currentPromoItem) return '';

  const burgerData = [
    { name: 'ChesseBurg', img: 'imagenes/chesseBurg.jpg' },
    { name: 'AndesBurg', img: 'imagenes/andesBurg.jpg' },
    { name: 'AmericaBurg', img: 'imagenes/americanBurg.jpg' },
    { name: 'MexiBurg', img: 'imagenes/mexiBurg.jpg' }
  ];
  const count = state.tempPromoSelections.length;

  return `
    <div class="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div class="absolute inset-0 bg-black/80 backdrop-blur-md" onclick="state.isPromoModalOpen = false; triggerRender();"></div>
      <div class="relative bg-white w-full max-w-[380px] rounded-3xl shadow-2xl overflow-hidden fade-in flex flex-col">
        <div class="bg-black text-white p-5 text-center">
          <h2 class="font-serif text-xl font-bold">${state.currentPromoItem.name}</h2>
          <p class="text-brand text-xs font-bold uppercase tracking-widest mt-1">Selecciona tus 2 Burgers</p>
        </div>
        
        <div class="p-6">
          <!-- Slots de selección -->
          <div class="flex gap-4 mb-6 justify-center">
            ${[0, 1].map(index => {
    const selected = state.tempPromoSelections[index];
    const data = selected ? burgerData.find(b => b.name === selected) : null;
    return `
                <div class="w-16 h-16 rounded-xl border-2 border-dashed border-gray-200 flex items-center justify-center relative overflow-visible bg-gray-50">
                  ${selected ? `
                    <img src="${data.img}" class="absolute inset-0 w-full h-full object-cover rounded-xl" />
                    <div class="absolute inset-0 bg-black/20 rounded-xl"></div>
                    <button onclick="removePromoBurger(${index})" class="absolute -top-2 -right-2 bg-red-500 text-white w-6 h-6 rounded-full flex items-center justify-center shadow-lg z-10">
                      <i class="fas fa-times text-[10px]"></i>
                    </button>
                  ` : '<i class="fas fa-plus text-gray-300"></i>'}
                </div>
              `;
  }).join('')}
          </div>

          <!-- Opciones con Imagen -->
          <div class="grid grid-cols-1 gap-3 max-h-[300px] overflow-y-auto pr-1">
            ${burgerData.map(b => `
              <button onclick="selectPromoBurger('${b.name}')" ${count >= 2 ? 'disabled' : ''} 
                class="flex items-center gap-3 p-2 border border-borderlight rounded-2xl hover:border-brand transition-all text-left group ${count >= 2 ? 'opacity-50 grayscale cursor-not-allowed' : 'active:scale-[0.98]'}">
                <div class="w-14 h-14 rounded-xl overflow-hidden flex-shrink-0 shadow-sm">
                  <img src="${b.img}" class="w-full h-full object-cover" />
                </div>
                <div class="flex-1">
                  <span class="font-bold text-sm text-textmain block">${b.name}</span>
                  <span class="text-[10px] text-textmuted uppercase font-bold tracking-tighter">Añadir a la promo</span>
                </div>
                <i class="fas fa-plus-circle text-brand text-lg mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></i>
              </button>
            `).join('')}
          </div>

          <button onclick="confirmPromo()" class="w-full mt-6 bg-black hover:bg-brand text-white font-bold py-3.5 rounded-2xl shadow-lg transition-all active:scale-95 ${count < 2 ? 'opacity-50 grayscale cursor-not-allowed' : ''}">
            Añadir Promo al Carrito
          </button>
          
          <button onclick="state.isPromoModalOpen = false; triggerRender();" class="w-full mt-4 text-[10px] font-black text-textmuted uppercase tracking-widest text-center hover:text-black transition-colors">
            Cerrar Ventana
          </button>
        </div>
      </div>
    </div>
  `;
}

function renderPromoPopup() {
  if (!state.isPromoPopupOpen) {
    if (checkPromoDay()) {
      return `
        <button onclick="openPromoPopup()" class="fixed bottom-24 right-6 z-40 bg-brand text-white w-14 h-14 rounded-full shadow-2xl flex items-center justify-center animate-bounce hover:scale-110 transition-transform">
          <i class="fas fa-percentage text-2xl"></i>
        </button>
      `;
    }
    return '';
  }

  return `
    <div class="fixed inset-0 z-[70] flex items-center justify-center p-4">
      <div class="absolute inset-0 bg-black/90 backdrop-blur-md" onclick="closePromoPopup()"></div>
      <div class="relative bg-white w-full max-w-[450px] rounded-[2rem] shadow-2xl overflow-hidden fade-in flex flex-col">
        
        <div class="absolute top-4 right-4 z-10">
          <button onclick="closePromoPopup()" class="bg-black/50 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-black transition-colors">
            <i class="fas fa-times"></i>
          </button>
        </div>

        <div class="overflow-y-auto max-h-[85vh]">
          <div class="p-6 text-center">
            <h2 class="font-serif text-3xl font-black text-textmain mb-1">¡PROMOS DE LA SEMANA!</h2>
            <p class="text-brand font-bold uppercase tracking-widest text-sm mb-6">Martes a Jueves</p>
            
            <div class="space-y-4">
              <div class="rounded-2xl overflow-hidden shadow-lg border-4 border-bgmain">
                <img src="imagenes/promo1.jpeg" alt="Promo 1" class="w-full h-auto object-cover" />
              </div>
              <div class="rounded-2xl overflow-hidden shadow-lg border-4 border-bgmain">
                <img src="imagenes/promo2.jpeg" alt="Promo 2" class="w-full h-auto object-cover" />
              </div>
            </div>

            <button onclick="closePromoPopup()" class="w-full mt-8 bg-black text-white font-bold py-4 rounded-2xl shadow-xl hover:bg-brand transition-colors text-lg">
              Ver el resto del menú
            </button>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderApp() {
  const app = document.getElementById('app');
  if (!app) return;
  app.innerHTML = `
    ${renderNavbar()}
    ${renderHero()}
    <main class="container mx-auto px-4 max-w-4xl py-12">
      ${renderCategories()}
    </main>
    ${renderLocations()}
    ${renderCartOverlay()}
    ${renderCheckoutModal()}
    ${renderPromoModal()}
    ${renderPromoPopup()}
  `;
}

// INITIALIZATION
window.onload = () => {
  initPromoPopup();
  renderApp();
};