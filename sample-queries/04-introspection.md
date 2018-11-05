# Introspection

## Introspection

- types

```graphql
{
  __schema {
    types {
      name
      description
    }
  }
}
```

- `queryType`

```graphql
{
  __schema {
    queryType {
      name
      fields {
        name
      }
    }
  }
}
```

- Individual Types

```graphql
{
  __type(name: "Lift") {
    name
    description
    fields {
      name
    }
  }
}
```
