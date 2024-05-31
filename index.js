#!/usr/bin/env node
// TypeScript OOP project
import inquirer from "inquirer";
import chalk from "chalk";
class Person {
    _personality;
    constructor() {
        this._personality = 'Mystery';
    }
    // User input method
    userInput(input) {
        // if / else statement to determine personality
        if (input.includes("talk to others about myself")) {
            this._personality = "happy";
        }
        else if (input.includes("keep quiet and don't ask questions")) {
            this._personality = "reserved";
        }
        else if (input.includes("prefer reading books over socializing")) {
            this._personality = "introverted";
        }
        else if (input.includes("enjoy meeting new people")) {
            this._personality = "extroverted";
        }
    }
    // Getter for personality
    get personality() {
        return this._personality;
    }
}
// Main class to handle the interaction
class Main {
    async main() {
        // Await call out with multiple questions
        const result = await inquirer.prompt([
            {
                type: "list",
                name: "choice1",
                message: chalk.yellowBright("How do you behave in social settings?"),
                choices: [
                    "1: talk to others about myself.",
                    "2: keep quiet and don't ask questions."
                ]
            },
            {
                type: "list",
                name: "choice2",
                message: chalk.yellowBright("What is your preferred activity?"),
                choices: [
                    "1: prefer reading books over socializing.",
                    "2: enjoy meeting new people."
                ]
            }
        ]);
        // Create a Person object
        let myPerson = new Person();
        // Process the first choice
        myPerson.userInput(result.choice1);
        // Process the second choice
        myPerson.userInput(result.choice2);
        // Output response
        console.log(chalk.redBright(`You are ${myPerson.personality}`));
    }
}
const myObject = new Main();
myObject.main();
