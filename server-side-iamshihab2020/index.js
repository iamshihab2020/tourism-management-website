const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000;
require("dotenv").config();

//! middleware
app.use(cors());
app.use(express.json());

const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.SECRET_KEY}@cluster2024.kjdp6b2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster2024`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();

    const touristSpotCollection = client
      .db("touristSpotDB")
      .collection("touristSpots");

    app.get("/touristSpots", async (req, res) => {
      const cursor = touristSpotCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    });

    app.get("/touristSpots/user/:user_email", async (req, res) => {
      const user_email = req.params.user_email;
      const cursor = touristSpotCollection.find({ user_email });
      const result = await cursor.toArray();
      res.send(result);
    });

    app.get("/touristSpots/:id", async (req, res) => {
      const id = req.params.id;
      if (!ObjectId.isValid(id)) {
        return res.status(400).json({ error: "Invalid ID" });
      }
      const query = { _id: new ObjectId(id) };
      const result = await touristSpotCollection.findOne(query);
      res.send(result);
    });


    app.post("/touristSpots", async (req, res) => {
      const addNewTouristSpot = req.body;
      console.log(addNewTouristSpot);
      const result = await touristSpotCollection.insertOne(addNewTouristSpot);
      res.send(result);
    });

    app.delete("/touristSpots/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await touristSpotCollection.deleteOne(query);
      res.send(result);
    });

    app.put("/touristSpots/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const updatedSpot = req.body;
      const theSpot = {
        $set: {
          tourists_spot_name: updatedSpot.tourists_spot_name,
          location: updatedSpot.location,
          country_name: updatedSpot.country_name,
          region: updatedSpot.region,
          short_description: updatedSpot.short_description,
          avg_cost: updatedSpot.avg_cost,
          seasonality: updatedSpot.seasonality,
          travel_time: updatedSpot.travel_time,
          totalVisitorsPerYear: updatedSpot.totalVisitorsPerYear,
          photo_url: updatedSpot.photo_url,
        },
      };

      const result = await touristSpotCollection.updateOne(
        filter,
        theSpot,
        options
      );
      res.send(result);
    });

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Tourism server running");
});

app.listen(port, () => {
  console.log(`Tourism server listening on ${port}`);
});
