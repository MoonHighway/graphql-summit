# Sample Queries for Snowtooth API

**Snowtooth Playground: [http://snowtooth.moonhighway.com](http://snowtooth.moonhighway.com)**

## Queries

```graphql
query {
  allLifts {
    name
    status
    capacity
  }
}
```

## Operation Names

- Add the operation name

```graphql
query lifts {
  allLifts {
    name
    status
    capacity
  }
}
```

```graphql
query {
  allTrails {
    name
    difficulty
  }
}
```

```graphql
query liftsAndTrails {
  allLifts {
    name
    status
    capacity
    night
    elevationGain
  }
  allTrails {
    name
    difficulty
  }
}
```

## Connections

- Lift connections

```graphql
query lifts {
  lifts: allLifts {
    name
    status
    capacity
    trailAccess {
      name
      status
    }
  }
  allTrails {
    name
    difficulty
    accessedByLifts {
      name
    }
}
```
