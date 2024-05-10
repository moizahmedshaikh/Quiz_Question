#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bold.italic.blueBright("<<<-------------------------------------------------------------->>>"));
console.log(chalk.italic.bold.yellow("<<<>----------------------- QUIZ START -------------------------<>>>"));
console.log(chalk.bold.italic.blueBright("<<<<------------------------------------------------------------->>>"));
const questions = await inquirer.prompt([
    {
        name: "myName",
        type: "input",
        message: "Enter your first Name",
    },
    {
        name: "q1",
        type: "list",
        message: "What is typeScript: ",
        choices: [
            "A. A superset of javaScript",
            "B. A statically typed language that compile to plane javaScript",
            "C. A programming language Developed by Microsoft",
            "D. All of the Above",
        ],
    },
    {
        name: "q2",
        type: "list",
        message: "What command complies TypeScript files in a project:",
        choices: ["A. tsc", "B. compile", "C. ts-compile", "D. typescript"],
    },
    {
        name: "q3",
        type: "list",
        message: "What is the purpose of using TypeScript over JavaScript :",
        choices: [
            "A. to make code execution faster",
            "B. To enforce Static Typing and catch error at compile time",
            "C. To enable access to browser specific APIs",
            "D. To reduce the need for testing",
        ],
    },
    {
        name: "q4",
        type: "list",
        message: "Which keyword is used to export elements from a module :",
        choices: ["A. out", "B. export", "C. external", "D. expose"],
    },
    {
        name: "q5",
        type: "list",
        message: "What is the purpose of the Inquirer module in TypeScript application :",
        choices: [
            "A. To handle HTTP requests",
            "B. To create interactive command-line interfaces ",
            "C. To manage dataBase connections",
            "D. To generate documentation",
        ],
    },
    {
        name: "q6",
        type: "list",
        message: "Consider the following Code : \n //module2.ts\n\n export default function greet() {\n console.log('Hello');\n }\nWhich Statement correctly imports the greet function from 'module2.ts'",
        choices: [
            "A. import {greet} from './module2';",
            "B. import greet from './module2';",
            "C. import {greet} from 'module2';",
            "D. import greet from 'module2';",
        ],
    },
    {
        name: "q7",
        type: "list",
        message: "Which of the following best describes JSON :",
        choices: [
            "A. A data format used exclusively by JavaScript",
            "B. A text based Data format used for storing and transferring data",
            "C. A markup language for creating web Pages",
            "D. A programming language for server-side scripting",
        ],
    },
    {
        name: "q8",
        type: "list",
        message: "What is the correct Syntax for defining a JSON object :",
        choices: [
            "A. {key:value}",
            "B. {'key':'value'}",
            "C. [key:value]",
            "D. ['key':'value']",
        ],
    },
    {
        name: "q9",
        type: "list",
        message: "What type of assgnment in this variable :\n const fullName:string = 'Dylan Israel';",
        choices: ["A. explicit", "B. implicit", "C. dynamic"],
    },
    {
        name: "q10",
        type: "list",
        message: "What are the two types of enums :",
        choices: [
            "A. string and Boolean",
            "B. string and number",
            "C. Number and Boolean",
            "D. Number and Number Array",
        ],
    },
]);
let score = 0;
switch (questions.q1) {
    case "D. All of the Above":
        console.log(chalk.italic.bold.greenBright("1. Correct !"));
        ++score;
        break;
    default:
        console.log(chalk.bold.red("1. Incorrect !"));
}
switch (questions.q2) {
    case "A. tsc":
        console.log(chalk.italic.bold.greenBright("1. Correct !"));
        ++score;
        break;
    default:
        console.log(chalk.bold.red("1. Incorrect !"));
}
switch (questions.q3) {
    case "B. To enforce Static Typing and catch error at compile time":
        console.log(chalk.italic.bold.greenBright("1. Correct !"));
        ++score;
        break;
    default:
        console.log(chalk.bold.red("1. Incorrect !"));
}
switch (questions.q4) {
    case "B. export":
        console.log(chalk.italic.bold.greenBright("1. Correct !"));
        ++score;
        break;
    default:
        console.log(chalk.bold.red("1. Incorrect !"));
}
switch (questions.q5) {
    case "B. To create interactive command-line interfaces ":
        console.log(chalk.italic.bold.greenBright("1. Correct !"));
        ++score;
        break;
    default:
        console.log(chalk.bold.red("1. Incorrect !"));
}
switch (questions.q6) {
    case "A. import {greet} from './module2';":
        console.log(chalk.italic.bold.greenBright("1. Correct !"));
        ++score;
        break;
    default:
        console.log(chalk.bold.red("1. Incorrect !"));
}
switch (questions.q7) {
    case "B. A text based Data format used for storing and transferring data":
        console.log(chalk.italic.bold.greenBright("1. Correct !"));
        ++score;
        break;
    default:
        console.log(chalk.bold.red("1. Incorrect !"));
}
switch (questions.q8) {
    case "B. {'key':'value'}":
        console.log(chalk.italic.bold.greenBright("1. Correct !"));
        ++score;
        break;
    default:
        console.log(chalk.bold.red("1. Incorrect !"));
}
switch (questions.q9) {
    case "A. explicit":
        console.log(chalk.italic.bold.greenBright("1. Correct !"));
        ++score;
        break;
    default:
        console.log(chalk.bold.red("1. Incorrect !"));
}
switch (questions.q10) {
    case "B. string and number":
        console.log(chalk.italic.bold.greenBright("1. Correct !"));
        ++score;
        break;
    default:
        console.log(chalk.bold.red("1. Incorrect !"));
}
console.log(chalk.italic.blue(`\n\t <<<<---- ${chalk.bold.magenta(questions.myName)}: Score ${chalk.bold.magenta(score)} out of ${chalk.bold.magenta(10)} ---->>>> 👍`));
