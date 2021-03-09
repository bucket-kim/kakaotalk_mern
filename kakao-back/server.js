// importing
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import Messages from "./dbMessages.js";
import Pusher from "pusher";

// app config
const app = express();
const PORT = process.env.PORT || 9000;

const pusher = new Pusher({
  appId: "1158672",
  key: "f59d9cb1a9957b03781e",
  secret: "9506764429b738ca0aba",
  cluster: "ap3",
  useTLS: true,
});

// middleware
app.use(express.json());
app.use(cors());

// DB config
const connection_url =
  "mongodb+srv://kakao-admin:O5sCWqqTzM1D3DIL@cluster0.taddv.mongodb.net/kakao-backend?retryWrites=true&w=majority";

mongoose.connect(connection_url, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.once("open", () => {
  console.log("db connected");

  const msgCollection = db.collection("messagecontents");
  const changeStream = msgCollection.watch();

  changeStream.on("change", (change) => {
    if (change.operationType === "insert") {
      const messageDetails = change.fullDocument;
      pusher.trigger("messages", "inserted", {
        name: messageDetails.name,
        message: messageDetails.message,
        received: messageDetails.received,
      });
    } else {
      console.log("Something's wrong");
    }
  });
});

// api routes
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/message/get", (req, res) => {
  Messages.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

app.post("/message/new", (req, res) => {
  const dbMessage = req.body;

  Messages.create(dbMessage, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

// listen
app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
