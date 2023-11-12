import { mergeTypeDefs } from '@graphql-tools/merge';

import authTypeDefs from './authTypeDefs.js';
import userTypeDefs from './userTypeDefs.js';
import types from './types.js';

const typeDefs = mergeTypeDefs([authTypeDefs, userTypeDefs, types]);

export default typeDefs;