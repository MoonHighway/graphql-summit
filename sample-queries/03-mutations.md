# Mutations & Subscriptions

## Mutations

- Run the Mutation

```graphql
mutation PanoramaUpdate {
  setLiftStatus(id: "panorama", status: "CLOSED") {
    name
    status
  }
}
```

- Test the Query

```graphql
query {
  Lift(id: "panorama") {
    name
    status
  }
}
```

- Replace with variables

```graphql
mutation PanoramaUpdate($id: ID!, $status: String!) {
  setLiftStatus(id: $id, status: $status) {
    name
    status
  }
}
```

- input JSON

```json
{
  "id": "panorama",
  "status": "HOLD"
}
```

## Subscriptions

```graphql
subscription {
  liftStatusChange {
    name
    status
  }
}
```

- Run Panorama Update again
- See subscriptions work
