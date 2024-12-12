import db from '../config/connection.js';
import { User, Thought } from '../models/index.js';

const seedDatabase = async () => {
  try {
    await db();

    // Clear Data
    await User.deleteMany({});
    await Thought.deleteMany({});
    console.log('Database cleared successfully!');

    // Seed Users
    const users = await User.insertMany([
      { username: 'henry1', email: 'henry@example.com' },
      { username: 'susan99', email: 'susan@example.com' },
      { username: 'james23', email: 'james@example.com' },
      { username: 'linda88', email: 'linda@example.com' },
    ]);

    // Establish Friend Relationships
    await User.findOneAndUpdate(
      { username: 'henry1' },
      { $addToSet: { friends: [users[1]._id, users[2]._id] } }
    );

    await User.findOneAndUpdate(
      { username: 'susan99' },
      { $addToSet: { friends: [users[0]._id, users[3]._id] } }
    );

    // Seed Thoughts
    const thoughts = [
      {
        thoughtText: 'This is my first thought!',
        username: 'henry1',
        reactions: [{ reactionBody: '😄', username: 'susan99' }],
      },
      {
        thoughtText: 'Coding is awesome!',
        username: 'susan99',
        reactions: [{ reactionBody: '🔥', username: 'henry1' }],
      },
      {
        thoughtText: 'I love learning new technologies!',
        username: 'james23',
        reactions: [{ reactionBody: '💻', username: 'linda88' }],
      },
      {
        thoughtText: 'MongoDB is powerful!',
        username: 'linda88',
        reactions: [{ reactionBody: '🚀', username: 'henry1' }],
      },
      {
        thoughtText: 'Backend development is fun!',
        username: 'henry1',
        reactions: [{ reactionBody: '🎯', username: 'james23' }],
      },
      {
        thoughtText: 'Looking forward to the next project!',
        username: 'susan99',
        reactions: [{ reactionBody: '🙌', username: 'henry1' }],
      },
      {
        thoughtText: 'Express makes building APIs easy!',
        username: 'james23',
        reactions: [{ reactionBody: '💥', username: 'linda88' }],
      },
    ];

    await Thought.insertMany(thoughts);

    console.log('Database seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Database seeding error:', error);
    process.exit(1);
  }
};

seedDatabase();
