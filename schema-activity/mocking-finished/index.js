const { ApolloServer, MockList } = require('apollo-server')
const faker = require('faker')

const typeDefs = `
    type Cat {
        id: ID!
        name: String!
        age: Int!
        nice: Boolean
    }
    type Horse {
        id: ID!
        name: String!
        age: Int!
        description: String
    }
    type Query {
        allCats: [Cat!]!
        allHorses: [Horse!]!
    }
`

const horseDescriptions = ["majestic", "honorable", "street smart"]

const mocks = {
    Query: () => ({
        allCats: () => new MockList([1, 20])
    }),
    Horse: () => ({
        description: () => faker.random.arrayElement(horseDescriptions)
    }),
    ID: () => faker.random.uuid(),
    Int: () => faker.random.number({ min: 1, max: 25 }),
    String: () => faker.name.firstName(),
    Boolean: () => faker.random.boolean()
}

const resolvers = {
    Query: {
        allCats: () => ([{
            id: 1,
            name: "Meatball"
        }])
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers,
    mocks,
    mockEntireSchema: false
})

server.listen()
    .then(console.log(`Server running on port 4000`))