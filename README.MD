# GraphQL Summit Bootcamp -- November 6, 2018

Welcome to the GraphQL Workshop at GraphQL Summit!

## Resources

### GraphQL Overview and Query Language

- [Slides](https://slides.com/moonhighway/graphql-workshop)
- [Snowtooth API](http://snowtooth.herokuapp.com)
- [Github GraphQL Explorer](https://developer.github.com/v4/explorer/)
- [SWAPI: Star Wars API](http://graphql.org/swapi-graphql/)

### GraphQL Schema Definition Language

- [Schema Cheat Sheet](https://github.com/sogko/graphql-schema-language-cheat-sheet)
- [Through Types](https://codesandbox.io/s/5vzn2rkzxn)
- [Nullable vs Non-nullable - Start](https://codesandbox.io/s/p3mzqzl9nq)

## Schema Activity

- [Mocking - Start](https://github.com/moonhighway/graphql-summit/blob/master/schema-activity/mocking-start/index.js)
- [Lab](https://github.com/moonhighway/graphql-summit/blob/master/schema-activity/mocking-start/index.js)

## Schema Enhancements

- [Union Types](https://codesandbox.io/s/rm2rx3opqm)
- [Unions Lab](https://github.com/eveporcello/schema-workshop/blob/master/04-schema-enhancements/unions/unions-start.js)
- [Interfaces](https://codesandbox.io/s/71x8n304r1)
- [Interfaces Lab](https://github.com/eveporcello/schema-workshop/blob/master/04-schema-enhancements/interfaces/interfaces-start.js)
- [MutationResponse Interfaces](https://glitch.com/edit/#!/graphql-interfaces)
- [Deprecated Directive](https://codesandbox.io/s/kwxm244wno)
- [Custom Scalars - Pets](https://codesandbox.io/s/pw32jkj04j)
- [Custom Scalars - Crypto](https://codesandbox.io/s/53o3pmy43n)

### GraphQL APIs

- [Song-Performers URL](https://kq5zzqkrl7.lp.gql.zone/graphql)
- [GitHub API](https://developer.github.com/v4/): GitHub's public API
- [SWAPI](https://graphql.org/swapi-graphql/): The Star Wars API
- [Public GraphQL APIs](https://graphql.org/community): A list of public APIs that can be queried with GraphQL

### GraphQL Clients

- [Apollo Client](https://www.apollographql.com/docs/react/): The GraphQL client developed by Meteor Development Group
- [Relay](https://facebook.github.io/relay/): Facebook's GraphQL client library
- [urql](https://github.com/FormidableLabs/urql): Formidable Labs' minimal React Query Library

### Client Examples

- curl Request

```
curl -X POST \
     -H "Content-Type: application/json" \
     --data '{ "query": "{allLifts{name}}" }' \
     http://localhost:4000/graphql
```

- [Fetch Sample](https://codesandbox.io/s/wy9mq00q9w)
- [graphql-request](https://codesandbox.io/s/4qzq5z2vz0)
- [Lab Start](https://codesandbox.io/s/kmmz8om2xv)
- [Lab Finished](https://codesandbox.io/s/q8l7wp6m0w)

### Apollo Client Examples

- [Simple Apollo Setup](https://codesandbox.io/s/3q245om1q6)
- [Sending Client Queries](https://codesandbox.io/s/4xnkxmnw7w)
- [writeQuery](https://codesandbox.io/s/oo3z008kzy)

### Apollo Link Examples

- [Observable Intro](https://codesandbox.io/s/176q4zpl4)
- [Observable + Link](https://codesandbox.io/s/ql5xqkojyj)
- [HTTP Link](https://codesandbox.io/s/koj24j5l07)
- [Concatenating Links](https://codesandbox.io/s/ql4jlz54yq)

### Additional Samples

- [Apollo REST DataSources](https://glitch.com/edit/#!/apollo-rest-datasources)
- [Apollo Engine](https://www.apollographql.com/engine)

### Finished Files

- [Backend Project](https://github.com/eveporcello/snowtooth-api)
- [Frontend Project](https://github.com/eveporcello/snowtooth-ui)

### Evaluation

- [MidClass Evaluation Form](https://docs.google.com/forms/d/e/1FAIpQLSeODnYvcjMUNBb69eIzZRhSgJW1n3o5Ld3qWoPOp6aLHh9N1w/viewform?usp=sf_link)
- [Final Evaluation Form](https://docs.google.com/forms/d/e/1FAIpQLScE7byI8t2YewMqeSufvJ96-QMnDkrqU9Yg4rKvA7U4QVyMlg/viewform?usp=sf_link)

### Instructor Info

- Eve Porcello: [@eveporcello](https://twitter.com/eveporcello), Alex Banks [@moontahoe](https://twitter.com/moontahoe)
- [eve@moonhighway.com](mailto:eve@moonhighway.com), [alex@moonhighway.com](mailto:alex@moonhighway.com)
- [GraphQL Workshop](https://www.graphqlworkshop.com)
- [Moon Highway](https://www.moonhighway.com)
