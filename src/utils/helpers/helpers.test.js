/* eslint-disable jest/valid-title */
import { fetchWithRetry } from ".";

test("test fetchWithRetry", () => {
  let url = "https://dummyjson.com/product";
  let option = {};
  let retry = 3;
  let retryDelay = 1000;
  expect(
    Promise.resolve(fetchWithRetry(url, option, retry, retryDelay))
  ).resolves.toBeInstanceOf(Promise);
});
