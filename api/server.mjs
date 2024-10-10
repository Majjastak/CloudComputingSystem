import Fastify from "fastify";
import { FeatureStore } from "./featureStore.mjs";

export function createServer() {
  const fastify = Fastify();
  const featureStore = new FeatureStore();

  fastify.get("/", async function handler(request, reply) {
    const { code } = request.params;
    return reply.send("sdfghj");
  });

  fastify.get("/feature/:code", async function handler(request, reply) {
    const { code } = request.params;
    return reply.send({ code, enabled: featureStore.getFeatureKey(code) });
  });

  return fastify;
}
