export default class CalculatorModel {
    constructor() {
      this.expression = '';
      this.mode = 'infix'; // Default mode is infix notation
    }
  
    setExpression(expression) {
      this.expression = expression;
    }
  
    evaluateExpression() {
      try {
        return eval(this.expression);
      } catch (error) {
        return 'Error';
      }
    }
  
    setMode(mode) {
      this.mode = mode;
    }
  }
  