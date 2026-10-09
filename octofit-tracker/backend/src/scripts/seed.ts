import mongoose from 'mongoose';
import { Activity } from '../models/Activity.js';
import { Leaderboard } from '../models/Leaderboard.js';
import { Team } from '../models/Team.js';
import { User } from '../models/User.js';
import { Workout } from '../models/Workout.js';

const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit_db';

/**
 * Seed the octofit_db database with test data
 */
async function seedDatabase() {
  try {
    await mongoose.connect(connectionString);

    console.log('Connected to octofit_db');
    console.log('Seed the octofit_db database with test data');

    await Promise.all([
      Activity.deleteMany({}),
      Leaderboard.deleteMany({}),
      Workout.deleteMany({}),
      Team.deleteMany({}),
      User.deleteMany({}),
    ]);

    const [maya, jordan, priya, sam] = await User.create([
      {
        name: 'Maya Chen',
        email: 'maya.chen@example.com',
        profile: {
          age: 31,
          fitnessGoal: 'Build endurance for a spring half marathon',
          favoriteActivity: 'Trail running',
        },
      },
      {
        name: 'Jordan Taylor',
        email: 'jordan.taylor@example.com',
        profile: {
          age: 27,
          fitnessGoal: 'Improve strength and mobility',
          favoriteActivity: 'Functional strength training',
        },
      },
      {
        name: 'Priya Nair',
        email: 'priya.nair@example.com',
        profile: {
          age: 36,
          fitnessGoal: 'Maintain consistency with low-impact workouts',
          favoriteActivity: 'Cycling',
        },
      },
      {
        name: 'Sam Rivera',
        email: 'sam.rivera@example.com',
        profile: {
          age: 42,
          fitnessGoal: 'Increase weekly active minutes',
          favoriteActivity: 'Rowing',
        },
      },
    ]);

    const [solarSprinters, kineticCrew] = await Team.create([
      {
        name: 'Solar Sprinters',
        mascot: 'Pulse',
        members: [maya._id, priya._id],
      },
      {
        name: 'Kinetic Crew',
        mascot: 'Vector',
        members: [jordan._id, sam._id],
      },
    ]);

    await Activity.create([
      {
        user: maya._id,
        type: 'Run',
        durationMinutes: 48,
        caloriesBurned: 430,
        activityDate: new Date('2026-10-02T06:30:00Z'),
      },
      {
        user: jordan._id,
        type: 'Strength circuit',
        durationMinutes: 42,
        caloriesBurned: 360,
        activityDate: new Date('2026-10-03T17:45:00Z'),
      },
      {
        user: priya._id,
        type: 'Cycling',
        durationMinutes: 55,
        caloriesBurned: 510,
        activityDate: new Date('2026-10-04T12:15:00Z'),
      },
      {
        user: sam._id,
        type: 'Rowing',
        durationMinutes: 35,
        caloriesBurned: 390,
        activityDate: new Date('2026-10-05T05:50:00Z'),
      },
    ]);

    await Leaderboard.create([
      {
        user: priya._id,
        team: solarSprinters._id,
        rank: 1,
        weeklyPoints: 1260,
        totalPoints: 8410,
      },
      {
        user: maya._id,
        team: solarSprinters._id,
        rank: 2,
        weeklyPoints: 1185,
        totalPoints: 7980,
      },
      {
        user: sam._id,
        team: kineticCrew._id,
        rank: 3,
        weeklyPoints: 1090,
        totalPoints: 7645,
      },
      {
        user: jordan._id,
        team: kineticCrew._id,
        rank: 4,
        weeklyPoints: 980,
        totalPoints: 7210,
      },
    ]);

    await Workout.create([
      {
        title: 'Tempo Run Builder',
        focusArea: 'Cardio endurance',
        difficulty: 'Intermediate',
        estimatedMinutes: 45,
        suggestedFor: [maya._id],
        exercises: ['10-minute warmup jog', '4 tempo intervals', 'Cooldown walk'],
      },
      {
        title: 'Strength and Mobility Reset',
        focusArea: 'Full-body strength',
        difficulty: 'Beginner',
        estimatedMinutes: 35,
        suggestedFor: [jordan._id, sam._id],
        exercises: ['Goblet squats', 'Pushups', 'Hip mobility flow', 'Plank holds'],
      },
      {
        title: 'Low-impact Power Ride',
        focusArea: 'Cardio conditioning',
        difficulty: 'Intermediate',
        estimatedMinutes: 40,
        suggestedFor: [priya._id],
        exercises: ['Cadence drills', 'Seated climbs', 'Recovery spin'],
      },
    ]);

    console.log('Database seeding complete');
    await mongoose.disconnect();
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();
