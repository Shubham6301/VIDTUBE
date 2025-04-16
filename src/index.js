import dotenv from "dotenv";
import { app } from "./app.js";
import connectDB from "./db/index.js"; // Ensure the correct relative path to index.js

// Load environment variables
dotenv.config({ path: "./.env" });

const PORT = process.env.PORT || 8001;
connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log("MongoDB connection error:", err);
    process.exit(1); // Exit the process to signal the failure
  });
