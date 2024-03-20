import CalculatorModel from './model.js'

export default class CalculatorController {
    constructor(model) {
      this.model = model;
    }
  
    addToDisplay(value) {
      this.model.expression += value;
      this.updateDisplay();
    }
  
    clear() {
      this.model.expression = '';
      this.updateDisplay();
    }
  
    changeMode() {
      this.model.mode = this.model.mode === 'infix' ? 'prefix' : 'infix';
    }
  
    calculate() {
      if (this.model.mode === 'prefix') {
        this.model.expression = this.convertToInfix(this.model.expression);
      }
      const result = this.model.evaluateExpression();
      this.model.setExpression(result.toString());
      this.updateDisplay();
    }
  
    updateDisplay() {
      document.getElementById('display').value = this.model.expression;
    }
  
    // Helper function to convert prefix expression to infix
    convertToInfix(prefixExpression) {
      // To be implemented
      return 'infix expression';
    }
  }
  
  const calculatorModel = new CalculatorModel();
  const app = new CalculatorController(calculatorModel);