const mongoose = require("mongoose");
const app = require('./src/app')
require("dotenv").config();

const server = require("http").createServer(app);
//  ****** SOCKETS CONFIGURATION   ******   //
//establish socket.io connection
// const io = require("socket.io")(server, {
//   cors: {
//     origin: "*",
//     methods: ["GET", "POST"],
//   },
// });

// io.of("/api/socket").on("connection", (socket) => {
//   console.log("socket.io: User connected: ", socket.id);

//   socket.on("disconnect", () => {
//     console.log("socket.io: User disconnected: ", socket.id);
//   });
// });

const { MONGO_URI, PORT } = process.env;
const port = process.env.PORT || PORT;

// Connect to MongoDB
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;

connection.once("open", () => {
  console.log("MongoDB database connected");
  // ADD MONGO CHANGE STREAMS HERE
});

connection.on("error", (error) => console.log("Error: " + error));
server.listen(port, () => console.log(`Server started on port ${port}`));