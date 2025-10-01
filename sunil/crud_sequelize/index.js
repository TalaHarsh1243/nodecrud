  const express = require("express");
  const mongoose = require("mongoose");
  const songRoute = require("./Router/songRoute");

  const app = express();
  const PORT = 8090;
  app.use(express.json());
    
  mongoose.connect(
    "mongodb+srv://savaliyasunil25_db_user:25252525@cluster1.96n9rvq.mongodb.net/songs?retryWrites=true&w=majority&appName=Cluster1",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );

  app.use("/song", songRoute);

  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
  });