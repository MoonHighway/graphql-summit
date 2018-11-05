Schema Lab
====
*An Introduction to Schema Mocking*

Creating a Server
-----------
* Create folder
* `npm init -y`
* `npm install apollo-server graphql nodemon`
* Update npm scripts

```json
"start": "nodemon . -e graphql,js,json"
```

## Create the Server
* Add the Mocks Key

```javascript
const { ApolloServer } = require('apollo-server')

const typeDefs = `
    type Query {
        hello: String!
    }
`

const server = new ApolloServer({
    typeDefs,
    mocks: true
})

server.listen()
    .then(console.log(`Server running on port 4000`))
```

* Run `npm start`
* Run a hello world query

```graphql
query {
    hello
}
```

## Adding Types

```javascript
const typeDefs = `
    type Cat {
        id: ID!
        name: String!
        age: Int!
        nice: Boolean
    }
    type Query {
        allCats: [Cat!]!
    }
`
```

## Customize Mocks By Type

```javascript
const mocks = {
    ID: () => "32",
    Int: () => 6,
    String: () => 'Biscuit',
    Boolean: () => true
}

const server = new ApolloServer({
    typeDefs,
    mocks
})
```

## Incorporating Faker

* `npm install faker`
* Require faker
* Add mocks

```javascript
const faker = require('faker')

const mocks = {
    ID: () => faker.random.uuid(),
    Int: () => faker.random.number({ min: 1, max: 25 }),
    String: () => faker.name.firstName(),
    Boolean: () => faker.random.boolean()
}
```

## Type Mocks

```graphql
type Horse {
    id: ID!
    name: String!
    age: Int!
    description: String
}
```

```javascript
const horseDescriptions = ["majestic", "honorable", "street smart"]

const mocks = {
    Horse: () => ({
        description: () => faker.random.arrayElement(horseDescriptions)
    }),
    ID: () => faker.random.uuid(),
    Int: () => faker.random.number({ min: 1, max: 25 }),
    String: () => faker.name.firstName()
}
```

## Mock Lists
* Lists will always return 2, set up a mock list
* require MockList

```javascript
const { ApolloServer, MockList } = require('apollo-server')

const mocks = {
    Query: () => ({
        allCats: () => new MockList([1, 20])
    })
    ...
}
```

## Using Existing Resolvers with Mocks

* Create resolvers

```javascript
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
    mocks
})
```
* Notice that the mocks are overriding here
* Add one key to server config

```javascript
    mockEntireSchema: false
```



