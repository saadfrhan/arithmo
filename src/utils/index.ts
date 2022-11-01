export function validateVal() {
  return (val: string) => {
    const isValid = Boolean(val);
    return isValid || 'Please enter a number';
  };
}
