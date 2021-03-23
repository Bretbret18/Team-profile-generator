const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const Render = require('./lib/Render');


const questionTemplate = [
    {
        name: 'name',
        message: 'What is the employee\'s name?',
    },
    {
        name: 'id',
        message: 'What is the employee\'s id?'
    },
    {
        name: 'email',
        message: 'What is the employee\'s email address?'
    },

]


const employeeTypes = {
    Manager, Intern, Engineer
};


const employeeTypesQuestions = {
    Manager: {
        name: 'officeNumber',
        message: 'What is the office number?'
    },

    Intern: {
        name: 'school',
        message: 'Where did this intern go to school?'
    },

    Engineer: {
        name: 'github',
        message: 'What is this Engineer\'s github account?'
    }

};



function getQuestions(employeeType) {
    return [...questionTemplate, employeeTypesQuestions[employeeType]]

};


const program = {
    team: [

    ],

    async start() {
        await this.addEmployee('Manager')

    },
    async addEmployee(employeeType) {
        const answers = await inquirer.prompt(getQuestions(employeeType))
        const keys = Object.keys(answers);

        let employee = new employeeTypes[employeeType](answers[keys[0]], answers[keys[1]], answers[keys[2]], answers[keys[3]]);
        this.team.push(employee)
        const nextStep = await inquirer.prompt([{
            name: 'nextStep',
            message: 'Do you want to add another employee?',
            type: 'list',
            choices: [
                { name: 'Choose Intern', value: 'Intern' },
                { name: 'Choose Engineer', value: 'Engineer' },
                { name: 'Finished adding team members', value: false }
            ]
        }])
        if (nextStep.nextStep) {
            await this.addEmployee(nextStep.nextStep)
        } else {
            this.generatePage()
        }
    },

    generatePage() {
        const render = new Render(this.team)
        render.render()
        console.log('Your team has been created!')
    }

};


program.start()




