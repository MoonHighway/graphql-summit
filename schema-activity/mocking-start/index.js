const { ApolloServer } = require('apollo-server')

const typeDefs = `
    type Query {
        hello: String
    }
`

const resolvers = {
    Query: {
        hello: () => "hello world!"
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers
})

server.listen().then(() => console.log(`Server Running on port 4000`))