/**
 * Event Manager for Header
 * Centralized event listener management for better performance and memory management
 */

class EventManager {
  constructor() {
    this.listeners = new Map();
    this.delegatedListeners = new Map();
    this.passive = { passive: true };
    this.active = { passive: false };
  }

  /**
   * Add event listener with automatic cleanup tracking
   */
  on(element, event, handler, options = {}) {
    if (!element) return;

    const key = this.getKey(element, event);
    const listener = options.passive !== false ?
      { handler, options: { ...options, passive: true } } :
      { handler, options };

    // Remove existing listener if present
    this.off(element, event);

    // Add new listener
    element.addEventListener(event, handler, listener.options);
    this.listeners.set(key, { element, event, ...listener });

    return () => this.off(element, event);
  }

  /**
   * Remove event listener
   */
  off(element, event) {
    if (!element) return;

    const key = this.getKey(element, event);
    const listener = this.listeners.get(key);

    if (listener) {
      element.removeEventListener(event, listener.handler, listener.options);
      this.listeners.delete(key);
    }
  }

  /**
   * Event delegation for dynamic elements
   */
  delegate(parent, selector, event, handler, options = {}) {
    if (!parent) return;

    const delegatedHandler = (e) => {
      const target = e.target.closest(selector);
      if (target && parent.contains(target)) {
        handler.call(target, e);
      }
    };

    const key = `${selector}:${event}`;

    // Remove existing delegated listener
    this.undelegate(parent, selector, event);

    // Add new delegated listener
    parent.addEventListener(event, delegatedHandler, options);
    this.delegatedListeners.set(key, {
      parent,
      event,
      handler: delegatedHandler,
      options
    });

    return () => this.undelegate(parent, selector, event);
  }

  /**
   * Remove delegated event listener
   */
  undelegate(parent, selector, event) {
    const key = `${selector}:${event}`;
    const listener = this.delegatedListeners.get(key);

    if (listener) {
      parent.removeEventListener(event, listener.handler, listener.options);
      this.delegatedListeners.delete(key);
    }
  }

  /**
   * Add one-time event listener
   */
  once(element, event, handler, options = {}) {
    const onceHandler = (e) => {
      handler(e);
      this.off(element, event);
    };

    return this.on(element, event, onceHandler, options);
  }

  /**
   * Throttled event listener
   */
  onThrottle(element, event, handler, delay = 100, options = {}) {
    let lastCall = 0;
    const throttledHandler = (e) => {
      const now = Date.now();
      if (now - lastCall >= delay) {
        handler(e);
        lastCall = now;
      }
    };

    return this.on(element, event, throttledHandler, options);
  }

  /**
   * Debounced event listener
   */
  onDebounce(element, event, handler, delay = 300, options = {}) {
    let timeoutId;
    const debouncedHandler = (e) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => handler(e), delay);
    };

    return this.on(element, event, debouncedHandler, options);
  }

  /**
   * Clean up all listeners
   */
  removeAll() {
    // Remove regular listeners
    this.listeners.forEach((listener, key) => {
      listener.element.removeEventListener(
        listener.event,
        listener.handler,
        listener.options
      );
    });
    this.listeners.clear();

    // Remove delegated listeners
    this.delegatedListeners.forEach((listener, key) => {
      listener.parent.removeEventListener(
        listener.event,
        listener.handler,
        listener.options
      );
    });
    this.delegatedListeners.clear();
  }

  /**
   * Get unique key for element/event combination
   */
  getKey(element, event) {
    return `${element.id || element.className || 'element'}_${event}`;
  }
}

// Create global instance
window.eventManager = new EventManager();

// Auto cleanup on page unload
window.addEventListener('beforeunload', () => {
  window.eventManager.removeAll();
});