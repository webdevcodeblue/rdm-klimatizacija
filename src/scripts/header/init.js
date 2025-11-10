/**
 * Header Initialization Script
 * Loads and initializes all header modules
 */

document.addEventListener('DOMContentLoaded', () => {
  // Mobile menu functionality
  const hamburger = document.getElementById('hamburgerMenu');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileMenuClose = document.getElementById('mobileMenuClose');
  const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
  const mobileToggles = document.querySelectorAll('.mobile-menu__toggle');

  // Hamburger menu toggle
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      const isOpen = hamburger.getAttribute('aria-expanded') === 'true';

      if (isOpen) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    });
  }

  // Close button
  if (mobileMenuClose) {
    mobileMenuClose.addEventListener('click', closeMobileMenu);
  }

  // Overlay click
  if (mobileMenuOverlay) {
    mobileMenuOverlay.addEventListener('click', closeMobileMenu);
  }

  // Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileMenu?.classList.contains('mobile-menu--open')) {
      closeMobileMenu();
    }
  });

  function openMobileMenu() {
    if (!mobileMenu || !hamburger) return;

    mobileMenu.classList.add('mobile-menu--open');
    mobileMenuOverlay?.classList.add('mobile-menu__overlay--active');
    hamburger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileMenu() {
    if (!mobileMenu || !hamburger) return;

    mobileMenu.classList.remove('mobile-menu--open');
    mobileMenuOverlay?.classList.remove('mobile-menu__overlay--active');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';

    // Close all submenus
    mobileMenu.querySelectorAll('.mobile-menu__submenu').forEach(submenu => {
      submenu.classList.remove('mobile-menu__submenu--expanded');
    });
    mobileToggles?.forEach(toggle => {
      toggle.setAttribute('aria-expanded', 'false');
    });
  }

  // Mobile submenu toggles
  mobileToggles?.forEach(toggle => {
    toggle.addEventListener('click', () => {
      const menuIndex = toggle.getAttribute('data-menu-index');
      const submenu = mobileMenu?.querySelector(`[data-submenu-index="${menuIndex}"]`);
      const isExpanded = toggle.getAttribute('aria-expanded') === 'true';

      if (submenu) {
        if (isExpanded) {
          submenu.classList.remove('mobile-menu__submenu--expanded');
          toggle.setAttribute('aria-expanded', 'false');
        } else {
          // Close other submenus
          mobileMenu?.querySelectorAll('.mobile-menu__submenu').forEach(sub => {
            sub.classList.remove('mobile-menu__submenu--expanded');
          });
          mobileToggles?.forEach(tog => {
            tog.setAttribute('aria-expanded', 'false');
          });

          // Open this submenu
          submenu.classList.add('mobile-menu__submenu--expanded');
          toggle.setAttribute('aria-expanded', 'true');
        }
      }
    });
  });

  // Desktop dropdown menus
  const dropdownTriggers = document.querySelectorAll('.nav-menu__link--dropdown');

  dropdownTriggers?.forEach(trigger => {
    const dropdown = trigger.nextElementSibling;
    let closeTimeout;

    // Mouse events for desktop
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

    // Touch events for mobile
    trigger.addEventListener('click', (e) => {
      if (window.innerWidth <= 1024) {
        e.preventDefault();
        const isActive = dropdown?.classList.contains('dropdown-menu--active');

        // Close all dropdowns
        document.querySelectorAll('.dropdown-menu').forEach(menu => {
          menu.classList.remove('dropdown-menu--active');
        });

        // Toggle this dropdown
        if (!isActive) {
          dropdown?.classList.add('dropdown-menu--active');
        }
      }
    });
  });

  // Close dropdowns when clicking outside
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-menu__item')) {
      document.querySelectorAll('.dropdown-menu').forEach(menu => {
        menu.classList.remove('dropdown-menu--active');
      });
    }
  });
});

// Export utility functions for other modules
window.headerUtils = {
  closeMobileMenu: () => {
    const mobileMenu = document.getElementById('mobileMenu');
    const hamburger = document.getElementById('hamburgerMenu');
    const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');

    mobileMenu?.classList.remove('mobile-menu--open');
    mobileMenuOverlay?.classList.remove('mobile-menu__overlay--active');
    hamburger?.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }
};