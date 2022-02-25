import * as mongo from "mongodb";

export const actorValidator = {
  // write your validator here
  validator: {
    $jsonSchema: {
      additionalProperties: false,
      bsonType: "object",
      required: ["name", "firstname", "moovies"],
      properties: {
        _id: {
          bsonType: "objectId",
          description: "required field _id which can be only an objectId",
        },
        name: {
          bsonType: "string",
          description: "required field title which can be only a string",
        },
        firstname: {
          bsonType: "string",
          description: "required field author which can be only a string",
        },
        moovies: {
          bsonType: "string",
          description: "required field author which can be only a string",
        },
      },
    },
  },
};

export function createBooksCollection(db: mongo.Db): Promise<mongo.Collection> {
  return db.createCollection("moovie", actorValidator);
}
