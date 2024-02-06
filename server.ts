import { ApolloServer } from '@apollo/server';
import { buildSubgraphSchema } from '@apollo/subgraph';
import { resolvers } from './src/resolvers';
import { schema } from './src/schema';
import { startStandaloneServer } from '@apollo/server/standalone';
import dotenv from 'dotenv';
dotenv.config();

const PORT = parseInt(process.env.PORT!) || 4000;

async function bootstrap() {

  const server = new ApolloServer({
    schema: buildSubgraphSchema({
      typeDefs: schema,
      resolvers,
    })
  })

  const { url } = await startStandaloneServer(server, {
    listen: {
      port: PORT
    }
  })
  console.log(`GraphQL Server started at ${url}!!!`);
}

bootstrap();