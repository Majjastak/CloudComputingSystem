// redisClient.mjs
import { createClient } from "redis";

const client = await createClient({ url: "redis://feature-redis" })
  .on("error", (error) => console.log(error))
  .connect();

export async function getKey(key) {
  return await client.get(key);
}

export async function setKey(key, value) {
  await client.set(key, value);
}
