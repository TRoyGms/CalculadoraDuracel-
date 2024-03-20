export default class CalculatorView {
    constructor(controller) {
      this.controller = controller;
      this.display = document.getElementById('display');
      this.buttons = document.querySelectorAll('.buttons button');
      this.attachEvents();
    }
  
    attachEvents() {
      this.buttons.forEach(button => {
        button.addEventListener('click', () => {
          const value = button.textContent;
          if (value === '=') {
            this.controller.calculate();
          } else if (value === 'C') {
            this.controller.clear();
          } else {
            this.controller.addToDisplay(value);
          }
        });
      });
    }
  
    updateDisplay(expression) {
      this.display.value = expression;
    }
  }
  