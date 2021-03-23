const Manager = require('../lib/Manager.js');

test('creates a manager object', () => {
    const manager = new Manager('John', 4, 'John@gmail.com', 14);
  
    expect(manager.getOfficeNumber()).toBe(14);
    expect(manager.getRole()).toBe('Manager');
});

