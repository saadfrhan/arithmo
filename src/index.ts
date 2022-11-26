#!/usr/bin/env node

import chalk from 'chalk';
import chalkAnimation from 'chalk-animation';
import { sleep } from './utils/index.js';

import inquirer from 'inquirer';
import { questions } from './questions.js';

import AnswersI from './ts';
import { performCalculation } from './calc_func.js';

async function welcome() {
  const rainbowTitle = chalkAnimation.rainbow('Welcome to the CLI Calculator!');
  await sleep();
  console.log(`
    ${chalk.bgBlue('Instructions ')}
    ${chalk.blue('1.')} Choose an operation.
    ${chalk.blue('2.')} Enter a first number.
    ${chalk.blue('3.')} Enter a second number.
    ${chalk.blue('4.')} Press enter to see the answer.  
  `)
  rainbowTitle.stop();
  await sleep(1000);
}

export default async function promptQuestions() {
  const answers = await inquirer.prompt(questions);
  return performCalculation(answers as AnswersI);
}

await welcome();
await promptQuestions();