import { mergeResolvers } from "merge-graphql-schemas";

import Fleet from "./Fleet/";

const resolvers = [Fleet];

export default mergeResolvers(resolvers);
