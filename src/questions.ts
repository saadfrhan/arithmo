export const questions = [
  {
    type: 'input',
    name: 'first_num',
    message: 'Enter a first number:',
    validate: validateVal()
  },
  {
    type: 'list',
    name: 'operation',
    message: 'Choose an operation:',
    choices: [
      "Add",
      "Subtract",
      "Multiply",
      "Divide"
    ],
    filter: (val: string) => val.toLowerCase(),
    validate: validateVal()
  },
  {
    type: 'input',
    name: 'second_num',
    message: 'Enter a second number:',
    validate: validateVal(),
  },
]

function validateVal() {
  return (val: string) => {
    const isValid = Boolean(val);
    return isValid || 'Please enter a number';
  };
}
