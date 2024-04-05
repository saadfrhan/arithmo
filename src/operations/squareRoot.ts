export function sqrt(expression: string[]) {
  const numberIndex = expression.indexOf("sqrt") + 1;
  const number = parseFloat(expression[numberIndex]);
  expression[numberIndex] = Math.sqrt(number).toString();
  expression.splice(expression.indexOf("sqrt"), 1);
  return expression;
}
