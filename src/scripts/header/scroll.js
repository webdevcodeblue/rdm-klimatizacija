/**
 * Header Scroll Detection Module
 * Handles header visibility and styling based on scroll behavior
 */

class HeaderScroll {
  constructor() {
    // Configuration
    this.SCROLL_UP_THRESHOLD = 50;
    this.SCROLL_DOWN_THRESHOLD = 10;
    this.DEBOUNCE_DELAY = 100;
    this.STATE_CHANGE_DELAY = 150;

    // State
    this.lastScrollY = 0;
    this.isScrollingDown = false;
    this.isScrolled = false;
    this.scrollDebounceTimer = null;
    this.lastStateChangeTime = 0;

    // Elements
    this.header = null;
    this.topBar = null;
  }

  /**
   * Initialize scroll detection
   */
  init() {
    this.header = document.querySelector('.header');
    this.topBar = document.querySelector('.top-bar');

    if (!this.header) {
      console.warn('Header element not found');
      return;
    }

    // Initial check on page load
    this.checkInitialScroll();

    // Bind scroll event with debounce
    this.bindScrollEvent();

    // Handle page visibility changes
    this.handleVisibilityChange();
  }

  /**
   * Check initial scroll position on page load
   */
  checkInitialScroll() {
    const initialScrollY = window.scrollY;
    if (initialScrollY > this.SCROLL_UP_THRESHOLD) {
      this.isScrolled = true;
      this.header.classList.add('scrolled');
    }
    this.lastStateChangeTime = Date.now();
  }

  /**
   * Bind scroll event with optimized handling
   */
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

    // Use passive listener for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Also handle resize events
    window.addEventListener('resize', () => {
      this.checkInitialScroll();
    }, { passive: true });
  }

  /**
   * Update scroll state and header classes
   */
  updateScrollState() {
    const currentScrollY = window.scrollY;
    const scrollDelta = currentScrollY - this.lastScrollY;
    const now = Date.now();

    // Prevent state changes happening too quickly
    if (now - this.lastStateChangeTime < this.STATE_CHANGE_DELAY) {
      return;
    }

    // Scrolling down
    if (scrollDelta > 0 && currentScrollY > this.SCROLL_DOWN_THRESHOLD) {
      if (!this.isScrollingDown) {
        this.isScrollingDown = true;
        this.header.classList.add('header--hidden');
        this.lastStateChangeTime = now;
      }
    }
    // Scrolling up
    else if (scrollDelta < -5) {
      if (this.isScrollingDown) {
        this.isScrollingDown = false;
        this.header.classList.remove('header--hidden');
        this.lastStateChangeTime = now;
      }
    }

    // Add/remove scrolled class
    if (currentScrollY > this.SCROLL_UP_THRESHOLD) {
      if (!this.isScrolled) {
        this.isScrolled = true;
        this.header.classList.add('scrolled');
        if (this.topBar) {
          this.topBar.style.display = 'none';
        }
      }
    } else {
      if (this.isScrolled) {
        this.isScrolled = false;
        this.header.classList.remove('scrolled');
        if (this.topBar) {
          this.topBar.style.display = 'block';
        }
      }
    }

    this.lastScrollY = currentScrollY;
  }

  /**
   * Handle page visibility changes
   */
  handleVisibilityChange() {
    document.addEventListener('visibilitychange', () => {
      if (!document.hidden) {
        // Reset state when page becomes visible
        this.checkInitialScroll();
      }
    });
  }

  /**
   * Public method to force show header
   */
  showHeader() {
    this.isScrollingDown = false;
    this.header.classList.remove('header--hidden');
  }

  /**
   * Public method to force hide header
   */
  hideHeader() {
    this.isScrollingDown = true;
    this.header.classList.add('header--hidden');
  }

  /**
   * Destroy scroll listener (for cleanup)
   */
  destroy() {
    window.removeEventListener('scroll', this.updateScrollState);
    window.removeEventListener('resize', this.checkInitialScroll);
  }
}

// Export for use
window.HeaderScroll = HeaderScroll;