const User = require("../models/User");

module.exports = {
  Query: {
    users: async () => await User.find(),
    user: async (_, { id }) => await User.findById(id),
  },

  Mutation: {
    addUser: async (_, { name, email, age }) => {
      const user = new User({ name, email, age });
      return await user.save();
    },

    deleteUser: async (_, { id }) => {
      await User.findByIdAndDelete(id);
      return "User deleted";
    },
  },
};
