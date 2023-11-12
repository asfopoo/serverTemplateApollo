import { mergeResolvers } from '@graphql-tools/merge';

import authResolvers from './authResolvers.js';
import userResolvers from './userResolvers.js';

const resolvers = mergeResolvers([authResolvers, userResolvers]);

export default resolvers;