import chai from 'chai';
import { verifyCredentials, verifyPassword, verifyUserName } from '../src/login';
const assert = chai.assert;

describe('login', () => {
  it("should validate usernames that begin with 'customer' and end with a two digit number between 1 - 50", () => {
    const userName1 = verifyUserName('customer01');
    const userName2 = verifyUserName('customer25');
    const userName3 = verifyUserName('customer50');

    assert.equal(userName1.valid, true);
    assert.equal(userName2.valid, true);
    assert.equal(userName3.valid, true);
  });

  it('should return an id for valid usernames', () => {
    const userName1 = verifyUserName('customer01');
    const userName2 = verifyUserName('customer25');
    const userName3 = verifyUserName('customer50');

    assert.equal(userName1.id, 1);
    assert.equal(userName2.id, 25);
    assert.equal(userName3.id, 50);
  });

  it('should know if a username is invalid', () => {
    const userName1 = verifyUserName('customer00');
    const userName2 = verifyUserName('customer1');
    const userName3 = verifyUserName('cutomer25');
    const userName4 = verifyUserName('customer51');

    assert.equal(userName1.valid, false);
    assert.equal(userName2.valid, false);
    assert.equal(userName3.valid, false);
    assert.equal(userName4.valid, false);
  });

  it('should be case sensitive', () => {
    const userName = verifyUserName('CUSTOMER50');

    assert.equal(userName.valid, false);
  });

  it('should know if a username with the correct components and incorrect placement is invalid', () => {
    const userName = verifyUserName('50customer');

    assert.equal(userName.valid, false);
  });

  it('should not return an id for invalid usernames', () => {
    const userName = verifyUserName('50customer');

    assert.equal(userName.id, undefined);
  });

  it('should validate only one correct password', () => {
    const validPass = verifyPassword('overlook2021');

    assert.equal(validPass, true);
  });

  it('should be case sensitive', () => {
    const validPass = verifyPassword('OVERLOOK2021');

    assert.equal(validPass, false);
  });

  it('should invalidate another incorrect password', () => {
    const validPass = verifyPassword('overlook2020');

    assert.equal(validPass, false);
  });

  it('should very both username and password', () => {
    const validityCheck = verifyCredentials('customer50', 'overlook2021');

    assert.equal(validityCheck.valid, true)
  })

  it('should very a different user', () => {
    const validityCheck = verifyCredentials('customer01', 'overlook2021')

    assert.equal(validityCheck.valid, true)
  })

  it('should return user id', () => {
    const validityCheck = verifyCredentials('customer01', 'overlook2021')

    assert.equal(validityCheck.id, 1)
  })

  it('should have a false validity if username is invalid', () => {
    const validityCheck = verifyCredentials('customer00', 'overlook2021')

    assert.equal(validityCheck.valid, false)
  })

  it('should have a false validity if password is invalid', () => {
    const validityCheck = verifyCredentials('customer01', 'overlook2020')

    assert.equal(validityCheck.valid, false)
  })

  it('should have a false validity if both username and password are invalid', () => {
    const validityCheck = verifyCredentials('customer00', 'overlook2020')

    assert.equal(validityCheck.valid, false)
  })
});
