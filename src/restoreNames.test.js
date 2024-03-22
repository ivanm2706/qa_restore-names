'use strict';

describe('restoreNames', () => {
  const { restoreNames } = require('./restoreNames');

  it('should declare', () => {
    expect(restoreNames).toBeInstanceOf(Function);
  });

  it('should restore firstName field', () => {
    const users = [
      {
        firstName: undefined,
        lastName: 'Holy',
        fullName: 'Jack Holy',
      },
      {
        lastName: 'Adams',
        fullName: 'Mike Adams',
      },
    ];

    const expectedResult = [
      {
        firstName: 'Jack',
        lastName: 'Holy',
        fullName: 'Jack Holy',
      },
      {
        firstName: 'Mike',
        lastName: 'Adams',
        fullName: 'Mike Adams',
      },
    ];

    restoreNames(users);

    expect(users).toEqual(expectedResult);
  });
});
