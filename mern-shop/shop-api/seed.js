const { Seeder } = require("mongo-seeding");
const path = require("path");

const collectionsPath = path.resolve("./data");

const config = {
  database: "mongodb://localhost:27017/mern-shop",
  dropDatabase: true,
};

const seeder = new Seeder(config);

const collections = seeder.readCollectionsFromPath(collectionsPath);

const seedDB = async () => {
  try {
    await seeder.import(collections);
    console.log("\n\n Database seeded successfully!");
    process.exit(0);
  } catch (err) {
    console.log(err);
    console.log("Error while seeding database");
    process.exit(1);
  }
};

seedDB();
