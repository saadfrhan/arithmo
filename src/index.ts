import inquirer from 'inquirer';
import { performCalculation } from './calc_func';
import { questions } from './questions';

export interface AnswersI {
  first_num: number;
  operation: string;
  second_num: number;
}

inquirer.prompt(questions).then((answers: AnswersI) => {
  performCalculation({
    first_num: Number(answers.first_num),
    operation: answers.operation,
    second_num: Number(answers.second_num)
  });
});
