const User = require('./User');
module.exports = {

  Query: {
    users: () => User.find(),
    user: (_, { id }) => User.findById(id),
  },

  Mutation: {
    createUser: (_, { name, email }) => User.create({ name, email}),
    editUser: (_, { name, email }) => User.updateOne({ name, email}),
    deleteUser: (_, { name, email }) => User.deleteOne({ name, email}),

  },

};