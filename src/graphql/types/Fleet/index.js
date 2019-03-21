import { gql } from 'apollo-server-express'

// Construct a schema with gql and using the GraphQL schema language
const typeDefs = gql`
  type Fleet {
    _id: String
    fleetname: String
    fleetinfo: String
    contactname: String
    longitude: Int
    latitude: Int
    mobile: String
    category: [Category]
  }
  type Query {
    getFleetbyId(_id: ID!): [Fleet!]!
    getFleets: [Fleet]
  }

  type Mutation {
    createFleet(fleet: CreateFleetInput): Fleet!
    updateFleet(_id: ID!, fleet: UpdateFleetInput): Fleet!
    deleteFleet(_id: ID!): Fleet!
  }

  type Subscription {
    fleet: FleetSubscriptionPayload!
  }

  type FleetSubscriptionPayload {
    mutation: MutationType!
    fleet: Fleet!
  }

  input CreateFleetInput {
    fleetname: String!
    fleetinfo: String!
    contactname: String!
    longitude: Int!
    latitude: Int!
    mobile: String!
    category: [Category]!
  }

  input UpdateFleetInput {
    fleetname: String
    fleetinfo: String
    contactname: String
  }

  enum MutationType {
    CREATED
    DELETED
    UPDATED
  }
  enum Category {
    car
    truck
  }
`

export default typeDefs
