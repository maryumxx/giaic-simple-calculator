#! /usr/bin/env node
import inquirer from "inquirer";
//tow input variables, num1 and num2 done
//take input from the user to perform operations done
//use if else for the back end done
//output
const answer = await inquirer.prompt([
    {
        message: 'Enter your first number: ',
        type: 'number',
        name: 'num1'
    },
    {
        message: 'Enter your second number: ',
        type: 'number',
        name: 'num2'
    },
    {
        message: 'Choose an operator that you want to use: ',
        type: 'list',
        name: 'operator',
        choices: ['Addition', 'Subtraction', 'Multiplication', 'Division', 'Modulus']
    }
]);
if (answer.operator === 'Addition') {
    console.log(`The answer is ${answer.num1 + answer.num2}`);
}
else if (answer.operator === 'Subtraction') {
    console.log(`The answer is ${answer.num1 - answer.num2}`);
}
else if (answer.operator === 'Multiplication') {
    console.log(`The answer is ${answer.num1 * answer.num2}`);
}
else if (answer.operator === 'Division') {
    console.log(`The answer is ${answer.num1 / answer.num2}`);
}
else if (answer.operator === 'Modulus') {
    console.log(`The answer is ${answer.num1 % answer.num2}`);
}
