import inquirer from 'inquirer';
import { questions } from './questions';

import AnswersI from './ts/interfaces';

import { performCalculation } from './calc_func';

export default function promptQuestions() {
  inquirer.prompt(questions).then((answers: AnswersI) => performCalculation(answers));
}

promptQuestions();