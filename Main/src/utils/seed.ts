import db from '../config/connection';
import { User, Thought } from '../models/index';

const seedDatabase = async () => {
  try {
    await db();

    // Clear Data
    await User.deleteMany({});
    await Thought.deleteMany({});
    console.log('Database cleared successfully!');

    // Seed Users
    const users = [
      { username: 'henry1', email: 'henry@example.com' },
      { username: 'susan99', email: 'susan@example.com' },
      { username: 'james23', email: 'james@example.com' },
    ];

    await User.insertMany(users);

    // Seed Thoughts
    const thoughts = [
      {
        thoughtText: 'This is my first thought!',
        username: 'henry1',
        reactions: [{ reactionBody: '😄', username: 'susan99' }],
      },
      {
        thoughtText: 'This is my second thought!',
        username: 'susan99',
        reactions: [{ reactionBody: '😢', username: 'henry1' }],
      },
      {
        thoughtText: 'This is my third thought!',
        username: 'james23',
        reactions: [{ reactionBody: '😆', username: 'susan99' }],
      },
      {
        thoughtText: 'This is my fourth thought!',
        username: 'henry1',
        reactions: [{ reactionBody: '😢', username: 'susan99' }],
      },
    ];

    await Thought.insertMany(thoughts);

    console.log('Database seeded successfully!');
    process.exit(0);; // Close connection after seeding
  } catch (error) {
    console.error('Database seeding error:', error);
    process.exit(1);
  }
};

seedDatabase();
