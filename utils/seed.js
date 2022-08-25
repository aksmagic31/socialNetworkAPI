const connection = require("../config/connection");
const { User, Thought } = require("../models");

// USER SEED DATA
const seedData = [
    {
        username: 'TimDuncan',
        email: 'TD@spurs.com',
    },
    {
        username: 'JohnStockton',
        email: 'AssistKing@jazz.com',
    },
    {
        username: 'PaulPierce',
        email: 'Truth@celtics.com',
    },
    {
        username: 'StephCurry',
        email: 'splashNotBro@warriors.com',
    },
]


// SEED DATABASE
connection.once("open", async () => {

    // DEL EXISTING SEED
    await User.deleteMany({});
    await Thought.deleteMany({});

    // INSERT TO DB
    await User.collection.insertMany(seedData);
    console.log("Users successfully seeded!");

    console.info(' --- Seeding complete! ---');
    console.table(seedData)
    process.exit(0);
});

