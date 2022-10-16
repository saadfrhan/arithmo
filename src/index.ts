import inquirer from 'inquirer';
import { questions } from './questions';

import AnswersI from './ts/interfaces';

import { performCalculation } from './calc_func';

inquirer.prompt(questions).then((answers: AnswersI) => {
  performCalculation({
    first_num: Number(answers.first_num),
    operation: answers.operation,
    second_num: Number(answers.second_num)
  });
});
