const Employee = require('../lib/Employee.js');

test('creates an employee object', () => {
    const employee = new Employee('Dave', 1, 'dave@gmail.com');

    expect(employee.getRole()).toBe('Employee');
    expect(employee.getName()).toBe('Dave');
    
  });

 