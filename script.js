/**
 * مشتل سلسبيل - القويعة & طرابلس
 * JavaScript File (Vanilla JS)
 * Interactive Catalog, Shopping Cart, WhatsApp Integration, and Mobile Navigation
 */

// ==========================================================================
// 1. Data: Products Dataset (شتلات وأشجار ونباتات ملائمة لطقس ليبيا)
// ==========================================================================
const PRODUCTS = [
  {
    id: 1,
    name: "ليمون بنزهير بلدي ليبي",
    category: "fruit",
    categoryName: "أشجار مثمرة وحمضيات",
    price: 35,
    tag: "الأكثر طلباً في طرابلس",
    tagClass: "badge-hot",
    sun: "شمس مباشرة قوية",
    water: "ري معتدل منتظم",
    image: "https://images.unsplash.com/photo-1534349762230-e0cadf78f5da?auto=format&fit=crop&w=600&q=80",
    desc: "شتلة ليمون بنزهير مطعمة على أصل قوي، تنتج ثمار فواحة وحامضة ممتازة للشاي والماكلة الليبية.",
    care: "اغرسها في مكان مشمس في الجنان، واسقيها كل 2-3 أيام في حرارة الصيف مع تجنب ملامسة الماء للساق."
  },
  {
    id: 2,
    name: "زيتون شملالي مقزم ومثمر",
    category: "fruit",
    categoryName: "أشجار مثمرة وحمضيات",
    price: 45,
    tag: "أصل القويعة",
    tagClass: "badge-local",
    sun: "شمس كاملة",
    water: "مقاوم جداً للجفاف",
    image: "https://images.unsplash.com/photo-1541888946425-d0fbb186f5f7?auto=format&fit=crop&w=600&q=80",
    desc: "شجرة زيتون شملالي مباركة متأصلة في تربة القويعة، غزيرة الإنتاج وتتحمل ملوحة المياه وشمس بلادنا.",
    care: "تحب الأرض المفتوحة والشمس، تسقى في البداية بانتظام حتى تثبت الجذور، وبعدها تتحمل العطش."
  },
  {
    id: 3,
    name: "برتقال طمسون طرابلسي",
    category: "fruit",
    categoryName: "أشجار مثمرة وحمضيات",
    price: 40,
    tag: "حلاوة مضمونة",
    tagClass: "",
    sun: "شمس مباشرة",
    water: "ري وفير صيفاً",
    image: "https://images.unsplash.com/photo-1582979512210-99b6a53386f9?auto=format&fit=crop&w=600&q=80",
    desc: "شتلة برتقال طمسون سكري بدون بذور، مطعمة وناجحة جداً في مزارع وجنانات طرابلس والقويعة.",
    care: "تفضل التسميد العضوي في فصل الخريف والشتاء، وتتحسن جودة الثمار بالري الصباحي المنتظم."
  },
  {
    id: 4,
    name: "مونستيرا ديلسيوزا (قفص صدري)",
    category: "indoor",
    categoryName: "نباتات زينة داخلية",
    price: 55,
    tag: "فخامة للصالون",
    tagClass: "",
    sun: "إضاءة غير مباشرة",
    water: "ري عند جفاف التربة",
    image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=600&q=80",
    desc: "ملكة نباتات الصالون، أوراقها عريضة ومشققة تعطي فخامة وانتعاش لأي ركن في حوشك في طرابلس.",
    care: "حطها جنب روشان مشمس مع ستارة خفيفة، وامسح أوراقها بقطعة قماش مبللة كل أسبوع عشان تتنفس."
  },
  {
    id: 5,
    name: "نبات جلد النمر (سانسيفيريا)",
    category: "indoor",
    categoryName: "نباتات زينة داخلية",
    price: 30,
    tag: "ينقي هواء الحوش",
    tagClass: "",
    sun: "تتحمل الظل والشمس",
    water: "قليل جداً (أسبوعين)",
    image: "https://images.unsplash.com/photo-1593482892290-f54927ae1bf6?auto=format&fit=crop&w=600&q=80",
    desc: "أقوى نبتة داخلية بلا منازع! تنقي الجو من السموم وما تطلبش منك أي تعب، تعيش حتى لو نسيتها.",
    care: "ما تسقيهاش إلا لما تجف تربتها بالكامل، ممتازة لغرف النوم والمكاتب."
  },
  {
    id: 6,
    name: "بوتس هولندي متسلق وكثيف",
    category: "indoor",
    categoryName: "نباتات زينة داخلية",
    price: 25,
    tag: "ساهل العناية",
    tagClass: "",
    sun: "إضاءة متوسطة",
    water: "مرة إلى مرتين أسبوعياً",
    image: "https://images.unsplash.com/photo-1620127814407-7589d8fbff1b?auto=format&fit=crop&w=600&q=80",
    desc: "فروع خضراء ذهبية متدلية، تناسب الرفوف والمكتبات، تعطي جو طبيعي ومريح للأعصاب داخل الحوش.",
    care: "يروى عندما تبدأ الأوراق بالارتخاء قليلاً، سهل الإكثار في الماء."
  },
  {
    id: 7,
    name: "ياسمين عراقي فواح (رازقي)",
    category: "outdoor",
    categoryName: "شجيرات وأزهار خارجية",
    price: 30,
    tag: "ريحة تعبّي الجنان",
    tagClass: "badge-hot",
    sun: "شمس مباشرة",
    water: "ري يومي في الصيف",
    image: "https://images.unsplash.com/photo-1597848212624-a19eb35e2651?auto=format&fit=crop&w=600&q=80",
    desc: "أزهار بيضاء فواحة تملأ الجنان برائحة زكية عند الغروب والليل، زينة أساسية في كل حوش ليبي.",
    care: "يزرع بالقرب من باب الحوش أو الجلسة الخارجية للاستمتاع بعطره، يحتاج تسليق على سور أو عريشة."
  },
  {
    id: 8,
    name: "فيكس بنجامينا مشكل ومقلم",
    category: "outdoor",
    categoryName: "شجيرات وأزهار خارجية",
    price: 60,
    tag: "شجيرة فخمة للمداخل",
    tagClass: "",
    sun: "شمس معتدلة / ظل",
    water: "ري منتظم",
    image: "https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&w=600&q=80",
    desc: "شجيرة دائمة الخضرة ومقلمة بشكل كروي جميل جداً، مثالية لمداخل الفيلات والمزارع في طرابلس والقويعة.",
    care: "تتحمل القص والتشكيل، تحتاج إلى حماية من تيارات الهواء الباردة الشديدة شتاءً."
  },
  {
    id: 9,
    name: "حبق ليبي عريض الورق (فواح)",
    category: "herbs",
    categoryName: "نباتات عطرية وطبية",
    price: 10,
    tag: "لشاي العشية والبيتزا",
    tagClass: "badge-local",
    sun: "شمس مباشرة",
    water: "ري يومي بالصيف",
    image: "https://images.unsplash.com/photo-1618375569909-3c8616cf7733?auto=format&fit=crop&w=600&q=80",
    desc: "الحبق الليبي الأصيل برائحته النفاذة التي ترد الروح، يوضع في البلكونة أو الشباك، رائع مع الشاهي والصلصات.",
    care: "قص القمم النامية باستمرار لتحفيز الأوراق وتفادي التزهير السريع."
  },
  {
    id: 10,
    name: "عطرشانة بلدية ونعناع ليبي",
    category: "herbs",
    categoryName: "نباتات عطرية وطبية",
    price: 12,
    tag: "عطر تقليدي أصيل",
    tagClass: "",
    sun: "شمس دافئة",
    water: "ري معتدل",
    image: "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?auto=format&fit=crop&w=600&q=80",
    desc: "ورقات العطرشانة الشهيرة لنكهة القهوة والشاي الليبي، سهلة العناية وسريعة النمو في أصيص أو بالتراب.",
    care: "تحب التهوية والشمس الصباحية، تسقى عند جفاف السطح."
  },
  {
    id: 11,
    name: "بيتموس أوروبي نقي ومخصب (50 لتر)",
    category: "supplies",
    categoryName: "أحواض وتربة وأسمدة",
    price: 35,
    tag: "أجود تربة للزراعة",
    tagClass: "",
    sun: "—",
    water: "يحفظ الرطوبة",
    image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=600&q=80",
    desc: "شيكارة بيتموس معقمة وخالية من الفطريات وبذور الحشائش، ممتازة لتشتيل النباتات ولتغذية الشجر في الحوض.",
    care: "اخلطها بنسبة 1 إلى 1 مع رمل القويعة أو التربة الحمراء لتصريف مثالي للمياه."
  },
  {
    id: 12,
    name: "طقم أحواض فخار تراثية (3 قطع)",
    category: "supplies",
    categoryName: "أحواض وتربة وأسمدة",
    price: 65,
    tag: "تصريف طبيعي ممتاز",
    tagClass: "",
    sun: "—",
    water: "مسامي وصحي للجذور",
    image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=600&q=80",
    desc: "أحواض طينية فخارية تبرد جذور النبتة في حر الصيف وتمنع تعفن الماء، بلون طبيعي هادي يزين جنانك.",
    care: "مزودة بفتحات تصريف سفلية جاهزة."
  }
];

// ==========================================================================
// 2. Application State & Storage
// ==========================================================================
let cart = [];
let currentCategory = 'all';
let searchQuery = '';
let currentSort = 'featured';

const CART_STORAGE_KEY = 'salsabeel_cart_items_v1';

// Load cart from LocalStorage
function loadCartFromStorage() {
  try {
    const saved = localStorage.getItem(CART_STORAGE_KEY);
    if (saved) {
      cart = JSON.parse(saved);
    }
  } catch (err) {
    console.error('Error loading cart from storage', err);
    cart = [];
  }
}

// Save cart to LocalStorage
function saveCartToStorage() {
  try {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
  } catch (err) {
    console.error('Error saving cart', err);
  }
}

// ==========================================================================
// 3. DOM Elements Cache
// ==========================================================================
const productsGrid = document.getElementById('productsGrid');
const catalogEmptyState = document.getElementById('catalogEmptyState');
const resetFiltersBtn = document.getElementById('resetFiltersBtn');
const categoryFilterContainer = document.getElementById('categoryFilterContainer');
const catalogSearchInput = document.getElementById('catalogSearchInput');
const clearSearchBtn = document.getElementById('clearSearchBtn');
const catalogSortSelect = document.getElementById('catalogSortSelect');

// Cart Drawer Elements
const cartDrawer = document.getElementById('cartDrawer');
const cartOverlay = document.getElementById('cartOverlay');
const cartOpenBtn = document.getElementById('cartOpenBtn');
const mBottomCartBtn = document.getElementById('mBottomCartBtn');
const cartCloseBtn = document.getElementById('cartCloseBtn');
const cartItemsList = document.getElementById('cartItemsList');
const cartCountBadge = document.getElementById('cartCountBadge');
const mBottomCartBadge = document.getElementById('mBottomCartBadge');
const drawerCartCount = document.getElementById('drawerCartCount');
const cartSubtotalEl = document.getElementById('cartSubtotal');
const cartDeliveryFeeEl = document.getElementById('cartDeliveryFee');
const cartFinalTotalEl = document.getElementById('cartFinalTotal');
const deliveryAreaSelect = document.getElementById('deliveryAreaSelect');
const clearCartBtn = document.getElementById('clearCartBtn');
const sendWhatsAppOrderBtn = document.getElementById('sendWhatsAppOrderBtn');

// Customer Fields
const orderCustomerName = document.getElementById('orderCustomerName');
const orderCustomerPhone = document.getElementById('orderCustomerPhone');
const orderCustomerAddress = document.getElementById('orderCustomerAddress');

// Mobile Navigation Drawer
const mobileDrawer = document.getElementById('mobileDrawer');
const drawerOverlay = document.getElementById('drawerOverlay');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const drawerCloseBtn = document.getElementById('drawerCloseBtn');

// Search Modal Overlay
const searchOverlay = document.getElementById('searchOverlay');
const searchToggleBtn = document.getElementById('searchToggleBtn');
const searchCloseBtn = document.getElementById('searchCloseBtn');
const globalSearchInput = document.getElementById('globalSearchInput');

// Product Modal
const productModalOverlay = document.getElementById('productModalOverlay');
const modalProductBody = document.getElementById('modalProductBody');
const modalCloseBtn = document.getElementById('modalCloseBtn');

// Toast Container
const toastContainer = document.getElementById('toastContainer');

// ==========================================================================
// 4. Products Rendering & Filtering
// ==========================================================================
function renderProducts() {
  if (!productsGrid) return;

  // Filter products
  let filtered = PRODUCTS.filter(item => {
    const matchesCategory = (currentCategory === 'all') || (item.category === currentCategory);
    const matchesSearch = !searchQuery || 
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.categoryName.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Sort products
  if (currentSort === 'price-asc') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (currentSort === 'price-desc') {
    filtered.sort((a, b) => b.price - a.price);
  } else if (currentSort === 'name-asc') {
    filtered.sort((a, b) => a.name.localeCompare(b.name, 'ar'));
  }

  // Handle empty state
  if (filtered.length === 0) {
    productsGrid.innerHTML = '';
    catalogEmptyState.style.display = 'block';
    return;
  }

  catalogEmptyState.style.display = 'none';

  // Build HTML
  const cardsHtml = filtered.map(product => {
    return `
      <article class="product-card" data-id="${product.id}">
        <div class="product-img-box">
          <img src="${product.image}" alt="${product.name}" loading="lazy">
          ${product.tag ? `<span class="product-tag-badge ${product.tagClass}">${product.tag}</span>` : ''}
          <button class="product-quick-view-btn" data-id="${product.id}" title="عرض تفاصيل الشتلة">
            <i class="fa-regular fa-eye"></i>
          </button>
        </div>
        <div class="product-content">
          <span class="product-category-lbl">${product.categoryName}</span>
          <h3 class="product-title">${product.name}</h3>
          <div class="product-specs">
            <span><i class="fa-regular fa-sun"></i> ${product.sun}</span>
            <span><i class="fa-solid fa-droplet"></i> ${product.water}</span>
          </div>
          <p class="product-desc">${product.desc}</p>
          <div class="product-footer">
            <div class="product-price-box">
              <span class="price-val">${product.price}</span>
              <span class="price-currency">دينار ليبي (د.ل)</span>
            </div>
            <button class="add-to-cart-btn" data-id="${product.id}">
              <i class="fa-solid fa-cart-plus"></i>
              <span>أضف للسلة</span>
            </button>
          </div>
        </div>
      </article>
    `;
  }).join('');

  productsGrid.innerHTML = cardsHtml;

  // Bind product events
  attachProductCardEvents();
}

function attachProductCardEvents() {
  // Add to cart buttons
  const addBtns = productsGrid.querySelectorAll('.add-to-cart-btn');
  addBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const id = parseInt(btn.getAttribute('data-id'), 10);
      addToCart(id);
    });
  });

  // Quick preview buttons
  const previewBtns = productsGrid.querySelectorAll('.product-quick-view-btn');
  previewBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const id = parseInt(btn.getAttribute('data-id'), 10);
      openProductModal(id);
    });
  });
}

// ==========================================================================
// 5. Shopping Cart Logic
// ==========================================================================
function addToCart(productId, qty = 1) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const existing = cart.find(item => item.id === productId);
  if (existing) {
    existing.quantity += qty;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: qty
    });
  }

  saveCartToStorage();
  updateCartUI();
  showToast(`تمت إضافة "${product.name}" لسلتك بنجاح! 🌱`);
}

function updateCartQuantity(productId, newQty) {
  if (newQty <= 0) {
    removeFromCart(productId);
    return;
  }

  const item = cart.find(i => i.id === productId);
  if (item) {
    item.quantity = newQty;
    saveCartToStorage();
    updateCartUI();
  }
}

function removeFromCart(productId) {
  cart = cart.filter(i => i.id !== productId);
  saveCartToStorage();
  updateCartUI();
  showToast("تم حذف النبتة من السلة");
}

function clearCart() {
  if (cart.length === 0) return;
  if (confirm("هل أنت متأكد من تفريغ سلة المشتريات؟")) {
    cart = [];
    saveCartToStorage();
    updateCartUI();
    showToast("تم تفريغ السلة بالكامل");
  }
}

function calculateCartTotals() {
  const subtotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const selectedAreaOption = deliveryAreaSelect.options[deliveryAreaSelect.selectedIndex];
  const deliveryFee = parseInt(selectedAreaOption.getAttribute('data-fee') || '15', 10);
  const total = subtotal + (subtotal > 0 ? deliveryFee : 0);
  return { subtotal, deliveryFee: subtotal > 0 ? deliveryFee : 0, total };
}

function updateCartUI() {
  const totalItemsCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  // Update badges
  if (cartCountBadge) cartCountBadge.textContent = totalItemsCount;
  if (mBottomCartBadge) mBottomCartBadge.textContent = totalItemsCount;
  if (drawerCartCount) drawerCartCount.textContent = totalItemsCount;

  // Animate badge
  [cartCountBadge, mBottomCartBadge].forEach(badge => {
    if (badge) {
      badge.style.transform = 'scale(1.3)';
      setTimeout(() => { badge.style.transform = 'scale(1)'; }, 200);
    }
  });

  // Render items in drawer
  if (!cartItemsList) return;

  if (cart.length === 0) {
    cartItemsList.innerHTML = `
      <div class="cart-empty-view">
        <i class="fa-solid fa-basket-shopping"></i>
        <h4>سلتك فارغة لتوا!</h4>
        <p>تصفح شتلاتنا في مشتل سلسبيل واختر اللي يعجب حوشك أو مزرعتك في القويعة وطرابلس.</p>
      </div>
    `;
    const { deliveryFee } = calculateCartTotals();
    cartSubtotalEl.textContent = '0 د.ل';
    cartDeliveryFeeEl.textContent = `${deliveryFee} د.ل`;
    cartFinalTotalEl.textContent = '0 د.ل';
    return;
  }

  const itemsHtml = cart.map(item => `
    <div class="cart-item-card">
      <img src="${item.image}" alt="${item.name}" class="cart-item-img">
      <div class="cart-item-details">
        <h4 class="cart-item-title">${item.name}</h4>
        <div class="cart-item-price">${item.price * item.quantity} د.ل <small class="text-light">(${item.price} د.ل/قطعة)</small></div>
        <div class="cart-item-qty-row">
          <button class="qty-btn" onclick="updateCartQuantity(${item.id}, ${item.quantity - 1})">-</button>
          <span class="qty-display">${item.quantity}</span>
          <button class="qty-btn" onclick="updateCartQuantity(${item.id}, ${item.quantity + 1})">+</button>
        </div>
      </div>
      <button class="cart-item-remove-btn" onclick="removeFromCart(${item.id})" title="حذف النبتة">
        <i class="fa-solid fa-trash-can"></i>
      </button>
    </div>
  `).join('');

  cartItemsList.innerHTML = itemsHtml;

  // Update calculations
  const { subtotal, deliveryFee, total } = calculateCartTotals();
  cartSubtotalEl.textContent = `${subtotal} د.ل`;
  cartDeliveryFeeEl.textContent = `${deliveryFee} د.ل`;
  cartFinalTotalEl.textContent = `${total} د.ل`;
}

// Make functions accessible to inline onclick
window.updateCartQuantity = updateCartQuantity;
window.removeFromCart = removeFromCart;

// ==========================================================================
// 6. WhatsApp Order Generator (اللهجة الليبية)
// ==========================================================================
function sendOrderViaWhatsApp() {
  if (cart.length === 0) {
    alert("سلتك فارغة! اختر شتلات أولاً لإرسال الطلب.");
    return;
  }

  const customerName = orderCustomerName.value.trim();
  const customerPhone = orderCustomerPhone.value.trim();
  const customerAddress = orderCustomerAddress.value.trim();

  if (!customerName) {
    alert("يرجى كتابة اسمك الكريم أولاً لتأكيد الطلبية.");
    orderCustomerName.focus();
    return;
  }

  if (!customerPhone) {
    alert("يرجى كتابة رقم الهاتف للتواصل معك عند التوصيل.");
    orderCustomerPhone.focus();
    return;
  }

  const selectedAreaText = deliveryAreaSelect.options[deliveryAreaSelect.selectedIndex].text;
  const { subtotal, deliveryFee, total } = calculateCartTotals();

  // Construct message in authentic Libyan dialect
  let message = `السلام عليكم ورحمة الله خوتي في *مشتل سلسبيل (القويعة & طرابلس)* 🌿\n\n`;
  message += `نبي نأكد طلبيتي من الموقع بالتفاصيل هذي:\n`;
  message += `-----------------------------\n`;

  cart.forEach((item, index) => {
    message += `${index + 1}. *${item.name}* × ${item.quantity} = ${item.price * item.quantity} د.ل\n`;
  });

  message += `-----------------------------\n`;
  message += `💵 *مجموع الشتلات:* ${subtotal} د.ل\n`;
  message += `🚚 *منطقة التوصيل / الاستلام:* ${selectedAreaText}\n`;
  message += `💰 *المجموع الإجمالي النهائي:* ${total} دينار ليبي\n\n`;
  message += `👤 *بيانات المستلم:*\n`;
  message += `• الاسم: ${customerName}\n`;
  message += `• الهاتف: ${customerPhone}\n`;
  if (customerAddress) {
    message += `• العنوان التفصيلي: ${customerAddress}\n`;
  }
  message += `\nيرجى تأكيد استلام الطلبية وموعد التوصيل، ربي يباركلكم ويعطيكم الصحة! 🇱🇾`;

  // Encode URL
  const phone = "218910000000";
  const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  // Open WhatsApp in new tab
  window.open(whatsappUrl, '_blank');
}

// ==========================================================================
// 7. Product Preview Modal
// ==========================================================================
function openProductModal(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  modalProductBody.innerHTML = `
    <div class="modal-img-wrap">
      <img src="${product.image}" alt="${product.name}">
    </div>
    <div class="modal-info-col">
      <span class="modal-cat"><i class="fa-solid fa-tag"></i> ${product.categoryName}</span>
      <h3>${product.name}</h3>
      <div class="modal-price">${product.price} <small style="font-size:0.8rem; font-weight:600;">دينار ليبي</small></div>
      <p style="font-size:0.95rem; color:#4b5563; line-height:1.6; margin-bottom:1rem;">${product.desc}</p>
      
      <div class="modal-care-details">
        <div><i class="fa-solid fa-sun"></i> <strong>الإضاءة والشمس:</strong> ${product.sun}</div>
        <div><i class="fa-solid fa-droplet"></i> <strong>الري والسقي:</strong> ${product.water}</div>
        <div><i class="fa-solid fa-hand-holding-heart"></i> <strong>نصيحة المشتل لجو بلادنا:</strong> ${product.care}</div>
      </div>

      <button class="btn btn-primary w-100 btn-lg" onclick="addToCart(${product.id}); closeModals();">
        <i class="fa-solid fa-cart-plus"></i> أضف للسلة توا
      </button>
    </div>
  `;

  productModalOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModals() {
  productModalOverlay.classList.remove('active');
  searchOverlay.classList.remove('active');
  document.body.style.overflow = '';
}

// ==========================================================================
// 8. Toast Notifications
// ==========================================================================
function showToast(message) {
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<i class="fa-solid fa-circle-check"></i> <span>${message}</span>`;
  toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 3000);
}

// ==========================================================================
// 9. Drawer & Overlay Handlers
// ==========================================================================
function openCartDrawer() {
  cartDrawer.classList.add('active');
  cartOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeCartDrawer() {
  cartDrawer.classList.remove('active');
  cartOverlay.classList.remove('active');
  document.body.style.overflow = '';
}

function openMobileDrawer() {
  mobileDrawer.classList.add('active');
  drawerOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeMobileDrawer() {
  mobileDrawer.classList.remove('active');
  drawerOverlay.classList.remove('active');
  document.body.style.overflow = '';
}

// ==========================================================================
// 10. Event Listeners & Initialization
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  // Load stored cart
  loadCartFromStorage();
  renderProducts();
  updateCartUI();

  // Dynamic current year
  const yearEl = document.getElementById('currentYear');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Cart Drawer open/close events
  if (cartOpenBtn) cartOpenBtn.addEventListener('click', openCartDrawer);
  if (mBottomCartBtn) mBottomCartBtn.addEventListener('click', openCartDrawer);
  if (cartCloseBtn) cartCloseBtn.addEventListener('click', closeCartDrawer);
  if (cartOverlay) cartOverlay.addEventListener('click', closeCartDrawer);

  // Delivery area select change
  if (deliveryAreaSelect) {
    deliveryAreaSelect.addEventListener('change', updateCartUI);
  }

  // Clear cart button
  if (clearCartBtn) {
    clearCartBtn.addEventListener('click', clearCart);
  }

  // Send WhatsApp button
  if (sendWhatsAppOrderBtn) {
    sendWhatsAppOrderBtn.addEventListener('click', sendOrderViaWhatsApp);
  }

  // Mobile Drawer Menu
  if (mobileMenuBtn) mobileMenuBtn.addEventListener('click', openMobileDrawer);
  if (drawerCloseBtn) drawerCloseBtn.addEventListener('click', closeMobileDrawer);
  if (drawerOverlay) drawerOverlay.addEventListener('click', closeMobileDrawer);

  const drawerLinks = document.querySelectorAll('.drawer-link');
  drawerLinks.forEach(link => {
    link.addEventListener('click', closeMobileDrawer);
  });

  // Modal close handlers
  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModals);
  if (productModalOverlay) {
    productModalOverlay.addEventListener('click', (e) => {
      if (e.target === productModalOverlay) closeModals();
    });
  }

  // Search Overlay Handlers
  if (searchToggleBtn) {
    searchToggleBtn.addEventListener('click', () => {
      searchOverlay.classList.add('active');
      globalSearchInput.focus();
    });
  }
  if (searchCloseBtn) searchCloseBtn.addEventListener('click', closeModals);
  if (searchOverlay) {
    searchOverlay.addEventListener('click', (e) => {
      if (e.target === searchOverlay) closeModals();
    });
  }

  if (globalSearchInput) {
    globalSearchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.trim();
      if (catalogSearchInput) catalogSearchInput.value = searchQuery;
      if (clearSearchBtn) clearSearchBtn.classList.toggle('active', searchQuery.length > 0);
      renderProducts();
    });
    globalSearchInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        closeModals();
        const catalogSec = document.getElementById('catalog');
        if (catalogSec) catalogSec.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  // Search quick hint tags
  const hintTags = document.querySelectorAll('.hint-tag');
  hintTags.forEach(tag => {
    tag.addEventListener('click', () => {
      const query = tag.getAttribute('data-search');
      searchQuery = query;
      if (globalSearchInput) globalSearchInput.value = query;
      if (catalogSearchInput) catalogSearchInput.value = query;
      if (clearSearchBtn) clearSearchBtn.classList.add('active');
      closeModals();
      renderProducts();
      const catalogSec = document.getElementById('catalog');
      if (catalogSec) catalogSec.scrollIntoView({ behavior: 'smooth' });
    });
  });

  // Catalog Inline Search Input
  if (catalogSearchInput) {
    catalogSearchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.trim();
      clearSearchBtn.classList.toggle('active', searchQuery.length > 0);
      renderProducts();
    });
  }

  if (clearSearchBtn) {
    clearSearchBtn.addEventListener('click', () => {
      searchQuery = '';
      catalogSearchInput.value = '';
      if (globalSearchInput) globalSearchInput.value = '';
      clearSearchBtn.classList.remove('active');
      renderProducts();
    });
  }

  // Catalog Sort Select
  if (catalogSortSelect) {
    catalogSortSelect.addEventListener('change', (e) => {
      currentSort = e.target.value;
      renderProducts();
    });
  }

  // Category Filter Pills
  if (categoryFilterContainer) {
    const pills = categoryFilterContainer.querySelectorAll('.cat-pill');
    pills.forEach(pill => {
      pill.addEventListener('click', () => {
        pills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        currentCategory = pill.getAttribute('data-category');
        renderProducts();
      });
    });
  }

  // Reset filters button in empty state
  if (resetFiltersBtn) {
    resetFiltersBtn.addEventListener('click', () => {
      currentCategory = 'all';
      searchQuery = '';
      if (catalogSearchInput) catalogSearchInput.value = '';
      if (clearSearchBtn) clearSearchBtn.classList.remove('active');

      const pills = categoryFilterContainer.querySelectorAll('.cat-pill');
      pills.forEach(p => p.classList.remove('active'));
      pills[0].classList.add('active');

      renderProducts();
    });
  }

  // Care Tips Accordion
  const tipItems = document.querySelectorAll('.tip-item');
  tipItems.forEach(item => {
    const header = item.querySelector('.tip-header');
    header.addEventListener('click', () => {
      const wasActive = item.classList.contains('active');
      tipItems.forEach(i => i.classList.remove('active'));
      if (!wasActive) {
        item.classList.add('active');
      }
    });
  });

  // FAQ Accordion
  const faqCards = document.querySelectorAll('.faq-card');
  faqCards.forEach(card => {
    const trigger = card.querySelector('.faq-trigger');
    trigger.addEventListener('click', () => {
      const isExpanded = trigger.getAttribute('aria-expanded') === 'true';
      faqCards.forEach(c => {
        c.classList.remove('active');
        c.querySelector('.faq-trigger').setAttribute('aria-expanded', 'false');
      });

      if (!isExpanded) {
        card.classList.add('active');
        trigger.setAttribute('aria-expanded', 'true');
      }
    });
  });

  // Smooth scroll sync for bottom nav items
  const bottomLinks = document.querySelectorAll('.m-bottom-link[href^="#"]');
  window.addEventListener('scroll', () => {
    let currentId = '';
    const sections = ['hero', 'catalog', 'location-section'];
    sections.forEach(secId => {
      const sec = document.getElementById(secId);
      if (sec) {
        const top = sec.offsetTop - 120;
        if (window.scrollY >= top) {
          currentId = secId;
        }
      }
    });

    bottomLinks.forEach(link => {
      const href = link.getAttribute('href').replace('#', '');
      if (href === currentId) {
        bottomLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
      }
    });
  });
});
