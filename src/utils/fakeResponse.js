const user = {
  'id': 1,
  'username': 'johndoe',
  'email': 'johndoe@example.com',
  'name': 'John Doe',
  'avatar': null
};

const users = [{
    'id': 1,
    'username': 'johndoe',
    'email': 'johndoe@example.com',
    'name': 'John Doe',
    'avatar': null
},{
    'id': 2,
    'username': 'janedoe',
    'email': 'janedoe@example.com',
    'name': 'Jane Doe',
    'avatar': null
}];

export default {
  login: {
    data: {
      code: 200,
      meta: {
        token: 'JOHNDOEDUMMYTOKEN123##'
      },
      data: user
    }
  },
  user: {
    data: {
      code: 200,
      data: user
    }
  },
  users: {
      data: {
          code: 200,
          data: users
      }
  }
}
