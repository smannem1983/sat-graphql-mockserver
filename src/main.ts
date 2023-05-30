import gql from 'graphql-tag';
import { createYoga } from 'graphql-yoga';
import { createServer } from 'http';
import { makeExecutableSchema } from "@graphql-tools/schema";
import { DateTimeTypeDefinition } from "graphql-scalars";
import { readFileSync } from 'fs';
import { aTourAvailabilityDate, aTourData } from './mocks/generated-mocks';
 
function main() {
    const typeDefs = gql(
        readFileSync('./src/schema.graphql', {
          encoding: 'utf-8',
        }),
      );
    const resolvers = {
        Query: {
            getAvailableDates: () => aTourData(),
            getAvailableTimes: () => aTourAvailabilityDate()
        }
      }
    const schema = makeExecutableSchema({
        typeDefs: [typeDefs, DateTimeTypeDefinition],
        resolvers: [resolvers]
      })
  const yoga = createYoga({ schema })
  const server = createServer(yoga)
  server.listen(4000, () => {
    console.info('Server is running on http://localhost:4000/graphql')
  })
}
 
void main();