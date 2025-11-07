/**
 * Unified Search Module for Header
 * Handles both desktop and mobile search functionality
 */

class HeaderSearch {
  constructor() {
    this.searchTimeout = null;
    this.currentQuery = '';
    this.debounceDelay = 300;
  }

  /**
   * Initialize search for given elements
   */
  init(config) {
    const {
      inputId,
      dropdownId,
      resultsId,
      formId,
      isMobile = false
    } = config;

    const searchInput = document.getElementById(inputId);
    const searchDropdown = document.getElementById(dropdownId);
    const searchResults = document.getElementById(resultsId);
    const searchForm = document.getElementById(formId);

    if (!searchInput || !searchDropdown || !searchResults) {
      console.warn('Search elements not found:', { inputId, dropdownId, resultsId });
      return;
    }

    // Bind events
    this.bindSearchEvents(searchInput, searchDropdown, searchResults, searchForm, isMobile);
  }

  /**
   * Bind search events to elements
   */
  bindSearchEvents(input, dropdown, results, form, isMobile) {
    // Input event with debounce
    input.addEventListener('input', this.debounce((e) => {
      this.performSearch(e.target.value, dropdown, results);
    }, this.debounceDelay));

    // Focus event
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

    // Click outside to close
    document.addEventListener('click', (e) => {
      if (!input.contains(e.target) && !dropdown.contains(e.target)) {
        dropdown.classList.remove('active');
      }
    });

    // Escape key to close
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        dropdown.classList.remove('active');
        input.blur();
      }
    });
  }

  /**
   * Debounce function
   */
  debounce(func, wait) {
    return (...args) => {
      if (this.searchTimeout) clearTimeout(this.searchTimeout);
      this.searchTimeout = setTimeout(() => func(...args), wait);
    };
  }

  /**
   * Format price for display
   */
  formatPrice(price, salePrice) {
    if (!price) {
      return 'Na upit';
    }
    if (salePrice && salePrice < price) {
      return `<span class="search-result-item__price--old">${price.toFixed(2)}€</span>${salePrice.toFixed(2)}€`;
    }
    return `${price.toFixed(2)}€`;
  }

  /**
   * Perform search request
   */
  async performSearch(query, dropdown, results) {
    if (query.length < 2) {
      dropdown.classList.remove('active');
      return;
    }

    this.currentQuery = query;

    // Show loading state
    results.innerHTML = '<div class="search-dropdown__loading">Pretraga...</div>';
    dropdown.classList.add('active');

    try {
      const response = await fetch(`/api/search.json?q=${encodeURIComponent(query)}`);
      const data = await response.json();

      // Check if query is still current
      if (query !== this.currentQuery) return;

      // Display results
      this.displayResults(data, query, results, dropdown);
    } catch (error) {
      console.error('Search error:', error);
      results.innerHTML = '<div class="search-dropdown__error">Greška pri pretrazi</div>';
    }
  }

  /**
   * Display search results
   */
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

    // Products section
    if (data.products.length > 0) {
      html += `
        <div class="search-dropdown__section">
          <h4 class="search-dropdown__section-title">Proizvodi</h4>
          ${data.products.map(product => this.renderProductItem(product)).join('')}
        </div>
      `;
    }

    // Blog posts section
    if (data.posts.length > 0) {
      html += `
        <div class="search-dropdown__section">
          <h4 class="search-dropdown__section-title">Blog članci</h4>
          ${data.posts.map(post => this.renderPostItem(post)).join('')}
        </div>
      `;
    }

    // View all results link
    html += `
      <div class="search-dropdown__footer">
        <a href="/pretraga?q=${encodeURIComponent(query)}" class="search-dropdown__view-all">
          Prikaži sve rezultate (${data.products.length + data.posts.length})
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </a>
      </div>
    `;

    results.innerHTML = html;
  }

  /**
   * Render product item
   */
  renderProductItem(product) {
    return `
      <a href="${product.href}" class="search-result-item">
        <img src="${product.image}" alt="${product.name}" class="search-result-item__image" loading="lazy">
        <div class="search-result-item__content">
          <h5 class="search-result-item__title">${product.manufacturer} ${product.name}</h5>
          <div class="search-result-item__meta">
            <span class="search-result-item__category">${this.getCategoryName(product.category)}</span>
            <span class="search-result-item__price">${this.formatPrice(product.price, product.originalPrice)}</span>
          </div>
        </div>
      </a>
    `;
  }

  /**
   * Render blog post item
   */
  renderPostItem(post) {
    const date = new Date(post.publishDate);
    const formattedDate = new Intl.DateTimeFormat('hr-HR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(date);

    return `
      <a href="${post.href}" class="search-result-item search-result-item--post">
        <div class="search-result-item__icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
          </svg>
        </div>
        <div class="search-result-item__content">
          <h5 class="search-result-item__title">${post.title}</h5>
          <div class="search-result-item__meta">
            <span class="search-result-item__date">${formattedDate}</span>
          </div>
        </div>
      </a>
    `;
  }

  /**
   * Get category display name
   */
  getCategoryName(category) {
    const categoryMap = {
      'klima-uredaji': 'Klima uređaji',
      'multi-klima': 'Multi klima',
      'dizalice-topline': 'Dizalice topline',
      'mikroklima': 'Mikroklima',
      'alati-materijali': 'Alati i materijali',
      'montaza-servis': 'Montaža i servis'
    };
    return categoryMap[category] || category;
  }

  /**
   * Escape HTML to prevent XSS
   */
  escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }
}

// Export for use
window.HeaderSearch = HeaderSearch;