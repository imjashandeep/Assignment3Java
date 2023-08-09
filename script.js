document.addEventListener('DOMContentLoaded', function () {
    const orderButton = document.getElementById('orderButton');
    orderButton.addEventListener('click', createSmoothie);
});

class Smoothie {
    constructor(base, fruits, sweetener) {
        this.base = base;
        this.fruits = fruits;
        this.sweetener = sweetener;
    }

    getDescription() {
        return `Smoothie with ${this.fruits.join(', ')} in a ${this.base} base, sweetened with ${this.sweetener}.`;
    }
}

function createSmoothie() {
    const base = document.getElementById('base').value;
    const selectedFruits = Array.from(document.querySelectorAll('input[name="fruits"]:checked')).map(input => input.value);
    const sweetener = document.querySelector('input[name="sweetener"]:checked').value;

    const smoothie = new Smoothie(base, selectedFruits, sweetener);
    const smoothieOutput = document.getElementById('smoothieOutput');
    smoothieOutput.innerHTML = smoothie.getDescription();
}
