const users = {
  4: { name: 'Mark' },
  5: { name: 'Paul' }
};

const findUserById = (id) => {
  return new Promise((resolve, reject) => {
    if (users[id]) {
      return resolve(users[id]);
    }

    return reject({ error: 'User with ' + id + ' not found.' });
  });
}

const getUserName = (userID) => {
  return findUserById(userID).then(user => user.name);
}

describe('Verify result of the function getUsername',()=>{
  it('when the user id exists',async()=>{
    expect.assertions(1);
    const data= await getUserName(4).then(data=>expect(data).toEqual('Mark'));
  })
  it('when the user id does not exists',async()=>{
    expect.assertions(1);
    try {
      await getUserName(1);
    } catch (error) {
      expect(error).toEqual({error: 'User with 1 not found.'});
    }
  })
})