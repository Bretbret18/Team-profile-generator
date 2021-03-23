const Intern = require('../lib/Intern.js');

test('creates an intern object', () => {
    const intern = new Intern('Mark', 3, 'Mark@gmail.com', 'School');
  
    expect(intern.getSchool()).toBe('School');
    expect(intern.getRole()).toBe('Intern');
});

