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

`
