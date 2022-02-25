import "dotenv/config";
// import * as mongo from "mongodb";
import { Db, MongoClient } from "mongodb";

const databaseUrl = process.env.MONGODB_DATABASE_URL || "";
const client = new MongoClient(databaseUrl);
client.connect().then((client) => {
  const db = client.db();
  // code here
  db.collection("actor").insertOne({ name: "ferez", firstname: "julien", moovies: "ssssdfdfsd" });

  const array = [
    {
      name: "ferez",
      firstname: "Julien",
      moovies: ["dsgqdgdfgw", "dgfdgdfgs"],
    },
    {
      name: "totott",
      firstname: "titit",
      moovies: ["dsgqdgsqdfdsdfgw", "dgfdgdfsqdfsfgs"],
    },
    {
      name: "QDFGFDGQD",
      firstname: "fdfdsFsd",
      moovies: ["dsgqfdsSFdsdgdfgw", "dgfdsdfgdfgs"],
    },
  ];
  db.collection("actor").insertMany(array);
});

// CREATION ACTOR

// CREATION DIRECTOR

db.collection("director").insertMany(
  {
    name: "directornameOne",
    firstname: "directorfirstnameOne",
    moovies: ["dsgqdgdfgw", "dgfdgdfgs"],
  },
  {
    name: "directornameTwo",
    firstname: "titit",
    moovies: ["dsgqdgsqdfdsdfgw", "dgfdgdfsqdfsfgs"],
  },
  {
    name: "directornameThree",
    firstname: "fdfdsFsd",
    moovies: ["dsgqfdsSFdsdgdfgw", "dgfdsdfgdfgs"],
  },
);

// CREATION MOOVIE

db.collection("moovie").insertMany(
  {
    title: "directornameOne",
    actor: "directorfirstnameOne",
    director: ["dsgqdgdfgw", "dgfdgdfgs"],
    description: "sfdsdfgsdFdsfs",
  },
  {
    title: "directornameOne",
    actor: "directorfirstnameOne",
    director: ["dsgqdgdfgw", "dgfdgdfgs"],
    description: "sfdsdfgsdFdsfs",
  },
  {
    title: "directornameOne",
    actor: "directorfirstnameOne",
    director: ["dsgqdgdfgw", "dgfdgdfgs"],
    description: "sfdsdfgsdFdsfs",
  },
);
