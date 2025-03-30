import { exampleClient } from "./exampleInit";

const generateFakeUserProfiles = () => {
  return exampleClient.generate({
    prompt: "Generate user profile who can european user",
    schema: {
      array: {
        object: {
          userId: {type: "string", description: "uuidv4"},
          name: {
            object: {
              firstName: "string",
              lastName: "string",
            },
          },
          contact: {
            object: {
              email: "string",
              phone: {type: "string"},
            },
          },
          address: {
            object: {
              street: "string",
              city: "string",
              state: "string",
              zipCode: "string",
            },
          },
          preferences: {
            object: {
              language: "string",
              currency: "string",
            },
          },
          accountStatus: {
            object: {
              status: "string",
              lastLogin: { type: "Date", description: "Last login date" },
            },
          },
        },
      },
      length: 10,
    },
  });
};

const userProfiles = generateFakeUserProfiles();
console.log(userProfiles);