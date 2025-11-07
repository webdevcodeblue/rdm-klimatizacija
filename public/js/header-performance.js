/**
 * Header Performance Optimizations
 * Dodatne optimizacije za bolju performansu
 */

// ============================================
// PERFORMANCE UTILITIES
// ============================================

/**
 * Throttle function to limit execution frequency
 */
function throttle(func, limit) {
  let inThrottle;
  return function() {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

/**
 * Lazy load images in search results
 */
function lazyLoadImages() {
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
            observer.unobserve(img);
          }
        }
      });
    });

    // Observe all lazy images
    document.querySelectorAll('img[data-src]').forEach(img => {
      imageObserver.observe(img);
    });
  }
}

/**
 * Optimize search with request caching
 */
class SearchCache {
  constructor() {
    this.cache = new Map();
    this.maxSize = 50;
    this.ttl = 5 * 60 * 1000; // 5 minutes
  }

  get(key) {
    const item = this.cache.get(key);
    if (!item) return null;

    if (Date.now() - item.timestamp > this.ttl) {
      this.cache.delete(key);
      return null;
    }

    return item.data;
  }

  set(key, data) {
    // Limit cache size
    if (this.cache.size >= this.maxSize) {
      const firstKey = this.cache.keys().next().value;
      this.cache.delete(firstKey);
    }

    this.cache.set(key, {
      data: data,
      timestamp: Date.now()
    });
  }

  clear() {
    this.cache.clear();
  }
}

/**
 * Optimized scroll handler with RAF
 */
class OptimizedScroll {
  constructor(callback) {
    this.callback = callback;
    this.ticking = false;
    this.init();
  }

  init() {
    window.addEventListener('scroll', () => this.requestTick(), { passive: true });
  }

  requestTick() {
    if (!this.ticking) {
      window.requestAnimationFrame(() => {
        this.callback();
        this.ticking = false;
      });
      this.ticking = true;
    }
  }
}

/**
 * Preload critical resources
 */
function preloadResources() {
  // Preload search API endpoint
  const link = document.createElement('link');
  link.rel = 'preconnect';
  link.href = '/api';
  document.head.appendChild(link);

  // Preload critical fonts
  const fontLink = document.createElement('link');
  fontLink.rel = 'preload';
  fontLink.as = 'font';
  fontLink.type = 'font/woff2';
  fontLink.href = '/fonts/inter-var.woff2';
  fontLink.crossOrigin = 'anonymous';
  document.head.appendChild(fontLink);
}

/**
 * Optimize dropdown interactions with pointer events
 */
function optimizeDropdowns() {
  const dropdowns = document.querySelectorAll('.dropdown-menu');

  dropdowns.forEach(dropdown => {
    let enterTimer, leaveTimer;
    const trigger = dropdown.previousElementSibling;

    if (trigger) {
      // Use pointer events for better touch support
      trigger.addEventListener('pointerenter', () => {
        clearTimeout(leaveTimer);
        enterTimer = setTimeout(() => {
          dropdown.classList.add('dropdown-menu--active');
        }, 100);
      });

      trigger.addEventListener('pointerleave', () => {
        clearTimeout(enterTimer);
        leaveTimer = setTimeout(() => {
          dropdown.classList.remove('dropdown-menu--active');
        }, 300);
      });

      dropdown.addEventListener('pointerenter', () => {
        clearTimeout(leaveTimer);
      });

      dropdown.addEventListener('pointerleave', () => {
        leaveTimer = setTimeout(() => {
          dropdown.classList.remove('dropdown-menu--active');
        }, 300);
      });
    }
  });
}

/**
 * Optimize mobile menu animations with will-change
 */
function optimizeMobileMenu() {
  const mobileMenu = document.getElementById('mobileMenu');
  const overlay = document.getElementById('mobileMenuOverlay');

  if (mobileMenu) {
    // Add will-change before animation
    mobileMenu.addEventListener('transitionstart', () => {
      mobileMenu.style.willChange = 'transform';
    });

    // Remove will-change after animation
    mobileMenu.addEventListener('transitionend', () => {
      mobileMenu.style.willChange = 'auto';
    });
  }

  if (overlay) {
    overlay.addEventListener('transitionstart', () => {
      overlay.style.willChange = 'opacity';
    });

    overlay.addEventListener('transitionend', () => {
      overlay.style.willChange = 'auto';
    });
  }
}

/**
 * Batch DOM updates
 */
class DOMBatcher {
  constructor() {
    this.reads = [];
    this.writes = [];
    this.scheduled = false;
  }

  read(fn) {
    this.reads.push(fn);
    this.schedule();
  }

  write(fn) {
    this.writes.push(fn);
    this.schedule();
  }

  schedule() {
    if (!this.scheduled) {
      this.scheduled = true;
      requestAnimationFrame(() => this.flush());
    }
  }

  flush() {
    const reads = this.reads.slice();
    const writes = this.writes.slice();

    this.reads.length = 0;
    this.writes.length = 0;
    this.scheduled = false;

    // Execute reads first
    reads.forEach(fn => fn());

    // Then execute writes
    writes.forEach(fn => fn());
  }
}

/**
 * Initialize performance optimizations
 */
document.addEventListener('DOMContentLoaded', () => {
  // Preload resources
  preloadResources();

  // Initialize lazy loading
  lazyLoadImages();

  // Optimize dropdowns
  optimizeDropdowns();

  // Optimize mobile menu
  optimizeMobileMenu();

  // Initialize search cache
  window.searchCache = new SearchCache();

  // Initialize DOM batcher
  window.domBatcher = new DOMBatcher();

  // Monitor performance
  if ('performance' in window && 'PerformanceObserver' in window) {
    const perfObserver = new PerformanceObserver((entries) => {
      entries.getEntries().forEach(entry => {
        // Log slow interactions
        if (entry.duration > 100) {
          console.warn('Slow interaction detected:', entry.name, entry.duration + 'ms');
        }
      });
    });

    // Observe long tasks
    try {
      perfObserver.observe({ entryTypes: ['longtask'] });
    } catch (e) {
      // Long task observer not supported
    }
  }

  // Optimize scroll performance
  const scrollHandler = new OptimizedScroll(() => {
    // Scroll handling logic is in header-optimized.js
    // This just ensures optimal performance
  });
});

// Export utilities
window.HeaderPerformance = {
  throttle,
  SearchCache,
  OptimizedScroll,
  DOMBatcher
};