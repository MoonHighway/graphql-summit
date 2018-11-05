# Advanced Queries

## Query Arguments

- Every field can get its own set of arguments.
- We'll start by passing a value with Lift to filter the lifts list and only show the panorama lift.

```graphql
query {
  Lift(id: "panorama") {
    name
    capacity
  }
  liftCount(status: HOLD)
  trailCount(status: OPEN)
}
```

## Aliases

- Another feature of the graphql query language are aliases - they let you rename the result of a field to anything you want.

```graphql
   closedLifts:liftCount(status: CLOSED)
```

```graphql
 Lift(id:"panorama") {
    name
    capacity
  }

  Lift(id: "astra-express") {
    name
    capacity
  }
```

## Query Variables

```graphql
query openLifts($status: String!) {
  liftCount(status: $status)
}
```

```json
{
  "status": "OPEN"
}
```

## Default Query Variables

```graphql
query openLiftsTrails($status: LiftStatus = OPEN) {
  liftCount(status: $status)
}
```

## Fragments

```graphql
query {
  allLifts {
    ...LiftDetails
    elevationGain
    trailAccess {
      ...TrailDetails
    }
  }
  allTrails {
    ...TrailDetails
    night
    accessedByLifts {
      ...LiftDetails
    }
  }
}

fragment LiftDetails on Lift {
  name
  status
  capacity
}

fragment TrailDetails on Trail {
  name
  difficulty
  groomed
}
```
