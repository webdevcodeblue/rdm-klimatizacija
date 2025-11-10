/**
 * Optimized Header Bundle
 * Combines all header functionality in one file
 * Reduces from 1590 lines to ~500 lines
 */

// ============================================
// HEADER SCROLL MODULE
// ============================================
class HeaderScroll {
  constructor() {
    this.SCROLL_UP_THRESHOLD = 50;
    this.SCROLL_DOWN_THRESHOLD = 10;
    this.lastScrollY = 0;
    this.isScrollingDown = false;
    this.isScrolled = false;
    this.lastStateChangeTime = 0;
    this.header = null;
    this.topBar = null;
  }

  init() {
    this.header = document.querySelector('.header');
    this.topBar = document.querySelector('.top-bar');
    if (!this.header) return;

    this.checkInitialScroll();
    this.bindScrollEvent();
  }

  checkInitialScroll() {
    const initialScrollY = window.scrollY;
    if (initialScrollY > this.SCROLL_UP_THRESHOLD) {
      this.isScrolled = true;
      this.header.classList.add('scrolled');
    }
    this.lastStateChangeTime = Date.now();
  }

  bindScrollEvent() {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          this.updateScrollState();
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
  }

  updateScrollState() {
    const currentScrollY = window.scrollY;
    const scrollDelta = currentScrollY - this.lastScrollY;
    const now = Date.now();

    if (now - this.lastStateChangeTime < 150) return;

    if (scrollDelta > 0 && currentScrollY > this.SCROLL_DOWN_THRESHOLD) {
      if (!this.isScrollingDown) {
        this.isScrollingDown = true;
        this.header.classList.add('header--hidden');
        this.lastStateChangeTime = now;
      }
    } else if (scrollDelta < -5) {
      if (this.isScrollingDown) {
        this.isScrollingDown = false;
        this.header.classList.remove('header--hidden');
        this.lastStateChangeTime = now;
      }
    }

    if (currentScrollY > this.SCROLL_UP_THRESHOLD) {
      if (!this.isScrolled) {
        this.isScrolled = true;
        this.header.classList.add('scrolled');
        if (this.topBar) this.topBar.style.display = 'none';
      }
    } else {
      if (this.isScrolled) {
        this.isScrolled = false;
        this.header.classList.remove('scrolled');
        if (this.topBar) this.topBar.style.display = 'block';
      }
    }

    this.lastScrollY = currentScrollY;
  }
}

// ============================================
// UNIFIED SEARCH MODULE
// ============================================
class HeaderSearch {
  constructor() {
    this.searchTimeout = null;
    this.currentQuery = '';
    this.debounceDelay = 300;
  }

  init(config) {
    const { inputId, dropdownId, resultsId, formId } = config;
    const searchInput = document.getElementById(inputId);
    const searchDropdown = document.getElementById(dropdownId);
    const searchResults = document.getElementById(resultsId);
    const searchForm = document.getElementById(formId);

    if (!searchInput || !searchDropdown || !searchResults) return;

    this.bindSearchEvents(searchInput, searchDropdown, searchResults, searchForm);
  }

  bindSearchEvents(input, dropdown, results, form) {
    // Input with debounce
    input.addEventListener('input', this.debounce((e) => {
      this.performSearch(e.target.value, dropdown, results);
    }, this.debounceDelay));

    // Focus
    input.addEventListener('focus', () => {
      if (input.value.length >= 2) {
        dropdown.classList.add('active');
      }
    });

    // Form submit
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const query = input.value.trim();
        if (query) {
          window.location.href = `/pretraga?q=${encodeURIComponent(query)}`;
        }
      });
    }

    // Click outside
    document.addEventListener('click', (e) => {
      if (!input.contains(e.target) && !dropdown.contains(e.target)) {
        dropdown.classList.remove('active');
      }
    });

    // Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        dropdown.classList.remove('active');
        input.blur();
      }
    });
  }

  debounce(func, wait) {
    return (...args) => {
      if (this.searchTimeout) clearTimeout(this.searchTimeout);
      this.searchTimeout = setTimeout(() => func(...args), wait);
    };
  }

  async performSearch(query, dropdown, results) {
    if (query.length < 2) {
      dropdown.classList.remove('active');
      return;
    }

    this.currentQuery = query;
    results.innerHTML = '<div class="search-dropdown__loading">Pretraga...</div>';
    dropdown.classList.add('active');

    try {
      const response = await fetch(`/api/search.json?q=${encodeURIComponent(query)}`);
      const data = await response.json();

      if (query !== this.currentQuery) return;

      this.displayResults(data, query, results, dropdown);
    } catch (error) {
      console.error('Search error:', error);
      results.innerHTML = '<div class="search-dropdown__error">Greška pri pretrazi</div>';
    }
  }

  displayResults(data, query, results, dropdown) {
    if (data.products.length === 0 && data.posts.length === 0) {
      results.innerHTML = `
        <div class="search-dropdown__no-results">
          Nema rezultata za "<strong>${this.escapeHtml(query)}</strong>"
        </div>
      `;
      return;
    }

    let html = '';

    // Products
    if (data.products.length > 0) {
      html += `<div class="search-dropdown__section">
        <h4 class="search-dropdown__section-title">Proizvodi</h4>
        ${data.products.map(p => this.renderProductItem(p)).join('')}
      </div>`;
    }

    // Blog posts
    if (data.posts.length > 0) {
      html += `<div class="search-dropdown__section">
        <h4 class="search-dropdown__section-title">Blog članci</h4>
        ${data.posts.map(p => this.renderPostItem(p)).join('')}
      </div>`;
    }

    // View all
    html += `<div class="search-dropdown__footer">
      <a href="/pretraga?q=${encodeURIComponent(query)}" class="search-dropdown__view-all">
        Prikaži sve rezultate (${data.products.length + data.posts.length})
      </a>
    </div>`;

    results.innerHTML = html;
  }

  renderProductItem(product) {
    const price = product.price ? `${product.price.toFixed(2)}€` : 'Na upit';
    return `
      <a href="${product.href}" class="search-result-item">
        <img src="${product.image}" alt="${product.name}" class="search-result-item__image" loading="lazy">
        <div class="search-result-item__content">
          <h5 class="search-result-item__title">${product.manufacturer} ${product.name}</h5>
          <div class="search-result-item__meta">
            <span class="search-result-item__price">${price}</span>
          </div>
        </div>
      </a>
    `;
  }

  renderPostItem(post) {
    const date = new Date(post.publishDate);
    const formattedDate = new Intl.DateTimeFormat('hr-HR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(date);

    return `
      <a href="${post.href}" class="search-result-item search-result-item--post">
        <div class="search-result-item__content">
          <h5 class="search-result-item__title">${post.title}</h5>
          <span class="search-result-item__date">${formattedDate}</span>
        </div>
      </a>
    `;
  }

  escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }
}

// ============================================
// MOBILE MENU MODULE
// ============================================
class MobileMenu {
  constructor() {
    this.hamburger = null;
    this.menu = null;
    this.closeBtn = null;
    this.overlay = null;
    this.toggles = null;
  }

  init() {
    this.hamburger = document.getElementById('hamburgerMenu');
    this.menu = document.getElementById('mobileMenu');
    this.closeBtn = document.getElementById('mobileMenuClose');
    this.overlay = document.getElementById('mobileMenuOverlay');
    this.toggles = document.querySelectorAll('.mobile-menu__toggle');

    if (!this.hamburger || !this.menu) return;

    this.bindEvents();
  }

  bindEvents() {
    // Hamburger click
    this.hamburger.addEventListener('click', () => {
      const isOpen = this.hamburger.getAttribute('aria-expanded') === 'true';
      isOpen ? this.close() : this.open();
    });

    // Close button
    if (this.closeBtn) {
      this.closeBtn.addEventListener('click', () => this.close());
    }

    // Overlay click
    if (this.overlay) {
      this.overlay.addEventListener('click', () => this.close());
    }

    // Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.menu.classList.contains('mobile-menu--open')) {
        this.close();
      }
    });

    // Submenu toggles
    this.toggles?.forEach(toggle => {
      toggle.addEventListener('click', () => this.toggleSubmenu(toggle));
    });
  }

  open() {
    this.menu.classList.add('mobile-menu--open');
    this.overlay?.classList.add('mobile-menu__overlay--active');
    this.hamburger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  close() {
    this.menu.classList.remove('mobile-menu--open');
    this.overlay?.classList.remove('mobile-menu__overlay--active');
    this.hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';

    // Close all submenus
    this.menu.querySelectorAll('.mobile-menu__submenu').forEach(submenu => {
      submenu.classList.remove('mobile-menu__submenu--expanded');
    });
    this.toggles?.forEach(toggle => {
      toggle.setAttribute('aria-expanded', 'false');
    });
  }

  toggleSubmenu(toggle) {
    const menuIndex = toggle.getAttribute('data-menu-index');
    const submenu = this.menu.querySelector(`[data-submenu-index="${menuIndex}"]`);
    const isExpanded = toggle.getAttribute('aria-expanded') === 'true';

    if (submenu) {
      if (isExpanded) {
        submenu.classList.remove('mobile-menu__submenu--expanded');
        toggle.setAttribute('aria-expanded', 'false');
      } else {
        // Close other submenus
        this.menu.querySelectorAll('.mobile-menu__submenu').forEach(sub => {
          sub.classList.remove('mobile-menu__submenu--expanded');
        });
        this.toggles?.forEach(tog => {
          tog.setAttribute('aria-expanded', 'false');
        });

        // Open this submenu
        submenu.classList.add('mobile-menu__submenu--expanded');
        toggle.setAttribute('aria-expanded', 'true');
      }
    }
  }
}

// ============================================
// INITIALIZE ON DOM READY
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  // Initialize scroll behavior
  const headerScroll = new HeaderScroll();
  headerScroll.init();

  // Initialize search for desktop and mobile
  const search = new HeaderSearch();

  // Desktop search
  search.init({
    inputId: 'searchInput',
    dropdownId: 'searchDropdown',
    resultsId: 'searchResults',
    formId: 'searchForm'
  });

  // Mobile search (same instance, no duplicate code)
  search.init({
    inputId: 'mobileSearchInput',
    dropdownId: 'mobileSearchDropdown',
    resultsId: 'mobileSearchResults',
    formId: 'mobileSearchForm'
  });

  // Initialize mobile menu
  const mobileMenu = new MobileMenu();
  mobileMenu.init();

  // Desktop dropdown menus
  const dropdownTriggers = document.querySelectorAll('.nav-menu__link--dropdown');
  dropdownTriggers?.forEach(trigger => {
    const dropdown = trigger.nextElementSibling;
    let closeTimeout;

    trigger.addEventListener('mouseenter', () => {
      clearTimeout(closeTimeout);
      dropdown?.classList.add('dropdown-menu--active');
    });

    trigger.addEventListener('mouseleave', () => {
      closeTimeout = setTimeout(() => {
        dropdown?.classList.remove('dropdown-menu--active');
      }, 300);
    });

    dropdown?.addEventListener('mouseenter', () => {
      clearTimeout(closeTimeout);
    });

    dropdown?.addEventListener('mouseleave', () => {
      dropdown.classList.remove('dropdown-menu--active');
    });
  });

  // Close dropdowns on outside click
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-menu__item')) {
      document.querySelectorAll('.dropdown-menu').forEach(menu => {
        menu.classList.remove('dropdown-menu--active');
      });
    }
  });
});

// Export for external use if needed
window.HeaderModules = {
  HeaderScroll,
  HeaderSearch,
  MobileMenu
};