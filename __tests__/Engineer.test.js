const Engineer = require('../lib/Engineer.js');

test('creates a engineer object', () => {
    const engineer = new Engineer('Jeff', 2, 'Jeff@gmail.com', 'www.github.com/Jeffgit');
  
    expect(engineer.getRole()).toBe('Engineer');
    expect(engineer.getGithub()).toBe('www.github.com/Jeffgit');
    
});

