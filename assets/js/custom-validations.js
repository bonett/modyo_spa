
/**
 *  It allows validate input form
 * @returns null
 */
const customInputValidation = () => {

    window.onload = () => {

        const form = document.getElementById("contactForm");

        const pristine = new Pristine(form);

        form.addEventListener('submit', function (e) {
            e.preventDefault();

            var valid = pristine.validate(); // returns true or false

        });
    };
}

/**
 *  It should initialize validations
 */
const mainValidations = () => {
    customInputValidation();
};

window.onload = () => {
    mainValidations();
}