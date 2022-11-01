export function validateVal() {
  return (val: string) => {
    const isValid = Boolean(val);
    return isValid || 'Please enter a number';
  };
}

export function presentAnswer(result: number) {
  console.log(`The answer is ${result}`);
}