export default `
 type Fleet {
    _id: String
    fleetname: String
    fleetinfo: String
    contactname: String
    longitude: Int
    latitude: Int
    mobile: String
    category: String
  }
    type Query {
      fleet(_id: ID!): [Fleet!]! 
      fleets: [Fleet!]!
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
    category: String!
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
`;
