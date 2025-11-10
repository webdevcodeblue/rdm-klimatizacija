/**
 * Final Optimized Header Bundle with Event Manager
 * Complete header functionality with performance optimizations
 */

// ============================================
// HEADER SCROLL MODULE WITH OPTIMIZED EVENTS
// ============================================
class HeaderScroll {
  constructor(eventManager) {
    this.em = eventManager;
    this.SCROLL_UP_THRESHOLD = 50;
    this.SCROLL_DOWN_THRESHOLD = 10;
    this.lastScrollY = 0;
    this.isScrollingDown = false;
    this.isScrolled = false;
    this.lastStateChangeTime = 0;
    this.header = null;
    this.topBar = null;
    this.rafId = null;
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
    // Use throttled scroll handler
    this.em.onThrottle(window, 'scroll', () => {
      if (this.rafId) {
        cancelAnimationFrame(this.rafId);
      }
      this.rafId = requestAnimationFrame(() => {
        this.updateScrollState();
        this.rafId = null;
      });
    }, 16); // ~60fps
  }

  updateScrollState() {
    const currentScrollY = window.scrollY;
    const scrollDelta = currentScrollY - this.lastScrollY;
    const now = Date.now();

    if (now - this.lastStateChangeTime < 150) return;

    // Batch DOM updates
    const updates = [];

    if (scrollDelta > 0 && currentScrollY > this.SCROLL_DOWN_THRESHOLD) {
      if (!this.isScrollingDown) {
        this.isScrollingDown = true;
        updates.push(() => this.header.classList.add('header--hidden'));
        this.lastStateChangeTime = now;
      }
    } else if (scrollDelta < -5) {
      if (this.isScrollingDown) {
        this.isScrollingDown = false;
        updates.push(() => this.header.classList.remove('header--hidden'));
        this.lastStateChangeTime = now;
      }
    }

    if (currentScrollY > this.SCROLL_UP_THRESHOLD) {
      if (!this.isScrolled) {
        this.isScrolled = true;
        updates.push(() => {
          this.header.classList.add('scrolled');
          if (this.topBar) this.topBar.style.display = 'none';
        });
      }
    } else {
      if (this.isScrolled) {
        this.isScrolled = false;
        updates.push(() => {
          this.header.classList.remove('scrolled');
          if (this.topBar) this.topBar.style.display = 'block';
        });
      }
    }

    // Apply all updates in one go
    if (updates.length) {
      requestAnimationFrame(() => {
        updates.forEach(fn => fn());
      });
    }

    this.lastScrollY = currentScrollY;
  }

  destroy() {
    if (this.rafId) {
      cancelAnimationFrame(this.rafId);
    }
  }
}

// ============================================
// UNIFIED SEARCH MODULE WITH OPTIMIZED EVENTS
// ============================================
class HeaderSearch {
  constructor(eventManager) {
    this.em = eventManager;
    this.searchTimeout = null;
    this.currentQuery = '';
    this.debounceDelay = 300;
    this.cache = new Map();
    this.maxCacheSize = 50;
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
    // Debounced input handler
    this.em.onDebounce(input, 'input', (e) => {
      this.performSearch(e.target.value, dropdown, results);
    }, this.debounceDelay);

    // Focus handler
    this.em.on(input, 'focus', () => {
      if (input.value.length >= 2) {
        dropdown.classList.add('active');
      }
    });

    // Form submit handler
    if (form) {
      this.em.on(form, 'submit', (e) => {
        e.preventDefault();
        const query = input.value.trim();
        if (query) {
          window.location.href = `/pretraga?q=${encodeURIComponent(query)}`;
        }
      }, { passive: false });
    }

    // Delegated click handler for closing dropdown
    this.em.delegate(document.body, '.search-dropdown', 'click', (e) => {
      e.stopPropagation();
    });

    // Global click handler
    this.em.on(document, 'click', (e) => {
      if (!input.contains(e.target) && !dropdown.contains(e.target)) {
        dropdown.classList.remove('active');
      }
    });

    // Escape key handler
    this.em.on(document, 'keydown', (e) => {
      if (e.key === 'Escape') {
        dropdown.classList.remove('active');
        input.blur();
      }
    });
  }

  async performSearch(query, dropdown, results) {
    if (query.length < 2) {
      dropdown.classList.remove('active');
      return;
    }

    // Check cache first
    const cached = this.cache.get(query);
    if (cached) {
      this.displayResults(cached, query, results, dropdown);
      return;
    }

    this.currentQuery = query;
    results.innerHTML = '<div class="search-dropdown__loading">Pretraga...</div>';
    dropdown.classList.add('active');

    try {
      const response = await fetch(`/api/search.json?q=${encodeURIComponent(query)}`);
      const data = await response.json();

      if (query !== this.currentQuery) return;

      // Cache the results
      this.addToCache(query, data);

      this.displayResults(data, query, results, dropdown);
    } catch (error) {
      console.error('Search error:', error);
      results.innerHTML = '<div class="search-dropdown__error">Greška pri pretrazi</div>';
    }
  }

  addToCache(key, data) {
    // Limit cache size
    if (this.cache.size >= this.maxCacheSize) {
      const firstKey = this.cache.keys().next().value;
      this.cache.delete(firstKey);
    }
    this.cache.set(key, data);
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

    const fragments = [];

    // Products section
    if (data.products.length > 0) {
      fragments.push(`
        <div class="search-dropdown__section">
          <h4 class="search-dropdown__section-title">Proizvodi</h4>
          ${data.products.map(p => this.renderProductItem(p)).join('')}
        </div>
      `);
    }

    // Blog posts section
    if (data.posts.length > 0) {
      fragments.push(`
        <div class="search-dropdown__section">
          <h4 class="search-dropdown__section-title">Blog članci</h4>
          ${data.posts.map(p => this.renderPostItem(p)).join('')}
        </div>
      `);
    }

    // View all
    fragments.push(`
      <div class="search-dropdown__footer">
        <a href="/pretraga?q=${encodeURIComponent(query)}" class="search-dropdown__view-all">
          Prikaži sve rezultate (${data.products.length + data.posts.length})
        </a>
      </div>
    `);

    // Update DOM once
    requestAnimationFrame(() => {
      results.innerHTML = fragments.join('');
    });
  }

  renderProductItem(product) {
    const price = product.price ? `${product.price.toFixed(2)}€` : 'Na upit';
    return `
      <a href="${product.href}" class="search-result-item">
        <img src="${product.image}" alt="${product.name}"
             class="search-result-item__image" loading="lazy">
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
// MOBILE MENU MODULE WITH OPTIMIZED EVENTS
// ============================================
class MobileMenu {
  constructor(eventManager) {
    this.em = eventManager;
    this.hamburger = null;
    this.menu = null;
    this.closeBtn = null;
    this.overlay = null;
    this.toggles = null;
    this.isOpen = false;
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
    this.em.on(this.hamburger, 'click', () => {
      this.isOpen ? this.close() : this.open();
    });

    // Close button
    if (this.closeBtn) {
      this.em.on(this.closeBtn, 'click', () => this.close());
    }

    // Overlay click
    if (this.overlay) {
      this.em.on(this.overlay, 'click', () => this.close());
    }

    // Escape key
    this.em.on(document, 'keydown', (e) => {
      if (e.key === 'Escape' && this.isOpen) {
        this.close();
      }
    });

    // Delegated submenu toggle events
    this.em.delegate(this.menu, '.mobile-menu__toggle', 'click', (e) => {
      this.toggleSubmenu(e.currentTarget);
    });
  }

  open() {
    this.isOpen = true;

    // Batch DOM updates
    requestAnimationFrame(() => {
      this.menu.classList.add('mobile-menu--open');
      this.overlay?.classList.add('mobile-menu__overlay--active');
      this.hamburger.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
    });
  }

  close() {
    this.isOpen = false;

    // Batch DOM updates
    requestAnimationFrame(() => {
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
    });
  }

  toggleSubmenu(toggle) {
    const menuIndex = toggle.getAttribute('data-menu-index');
    const submenu = this.menu.querySelector(`[data-submenu-index="${menuIndex}"]`);
    const isExpanded = toggle.getAttribute('aria-expanded') === 'true';

    if (submenu) {
      requestAnimationFrame(() => {
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
      });
    }
  }
}

// ============================================
// DROPDOWN MODULE WITH OPTIMIZED EVENTS
// ============================================
class DropdownMenu {
  constructor(eventManager) {
    this.em = eventManager;
    this.triggers = null;
    this.closeTimeouts = new Map();
  }

  init() {
    this.triggers = document.querySelectorAll('.nav-menu__link--dropdown');
    if (!this.triggers.length) return;

    this.bindEvents();
  }

  bindEvents() {
    this.triggers.forEach(trigger => {
      const dropdown = trigger.nextElementSibling;
      if (!dropdown) return;

      // Mouse enter/leave with delay
      this.em.on(trigger, 'mouseenter', () => {
        this.showDropdown(trigger, dropdown);
      });

      this.em.on(trigger, 'mouseleave', () => {
        this.scheduleHideDropdown(trigger, dropdown);
      });

      this.em.on(dropdown, 'mouseenter', () => {
        this.cancelHideDropdown(trigger);
      });

      this.em.on(dropdown, 'mouseleave', () => {
        this.hideDropdown(dropdown);
      });

      // Touch support
      this.em.on(trigger, 'click', (e) => {
        if (window.innerWidth <= 1024) {
          e.preventDefault();
          this.toggleDropdown(dropdown);
        }
      });
    });

    // Close on outside click
    this.em.on(document, 'click', (e) => {
      if (!e.target.closest('.nav-menu__item')) {
        this.closeAllDropdowns();
      }
    });
  }

  showDropdown(trigger, dropdown) {
    this.cancelHideDropdown(trigger);
    requestAnimationFrame(() => {
      dropdown.classList.add('dropdown-menu--active');
    });
  }

  scheduleHideDropdown(trigger, dropdown) {
    const timeout = setTimeout(() => {
      this.hideDropdown(dropdown);
    }, 300);
    this.closeTimeouts.set(trigger, timeout);
  }

  cancelHideDropdown(trigger) {
    const timeout = this.closeTimeouts.get(trigger);
    if (timeout) {
      clearTimeout(timeout);
      this.closeTimeouts.delete(trigger);
    }
  }

  hideDropdown(dropdown) {
    requestAnimationFrame(() => {
      dropdown.classList.remove('dropdown-menu--active');
    });
  }

  toggleDropdown(dropdown) {
    const isActive = dropdown.classList.contains('dropdown-menu--active');
    this.closeAllDropdowns();
    if (!isActive) {
      requestAnimationFrame(() => {
        dropdown.classList.add('dropdown-menu--active');
      });
    }
  }

  closeAllDropdowns() {
    requestAnimationFrame(() => {
      document.querySelectorAll('.dropdown-menu').forEach(menu => {
        menu.classList.remove('dropdown-menu--active');
      });
    });
  }
}

// ============================================
// INITIALIZE ON DOM READY
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  // Load event manager script first
  const script = document.createElement('script');
  script.src = '/js/header-events.js';
  script.onload = () => {
    // Initialize with event manager
    const em = window.eventManager;

    // Initialize all modules with centralized event management
    const headerScroll = new HeaderScroll(em);
    headerScroll.init();

    const search = new HeaderSearch(em);
    // Desktop search
    search.init({
      inputId: 'searchInput',
      dropdownId: 'searchDropdown',
      resultsId: 'searchResults',
      formId: 'searchForm'
    });

    // Mobile search
    search.init({
      inputId: 'mobileSearchInput',
      dropdownId: 'mobileSearchDropdown',
      resultsId: 'mobileSearchResults',
      formId: 'mobileSearchForm'
    });

    const mobileMenu = new MobileMenu(em);
    mobileMenu.init();

    const dropdownMenu = new DropdownMenu(em);
    dropdownMenu.init();

    // Export for external use
    window.HeaderModules = {
      headerScroll,
      search,
      mobileMenu,
      dropdownMenu,
      eventManager: em
    };
  };

  document.head.appendChild(script);
});

// Performance monitoring
if ('PerformanceObserver' in window) {
  try {
    const perfObserver = new PerformanceObserver((entries) => {
      entries.getEntries().forEach(entry => {
        if (entry.duration > 100) {
          console.warn('Slow interaction:', entry.name, entry.duration + 'ms');
        }
      });
    });
    perfObserver.observe({ entryTypes: ['measure', 'navigation'] });
  } catch (e) {
    // Performance observer not supported
  }
}