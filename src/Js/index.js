// ========== داده‌ها - هر کارت با عکس کاملاً متفاوت ==========
const itemsData = {
  article1: { 
    title: 'راهنمای کامل سئو برای وبلاگ', 
    tag: 'مقاله', 
    excerpt: 'آموزش کامل بهینه‌سازی وبلاگ برای موتورهای جستجو', 
    category: 'articles', 
    image: 'https://placehold.co/400x200/7c3aed/ffffff?text=SEO+Guide&font=roboto', 
    link: '/article/1' 
  },
  article2: { 
    title: 'بهترین روش‌های طراحی رابط کاربری', 
    tag: 'مقاله', 
    excerpt: 'اصول طراحی UI مدرن با تمرکز بر تجربه کاربری', 
    category: 'articles', 
    image: 'https://placehold.co/400x200/ec4899/ffffff?text=UI+Design&font=roboto', 
    link: '/article/2' 
  },
  slider: { 
    title: 'اسلایدر پست‌های وبلاگ', 
    tag: 'قطعه کد', 
    excerpt: 'اسلایدر زیبا و واکنش‌گرا با پشتیبانی از لمس', 
    category: 'snippets', 
    image: 'https://placehold.co/400x200/3b82f6/ffffff?text=Slider+Code&font=roboto', 
    link: '/snippet/slider' 
  },
  toc: { 
    title: 'جدول محتوا خودکار', 
    tag: 'قطعه کد', 
    excerpt: 'ساخت خودکار جدول محتوا از تیترهای پست', 
    category: 'snippets', 
    image: 'https://placehold.co/400x200/10b981/ffffff?text=Auto+TOC&font=roboto', 
    link: '/snippet/toc' 
  },
  theme: { 
    title: 'قالب مدرن وبلاگ', 
    tag: 'قالب', 
    excerpt: 'قالب واکنش‌گرا و بهینه‌شده برای SEO', 
    category: 'templates', 
    image: 'https://placehold.co/400x200/f59e0b/ffffff?text=Modern+Theme&font=roboto', 
    link: '/template/modern' 
  },
  contact: { 
    title: 'فرم تماس پیشرفته', 
    tag: 'ابزار', 
    excerpt: 'فرم تماس با اعتبارسنجی لحظه‌ای و ضد اسپم', 
    category: 'tools', 
    image: 'https://placehold.co/400x200/ef4444/ffffff?text=Contact+Form&font=roboto', 
    link: '/tool/contact' 
  },  dark: { 
    title: 'حالت تاریک هوشمند', 
    tag: 'ابزار', 
    excerpt: 'تغییر تم سایت با تشخیص خودکار تنظیمات سیستم', 
    category: 'tools', 
    image: 'https://placehold.co/400x200/1e293b/fbbf24?text=Dark+Mode&font=roboto', 
    link: '/tool/dark' 
  },
  shop1: { 
    title: 'قالب حرفه‌ای بلاگفا - نسخه VIP', 
    tag: 'قالب پولی', 
    excerpt: 'قالب کاملاً واکنش‌گرا با طراحی مدرن و امکانات پیشرفته', 
    category: 'shop', 
    image: 'https://placehold.co/400x200/fbbf24/0a0e1a?text=VIP+Template&font=roboto', 
    link: '/shop/template-vip', 
    price: '۴۹,۰۰۰' 
  },
  shop2: { 
    title: 'قالب فروشگاهی بلاگفا', 
    tag: 'قالب پولی', 
    excerpt: 'مناسب برای فروشگاه‌های آنلاین با سیستم سبد خرید', 
    category: 'shop', 
    image: 'https://placehold.co/400x200/06b6d4/ffffff?text=Shop+Template&font=roboto', 
    link: '/shop/template-store', 
    price: '۷۹,۰۰۰' 
  },
  shop3: { 
    title: 'قالب خبری پیشرفته', 
    tag: 'قالب پولی', 
    excerpt: 'طراحی شده برای سایت‌های خبری با دسته‌بندی‌های متعدد', 
    category: 'shop', 
    image: 'https://placehold.co/400x200/8b5cf6/ffffff?text=News+Template&font=roboto', 
    link: '/shop/template-news', 
    price: '۵۹,۰۰۰' 
  }
};

// ========== آیکون‌ها ==========
const moonIcon = `<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" shape-rendering="crispEdges"><g fill="#FFF3A2"><rect x="10" y="3" width="1" height="1"/><rect x="11" y="4" width="1" height="1"/><rect x="11" y="5" width="1" height="1"/><rect x="10" y="6" width="1" height="1"/></g><g fill="#F6EE90"><rect x="7" y="2" width="1" height="1"/><rect x="6" y="3" width="2" height="1"/><rect x="5" y="4" width="2" height="1"/><rect x="4" y="5" width="3" height="1"/><rect x="4" y="6" width="2" height="1"/><rect x="4" y="7" width="2" height="1"/><rect x="4" y="8" width="3" height="1"/><rect x="5" y="9" width="2" height="1"/><rect x="6" y="10" width="2" height="1"/><rect x="7" y="11" width="1" height="1"/></g><g fill="#FFFCDD"><rect x="5" y="5" width="1" height="1"/><rect x="4" y="6" width="1" height="2"/></g><g fill="#D3CA66"><rect x="7" y="4" width="1" height="1"/><rect x="6" y="6" width="1" height="2"/><rect x="7" y="9" width="1" height="1"/></g></svg>`;

const sunIcon = `<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" shape-rendering="crispEdges"><g fill="#F0E68C"><rect x="7" y="1" width="1" height="1"/><rect x="2" y="7" width="1" height="1"/><rect x="12" y="7" width="1" height="1"/><rect x="4" y="3" width="1" height="1"/><rect x="10" y="3" width="1" height="1"/><rect x="4" y="11" width="1" height="1"/><rect x="10" y="11" width="1" height="1"/><rect x="7" y="13" width="1" height="1"/></g><g fill="#E8D96A"><rect x="7" y="2" width="1" height="2"/><rect x="3" y="7" width="2" height="1"/><rect x="10" y="7" width="2" height="1"/><rect x="5" y="4" width="1" height="1"/><rect x="9" y="4" width="1" height="1"/><rect x="5" y="10" width="1" height="1"/><rect x="9" y="10" width="1" height="1"/><rect x="7" y="10" width="1" height="2"/></g><g fill="#C9B84A"><rect x="6" y="5" width="4" height="1"/><rect x="5" y="6" width="6" height="1"/><rect x="5" y="7" width="6" height="2"/><rect x="6" y="9" width="4" height="1"/></g></svg>`;

const moneyIcon = `<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" shape-rendering="crispEdges"><g fill="#10b981"><rect x="2" y="4" width="12" height="1"/><rect x="2" y="5" width="1" height="6"/><rect x="13" y="5" width="1" height="6"/><rect x="2" y="11" width="12" height="1"/><rect x="7" y="6" width="2" height="1"/><rect x="6" y="7" width="1" height="2"/><rect x="9" y="7" width="1" height="2"/><rect x="7" y="9" width="2" height="1"/></g><g fill="#34d399"><rect x="3" y="5" width="10" height="1"/><rect x="3" y="10" width="10" height="1"/><rect x="7" y="7" width="2" height="2"/></g></svg>`;

const toastIcons = {
  sun: `<svg class="px px-16" viewBox="0 0 16 16"><g fill="#fbbf24"><rect x="7" y="1" width="2" height="2"/><rect x="7" y="13" width="2" height="2"/><rect x="1" y="7" width="2" height="2"/><rect x="13" y="7" width="2" height="2"/><rect x="3" y="3" width="2" height="2"/><rect x="11" y="3" width="2" height="2"/><rect x="3" y="11" width="2" height="2"/><rect x="11" y="11" width="2" height="2"/><rect x="6" y="6" width="4" height="4"/></g></svg>`,
  moon: `<svg class="px px-16" viewBox="0 0 16 16"><g fill="#a78bfa"><rect x="9" y="2" width="2" height="1"/><rect x="10" y="3" width="2" height="1"/><rect x="11" y="4" width="1" height="1"/><rect x="7" y="3" width="2" height="1"/><rect x="6" y="4" width="2" height="1"/><rect x="5" y="5" width="2" height="1"/><rect x="4" y="6" width="2" height="2"/><rect x="5" y="8" width="2" height="1"/><rect x="6" y="9" width="2" height="1"/><rect x="7" y="10" width="2" height="1"/><rect x="8" y="11" width="2" height="1"/><rect x="9" y="12" width="1" height="1"/></g></svg>`
};

// ========== کارت‌ها ==========function createCard(id, data) {
  const card = document.createElement('div');
  card.className = 'card';
  card.dataset.id = id;
  
  const link = document.createElement('a');
  link.className = 'card-link';
  link.href = data.link;
  link.innerHTML = `
    <img class="card-img" src="${data.image}" alt="${data.title}" loading="lazy">
    <div class="card-body">
      <div class="card-title">${data.title}</div>
      <div class="card-excerpt">${data.excerpt}</div>
    </div>
  `;
  
  const footer = document.createElement('div');
  footer.className = 'card-footer';
  
  if (data.price) {
    footer.innerHTML = `
      <span class="card-tag">${data.tag}</span>
      <span class="card-price">${moneyIcon} ${data.price} تومان</span>
    `;
  } else {
    footer.innerHTML = `
      <span class="card-tag">${data.tag}</span>
    `;
  }
  
  card.appendChild(link);
  card.appendChild(footer);
  
  return card;
}

function renderCategoryItems() {
  const categories = {
    articles: document.getElementById('articlesList'),
    templates: document.getElementById('templatesList'),
    snippets: document.getElementById('snippetsList'),
    tools: document.getElementById('toolsList'),
    shop: document.getElementById('shopList')
  };
  Object.keys(categories).forEach(category => {
    const container = categories[category];
    container.innerHTML = '';
    Object.keys(itemsData).forEach(id => {
      if (itemsData[id].category === category) {
        container.appendChild(createCard(id, itemsData[id]));      }
    });
  });
}

// ========== تم ==========
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  themeIcon.innerHTML = theme === 'light' ? sunIcon : moonIcon;
  try { localStorage.setItem('pixlog_theme', theme); } catch(e) {}
}

let savedTheme;
try { savedTheme = localStorage.getItem('pixlog_theme'); } catch(e) { savedTheme = null; }
applyTheme(savedTheme || 'dark');

themeToggle.addEventListener('click', () => {
  const current = document.documentElement.getAttribute('data-theme');
  const next = current === 'light' ? 'dark' : 'light';
  applyTheme(next);
  showToast((next === 'light' ? toastIcons.sun : toastIcons.moon) + (next === 'light' ? ' حالت روشن' : ' حالت تاریک'));
});

// ========== Toast ==========
const toast = document.getElementById('toast');
let toastTimeout;
function showToast(message) {
  clearTimeout(toastTimeout);
  toast.innerHTML = message;
  toast.classList.add('show');
  toastTimeout = setTimeout(() => toast.classList.remove('show'), 2200);
}

// ========== تب‌های صفحه اصلی ==========
document.querySelectorAll('.tab[data-filter]').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.tab[data-filter]').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    const filter = tab.dataset.filter;
    document.querySelectorAll('.section').forEach(section => section.classList.add('hidden'));
    const targetSection = document.getElementById(`sec-${filter}`);
    if (targetSection) targetSection.classList.remove('hidden');
  });
});

// ========== ناوبری صفحات ==========
const pages = document.querySelectorAll('.page');
function switchPage(pageId) {
  pages.forEach(p => p.classList.remove('active'));
  const target = document.getElementById(`page-${pageId}`);
  if (target) target.classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ========== راه‌اندازی ==========
renderCategoryItems();
