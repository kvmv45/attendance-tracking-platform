// backend/seed.js
const mongoose = require('mongoose');
const User = require('./models/User');
require('dotenv').config();

const users = [
  { username: 'guard1', password: 'password1', role: 'guard' },
  { username: 'guard2', password: 'password2', role: 'guard' },
  { username: 'guard3', password: 'password3', role: 'guard' },
  { username: 'admin1', password: 'password4', role: 'admin' },
  { username: 'admin2', password: 'password5', role: 'admin' },
];

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to MongoDB');

    await User.deleteMany({});

    for (const user of users) {
      const newUser = new User(user);
      await newUser.save();
      console.log(`Created user: ${user.username}`);
    }

    console.log('Database seeded successfully');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    mongoose.connection.close();
  }
};

seedDatabase();
