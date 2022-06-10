const mongoose = require("mongoose");

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log(`database: mongodb connected ✅✅✅`);
  } catch (error) {
    console.error(`error while connecting with mongodb: ${error}`);
  }
};

module.exports = dbConnect;
