/**
 *  It allows the animation of the SmoothScroll
 * @returns null
 */
const scrollFunction = () => {

    const button = document.getElementById("backTo");

    window.onscroll = () => {
        (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) ? button.style.display = "block" : button.style.display = "none";
    };
}

/**
 *  It allows the animation of the SmoothScroll
 * @returns null
 */
const effectScroll = () => {
    new SmoothScroll('a[href*="#"]');
}

/**
 *  It should initialize effects
 */
const mainEffects = () => {
    effectScroll();
    scrollFunction();
};

mainEffects();