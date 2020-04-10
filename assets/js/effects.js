/**
 *  It allows the animation of the SmoothScroll
 * @returns null
 */
const scrollFunction = () => {

    const button = document.getElementById("backTo");
    const navbar = document.getElementById("navigation");

    window.onscroll = () => {
        if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
            button.style.display = "block"
            navbar.classList.add('navbar--fixed')
        } else {
            button.style.display = "none";
            navbar.classList.remove('navbar--fixed');
        }
    };
}

/**
 *  It allows the animation of the SmoothScroll
 * @returns null
 */
const effectScroll = () => {
    new Gumshoe('#scroll__spy a');
}

/**
 *  It should initialize effects
 */
const mainEffects = () => {
    effectScroll();
    scrollFunction();
};

mainEffects();