"use client";

import { useMemo, useState } from "react";

type Variant = { label: string; price: number };
type Product = {
  id: string;
  name: string;
  description: string;
  image?: string;
  eyebrow?: string;
  variants: Variant[];
};
type CartLine = {
  key: string;
  name: string;
  variant: string;
  price: number;
  quantity: number;
};

const money = new Intl.NumberFormat("es-AR", {
  style: "currency",
  currency: "ARS",
  maximumFractionDigits: 0,
});

const promos: Product[] = [
  {
    id: "promo-criolla",
    eyebrow: "PROMO 03",
    name: "Promoción Criolla",
    description: "2 Lomos Criollos + papas clásicas.",
    image: "/images/lomoCriollo.jpeg",
    variants: [{ label: "Promo", price: 19000 }],
  },
  {
    id: "promo-americana",
    eyebrow: "PROMO 04",
    name: "Promoción Americana",
    description: "2 Lomos Americanos + papas clásicas.",
    image: "/images/lomoAmericano.jpg",
    variants: [{ label: "Promo", price: 21000 }],
  },
  {
    id: "promo-simple",
    eyebrow: "PROMO 05",
    name: "Burger Simple",
    description: "2 hamburguesas simples + papas clásicas.",
    image: "/images/chesseBurg.jpg",
    variants: [{ label: "Promo", price: 13000 }],
  },
  {
    id: "promo-doble",
    eyebrow: "PROMO 06",
    name: "Burger Doble",
    description: "2 hamburguesas dobles + papas clásicas.",
    image: "/images/andesBurg.jpg",
    variants: [{ label: "Promo", price: 16000 }],
  },
  {
    id: "promo-alcorta",
    eyebrow: "PROMO 01",
    name: "Promoción Alcorta",
    description: "2 Lomos Alcorta + papas clásicas.",
    image: "/images/lomoAlcorta.jpeg",
    variants: [{ label: "Promo", price: 14000 }],
  },
  {
    id: "promo-completa",
    eyebrow: "PROMO 02",
    name: "Promoción Completa",
    description: "2 Lomos Completos + papas clásicas.",
    image: "/images/lomoCompleto.jpg",
    variants: [{ label: "Promo", price: 18000 }],
  },
  {
    id: "promo-triple",
    eyebrow: "PROMO 07",
    name: "Burger Triple",
    description: "2 hamburguesas triples + papas clásicas.",
    image: "/images/americanBurg.jpg",
    variants: [{ label: "Promo", price: 19000 }],
  },
];

const featured: Product[] = [
  {
    id: "chesseburg",
    name: "ChesseBurg",
    description: "Pan, carne, kétchup, cebolla y cheddar.",
    image: "/images/chesseBurg.jpg",
    variants: [
      { label: "Simple", price: 7000 },
      { label: "Doble", price: 9000 },
      { label: "Triple", price: 10000 },
    ],
  },
  {
    id: "americaburg",
    name: "AmericaBurg",
    description:
      "Barbacoa, cebolla caramelizada, panceta, cheddar y salsa Thousand Island.",
    image: "/images/americanBurg.jpg",
    variants: [
      { label: "Simple", price: 8000 },
      { label: "Doble", price: 10000 },
      { label: "Triple", price: 11500 },
    ],
  },
  {
    id: "lomo-completo",
    name: "Lomo Completo",
    description:
      "Carne, lechuga, tomate, huevo, jamón, queso y mayonesa Alcorta.",
    image: "/images/lomoCompleto.jpg",
    variants: [{ label: "Unidad", price: 10000 }],
  },
  {
    id: "lomo-americano",
    name: "Lomo Americano",
    description:
      "Carne, barbacoa, cebolla caramelizada, panceta y cheddar.",
    image: "/images/lomoAmericano.jpg",
    variants: [{ label: "Unidad", price: 12000 }],
  },
];

const burgers: Product[] = [
  featured[0],
  {
    id: "andesburg",
    name: "AndesBurg",
    description:
      "Carne, lechuga, tomate, mayo de ajo, huevo y cheddar.",
    image: "/images/andesBurg.jpg",
    variants: [
      { label: "Simple", price: 7500 },
      { label: "Doble", price: 9500 },
      { label: "Triple", price: 10500 },
    ],
  },
  featured[1],
  {
    id: "mexiburg",
    name: "MexiBurg",
    description:
      "Carne, palta, salteado de morrones, mayo de ajo, huevo y cheddar.",
    image: "/images/mexiBurg.jpg",
    variants: [
      { label: "Simple", price: 8000 },
      { label: "Doble", price: 10000 },
      { label: "Triple", price: 11500 },
    ],
  },
];

const lomos: Product[] = [
  {
    id: "lomo-alcorta",
    name: "Lomo Alcorta",
    description: "Carne, tomate, lechuga y mayonesa Alcorta.",
    image: "/images/lomoAlcorta.jpeg",
    variants: [{ label: "Unidad", price: 8000 }],
  },
  featured[2],
  featured[3],
  {
    id: "lomo-criollo",
    name: "Lomo Criollo",
    description:
      "Carne, salsa criolla, provoleta, mayonesa de ajo y morrones asados.",
    image: "/images/lomoCriollo.jpeg",
    variants: [{ label: "Unidad", price: 11000 }],
  },
];

const papas: Product[] = [
  {
    id: "papas-clasicas",
    name: "Papas Clásicas",
    description: "Papas fritas tradicionales, doradas y crocantes.",
    variants: [{ label: "Porción", price: 4000 }],
  },
  {
    id: "papas-gramajo",
    name: "Papas Gramajo",
    description: "Papas, cebolla de verdeo y huevo.",
    variants: [{ label: "Porción", price: 5000 }],
  },
  {
    id: "papas-americanas",
    name: "Papas Americanas",
    description: "Papas con cheddar y panceta.",
    image: "/images/papasConCheddar.jpg",
    variants: [{ label: "Porción", price: 6000 }],
  },
];

const extras: Product[] = [
  { id: "extra-carne", name: "Carne Extra", description: "Sumá una carne a tu burger.", variants: [{ label: "Extra", price: 1500 }] },
  { id: "extra-cheddar", name: "Cheddar x2", description: "Doble porción de cheddar.", variants: [{ label: "Extra", price: 2000 }] },
  { id: "extra-panceta", name: "Cheddar + Panceta", description: "El agregado que nunca falla.", variants: [{ label: "Extra", price: 3000 }] },
  { id: "extra-dip", name: "Dip de Salsa", description: "Elegí tu salsa favorita.", variants: [{ label: "Extra", price: 500 }] },
  { id: "extra-papas", name: "Convertí tus Papas", description: "Pasá tus papas clásicas a especiales.", variants: [{ label: "Extra", price: 2000 }] },
];

const bebidas: Product[] = [
  {
    id: "gaseosa-500",
    name: "Gaseosa 500 ml",
    description: "Sprite, Fanta, Coca-Cola o Coca-Cola Zero.",
    image: "/images/coca-500.jpg",
    variants: [
      { label: "Coca", price: 2100 },
      { label: "Sprite", price: 2100 },
      { label: "Fanta", price: 2100 },
    ],
  },
  {
    id: "gaseosa-15",
    name: "Gaseosa 1,5 l",
    description: "Sprite, Fanta o Coca-Cola.",
    image: "/images/coca-15.jpg",
    variants: [
      { label: "Coca", price: 4000 },
      { label: "Sprite", price: 4000 },
      { label: "Fanta", price: 4000 },
    ],
  },
  {
    id: "agua-500",
    name: "Agua 500 ml",
    description: "Agua o Levité sabor manzana/pomelo.",
    image: "/images/agua-500.jpg",
    variants: [
      { label: "Agua", price: 2300 },
      { label: "Manzana", price: 2300 },
      { label: "Pomelo", price: 2300 },
    ],
  },
  {
    id: "lata-475",
    name: "Cerveza 473 ml",
    description: "Roja, negra, rubia o IPA.",
    image: "/images/ipa-475.jpg",
    variants: [
      { label: "IPA", price: 2300 },
      { label: "Rubia", price: 2300 },
      { label: "Roja", price: 2300 },
    ],
  },
  {
    id: "laton-710",
    name: "Latón 710 ml",
    description: "Cerveza rubia bien fría.",
    image: "/images/rubia-710.jpg",
    variants: [{ label: "Rubia", price: 3500 }],
  },
];

const menuGroups = [
  { id: "burgers", label: "Burgers", items: burgers },
  { id: "lomos", label: "Lomos", items: lomos },
  { id: "papas", label: "Papas", items: papas },
  { id: "extras", label: "Agregados", items: extras },
  { id: "bebidas", label: "Bebidas", items: bebidas },
];

function ProductCard({
  product,
  addToCart,
}: {
  product: Product;
  addToCart: (product: Product, variant: Variant) => void;
}) {
  const [selected, setSelected] = useState(0);
  const variant = product.variants[selected];

  return (
    <article className="product-card">
      <div className="product-photo">
        {product.image ? (
          <img src={product.image} alt={product.name} />
        ) : (
          <div className="photo-placeholder">ALCORTA</div>
        )}
        {product.eyebrow && <span className="photo-label">{product.eyebrow}</span>}
      </div>
      <div className="product-body">
        <div className="product-heading">
          <h3>{product.name}</h3>
          <strong>{money.format(variant.price)}</strong>
        </div>
        <p>{product.description}</p>
        {product.variants.length > 1 && (
          <div className="variant-list" aria-label={`Elegir tamaño de ${product.name}`}>
            {product.variants.map((item, index) => (
              <button
                className={selected === index ? "is-active" : ""}
                key={item.label}
                onClick={() => setSelected(index)}
                type="button"
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
        <button
          className="add-button"
          type="button"
          onClick={() => addToCart(product, variant)}
        >
          Agregar al pedido <span>+</span>
        </button>
      </div>
    </article>
  );
}

export default function Home() {
  const [cart, setCart] = useState<CartLine[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [customerName, setCustomerName] = useState("");
  const [notes, setNotes] = useState("");
  const [branch, setBranch] = useState("Alem 300, Dorrego");
  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const total = useMemo(
    () => cart.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [cart],
  );

  const addToCart = (product: Product, variant: Variant) => {
    const key = `${product.id}-${variant.label}`;
    setCart((current) => {
      const existing = current.find((item) => item.key === key);
      if (existing) {
        return current.map((item) =>
          item.key === key ? { ...item, quantity: item.quantity + 1 } : item,
        );
      }
      return [
        ...current,
        {
          key,
          name: product.name,
          variant: variant.label,
          price: variant.price,
          quantity: 1,
        },
      ];
    });
    setCartOpen(true);
  };

  const changeQuantity = (key: string, delta: number) => {
    setCart((current) =>
      current
        .map((item) =>
          item.key === key
            ? { ...item, quantity: Math.max(0, item.quantity + delta) }
            : item,
        )
        .filter((item) => item.quantity > 0),
    );
  };

  const finishOrder = () => {
    const lines = cart
      .map(
        (item) =>
          `• ${item.quantity}x ${item.name} (${item.variant}) — ${money.format(item.price * item.quantity)}`,
      )
      .join("\n");
    const message = [
      "¡Hola ALCORTA! Quiero hacer este pedido:",
      "",
      lines,
      "",
      `Total estimado: ${money.format(total)}`,
      `Retiro en: ${branch}`,
      customerName ? `Nombre: ${customerName}` : "",
      notes ? `Aclaraciones: ${notes}` : "",
    ]
      .filter(Boolean)
      .join("\n");
    window.open(
      `https://wa.me/5492617094467?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="ALCORTA, inicio">
          <span>ALCORTA</span>
          <small>Lomos &amp; Burgers</small>
        </a>
        <nav aria-label="Navegación principal">
          <a href="#promos">Promos</a>
          <a href="#burgers">Burgers</a>
          <a href="#lomos">Lomos</a>
          <a href="#papas">Papas</a>
          <a href="#bebidas">Bebidas</a>
        </nav>
        <button className="cart-trigger" type="button" onClick={() => setCartOpen(true)}>
          <span>Pedido</span>
          <b>{itemCount}</b>
        </button>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-copy">
          <p className="kicker">Hecho al momento · Mendoza</p>
          <h1>El antojo empieza acá.</h1>
          <p className="hero-text">
            Lomos gigantes, smash burgers y promos para compartir.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#carta">
              Ver la carta
            </a>
            <a
              className="button button-secondary"
              href="https://wa.me/5492617094467?text=Hola!%20Quiero%20hacer%20un%20pedido%20a%20ALCORTA"
              target="_blank"
              rel="noreferrer"
            >
              Pedir por WhatsApp
            </a>
          </div>
          <div className="hero-location">
            <i />
            Mendoza · Take Away
          </div>
        </div>
        <div className="hero-food" aria-label="Burger y lomo de ALCORTA">
          <figure className="hero-burger">
            <img src="/images/americanBurg.jpg" alt="AmericaBurg de ALCORTA" />
          </figure>
          <figure className="hero-lomo">
            <img src="/images/lomoAmericano.jpg" alt="Lomo Americano de ALCORTA" />
          </figure>
          <span className="hero-stamp">Fuego<br />real</span>
        </div>
      </section>

      <section className="full-menu" aria-label="Carta completa">
        {menuGroups.map((group, groupIndex) => (
          <div className="menu-group" id={group.id} key={group.id}>
            <div className="group-title">
              <span>{String(groupIndex + 1).padStart(2, "0")}</span>
              <h2>{group.label}</h2>
              <p>
                {group.id === "burgers" && "Elegí simple, doble o triple."}
                {group.id === "lomos" && "El clásico mendocino, bien cargado."}
                {group.id === "papas" && "Para acompañar o para compartir."}
                {group.id === "extras" && "Hacelo exactamente como te gusta."}
                {group.id === "bebidas" && "Algo fresco para completar."}
              </p>
            </div>
            <div className="product-grid">
              {group.items.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  addToCart={addToCart}
                />
              ))}
            </div>
          </div>
        ))}
      </section>

      <section className="locations-section" id="ubicaciones">
        <div className="location-heading">
          <p className="kicker">Dos puntos, el mismo fuego</p>
          <h2>Pasá a buscar tu pedido.</h2>
        </div>
        <div className="location-grid">
          <a
            className="location-card"
            href="https://www.google.com/maps/search/?api=1&query=Alem+300+Dorrego+Mendoza"
            target="_blank"
            rel="noreferrer"
          >
            <span>01</span>
            <div>
              <small>Dorrego</small>
              <h3>Alem 300</h3>
              <p>Abrir en Google Maps ↗</p>
            </div>
          </a>
          <a
            className="location-card"
            href="https://www.google.com/maps/search/?api=1&query=Figueroa+Alcorta+1304+Godoy+Cruz+Mendoza"
            target="_blank"
            rel="noreferrer"
          >
            <span>02</span>
            <div>
              <small>Godoy Cruz</small>
              <h3>Figueroa Alcorta 1304</h3>
              <p>Abrir en Google Maps ↗</p>
            </div>
          </a>
        </div>
      </section>

      <footer>
        <a className="brand" href="#inicio">
          <span>ALCORTA</span>
          <small>Lomos &amp; Burgers</small>
        </a>
        <p>Take Away · Mendoza</p>
        <a
          href="https://wa.me/5492617094467?text=Hola!%20Quiero%20hacer%20un%20pedido%20a%20ALCORTA"
          target="_blank"
          rel="noreferrer"
        >
          WhatsApp · 261 709 4467
        </a>
      </footer>

      <section className="section promos-section" id="promos">
        <div className="section-intro">
          <p className="kicker">Para compartir — o no</p>
          <h2>Promos que resuelven la noche.</h2>
        </div>
        <div className="promo-grid">
          {promos.map((promo) => (
            <ProductCard key={promo.id} product={promo} addToCart={addToCart} />
          ))}
        </div>
      </section>

      <section className="section menu-section" id="carta">
        <div className="section-intro menu-intro">
          <div>
            <p className="kicker">Favoritos de la casa</p>
            <h2>Elegí tu próximo antojo.</h2>
          </div>
          <p>
            Seleccioná el tamaño, agregalo al pedido y envianos todo por
            WhatsApp.
          </p>
        </div>
        <div className="product-grid">
          {featured.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={addToCart}
            />
          ))}
        </div>
      </section>

      <button
        className="floating-cart"
        type="button"
        aria-label={`Abrir pedido con ${itemCount} productos`}
        onClick={() => setCartOpen(true)}
      >
        <span>Ver pedido</span>
        <b>{itemCount}</b>
      </button>

      <div
        className={`cart-backdrop ${cartOpen ? "is-open" : ""}`}
        onClick={() => setCartOpen(false)}
        aria-hidden="true"
      />
      <aside
        className={`cart-drawer ${cartOpen ? "is-open" : ""}`}
        aria-label="Tu pedido"
        aria-hidden={!cartOpen}
      >
        <div className="cart-head">
          <div>
            <p className="kicker">ALCORTA</p>
            <h2>Tu pedido</h2>
          </div>
          <button type="button" onClick={() => setCartOpen(false)} aria-label="Cerrar pedido">
            ×
          </button>
        </div>
        <div className="cart-lines">
          {cart.length === 0 ? (
            <div className="empty-cart">
              <span>01</span>
              <h3>Tu pedido está vacío.</h3>
              <p>Elegí un favorito y lo preparamos al momento.</p>
            </div>
          ) : (
            cart.map((item) => (
              <div className="cart-line" key={item.key}>
                <div>
                  <strong>{item.name}</strong>
                  <small>{item.variant} · {money.format(item.price)}</small>
                </div>
                <div className="quantity">
                  <button type="button" onClick={() => changeQuantity(item.key, -1)}>−</button>
                  <span>{item.quantity}</span>
                  <button type="button" onClick={() => changeQuantity(item.key, 1)}>+</button>
                </div>
              </div>
            ))
          )}
        </div>
        <div className="cart-foot">
          <div className="cart-total">
            <span>Total</span>
            <strong>{money.format(total)}</strong>
          </div>
          <button
            className="checkout-button"
            type="button"
            disabled={!cart.length}
            onClick={() => {
              setCartOpen(false);
              setCheckoutOpen(true);
            }}
          >
            Continuar pedido
          </button>
          <small>En el siguiente paso vas a elegir la sucursal.</small>
        </div>
      </aside>

      <div
        className={`checkout-backdrop ${checkoutOpen ? "is-open" : ""}`}
        onClick={() => setCheckoutOpen(false)}
        aria-hidden="true"
      />
      <section
        className={`checkout-modal ${checkoutOpen ? "is-open" : ""}`}
        aria-label="Finalizar pedido"
        aria-hidden={!checkoutOpen}
      >
        <button
          className="modal-close"
          type="button"
          onClick={() => setCheckoutOpen(false)}
          aria-label="Cerrar"
        >
          ×
        </button>
        <p className="kicker">Último paso</p>
        <h2>¿Dónde lo retirás?</h2>
        <div className="branch-options">
          {["Alem 300, Dorrego", "Figueroa Alcorta 1304, Godoy Cruz"].map(
            (item) => (
              <label key={item} className={branch === item ? "is-selected" : ""}>
                <input
                  type="radio"
                  name="branch"
                  value={item}
                  checked={branch === item}
                  onChange={(event) => setBranch(event.target.value)}
                />
                <span>{item}</span>
              </label>
            ),
          )}
        </div>
        <label className="field">
          <span>Tu nombre</span>
          <input
            value={customerName}
            onChange={(event) => setCustomerName(event.target.value)}
            placeholder="¿A nombre de quién?"
          />
        </label>
        <label className="field">
          <span>Aclaraciones</span>
          <textarea
            value={notes}
            onChange={(event) => setNotes(event.target.value)}
            placeholder="Sin cebolla, retirar a las 22:30..."
            rows={3}
          />
        </label>
        <div className="modal-total">
          <span>Total estimado</span>
          <strong>{money.format(total)}</strong>
        </div>
        <button className="whatsapp-order" type="button" onClick={finishOrder}>
          Enviar pedido por WhatsApp
        </button>
      </section>
    </main>
  );
}
