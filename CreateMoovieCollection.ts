import * as mongo from "mongodb";

export const moovieValidator = {
  // write your validator here
  validator: {
    $jsonSchema: {
      additionalProperties: false,
      bsonType: "object",
      required: ["_id", "title", "actor", "director", "description"],
      properties: {
        _id: {
          bsonType: "objectId",
          description: "required field _id which can be only an objectId",
        },
        title: {
          bsonType: "string",
          description: "required field title which can be only a string",
        },
        actor: {
          bsonType: "string",
          description: "required field author which can be only a string",
        },
        director: {
          bsonType: "string",
          description: "required field description which can be only a string of 100 characters max",
        },
        description: {
          bsonType: "string",
          description: "required field description which can be only a string of 100 characters max",
        },
      },
    },
  },
};

export function createBooksCollection(db: mongo.Db): Promise<mongo.Collection> {
  return db.createCollection("moovie", moovieValidator);
}
