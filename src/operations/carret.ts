export function carret(expression: string[], item: `${string}^${string}`) {
  const [base, exponent] = item.split("^");
  const result = Math.pow(parseFloat(base), parseFloat(exponent));
  expression.splice(expression.indexOf(item), 1, result.toString());
}
