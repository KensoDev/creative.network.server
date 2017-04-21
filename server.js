import express from 'express';
import { apolloExpress, graphiqlExpress } from 'apollo-server';
import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';
import bodyParser from 'body-parser';
import schema from './data/schema.graphql';
import mocks from './data/mocks';

const APP_PORT = 3000;

const executableSchema = makeExecutableSchema({
  typeDefs: schema,
});

addMockFunctionsToSchema({
  schema: executableSchema,
  mocks: mocks,
  preserveResolvers: true,
});

const graphQLServer = express();

graphQLServer.use('/graphql', bodyParser.json(), apolloExpress({
  schema: executableSchema,
  context: {},
}));

graphQLServer.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql',
}));

graphQLServer.get('/', (req, res) => {
  res.send('Hello World!');
});

graphQLServer.listen(APP_PORT, () => {
  console.log('Example app listening on port 3000!');
});
