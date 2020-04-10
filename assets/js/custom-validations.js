
/**
 *  It allows validate input form
 */
function customInputValidation() {

    const validateElements = document.getElementsByClassName("validate");

    const inputs = Array.prototype.filter.call(validateElements,
        (element) => {
            return element.nodeName === 'INPUT';
        });

    // Loop through the inputs to be validated

    for (index = 0; index < inputs.length; index++) {
        const input = inputs[index];
        console.log(input.value, input.value.length);

        if (input.value.length < 1 && input.id === 'firstname') {
            input.placeholder = "Enter value fisrtname";
            input.classList.add("input--error");
        }

        if (input.value.length < 1 && input.id === 'lastname') {
            input.placeholder = "Enter value lastname";
            input.classList.add("input--error");
        }

        if (input.value.length < 1 && input.id === 'email') {
            input.placeholder = "Enter value email";
            input.classList.add("input--error");
        }

        if (input.value.length < 1 && input.id === 'subject') {
            input.placeholder = "Enter value subject";
            input.classList.add("input--error");
        }
    }
}