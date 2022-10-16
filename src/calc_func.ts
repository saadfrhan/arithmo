import AnswersI from './ts/interfaces';

export const performCalculation = ({ first_num, operation, second_num }: AnswersI) => {
  let result = 0;
  switch (operation) {
    case 'add':
      result = first_num + second_num;
      break;
    case 'subtract':
      result = first_num - second_num;
      break;
    case 'multiply':
      result = first_num * second_num;
      break;
    case 'divide':
      result = first_num / second_num;
      break;
    default:
      result;
  }
  console.log(`Answer: ${result}`);
}