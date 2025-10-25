import { TOTAL_SCREENS } from "./commonUtils";
import { Subject } from "rxjs";

/**
 * ScrollService is responsible for:
 * ✅ detecting which section of the page is currently visible,
 * ✅ broadcasting events using RxJS Subjects so that React components can fade-in
 *    or update active navigation based on scroll position.
 *
 * This pattern decouples scroll logic from UI components.
 */
export default class ScrollService {
  /**
   * ✅ Singleton Instance
   * We use a single shared instance so every component can subscribe to the same scroll event emitter.
   */
  static scrollHandler = new ScrollService();

  /**
   * ✅ RxJS Subjects (Event Emitters)
   * currentScreenBroadcaster: emits when a screen becomes fully visible → update navbar
   * currentScreenFadeIn: emits when a screen becomes partially visible → trigger fade-in animation
   */
  static currentScreenBroadcaster = new Subject();
  static currentScreenFadeIn = new Subject();

  constructor() {
    /**
     * ✅ When the ScrollService is created → automatically listen to scroll events
     */
    window.addEventListener("scroll", this.checkCurrentScreenUnderViewport);
  }

  /**
   * ✅ Utility to scroll smoothly to "Contact Me" section
   */
  scrollToHireMe = () => {
    let contactMeScreen = document.getElementById("ContactMe");
    if (!contactMeScreen) return;
    contactMeScreen.scrollIntoView({ behavior: "smooth" });
  };

  /**
   * ✅ Utility to scroll smoothly to the “Home” section
   */
  scrollToHome = () => {
    let homeScreen = document.getElementById("Home");
    if (!homeScreen) return;
    homeScreen.scrollIntoView({ behavior: "smooth" });
  };

  /**
   * ✅ Checks if a DOM element (section) is visible inside viewport or not
   *
   * @param elem → DOM element to check
   * @param type → "partial" or "complete" visibility check
   *
   * How it works:
   * getBoundingClientRect() returns position relative to viewport
   * elementTop < window.innerHeight   → top part is visible on screen
   * elemBottom >= 0                   → bottom part is still above bottom line
   */
  isElementInView = (elem, type) => {
    let rec = elem.getBoundingClientRect();
    let elementTop = rec.top;
    let elemBottom = rec.bottom;

    // ✅ Visible even partially
    let partiallyVisible = elementTop < window.innerHeight && elemBottom >= 0;

    // ✅ Completely visible inside screen area
    let completelyVisible = elementTop >= 0 && elemBottom <= window.innerHeight;

    switch (type) {
      case "partial":
        return partiallyVisible;

      case "complete":
        return completelyVisible;

      default:
        return false;
    }
  };

  /**
   * ✅ Main scroll handler
   * Loops through all screens to check which one is currently visible
   * and emits the right subject event.
   *
   * Logic:
   * - First time a section becomes partially visible → fade-in animation
   * - When fully visible → broadcast that this section is currently active
   */
  checkCurrentScreenUnderViewport = (event) => {
    if (!event || Object.keys(event).length < 1) return;

    for (let screen of TOTAL_SCREENS) {
      let screenFromDOM = document.getElementById(screen.screen_name);
      if (!screenFromDOM) continue;

      let fullyVisible = this.isElementInView(screenFromDOM, "complete");
      let partiallyVisible = this.isElementInView(screenFromDOM, "partial");

      if (fullyVisible || partiallyVisible) {
        /**
         * ✅ Trigger Fade-in ONLY on first time visibility
         */
        if (partiallyVisible && !screen.alreadyRendered) {
          ScrollService.currentScreenFadeIn.next({
            fadeInScreen: screen.screen_name,
          });

          // To avoid repeating animation on scroll up/down
          screen["alreadyRendered"] = true;
          break;
        }

        /**
         * ✅ When a screen is fully inside viewport → update active navigation
         */
        if (fullyVisible) {
          ScrollService.currentScreenBroadcaster.next({
            screenInView: screen.screen_name,
          });
          break;
        }
      }
    }
  };
}
