const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
const PORT = 3001; // Port for the proxy server

// Enable CORS for all routes
app.use(cors());
app.use(express.json());

// Proxy endpoint
app.post("/api/proxy", async (req, res) => {
  try {
    const { query } = req.body; // Extract the query from the frontend request

    if (!query) {
      return res.status(400).json({ error: "Query is required" });
    }

    console.log("Received query:", query);

    // Forward the request to the target API with the actual query
    const response = await axios.post(
      "http://165.73.253.224/api/bitbot/respond",
      { query }
    );

    // Send the response back to the frontend
    res.json(response.data);
  } catch (error) {
    console.error("Proxy error:", error.message);
    res.status(500).json({ error: "Something went wrong" });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Proxy server running on http://localhost:${PORT}`);
});
