import CryptoJs from "crypto-js";
import { expect, it, afterAll, beforeAll, afterEach, beforeEach } from "vitest";
import { encryptedMessage, encryptedMessagePromise } from "./testAsync";

beforeAll(() => {
  console.log("Before all");
});
beforeEach(() => {
  console.log("Before each task");
});

afterEach(() => {
  console.log("After each task");
});

afterAll(() => {
  console.log("After all");
});

it("should encrypt a message", async () => {
  const message = "The lazy dog";
  const secretKey = "425958";

  const encryptedData = await new Promise((resolve, reject) => {
    encryptedMessage(message, secretKey, (message) => {
      resolve(message);
    });
  });
  expect(encryptedData).toBeDefined();
});

it("should encrypt the message", async () => {
  const message = "The lazy dog";
  const secretKey = "425958";

  const encryptedData = await encryptedMessagePromise(message, secretKey);
  expect(encryptedData).toBeDefined();
});

it("should encrypt the message correctly", async () => {
  const message = "The lazy dog";
  const secretKey = "425958";

  const encryptedData = await encryptedMessagePromise(message, secretKey);
  expect(encryptedData).toBeDefined();

  const decryptedMessage = CryptoJs.AES.decrypt(
    encryptedData,
    secretKey
  ).toString(CryptoJs.enc.Utf8);
  console.log(decryptedMessage);
  expect(decryptedMessage).toBe(message);
});
