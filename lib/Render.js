const fs = require('fs');
const path = require('path');
//


class Render {
    constructor(team) {
        this.team = team;
       
    }

    render() {
        const template = path.join(__dirname, '../src/templates/main.html')
        let content = fs.readFileSync(template, 'utf-8')
        const cards = []
        this.team.forEach(member => {
            cards.push(this.renderCard(member))
        })
        content = this.substitute({
            body: cards.join('')

        }, content)
        const output = path.join(__dirname, '../dist/index.html')
        fs.writeFileSync(output, content)
    }

    // is memberType creating a problem for getRole?
    renderCard(teamMember) {
        const memberType = teamMember.getRole().toLowerCase()
        const template = path.join(__dirname, `../src/templates/${memberType}.html`)
        let content = fs.readFileSync(template, 'utf-8')
        teamMember.role = teamMember.getRole();
        return this.substitute(teamMember, content)

    };


    substitute(data, templateString) {

        Object.keys(data).forEach(key => {
            const pattern = new RegExp(`{{${key}}}`, 'g')
            let value = data[key]


            templateString = templateString.replace(pattern, value)
        })

        return templateString;
    }
};

module.exports = Render;