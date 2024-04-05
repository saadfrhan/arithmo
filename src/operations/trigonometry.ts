import { toRadians } from "../utils/toRadians.js";

export function tan(expression: string[]) {
  const angleIndex = expression.indexOf("tan") + 1;
  const angle = parseFloat(expression[angleIndex]);
  expression[angleIndex] = Math.tan(toRadians(angle)).toString();
  expression.splice(expression.indexOf("tan"), 1);
  return expression;
}

export function cos(expression: string[]) {
  const angleIndex = expression.indexOf("cos") + 1;
  const angle = parseFloat(expression[angleIndex]);
  expression[angleIndex] = Math.cos(toRadians(angle)).toString();
  expression.splice(expression.indexOf("cos"), 1);
  return expression;
}

export function sin(expression: string[]) {
  const angleIndex = expression.indexOf("sin") + 1;
  const angle = parseFloat(expression[angleIndex]);
  expression[angleIndex] = Math.sin(toRadians(angle)).toString();
  expression.splice(expression.indexOf("sin"), 1);
  return expression;
}
