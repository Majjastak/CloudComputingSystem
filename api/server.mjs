import Fastify from "fastify";

export function createServer() {
  const fastify = Fastify();

  fastify.get("/", async function handler(request, reply) {
    const { code } = request.params;
    return reply.send("sdfghj");
  });

  fastify.get("/feature/", async function handler(request, reply) {
    const { code } = request.params;
    return reply.send({ code, enabled: true });
  });

  return fastify;
}
