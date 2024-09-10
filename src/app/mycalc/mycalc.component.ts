import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-mycalc',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './mycalc.component.html',
  styleUrl: './mycalc.component.scss',
})
export class MycalcComponent {
  displayValue: string = '0';
  firstOperand: number | null = null;
  operator: string | null = null;
  waitingForSecondOperand: boolean = false;

  inputDigit(digit: number) {
    if (this.waitingForSecondOperand) {
      this.displayValue = String(digit);
      this.waitingForSecondOperand = false;
    } else {
      this.displayValue = this.displayValue === '0' ? String(digit) : this.displayValue + digit;
    }
  }

  inputDecimal() {
    if (!this.displayValue.includes('.')) {
      this.displayValue += '.';
    }
  }

  clear() {
    this.displayValue = '0';
    this.firstOperand = null;
    this.operator = null;
    this.waitingForSecondOperand = false;
  }

  toggleSign() {
    this.displayValue = this.displayValue.charAt(0) === '-' ? this.displayValue.slice(1) : '-' + this.displayValue;
  }

  percent() {
    const currentValue = parseFloat(this.displayValue);
    if (currentValue === 0) return;
    this.displayValue = String(currentValue / 100);
  }

  setOperator(nextOperator: string) {
    const inputValue = parseFloat(this.displayValue);

    if (this.firstOperand === null) {
      this.firstOperand = inputValue;
    } else if (this.operator) {
      const result = this.performCalculation(this.operator, this.firstOperand, inputValue);
      this.displayValue = String(result);
      this.firstOperand = result;
    }

    this.operator = nextOperator;
    this.waitingForSecondOperand = true;
  }

  calculate() {
    if (this.firstOperand === null || this.operator === null) {
      return;
    }

    const secondOperand = parseFloat(this.displayValue);
    const result = this.performCalculation(this.operator, this.firstOperand, secondOperand);

    this.displayValue = String(result);
    this.firstOperand = null;
    this.operator = null;
    this.waitingForSecondOperand = false;
  }

  performCalculation(operator: string, firstOperand: number, secondOperand: number): number {
    switch (operator) {
      case 'add':
        return firstOperand + secondOperand;
      case 'subtract':
        return firstOperand - secondOperand;
      case 'multiply':
        return firstOperand * secondOperand;
      case 'divide':
        return firstOperand / secondOperand;
      default:
        return secondOperand;
    }
  }
}
