import Fastify from "fastify";

const fastify = Fastify({ logger: true });

fastify.get("/", async () => {
  // debugger;

  return { hello: "Hello docker compose-postgres!" };
});

const port = process.env.PORT ?? 8080;
const start = async () => {
  try {
    await fastify.listen(port, '0.0.0.0');
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();