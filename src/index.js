// Importing modules
import CalculatorModel from './model.js';
import CalculatorController from './controller.js';
import CalculatorView from './view.js';

// Initializing model, controller, and view
const calculatorModel = new CalculatorModel();
const calculatorController = new CalculatorController(calculatorModel);
const calculatorView = new CalculatorView(calculatorController);
